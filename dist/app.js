!(function(e) {
    var t = {};
    function n(r) {
        if (t[r]) return t[r].exports;
        var o = (t[r] = { i: r, l: !1, exports: {} });
        return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    (n.m = e),
        (n.c = t),
        (n.d = function(e, t, r) {
            n.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: r });
        }),
        (n.r = function(e) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module'
                }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (n.t = function(e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (
                (n.r(r),
                Object.defineProperty(r, 'default', {
                    enumerable: !0,
                    value: e
                }),
                2 & t && 'string' != typeof e)
            )
                for (var o in e)
                    n.d(
                        r,
                        o,
                        function(t) {
                            return e[t];
                        }.bind(null, o)
                    );
            return r;
        }),
        (n.n = function(e) {
            var t =
                e && e.__esModule
                    ? function() {
                          return e.default;
                      }
                    : function() {
                          return e;
                      };
            return n.d(t, 'a', t), t;
        }),
        (n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = ''),
        n((n.s = 10));
})([
    function(e, t) {
        e.exports = function(e, t) {
            if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
        };
    },
    function(e, t) {
        function n(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    'value' in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
            }
        }
        e.exports = function(e, t, r) {
            return t && n(e.prototype, t), r && n(e, r), e;
        };
    },
    function(e, t, n) {
        (function(t) {
            var n;
            e.exports = (function e(t, r, o) {
                function i(u, c) {
                    if (!r[u]) {
                        if (!t[u]) {
                            if (!c && 'function' == typeof n && n)
                                return n(u, !0);
                            if (a) return a(u, !0);
                            var s = new Error("Cannot find module '" + u + "'");
                            throw ((s.code = 'MODULE_NOT_FOUND'), s);
                        }
                        var f = (r[u] = { exports: {} });
                        t[u][0].call(
                            f.exports,
                            function(e) {
                                var n = t[u][1][e];
                                return i(n || e);
                            },
                            f,
                            f.exports,
                            e,
                            t,
                            r,
                            o
                        );
                    }
                    return r[u].exports;
                }
                for (
                    var a = 'function' == typeof n && n, u = 0;
                    u < o.length;
                    u++
                )
                    i(o[u]);
                return i;
            })(
                {
                    1: [
                        function(e, n, r) {
                            (function(e) {
                                'use strict';
                                var t,
                                    r,
                                    o =
                                        e.MutationObserver ||
                                        e.WebKitMutationObserver;
                                if (o) {
                                    var i = 0,
                                        a = new o(f),
                                        u = e.document.createTextNode('');
                                    a.observe(u, { characterData: !0 }),
                                        (t = function() {
                                            u.data = i = ++i % 2;
                                        });
                                } else if (
                                    e.setImmediate ||
                                    void 0 === e.MessageChannel
                                )
                                    t =
                                        'document' in e &&
                                        'onreadystatechange' in
                                            e.document.createElement('script')
                                            ? function() {
                                                  var t = e.document.createElement(
                                                      'script'
                                                  );
                                                  (t.onreadystatechange = function() {
                                                      f(),
                                                          (t.onreadystatechange = null),
                                                          t.parentNode.removeChild(
                                                              t
                                                          ),
                                                          (t = null);
                                                  }),
                                                      e.document.documentElement.appendChild(
                                                          t
                                                      );
                                              }
                                            : function() {
                                                  setTimeout(f, 0);
                                              };
                                else {
                                    var c = new e.MessageChannel();
                                    (c.port1.onmessage = f),
                                        (t = function() {
                                            c.port2.postMessage(0);
                                        });
                                }
                                var s = [];
                                function f() {
                                    var e, t;
                                    r = !0;
                                    for (var n = s.length; n; ) {
                                        for (t = s, s = [], e = -1; ++e < n; )
                                            t[e]();
                                        n = s.length;
                                    }
                                    r = !1;
                                }
                                n.exports = function(e) {
                                    1 !== s.push(e) || r || t();
                                };
                            }.call(
                                this,
                                void 0 !== t
                                    ? t
                                    : 'undefined' != typeof self
                                    ? self
                                    : 'undefined' != typeof window
                                    ? window
                                    : {}
                            ));
                        },
                        {}
                    ],
                    2: [
                        function(e, t, n) {
                            'use strict';
                            var r = e(1);
                            function o() {}
                            var i = {},
                                a = ['REJECTED'],
                                u = ['FULFILLED'],
                                c = ['PENDING'];
                            function s(e) {
                                if ('function' != typeof e)
                                    throw new TypeError(
                                        'resolver must be a function'
                                    );
                                (this.state = c),
                                    (this.queue = []),
                                    (this.outcome = void 0),
                                    e !== o && h(this, e);
                            }
                            function f(e, t, n) {
                                (this.promise = e),
                                    'function' == typeof t &&
                                        ((this.onFulfilled = t),
                                        (this.callFulfilled = this.otherCallFulfilled)),
                                    'function' == typeof n &&
                                        ((this.onRejected = n),
                                        (this.callRejected = this.otherCallRejected));
                            }
                            function l(e, t, n) {
                                r(function() {
                                    var r;
                                    try {
                                        r = t(n);
                                    } catch (t) {
                                        return i.reject(e, t);
                                    }
                                    r === e
                                        ? i.reject(
                                              e,
                                              new TypeError(
                                                  'Cannot resolve promise with itself'
                                              )
                                          )
                                        : i.resolve(e, r);
                                });
                            }
                            function d(e) {
                                var t = e && e.then;
                                if (
                                    e &&
                                    ('object' == typeof e ||
                                        'function' == typeof e) &&
                                    'function' == typeof t
                                )
                                    return function() {
                                        t.apply(e, arguments);
                                    };
                            }
                            function h(e, t) {
                                var n = !1;
                                function r(t) {
                                    n || ((n = !0), i.reject(e, t));
                                }
                                function o(t) {
                                    n || ((n = !0), i.resolve(e, t));
                                }
                                var a = v(function() {
                                    t(o, r);
                                });
                                'error' === a.status && r(a.value);
                            }
                            function v(e, t) {
                                var n = {};
                                try {
                                    (n.value = e(t)), (n.status = 'success');
                                } catch (e) {
                                    (n.status = 'error'), (n.value = e);
                                }
                                return n;
                            }
                            (t.exports = s),
                                (s.prototype.catch = function(e) {
                                    return this.then(null, e);
                                }),
                                (s.prototype.then = function(e, t) {
                                    if (
                                        ('function' != typeof e &&
                                            this.state === u) ||
                                        ('function' != typeof t &&
                                            this.state === a)
                                    )
                                        return this;
                                    var n = new this.constructor(o);
                                    return (
                                        this.state !== c
                                            ? l(
                                                  n,
                                                  this.state === u ? e : t,
                                                  this.outcome
                                              )
                                            : this.queue.push(new f(n, e, t)),
                                        n
                                    );
                                }),
                                (f.prototype.callFulfilled = function(e) {
                                    i.resolve(this.promise, e);
                                }),
                                (f.prototype.otherCallFulfilled = function(e) {
                                    l(this.promise, this.onFulfilled, e);
                                }),
                                (f.prototype.callRejected = function(e) {
                                    i.reject(this.promise, e);
                                }),
                                (f.prototype.otherCallRejected = function(e) {
                                    l(this.promise, this.onRejected, e);
                                }),
                                (i.resolve = function(e, t) {
                                    var n = v(d, t);
                                    if ('error' === n.status)
                                        return i.reject(e, n.value);
                                    var r = n.value;
                                    if (r) h(e, r);
                                    else {
                                        (e.state = u), (e.outcome = t);
                                        for (
                                            var o = -1, a = e.queue.length;
                                            ++o < a;

                                        )
                                            e.queue[o].callFulfilled(t);
                                    }
                                    return e;
                                }),
                                (i.reject = function(e, t) {
                                    (e.state = a), (e.outcome = t);
                                    for (
                                        var n = -1, r = e.queue.length;
                                        ++n < r;

                                    )
                                        e.queue[n].callRejected(t);
                                    return e;
                                }),
                                (s.resolve = function(e) {
                                    return e instanceof this
                                        ? e
                                        : i.resolve(new this(o), e);
                                }),
                                (s.reject = function(e) {
                                    var t = new this(o);
                                    return i.reject(t, e);
                                }),
                                (s.all = function(e) {
                                    var t = this;
                                    if (
                                        '[object Array]' !==
                                        Object.prototype.toString.call(e)
                                    )
                                        return this.reject(
                                            new TypeError('must be an array')
                                        );
                                    var n = e.length,
                                        r = !1;
                                    if (!n) return this.resolve([]);
                                    for (
                                        var a = new Array(n),
                                            u = 0,
                                            c = -1,
                                            s = new this(o);
                                        ++c < n;

                                    )
                                        f(e[c], c);
                                    return s;
                                    function f(e, o) {
                                        t.resolve(e).then(
                                            function(e) {
                                                (a[o] = e),
                                                    ++u !== n ||
                                                        r ||
                                                        ((r = !0),
                                                        i.resolve(s, a));
                                            },
                                            function(e) {
                                                r || ((r = !0), i.reject(s, e));
                                            }
                                        );
                                    }
                                }),
                                (s.race = function(e) {
                                    var t = this;
                                    if (
                                        '[object Array]' !==
                                        Object.prototype.toString.call(e)
                                    )
                                        return this.reject(
                                            new TypeError('must be an array')
                                        );
                                    var n = e.length,
                                        r = !1;
                                    if (!n) return this.resolve([]);
                                    for (
                                        var a, u = -1, c = new this(o);
                                        ++u < n;

                                    )
                                        (a = e[u]),
                                            t.resolve(a).then(
                                                function(e) {
                                                    r ||
                                                        ((r = !0),
                                                        i.resolve(c, e));
                                                },
                                                function(e) {
                                                    r ||
                                                        ((r = !0),
                                                        i.reject(c, e));
                                                }
                                            );
                                    return c;
                                });
                        },
                        { 1: 1 }
                    ],
                    3: [
                        function(e, n, r) {
                            (function(t) {
                                'use strict';
                                'function' != typeof t.Promise &&
                                    (t.Promise = e(2));
                            }.call(
                                this,
                                void 0 !== t
                                    ? t
                                    : 'undefined' != typeof self
                                    ? self
                                    : 'undefined' != typeof window
                                    ? window
                                    : {}
                            ));
                        },
                        { 2: 2 }
                    ],
                    4: [
                        function(e, t, n) {
                            'use strict';
                            var r =
                                    'function' == typeof Symbol &&
                                    'symbol' == typeof Symbol.iterator
                                        ? function(e) {
                                              return typeof e;
                                          }
                                        : function(e) {
                                              return e &&
                                                  'function' == typeof Symbol &&
                                                  e.constructor === Symbol &&
                                                  e !== Symbol.prototype
                                                  ? 'symbol'
                                                  : typeof e;
                                          },
                                o = (function() {
                                    try {
                                        if ('undefined' != typeof indexedDB)
                                            return indexedDB;
                                        if (
                                            'undefined' !=
                                            typeof webkitIndexedDB
                                        )
                                            return webkitIndexedDB;
                                        if ('undefined' != typeof mozIndexedDB)
                                            return mozIndexedDB;
                                        if ('undefined' != typeof OIndexedDB)
                                            return OIndexedDB;
                                        if ('undefined' != typeof msIndexedDB)
                                            return msIndexedDB;
                                    } catch (e) {
                                        return;
                                    }
                                })();
                            function i(e, t) {
                                (e = e || []), (t = t || {});
                                try {
                                    return new Blob(e, t);
                                } catch (o) {
                                    if ('TypeError' !== o.name) throw o;
                                    for (
                                        var n = new ('undefined' !=
                                            typeof BlobBuilder
                                                ? BlobBuilder
                                                : 'undefined' !=
                                                  typeof MSBlobBuilder
                                                ? MSBlobBuilder
                                                : 'undefined' !=
                                                  typeof MozBlobBuilder
                                                ? MozBlobBuilder
                                                : WebKitBlobBuilder)(),
                                            r = 0;
                                        r < e.length;
                                        r += 1
                                    )
                                        n.append(e[r]);
                                    return n.getBlob(t.type);
                                }
                            }
                            'undefined' == typeof Promise && e(3);
                            var a = Promise;
                            function u(e, t) {
                                t &&
                                    e.then(
                                        function(e) {
                                            t(null, e);
                                        },
                                        function(e) {
                                            t(e);
                                        }
                                    );
                            }
                            function c(e, t, n) {
                                'function' == typeof t && e.then(t),
                                    'function' == typeof n && e.catch(n);
                            }
                            function s(e) {
                                return (
                                    'string' != typeof e &&
                                        (console.warn(
                                            e +
                                                ' used as a key, but it is not a string.'
                                        ),
                                        (e = String(e))),
                                    e
                                );
                            }
                            function f() {
                                if (
                                    arguments.length &&
                                    'function' ==
                                        typeof arguments[arguments.length - 1]
                                )
                                    return arguments[arguments.length - 1];
                            }
                            var l = 'local-forage-detect-blob-support',
                                d = void 0,
                                h = {},
                                v = Object.prototype.toString,
                                p = 'readonly',
                                y = 'readwrite';
                            function m(e) {
                                return 'boolean' == typeof d
                                    ? a.resolve(d)
                                    : (function(e) {
                                          return new a(function(t) {
                                              var n = e.transaction(l, y),
                                                  r = i(['']);
                                              n.objectStore(l).put(r, 'key'),
                                                  (n.onabort = function(e) {
                                                      e.preventDefault(),
                                                          e.stopPropagation(),
                                                          t(!1);
                                                  }),
                                                  (n.oncomplete = function() {
                                                      var e = navigator.userAgent.match(
                                                              /Chrome\/(\d+)/
                                                          ),
                                                          n = navigator.userAgent.match(
                                                              /Edge\//
                                                          );
                                                      t(
                                                          n ||
                                                              !e ||
                                                              parseInt(
                                                                  e[1],
                                                                  10
                                                              ) >= 43
                                                      );
                                                  });
                                          }).catch(function() {
                                              return !1;
                                          });
                                      })(e).then(function(e) {
                                          return (d = e);
                                      });
                            }
                            function g(e) {
                                var t = h[e.name],
                                    n = {};
                                (n.promise = new a(function(e, t) {
                                    (n.resolve = e), (n.reject = t);
                                })),
                                    t.deferredOperations.push(n),
                                    t.dbReady
                                        ? (t.dbReady = t.dbReady.then(
                                              function() {
                                                  return n.promise;
                                              }
                                          ))
                                        : (t.dbReady = n.promise);
                            }
                            function b(e) {
                                var t = h[e.name].deferredOperations.pop();
                                if (t) return t.resolve(), t.promise;
                            }
                            function w(e, t) {
                                var n = h[e.name].deferredOperations.pop();
                                if (n) return n.reject(t), n.promise;
                            }
                            function _(e, t) {
                                return new a(function(n, r) {
                                    if (
                                        ((h[e.name] = h[e.name] || {
                                            forages: [],
                                            db: null,
                                            dbReady: null,
                                            deferredOperations: []
                                        }),
                                        e.db)
                                    ) {
                                        if (!t) return n(e.db);
                                        g(e), e.db.close();
                                    }
                                    var i = [e.name];
                                    t && i.push(e.version);
                                    var a = o.open.apply(o, i);
                                    t &&
                                        (a.onupgradeneeded = function(t) {
                                            var n = a.result;
                                            try {
                                                n.createObjectStore(
                                                    e.storeName
                                                ),
                                                    t.oldVersion <= 1 &&
                                                        n.createObjectStore(l);
                                            } catch (n) {
                                                if (
                                                    'ConstraintError' !== n.name
                                                )
                                                    throw n;
                                                console.warn(
                                                    'The database "' +
                                                        e.name +
                                                        '" has been upgraded from version ' +
                                                        t.oldVersion +
                                                        ' to version ' +
                                                        t.newVersion +
                                                        ', but the storage "' +
                                                        e.storeName +
                                                        '" already exists.'
                                                );
                                            }
                                        }),
                                        (a.onerror = function(e) {
                                            e.preventDefault(), r(a.error);
                                        }),
                                        (a.onsuccess = function() {
                                            n(a.result), b(e);
                                        });
                                });
                            }
                            function E(e) {
                                return _(e, !1);
                            }
                            function S(e) {
                                return _(e, !0);
                            }
                            function I(e, t) {
                                if (!e.db) return !0;
                                var n = !e.db.objectStoreNames.contains(
                                        e.storeName
                                    ),
                                    r = e.version < e.db.version,
                                    o = e.version > e.db.version;
                                if (
                                    (r &&
                                        (e.version !== t &&
                                            console.warn(
                                                'The database "' +
                                                    e.name +
                                                    '" can\'t be downgraded from version ' +
                                                    e.db.version +
                                                    ' to version ' +
                                                    e.version +
                                                    '.'
                                            ),
                                        (e.version = e.db.version)),
                                    o || n)
                                ) {
                                    if (n) {
                                        var i = e.db.version + 1;
                                        i > e.version && (e.version = i);
                                    }
                                    return !0;
                                }
                                return !1;
                            }
                            function L(e) {
                                return i(
                                    [
                                        (function(e) {
                                            for (
                                                var t = e.length,
                                                    n = new ArrayBuffer(t),
                                                    r = new Uint8Array(n),
                                                    o = 0;
                                                o < t;
                                                o++
                                            )
                                                r[o] = e.charCodeAt(o);
                                            return n;
                                        })(atob(e.data))
                                    ],
                                    { type: e.type }
                                );
                            }
                            function x(e) {
                                return e && e.__local_forage_encoded_blob;
                            }
                            function N(e) {
                                var t = this,
                                    n = t._initReady().then(function() {
                                        var e = h[t._dbInfo.name];
                                        if (e && e.dbReady) return e.dbReady;
                                    });
                                return c(n, e, e), n;
                            }
                            function O(e, t, n, r) {
                                void 0 === r && (r = 1);
                                try {
                                    var o = e.db.transaction(e.storeName, t);
                                    n(null, o);
                                } catch (o) {
                                    if (
                                        r > 0 &&
                                        (!e.db ||
                                            'InvalidStateError' === o.name ||
                                            'NotFoundError' === o.name)
                                    )
                                        return a
                                            .resolve()
                                            .then(function() {
                                                if (
                                                    !e.db ||
                                                    ('NotFoundError' ===
                                                        o.name &&
                                                        !e.db.objectStoreNames.contains(
                                                            e.storeName
                                                        ) &&
                                                        e.version <=
                                                            e.db.version)
                                                )
                                                    return (
                                                        e.db &&
                                                            (e.version =
                                                                e.db.version +
                                                                1),
                                                        S(e)
                                                    );
                                            })
                                            .then(function() {
                                                return (function(e) {
                                                    g(e);
                                                    for (
                                                        var t = h[e.name],
                                                            n = t.forages,
                                                            r = 0;
                                                        r < n.length;
                                                        r++
                                                    ) {
                                                        var o = n[r];
                                                        o._dbInfo.db &&
                                                            (o._dbInfo.db.close(),
                                                            (o._dbInfo.db = null));
                                                    }
                                                    return (
                                                        (e.db = null),
                                                        E(e)
                                                            .then(function(t) {
                                                                return (
                                                                    (e.db = t),
                                                                    I(e)
                                                                        ? S(e)
                                                                        : t
                                                                );
                                                            })
                                                            .then(function(r) {
                                                                e.db = t.db = r;
                                                                for (
                                                                    var o = 0;
                                                                    o <
                                                                    n.length;
                                                                    o++
                                                                )
                                                                    n[
                                                                        o
                                                                    ]._dbInfo.db = r;
                                                            })
                                                            .catch(function(t) {
                                                                throw (w(e, t),
                                                                t);
                                                            })
                                                    );
                                                })(e).then(function() {
                                                    O(e, t, n, r - 1);
                                                });
                                            })
                                            .catch(n);
                                    n(o);
                                }
                            }
                            var R = {
                                    _driver: 'asyncStorage',
                                    _initStorage: function(e) {
                                        var t = this,
                                            n = { db: null };
                                        if (e) for (var r in e) n[r] = e[r];
                                        var o = h[n.name];
                                        o ||
                                            ((o = {
                                                forages: [],
                                                db: null,
                                                dbReady: null,
                                                deferredOperations: []
                                            }),
                                            (h[n.name] = o)),
                                            o.forages.push(t),
                                            t._initReady ||
                                                ((t._initReady = t.ready),
                                                (t.ready = N));
                                        var i = [];
                                        function u() {
                                            return a.resolve();
                                        }
                                        for (
                                            var c = 0;
                                            c < o.forages.length;
                                            c++
                                        ) {
                                            var s = o.forages[c];
                                            s !== t &&
                                                i.push(s._initReady().catch(u));
                                        }
                                        var f = o.forages.slice(0);
                                        return a
                                            .all(i)
                                            .then(function() {
                                                return (n.db = o.db), E(n);
                                            })
                                            .then(function(e) {
                                                return (
                                                    (n.db = e),
                                                    I(
                                                        n,
                                                        t._defaultConfig.version
                                                    )
                                                        ? S(n)
                                                        : e
                                                );
                                            })
                                            .then(function(e) {
                                                (n.db = o.db = e),
                                                    (t._dbInfo = n);
                                                for (
                                                    var r = 0;
                                                    r < f.length;
                                                    r++
                                                ) {
                                                    var i = f[r];
                                                    i !== t &&
                                                        ((i._dbInfo.db = n.db),
                                                        (i._dbInfo.version =
                                                            n.version));
                                                }
                                            });
                                    },
                                    _support: (function() {
                                        try {
                                            if (!o) return !1;
                                            var e =
                                                    'undefined' !=
                                                        typeof openDatabase &&
                                                    /(Safari|iPhone|iPad|iPod)/.test(
                                                        navigator.userAgent
                                                    ) &&
                                                    !/Chrome/.test(
                                                        navigator.userAgent
                                                    ) &&
                                                    !/BlackBerry/.test(
                                                        navigator.platform
                                                    ),
                                                t =
                                                    'function' ==
                                                        typeof fetch &&
                                                    -1 !==
                                                        fetch
                                                            .toString()
                                                            .indexOf(
                                                                '[native code'
                                                            );
                                            return (
                                                (!e || t) &&
                                                'undefined' !=
                                                    typeof indexedDB &&
                                                'undefined' !=
                                                    typeof IDBKeyRange
                                            );
                                        } catch (e) {
                                            return !1;
                                        }
                                    })(),
                                    iterate: function(e, t) {
                                        var n = this,
                                            r = new a(function(t, r) {
                                                n.ready()
                                                    .then(function() {
                                                        O(
                                                            n._dbInfo,
                                                            p,
                                                            function(o, i) {
                                                                if (o)
                                                                    return r(o);
                                                                try {
                                                                    var a = i
                                                                            .objectStore(
                                                                                n
                                                                                    ._dbInfo
                                                                                    .storeName
                                                                            )
                                                                            .openCursor(),
                                                                        u = 1;
                                                                    (a.onsuccess = function() {
                                                                        var n =
                                                                            a.result;
                                                                        if (n) {
                                                                            var r =
                                                                                n.value;
                                                                            x(
                                                                                r
                                                                            ) &&
                                                                                (r = L(
                                                                                    r
                                                                                ));
                                                                            var o = e(
                                                                                r,
                                                                                n.key,
                                                                                u++
                                                                            );
                                                                            void 0 !==
                                                                            o
                                                                                ? t(
                                                                                      o
                                                                                  )
                                                                                : n.continue();
                                                                        } else
                                                                            t();
                                                                    }),
                                                                        (a.onerror = function() {
                                                                            r(
                                                                                a.error
                                                                            );
                                                                        });
                                                                } catch (e) {
                                                                    r(e);
                                                                }
                                                            }
                                                        );
                                                    })
                                                    .catch(r);
                                            });
                                        return u(r, t), r;
                                    },
                                    getItem: function(e, t) {
                                        var n = this;
                                        e = s(e);
                                        var r = new a(function(t, r) {
                                            n.ready()
                                                .then(function() {
                                                    O(n._dbInfo, p, function(
                                                        o,
                                                        i
                                                    ) {
                                                        if (o) return r(o);
                                                        try {
                                                            var a = i
                                                                .objectStore(
                                                                    n._dbInfo
                                                                        .storeName
                                                                )
                                                                .get(e);
                                                            (a.onsuccess = function() {
                                                                var e =
                                                                    a.result;
                                                                void 0 === e &&
                                                                    (e = null),
                                                                    x(e) &&
                                                                        (e = L(
                                                                            e
                                                                        )),
                                                                    t(e);
                                                            }),
                                                                (a.onerror = function() {
                                                                    r(a.error);
                                                                });
                                                        } catch (e) {
                                                            r(e);
                                                        }
                                                    });
                                                })
                                                .catch(r);
                                        });
                                        return u(r, t), r;
                                    },
                                    setItem: function(e, t, n) {
                                        var r = this;
                                        e = s(e);
                                        var o = new a(function(n, o) {
                                            var i;
                                            r.ready()
                                                .then(function() {
                                                    return (
                                                        (i = r._dbInfo),
                                                        '[object Blob]' ===
                                                        v.call(t)
                                                            ? m(i.db).then(
                                                                  function(e) {
                                                                      return e
                                                                          ? t
                                                                          : ((n = t),
                                                                            new a(
                                                                                function(
                                                                                    e,
                                                                                    t
                                                                                ) {
                                                                                    var r = new FileReader();
                                                                                    (r.onerror = t),
                                                                                        (r.onloadend = function(
                                                                                            t
                                                                                        ) {
                                                                                            var r = btoa(
                                                                                                t
                                                                                                    .target
                                                                                                    .result ||
                                                                                                    ''
                                                                                            );
                                                                                            e(
                                                                                                {
                                                                                                    __local_forage_encoded_blob: !0,
                                                                                                    data: r,
                                                                                                    type:
                                                                                                        n.type
                                                                                                }
                                                                                            );
                                                                                        }),
                                                                                        r.readAsBinaryString(
                                                                                            n
                                                                                        );
                                                                                }
                                                                            ));
                                                                      var n;
                                                                  }
                                                              )
                                                            : t
                                                    );
                                                })
                                                .then(function(t) {
                                                    O(r._dbInfo, y, function(
                                                        i,
                                                        a
                                                    ) {
                                                        if (i) return o(i);
                                                        try {
                                                            var u = a.objectStore(
                                                                r._dbInfo
                                                                    .storeName
                                                            );
                                                            null === t &&
                                                                (t = void 0);
                                                            var c = u.put(t, e);
                                                            (a.oncomplete = function() {
                                                                void 0 === t &&
                                                                    (t = null),
                                                                    n(t);
                                                            }),
                                                                (a.onabort = a.onerror = function() {
                                                                    var e = c.error
                                                                        ? c.error
                                                                        : c
                                                                              .transaction
                                                                              .error;
                                                                    o(e);
                                                                });
                                                        } catch (e) {
                                                            o(e);
                                                        }
                                                    });
                                                })
                                                .catch(o);
                                        });
                                        return u(o, n), o;
                                    },
                                    removeItem: function(e, t) {
                                        var n = this;
                                        e = s(e);
                                        var r = new a(function(t, r) {
                                            n.ready()
                                                .then(function() {
                                                    O(n._dbInfo, y, function(
                                                        o,
                                                        i
                                                    ) {
                                                        if (o) return r(o);
                                                        try {
                                                            var a = i
                                                                .objectStore(
                                                                    n._dbInfo
                                                                        .storeName
                                                                )
                                                                .delete(e);
                                                            (i.oncomplete = function() {
                                                                t();
                                                            }),
                                                                (i.onerror = function() {
                                                                    r(a.error);
                                                                }),
                                                                (i.onabort = function() {
                                                                    var e = a.error
                                                                        ? a.error
                                                                        : a
                                                                              .transaction
                                                                              .error;
                                                                    r(e);
                                                                });
                                                        } catch (e) {
                                                            r(e);
                                                        }
                                                    });
                                                })
                                                .catch(r);
                                        });
                                        return u(r, t), r;
                                    },
                                    clear: function(e) {
                                        var t = this,
                                            n = new a(function(e, n) {
                                                t.ready()
                                                    .then(function() {
                                                        O(
                                                            t._dbInfo,
                                                            y,
                                                            function(r, o) {
                                                                if (r)
                                                                    return n(r);
                                                                try {
                                                                    var i = o
                                                                        .objectStore(
                                                                            t
                                                                                ._dbInfo
                                                                                .storeName
                                                                        )
                                                                        .clear();
                                                                    (o.oncomplete = function() {
                                                                        e();
                                                                    }),
                                                                        (o.onabort = o.onerror = function() {
                                                                            var e = i.error
                                                                                ? i.error
                                                                                : i
                                                                                      .transaction
                                                                                      .error;
                                                                            n(
                                                                                e
                                                                            );
                                                                        });
                                                                } catch (e) {
                                                                    n(e);
                                                                }
                                                            }
                                                        );
                                                    })
                                                    .catch(n);
                                            });
                                        return u(n, e), n;
                                    },
                                    length: function(e) {
                                        var t = this,
                                            n = new a(function(e, n) {
                                                t.ready()
                                                    .then(function() {
                                                        O(
                                                            t._dbInfo,
                                                            p,
                                                            function(r, o) {
                                                                if (r)
                                                                    return n(r);
                                                                try {
                                                                    var i = o
                                                                        .objectStore(
                                                                            t
                                                                                ._dbInfo
                                                                                .storeName
                                                                        )
                                                                        .count();
                                                                    (i.onsuccess = function() {
                                                                        e(
                                                                            i.result
                                                                        );
                                                                    }),
                                                                        (i.onerror = function() {
                                                                            n(
                                                                                i.error
                                                                            );
                                                                        });
                                                                } catch (e) {
                                                                    n(e);
                                                                }
                                                            }
                                                        );
                                                    })
                                                    .catch(n);
                                            });
                                        return u(n, e), n;
                                    },
                                    key: function(e, t) {
                                        var n = this,
                                            r = new a(function(t, r) {
                                                e < 0
                                                    ? t(null)
                                                    : n
                                                          .ready()
                                                          .then(function() {
                                                              O(
                                                                  n._dbInfo,
                                                                  p,
                                                                  function(
                                                                      o,
                                                                      i
                                                                  ) {
                                                                      if (o)
                                                                          return r(
                                                                              o
                                                                          );
                                                                      try {
                                                                          var a = i.objectStore(
                                                                                  n
                                                                                      ._dbInfo
                                                                                      .storeName
                                                                              ),
                                                                              u = !1,
                                                                              c = a.openCursor();
                                                                          (c.onsuccess = function() {
                                                                              var n =
                                                                                  c.result;
                                                                              n
                                                                                  ? 0 ===
                                                                                    e
                                                                                      ? t(
                                                                                            n.key
                                                                                        )
                                                                                      : u
                                                                                      ? t(
                                                                                            n.key
                                                                                        )
                                                                                      : ((u = !0),
                                                                                        n.advance(
                                                                                            e
                                                                                        ))
                                                                                  : t(
                                                                                        null
                                                                                    );
                                                                          }),
                                                                              (c.onerror = function() {
                                                                                  r(
                                                                                      c.error
                                                                                  );
                                                                              });
                                                                      } catch (e) {
                                                                          r(e);
                                                                      }
                                                                  }
                                                              );
                                                          })
                                                          .catch(r);
                                            });
                                        return u(r, t), r;
                                    },
                                    keys: function(e) {
                                        var t = this,
                                            n = new a(function(e, n) {
                                                t.ready()
                                                    .then(function() {
                                                        O(
                                                            t._dbInfo,
                                                            p,
                                                            function(r, o) {
                                                                if (r)
                                                                    return n(r);
                                                                try {
                                                                    var i = o
                                                                            .objectStore(
                                                                                t
                                                                                    ._dbInfo
                                                                                    .storeName
                                                                            )
                                                                            .openCursor(),
                                                                        a = [];
                                                                    (i.onsuccess = function() {
                                                                        var t =
                                                                            i.result;
                                                                        t
                                                                            ? (a.push(
                                                                                  t.key
                                                                              ),
                                                                              t.continue())
                                                                            : e(
                                                                                  a
                                                                              );
                                                                    }),
                                                                        (i.onerror = function() {
                                                                            n(
                                                                                i.error
                                                                            );
                                                                        });
                                                                } catch (e) {
                                                                    n(e);
                                                                }
                                                            }
                                                        );
                                                    })
                                                    .catch(n);
                                            });
                                        return u(n, e), n;
                                    },
                                    dropInstance: function(e, t) {
                                        t = f.apply(this, arguments);
                                        var n,
                                            r = this.config();
                                        if (
                                            ((e =
                                                ('function' != typeof e && e) ||
                                                {}).name ||
                                                ((e.name = e.name || r.name),
                                                (e.storeName =
                                                    e.storeName ||
                                                    r.storeName)),
                                            e.name)
                                        ) {
                                            var i =
                                                e.name === r.name &&
                                                this._dbInfo.db
                                                    ? a.resolve(this._dbInfo.db)
                                                    : E(e).then(function(t) {
                                                          var n = h[e.name],
                                                              r = n.forages;
                                                          n.db = t;
                                                          for (
                                                              var o = 0;
                                                              o < r.length;
                                                              o++
                                                          )
                                                              r[
                                                                  o
                                                              ]._dbInfo.db = t;
                                                          return t;
                                                      });
                                            n = e.storeName
                                                ? i.then(function(t) {
                                                      if (
                                                          t.objectStoreNames.contains(
                                                              e.storeName
                                                          )
                                                      ) {
                                                          var n = t.version + 1;
                                                          g(e);
                                                          var r = h[e.name],
                                                              i = r.forages;
                                                          t.close();
                                                          for (
                                                              var u = 0;
                                                              u < i.length;
                                                              u++
                                                          ) {
                                                              var c = i[u];
                                                              (c._dbInfo.db = null),
                                                                  (c._dbInfo.version = n);
                                                          }
                                                          return new a(function(
                                                              t,
                                                              r
                                                          ) {
                                                              var i = o.open(
                                                                  e.name,
                                                                  n
                                                              );
                                                              (i.onerror = function(
                                                                  e
                                                              ) {
                                                                  i.result.close(),
                                                                      r(e);
                                                              }),
                                                                  (i.onupgradeneeded = function() {
                                                                      i.result.deleteObjectStore(
                                                                          e.storeName
                                                                      );
                                                                  }),
                                                                  (i.onsuccess = function() {
                                                                      var e =
                                                                          i.result;
                                                                      e.close(),
                                                                          t(e);
                                                                  });
                                                          })
                                                              .then(function(
                                                                  e
                                                              ) {
                                                                  r.db = e;
                                                                  for (
                                                                      var t = 0;
                                                                      t <
                                                                      i.length;
                                                                      t++
                                                                  ) {
                                                                      var n =
                                                                          i[t];
                                                                      (n._dbInfo.db = e),
                                                                          b(
                                                                              n._dbInfo
                                                                          );
                                                                  }
                                                              })
                                                              .catch(function(
                                                                  t
                                                              ) {
                                                                  throw ((
                                                                      w(e, t) ||
                                                                      a.resolve()
                                                                  ).catch(
                                                                      function() {}
                                                                  ),
                                                                  t);
                                                              });
                                                      }
                                                  })
                                                : i.then(function(t) {
                                                      g(e);
                                                      var n = h[e.name],
                                                          r = n.forages;
                                                      t.close();
                                                      for (
                                                          var i = 0;
                                                          i < r.length;
                                                          i++
                                                      )
                                                          r[
                                                              i
                                                          ]._dbInfo.db = null;
                                                      return new a(function(
                                                          t,
                                                          n
                                                      ) {
                                                          var r = o.deleteDatabase(
                                                              e.name
                                                          );
                                                          (r.onerror = r.onblocked = function(
                                                              e
                                                          ) {
                                                              var t = r.result;
                                                              t && t.close(),
                                                                  n(e);
                                                          }),
                                                              (r.onsuccess = function() {
                                                                  var e =
                                                                      r.result;
                                                                  e &&
                                                                      e.close(),
                                                                      t(e);
                                                              });
                                                      })
                                                          .then(function(e) {
                                                              n.db = e;
                                                              for (
                                                                  var t = 0;
                                                                  t < r.length;
                                                                  t++
                                                              )
                                                                  b(
                                                                      r[t]
                                                                          ._dbInfo
                                                                  );
                                                          })
                                                          .catch(function(t) {
                                                              throw ((
                                                                  w(e, t) ||
                                                                  a.resolve()
                                                              ).catch(
                                                                  function() {}
                                                              ),
                                                              t);
                                                          });
                                                  });
                                        } else
                                            n = a.reject('Invalid arguments');
                                        return u(n, t), n;
                                    }
                                },
                                k =
                                    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
                                j = '~~local_forage_type~',
                                A = /^~~local_forage_type~([^~]+)~/,
                                T = '__lfsc__:',
                                C = T.length,
                                D = 'arbf',
                                B = 'blob',
                                P = 'si08',
                                M = 'ui08',
                                F = 'uic8',
                                U = 'si16',
                                W = 'si32',
                                z = 'ur16',
                                V = 'ui32',
                                q = 'fl32',
                                H = 'fl64',
                                X = C + D.length,
                                G = Object.prototype.toString;
                            function J(e) {
                                var t,
                                    n,
                                    r,
                                    o,
                                    i,
                                    a = 0.75 * e.length,
                                    u = e.length,
                                    c = 0;
                                '=' === e[e.length - 1] &&
                                    (a--, '=' === e[e.length - 2] && a--);
                                var s = new ArrayBuffer(a),
                                    f = new Uint8Array(s);
                                for (t = 0; t < u; t += 4)
                                    (n = k.indexOf(e[t])),
                                        (r = k.indexOf(e[t + 1])),
                                        (o = k.indexOf(e[t + 2])),
                                        (i = k.indexOf(e[t + 3])),
                                        (f[c++] = (n << 2) | (r >> 4)),
                                        (f[c++] = ((15 & r) << 4) | (o >> 2)),
                                        (f[c++] = ((3 & o) << 6) | (63 & i));
                                return s;
                            }
                            function K(e) {
                                var t,
                                    n = new Uint8Array(e),
                                    r = '';
                                for (t = 0; t < n.length; t += 3)
                                    (r += k[n[t] >> 2]),
                                        (r +=
                                            k[
                                                ((3 & n[t]) << 4) |
                                                    (n[t + 1] >> 4)
                                            ]),
                                        (r +=
                                            k[
                                                ((15 & n[t + 1]) << 2) |
                                                    (n[t + 2] >> 6)
                                            ]),
                                        (r += k[63 & n[t + 2]]);
                                return (
                                    n.length % 3 == 2
                                        ? (r =
                                              r.substring(0, r.length - 1) +
                                              '=')
                                        : n.length % 3 == 1 &&
                                          (r =
                                              r.substring(0, r.length - 2) +
                                              '=='),
                                    r
                                );
                            }
                            var Q = {
                                serialize: function(e, t) {
                                    var n = '';
                                    if (
                                        (e && (n = G.call(e)),
                                        e &&
                                            ('[object ArrayBuffer]' === n ||
                                                (e.buffer &&
                                                    '[object ArrayBuffer]' ===
                                                        G.call(e.buffer))))
                                    ) {
                                        var r,
                                            o = T;
                                        e instanceof ArrayBuffer
                                            ? ((r = e), (o += D))
                                            : ((r = e.buffer),
                                              '[object Int8Array]' === n
                                                  ? (o += P)
                                                  : '[object Uint8Array]' === n
                                                  ? (o += M)
                                                  : '[object Uint8ClampedArray]' ===
                                                    n
                                                  ? (o += F)
                                                  : '[object Int16Array]' === n
                                                  ? (o += U)
                                                  : '[object Uint16Array]' === n
                                                  ? (o += z)
                                                  : '[object Int32Array]' === n
                                                  ? (o += W)
                                                  : '[object Uint32Array]' === n
                                                  ? (o += V)
                                                  : '[object Float32Array]' ===
                                                    n
                                                  ? (o += q)
                                                  : '[object Float64Array]' ===
                                                    n
                                                  ? (o += H)
                                                  : t(
                                                        new Error(
                                                            'Failed to get type for BinaryArray'
                                                        )
                                                    )),
                                            t(o + K(r));
                                    } else if ('[object Blob]' === n) {
                                        var i = new FileReader();
                                        (i.onload = function() {
                                            var n =
                                                j +
                                                e.type +
                                                '~' +
                                                K(this.result);
                                            t(T + B + n);
                                        }),
                                            i.readAsArrayBuffer(e);
                                    } else
                                        try {
                                            t(JSON.stringify(e));
                                        } catch (n) {
                                            console.error(
                                                "Couldn't convert value into a JSON string: ",
                                                e
                                            ),
                                                t(null, n);
                                        }
                                },
                                deserialize: function(e) {
                                    if (e.substring(0, C) !== T)
                                        return JSON.parse(e);
                                    var t,
                                        n = e.substring(X),
                                        r = e.substring(C, X);
                                    if (r === B && A.test(n)) {
                                        var o = n.match(A);
                                        (t = o[1]),
                                            (n = n.substring(o[0].length));
                                    }
                                    var a = J(n);
                                    switch (r) {
                                        case D:
                                            return a;
                                        case B:
                                            return i([a], { type: t });
                                        case P:
                                            return new Int8Array(a);
                                        case M:
                                            return new Uint8Array(a);
                                        case F:
                                            return new Uint8ClampedArray(a);
                                        case U:
                                            return new Int16Array(a);
                                        case z:
                                            return new Uint16Array(a);
                                        case W:
                                            return new Int32Array(a);
                                        case V:
                                            return new Uint32Array(a);
                                        case q:
                                            return new Float32Array(a);
                                        case H:
                                            return new Float64Array(a);
                                        default:
                                            throw new Error(
                                                'Unkown type: ' + r
                                            );
                                    }
                                },
                                stringToBuffer: J,
                                bufferToString: K
                            };
                            function Y(e, t, n, r) {
                                e.executeSql(
                                    'CREATE TABLE IF NOT EXISTS ' +
                                        t.storeName +
                                        ' (id INTEGER PRIMARY KEY, key unique, value)',
                                    [],
                                    n,
                                    r
                                );
                            }
                            function Z(e, t, n, r, o, i) {
                                e.executeSql(
                                    n,
                                    r,
                                    o,
                                    function(e, a) {
                                        a.code === a.SYNTAX_ERR
                                            ? e.executeSql(
                                                  "SELECT name FROM sqlite_master WHERE type='table' AND name = ?",
                                                  [t.storeName],
                                                  function(e, u) {
                                                      u.rows.length
                                                          ? i(e, a)
                                                          : Y(
                                                                e,
                                                                t,
                                                                function() {
                                                                    e.executeSql(
                                                                        n,
                                                                        r,
                                                                        o,
                                                                        i
                                                                    );
                                                                },
                                                                i
                                                            );
                                                  },
                                                  i
                                              )
                                            : i(e, a);
                                    },
                                    i
                                );
                            }
                            function $(e, t, n, r) {
                                var o = this;
                                e = s(e);
                                var i = new a(function(i, a) {
                                    o.ready()
                                        .then(function() {
                                            void 0 === t && (t = null);
                                            var u = t,
                                                c = o._dbInfo;
                                            c.serializer.serialize(t, function(
                                                t,
                                                s
                                            ) {
                                                s
                                                    ? a(s)
                                                    : c.db.transaction(
                                                          function(n) {
                                                              Z(
                                                                  n,
                                                                  c,
                                                                  'INSERT OR REPLACE INTO ' +
                                                                      c.storeName +
                                                                      ' (key, value) VALUES (?, ?)',
                                                                  [e, t],
                                                                  function() {
                                                                      i(u);
                                                                  },
                                                                  function(
                                                                      e,
                                                                      t
                                                                  ) {
                                                                      a(t);
                                                                  }
                                                              );
                                                          },
                                                          function(t) {
                                                              if (
                                                                  t.code ===
                                                                  t.QUOTA_ERR
                                                              ) {
                                                                  if (r > 0)
                                                                      return void i(
                                                                          $.apply(
                                                                              o,
                                                                              [
                                                                                  e,
                                                                                  u,
                                                                                  n,
                                                                                  r -
                                                                                      1
                                                                              ]
                                                                          )
                                                                      );
                                                                  a(t);
                                                              }
                                                          }
                                                      );
                                            });
                                        })
                                        .catch(a);
                                });
                                return u(i, n), i;
                            }
                            var ee = {
                                _driver: 'webSQLStorage',
                                _initStorage: function(e) {
                                    var t = this,
                                        n = { db: null };
                                    if (e)
                                        for (var r in e)
                                            n[r] =
                                                'string' != typeof e[r]
                                                    ? e[r].toString()
                                                    : e[r];
                                    var o = new a(function(e, r) {
                                        try {
                                            n.db = openDatabase(
                                                n.name,
                                                String(n.version),
                                                n.description,
                                                n.size
                                            );
                                        } catch (e) {
                                            return r(e);
                                        }
                                        n.db.transaction(function(o) {
                                            Y(
                                                o,
                                                n,
                                                function() {
                                                    (t._dbInfo = n), e();
                                                },
                                                function(e, t) {
                                                    r(t);
                                                }
                                            );
                                        }, r);
                                    });
                                    return (n.serializer = Q), o;
                                },
                                _support: 'function' == typeof openDatabase,
                                iterate: function(e, t) {
                                    var n = this,
                                        r = new a(function(t, r) {
                                            n.ready()
                                                .then(function() {
                                                    var o = n._dbInfo;
                                                    o.db.transaction(function(
                                                        n
                                                    ) {
                                                        Z(
                                                            n,
                                                            o,
                                                            'SELECT * FROM ' +
                                                                o.storeName,
                                                            [],
                                                            function(n, r) {
                                                                for (
                                                                    var i =
                                                                            r.rows,
                                                                        a =
                                                                            i.length,
                                                                        u = 0;
                                                                    u < a;
                                                                    u++
                                                                ) {
                                                                    var c = i.item(
                                                                            u
                                                                        ),
                                                                        s =
                                                                            c.value;
                                                                    if (
                                                                        (s &&
                                                                            (s = o.serializer.deserialize(
                                                                                s
                                                                            )),
                                                                        void 0 !==
                                                                            (s = e(
                                                                                s,
                                                                                c.key,
                                                                                u +
                                                                                    1
                                                                            )))
                                                                    )
                                                                        return void t(
                                                                            s
                                                                        );
                                                                }
                                                                t();
                                                            },
                                                            function(e, t) {
                                                                r(t);
                                                            }
                                                        );
                                                    });
                                                })
                                                .catch(r);
                                        });
                                    return u(r, t), r;
                                },
                                getItem: function(e, t) {
                                    var n = this;
                                    e = s(e);
                                    var r = new a(function(t, r) {
                                        n.ready()
                                            .then(function() {
                                                var o = n._dbInfo;
                                                o.db.transaction(function(n) {
                                                    Z(
                                                        n,
                                                        o,
                                                        'SELECT * FROM ' +
                                                            o.storeName +
                                                            ' WHERE key = ? LIMIT 1',
                                                        [e],
                                                        function(e, n) {
                                                            var r = n.rows
                                                                .length
                                                                ? n.rows.item(0)
                                                                      .value
                                                                : null;
                                                            r &&
                                                                (r = o.serializer.deserialize(
                                                                    r
                                                                )),
                                                                t(r);
                                                        },
                                                        function(e, t) {
                                                            r(t);
                                                        }
                                                    );
                                                });
                                            })
                                            .catch(r);
                                    });
                                    return u(r, t), r;
                                },
                                setItem: function(e, t, n) {
                                    return $.apply(this, [e, t, n, 1]);
                                },
                                removeItem: function(e, t) {
                                    var n = this;
                                    e = s(e);
                                    var r = new a(function(t, r) {
                                        n.ready()
                                            .then(function() {
                                                var o = n._dbInfo;
                                                o.db.transaction(function(n) {
                                                    Z(
                                                        n,
                                                        o,
                                                        'DELETE FROM ' +
                                                            o.storeName +
                                                            ' WHERE key = ?',
                                                        [e],
                                                        function() {
                                                            t();
                                                        },
                                                        function(e, t) {
                                                            r(t);
                                                        }
                                                    );
                                                });
                                            })
                                            .catch(r);
                                    });
                                    return u(r, t), r;
                                },
                                clear: function(e) {
                                    var t = this,
                                        n = new a(function(e, n) {
                                            t.ready()
                                                .then(function() {
                                                    var r = t._dbInfo;
                                                    r.db.transaction(function(
                                                        t
                                                    ) {
                                                        Z(
                                                            t,
                                                            r,
                                                            'DELETE FROM ' +
                                                                r.storeName,
                                                            [],
                                                            function() {
                                                                e();
                                                            },
                                                            function(e, t) {
                                                                n(t);
                                                            }
                                                        );
                                                    });
                                                })
                                                .catch(n);
                                        });
                                    return u(n, e), n;
                                },
                                length: function(e) {
                                    var t = this,
                                        n = new a(function(e, n) {
                                            t.ready()
                                                .then(function() {
                                                    var r = t._dbInfo;
                                                    r.db.transaction(function(
                                                        t
                                                    ) {
                                                        Z(
                                                            t,
                                                            r,
                                                            'SELECT COUNT(key) as c FROM ' +
                                                                r.storeName,
                                                            [],
                                                            function(t, n) {
                                                                var r = n.rows.item(
                                                                    0
                                                                ).c;
                                                                e(r);
                                                            },
                                                            function(e, t) {
                                                                n(t);
                                                            }
                                                        );
                                                    });
                                                })
                                                .catch(n);
                                        });
                                    return u(n, e), n;
                                },
                                key: function(e, t) {
                                    var n = this,
                                        r = new a(function(t, r) {
                                            n.ready()
                                                .then(function() {
                                                    var o = n._dbInfo;
                                                    o.db.transaction(function(
                                                        n
                                                    ) {
                                                        Z(
                                                            n,
                                                            o,
                                                            'SELECT key FROM ' +
                                                                o.storeName +
                                                                ' WHERE id = ? LIMIT 1',
                                                            [e + 1],
                                                            function(e, n) {
                                                                var r = n.rows
                                                                    .length
                                                                    ? n.rows.item(
                                                                          0
                                                                      ).key
                                                                    : null;
                                                                t(r);
                                                            },
                                                            function(e, t) {
                                                                r(t);
                                                            }
                                                        );
                                                    });
                                                })
                                                .catch(r);
                                        });
                                    return u(r, t), r;
                                },
                                keys: function(e) {
                                    var t = this,
                                        n = new a(function(e, n) {
                                            t.ready()
                                                .then(function() {
                                                    var r = t._dbInfo;
                                                    r.db.transaction(function(
                                                        t
                                                    ) {
                                                        Z(
                                                            t,
                                                            r,
                                                            'SELECT key FROM ' +
                                                                r.storeName,
                                                            [],
                                                            function(t, n) {
                                                                for (
                                                                    var r = [],
                                                                        o = 0;
                                                                    o <
                                                                    n.rows
                                                                        .length;
                                                                    o++
                                                                )
                                                                    r.push(
                                                                        n.rows.item(
                                                                            o
                                                                        ).key
                                                                    );
                                                                e(r);
                                                            },
                                                            function(e, t) {
                                                                n(t);
                                                            }
                                                        );
                                                    });
                                                })
                                                .catch(n);
                                        });
                                    return u(n, e), n;
                                },
                                dropInstance: function(e, t) {
                                    t = f.apply(this, arguments);
                                    var n = this.config();
                                    (e = ('function' != typeof e && e) || {})
                                        .name ||
                                        ((e.name = e.name || n.name),
                                        (e.storeName =
                                            e.storeName || n.storeName));
                                    var r,
                                        o = this;
                                    return (
                                        u(
                                            (r = e.name
                                                ? new a(function(t) {
                                                      var r;
                                                      (r =
                                                          e.name === n.name
                                                              ? o._dbInfo.db
                                                              : openDatabase(
                                                                    e.name,
                                                                    '',
                                                                    '',
                                                                    0
                                                                )),
                                                          e.storeName
                                                              ? t({
                                                                    db: r,
                                                                    storeNames: [
                                                                        e.storeName
                                                                    ]
                                                                })
                                                              : t(
                                                                    (function(
                                                                        e
                                                                    ) {
                                                                        return new a(
                                                                            function(
                                                                                t,
                                                                                n
                                                                            ) {
                                                                                e.transaction(
                                                                                    function(
                                                                                        r
                                                                                    ) {
                                                                                        r.executeSql(
                                                                                            "SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",
                                                                                            [],
                                                                                            function(
                                                                                                n,
                                                                                                r
                                                                                            ) {
                                                                                                for (
                                                                                                    var o = [],
                                                                                                        i = 0;
                                                                                                    i <
                                                                                                    r
                                                                                                        .rows
                                                                                                        .length;
                                                                                                    i++
                                                                                                )
                                                                                                    o.push(
                                                                                                        r.rows.item(
                                                                                                            i
                                                                                                        )
                                                                                                            .name
                                                                                                    );
                                                                                                t(
                                                                                                    {
                                                                                                        db: e,
                                                                                                        storeNames: o
                                                                                                    }
                                                                                                );
                                                                                            },
                                                                                            function(
                                                                                                e,
                                                                                                t
                                                                                            ) {
                                                                                                n(
                                                                                                    t
                                                                                                );
                                                                                            }
                                                                                        );
                                                                                    },
                                                                                    function(
                                                                                        e
                                                                                    ) {
                                                                                        n(
                                                                                            e
                                                                                        );
                                                                                    }
                                                                                );
                                                                            }
                                                                        );
                                                                    })(r)
                                                                );
                                                  }).then(function(e) {
                                                      return new a(function(
                                                          t,
                                                          n
                                                      ) {
                                                          e.db.transaction(
                                                              function(r) {
                                                                  function o(
                                                                      e
                                                                  ) {
                                                                      return new a(
                                                                          function(
                                                                              t,
                                                                              n
                                                                          ) {
                                                                              r.executeSql(
                                                                                  'DROP TABLE IF EXISTS ' +
                                                                                      e,
                                                                                  [],
                                                                                  function() {
                                                                                      t();
                                                                                  },
                                                                                  function(
                                                                                      e,
                                                                                      t
                                                                                  ) {
                                                                                      n(
                                                                                          t
                                                                                      );
                                                                                  }
                                                                              );
                                                                          }
                                                                      );
                                                                  }
                                                                  for (
                                                                      var i = [],
                                                                          u = 0,
                                                                          c =
                                                                              e
                                                                                  .storeNames
                                                                                  .length;
                                                                      u < c;
                                                                      u++
                                                                  )
                                                                      i.push(
                                                                          o(
                                                                              e
                                                                                  .storeNames[
                                                                                  u
                                                                              ]
                                                                          )
                                                                      );
                                                                  a.all(i)
                                                                      .then(
                                                                          function() {
                                                                              t();
                                                                          }
                                                                      )
                                                                      .catch(
                                                                          function(
                                                                              e
                                                                          ) {
                                                                              n(
                                                                                  e
                                                                              );
                                                                          }
                                                                      );
                                                              },
                                                              function(e) {
                                                                  n(e);
                                                              }
                                                          );
                                                      });
                                                  })
                                                : a.reject(
                                                      'Invalid arguments'
                                                  )),
                                            t
                                        ),
                                        r
                                    );
                                }
                            };
                            function te(e, t) {
                                var n = e.name + '/';
                                return (
                                    e.storeName !== t.storeName &&
                                        (n += e.storeName + '/'),
                                    n
                                );
                            }
                            function ne() {
                                return (
                                    !(function() {
                                        try {
                                            return (
                                                localStorage.setItem(
                                                    '_localforage_support_test',
                                                    !0
                                                ),
                                                localStorage.removeItem(
                                                    '_localforage_support_test'
                                                ),
                                                !1
                                            );
                                        } catch (e) {
                                            return !0;
                                        }
                                    })() || localStorage.length > 0
                                );
                            }
                            var re = {
                                    _driver: 'localStorageWrapper',
                                    _initStorage: function(e) {
                                        var t = {};
                                        if (e) for (var n in e) t[n] = e[n];
                                        return (
                                            (t.keyPrefix = te(
                                                e,
                                                this._defaultConfig
                                            )),
                                            ne()
                                                ? ((this._dbInfo = t),
                                                  (t.serializer = Q),
                                                  a.resolve())
                                                : a.reject()
                                        );
                                    },
                                    _support: (function() {
                                        try {
                                            return (
                                                'undefined' !=
                                                    typeof localStorage &&
                                                'setItem' in localStorage &&
                                                !!localStorage.setItem
                                            );
                                        } catch (e) {
                                            return !1;
                                        }
                                    })(),
                                    iterate: function(e, t) {
                                        var n = this,
                                            r = n.ready().then(function() {
                                                for (
                                                    var t = n._dbInfo,
                                                        r = t.keyPrefix,
                                                        o = r.length,
                                                        i = localStorage.length,
                                                        a = 1,
                                                        u = 0;
                                                    u < i;
                                                    u++
                                                ) {
                                                    var c = localStorage.key(u);
                                                    if (0 === c.indexOf(r)) {
                                                        var s = localStorage.getItem(
                                                            c
                                                        );
                                                        if (
                                                            (s &&
                                                                (s = t.serializer.deserialize(
                                                                    s
                                                                )),
                                                            void 0 !==
                                                                (s = e(
                                                                    s,
                                                                    c.substring(
                                                                        o
                                                                    ),
                                                                    a++
                                                                )))
                                                        )
                                                            return s;
                                                    }
                                                }
                                            });
                                        return u(r, t), r;
                                    },
                                    getItem: function(e, t) {
                                        var n = this;
                                        e = s(e);
                                        var r = n.ready().then(function() {
                                            var t = n._dbInfo,
                                                r = localStorage.getItem(
                                                    t.keyPrefix + e
                                                );
                                            return (
                                                r &&
                                                    (r = t.serializer.deserialize(
                                                        r
                                                    )),
                                                r
                                            );
                                        });
                                        return u(r, t), r;
                                    },
                                    setItem: function(e, t, n) {
                                        var r = this;
                                        e = s(e);
                                        var o = r.ready().then(function() {
                                            void 0 === t && (t = null);
                                            var n = t;
                                            return new a(function(o, i) {
                                                var a = r._dbInfo;
                                                a.serializer.serialize(
                                                    t,
                                                    function(t, r) {
                                                        if (r) i(r);
                                                        else
                                                            try {
                                                                localStorage.setItem(
                                                                    a.keyPrefix +
                                                                        e,
                                                                    t
                                                                ),
                                                                    o(n);
                                                            } catch (e) {
                                                                ('QuotaExceededError' !==
                                                                    e.name &&
                                                                    'NS_ERROR_DOM_QUOTA_REACHED' !==
                                                                        e.name) ||
                                                                    i(e),
                                                                    i(e);
                                                            }
                                                    }
                                                );
                                            });
                                        });
                                        return u(o, n), o;
                                    },
                                    removeItem: function(e, t) {
                                        var n = this;
                                        e = s(e);
                                        var r = n.ready().then(function() {
                                            var t = n._dbInfo;
                                            localStorage.removeItem(
                                                t.keyPrefix + e
                                            );
                                        });
                                        return u(r, t), r;
                                    },
                                    clear: function(e) {
                                        var t = this,
                                            n = t.ready().then(function() {
                                                for (
                                                    var e = t._dbInfo.keyPrefix,
                                                        n =
                                                            localStorage.length -
                                                            1;
                                                    n >= 0;
                                                    n--
                                                ) {
                                                    var r = localStorage.key(n);
                                                    0 === r.indexOf(e) &&
                                                        localStorage.removeItem(
                                                            r
                                                        );
                                                }
                                            });
                                        return u(n, e), n;
                                    },
                                    length: function(e) {
                                        var t = this.keys().then(function(e) {
                                            return e.length;
                                        });
                                        return u(t, e), t;
                                    },
                                    key: function(e, t) {
                                        var n = this,
                                            r = n.ready().then(function() {
                                                var t,
                                                    r = n._dbInfo;
                                                try {
                                                    t = localStorage.key(e);
                                                } catch (e) {
                                                    t = null;
                                                }
                                                return (
                                                    t &&
                                                        (t = t.substring(
                                                            r.keyPrefix.length
                                                        )),
                                                    t
                                                );
                                            });
                                        return u(r, t), r;
                                    },
                                    keys: function(e) {
                                        var t = this,
                                            n = t.ready().then(function() {
                                                for (
                                                    var e = t._dbInfo,
                                                        n = localStorage.length,
                                                        r = [],
                                                        o = 0;
                                                    o < n;
                                                    o++
                                                ) {
                                                    var i = localStorage.key(o);
                                                    0 ===
                                                        i.indexOf(
                                                            e.keyPrefix
                                                        ) &&
                                                        r.push(
                                                            i.substring(
                                                                e.keyPrefix
                                                                    .length
                                                            )
                                                        );
                                                }
                                                return r;
                                            });
                                        return u(n, e), n;
                                    },
                                    dropInstance: function(e, t) {
                                        if (
                                            ((t = f.apply(this, arguments)),
                                            !(e =
                                                ('function' != typeof e && e) ||
                                                {}).name)
                                        ) {
                                            var n = this.config();
                                            (e.name = e.name || n.name),
                                                (e.storeName =
                                                    e.storeName || n.storeName);
                                        }
                                        var r,
                                            o = this;
                                        return (
                                            u(
                                                (r = e.name
                                                    ? new a(function(t) {
                                                          e.storeName
                                                              ? t(
                                                                    te(
                                                                        e,
                                                                        o._defaultConfig
                                                                    )
                                                                )
                                                              : t(e.name + '/');
                                                      }).then(function(e) {
                                                          for (
                                                              var t =
                                                                  localStorage.length -
                                                                  1;
                                                              t >= 0;
                                                              t--
                                                          ) {
                                                              var n = localStorage.key(
                                                                  t
                                                              );
                                                              0 ===
                                                                  n.indexOf(
                                                                      e
                                                                  ) &&
                                                                  localStorage.removeItem(
                                                                      n
                                                                  );
                                                          }
                                                      })
                                                    : a.reject(
                                                          'Invalid arguments'
                                                      )),
                                                t
                                            ),
                                            r
                                        );
                                    }
                                },
                                oe = function(e, t) {
                                    for (
                                        var n, r, o = e.length, i = 0;
                                        i < o;

                                    ) {
                                        if (
                                            (n = e[i]) === (r = t) ||
                                            ('number' == typeof n &&
                                                'number' == typeof r &&
                                                isNaN(n) &&
                                                isNaN(r))
                                        )
                                            return !0;
                                        i++;
                                    }
                                    return !1;
                                },
                                ie =
                                    Array.isArray ||
                                    function(e) {
                                        return (
                                            '[object Array]' ===
                                            Object.prototype.toString.call(e)
                                        );
                                    },
                                ae = {},
                                ue = {},
                                ce = {
                                    INDEXEDDB: R,
                                    WEBSQL: ee,
                                    LOCALSTORAGE: re
                                },
                                se = [
                                    ce.INDEXEDDB._driver,
                                    ce.WEBSQL._driver,
                                    ce.LOCALSTORAGE._driver
                                ],
                                fe = ['dropInstance'],
                                le = [
                                    'clear',
                                    'getItem',
                                    'iterate',
                                    'key',
                                    'keys',
                                    'length',
                                    'removeItem',
                                    'setItem'
                                ].concat(fe),
                                de = {
                                    description: '',
                                    driver: se.slice(),
                                    name: 'localforage',
                                    size: 4980736,
                                    storeName: 'keyvaluepairs',
                                    version: 1
                                };
                            function he(e, t) {
                                e[t] = function() {
                                    var n = arguments;
                                    return e.ready().then(function() {
                                        return e[t].apply(e, n);
                                    });
                                };
                            }
                            function ve() {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    if (t)
                                        for (var n in t)
                                            t.hasOwnProperty(n) &&
                                                (ie(t[n])
                                                    ? (arguments[0][n] = t[
                                                          n
                                                      ].slice())
                                                    : (arguments[0][n] = t[n]));
                                }
                                return arguments[0];
                            }
                            var pe = new ((function() {
                                function e(t) {
                                    for (var n in ((function(e, t) {
                                        if (!(e instanceof t))
                                            throw new TypeError(
                                                'Cannot call a class as a function'
                                            );
                                    })(this, e),
                                    ce))
                                        if (ce.hasOwnProperty(n)) {
                                            var r = ce[n],
                                                o = r._driver;
                                            (this[n] = o),
                                                ae[o] || this.defineDriver(r);
                                        }
                                    (this._defaultConfig = ve({}, de)),
                                        (this._config = ve(
                                            {},
                                            this._defaultConfig,
                                            t
                                        )),
                                        (this._driverSet = null),
                                        (this._initDriver = null),
                                        (this._ready = !1),
                                        (this._dbInfo = null),
                                        this._wrapLibraryMethodsWithReady(),
                                        this.setDriver(
                                            this._config.driver
                                        ).catch(function() {});
                                }
                                return (
                                    (e.prototype.config = function(e) {
                                        if (
                                            'object' ===
                                            (void 0 === e ? 'undefined' : r(e))
                                        ) {
                                            if (this._ready)
                                                return new Error(
                                                    "Can't call config() after localforage has been used."
                                                );
                                            for (var t in e) {
                                                if (
                                                    ('storeName' === t &&
                                                        (e[t] = e[t].replace(
                                                            /\W/g,
                                                            '_'
                                                        )),
                                                    'version' === t &&
                                                        'number' != typeof e[t])
                                                )
                                                    return new Error(
                                                        'Database version must be a number.'
                                                    );
                                                this._config[t] = e[t];
                                            }
                                            return (
                                                !('driver' in e && e.driver) ||
                                                this.setDriver(
                                                    this._config.driver
                                                )
                                            );
                                        }
                                        return 'string' == typeof e
                                            ? this._config[e]
                                            : this._config;
                                    }),
                                    (e.prototype.defineDriver = function(
                                        e,
                                        t,
                                        n
                                    ) {
                                        var r = new a(function(t, n) {
                                            try {
                                                var r = e._driver,
                                                    o = new Error(
                                                        'Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver'
                                                    );
                                                if (!e._driver)
                                                    return void n(o);
                                                for (
                                                    var i = le.concat(
                                                            '_initStorage'
                                                        ),
                                                        c = 0,
                                                        s = i.length;
                                                    c < s;
                                                    c++
                                                ) {
                                                    var f = i[c];
                                                    if (
                                                        (!oe(fe, f) || e[f]) &&
                                                        'function' !=
                                                            typeof e[f]
                                                    )
                                                        return void n(o);
                                                }
                                                !(function() {
                                                    for (
                                                        var t = function(e) {
                                                                return function() {
                                                                    var t = new Error(
                                                                            'Method ' +
                                                                                e +
                                                                                ' is not implemented by the current driver'
                                                                        ),
                                                                        n = a.reject(
                                                                            t
                                                                        );
                                                                    return (
                                                                        u(
                                                                            n,
                                                                            arguments[
                                                                                arguments.length -
                                                                                    1
                                                                            ]
                                                                        ),
                                                                        n
                                                                    );
                                                                };
                                                            },
                                                            n = 0,
                                                            r = fe.length;
                                                        n < r;
                                                        n++
                                                    ) {
                                                        var o = fe[n];
                                                        e[o] || (e[o] = t(o));
                                                    }
                                                })();
                                                var l = function(n) {
                                                    ae[r] &&
                                                        console.info(
                                                            'Redefining LocalForage driver: ' +
                                                                r
                                                        ),
                                                        (ae[r] = e),
                                                        (ue[r] = n),
                                                        t();
                                                };
                                                '_support' in e
                                                    ? e._support &&
                                                      'function' ==
                                                          typeof e._support
                                                        ? e
                                                              ._support()
                                                              .then(l, n)
                                                        : l(!!e._support)
                                                    : l(!0);
                                            } catch (e) {
                                                n(e);
                                            }
                                        });
                                        return c(r, t, n), r;
                                    }),
                                    (e.prototype.driver = function() {
                                        return this._driver || null;
                                    }),
                                    (e.prototype.getDriver = function(e, t, n) {
                                        var r = ae[e]
                                            ? a.resolve(ae[e])
                                            : a.reject(
                                                  new Error('Driver not found.')
                                              );
                                        return c(r, t, n), r;
                                    }),
                                    (e.prototype.getSerializer = function(e) {
                                        var t = a.resolve(Q);
                                        return c(t, e), t;
                                    }),
                                    (e.prototype.ready = function(e) {
                                        var t = this,
                                            n = t._driverSet.then(function() {
                                                return (
                                                    null === t._ready &&
                                                        (t._ready = t._initDriver()),
                                                    t._ready
                                                );
                                            });
                                        return c(n, e, e), n;
                                    }),
                                    (e.prototype.setDriver = function(e, t, n) {
                                        var r = this;
                                        ie(e) || (e = [e]);
                                        var o = this._getSupportedDrivers(e);
                                        function i() {
                                            r._config.driver = r.driver();
                                        }
                                        function u(e) {
                                            return (
                                                r._extend(e),
                                                i(),
                                                (r._ready = r._initStorage(
                                                    r._config
                                                )),
                                                r._ready
                                            );
                                        }
                                        var s =
                                            null !== this._driverSet
                                                ? this._driverSet.catch(
                                                      function() {
                                                          return a.resolve();
                                                      }
                                                  )
                                                : a.resolve();
                                        return (
                                            (this._driverSet = s
                                                .then(function() {
                                                    var e = o[0];
                                                    return (
                                                        (r._dbInfo = null),
                                                        (r._ready = null),
                                                        r
                                                            .getDriver(e)
                                                            .then(function(e) {
                                                                (r._driver =
                                                                    e._driver),
                                                                    i(),
                                                                    r._wrapLibraryMethodsWithReady(),
                                                                    (r._initDriver = (function(
                                                                        e
                                                                    ) {
                                                                        return function() {
                                                                            var t = 0;
                                                                            return (function n() {
                                                                                for (
                                                                                    ;
                                                                                    t <
                                                                                    e.length;

                                                                                ) {
                                                                                    var o =
                                                                                        e[
                                                                                            t
                                                                                        ];
                                                                                    return (
                                                                                        t++,
                                                                                        (r._dbInfo = null),
                                                                                        (r._ready = null),
                                                                                        r
                                                                                            .getDriver(
                                                                                                o
                                                                                            )
                                                                                            .then(
                                                                                                u
                                                                                            )
                                                                                            .catch(
                                                                                                n
                                                                                            )
                                                                                    );
                                                                                }
                                                                                i();
                                                                                var c = new Error(
                                                                                    'No available storage method found.'
                                                                                );
                                                                                return (
                                                                                    (r._driverSet = a.reject(
                                                                                        c
                                                                                    )),
                                                                                    r._driverSet
                                                                                );
                                                                            })();
                                                                        };
                                                                    })(o));
                                                            })
                                                    );
                                                })
                                                .catch(function() {
                                                    i();
                                                    var e = new Error(
                                                        'No available storage method found.'
                                                    );
                                                    return (
                                                        (r._driverSet = a.reject(
                                                            e
                                                        )),
                                                        r._driverSet
                                                    );
                                                })),
                                            c(this._driverSet, t, n),
                                            this._driverSet
                                        );
                                    }),
                                    (e.prototype.supports = function(e) {
                                        return !!ue[e];
                                    }),
                                    (e.prototype._extend = function(e) {
                                        ve(this, e);
                                    }),
                                    (e.prototype._getSupportedDrivers = function(
                                        e
                                    ) {
                                        for (
                                            var t = [], n = 0, r = e.length;
                                            n < r;
                                            n++
                                        ) {
                                            var o = e[n];
                                            this.supports(o) && t.push(o);
                                        }
                                        return t;
                                    }),
                                    (e.prototype._wrapLibraryMethodsWithReady = function() {
                                        for (
                                            var e = 0, t = le.length;
                                            e < t;
                                            e++
                                        )
                                            he(this, le[e]);
                                    }),
                                    (e.prototype.createInstance = function(t) {
                                        return new e(t);
                                    }),
                                    e
                                );
                            })())();
                            t.exports = pe;
                        },
                        { 3: 3 }
                    ]
                },
                {},
                [4]
            )(4);
        }.call(this, n(9)));
    },
    function(e, t, n) {
        e.exports = n(5);
    },
    function(e, t, n) {
        var r = n(6),
            o = n(7),
            i = n(8);
        e.exports = function(e, t) {
            return r(e) || o(e, t) || i();
        };
    },
    function(e, t, n) {
        var r = (function(e) {
            'use strict';
            var t,
                n = Object.prototype,
                r = n.hasOwnProperty,
                o = 'function' == typeof Symbol ? Symbol : {},
                i = o.iterator || '@@iterator',
                a = o.asyncIterator || '@@asyncIterator',
                u = o.toStringTag || '@@toStringTag';
            function c(e, t, n, r) {
                var o = t && t.prototype instanceof p ? t : p,
                    i = Object.create(o.prototype),
                    a = new N(r || []);
                return (
                    (i._invoke = (function(e, t, n) {
                        var r = f;
                        return function(o, i) {
                            if (r === d)
                                throw new Error('Generator is already running');
                            if (r === h) {
                                if ('throw' === o) throw i;
                                return R();
                            }
                            for (n.method = o, n.arg = i; ; ) {
                                var a = n.delegate;
                                if (a) {
                                    var u = I(a, n);
                                    if (u) {
                                        if (u === v) continue;
                                        return u;
                                    }
                                }
                                if ('next' === n.method)
                                    n.sent = n._sent = n.arg;
                                else if ('throw' === n.method) {
                                    if (r === f) throw ((r = h), n.arg);
                                    n.dispatchException(n.arg);
                                } else
                                    'return' === n.method &&
                                        n.abrupt('return', n.arg);
                                r = d;
                                var c = s(e, t, n);
                                if ('normal' === c.type) {
                                    if (((r = n.done ? h : l), c.arg === v))
                                        continue;
                                    return { value: c.arg, done: n.done };
                                }
                                'throw' === c.type &&
                                    ((r = h),
                                    (n.method = 'throw'),
                                    (n.arg = c.arg));
                            }
                        };
                    })(e, n, a)),
                    i
                );
            }
            function s(e, t, n) {
                try {
                    return { type: 'normal', arg: e.call(t, n) };
                } catch (e) {
                    return { type: 'throw', arg: e };
                }
            }
            e.wrap = c;
            var f = 'suspendedStart',
                l = 'suspendedYield',
                d = 'executing',
                h = 'completed',
                v = {};
            function p() {}
            function y() {}
            function m() {}
            var g = {};
            g[i] = function() {
                return this;
            };
            var b = Object.getPrototypeOf,
                w = b && b(b(O([])));
            w && w !== n && r.call(w, i) && (g = w);
            var _ = (m.prototype = p.prototype = Object.create(g));
            function E(e) {
                ['next', 'throw', 'return'].forEach(function(t) {
                    e[t] = function(e) {
                        return this._invoke(t, e);
                    };
                });
            }
            function S(e) {
                var t;
                this._invoke = function(n, o) {
                    function i() {
                        return new Promise(function(t, i) {
                            !(function t(n, o, i, a) {
                                var u = s(e[n], e, o);
                                if ('throw' !== u.type) {
                                    var c = u.arg,
                                        f = c.value;
                                    return f &&
                                        'object' == typeof f &&
                                        r.call(f, '__await')
                                        ? Promise.resolve(f.__await).then(
                                              function(e) {
                                                  t('next', e, i, a);
                                              },
                                              function(e) {
                                                  t('throw', e, i, a);
                                              }
                                          )
                                        : Promise.resolve(f).then(
                                              function(e) {
                                                  (c.value = e), i(c);
                                              },
                                              function(e) {
                                                  return t('throw', e, i, a);
                                              }
                                          );
                                }
                                a(u.arg);
                            })(n, o, t, i);
                        });
                    }
                    return (t = t ? t.then(i, i) : i());
                };
            }
            function I(e, n) {
                var r = e.iterator[n.method];
                if (r === t) {
                    if (((n.delegate = null), 'throw' === n.method)) {
                        if (
                            e.iterator.return &&
                            ((n.method = 'return'),
                            (n.arg = t),
                            I(e, n),
                            'throw' === n.method)
                        )
                            return v;
                        (n.method = 'throw'),
                            (n.arg = new TypeError(
                                "The iterator does not provide a 'throw' method"
                            ));
                    }
                    return v;
                }
                var o = s(r, e.iterator, n.arg);
                if ('throw' === o.type)
                    return (
                        (n.method = 'throw'),
                        (n.arg = o.arg),
                        (n.delegate = null),
                        v
                    );
                var i = o.arg;
                return i
                    ? i.done
                        ? ((n[e.resultName] = i.value),
                          (n.next = e.nextLoc),
                          'return' !== n.method &&
                              ((n.method = 'next'), (n.arg = t)),
                          (n.delegate = null),
                          v)
                        : i
                    : ((n.method = 'throw'),
                      (n.arg = new TypeError(
                          'iterator result is not an object'
                      )),
                      (n.delegate = null),
                      v);
            }
            function L(e) {
                var t = { tryLoc: e[0] };
                1 in e && (t.catchLoc = e[1]),
                    2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                    this.tryEntries.push(t);
            }
            function x(e) {
                var t = e.completion || {};
                (t.type = 'normal'), delete t.arg, (e.completion = t);
            }
            function N(e) {
                (this.tryEntries = [{ tryLoc: 'root' }]),
                    e.forEach(L, this),
                    this.reset(!0);
            }
            function O(e) {
                if (e) {
                    var n = e[i];
                    if (n) return n.call(e);
                    if ('function' == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var o = -1,
                            a = function n() {
                                for (; ++o < e.length; )
                                    if (r.call(e, o))
                                        return (
                                            (n.value = e[o]), (n.done = !1), n
                                        );
                                return (n.value = t), (n.done = !0), n;
                            };
                        return (a.next = a);
                    }
                }
                return { next: R };
            }
            function R() {
                return { value: t, done: !0 };
            }
            return (
                (y.prototype = _.constructor = m),
                (m.constructor = y),
                (m[u] = y.displayName = 'GeneratorFunction'),
                (e.isGeneratorFunction = function(e) {
                    var t = 'function' == typeof e && e.constructor;
                    return (
                        !!t &&
                        (t === y ||
                            'GeneratorFunction' === (t.displayName || t.name))
                    );
                }),
                (e.mark = function(e) {
                    return (
                        Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, m)
                            : ((e.__proto__ = m),
                              u in e || (e[u] = 'GeneratorFunction')),
                        (e.prototype = Object.create(_)),
                        e
                    );
                }),
                (e.awrap = function(e) {
                    return { __await: e };
                }),
                E(S.prototype),
                (S.prototype[a] = function() {
                    return this;
                }),
                (e.AsyncIterator = S),
                (e.async = function(t, n, r, o) {
                    var i = new S(c(t, n, r, o));
                    return e.isGeneratorFunction(n)
                        ? i
                        : i.next().then(function(e) {
                              return e.done ? e.value : i.next();
                          });
                }),
                E(_),
                (_[u] = 'Generator'),
                (_[i] = function() {
                    return this;
                }),
                (_.toString = function() {
                    return '[object Generator]';
                }),
                (e.keys = function(e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return (
                        t.reverse(),
                        function n() {
                            for (; t.length; ) {
                                var r = t.pop();
                                if (r in e)
                                    return (n.value = r), (n.done = !1), n;
                            }
                            return (n.done = !0), n;
                        }
                    );
                }),
                (e.values = O),
                (N.prototype = {
                    constructor: N,
                    reset: function(e) {
                        if (
                            ((this.prev = 0),
                            (this.next = 0),
                            (this.sent = this._sent = t),
                            (this.done = !1),
                            (this.delegate = null),
                            (this.method = 'next'),
                            (this.arg = t),
                            this.tryEntries.forEach(x),
                            !e)
                        )
                            for (var n in this)
                                't' === n.charAt(0) &&
                                    r.call(this, n) &&
                                    !isNaN(+n.slice(1)) &&
                                    (this[n] = t);
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ('throw' === e.type) throw e.arg;
                        return this.rval;
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var n = this;
                        function o(r, o) {
                            return (
                                (u.type = 'throw'),
                                (u.arg = e),
                                (n.next = r),
                                o && ((n.method = 'next'), (n.arg = t)),
                                !!o
                            );
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var a = this.tryEntries[i],
                                u = a.completion;
                            if ('root' === a.tryLoc) return o('end');
                            if (a.tryLoc <= this.prev) {
                                var c = r.call(a, 'catchLoc'),
                                    s = r.call(a, 'finallyLoc');
                                if (c && s) {
                                    if (this.prev < a.catchLoc)
                                        return o(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc)
                                        return o(a.finallyLoc);
                                } else if (c) {
                                    if (this.prev < a.catchLoc)
                                        return o(a.catchLoc, !0);
                                } else {
                                    if (!s)
                                        throw new Error(
                                            'try statement without catch or finally'
                                        );
                                    if (this.prev < a.finallyLoc)
                                        return o(a.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (
                                o.tryLoc <= this.prev &&
                                r.call(o, 'finallyLoc') &&
                                this.prev < o.finallyLoc
                            ) {
                                var i = o;
                                break;
                            }
                        }
                        i &&
                            ('break' === e || 'continue' === e) &&
                            i.tryLoc <= t &&
                            t <= i.finallyLoc &&
                            (i = null);
                        var a = i ? i.completion : {};
                        return (
                            (a.type = e),
                            (a.arg = t),
                            i
                                ? ((this.method = 'next'),
                                  (this.next = i.finallyLoc),
                                  v)
                                : this.complete(a)
                        );
                    },
                    complete: function(e, t) {
                        if ('throw' === e.type) throw e.arg;
                        return (
                            'break' === e.type || 'continue' === e.type
                                ? (this.next = e.arg)
                                : 'return' === e.type
                                ? ((this.rval = this.arg = e.arg),
                                  (this.method = 'return'),
                                  (this.next = 'end'))
                                : 'normal' === e.type && t && (this.next = t),
                            v
                        );
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e)
                                return (
                                    this.complete(n.completion, n.afterLoc),
                                    x(n),
                                    v
                                );
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ('throw' === r.type) {
                                    var o = r.arg;
                                    x(n);
                                }
                                return o;
                            }
                        }
                        throw new Error('illegal catch attempt');
                    },
                    delegateYield: function(e, n, r) {
                        return (
                            (this.delegate = {
                                iterator: O(e),
                                resultName: n,
                                nextLoc: r
                            }),
                            'next' === this.method && (this.arg = t),
                            v
                        );
                    }
                }),
                e
            );
        })(e.exports);
        try {
            regeneratorRuntime = r;
        } catch (e) {
            Function('r', 'regeneratorRuntime = r')(r);
        }
    },
    function(e, t) {
        e.exports = function(e) {
            if (Array.isArray(e)) return e;
        };
    },
    function(e, t) {
        e.exports = function(e, t) {
            if (
                Symbol.iterator in Object(e) ||
                '[object Arguments]' === Object.prototype.toString.call(e)
            ) {
                var n = [],
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (
                        var a, u = e[Symbol.iterator]();
                        !(r = (a = u.next()).done) &&
                        (n.push(a.value), !t || n.length !== t);
                        r = !0
                    );
                } catch (e) {
                    (o = !0), (i = e);
                } finally {
                    try {
                        r || null == u.return || u.return();
                    } finally {
                        if (o) throw i;
                    }
                }
                return n;
            }
        };
    },
    function(e, t) {
        e.exports = function() {
            throw new TypeError(
                'Invalid attempt to destructure non-iterable instance'
            );
        };
    },
    function(e, t) {
        var n;
        n = (function() {
            return this;
        })();
        try {
            n = n || new Function('return this')();
        } catch (e) {
            'object' == typeof window && (n = window);
        }
        e.exports = n;
    },
    function(e, t, n) {
        'use strict';
        n.r(t);
        var r = n(3),
            o = n.n(r),
            i = function(e, t, n) {
                return window.addEventListener
                    ? window.addEventListener(e, t, n)
                    : window.attachEvent
                    ? window.attachEvent('on' + e, t)
                    : void 0;
            },
            a = function(e, t) {
                for (
                    var n = '',
                        r = e,
                        o = [
                            '0',
                            '1',
                            '2',
                            '3',
                            '4',
                            '5',
                            '6',
                            '7',
                            '8',
                            '9',
                            'a',
                            'b',
                            'c',
                            'd',
                            'e',
                            'f',
                            'g',
                            'h',
                            'i',
                            'j',
                            'k',
                            'l',
                            'm',
                            'n',
                            'o',
                            'p',
                            'q',
                            'r',
                            's',
                            't',
                            'u',
                            'v',
                            'w',
                            'x',
                            'y',
                            'z',
                            'A',
                            'B',
                            'C',
                            'D',
                            'E',
                            'F',
                            'G',
                            'H',
                            'I',
                            'J',
                            'K',
                            'L',
                            'M',
                            'N',
                            'O',
                            'P',
                            'Q',
                            'R',
                            'S',
                            'T',
                            'U',
                            'V',
                            'W',
                            'X',
                            'Y',
                            'Z'
                        ],
                        i = 0;
                    i < r;
                    i++
                )
                    n += o[Math.round(Math.random() * (o.length - 1))];
                return n;
            },
            u = function() {
                var e = this,
                    t = function e(t) {
                        t.options = e.options;
                        var n = 0;
                        !(function r(o) {
                            var i = e.routes[n++];
                            if (i)
                                if (o) {
                                    if (
                                        'middle' === i.method &&
                                        3 === i.handler.length
                                    )
                                        return i.handler(t, r, o);
                                    r(o);
                                } else if ('middle' === i.method) {
                                    if ('/' === i.pathname)
                                        return i.handler(t, r);
                                    r();
                                }
                        })();
                    };
                return (
                    (t.options = {
                        token: '',
                        origin: '',
                        frequency: 1,
                        paramEncryption: function(e) {
                            return e;
                        }
                    }),
                    (t.routes = []),
                    (t.use = function(n) {
                        return (
                            t.routes.push({
                                method: 'middle',
                                pathname: '/',
                                handler: n
                            }),
                            e
                        );
                    }),
                    (t.listen = function(e) {}),
                    (t.init = function(e) {
                        if (!e.userId) {
                            var n,
                                r = localStorage.getItem('WALLUSERID');
                            r
                                ? (n = r)
                                : ((n = 'wall_' + a(32)),
                                  localStorage.setItem('WALLUSERID', n)),
                                (e.userId = n);
                        }
                        t.options = Object.assign(
                            Object.assign({}, t.options),
                            e
                        );
                    }),
                    t
                );
            },
            c = n(4),
            s = n.n(c),
            f = n(0),
            l = n.n(f),
            d = n(1),
            h = n.n(d),
            v = (function() {
                function e(t) {
                    var n = this;
                    l()(this, e),
                        (this.formatError = function(e, t) {
                            var r = e.column || e.columnNumber,
                                o = e.line || e.lineNumber,
                                i = e.message,
                                a = e.name,
                                u = e.stack;
                            if (u) {
                                var c = n.getStackInfo(u),
                                    s = c.content,
                                    f = c.resourceUrl,
                                    l = c.stackRow,
                                    d = c.stackCol;
                                return Object.assign(Object.assign({}, t), {
                                    info: {
                                        row: Number(o || l),
                                        col: Number(r || d),
                                        name: a,
                                        message: i,
                                        content: s,
                                        resourceUrl: f
                                    }
                                });
                            }
                            return Object.assign(Object.assign({}, t), {
                                info: { row: o, col: r, name: a, message: i }
                            });
                        }),
                        (this.WALL = t),
                        this.createCustomEvent(),
                        this.changeRriginAddEventListener(),
                        this.onError(),
                        this.originOnunhandledrejection(),
                        this.startAddentListener(),
                        this.consoleError();
                }
                return (
                    h()(e, [
                        {
                            key: 'createCustomEvent',
                            value: function() {
                                var e = this;
                                this.WALL.createCustomErrorEvent = function(
                                    t,
                                    n
                                ) {
                                    var r = {
                                        type: 'ERROR_CUSTOM',
                                        info: {
                                            message: '静态资源加载错误',
                                            content: n
                                        }
                                    };
                                    e.WALL(r);
                                };
                            }
                        },
                        {
                            key: 'changeRriginAddEventListener',
                            value: function() {
                                var e = EventTarget.prototype.addEventListener;
                                EventTarget.prototype.addEventListener = function(
                                    t,
                                    n,
                                    r
                                ) {
                                    var o = new Error('Event ('.concat(t, ')'))
                                        .stack;
                                    return e.call(
                                        this,
                                        t,
                                        function() {
                                            try {
                                                for (
                                                    var e = arguments.length,
                                                        t = new Array(e),
                                                        r = 0;
                                                    r < e;
                                                    r++
                                                )
                                                    t[r] = arguments[r];
                                                return n.apply(this, t);
                                            } catch (e) {
                                                throw ((e.stack += '\n' + o),
                                                e);
                                            }
                                        },
                                        r
                                    );
                                };
                            }
                        },
                        {
                            key: 'onError',
                            value: function() {
                                var e = window.onerror;
                                window.onerror = function() {
                                    for (
                                        var t = arguments.length,
                                            n = new Array(t),
                                            r = 0;
                                        r < t;
                                        r++
                                    )
                                        n[r] = arguments[r];
                                    n[0], n[1], n[2], n[3], n[4];
                                    e && e.apply(window, n);
                                };
                            }
                        },
                        {
                            key: 'getStackInfo',
                            value: function(e) {
                                var t = e.match(/https?:\/\/[^\n]+/),
                                    n = t ? t[0] : '',
                                    r = /https?:\/\/(\S)*\.js/,
                                    o = '';
                                r.test(n) && (o = n.match(r)[0]);
                                var i = null,
                                    a = null,
                                    u = n.match(/:(\d+):(\d+)/);
                                if (u && u.length >= 3) {
                                    var c = s()(u, 3);
                                    (i = c[1]), (a = c[2]);
                                }
                                return {
                                    content: e,
                                    resourceUrl: o,
                                    stackRow: a,
                                    stackCol: i
                                };
                            }
                        },
                        {
                            key: 'originOnunhandledrejection',
                            value: function() {
                                var e = this,
                                    t = window.onunhandledrejection;
                                window.onunhandledrejection = function() {
                                    for (
                                        var n = arguments.length,
                                            r = new Array(n),
                                            o = 0;
                                        o < n;
                                        o++
                                    )
                                        r[o] = arguments[o];
                                    var i = r[0];
                                    i.preventDefault();
                                    var a = {
                                            message: 'primise 错误',
                                            content: i.reason
                                        },
                                        u = { type: 'ERROR_PROMISE', info: a };
                                    e.WALL(u), t && t.apply(window, r);
                                };
                            }
                        },
                        {
                            key: 'startAddentListener',
                            value: function() {
                                window.addEventListener(
                                    'error',
                                    function(e) {
                                        var t = e.target.localName;
                                        if ('link' === t) e.target.href;
                                        else if ('script' === t) e.target.src;
                                        else if ('img' === t) {
                                            var n = {
                                                type: 'ERROR_SOURCE',
                                                info: {
                                                    message: '静态资源加载错误',
                                                    typeName: t,
                                                    sourceUrl: e.target.src
                                                }
                                            };
                                            this.WALL(n);
                                        }
                                    },
                                    !0
                                );
                            }
                        },
                        {
                            key: 'consoleError',
                            value: function() {
                                var e = window.console.error,
                                    t = this;
                                window.console.error = function() {
                                    for (
                                        var n = arguments.length,
                                            r = new Array(n),
                                            o = 0;
                                        o < n;
                                        o++
                                    )
                                        r[o] = arguments[o];
                                    var i = {
                                        type: 'ERROR_CONSOLE',
                                        info: { message: JSON.stringify(r) }
                                    };
                                    t.WALL(i), e && e.apply(window, r);
                                };
                            }
                        }
                    ]),
                    e
                );
            })(),
            p = (function() {
                function e(t) {
                    l()(this, e),
                        (this.getXpath = function(e) {
                            if (!(e instanceof Element)) return '';
                            if (1 !== e.nodeType) return '';
                            if (e === document.body) return '';
                            var t = e.tagName.toLocaleLowerCase();
                            if ('html' === t || 'body' === t) return '';
                            for (var n = ''; e !== document; ) {
                                (n = '/' + e.tagName.toLocaleLowerCase() + n),
                                    (e = e.parentNode);
                            }
                            return n;
                        }),
                        (this.WALL = t),
                        this.listenerClick(),
                        this.listenerHashChange(),
                        this.customBehavior();
                }
                return (
                    h()(e, [
                        {
                            key: 'listenerClick',
                            value: function() {
                                var e = this;
                                document.addEventListener(
                                    'click',
                                    function(t) {
                                        var n = e.getXpath(t.target),
                                            r = t.target.value || '',
                                            o = t.target.placeholder || '',
                                            i = t.target.className;
                                        if (
                                            (r.length > 20 &&
                                                (r = r.substring(0, 20)),
                                            n)
                                        ) {
                                            var a = {
                                                type: 'BEHAVIOR_XPATH',
                                                info: {
                                                    message: '用户路径',
                                                    xpath: n,
                                                    inputValue: r,
                                                    placeholder: o,
                                                    className: i
                                                }
                                            };
                                            e.WALL(a);
                                        }
                                    },
                                    !1
                                );
                            }
                        },
                        {
                            key: 'listenerHashChange',
                            value: function() {
                                if (
                                    (console.log(9),
                                    !('onhashchange' in window.document.body))
                                )
                                    return !1;
                                var e,
                                    t = this,
                                    n = {
                                        message: '用户页面跳转',
                                        oldURL: '',
                                        newURL: ''
                                    },
                                    r = 0;
                                window.addEventListener(
                                    'hashchange',
                                    function(e) {
                                        return (
                                            console.log(99999999),
                                            (r = +new Date()),
                                            (n.oldURL = e.oldURL),
                                            (n.newURL = e.newURL),
                                            !0
                                        );
                                    },
                                    !1
                                ),
                                    i(
                                        'popstate',
                                        function(o) {
                                            console.log(999),
                                                (e = +new Date()),
                                                setTimeout(function() {
                                                    e - r < 400 ||
                                                        console.log(o);
                                                    var i = {
                                                        type:
                                                            'BEHAVIOR_URLCHANGE',
                                                        info: n
                                                    };
                                                    t.WALL(i);
                                                }, 500);
                                        },
                                        !1
                                    );
                            }
                        },
                        {
                            key: 'customBehavior',
                            value: function() {
                                this.WALL.createCustomBehaviorEvent = function(
                                    e,
                                    t,
                                    n
                                ) {
                                    var r = {
                                        type: 'BEHAVIOR_CUSTOM',
                                        info: {
                                            message: n,
                                            behaviorType: e,
                                            behaviorResult: t
                                        }
                                    };
                                    self.WALL(r);
                                };
                            }
                        }
                    ]),
                    e
                );
            })(),
            y = (function() {
                function e(t) {
                    l()(this, e), (this.WALL = t);
                }
                return (
                    h()(e, [
                        {
                            key: 'getPerformanceEntries',
                            value: function() {
                                var e =
                                    window.performance ||
                                    window.mozPerformance ||
                                    window.msPerformance ||
                                    window.webkitPerformance;
                                return e && 'function' == typeof e.getEntries
                                    ? e.getEntries()
                                    : null;
                            }
                        },
                        {
                            key: 'getPerformanceTiming',
                            value: function() {
                                return performance && performance.timing
                                    ? performance.timing
                                    : null;
                            }
                        },
                        {
                            key: 'reloadPageType',
                            value: function() {
                                var e = this.getPerformanceEntries();
                                if (e)
                                    return e[0] && 'navigate' === e[0].type
                                        ? 'navigate'
                                        : 'reload';
                            }
                        },
                        {
                            key: 'getTimingObj',
                            value: function() {
                                var e = this.getPerformanceTiming(),
                                    t = {
                                        type: 'RESCOURCES',
                                        info: {
                                            message: '页面加载时间',
                                            loadType: this.reloadPageType(),
                                            loadPageTime:
                                                e.loadEventEnd -
                                                    e.navigationStart || 0,
                                            domReady:
                                                e.domComplete - e.responseEnd ||
                                                0,
                                            redirect:
                                                e.redirectEnd -
                                                    e.redirectStart || 0,
                                            lookupDomain:
                                                e.domainLookupEnd -
                                                    e.domainLookupStart || 0,
                                            ttfb:
                                                e.responseStart -
                                                    e.navigationStart || 0,
                                            request:
                                                e.responseEnd -
                                                    e.requestStart || 0,
                                            loadEvent:
                                                e.loadEventEnd -
                                                    e.loadEventStart || 0,
                                            appcache:
                                                e.domainLookupStart -
                                                    e.fetchStart || 0,
                                            unloadEvent:
                                                e.unloadEventEnd -
                                                    e.unloadEventStart || 0,
                                            connect:
                                                e.connectEnd - e.connectStart ||
                                                0
                                        }
                                    };
                                this.WALL(t);
                            }
                        }
                    ]),
                    e
                );
            })(),
            m = (function() {
                function e() {
                    l()(this, e), (this.head = null);
                }
                return (
                    h()(e, [
                        {
                            key: 'initLinkNode',
                            value: function(e) {
                                try {
                                    this.head = JSON.parse(e);
                                } catch (e) {
                                    console.log(e);
                                }
                            }
                        },
                        {
                            key: 'createNode',
                            value: function(e) {
                                return { next: null, key: e };
                            }
                        },
                        {
                            key: 'insert',
                            value: function(e) {
                                var t = this.createNode(e);
                                return (
                                    this.head && (t.next = this.head),
                                    (this.head = t),
                                    this.head
                                );
                            }
                        },
                        {
                            key: 'getFiveNodeKeys',
                            value: function() {
                                for (
                                    var e = [], t = this.head, n = 0;
                                    t && n < 5;

                                )
                                    (n += 1), e.push(t.key), (t = t.next);
                                return e;
                            }
                        },
                        {
                            key: 'delete',
                            value: function(e) {
                                var t = e.prev,
                                    n = e.next;
                                delete e.prev,
                                    delete e.next,
                                    e === this.head && (this.head = n),
                                    t && (t.next = n),
                                    n && (n.prev = t);
                            }
                        }
                    ]),
                    e
                );
            })(),
            g = (function() {
                function e(t) {
                    var n = this;
                    l()(this, e),
                        (this.xhr = window.XMLHttpRequest),
                        (this.originOpen = this.xhr.prototype.open),
                        (this.originSend = this.xhr.prototype.send),
                        (this.eventListenerMethods = [
                            'load',
                            'error',
                            'abort',
                            'timeout'
                        ]),
                        (this.xhrInfo = { message: '' }),
                        (this.handleEvent = function(e) {
                            return function(t) {
                                var r = null;
                                if (t.responseType)
                                    switch (t.responseType) {
                                        case 'json':
                                            r =
                                                JSON &&
                                                JSON.stringify(t.response)
                                                    .length;
                                            break;
                                        case 'blob':
                                        case 'moz-blob':
                                            r = t.response.size;
                                        case 'arraybufffer':
                                            r = t.response.byteLength;
                                        case 'document':
                                            r = n.getDocumentElement(t);
                                            break;
                                        default:
                                            r = t.response.length;
                                    }
                                e.senInfo(t, r);
                            };
                        }),
                        (this.WALL = t),
                        this.xhropen(),
                        this.xhrsend();
                }
                return (
                    h()(e, [
                        {
                            key: 'xhropen',
                            value: function() {
                                var e = this;
                                e.xhr.prototype.open = function(t, n) {
                                    return (
                                        (e.xhrInfo = {
                                            message: '异步请求',
                                            url: n,
                                            method: t,
                                            status: null
                                        }),
                                        e.originOpen.apply(this, arguments)
                                    );
                                };
                            }
                        },
                        {
                            key: 'xhrsend',
                            value: function() {
                                var e = this;
                                this.xhr.prototype.send = function(t) {
                                    var n = this;
                                    if (
                                        ((e.param = t),
                                        (e._eagle_start_time = Date.now()),
                                        n.addEventListener)
                                    )
                                        e.eventListenerMethods.reduce(function(
                                            t,
                                            n
                                        ) {
                                            return (
                                                t.addEventListener(
                                                    n,
                                                    e.handleEvent(e),
                                                    !1
                                                ),
                                                t
                                            );
                                        },
                                        n);
                                    else {
                                        var r = n.onreadystatechange;
                                        n.onreadystatechange = function(t) {
                                            4 == n.readyState &&
                                                200 == n.status &&
                                                e.handleEvent(t),
                                                r && r.apply(this, arguments);
                                        };
                                    }
                                    return e.originSend.apply(this, arguments);
                                };
                            }
                        },
                        {
                            key: 'senInfo',
                            value: function(e, t) {
                                if (e.currentTarget) {
                                    var n = e.currentTarget;
                                    (this.xhrInfo.responseSize = t),
                                        (this.xhrInfo.status = n.status),
                                        (this.xhrInfo.statusText =
                                            n.statusText),
                                        (this.xhrInfo.success = this.isXhrSuccess(
                                            n
                                        )),
                                        (this.xhrInfo.duration =
                                            Date.now() -
                                            this._eagle_start_time),
                                        (this.xhrInfo.requestDate = this.WALL.options.paramEncryption(
                                            this.param
                                        ));
                                    var r = {
                                        type: 'BEHAVIOR_XHR',
                                        info: this.xhrInfo
                                    };
                                    this.xhrInfo.success ||
                                        (r.type = 'ERROR_XHR'),
                                        this.WALL(r);
                                }
                            }
                        },
                        {
                            key: 'getDocumentElement',
                            value: function(e) {
                                return (
                                    e.response.documentElement &&
                                    e.response.documentElement.innerHTML &&
                                    e.response.documentElement.innerHTML
                                        .length + 28
                                );
                            }
                        },
                        {
                            key: 'isXhrSuccess',
                            value: function(e) {
                                return (
                                    (e.status >= 200 && e.status <= 206) ||
                                    304 === e.status
                                );
                            }
                        }
                    ]),
                    e
                );
            })(),
            b = n(2),
            w = function(e) {
                return b.getItem('LINLNODEIDS').then(function(t) {
                    e.initLinkNode(t);
                });
            },
            _ = function(e, t) {
                return b
                    .setItem(e.key, JSON.stringify(e))
                    .then(function(n) {
                        return t.insert(e.key);
                    })
                    .catch(function(e) {
                        console.log(e);
                    });
            },
            E = function(e) {
                b.setItem('LINLNODEIDS', JSON.stringify(e));
            },
            S = function(e, t, n, r) {
                return new (n || (n = Promise))(function(o, i) {
                    function a(e) {
                        try {
                            c(r.next(e));
                        } catch (e) {
                            i(e);
                        }
                    }
                    function u(e) {
                        try {
                            c(r.throw(e));
                        } catch (e) {
                            i(e);
                        }
                    }
                    function c(e) {
                        var t;
                        e.done
                            ? o(e.value)
                            : ((t = e.value),
                              t instanceof n
                                  ? t
                                  : new n(function(e) {
                                        e(t);
                                    })).then(a, u);
                    }
                    c((r = r.apply(e, t || [])).next());
                });
            },
            I = u(),
            L = new m();
        I.use(function(e, t) {
            console.log(e);
            var n = (function() {
                    var e = { os: 'web', deviceName: 'PC' },
                        t = navigator.userAgent,
                        n = t.match(/(Android);?[\s\/]+([\d.]+)?/),
                        r = t.match(/(iPad).*OS\s([\d_]+)/),
                        o = t.match(/(iPod)(.*OS\s([\d_]+))?/),
                        i = !r && t.match(/(iPhone\sOS)\s([\d_]+)/),
                        a = t.match(/Android\s[\S\s]+Build\//);
                    if (
                        ((e.ios = !1),
                        (e.android = !1),
                        (e.iphone = !1),
                        (e.ipad = !1),
                        (e.androidChrome = !1),
                        (e.isWeixin = /MicroMessenger/i.test(t)),
                        n &&
                            ((e.os = 'android'),
                            (e.osVersion = n[2]),
                            (e.android = !0),
                            (e.androidChrome =
                                t.toLowerCase().indexOf('chrome') >= 0)),
                        (r || i || o) && ((e.os = 'ios'), (e.ios = !0)),
                        i &&
                            !o &&
                            ((e.osVersion = i[2].replace(/_/g, '.')),
                            (e.iphone = !0)),
                        r &&
                            ((e.osVersion = r[2].replace(/_/g, '.')),
                            (e.ipad = !0)),
                        o &&
                            ((e.osVersion = o[3]
                                ? o[3].replace(/_/g, '.')
                                : null),
                            (e.iphone = !0)),
                        e.ios &&
                            e.osVersion &&
                            t.indexOf('Version/') >= 0 &&
                            '10' === e.osVersion.split('.')[0] &&
                            (e.osVersion = t
                                .toLowerCase()
                                .split('version/')[1]
                                .split(' ')[0]),
                        e.iphone)
                    ) {
                        e.deviceName = 'iphone';
                        var u = window.screen.width,
                            c = window.screen.height;
                        320 === u && 480 === c
                            ? (e.deviceName = 'iphone 4')
                            : 320 === u && 568 === c
                            ? (e.deviceName = 'iphone 5/SE')
                            : 375 === u && 667 === c
                            ? (e.deviceName = 'iphone 6/7/8')
                            : 414 === u && 736 === c
                            ? (e.deviceName = 'iphone 6/7/8 Plus')
                            : 375 === u &&
                              812 === c &&
                              (e.deviceName = 'iphone X/S/Max');
                    } else if (e.ipad) e.deviceName = 'ipad';
                    else if (a) {
                        var s = a[0].split(';')[1].replace(/Build\//g, '');
                        e.deviceName = s.replace(/(^\s*)|(\s*$)/g, '');
                    }
                    if (-1 == t.indexOf('Mobile')) {
                        var f = navigator.userAgent.toLowerCase();
                        if (((e.browserName = '未知'), f.indexOf('msie') > 0)) {
                            var l = f.match(/msie [\d.]+;/gi)[0];
                            (e.browserName = l.split('/')[0]),
                                (e.browserVersion = l.split('/')[1]);
                        }
                        if (f.indexOf('firefox') > 0) {
                            l = f.match(/firefox\/[\d.]+/gi)[0];
                            (e.browserName = l.split('/')[0]),
                                (e.browserVersion = l.split('/')[1]);
                        }
                        if (
                            f.indexOf('safari') > 0 &&
                            f.indexOf('chrome') < 0
                        ) {
                            l = f.match(/safari\/[\d.]+/gi)[0];
                            (e.browserName = l.split('/')[0]),
                                (e.browserVersion = l.split('/')[1]);
                        }
                        if (f.indexOf('chrome') > 0) {
                            l = f.match(/chrome\/[\d.]+/gi)[0];
                            (e.browserName = l.split('/')[0]),
                                (e.browserVersion = l.split('/')[1]);
                        }
                    }
                    return (
                        (e.webView =
                            (i || r || o) &&
                            t.match(/.*AppleWebKit(?!.*Safari)/i)),
                        e
                    );
                })(),
                r = n.deviceName,
                o = n.os,
                i = n.osVersion,
                u = {
                    deviceName: r,
                    browserName: n.browserName,
                    browserVersion: n.browserVersion,
                    os: o + (i ? String(i) : '')
                };
            (e.key = a(32)),
                (e.createTime = +new Date()),
                (e.deviceInfo = u),
                (e.currentUrl = encodeURIComponent(window.location.href)),
                t();
        }),
            I.use(function(e, t) {
                e.type.includes('ERROR') &&
                    ((e.isUpload = !1),
                    Math.random() < e.options.frequency && (e.isUpload = !0)),
                    t();
            }),
            I.use(function(e, t) {
                t();
            }),
            I.use(function(e, t) {
                return S(
                    void 0,
                    void 0,
                    void 0,
                    o.a.mark(function n() {
                        var r;
                        return o.a.wrap(function(n) {
                            for (;;)
                                switch ((n.prev = n.next)) {
                                    case 0:
                                        if (
                                            !e.type.includes('BEHAVIOR') &&
                                            !e.type.includes('ERROR')
                                        ) {
                                            n.next = 9;
                                            break;
                                        }
                                        return (n.next = 3), w(L);
                                    case 3:
                                        return (n.next = 5), _(e, L);
                                    case 5:
                                        return (r = n.sent), (n.next = 8), E(r);
                                    case 8:
                                        t();
                                    case 9:
                                        t();
                                    case 10:
                                    case 'end':
                                        return n.stop();
                                }
                        }, n);
                    })
                );
            }),
            I.use(function(e, t) {
                return S(
                    void 0,
                    void 0,
                    void 0,
                    o.a.mark(function n() {
                        var r, i;
                        return o.a.wrap(function(n) {
                            for (;;)
                                switch ((n.prev = n.next)) {
                                    case 0:
                                        e.isUpload
                                            ? ((r = L.getFiveNodeKeys()),
                                              (i = r.reduce(function(e, t) {
                                                  return (
                                                      e.push(b.getItem(t)), e
                                                  );
                                              }, [])),
                                              Promise.all(i)
                                                  .then(function(e) {
                                                      return new Promise(
                                                          function(e, t) {
                                                              I.options.origin;
                                                              var n = new Image();
                                                              (n.onload = function() {
                                                                  alert(
                                                                      'img is loaded'
                                                                  );
                                                              }),
                                                                  (n.onerror = function() {
                                                                      t(
                                                                          'error!'
                                                                      );
                                                                  });
                                                          }
                                                      );
                                                  })
                                                  .then(function(e) {
                                                      t();
                                                  })
                                                  .catch(function(e) {
                                                      console.log(e);
                                                  }))
                                            : t();
                                    case 1:
                                    case 'end':
                                        return n.stop();
                                }
                        }, n);
                    })
                );
            }),
            I.listen([new v(I), new g(I), new p(I), new y(I)]),
            (window.WALL = I);
        t.default = I;
    }
]);
