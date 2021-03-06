import {
    AppInterface,
    NextInterface,
    EngineInterface,
    OptionsInterface,
    EventInterface,
    MiddleHandlerInterface,
    MiddleOptionsInterface,
    ApplicationInterface
} from '../types';
import { randomKey, getDevice } from '../util';

let Application = <ApplicationInterface>function() {
    //   最常用的是向 wallEvent 添加东西
    let app = <AppInterface>function(wallEvent: EventInterface) {
        wallEvent.options = app.options;
        let index: number = 0;
        let next: NextInterface = (error?: string) => {
            let layer: MiddleOptionsInterface = app.routes[index++];
            if (layer) {
                if (error) {
                    //  如果有错误，需要走错误接口
                    if (
                        layer.method === 'middle' &&
                        layer.handler.length === 3
                    ) {
                        return layer.handler(wallEvent, next, error);
                    } else {
                        next(error);
                    }
                } else {
                    if (layer.method === 'middle') {
                        if (layer.pathname === '/') {
                            return layer.handler(wallEvent, next);
                        } else {
                            next();
                        }
                    }
                }
            }
        };
        // 首次执行;
        next();
    };
    app.options = {
        project_id: 0,
        origin: '',
        isTest: false,
        frequency: 1
    };
    app.routes = [];
    // 中间件
    app.use = (handler: MiddleHandlerInterface) => {
        app.routes.push({
            method: 'middle',
            pathname: '/',
            handler
        } as MiddleOptionsInterface);
        return this;
    };
    app.listen = function(instance: Array<EngineInterface>) {};

    // 初始化参数
    app.init = (options: OptionsInterface) => {
        // 检测options
        if (!options.project_id) {
            throw new Error('缺少项目project_id');
        }
        if (!options.origin) {
            throw new Error('缺少参数origin');
        }
        if (!options.frequency) {
            throw new Error('缺少参数frequency');
        }
        //设置userid
        if (!options.userId) {
            let randomUserID: string;
            let localWallUserID: string = localStorage.getItem('WALLUSERID');
            let randomUuid: string = localStorage.getItem('WALLUUID'); // 设备id
            if (!localWallUserID) {
                randomUserID = 'wall_' + randomKey(32);
                localStorage.setItem('WALLUSERID', randomUserID);
            } else {
                randomUserID = localWallUserID;
            }

            if (!randomUuid) {
                randomUuid = 'wall_uuid' + randomKey(32);
                localStorage.setItem('WALLUUID', randomUuid);
            }
            options.userId = randomUserID;
            options.uuid = randomUuid;
        }
        let myOptions = { ...app.options, ...options };
        window.WALL_OPTIONS = myOptions;
        app.options = myOptions;
    };
    return app;
};

export default Application;
