!function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {i: r, l: !1, exports: {}};
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {
            return e[t]
        }.bind(null, o));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 27)
}([function (e, t, n) {
    e.exports = n(14)
}, function (e, t) {
    function n(e, t, n, r, o, i, a) {
        try {
            var c = e[i](a), s = c.value
        } catch (e) {
            return void n(e)
        }
        c.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    e.exports = function (e) {
        return function () {
            var t = this, r = arguments;
            return new Promise((function (o, i) {
                var a = e.apply(t, r);

                function c(e) {
                    n(a, o, i, c, s, "next", e)
                }

                function s(e) {
                    n(a, o, i, c, s, "throw", e)
                }

                c(void 0)
            }))
        }
    }
}, function (e, t, n) {
    var r = n(13);
    e.exports = function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}, o = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            })))), o.forEach((function (t) {
                r(e, t, n[t])
            }))
        }
        return e
    }
}, function (e, t) {
    e.exports = function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
}, function (e, t) {
    function n(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    e.exports = function (e, t, r) {
        return t && n(e.prototype, t), r && n(e, r), e
    }
}, function (e, t) {
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function r(t) {
        return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? e.exports = r = function (e) {
            return n(e)
        } : e.exports = r = function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : n(e)
        }, r(t)
    }

    e.exports = r
}, function (e, t) {
    function n(t) {
        return e.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }, n(t)
    }

    e.exports = n
}, function (e, t) {
    var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
    if (n) {
        var r = new Uint8Array(16);
        e.exports = function () {
            return n(r), r
        }
    } else {
        var o = new Array(16);
        e.exports = function () {
            for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), o[t] = e >>> ((3 & t) << 3) & 255;
            return o
        }
    }
}, function (e, t) {
    for (var n = [], r = 0; r < 256; ++r) n[r] = (r + 256).toString(16).substr(1);
    e.exports = function (e, t) {
        var r = t || 0, o = n;
        return [o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]]].join("")
    }
}, function (e, t, n) {
    var r = n(21), o = n(22), i = o;
    i.v1 = r, i.v4 = o, e.exports = i
}, function (e, t, n) {
    var r = n(5), o = n(23);
    e.exports = function (e, t) {
        return !t || "object" !== r(t) && "function" != typeof t ? o(e) : t
    }
}, function (e, t, n) {
    n(6);
    var r = n(24);

    function o(t, n, i) {
        return "undefined" != typeof Reflect && Reflect.get ? e.exports = o = Reflect.get : e.exports = o = function (e, t, n) {
            var o = r(e, t);
            if (o) {
                var i = Object.getOwnPropertyDescriptor(o, t);
                return i.get ? i.get.call(n) : i.value
            }
        }, o(t, n, i || t)
    }

    e.exports = o
}, function (e, t, n) {
    var r = n(25);
    e.exports = function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && r(e, t)
    }
}, function (e, t) {
    e.exports = function (e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
}, function (e, t, n) {
    var r = function () {
            return this || "object" == typeof self && self
        }() || Function("return this")(),
        o = r.regeneratorRuntime && Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0,
        i = o && r.regeneratorRuntime;
    if (r.regeneratorRuntime = void 0, e.exports = n(15), o) r.regeneratorRuntime = i; else try {
        delete r.regeneratorRuntime
    } catch (e) {
        r.regeneratorRuntime = void 0
    }
}, function (e, t) {
    !function (t) {
        "use strict";
        var n = Object.prototype, r = n.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator",
            c = o.toStringTag || "@@toStringTag", s = "object" == typeof e, u = t.regeneratorRuntime;
        if (u) s && (e.exports = u); else {
            (u = t.regeneratorRuntime = s ? e.exports : {}).wrap = h;
            var l = {}, d = {};
            d[i] = function () {
                return this
            };
            var f = Object.getPrototypeOf, m = f && f(f(T([])));
            m && m !== n && r.call(m, i) && (d = m);
            var p = g.prototype = b.prototype = Object.create(d);
            y.prototype = p.constructor = g, g.constructor = y, g[c] = y.displayName = "GeneratorFunction", u.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === y || "GeneratorFunction" === (t.displayName || t.name))
            }, u.mark = function (e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g, c in e || (e[c] = "GeneratorFunction")), e.prototype = Object.create(p), e
            }, u.awrap = function (e) {
                return {__await: e}
            }, w(_.prototype), _.prototype[a] = function () {
                return this
            }, u.AsyncIterator = _, u.async = function (e, t, n, r) {
                var o = new _(h(e, t, n, r));
                return u.isGeneratorFunction(t) ? o : o.next().then((function (e) {
                    return e.done ? e.value : o.next()
                }))
            }, w(p), p[c] = "Generator", p[i] = function () {
                return this
            }, p.toString = function () {
                return "[object Generator]"
            }, u.keys = function (e) {
                var t = [];
                for (var n in e) t.push(n);
                return t.reverse(), function n() {
                    for (; t.length;) {
                        var r = t.pop();
                        if (r in e) return n.value = r, n.done = !1, n
                    }
                    return n.done = !0, n
                }
            }, u.values = T, S.prototype = {
                constructor: S, reset: function (e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(C), !e) for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                }, stop: function () {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                }, dispatchException: function (e) {
                    if (this.done) throw e;
                    var t = this;

                    function n(n, r) {
                        return a.type = "throw", a.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
                    }

                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o], a = i.completion;
                        if ("root" === i.tryLoc) return n("end");
                        if (i.tryLoc <= this.prev) {
                            var c = r.call(i, "catchLoc"), s = r.call(i, "finallyLoc");
                            if (c && s) {
                                if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                            } else if (c) {
                                if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                            } else {
                                if (!s) throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                            }
                        }
                    }
                }, abrupt: function (e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(a)
                }, complete: function (e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), l
                }, finish: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), C(n), l
                    }
                }, catch: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                C(n)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                }, delegateYield: function (e, t, n) {
                    return this.delegate = {
                        iterator: T(e),
                        resultName: t,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = void 0), l
                }
            }
        }

        function h(e, t, n, r) {
            var o = t && t.prototype instanceof b ? t : b, i = Object.create(o.prototype), a = new S(r || []);
            return i._invoke = function (e, t, n) {
                var r = "suspendedStart";
                return function (o, i) {
                    if ("executing" === r) throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === o) throw i;
                        return A()
                    }
                    for (n.method = o, n.arg = i; ;) {
                        var a = n.delegate;
                        if (a) {
                            var c = k(a, n);
                            if (c) {
                                if (c === l) continue;
                                return c
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                            if ("suspendedStart" === r) throw r = "completed", n.arg;
                            n.dispatchException(n.arg)
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var s = v(e, t, n);
                        if ("normal" === s.type) {
                            if (r = n.done ? "completed" : "suspendedYield", s.arg === l) continue;
                            return {value: s.arg, done: n.done}
                        }
                        "throw" === s.type && (r = "completed", n.method = "throw", n.arg = s.arg)
                    }
                }
            }(e, n, a), i
        }

        function v(e, t, n) {
            try {
                return {type: "normal", arg: e.call(t, n)}
            } catch (e) {
                return {type: "throw", arg: e}
            }
        }

        function b() {
        }

        function y() {
        }

        function g() {
        }

        function w(e) {
            ["next", "throw", "return"].forEach((function (t) {
                e[t] = function (e) {
                    return this._invoke(t, e)
                }
            }))
        }

        function _(e) {
            var t;
            this._invoke = function (n, o) {
                function i() {
                    return new Promise((function (t, i) {
                        !function t(n, o, i, a) {
                            var c = v(e[n], e, o);
                            if ("throw" !== c.type) {
                                var s = c.arg, u = s.value;
                                return u && "object" == typeof u && r.call(u, "__await") ? Promise.resolve(u.__await).then((function (e) {
                                    t("next", e, i, a)
                                }), (function (e) {
                                    t("throw", e, i, a)
                                })) : Promise.resolve(u).then((function (e) {
                                    s.value = e, i(s)
                                }), (function (e) {
                                    return t("throw", e, i, a)
                                }))
                            }
                            a(c.arg)
                        }(n, o, t, i)
                    }))
                }

                return t = t ? t.then(i, i) : i()
            }
        }

        function k(e, t) {
            var n = e.iterator[t.method];
            if (void 0 === n) {
                if (t.delegate = null, "throw" === t.method) {
                    if (e.iterator.return && (t.method = "return", t.arg = void 0, k(e, t), "throw" === t.method)) return l;
                    t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return l
            }
            var r = v(n, e.iterator, t.arg);
            if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, l;
            var o = r.arg;
            return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, l) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, l)
        }

        function x(e) {
            var t = {tryLoc: e[0]};
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
        }

        function C(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t
        }

        function S(e) {
            this.tryEntries = [{tryLoc: "root"}], e.forEach(x, this), this.reset(!0)
        }

        function T(e) {
            if (e) {
                var t = e[i];
                if (t) return t.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var n = -1, o = function t() {
                        for (; ++n < e.length;) if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                        return t.value = void 0, t.done = !0, t
                    };
                    return o.next = o
                }
            }
            return {next: A}
        }

        function A() {
            return {value: void 0, done: !0}
        }
    }(function () {
        return this || "object" == typeof self && self
    }() || Function("return this")())
}, function (e, t, n) {
    "use strict";
    e.exports = n(17).polyfill()
}, function (e, t, n) {
    (function (t, n) {
        /*!
     * @overview es6-promise - a tiny implementation of Promises/A+.
     * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
     * @license   Licensed under MIT license
     *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
     * @version   v4.2.5+7f2b526d
     */
        var r;
        r = function () {
            "use strict";

            function e(e) {
                return "function" == typeof e
            }

            var r = Array.isArray ? Array.isArray : function (e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                }, o = 0, i = void 0, a = void 0, c = function (e, t) {
                    p[o] = e, p[o + 1] = t, 2 === (o += 2) && (a ? a(h) : w())
                }, s = "undefined" != typeof window ? window : void 0, u = s || {},
                l = u.MutationObserver || u.WebKitMutationObserver,
                d = "undefined" == typeof self && void 0 !== t && "[object process]" === {}.toString.call(t),
                f = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

            function m() {
                var e = setTimeout;
                return function () {
                    return e(h, 1)
                }
            }

            var p = new Array(1e3);

            function h() {
                for (var e = 0; e < o; e += 2) (0, p[e])(p[e + 1]), p[e] = void 0, p[e + 1] = void 0;
                o = 0
            }

            var v, b, y, g, w = void 0;

            function _(e, t) {
                var n = this, r = new this.constructor(C);
                void 0 === r[x] && M(r);
                var o = n._state;
                if (o) {
                    var i = arguments[o - 1];
                    c((function () {
                        return D(o, r, i, n._result)
                    }))
                } else z(n, r, e, t);
                return r
            }

            function k(e) {
                if (e && "object" == typeof e && e.constructor === this) return e;
                var t = new this(C);
                return E(t, e), t
            }

            d ? w = function () {
                return t.nextTick(h)
            } : l ? (b = 0, y = new l(h), g = document.createTextNode(""), y.observe(g, {characterData: !0}), w = function () {
                g.data = b = ++b % 2
            }) : f ? ((v = new MessageChannel).port1.onmessage = h, w = function () {
                return v.port2.postMessage(0)
            }) : w = void 0 === s ? function () {
                try {
                    var e = Function("return this")().require("vertx");
                    return void 0 !== (i = e.runOnLoop || e.runOnContext) ? function () {
                        i(h)
                    } : m()
                } catch (e) {
                    return m()
                }
            }() : m();
            var x = Math.random().toString(36).substring(2);

            function C() {
            }

            var S = {error: null};

            function T(e) {
                try {
                    return e.then
                } catch (e) {
                    return S.error = e, S
                }
            }

            function A(t, n, r) {
                n.constructor === t.constructor && r === _ && n.constructor.resolve === k ? function (e, t) {
                    1 === t._state ? j(e, t._result) : 2 === t._state ? O(e, t._result) : z(t, void 0, (function (t) {
                        return E(e, t)
                    }), (function (t) {
                        return O(e, t)
                    }))
                }(t, n) : r === S ? (O(t, S.error), S.error = null) : void 0 === r ? j(t, n) : e(r) ? function (e, t, n) {
                    c((function (e) {
                        var r = !1, o = function (e, t, n, r) {
                            try {
                                e.call(t, n, r)
                            } catch (e) {
                                return e
                            }
                        }(n, t, (function (n) {
                            r || (r = !0, t !== n ? E(e, n) : j(e, n))
                        }), (function (t) {
                            r || (r = !0, O(e, t))
                        }), e._label);
                        !r && o && (r = !0, O(e, o))
                    }), e)
                }(t, n, r) : j(t, n)
            }

            function E(e, t) {
                var n, r;
                e === t ? O(e, new TypeError("You cannot resolve a promise with itself")) : (r = typeof (n = t), null === n || "object" !== r && "function" !== r ? j(e, t) : A(e, t, T(t)))
            }

            function P(e) {
                e._onerror && e._onerror(e._result), B(e)
            }

            function j(e, t) {
                void 0 === e._state && (e._result = t, e._state = 1, 0 !== e._subscribers.length && c(B, e))
            }

            function O(e, t) {
                void 0 === e._state && (e._state = 2, e._result = t, c(P, e))
            }

            function z(e, t, n, r) {
                var o = e._subscribers, i = o.length;
                e._onerror = null, o[i] = t, o[i + 1] = n, o[i + 2] = r, 0 === i && e._state && c(B, e)
            }

            function B(e) {
                var t = e._subscribers, n = e._state;
                if (0 !== t.length) {
                    for (var r = void 0, o = void 0, i = e._result, a = 0; a < t.length; a += 3) r = t[a], o = t[a + n], r ? D(n, r, o, i) : o(i);
                    e._subscribers.length = 0
                }
            }

            function D(t, n, r, o) {
                var i = e(r), a = void 0, c = void 0, s = void 0, u = void 0;
                if (i) {
                    if ((a = function (e, t) {
                        try {
                            return e(t)
                        } catch (e) {
                            return S.error = e, S
                        }
                    }(r, o)) === S ? (u = !0, c = a.error, a.error = null) : s = !0, n === a) return void O(n, new TypeError("A promises callback cannot return that same promise."))
                } else a = o, s = !0;
                void 0 !== n._state || (i && s ? E(n, a) : u ? O(n, c) : 1 === t ? j(n, a) : 2 === t && O(n, a))
            }

            var L = 0;

            function M(e) {
                e[x] = L++, e._state = void 0, e._result = void 0, e._subscribers = []
            }

            var F = function () {
                function e(e, t) {
                    this._instanceConstructor = e, this.promise = new e(C), this.promise[x] || M(this.promise), r(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? j(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && j(this.promise, this._result))) : O(this.promise, new Error("Array Methods must be provided an Array"))
                }

                return e.prototype._enumerate = function (e) {
                    for (var t = 0; void 0 === this._state && t < e.length; t++) this._eachEntry(e[t], t)
                }, e.prototype._eachEntry = function (e, t) {
                    var n = this._instanceConstructor, r = n.resolve;
                    if (r === k) {
                        var o = T(e);
                        if (o === _ && void 0 !== e._state) this._settledAt(e._state, t, e._result); else if ("function" != typeof o) this._remaining--, this._result[t] = e; else if (n === N) {
                            var i = new n(C);
                            A(i, e, o), this._willSettleAt(i, t)
                        } else this._willSettleAt(new n((function (t) {
                            return t(e)
                        })), t)
                    } else this._willSettleAt(r(e), t)
                }, e.prototype._settledAt = function (e, t, n) {
                    var r = this.promise;
                    void 0 === r._state && (this._remaining--, 2 === e ? O(r, n) : this._result[t] = n), 0 === this._remaining && j(r, this._result)
                }, e.prototype._willSettleAt = function (e, t) {
                    var n = this;
                    z(e, void 0, (function (e) {
                        return n._settledAt(1, t, e)
                    }), (function (e) {
                        return n._settledAt(2, t, e)
                    }))
                }, e
            }(), N = function () {
                function t(e) {
                    this[x] = L++, this._result = this._state = void 0, this._subscribers = [], C !== e && ("function" != typeof e && function () {
                        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                    }(), this instanceof t ? function (e, t) {
                        try {
                            t((function (t) {
                                E(e, t)
                            }), (function (t) {
                                O(e, t)
                            }))
                        } catch (t) {
                            O(e, t)
                        }
                    }(this, e) : function () {
                        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                    }())
                }

                return t.prototype.catch = function (e) {
                    return this.then(null, e)
                }, t.prototype.finally = function (t) {
                    var n = this.constructor;
                    return e(t) ? this.then((function (e) {
                        return n.resolve(t()).then((function () {
                            return e
                        }))
                    }), (function (e) {
                        return n.resolve(t()).then((function () {
                            throw e
                        }))
                    })) : this.then(t, t)
                }, t
            }();
            return N.prototype.then = _, N.all = function (e) {
                return new F(this, e).promise
            }, N.race = function (e) {
                var t = this;
                return r(e) ? new t((function (n, r) {
                    for (var o = e.length, i = 0; i < o; i++) t.resolve(e[i]).then(n, r)
                })) : new t((function (e, t) {
                    return t(new TypeError("You must pass an array to race."))
                }))
            }, N.resolve = k, N.reject = function (e) {
                var t = new this(C);
                return O(t, e), t
            }, N._setScheduler = function (e) {
                a = e
            }, N._setAsap = function (e) {
                c = e
            }, N._asap = c, N.polyfill = function () {
                var e = void 0;
                if (void 0 !== n) e = n; else if ("undefined" != typeof self) e = self; else try {
                    e = Function("return this")()
                } catch (e) {
                    throw new Error("polyfill failed because global object is unavailable in this environment")
                }
                var t = e.Promise;
                if (t) {
                    var r = null;
                    try {
                        r = Object.prototype.toString.call(t.resolve())
                    } catch (e) {
                    }
                    if ("[object Promise]" === r && !t.cast) return
                }
                e.Promise = N
            }, N.Promise = N, N
        }, e.exports = r()
    }).call(this, n(18), n(19))
}, function (e, t) {
    var n, r, o = e.exports = {};

    function i() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function c(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }

    !function () {
        try {
            n = "function" == typeof setTimeout ? setTimeout : i
        } catch (e) {
            n = i
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
            r = a
        }
    }();
    var s, u = [], l = !1, d = -1;

    function f() {
        l && s && (l = !1, s.length ? u = s.concat(u) : d = -1, u.length && m())
    }

    function m() {
        if (!l) {
            var e = c(f);
            l = !0;
            for (var t = u.length; t;) {
                for (s = u, u = []; ++d < t;) s && s[d].run();
                d = -1, t = u.length
            }
            s = null, l = !1, function (e) {
                if (r === clearTimeout) return clearTimeout(e);
                if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                try {
                    r(e)
                } catch (t) {
                    try {
                        return r.call(null, e)
                    } catch (t) {
                        return r.call(this, e)
                    }
                }
            }(e)
        }
    }

    function p(e, t) {
        this.fun = e, this.array = t
    }

    function h() {
    }

    o.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        u.push(new p(e, t)), 1 !== u.length || l || c(m)
    }, p.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = h, o.addListener = h, o.once = h, o.off = h, o.removeListener = h, o.removeAllListeners = h, o.emit = h, o.prependListener = h, o.prependOnceListener = h, o.listeners = function (e) {
        return []
    }, o.binding = function (e) {
        throw new Error("process.binding is not supported")
    }, o.cwd = function () {
        return "/"
    }, o.chdir = function (e) {
        throw new Error("process.chdir is not supported")
    }, o.umask = function () {
        return 0
    }
}, function (e, t) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function (e, t) {
    Number.isInteger = Number.isInteger || function (e) {
        return "number" == typeof e && isFinite(e) && Math.floor(e) === e
    }
}, function (e, t, n) {
    var r, o, i = n(7), a = n(8), c = 0, s = 0;
    e.exports = function (e, t, n) {
        var u = t && n || 0, l = t || [], d = (e = e || {}).node || r, f = void 0 !== e.clockseq ? e.clockseq : o;
        if (null == d || null == f) {
            var m = i();
            null == d && (d = r = [1 | m[0], m[1], m[2], m[3], m[4], m[5]]), null == f && (f = o = 16383 & (m[6] << 8 | m[7]))
        }
        var p = void 0 !== e.msecs ? e.msecs : (new Date).getTime(), h = void 0 !== e.nsecs ? e.nsecs : s + 1,
            v = p - c + (h - s) / 1e4;
        if (v < 0 && void 0 === e.clockseq && (f = f + 1 & 16383), (v < 0 || p > c) && void 0 === e.nsecs && (h = 0), h >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        c = p, s = h, o = f;
        var b = (1e4 * (268435455 & (p += 122192928e5)) + h) % 4294967296;
        l[u++] = b >>> 24 & 255, l[u++] = b >>> 16 & 255, l[u++] = b >>> 8 & 255, l[u++] = 255 & b;
        var y = p / 4294967296 * 1e4 & 268435455;
        l[u++] = y >>> 8 & 255, l[u++] = 255 & y, l[u++] = y >>> 24 & 15 | 16, l[u++] = y >>> 16 & 255, l[u++] = f >>> 8 | 128, l[u++] = 255 & f;
        for (var g = 0; g < 6; ++g) l[u + g] = d[g];
        return t || a(l)
    }
}, function (e, t, n) {
    var r = n(7), o = n(8);
    e.exports = function (e, t, n) {
        var i = t && n || 0;
        "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
        var a = (e = e || {}).random || (e.rng || r)();
        if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t) for (var c = 0; c < 16; ++c) t[i + c] = a[c];
        return t || o(a)
    }
}, function (e, t) {
    e.exports = function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
}, function (e, t, n) {
    var r = n(6);
    e.exports = function (e, t) {
        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = r(e));) ;
        return e
    }
}, function (e, t) {
    function n(t, r) {
        return e.exports = n = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        }, n(t, r)
    }

    e.exports = n
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, c, s, u, l, d, f, m, p, h, v, b, y, g = n(5), w = n.n(g);
    r = function (e) {
        function t(e) {
            if (!c.test(e)) throw Error();
            e = e.split(".");
            for (var t = window, n = 0; n < e.length; n++) t = t[e[n]];
            return t
        }

        function n(e, t) {
            return "string" == typeof e && "string" == typeof t && e.length >= t.length && e.substr(0, t.length) === t
        }

        var r = /^\/\//, o = /^[^:]+:/, i = /^https?:\/\/[^\/]+/, a = / (?:MSIE |Trident\/7\.0;.* rv:)(\d+)/,
            c = /^[^.]+(?:\.[^.]+)*$/;
        return {
            ja: function (e) {
                var t;
                try {
                    null == (t = document.getElementById(e)) && (t = document.getElementsByName(e)[0])
                } catch (e) {
                }
                if (null == t) for (var n = 0; n < document.forms.length; n++) for (var r = document.forms[n], o = 0; o < r.elements.length; o++) {
                    var i = r[o];
                    if (i.name === e || i.id === e) return i
                }
                return t
            }, startsWith: n, N: function (e) {
                for (var n = 0; n < e.length; n++) try {
                    var r = t(e[n]);
                    if (r) return r
                } catch (e) {
                }
                return ""
            }, a: t, aa: function (e) {
                return r.test(e) && (e = document.URL.match(o)[0] + e), !((e = e.match(i)) && !n(document.URL, e[0]))
            }, P: function () {
                var e = navigator.userAgent.match(a);
                return e ? parseInt(e[1], 10) : null
            }, R: function () {
                return window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
            }, ba: function (e, t, n) {
                function r() {
                    e.onreadystatechange = null, null !== c && (clearTimeout(c), c = null), s = !0
                }

                var o = !1, i = !1, a = !1, c = null, s = !1;
                try {
                    e.onreadystatechange = function () {
                        s || 4 !== e.readyState || (r(), e = null, n(i, a))
                    }, 0 !== t && (c = setTimeout((function () {
                        s || (i = !0, r(), e.abort(), e = null, n(i, a))
                    }), t)), e.send(), o = !0
                } catch (t) {
                    a = !0, r(), e = null
                } finally {
                    o || n(i, a)
                }
            }, S: function (e, t, n, r) {
                for (t = "boolean" == typeof r && r ? e.split(t) : -1 === (r = e.indexOf(t)) ? [e] : [e.substring(0, r), e.substring(r + t.length)], e = t[0], r = 1; r < t.length; r++) e += n + t[r];
                return e
            }, ob: function (e) {
                if (!e) return 0;
                if (Array.prototype.reduce) return e.split("").reduce((function (e, t) {
                    return (e = (e << 5) - e + t.charCodeAt(0)) & e
                }), 0);
                for (var t = 0, n = 0, r = e.length; n < r; n++) t = (t << 5) - t + e.charCodeAt(n), t &= t;
                return t
            }, U: function (e) {
                return 0 <= window.navigator.userAgent.indexOf(e)
            }
        }
    }(), o = function (e) {
        e = ("0000000" + ((e / 1e3 | 0) >>> 0).toString(16)).slice(-8) + "-";
        for (var t = 9; 36 > t; t++) {
            var n;
            13 === t || 18 === t || 23 === t ? n = "-" : 14 === t ? n = "4" : (n = 16 * Math.random() | 0, 19 === t && (n = 3 & n | 8), n = n.toString(16)), e += n
        }
        return e
    }, i = {j: [], X: [], l: 9e3, K: null, ca: [], J: null, vb: "@_PAYLOADINPUTID_@"}, a = function e() {
        function t(e, t, n) {
            if (0 === i) for (i = e, o = n; t.length;) t.shift().call(s, n)
        }

        function n(e, t) {
            setTimeout((function () {
                try {
                    var n = t.call(null, o);
                    n instanceof Object && n.then && n.then instanceof Function ? n.then(e.O, e.reject) : e.O(n)
                } catch (t) {
                    e.reject(t)
                }
            }), 0)
        }

        function r(e, t, r) {
            i === r ? n(e, t) : (1 === r ? a : c).push((function () {
                n(e, t)
            }))
        }

        var o, i = 0, a = [], c = [], s = this;
        this.O = function (e) {
            t(1, a, e)
        }, this.reject = function (e) {
            t(-1, c, e)
        }, this.then = function (t, n) {
            var o = new e;
            return t instanceof Function && r(o, t, 1), n instanceof Function && r(o, n, -1), o
        }
    }, c = function (e) {
        return {
            xb: e, ub: function (t) {
                var n = [];
                return {
                    start: function (r) {
                        for (var o = 0; o < t.length; o++) n.push(e(t[o]));
                        if (n.length) {
                            var i = n.length, a = function () {
                                !r.g() && 0 < i && 0 == --i && r.b()
                            };
                            for (o = 0; o < n.length; o++) n[o].va(a)
                        } else r.b()
                    }, finish: function (e) {
                        if (e.da()) for (e = 0; e < n.length; e++) n[e].pa()
                    }
                }
            }
        }
    }((function (e) {
        function t() {
            null !== c && (clearTimeout(c), c = null);
            try {
                "function" == typeof e.finish && e.finish(n)
            } catch (e) {
            }
            r = !0, o.O()
        }

        var n, r = !1, o = new a, i = !1, c = null, s = !1;
        n = {
            g: function () {
                return r
            }, b: function () {
                r || t()
            }, va: function (e) {
                o.then((function () {
                    e()
                }))
            }, pa: function () {
                r || (i = !0, t())
            }, da: function () {
                return i
            }, Pb: function () {
                return s
            }
        }, 0 < e.v && (c = setTimeout((function () {
            c = null, r || (s = !0, t())
        }), e.v));
        try {
            e.start(n)
        } catch (e) {
            n.b()
        }
        return n
    })), p = r, h = i, v = 3, y = null, b = "", s = {
        o: function () {
            var e = h.j[5], t = null;
            return {
                start: function (n) {
                    v = 3, y = null, b = "";
                    var r = !1;
                    try {
                        var o = function (e) {
                            if (!e) return v = 4, null;
                            if (e = !p.aa(e)) {
                                var t = p.P();
                                if (null !== t && 10 > t) return v = 8, null
                            }
                            return e
                        }(e);
                        if (null !== o) {
                            try {
                                t = p.R()
                            } catch (e) {
                                return void (v = 9)
                            }
                            try {
                                t.open("GET", e, !0)
                            } catch (e) {
                                return void (v = 1)
                            }
                            p.ba(t, h.l, (function (e, r) {
                                try {
                                    if (!n.g()) if (e) v = 2; else if (r) v = 6; else {
                                        var i = t;
                                        v = i.status, 200 === i.status && ((b = i.getResponseHeader("ETag") || "") ? b = b.replace(/"/g, "") : v = 7), b && (y = o)
                                    }
                                } catch (e) {
                                    v = 6
                                } finally {
                                    n.b()
                                }
                            })), r = !0
                        }
                    } catch (e) {
                        v = 6
                    } finally {
                        r || n.b()
                    }
                }, finish: function (e) {
                    e.da() && (v = 5), t = null
                }
            }
        }, Za: function () {
            return b
        }, Z: function () {
            return y
        }, $: function () {
            return v
        }
    }, u = function (e, t) {
        var n = null;
        return {
            o: function () {
                return {
                    start: function (r) {
                        try {
                            var o, i = t.j[1], a = t.j[2];
                            i && a ? function (n, r) {
                                !function (t) {
                                    return !e.aa(t) && (8 === (t = e.P()) || 9 === t)
                                }(n) ? ((o = e.R()).open("POST", n, !0), e.ba(o, t.l, (function () {
                                    r(200 === o.status)
                                }))) : ((o = new XDomainRequest).open("POST", n), function (e, t, n) {
                                    function r() {
                                        e && !i && (e.onload = e.onerror = e.ontimeout = null, i = !0), e = null, n(o)
                                    }

                                    var o = !1, i = !1, a = !1;
                                    try {
                                        e.onload = function () {
                                            o = !0, r()
                                        }, e.onerror = e.ontimeout = r, e.timeout = t, e.send(), a = !0
                                    } catch (e) {
                                    } finally {
                                        a || r()
                                    }
                                }(o, t.l, r))
                            }(i, (function (t) {
                                var i = new Date;
                                if (!r.g()) {
                                    try {
                                        if (t && o.responseText) {
                                            var c = o.responseText.replace(/[^ -~](?:.|\n)*/, "");
                                            e.ja(a).value = c, n = i
                                        }
                                    } catch (e) {
                                    }
                                    r.b()
                                }
                            })) : r.b()
                        } catch (e) {
                            r.b()
                        }
                    }
                }
            }, Xa: function () {
                return n
            }
        }
    }(r, i), m = {
        h: [], T: [], wa: function (e) {
            return {
                Ca: e, W: [], zb: function (e, t) {
                    for (var n = 0; n < t.length; n++) this.W[e + n] = t[n]
                }, sa: function (e) {
                    this.zb(this.W.length, e)
                }, L: function () {
                    for (var e = this.W, t = this.Ca.toString(), n = 0; n < e.length; n++) try {
                        var r = t += "&", o = "" + e[n](), i = "", a = /[%&]+/g, c = void 0, s = 0;
                        for (c = a.exec(o); null !== c;) i += o.substring(s, c.index) + encodeURIComponent(c[0]), s = a.lastIndex, c = a.exec(o);
                        t = r + (i += o.substring(s))
                    } catch (e) {
                    }
                    return t
                }
            }
        }
    }, l = function (e, t) {
        var n = !1, r = !1;
        return {
            La: function () {
                return {
                    start: function (e) {
                        n = !1;
                        try {
                            (window.requestFileSystem || window.webkitRequestFileSystem)(0, 0, (function () {
                                e.b()
                            }), (function () {
                                e.g() || (n = !0, e.b())
                            }))
                        } catch (t) {
                            e.b()
                        }
                    }, v: t.l
                }
            }, Ja: function () {
                var e, n = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
                return {
                    start: function (t) {
                        r = !1;
                        try {
                            (e = n.open("pbtest")).onsuccess = function () {
                                if (!t.g()) try {
                                    e.result.close()
                                } finally {
                                    t.b()
                                }
                            }, e.onerror = function () {
                                t.g() || (r = !0, t.b())
                            }
                        } catch (e) {
                            t.b()
                        }
                    }, finish: function () {
                        e && (e = e.onsuccess = e.onerror = null), n && n.deleteDatabase("pbtest")
                    }, v: t.l
                }
            }, Y: function () {
                var t;
                if (!(t = n || r)) e:{
                    if (t = window.localStorage) try {
                        t.setItem("pbtest", 1), t.removeItem("pbtest")
                    } catch (e) {
                        t = !0;
                        break e
                    }
                    t = !1
                }
                return t || window.indexedDB || (t = null !== (t = e.P()) && 10 <= t || e.U("Edge/")), t || (t = e.U("Focus/")), t
            }
        }
    }(r, i), d = function (e, t, n, r, o, i, a, c, s, u, l, d) {
        function f(e) {
            p(), e = e || o.vb;
            try {
                if (!e) return v();
                var t;
                if (null == (t = n.ja(e))) return v();
                try {
                    var r = v();
                    return t.value = r
                } catch (e) {
                    t.value = escape(e.message)
                }
            } catch (e) {
            }
        }

        function m(e, t) {
            p();
            var n = Math.random() + 1 && ["https://globalsiteanalytics.com/resource/resource.png", "https://globalsiteanalytics.com/service/hdim", "sign"];
            for (o.j = t || ("string" != typeof n ? n : []), h(o.X, e), n = 0; n < o.ca.length; n++) o.ca[n]()
        }

        function p() {
            o.K && (o.K.pa(), o.K = null)
        }

        function h(e, t) {
            for (var n = [], r = 0; r < e.length; r++) try {
                n.push(e[r]())
            } catch (e) {
            }
            n = s.ub(n), n = s.xb(n), "function" == typeof t && n.va(t), o.K = n
        }

        function v() {
            y = new Date, u.yb(y), a.Oa();
            for (var e = "", n = 0; n < i.h.length; n++) {
                var r;
                try {
                    r = i.h[n]()
                } catch (e) {
                    r = ""
                }
                e += escape(r), e += ";"
            }
            for (e += escape(o.J.L()) + ";", n = 0; n < i.T.length; n++) e = i.T[n](e);
            return g ? t.fa(e) : e
        }

        function b(e) {
            return function () {
                return e
            }
        }

        var y, g = !0, w = {}, _ = "", k = b("");
        return o.J = new i.wa(3), o.J.sa([function () {
            return _
        }, function () {
            return c.Wa()
        }, function () {
            return c.lb().replace(/ *(\d{3}) [^ ]*( "[^"\\]*(\\(.|\n)[^"\\]*)*"){1,2} */g, (function (e, t) {
                return t
            }))
        }, function () {
            return c.nb()
        }, function () {
            return c.kb()
        }, function () {
            var t = e.Y();
            return "boolean" == typeof t ? 0 + t : ""
        }, function () {
            return n.a("devicePixelRatio")
        }, function () {
            return Math.round(window.screen.width * r.M())
        }, function () {
            return Math.round(window.screen.height * r.M())
        }, function () {
            return n.a("screen.left")
        }, function () {
            return n.a("screen.top")
        }, function () {
            return n.a("innerWidth")
        }, function () {
            return n.a("outerWidth")
        }, function () {
            return r.zoom().toFixed(2)
        }, function () {
            return n.a("navigator.languages")
        }]), i.h = [b("TF1"), b("030"), function () {
            return ScriptEngineMajorVersion()
        }, function () {
            return ScriptEngineMinorVersion()
        }, function () {
            return ScriptEngineBuildVersion()
        }, function () {
            return a.f("{7790769C-0471-11D2-AF11-00C04FA35D02}")
        }, function () {
            return a.f("{89820200-ECBD-11CF-8B85-00AA005B4340}")
        }, function () {
            return a.f("{283807B5-2C60-11D0-A31D-00AA00B92C03}")
        }, function () {
            return a.f("{4F216970-C90C-11D1-B5C7-0000F8051515}")
        }, function () {
            return a.f("{44BBA848-CC51-11CF-AAFA-00AA00B6015C}")
        }, function () {
            return a.f("{9381D8F2-0288-11D0-9501-00AA00B911A5}")
        }, function () {
            return a.f("{4F216970-C90C-11D1-B5C7-0000F8051515}")
        }, function () {
            return a.f("{5A8D6EE0-3E18-11D0-821E-444553540000}")
        }, function () {
            return a.f("{89820200-ECBD-11CF-8B85-00AA005B4383}")
        }, function () {
            return a.f("{08B0E5C0-4FCB-11CF-AAA5-00401C608555}")
        }, function () {
            return a.f("{45EA75A0-A269-11D1-B5BF-0000F8051515}")
        }, function () {
            return a.f("{DE5AED00-A4BF-11D1-9948-00C04F98BBC9}")
        }, function () {
            return a.f("{22D6F312-B0F6-11D0-94AB-0080C74C7E95}")
        }, function () {
            return a.f("{44BBA842-CC51-11CF-AAFA-00AA00B6015B}")
        }, function () {
            return a.f("{3AF36230-A269-11D1-B5BF-0000F8051515}")
        }, function () {
            return a.f("{44BBA840-CC51-11CF-AAFA-00AA00B6015C}")
        }, function () {
            return a.f("{CC2A9BA0-3BDD-11D0-821E-444553540000}")
        }, function () {
            return a.f("{08B0E5C0-4FCB-11CF-AAA5-00401C608500}")
        }, function () {
            return n.a("navigator.appCodeName")
        }, function () {
            return n.a("navigator.appName")
        }, function () {
            return n.a("navigator.appVersion")
        }, function () {
            return n.N(["navigator.productSub", "navigator.appMinorVersion"])
        }, function () {
            return n.a("navigator.browserLanguage")
        }, function () {
            return n.a("navigator.cookieEnabled")
        }, function () {
            return n.N(["navigator.oscpu", "navigator.cpuClass"])
        }, k, function () {
            return n.a("navigator.platform")
        }, function () {
            return n.a("navigator.systemLanguage")
        }, function () {
            return d.L()
        }, function () {
            return n.N(["navigator.language", "navigator.userLanguage"])
        }, function () {
            return n.a("document.defaultCharset")
        }, function () {
            return n.a("document.domain")
        }, function () {
            return n.a("screen.deviceXDPI")
        }, function () {
            return n.a("screen.deviceYDPI")
        }, function () {
            return n.a("screen.fontSmoothingEnabled")
        }, function () {
            return n.a("screen.updateInterval")
        }, function () {
            return u.rb()
        }, function () {
            return u.qb()
        }, function () {
            return "@UTC@"
        }, function () {
            return -u.gb() / 60
        }, function () {
            return new Date(2005, 5, 7, 21, 33, 44, 888).toLocaleString().replace(/\u200e/g, "")
        }, function () {
            return n.a("screen.width")
        }, function () {
            return n.a("screen.height")
        }, function () {
            return a.s("Acrobat")
        }, function () {
            return a.s("Flash")
        }, function () {
            return a.s("QuickTime")
        }, function () {
            return a.s("Java Plug-in")
        }, function () {
            return a.s("Director")
        }, function () {
            return a.s("Office")
        }, function () {
            return "@CT@"
        }, function () {
            return u.mb()
        }, function () {
            return u.hb()
        }, function () {
            return y.toLocaleString().replace(/\u200e/g, "")
        }, function () {
            return n.a("screen.colorDepth")
        }, function () {
            return n.a("screen.availWidth")
        }, function () {
            return n.a("screen.availHeight")
        }, function () {
            return n.a("screen.availLeft")
        }, function () {
            return n.a("screen.availTop")
        }, function () {
            return a.c("Acrobat")
        }, function () {
            return a.c("Adobe SVG")
        }, function () {
            return a.c("Authorware")
        }, function () {
            return a.c("Citrix ICA")
        }, function () {
            return a.c("Director")
        }, function () {
            return a.c("Flash")
        }, function () {
            return a.c("MapGuide")
        }, function () {
            return a.c("MetaStream")
        }, function () {
            return a.c("PDF Viewer")
        }, function () {
            return a.c("QuickTime")
        }, function () {
            return a.c("RealOne")
        }, function () {
            return a.c("RealPlayer Enterprise")
        }, function () {
            return a.c("RealPlayer Plugin")
        }, function () {
            return a.c("Seagate Software Report")
        }, function () {
            return a.c("Silverlight")
        }, function () {
            return a.c("Windows Media")
        }, function () {
            return a.c("iPIX")
        }, function () {
            return a.c("nppdf.so")
        }, function () {
            var e = document.createElement("span");
            e.innerHTML = "&nbsp;", e.style.position = "absolute", e.style.left = "-9999px", document.body.appendChild(e);
            var t = e.offsetHeight;
            return document.body.removeChild(e), t
        }, k, k, k, k, k, k, k, k, k, k, k, k, k, k, function () {
            return "7.3.0"
        }, k, function () {
            return c.$a()
        }, k, k, k, k, k, function () {
            var e = c.Z();
            return "boolean" == typeof e ? 0 + e : ""
        }, function () {
            return c.$()
        }, function () {
            return "0"
        }, k, k, k, k, function () {
            return (n.ob(a.bb()) >>> 0).toString(16) + ""
        }, function () {
            return n.N(["navigator.doNotTrack", "navigator.msDoNotTrack"])
        }, k, k, k, k, k, k, function () {
            return l.sb()
        }, function () {
            return l.ia()
        }, function () {
            return l.Va()
        }, function () {
            return l.na()
        }, function () {
            return l.oa()
        }, function () {
            return l.ga()
        }, function () {
            return l.ma()
        }, function () {
            return l.ka()
        }, function () {
            return l.ha()
        }, function () {
            return l.la()
        }], i.T = [function (e) {
            return n.S(e, escape("@UTC@"), (new Date).getTime())
        }, function (e) {
            return n.S(e, escape("@CT@"), (new Date).getTime() - y.getTime())
        }], o.X.push(c.o, (function () {
            return {
                start: function (e) {
                    _ = "";
                    try {
                        navigator.getBattery().then((function (t) {
                            e.g() || (_ = [t.charging, t.chargingTime, t.dischargingTime, t.level].join(), e.b())
                        }))
                    } catch (t) {
                        e.b()
                    }
                }, v: o.l
            }
        }), e.Ka, l.Na), w.validate = f, w.f1b5 = t.fa, w.initiate = m, w.zil = function (e, t, n) {
            p(), o.j = [e], 2 < arguments.length ? h([c.o], n) : c.Ab()
        }, function (e) {
            var t = (e = e || {}).ctx || window;
            return g = !e.hasOwnProperty("compress") || e.compress, t.ppp = w, g && (e = navigator.userAgent.toLowerCase(), "Gecko" === navigator.product && 2 >= parseInt(e.substring(e.indexOf("rv:") + 3, e.indexOf(")", e.indexOf("rv:") + 3)).split(".")[0], 10) && f()), {
                L: f,
                Ob: m
            }
        }
    }(d = function (e) {
        var t = null;
        return {
            Ka: function () {
                var n, r = null;
                return {
                    start: function (o) {
                        t = null;
                        try {
                            (n = document.createElement("div")).setAttribute("class", "pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links adsbox"), n.setAttribute("style", e.S("width:1px;height:1px;position:absolute;left:-10000px;right:-1000px;", ";", "!important;", !0)), document.body.appendChild(n), r = setTimeout((function () {
                                if (r = null, !o.g()) try {
                                    t = !(n && n.parentNode && !n.getAttribute("abp") && n.offsetParent && 0 !== n.offsetWidth && 0 !== n.offsetHeight && 0 !== n.clientWidth && 0 !== n.clientHeight)
                                } finally {
                                    o.b()
                                }
                            }), 100)
                        } catch (e) {
                            o.b()
                        }
                    }, finish: function () {
                        n && (n.parentNode && n.parentNode.removeChild(n), n = null), null !== r && (clearTimeout(r), r = null)
                    }
                }
            }, Y: function () {
                return t
            }
        }
    }(r), function () {
        function e(e) {
            var t;
            return t = 37 > e ? 11 > e ? e ? e + 47 : 46 : e + 54 : 38 > e ? 95 : e + 59, String.fromCharCode(t)
        }

        function t(t) {
            function r(t) {
                for (i = i << t[0] | t[1], a += t[0]; 6 <= a;) o += e(t = i >> a - 6 & 63), i ^= t << (a -= 6)
            }

            var o = "", i = 0, a = 0;
            r([6, (7 & t.length) << 3 | 0]), r([6, 56 & t.length | 1]);
            for (var c = 0; c < t.length; c++) {
                if (void 0 === n[t.charCodeAt(c)]) return;
                r(n[t.charCodeAt(c)])
            }
            return r(n[0]), 0 < a && r([6 - a, 0]), o
        }

        var n = {
                1: [4, 15],
                110: [8, 239],
                74: [8, 238],
                57: [7, 118],
                56: [7, 117],
                71: [8, 233],
                25: [8, 232],
                101: [5, 28],
                104: [7, 111],
                4: [7, 110],
                105: [6, 54],
                5: [7, 107],
                109: [7, 106],
                103: [9, 423],
                82: [9, 422],
                26: [8, 210],
                6: [7, 104],
                46: [6, 51],
                97: [6, 50],
                111: [6, 49],
                7: [7, 97],
                45: [7, 96],
                59: [5, 23],
                15: [7, 91],
                11: [8, 181],
                72: [8, 180],
                27: [8, 179],
                28: [8, 178],
                16: [7, 88],
                88: [10, 703],
                113: [11, 1405],
                89: [12, 2809],
                107: [13, 5617],
                90: [14, 11233],
                42: [15, 22465],
                64: [16, 44929],
                0: [16, 44928],
                81: [9, 350],
                29: [8, 174],
                118: [8, 173],
                30: [8, 172],
                98: [8, 171],
                12: [8, 170],
                99: [7, 84],
                117: [6, 41],
                112: [6, 40],
                102: [9, 319],
                68: [9, 318],
                31: [8, 158],
                100: [7, 78],
                84: [6, 38],
                55: [6, 37],
                17: [7, 73],
                8: [7, 72],
                9: [7, 71],
                77: [7, 70],
                18: [7, 69],
                65: [7, 68],
                48: [6, 33],
                116: [6, 32],
                10: [7, 63],
                121: [8, 125],
                78: [8, 124],
                80: [7, 61],
                69: [7, 60],
                119: [7, 59],
                13: [8, 117],
                79: [8, 116],
                19: [7, 57],
                67: [7, 56],
                114: [6, 27],
                83: [6, 26],
                115: [6, 25],
                14: [6, 24],
                122: [8, 95],
                95: [8, 94],
                76: [7, 46],
                24: [7, 45],
                37: [7, 44],
                50: [5, 10],
                51: [5, 9],
                108: [6, 17],
                22: [7, 33],
                120: [8, 65],
                66: [8, 64],
                21: [7, 31],
                106: [7, 30],
                47: [6, 14],
                53: [5, 6],
                49: [5, 5],
                86: [8, 39],
                85: [8, 38],
                23: [7, 18],
                75: [7, 17],
                20: [7, 16],
                2: [5, 3],
                73: [8, 23],
                43: [9, 45],
                87: [9, 44],
                70: [7, 10],
                3: [6, 4],
                52: [5, 1],
                54: [5, 0]
            },
            r = "%20 ;;; %3B %2C und fin ed; %28 %29 %3A /53 ike Web 0; .0 e; on il ck 01 in Mo fa 00 32 la .1 ri it %u le".split(" ");
        return {
            fa: function (n) {
                for (var o = n, i = 0; r[i]; i++) o = o.split(r[i]).join(String.fromCharCode(i + 1));
                if (void 0 === (o = t(o))) return n;
                i = 65535;
                for (var a = 0; a < n.length; a++) i = 65535 & (i >>> 8 | i << 8), i ^= 255 & n.charCodeAt(a), i ^= (255 & i) >> 4, i ^= i << 12 & 65535, i ^= (255 & i) << 5 & 65535;
                return n = "" + e((i &= 65535) >>> 12), n += e(i >>> 6 & 63), o + (n += e(63 & i))
            }
        }
    }(), r, function (e) {
        function t() {
            m || (m = d);
            try {
                isNaN(screen.logicalXDPI) || isNaN(screen.systemXDPI) ? window.navigator.msMaxTouchPoints ? m = u : !window.chrome || window.opera || e.U(" Opera") ? 0 <= Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") ? m = c : "orientation" in window && "webkitRequestAnimationFrame" in window ? m = a : "webkitRequestAnimationFrame" in window ? m = i : e.U("Opera") ? m = n : window.devicePixelRatio ? m = r : .001 < o().zoom && (m = o) : m = s : m = l
            } catch (e) {
            }
            return m()
        }

        function n() {
            var e = window.top.outerWidth / window.top.innerWidth;
            return {zoom: e = Math.round(100 * e) / 100, i: e * f()}
        }

        function r() {
            return {zoom: o().zoom, i: f()}
        }

        function o() {
            var e = function () {
                var e, t, n, r;
                window.matchMedia ? e = window.matchMedia : (t = document.getElementsByTagName("head")[0], n = document.createElement("style"), t.appendChild(n), (r = document.createElement("div")).className = "mediaQueryBinarySearch", r.style.display = "none", document.body.appendChild(r), e = function (e) {
                    return n.sheet.insertRule("@media " + e + "{.mediaQueryBinarySearch {text-decoration: underline} }", 0), e = "underline" === getComputedStyle(r, null).textDecoration, n.sheet.deleteRule(0), {matches: e}
                });
                var o = function t(n, r, o) {
                    var i = (n + r) / 2;
                    return 0 >= o || 1e-4 > r - n ? i : e("(min--moz-device-pixel-ratio:" + i + ")").matches ? t(i, r, o - 1) : t(n, i, o - 1)
                }(0, 10, 20);
                return r && (t.removeChild(n), document.body.removeChild(r)), o
            }();
            return {zoom: e = Math.round(100 * e) / 100, i: e}
        }

        function i() {
            var e = document.createElement("div");
            e.innerHTML = "1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0", e.setAttribute("style", "font: 100px/1em sans-serif; -webkit-text-size-adjust: none; text-size-adjust: none; height: auto; width: 1em; padding: 0; overflow: visible;".replace(/;/g, " !important;"));
            var t = document.createElement("div");
            return t.setAttribute("style", "width:0; height:0; overflow:hidden; visibility:hidden; position: absolute;".replace(/;/g, " !important;")), t.appendChild(e), document.body.appendChild(t), e = 1e3 / e.clientHeight, e = Math.round(100 * e) / 100, document.body.removeChild(t), {
                zoom: e,
                i: e * f()
            }
        }

        function a() {
            var e = (90 == Math.abs(window.orientation) ? screen.height : screen.width) / window.innerWidth;
            return {zoom: e, i: e * f()}
        }

        function c() {
            var e = Math.round(document.documentElement.clientWidth / window.innerWidth * 100) / 100;
            return {zoom: e, i: e * f()}
        }

        function s() {
            var e = Math.round(window.outerWidth / window.innerWidth * 100) / 100;
            return {zoom: e, i: e * f()}
        }

        function u() {
            var e = Math.round(document.documentElement.offsetHeight / window.innerHeight * 100) / 100;
            return {zoom: e, i: e * f()}
        }

        function l() {
            var e = Math.round(screen.deviceXDPI / screen.logicalXDPI * 100) / 100;
            return {zoom: e, i: e * f()}
        }

        function d() {
            return {zoom: 1, i: 1}
        }

        function f() {
            return window.devicePixelRatio || 1
        }

        var m;
        return {
            zoom: function () {
                return t().zoom
            }, M: function () {
                return t().i
            }
        }
    }(r), i, m, function () {
        var e, t = {
            Flash: ["ShockwaveFlash.ShockwaveFlash", function (e) {
                return e.getVariable("$version")
            }], Director: ["SWCtl.SWCtl", function (e) {
                return e.ShockwaveVersion("")
            }]
        };
        try {
            void 0 !== (e = document.createElement("span")).addBehavior && e.addBehavior("#default#clientCaps")
        } catch (e) {
        }
        var n = {};
        return {
            f: function (t) {
                var n = "";
                try {
                    void 0 !== e.getComponentVersion && (n = e.getComponentVersion(t, "ComponentID"))
                } catch (e) {
                    t = e.message.length, n = escape(e.message.substr(0, 40 < t ? 40 : t))
                }
                return n
            }, s: function (e) {
                return n[e]
            }, Oa: function () {
                for (var e = "Acrobat;Flash;QuickTime;Java Plug-in;Director;Office".split(";"), r = 0; r < e.length; r++) {
                    var o = a = e[r], i = a, a = "";
                    try {
                        if (navigator.plugins && navigator.plugins.length) {
                            var c = new RegExp(i + ".* ([0-9._]+)");
                            for (i = 0; i < navigator.plugins.length; i++) {
                                var s = c.exec(navigator.plugins[i].name);
                                null === s && (s = c.exec(navigator.plugins[i].description)), s && (a = s[1])
                            }
                        } else if (window.ActiveXObject && t[i]) try {
                            var u = new ActiveXObject(t[i][0]);
                            a = t[i][1](u)
                        } catch (e) {
                            a = ""
                        }
                    } catch (e) {
                        a = e.message
                    }
                    n[o] = a
                }
            }, c: function (e) {
                try {
                    if (navigator.plugins && navigator.plugins.length) for (var t = 0; t < navigator.plugins.length; t++) {
                        var n = navigator.plugins[t];
                        if (0 <= n.name.indexOf(e)) return n.name + (n.description ? "|" + n.description : "")
                    }
                } catch (e) {
                }
                return ""
            }, bb: function () {
                var e = "";
                if (navigator.plugins && navigator.plugins.length) for (var t = 0; t < navigator.plugins.length; t++) {
                    var n = navigator.plugins[t];
                    n && (e += n.name + n.filename + n.description + n.version)
                }
                return e
            }
        }
    }(), function (e, t) {
        function n(t) {
            i = t.status;
            var n = ["", "", ""];
            try {
                s = t.getResponseHeader("cache-control");
                for (var r = t.getAllResponseHeaders().toLowerCase().split("\n"), o = ["warning", "x-cache", "via"], c = 0; c < o.length; c++) for (var f = 0; f < r.length; f++) if (e.startsWith(r[f], o[c] + ":")) {
                    n[c] = t.getResponseHeader(o[c]);
                    break
                }
            } catch (e) {
            }
            u = n[0], l = n[1], d = n[2], 200 === t.status && ((t = t.getResponseHeader("Last-Modified")) || ((t = (void 0).getResponseHeader("Expires")) ? ((t = new Date(t)).setTime(t.getTime() - 31536e6), t = t.toUTCString()) : t = void 0), (a = t || "") || (i = 7))
        }

        function r(t) {
            if (!t) return i = 4, null;
            if (t = !e.aa(t)) {
                var n = e.P();
                if (null !== n && 10 > n) return i = 8, null
            }
            return t
        }

        function o() {
            i = 3, c = null, a = s = u = l = d = ""
        }

        var i, a, c, s, u, l, d;
        return o(), {
            o: function () {
                var s = t.j[0], u = null;
                return {
                    start: function (l) {
                        o();
                        var d = !1;
                        try {
                            var f = r(s);
                            if (null !== f) {
                                try {
                                    u = e.R()
                                } catch (e) {
                                    return void (i = 9)
                                }
                                try {
                                    u.open("GET", s, !0)
                                } catch (e) {
                                    return void (i = 1)
                                }
                                e.ba(u, t.l, (function (e, t) {
                                    try {
                                        l.g() || (e ? i = 2 : t ? i = 6 : (n(u), a && (c = f)))
                                    } catch (e) {
                                        i = 6
                                    } finally {
                                        l.b()
                                    }
                                })), d = !0
                            }
                        } catch (e) {
                            i = 6
                        } finally {
                            d || l.b()
                        }
                    }, finish: function (e) {
                        e.da() && (i = 5), u = null
                    }
                }
            }, Ab: function () {
                try {
                    var s = t.j[0];
                    o();
                    var u = r(s);
                    if (null !== u) {
                        var l;
                        try {
                            l = e.R()
                        } catch (e) {
                            return void (i = 9)
                        }
                        try {
                            l.open("GET", s, !1)
                        } catch (e) {
                            return void (i = 1)
                        }
                        l.send(), n(l), a && (c = u)
                    }
                } catch (e) {
                    i = 6
                }
            }, $a: function () {
                return a
            }, Z: function () {
                return c
            }, $: function () {
                return i
            }, Wa: function () {
                return s
            }, lb: function () {
                return u
            }, nb: function () {
                return l
            }, kb: function () {
                return d
            }
        }
    }(r, i), c, function () {
        function e(e) {
            n = new Date(e.getTime()), r = t(1), o = t(7)
        }

        function t(e) {
            e--;
            var t = n.getTime(), r = n.getFullYear(), o = new Date(r, e, 15), i = o, a = o;
            return o.getTime() <= t ? a = new Date(r + 1, e, 15) : i = new Date(r - 1, e, 15), (t - i.getTime() < a.getTime() - t ? i : a).getTimezoneOffset()
        }

        var n, r, o;
        return e(new Date), {
            yb: e, mb: function () {
                return r
            }, hb: function () {
                return o
            }, rb: function () {
                return o !== r
            }, qb: function () {
                return o !== r && n.getTimezoneOffset() === Math.min(r, o)
            }, gb: function () {
                return Math.max(r, o)
            }
        }
    }(), f = function (e) {
        function t(e) {
            return void 0 !== navigator.userAgentData && "function" == typeof e ? e.apply(this) : ""
        }

        var n = {
            platform: "",
            platformVersion: "",
            architecture: "",
            model: "",
            uaFullVersion: "",
            bitness: "",
            fullVersionList: ""
        };
        return {
            Ha: void 0 !== navigator.userAgentData, sb: function () {
                return t((function () {
                    try {
                        return navigator.userAgentData.mobile
                    } catch (e) {
                        return ""
                    }
                }))
            }, ia: function () {
                return t((function () {
                    try {
                        return function () {
                            for (var t = navigator.userAgentData.brands, n = 0; n < t.length; n++) switch (t[n].brand) {
                                case e.B:
                                    return e.B.replace("Google ", "");
                                case e.G:
                                    return e.G;
                                case e.D:
                                    return e.D.replace("Microsoft ", "");
                                case e.I:
                                    return e.I;
                                case e.w:
                                    return e.w;
                                case e.A:
                                    return e.A;
                                case e.C:
                                    return e.C;
                                case e.H:
                                    return e.H;
                                case e.F:
                                    return e.F
                            }
                            return e.V
                        }()
                    } catch (e) {
                        return ""
                    }
                }))
            }, Va: function () {
                return t((function () {
                    try {
                        var t;
                        e:{
                            for (var n = navigator.userAgentData.brands, r = 0, o = 0, i = 0; i < n.length; i++) {
                                switch (n[i].brand) {
                                    case e.B:
                                    case e.G:
                                    case e.D:
                                    case e.I:
                                    case e.w:
                                    case e.A:
                                    case e.C:
                                    case e.H:
                                    case e.F:
                                        r = n[i].version;
                                        break;
                                    case e.V:
                                        o = n[i].version
                                }
                                if (0 !== r) {
                                    t = r;
                                    break e
                                }
                            }
                            t = 0 !== o ? o : n[0].version
                        }
                        return t
                    } catch (e) {
                        return ""
                    }
                }))
            }, Na: function () {
                return {
                    start: function (e) {
                        try {
                            void 0 !== navigator.userAgentData ? navigator.userAgentData.getHighEntropyValues(Object.keys(n)).then((function (t) {
                                e.g() || (n = t, e.b())
                            })) : e.b()
                        } catch (t) {
                            e.b()
                        }
                    }
                }
            }, na: function () {
                return n.platform
            }, oa: function () {
                return n.platformVersion
            }, ga: function () {
                return n.architecture
            }, ma: function () {
                return n.model
            }, ka: function () {
                var t;
                e:if (t = n.fullVersionList, null == t || 0 === t.length) t = n.uaFullVersion; else {
                    for (var r = 0, o = 0, i = 0; i < t.length; i++) {
                        switch (t[i].brand) {
                            case e.B:
                            case e.G:
                            case e.D:
                            case e.I:
                            case e.w:
                            case e.A:
                            case e.C:
                            case e.H:
                            case e.F:
                                r = t[i].version;
                                break;
                            case e.V:
                                o = t[i].version
                        }
                        if (0 !== r) {
                            t = r;
                            break e
                        }
                    }
                    t = 0 !== o ? o : t[0].version
                }
                return t
            }, ha: function () {
                return n.bitness
            }, la: function () {
                return "" === n.fullVersionList ? n.fullVersionList : JSON.stringify(n.fullVersionList)
            }
        }
    }({
        B: "Google Chrome",
        V: "Chromium",
        G: "Opera",
        D: "Microsoft Edge",
        I: "Vivaldi",
        w: "Blisk",
        A: "Brave",
        C: "Colibri",
        H: "SamsungBrowser",
        F: "HuaweiBrowser"
    }), function (e, t, n, r, o) {
        return {
            L: function () {
                if (!e.Ha) return t.a("navigator.userAgent");
                if ((i = new o).ua(t.a("navigator.userAgent")), null === (i = i.eb()).qa.version || null === i.ta.version || null === i.ea.version) return t.a("navigator.userAgent");
                var i, a = {
                    Da: e.ga(),
                    platform: e.na(),
                    wb: e.oa(),
                    Ga: e.ia(),
                    Qa: e.ka(),
                    tb: e.ma(),
                    Ea: e.ha(),
                    Hb: e.la()
                };
                return -1 < (a = (i = r.Ra(a, i)).CH_platform).toLowerCase().indexOf("macos") || -1 < a.toLowerCase().indexOf("mac os") ? r.u(n.ya, i) : -1 < a.toLowerCase().indexOf("windows") ? r.u(n.Ba, i) : -1 < a.toLowerCase().indexOf("android") ? (i.CH_platformVersion = r.Pa(i.CH_platformVersion), r.u(n.za, i)) : -1 < a.toLowerCase().indexOf("iphone") || -1 < a.toLowerCase().indexOf("ipod") || -1 < a.toLowerCase().indexOf("ipad") || -1 < a.toLowerCase().indexOf("ios") ? t.a("navigator.userAgent") : -1 < a.toLowerCase().indexOf("linux") ? r.u(n.xa, i) : r.u(n.Aa, i)
            }
        }
    }(f, r, {
        ya: "Mozilla/{{Mozilla_version}} (Macintosh; {{CH_architecture}} Mac OS X {{CH_platformVersion}}) AppleWebKit/{{AppleWebKit_version}} (KHTML, like Gecko) {{CH_BrowserName}}/{{CH_UAFullVersion}} Safari/{{Safari_version}}",
        Ba: "Mozilla/{{Mozilla_version}} ({{CH_platform}} NT {{CH_platformVersion}}; {{CH_architecture}}) AppleWebKit/{{AppleWebKit_version}} (KHTML, like Gecko) {{CH_BrowserName}}/{{CH_UAFullVersion}} Safari/{{Safari_version}}",
        za: "Mozilla/{{Mozilla_version}} (Linux; {{CH_platform}} {{CH_platformVersion}}; {{CH_model}}) AppleWebKit/{{AppleWebKit_version}} (KHTML, like Gecko) {{CH_BrowserName}}/{{CH_UAFullVersion}} Mobile Safari/{{Safari_version}}",
        Bb: "Mozilla/{{Mozilla_version}} ({{CH_model}}; {{CH_architecture}} {{CH_platform}} {{CH_platformVersion}}) AppleWebKit/{{AppleWebKit_version}} (KHTML, like Gecko) {{CH_BrowserName}}/{{CH_UAFullVersion}} Mobile Safari/{{Safari_version}}",
        xa: "Mozilla/{{Mozilla_version}} (X11; {{CH_platform}} {{CH_platformVersion}}; {{CH_architecture}}_{{CH_bitness}}) AppleWebKit/{{AppleWebKit_version}} (KHTML, like Gecko) {{CH_BrowserName}}/{{CH_UAFullVersion}} Safari/{{Safari_version}}",
        Aa: "Mozilla/{{Mozilla_version}} ({{CH_platform}} {{CH_platformVersion}}; {{CH_model}} {{CH_architecture}}) AppleWebKit/{{AppleWebKit_version}} (KHTML, like Gecko) {{CH_BrowserName}}/{{CH_UAFullVersion}} Safari/{{Safari_version}}"
    }, {
        u: function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e = e.replace("{{" + n + "}}", t[n]));
            return e
        }, Ra: function (e, t) {
            var n = e.Da, r = e.platform, o = e.wb, i = e.Ga, a = e.Qa, c = e.tb, s = e.Ea, u = t.qa.version,
                l = t.ea.version, d = t.ta.version;
            return null != u && "" !== u || (u = "5.0"), null != l && "" !== l || (l = "537.36"), null != d && "" !== d || (d = "537.36"), null != r && "" !== r || (r = t.ra.name), null != o && "" !== o || (o = t.ra.version), null != a && "" !== a || (a = t.Fa.version), null != c && "" !== c || (c = t.M.model), {
                CH_architecture: n,
                CH_platform: r,
                CH_platformVersion: o,
                CH_BrowserName: i,
                CH_UAFullVersion: a,
                CH_model: c,
                CH_bitness: s,
                Mozilla_version: u,
                AppleWebKit_version: l,
                Safari_version: d
            }
        }, Pa: function (e) {
            var t = +(o = e.match(/\d*\.|\d+/g) || [])[0] || 0, n = +o[1] || 0, r = +o[2] || 0, o = +o[3] || 0;
            return 8 >= t ? e : e = (o ? [t, n, r, o] : r ? [t, n, r] : n ? [t, n] : [t]).join(".")
        }
    }, function () {
        function e(e) {
            var t = e || ("undefined" != typeof window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : "");
            return this.Ua = function () {
                var e = {name: null, version: null};
                return n.call(e, t, i), e
            }, this.Ya = function () {
                var e = {vendor: null, model: null, type: null};
                return n.call(e, t, a), e
            }, this.ab = function () {
                var e = {name: null, version: null};
                return n.call(e, t, s), e
            }, this.Ta = function () {
                var e = {name: null, version: null};
                return n.call(e, t, c), e
            }, this.fb = function () {
                var e = {name: null, version: null};
                return n.call(e, t, u), e
            }, this.cb = function () {
                var e = {name: null, version: null};
                return n.call(e, t, l), e
            }, this.eb = function () {
                return {
                    Qb: this.ib(),
                    Fa: this.Ua(),
                    qa: this.ab(),
                    ea: this.Ta(),
                    ta: this.fb(),
                    ra: this.cb(),
                    M: this.Ya()
                }
            }, this.ib = function () {
                return t
            }, this.ua = function (e) {
                t = "string" == typeof e && 255 < e.length ? r(e, 255) : e
            }, this.ua(t), this
        }

        function t(e, t) {
            for (var n in t) if ("object" === w()(t[n]) && 0 < t[n].length) {
                for (var r = 0; r < t[n].length; r++) if (o(t[n][r], e)) return "?" === n ? void 0 : n
            } else if (o(t[n], e)) return "?" === n ? void 0 : n;
            return e
        }

        function n(e, t) {
            for (var n, r, o, i, a, c, s = 0; s < t.length && !a;) {
                var u = t[s], l = t[s + 1];
                for (n = r = 0; n < u.length && !a;) if (a = u[n].exec(e), n++, a) for (o = 0; o < l.length; o++) c = a[++r], i = l[o], "object" === w()(i) && 0 < i.length ? 2 === i.length ? this[i[0]] = "function" == typeof i[1] ? i[1].call(this, c) : i[1] : 3 === i.length ? this[i[0]] = "function" != typeof i[1] || i[1].exec && i[1].test ? c ? c.replace(i[1], i[2]) : void 0 : c ? i[1].call(this, c, i[2]) : void 0 : 4 === i.length && (this[i[0]] = c ? i[3].call(this, c.replace(i[1], i[2])) : void 0) : this[i] = c || void 0;
                s += 2
            }
        }

        function r(e, t) {
            return "string" == typeof e ? (e = e.replace(/^\s\s*/, "").replace(/\s\s*$/, ""), void 0 === t ? e : e.substring(0, 255)) : ""
        }

        function o(e, t) {
            return "string" == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
        }

        var i = [[/\b(?:crmo|crios)\/([\w\.]+)/i], ["version", ["name", "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], ["version", ["name", "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], ["name", "version"], [/opios[\/ ]+([\w\.]+)/i], ["version", ["name", "Opera Mini"]], [/\bopr\/([\w\.]+)/i], ["version", ["name", "Opera"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i], ["name", "version"], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], ["version", ["name", "UCBrowser"]], [/\bqbcore\/([\w\.]+)/i], ["version", ["name", "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], ["version", ["name", "WeChat"]], [/konqueror\/([\w\.]+)/i], ["version", ["name", "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], ["version", ["name", "IE"]], [/yabrowser\/([\w\.]+)/i], ["version", ["name", "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [["name", /(.+)/, "$1 Secure Browser"], "version"], [/\bfocus\/([\w\.]+)/i], ["version", ["name", "Firefox Focus"]], [/\bopt\/([\w\.]+)/i], ["version", ["name", "Opera Touch"]], [/coc_coc\w+\/([\w\.]+)/i], ["version", ["name", "Coc Coc"]], [/dolfin\/([\w\.]+)/i], ["version", ["name", "Dolphin"]], [/coast\/([\w\.]+)/i], ["version", ["name", "Opera Coast"]], [/miuibrowser\/([\w\.]+)/i], ["version", ["name", "MIUI Browser"]], [/fxios\/([-\w\.]+)/i], ["version", ["name", "Firefox"]], [/\bqihu|(qi?ho?o?|360)browser/i], [["name", "360 Browser"]], [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i], [["name", /(.+)/, "$1 Browser"], "version"], [/(comodo_dragon)\/([\w\.]+)/i], [["name", /_/g, " "], "version"], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i], ["name", "version"], [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i], ["name"], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [["name", "Facebook"], "version"], [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i], ["name", "version"], [/\bgsa\/([\w\.]+) .*safari\//i], ["version", ["name", "GSA"]], [/headlesschrome(?:\/([\w\.]+)| )/i], ["version", ["name", "Chrome Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [["name", "Chrome WebView"], "version"], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], ["version", ["name", "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], ["name", "version"], [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i], ["version", ["name", "Mobile Safari"]], [/version\/([\w\.]+) .*(mobile ?safari|safari)/i], ["version", "name"], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], ["name", ["version", t, {
                "1.0": "/8",
                1.2: "/1",
                1.3: "/3",
                "2.0": "/412",
                "2.0.2": "/416",
                "2.0.3": "/417",
                "2.0.4": "/419",
                "?": "/"
            }]], [/(webkit|khtml)\/([\w\.]+)/i], ["name", "version"], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [["name", "Netscape"], "version"], [/mobile vr; rv:([\w\.]+)\).+firefox/i], ["version", ["name", "Firefox Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i], ["name", "version"]],
            a = [[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], ["model", ["vendor", "Samsung"], ["type", "tablet"]], [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], ["model", ["vendor", "Samsung"], ["type", "mobile"]], [/\((ip(?:hone|od)[\w ]*);/i], ["model", ["vendor", "Apple"], ["type", "mobile"]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], ["model", ["vendor", "Apple"], ["type", "tablet"]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], ["model", ["vendor", "Huawei"], ["type", "tablet"]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i], ["model", ["vendor", "Huawei"], ["type", "mobile"]], [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [["model", /_/g, " "], ["vendor", "Xiaomi"], ["type", "mobile"]], [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [["model", /_/g, " "], ["vendor", "Xiaomi"], ["type", "tablet"]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], ["model", ["vendor", "OPPO"], ["type", "mobile"]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], ["model", ["vendor", "Vivo"], ["type", "mobile"]], [/\b(rmx[12]\d{3})(?: bui|;|\))/i], ["model", ["vendor", "Realme"], ["type", "mobile"]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], ["model", ["vendor", "Motorola"], ["type", "mobile"]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], ["model", ["vendor", "Motorola"], ["type", "tablet"]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], ["model", ["vendor", "LG"], ["type", "tablet"]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], ["model", ["vendor", "LG"], ["type", "mobile"]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], ["model", ["vendor", "Lenovo"], ["type", "tablet"]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [["model", /_/g, " "], ["vendor", "Nokia"], ["type", "mobile"]], [/(pixel c)\b/i], ["model", ["vendor", "Google"], ["type", "tablet"]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], ["model", ["vendor", "Google"], ["type", "mobile"]], [/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], ["model", ["vendor", "Sony"], ["type", "mobile"]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [["model", "Xperia Tablet"], ["vendor", "Sony"], ["type", "tablet"]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], ["model", ["vendor", "OnePlus"], ["type", "mobile"]], [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], ["model", ["vendor", "Amazon"], ["type", "tablet"]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [["model", /(.+)/g, "Fire Phone $1"], ["vendor", "Amazon"], ["type", "mobile"]], [/(playbook);[-\w\),; ]+(rim)/i], ["model", "vendor", ["type", "tablet"]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], ["model", ["vendor", "BlackBerry"], ["type", "mobile"]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], ["model", ["vendor", "ASUS"], ["type", "tablet"]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], ["model", ["vendor", "ASUS"], ["type", "mobile"]], [/(nexus 9)/i], ["model", ["vendor", "HTC"], ["type", "tablet"]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i], ["vendor", ["model", /_/g, " "], ["type", "mobile"]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], ["model", ["vendor", "Acer"], ["type", "tablet"]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], ["model", ["vendor", "Meizu"], ["type", "mobile"]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], ["model", ["vendor", "Sharp"], ["type", "mobile"]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], ["vendor", "model", ["type", "mobile"]], [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], ["vendor", "model", ["type", "tablet"]], [/(surface duo)/i], ["model", ["vendor", "Microsoft"], ["type", "tablet"]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], ["model", ["vendor", "Fairphone"], ["type", "mobile"]], [/(u304aa)/i], ["model", ["vendor", "AT&T"], ["type", "mobile"]], [/\bsie-(\w*)/i], ["model", ["vendor", "Siemens"], ["type", "mobile"]], [/\b(rct\w+) b/i], ["model", ["vendor", "RCA"], ["type", "tablet"]], [/\b(venue[\d ]{2,7}) b/i], ["model", ["vendor", "Dell"], ["type", "tablet"]], [/\b(q(?:mv|ta)\w+) b/i], ["model", ["vendor", "Verizon"], ["type", "tablet"]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], ["model", ["vendor", "Barnes & Noble"], ["type", "tablet"]], [/\b(tm\d{3}\w+) b/i], ["model", ["vendor", "NuVision"], ["type", "tablet"]], [/\b(k88) b/i], ["model", ["vendor", "ZTE"], ["type", "tablet"]], [/\b(nx\d{3}j) b/i], ["model", ["vendor", "ZTE"], ["type", "mobile"]], [/\b(gen\d{3}) b.+49h/i], ["model", ["vendor", "Swiss"], ["type", "mobile"]], [/\b(zur\d{3}) b/i], ["model", ["vendor", "Swiss"], ["type", "tablet"]], [/\b((zeki)?tb.*\b) b/i], ["model", ["vendor", "Zeki"], ["type", "tablet"]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [["vendor", "Dragon Touch"], "model", ["type", "tablet"]], [/\b(ns-?\w{0,9}) b/i], ["model", ["vendor", "Insignia"], ["type", "tablet"]], [/\b((nxa|next)-?\w{0,9}) b/i], ["model", ["vendor", "NextBook"], ["type", "tablet"]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [["vendor", "Voice"], "model", ["type", "mobile"]], [/\b(lvtel\-)?(v1[12]) b/i], [["vendor", "LvTel"], "model", ["type", "mobile"]], [/\b(ph-1) /i], ["model", ["vendor", "Essential"], ["type", "mobile"]], [/\b(v(100md|700na|7011|917g).*\b) b/i], ["model", ["vendor", "Envizen"], ["type", "tablet"]], [/\b(trio[-\w\. ]+) b/i], ["model", ["vendor", "MachSpeed"], ["type", "tablet"]], [/\btu_(1491) b/i], ["model", ["vendor", "Rotor"], ["type", "tablet"]], [/(shield[\w ]+) b/i], ["model", ["vendor", "Nvidia"], ["type", "tablet"]], [/(sprint) (\w+)/i], ["vendor", "model", ["type", "mobile"]], [/(kin\.[onetw]{3})/i], [["model", /\./g, " "], ["vendor", "Microsoft"], ["type", "mobile"]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], ["model", ["vendor", "Zebra"], ["type", "tablet"]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], ["model", ["vendor", "Zebra"], ["type", "mobile"]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], ["vendor", "model", ["type", "console"]], [/droid.+; (shield) bui/i], ["model", ["vendor", "Nvidia"], ["type", "console"]], [/(playstation [345portablevi]+)/i], ["model", ["vendor", "Sony"], ["type", "console"]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], ["model", ["vendor", "Microsoft"], ["type", "console"]], [/smart-tv.+(samsung)/i], ["vendor", ["type", "smarttv"]], [/hbbtv.+maple;(\d+)/i], [["model", /^/, "SmartTV"], ["vendor", "Samsung"], ["type", "smarttv"]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [["vendor", "LG"], ["type", "smarttv"]], [/(apple) ?tv/i], ["vendor", ["model", "Apple TV"], ["type", "smarttv"]], [/crkey/i], [["model", "Chromecast"], ["vendor", "Google"], ["type", "smarttv"]], [/droid.+aft(\w)( bui|\))/i], ["model", ["vendor", "Amazon"], ["type", "smarttv"]], [/\(dtv[\);].+(aquos)/i], ["model", ["vendor", "Sharp"], ["type", "smarttv"]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i], [["vendor", r], ["model", r], ["type", "smarttv"]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [["type", "smarttv"]], [/((pebble))app/i], ["vendor", "model", ["type", "wearable"]], [/droid.+; (glass) \d/i], ["model", ["vendor", "Google"], ["type", "wearable"]], [/droid.+; (wt63?0{2,3})\)/i], ["model", ["vendor", "Zebra"], ["type", "wearable"]], [/(quest( 2)?)/i], ["model", ["vendor", "Facebook"], ["type", "wearable"]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], ["vendor", ["type", "embedded"]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i], ["model", ["type", "mobile"]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], ["model", ["type", "tablet"]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [["type", "tablet"]], [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i], [["type", "mobile"]], [/(android[-\w\. ]{0,9});.+buil/i], ["model", ["vendor", "Generic"]]],
            c = [[/(applewebkit)\/([\w\.]+)/i], ["name", "version"]],
            s = [[/(mozilla)\/([\w\.]+)/i], ["name", "version"]], u = [[/(safari)\/([\w\.]+)/i], ["name", "version"]],
            l = [[/microsoft (windows) (vista|xp)/i], ["name", "version"], [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i], ["name", "version"], [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [["name", "Windows"], ["version", t, {
                ME: "4.90",
                "NT 3.11": "NT3.51",
                "NT 4.0": "NT4.0",
                2e3: "NT 5.0",
                XP: ["NT 5.1", "NT 5.2"],
                Vista: "NT 6.0",
                7: "NT 6.1",
                8: "NT 6.2",
                8.1: "NT 6.3",
                10: ["NT 6.4", "NT 10.0"],
                RT: "ARM"
            }]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i], [["version", /_/g, "."], ["name", "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [["name", "Mac OS"], ["version", /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86)/i], ["version", "name"], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], ["name", "version"], [/\(bb(10);/i], ["version", ["name", "BlackBerry"]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], ["version", ["name", "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], ["version", ["name", "Firefox OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], ["version", ["name", "webOS"]], [/crkey\/([\d\.]+)/i], ["version", ["name", "Chromecast"]], [/(cros) [\w]+ ([\w\.]+\w)/i], [["name", "Chromium OS"], "version"], [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], ["name", "version"], [/(sunos) ?([\w\.\d]*)/i], [["name", "Solaris"], "version"], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i], ["name", "version"]];
        return e.Eb = ["name", "version", "major"], e.Fb = "model vendor type console mobile smarttv tablet wearable embedded".split(" "), e.Gb = ["name", "version"], e.Db = ["name", "version"], e.Nb = ["name", "version"], e.Ib = ["name", "version"], e
    }())), function (e) {
        e()
    }(function (e, t, n, r, o, i, a, c, s, u, l) {
        var d = "", f = "";
        return i.T[0] = function (t) {
            return e.S(t, escape("@UTC@"), (o.Xa() || new Date).getTime())
        }, i.h[106] = function () {
            return "1"
        }, i.h[108] = function () {
            return d
        }, i.h[109] = function () {
            return f
        }, i.h[110] = function () {
            return t((new Date).getTime())
        }, i.h[113] = function () {
            return 0 + a.Y()
        }, i.h[114] = function () {
            return n.Za()
        }, i.h[115] = function () {
            var e = n.Z();
            return "boolean" == typeof e ? 0 + e : ""
        }, i.h[116] = function () {
            return n.$()
        }, i.h[118] = function () {
            return l.jb() || ""
        }, r.J.sa([function () {
            return u.Sa()
        }]), r.X.push(o.o, n.o, u.Ma, a.Ja, a.La), r.ca.push((function () {
            d = f = "";
            var e = r.j, n = e[3];
            if (n) {
                e = e[4];
                e:{
                    for (var o = n + "=", i = document.cookie.split(/; */g), a = 0; a < i.length; a++) {
                        var c = i[a];
                        if (0 === c.indexOf(o)) {
                            f = c.substring(o.length, c.length);
                            break e
                        }
                    }
                    f = ""
                }
                f ? d = "0" : (o = (new Date).getTime(), f = t(o), document.cookie = n + "=" + f + "; expires=" + new Date(o + 63072e6).toUTCString() + (e ? "; domain=." + e : "") + "; path=/", d = "1")
            }
        })), function (e) {
            c(e)
        }
    }(r, o, s, i, u, m, l, d, 0, function (e, t) {
        function n(e, n, r) {
            function o(e) {
                a.reject(e)
            }

            function i(e) {
                a.O(e)
            }

            var a = new t;
            try {
                try {
                    e[n].apply(e, r).then(i, o)
                } catch (t) {
                    e[n].apply(e, r.concat([i, o]))
                }
            } catch (e) {
                o(e)
            }
            return a
        }

        var r = window.mozRTCPeerConnection || window.webkitRTCPeerConnection || window.RTCPeerConnection, o = [];
        return {
            Ma: function () {
                var t = null, i = null;
                return {
                    start: function (e) {
                        try {
                            o = [], (t = new r({iceServers: []})).onicecandidate = function (t) {
                                if (!e.g()) {
                                    var n;
                                    e:{
                                        try {
                                            var r = t.candidate;
                                            if (r) {
                                                var i = r.candidate;
                                                if (i) {
                                                    o.push(i), n = !0;
                                                    break e
                                                }
                                            }
                                        } catch (e) {
                                        }
                                        n = !1
                                    }
                                    n || e.b()
                                }
                            }, i = t.createDataChannel(""), n(t, "createOffer", []).then((function (r) {
                                if (!e.g()) return n(t, "setLocalDescription", [r])
                            })).then(null, (function () {
                                e.g() || e.b()
                            }))
                        } catch (t) {
                            e.b()
                        }
                    }, finish: function () {
                        t && (t.onicecandidate = null, i && (i.close(), i = null), t.close(), t = null)
                    }, v: e.l
                }
            }, Sa: function () {
                for (var e = "", t = "", n = 0; n < o.length; n++) {
                    var r = o[n].replace(/^[^:]*:/, "").split(" ");
                    8 <= r.length && (e += t + r[4] + " " + r[7], t = ",")
                }
                return e
            }
        }
    }(i, a), function () {
        var e = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"], t = /android|\badr\b|silk|kindle/i;
        return {
            jb: function () {
                if (window.WebGLRenderingContext && !t.test(navigator.userAgent)) {
                    for (var n = document.createElement("canvas"), r = null, o = 0; o < e.length && !r; o++) r = n.getContext(e[o]);
                    if (null !== r && r.getExtension("WEBGL_debug_renderer_info")) return r.getParameter(37446)
                }
                return null
            }, Cb: function () {
                if (!window.WebGLRenderingContext) throw Error();
                var t = {
                    m: null, Ia: null, Lb: function (e) {
                        return this.m.getParameter(e)
                    }, Jb: function (e) {
                        return this.m.getContextAttributes()[e]
                    }, Mb: function (e, t) {
                        return this.m.getShaderPrecisionFormat(e, t)
                    }, Kb: function () {
                        return this.m.getSupportedExtensions()
                    }, pb: function () {
                        if (!this.m) {
                            for (var t = document.createElement("canvas"), n = 0; n < e.length; n++) {
                                var r = e[n];
                                if (this.m = t.getContext(r)) return void (this.Ia = r)
                            }
                            throw Error()
                        }
                    }
                };
                return t.pb(), t
            }
        }
    }()))
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(2), o = n.n(r), i = n(0), a = n.n(i), c = n(1), s = n.n(c), u = n(3), l = n.n(u), d = n(4), f = n.n(d),
        m = (n(16), n(20), n(9)), p = n(5), h = n.n(p), v = function () {
            function e() {
                l()(this, e)
            }

            return f()(e, null, [{
                key: "createCORSRequest", value: function (e, t) {
                    var n = new XMLHttpRequest;
                    return "withCredentials" in n ? n.open(e, t, !0) : "undefined" != typeof XDomainRequest ? (n = new XDomainRequest).open(e, t) : n = null, n
                }
            }, {
                key: "toQueryParams", value: function (e) {
                    var t = [];
                    return Object.keys(e).forEach((function (n) {
                        var r = e[n];
                        null != r && (r && "object" === h()(r) ? Object.keys(r).forEach((function (r) {
                            t.push("".concat(n, "[]=").concat(encodeURIComponent(e[n][r])))
                        })) : t.push("".concat(n, "=").concat(encodeURIComponent(e[n]))))
                    })), t.join("&").replace(/\[\]\[\]/g, "[]")
                }
            }, {
                key: "get", value: function (t, n) {
                    var r = this, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    return new Promise((function (i, a) {
                        t = t + "?" + r.toQueryParams(n);
                        var c = e.createCORSRequest("GET", t);
                        c.setRequestHeader("CONTENT-TYPE", "application/json"), o && c.setRequestHeader("Authorization", "Bearer " + o), c.onreadystatechange = function () {
                            4 === c.readyState && (200 === c.status ? i(e.parse(c.responseText)) : (console.error("error", c.status), c.responseText ? a(e.parse(c.responseText)) : a({
                                status: c.status,
                                readyState: c.readyState
                            })))
                        }, c.addEventListener("error", (function (e) {
                            a(e)
                        }), !1), c.addEventListener("abort", (function (e) {
                            a(e)
                        }), !1), c.send()
                    }))
                }
            }, {
                key: "post", value: function (t, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    return new Promise((function (o, i) {
                        var a = JSON.stringify(n), c = e.createCORSRequest("POST", t);
                        c.setRequestHeader("CONTENT-TYPE", "application/json"), r && c.setRequestHeader("Authorization", "Bearer " + r), c.onreadystatechange = function () {
                            4 === c.readyState && (200 === c.status ? o(e.parse(c.responseText)) : (console.error("error", c.status), c.responseText ? i(e.parse(c.responseText)) : i({
                                status: c.status,
                                readyState: c.readyState
                            })))
                        }, c.addEventListener("error", (function (e) {
                            i(e)
                        }), !1), c.addEventListener("abort", (function (e) {
                            i(e)
                        }), !1), c.send(a)
                    }))
                }
            }, {
                key: "parse", value: function (e) {
                    try {
                        return JSON.parse(e)
                    } catch (t) {
                        throw console.error(t, e), new Error(e)
                    }
                }
            }]), e
        }(), b = function (e) {
            return function (e) {
                return !!e && "object" === h()(e)
            }(e) && !function (e) {
                var t = Object.prototype.toString.call(e);
                return "[object RegExp]" === t || "[object Date]" === t || function (e) {
                    return e.$$typeof === y
                }(e)
            }(e)
        };
    var y = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

    function g(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e) ? C((n = e, Array.isArray(n) ? [] : {}), e, t) : e;
        var n
    }

    function w(e, t, n) {
        return e.concat(t).map((function (e) {
            return g(e, n)
        }))
    }

    function _(e) {
        return Object.keys(e).concat(function (e) {
            return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function (t) {
                return e.propertyIsEnumerable(t)
            })) : []
        }(e))
    }

    function k(e, t) {
        try {
            return t in e
        } catch (e) {
            return !1
        }
    }

    function x(e, t, n) {
        var r = {};
        return n.isMergeableObject(e) && _(e).forEach((function (t) {
            r[t] = g(e[t], n)
        })), _(t).forEach((function (o) {
            (function (e, t) {
                return k(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
            })(e, o) || (k(e, o) && n.isMergeableObject(t[o]) ? r[o] = function (e, t) {
                if (!t.customMerge) return C;
                var n = t.customMerge(e);
                return "function" == typeof n ? n : C
            }(o, n)(e[o], t[o], n) : r[o] = g(t[o], n))
        })), r
    }

    function C(e, t, n) {
        (n = n || {}).arrayMerge = n.arrayMerge || w, n.isMergeableObject = n.isMergeableObject || b, n.cloneUnlessOtherwiseSpecified = g;
        var r = Array.isArray(t);
        return r === Array.isArray(e) ? r ? n.arrayMerge(e, t, n) : x(e, t, n) : g(t, n)
    }

    C.all = function (e, t) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce((function (e, n) {
            return C(e, n, t)
        }), {})
    };
    var S = function () {
        function e(t, n, r) {
            l()(this, e), this.token = t, this.url = n, this.fjs = r, this.digitalWalletToken = this._getThirdPartyServices(), r.conf.paypal && this._createPayPal(), r && (this._digitalWalletCallback = this.digitalWalletCallback.bind(this))
        }

        var t, n, r, i;
        return f()(e, [{
            key: "createWebPayment", value: function (e) {
                return "bank" === e.method ? this._createWebPaymentBank(e) : this._createWebPaymentCard(e)
            }
        }, {
            key: "tokenizeWebPaymentMethod", value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return "bank" === e.method ? this._tokenizeWebPaymentMethodBank(e, t) : this._tokenizeWebPaymentMethodCard(e, t)
            }
        }, {
            key: "calculateSurcharge", value: function (e, t) {
                var n = {payment_method_id: e, total: t}, r = "".concat(this.url, "/surcharge/review");
                return v.get(r, n)
            }
        }, {
            key: "_createWebPaymentCard", value: function (e) {
                var t = this._buildTokenizeWebPaymentCardRequest(e),
                    n = "".concat(this.url, "/webpayment/").concat(this.token);
                return v.post(n, t)
            }
        }, {
            key: "digitalWalletCallback", value: function (e) {
                var t = this.fjs, n = t.getPrice(), r = "nmi";
                switch (e.tokenType) {
                    case"googlePay":
                        r = "google_pay";
                        break;
                    case"applePay":
                        r = "apple_pay"
                }
                if (e.token) {
                    var i = o()({
                        payment_method: "card",
                        token_type: r,
                        payment_token: "nmi_" + e.token,
                        total: n,
                        wallet: e.wallet
                    }, this._extractDigitalWalletData(e.wallet));
                    t.emit("digitalwallet_tokenize", i)
                } else t.emit("digitalwallet_tokenize_failure", {message: "token could not be retrieved"});
                return t.config && t.config.digitalWalletCallback && t.config.digitalWalletCallback(e), !1
            }
        }, {
            key: "_extractDigitalWalletData", value: function (e) {
                var t = new Date;
                t.setDate(0);
                var n = {
                    month: t.getMonth() + 1 || "01",
                    year: t.getFullYear() || "2021",
                    email: e.email || "",
                    type: e.cardNetwork,
                    last_four: e.cardDetails
                };
                if (e.billingInfo || e.shippingInfo) {
                    var r = e.billingInfo || e.shippingInfo;
                    r && (n.phone = r.phone || "", n.phone && 0 === n.phone.indexOf("1") && (n.phone = n.phone.substr(1)), n.first_name = r.firstName ? r.firstName : "", n.last_name = r.lastName ? r.lastName : "", n.address_1 = r.address1 ? r.address1 : "", n.address_2 = r.address2 ? r.address2 : "", n.address_city = r.city ? r.city : "", n.address_state = r.state ? r.state : "", n.address_zip = r.postalCode ? r.postalCode : "", n.address_country = r.country ? r.country : "", n.first_name && n.last_name && (n.person_name = "".concat(n.first_name, " ").concat(n.last_name)))
                }
                return n
            }
        }, {
            key: "_getThirdPartyServices", value: (i = s()(a.a.mark((function e() {
                var t, n, r, o, i, c, s, u = this;
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return n = (t = this).fjs, r = window.location && window.location.hostname ? window.location.hostname : "", o = "".concat("https://fattqueryprod.fattlabs.com", "/store/").concat(this.token), e.next = 6, v.get(o, {domain: r});
                        case 6:
                            i = e.sent, t.digitalWalletToken = i.cnp_digital_wallet_token || null, i.allow_ocr_tokenization ? (i.ocr_key ? t.ocr_key = i.ocr_key : n.conf && n.conf.ocr && n.conf.ocr.key ? t.ocr_key = n.conf.ocr.key : t.fjs.emit("orc_error", {message: "OCR key not set for domain ".concat(r)}), t.ocr_key ? ((c = document.createElement("script")).src = "/blinkcard-sdk.min.js", document.head.appendChild(c), c.onload = function () {
                                if (BlinkCardSDK && BlinkCardSDK.isBrowserSupported() && t.ocr_key) {
                                    try {
                                        var e = n.conf;
                                        if (e && e.number && e.number.id) {
                                            var r = document.getElementById(e.number.id);
                                            if (r) {
                                                var o = document.createElement("input");
                                                e.number.ocrStyle && (o.style.cssText = new String(e.number.ocrStyle)), o.className = new String(r.className || " ocr-clone"), o.style.display = "none", o.id = new String(r.id + "-ocr"), r.name && (o.name = new String(r.name + "-ocr")), r.appendChild(o), e.ocr && (e.ocr.number = o)
                                            }
                                        }
                                        if (e && e.cvv && e.cvv.id) {
                                            var i = document.getElementById(e.cvv.id);
                                            if (i) {
                                                var a = document.createElement("input");
                                                e.cvv.style && (a.style.cssText = new String(e.cvv.style)), a.className = new String(i.className || " ocr-clone"), a.style.display = "none", a.id = new String(i.id + "-ocr"), i.name && (a.name = new String(i.name + "-ocr")), i.appendChild(a), e.ocr && (e.ocr.cvv = a)
                                            }
                                        }
                                    } catch (e) {
                                        u.emit("ocr_error", {message: "configuration properties not defined for ocr usage"}), u._disableOcr()
                                    }
                                    t.fjs.emit("ocr_enabled", {
                                        message: "OCR is enabled",
                                        key: t.ocr_key
                                    }), t.allow_ocr_tokenization = !0
                                } else u._disableOcr()
                            }) : (t.fjs.emit("ocr_error", {message: "Merchant is enabled for OCR, but a license key is not assigned to this domain."}), this._disableOcr())) : this._disableOcr(), 1 == !!t.is_surcharge_enabled ? t.fjs.emit("digitalwallet_surcharge", {message: "digital wallets are not supported with surcharging merchants"}) : t.digitalWalletToken ? (t.fjs.emit("digitalwallet_exists", {
                                message: "merchant has digital wallet token",
                                token: t.digitalWalletToken
                            }), (s = document.createElement("script")).src = "https://secure.networkmerchants.com/token/Collect.js", [["data-tokenization-key", t.digitalWalletToken], ["data-variant", "inline"], ["data-currency", "USD"], ["data-country", "US"]].forEach((function (e) {
                                s.setAttribute(e[0], e[1])
                            })), document.getElementsByTagName("head")[0].appendChild(s), s.onerror = function (e) {
                                t.fjs.emit("digitalwallet_error", {message: "The digital wallet tokenization service could not be loaded.  Does this merchant have a valid digital wallet token?"})
                            }, s.onload = function (e) {
                                var n = window.CollectJS;
                                if (!n) throw"could not load collectjs";
                                try {
                                    !n.config.price === n.config.price != t.fjs.conf.price && (n.config.price = t.fjs.conf.price), n.config.callback = t._digitalWalletCallback, t.fjs.conf || (t.fjs.conf = {}), n.config.fields || (n.config.fields = {}), n.config.fields.applePay = C(n.config.fields.applePay, t.fjs.conf.applePay), n.config.fields.googlePay = C(n.config.fields.googlePay, t.fjs.conf.googlePay), n.configure(n.config), t.fjs.emit("digitalwallet_initialized", n.config)
                                } catch (e) {
                                    t.fjs.emit("digitalwallet_error", {
                                        message: "The digital wallet tokenization service could not be initialized.  Check your configuration options for errors.",
                                        details: n.config || {}
                                    })
                                }
                            }) : t.fjs.emit("digitalwallet_notoken", {message: "This merchant does not have a digital wallet token defined."});
                        case 10:
                        case"end":
                            return e.stop()
                    }
                }), e, this)
            }))), function () {
                return i.apply(this, arguments)
            })
        }, {
            key: "_createWebPaymentBank", value: function (e) {
                var t = this._buildTokenizeWebPaymentBankRequest(e),
                    n = "".concat(this.url, "/webpayment/").concat(this.token);
                return v.post(n, t)
            }
        }, {
            key: "_tokenizeWebPaymentMethodCard", value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = this._buildTokenizeWebPaymentCardRequest(e),
                    r = "".concat(this.url, "/webpayment/").concat(this.token, "/token");
                return v.post(r, n, t)
            }
        }, {
            key: "_tokenizeWebPaymentMethodBank", value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                e && (e.phone && (e.phone = e.phone.replace(/[^0-9]/g, "")), 0 == !!e.company && (e.company = ""), 0 == !!e.email && (e.email = ""));
                var n = "".concat(this.url, "/webpayment/").concat(this.token, "/token");
                return v.post(n, e, t)
            }
        }, {
            key: "_buildTokenizeSharedFields", value: function (e) {
                var t = e.first_name || e.firstname || e.firstName || "",
                    n = e.last_name || e.lastname || e.lastName || "",
                    r = e.company || e.companyName || e.company_name || "",
                    i = e.person_name || e.billing_name || e.personName || "".concat(t, " ").concat(n), a = {
                        channel: e.channel,
                        match_customer: "boolean" == typeof e.match_customer ? e.match_customer : void 0,
                        bill_id: e.bill_id || void 0,
                        customer_id: e.customer_id || void 0,
                        send_receipt: e.send_receipt,
                        save_for_future: e.save_for_future,
                        rule: e.rule || "",
                        total: e.total || 0,
                        url: e.url || "https://omni.fattmerchant.com/#/bill/",
                        meta: o()({}, e.meta || {}),
                        company: r,
                        person_name: i,
                        firstname: t,
                        lastname: n,
                        paymentLinkId: e.paymentLinkId || null
                    };
                return e.recaptcha_token && (a.recaptcha_token = e.recaptcha_token), e.idempotency_id && (a.idempotency_id = e.idempotency_id), a
            }
        }, {
            key: "_buildTokenizeWebPaymentCardRequest", value: function (e) {
                var t = 1 === String(e.month).length ? "0".concat(e.month) : String(e.month),
                    n = 4 === String(e.year).length ? String(e.year) : "20".concat(e.year),
                    r = "".concat(t).concat(n.substr(2, 2)), i = e.first_name || e.firstname || e.firstName || "",
                    a = e.last_name || e.lastname || e.lastName || "",
                    c = e.company || e.companyName || e.company_name || "",
                    s = e.person_name || e.billing_name || e.personName || "".concat(i, " ").concat(a),
                    u = e.address_1 || e.address_line_1 || e.line1 || e.line_1 || "",
                    l = e.address_2 || e.address_line_2 || e.line2 || e.line_2 || "",
                    d = e.city || e.address_city || e.addresCity || "",
                    f = e.state || e.address_state || e.addressState || "",
                    m = e.zip || e.address_zip || e.addressZip || e.postalCode || e.postal_code || "",
                    p = e.addressCountry || e.address_country || e.country || "USA",
                    h = o()({}, this._buildTokenizeSharedFields(e), {
                        phone: String(e.phone || "").replace(/[\D]/g, ""),
                        firstname: i,
                        lastname: a,
                        address_zip: m,
                        company: c,
                        email: e.email || "",
                        address_country: 3 != p.length ? "" : p,
                        person_name: s,
                        method: e.method || "card",
                        card_number: "",
                        card_exp: r,
                        address_1: u,
                        address_2: l,
                        address_city: d,
                        address_state: String(f || "").substr(0, 2),
                        payment_token: e.payment_token,
                        payment_method_id: e.payment_method_id,
                        token_type: e.token_type || null
                    });
                return e.currency && (h.currency = e.currency), e.wallet && e.wallet.cardNetwork && e.wallet.cardDetails && (h.type = e.wallet.cardNetwork, h.last_four = e.wallet.cardDetails), h
            }
        }, {
            key: "_buildTokenizeWebPaymentBankRequest", value: function (e) {
                return o()({}, this._buildTokenizeSharedFields(e), {payment_method_id: e.paymentToken || e.payment_token})
            }
        }, {
            key: "_createPayPal", value: (r = s()(a.a.mark((function e() {
                var t, n, r, i, c, u, l;
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return t = this, n = this.token, r = "".concat("https://fattqueryprod.fattlabs.com", "/merchants/").concat(n), e.next = 5, v.get(r, {});
                        case 5:
                            if (i = e.sent, c = i.id || null, u = !!i.allow_paypal || !1, c) {
                                e.next = 11;
                                break
                            }
                            return t.fjs.emit("paypal_token_error", {message: "Unable to initialize PayPal with the provided token"}), e.abrupt("return");
                        case 11:
                            if (u) {
                                e.next = 14;
                                break
                            }
                            return t.fjs.emit("paypal_not_allowed", {message: "PayPal not supported for this merchant"}), e.abrupt("return");
                        case 14:
                            e.prev = 14, (l = document.createElement("script")).src = "https://www.paypal.com/sdk/js?&client-id=".concat("AfH9wjZM4CdglrQWHgODEuOclEbzWAfpWlzTRn1_yUPkn7PZN_SpRx3ri5QWJBbYTwWguEhLsWLsu4K4", "&enable-funding=venmo,paylater&disable-funding=card"), document.getElementsByTagName("head")[0].appendChild(l), l.onerror = function (e) {
                                t.fjs.emit("paypal_error", {message: "Invalid token or merchant not allowed to PayPal"})
                            }, l.onload = function (e) {
                                var r, i, u = window.paypal;
                                if (u) {
                                    var l = t.fjs.conf.price;
                                    u.Buttons({
                                        createOrder: (i = s()(a.a.mark((function e() {
                                            var t;
                                            return a.a.wrap((function (e) {
                                                for (; ;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, v.post("".concat("http://localhost:3005", "/pay/initiate/").concat(c), {
                                                            intent: "CAPTURE",
                                                            purchase_units: [{
                                                                reference_id: Object(m.v4)(),
                                                                amount: {value: l, currency_code: "USD"}
                                                            }]
                                                        });
                                                    case 2:
                                                        return t = e.sent, e.abrupt("return", t.id);
                                                    case 4:
                                                    case"end":
                                                        return e.stop()
                                                }
                                            }), e, this)
                                        }))), function () {
                                            return i.apply(this, arguments)
                                        }), onApprove: (r = s()(a.a.mark((function e(r, i) {
                                            var c, s;
                                            return a.a.wrap((function (e) {
                                                for (; ;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return (c = {}).total = l, c.isHostedPayment = !0, c.token = n, c.channel = "website-payment", e.next = 7, v.post("".concat("http://localhost:3005", "/pay/capture/").concat(r.orderID), o()({}, c));
                                                    case 7:
                                                        (s = e.sent) && "PAID" === s.status && t.fjs.emit("paypal_payment_successful", {message: "Payment Successful"});
                                                    case 9:
                                                    case"end":
                                                        return e.stop()
                                                }
                                            }), e, this)
                                        }))), function (e, t) {
                                            return r.apply(this, arguments)
                                        })
                                    }).render(t.fjs.conf.paypal.selector)
                                }
                            }, e.next = 27;
                            break;
                        case 23:
                            return e.prev = 23, e.t0 = e.catch(14), t.fjs.emit("paypal_error", {message: e.t0}), e.abrupt("return");
                        case 27:
                        case"end":
                            return e.stop()
                    }
                }), e, this, [[14, 23]])
            }))), function () {
                return r.apply(this, arguments)
            })
        }, {
            key: "_removeUndefined", value: function (e) {
                return Object.keys(e).forEach((function (t) {
                    return null == e[t] ? delete e[t] : {}
                })), e
            }
        }, {
            key: "initializeOcr", value: (n = s()(a.a.mark((function e(t) {
                var n, r, i, c, s, u, l;
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            if ((n = this).allow_ocr_tokenization) {
                                e.next = 4;
                                break
                            }
                            return n.fjs.emit("ocr_error", {message: "OCR is not enabled for this merchant"}), e.abrupt("return", !1);
                        case 4:
                            if (t) {
                                e.next = 15;
                                break
                            }
                            if (e.prev = 5, t = document.getElementsByTagName("form")[0].id) {
                                e.next = 9;
                                break
                            }
                            throw new Error("form does not have an id");
                        case 9:
                            e.next = 15;
                            break;
                        case 11:
                            return e.prev = 11, e.t0 = e.catch(5), n.fjs.emit("ocr_error", {message: "A form ID was not passed to initializeOcr.  The form that contains the payment fields must have a unique ID attribute"}), e.abrupt("return");
                        case 15:
                            return r = document.getElementById(t), (i = document.getElementById("ocr-loading")) || ((i = document.createElement("div")).id = "ocr-loading", i.innerHTML = '<div><h1>OCR Toolkit Loading...</h1><progress id="ocr-load-progress" value="0" max="100"></progress></div>', i.style.cssText = "top: 50%; left: 50%;position:absolute;", document.body.appendChild(i)), c = document.getElementById("ocr-load-progress"), e.prev = 19, i.style.display = "block", n._changeCardNumberAndCvvFields(), r.style.display = "none", (s = new BlinkCardSDK.WasmSDKLoadSettings(n.ocr_key || "")).engineLocation = "/resources", s.loadProgressCallback = function (e) {
                                c.value = e
                            }, u = {
                                timeout: 60,
                                toolbarClass: "",
                                toolbarStyle: "position: absolute; top: 0px; left: 0px; right: 0px; font-weight: bold; display: block;padding:1em;background-color: rgba(255,255,255,0.5);border:1px solid black;",
                                frontPrompt: "[&#x231B;] Please position the front of the card in view of the camera",
                                rearPrompt: "[<span style='color:green'>&check;</span>] Front Scanned\n      <br/>\n      [&#x231B;] Please present the rear of the card",
                                closeText: "&#x274c;",
                                closeStyle: "float:right;cursor:pointer;color:red;font-weight:bold;",
                                closeClass: "",
                                textStyle: "float: left;",
                                textClass: "",
                                statusbarStyle: "position: absolute; text-align:center; bottom: 0px; left: 0px; right: 0px; font-weight: bold; display: block;padding:1em;background-color: rgba(255,255,255,0.5);border:1px solid black;"
                            }, n.fjs.conf || (n.fjs.conf = {}), n.fjs.conf.ocr || (n.fjs.conf.ocr = {}), n.fjs.conf.ocr = this._removeUndefined(n.fjs.conf.ocr), n.fjs.conf.ocr = o()({}, u, n.fjs.conf.ocr), e.next = 33, BlinkCardSDK.loadWasmModule(s);
                        case 33:
                            l = e.sent, n._startScan(l, t), e.next = 42;
                            break;
                        case 37:
                            e.prev = 37, e.t1 = e.catch(19), console.log(e.t1), r.style.display = "block", n.fjs.emit("ocr_error", {message: "Failed to load SDK! ".error});
                        case 42:
                            return e.prev = 42, e.finish(42);
                        case 44:
                            return n.fjs.emit("ocr_initiated", {message: "OCR initiated"}), e.abrupt("return", n);
                        case 46:
                        case"end":
                            return e.stop()
                    }
                }), e, this, [[5, 11], [19, 37, 42, 44]])
            }))), function (e) {
                return n.apply(this, arguments)
            })
        }, {
            key: "_setOcrTimeout", value: function (e) {
                var t = this;
                return e || (e = this.fjs.conf.ocr.timeout || 60), setTimeout(function () {
                    var n = s()(a.a.mark((function n() {
                        return a.a.wrap((function (n) {
                            for (; ;) switch (n.prev = n.next) {
                                case 0:
                                    if (!t.ocrVideo) {
                                        n.next = 4;
                                        break
                                    }
                                    return t.ocrVideo.cancelled = !0, n.next = 4, t.ocrVideo.releaseVideoFeed();
                                case 4:
                                    t.fjs.emit("ocr_timeout", {message: "OCR timed out after ".concat(e, " seconds")});
                                case 5:
                                case"end":
                                    return n.stop()
                            }
                        }), n, this)
                    })));
                    return function () {
                        return n.apply(this, arguments)
                    }
                }(), 1e3 * e)
            }
        }, {
            key: "_startScan", value: (t = s()(a.a.mark((function e(t, n) {
                var r, o, i, c, s, u, l, d = this;
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return r = this.fjs, (o = document.getElementById("ocr-screen-scanning")) ? (window.ocrCancel = this._ocrCancel.bind(this), this._ocrSetStage(0)) : o = this._insertScreenScanningElementIntoDOM(), e.next = 5, BlinkCardSDK.createBlinkCardRecognizer(t);
                        case 5:
                            return i = e.sent, this.ocrTimeout = this._setOcrTimeout(), c = {
                                onGlare: function (e) {
                                    e && alert("OCR Detection will not be reliable due to high glare. Ensure the card is not directly lit.")
                                }, onQuadDetection: function (e) {
                                    return d.ocrDrawBox(e)
                                }, onFirstSideResult: function () {
                                    d._ocrSetStage(1), r.emit("ocr_flip", {message: "Please flip card; first side read"}), d.ocrTimeout && clearTimeout(d.ocrTimeout), d.ocrTimeout = d._setOcrTimeout()
                                }
                            }, e.next = 10, BlinkCardSDK.createRecognizerRunner(t, [i], !1, c);
                        case 10:
                            return s = e.sent, e.next = 13, BlinkCardSDK.VideoRecognizer.createVideoRecognizerFromCameraStream(o.querySelector("video"), s);
                        case 13:
                            return u = e.sent, this.ocrVideo = u, e.next = 17, u.recognize();
                        case 17:
                            if (e.sent === BlinkCardSDK.RecognizerResultState.Empty) {
                                e.next = 25;
                                break
                            }
                            return e.next = 21, i.getResult();
                        case 21:
                            (l = e.sent).state !== BlinkCardSDK.RecognizerResultState.Empty && (clearTimeout(this.ocrTimeout), this._insertBlinkcardResultIntoForm(l, n), r.emit("ocr_success", {
                                message: "Completed credit card scanning",
                                data: l
                            })), e.next = 26;
                            break;
                        case 25:
                            r.emit("ocr_error", {message: "Could not extract information!"});
                        case 26:
                            u.releaseVideoFeed(), s.delete(), i.delete(), document.getElementById(n).style.display = "block", o && o.remove();
                        case 31:
                        case"end":
                            return e.stop()
                    }
                }), e, this)
            }))), function (e, n) {
                return t.apply(this, arguments)
            })
        }, {
            key: "_insertBlinkcardResultIntoForm", value: function (e, t) {
                var n = e.cardNumber, r = e.cvv, o = e.expiryDate, i = e.owner.split(" "),
                    a = document.getElementById(t);
                return a.querySelector("input[name=cardholder-first-name]").value = i[0], a.querySelector("input[name=cardholder-last-name]").value = i.slice(1).join(" "), a.querySelector("input[name=month]").value = o.month, a.querySelector("input[name=year]").value = o.year, a.querySelector("input[name=card_number]").value = n, a.querySelector("input[name=card_cvv]").value = r, a
            }
        }, {
            key: "_ocrCancel", value: function () {
                clearTimeout(this.ocrTimeout), this.ocrVideo && (this.ocrVideo.cancelled = !0, this.ocrVideo.releaseVideoFeed()), this.fjs.emit("ocr_cancel", {message: "OCR Canceled by user"})
            }
        }, {
            key: "_ocrSetStage", value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, t = {0: "", 1: ""};
                t[0] = this.fjs.conf.ocr.frontPrompt, t[1] = this.fjs.conf.ocr.rearPrompt;
                var n = document.getElementById("ocr-toolbar-text");
                n && (n.innerHTML = t[e])
            }
        }, {
            key: "_insertScreenScanningElementIntoDOM", value: function () {
                var e = document.createElement("div");
                e.id = "ocr-screen-scanning", e.style.cssText = "position:relative";
                var t = this.fjs.conf.ocr;
                return e.innerHTML = '\n  <video id="ocr-camera-feed" playsinline></video>\n  <canvas id="ocr-camera-feedback" willReadFrequently=true style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%;"></canvas>\n  <div id="ocr-toolbar" class=\''.concat(t.toolbarStyle, "' style='").concat(t.toolbarStyle, ";display:none;'>\n   <div style=\"").concat(t.textStyle, '" class="').concat(t.textClass, '" id="ocr-toolbar-text">...</div>\n   <h3 style="').concat(t.closeStyle, '" class="').concat(t.closeClass, '" id="ocr-toolbar-cancel" onclick="ocrCancel();" alt="Cancel OCR">').concat(t.closeText, '</h3>\n  </div>\n  <div id="ocr-statusbar" class=\'').concat(t.toolbarClass, "' style='").concat(t.statusbarStyle, ";display:none;'>"), document.body.appendChild(e), window.ocrCancel = this._ocrCancel.bind(this), this._ocrSetStage(0), e
            }
        }, {
            key: "_changeCardNumberAndCvvFields", value: function () {
                var e = this.fjs, t = document.getElementById(e.conf.number.id),
                    n = document.getElementById(e.conf.cvv.id), r = t.querySelector("iframe"),
                    o = n.querySelector("iframe");
                r && o && (r.remove(), o.remove(), this._createNumberFormField(t), this._createCvvFormField(n))
            }
        }, {
            key: "_createNumberFormField", value: function (e) {
                var t = document.createElement("input");
                t.setAttribute("inputmode", "numeric"), t.setAttribute("type", "text"), t.setAttribute("name", "card_number"), t.setAttribute("pattern", "[0-9 *]*"), t.setAttribute("size", "19"), t.style.cssText = this.fjs.conf.number.ocrStyle, e.appendChild(t)
            }
        }, {
            key: "_createCvvFormField", value: function (e) {
                var t = document.createElement("input");
                t.setAttribute("inputmode", "numeric"), t.setAttribute("type", "text"), t.setAttribute("name", "card_cvv"), t.setAttribute("pattern", "[0-9 *]*"), t.setAttribute("size", "4"), t.style.cssText = this.fjs.conf.cvv.ocrStyle, e.appendChild(t)
            }
        }, {
            key: "_clearDrawCanvas", value: function () {
                var e = document.getElementById("ocr-camera-feedback"), t = e.getContext("2d");
                e.width = e.clientWidth, e.height = e.clientHeight, t.clearRect(0, 0, e.width, e.height)
            }
        }, {
            key: "_disableOcr", value: function () {
                this.allow_ocr_tokenization = !1, this.fjs.emit("ocr_error", {message: "OCR is not supported"});
                var e = document.getElementById("ocr-loading");
                e && (e.style.display = "none")
            }
        }, {
            key: "ocrDrawBox", value: function (e) {
                var t = document.getElementById("ocr-loading");
                t && (t.style.display = "none");
                var n = document.getElementById("ocr-camera-feedback").getContext("2d"), r = e.detectionStatus,
                    o = "yellow";
                0 === r ? o = "red" : 1 === r && (o = "green");
                var i = document.getElementById("ocr-statusbar"), a = "";
                switch (r) {
                    case 0:
                        a = "Card not visible";
                        break;
                    case BlinkCardSDK.DetectionStatus.CameraTooHigh:
                        a = "Camera too high";
                        break;
                    case BlinkCardSDK.DetectionStatus.Partial:
                        a = "Camera is only able to detect a partial image";
                        break;
                    case BlinkCardSDK.DetectionStatus.CameraAtAngle:
                        a = "Camera angle is off. Reposition card.";
                        break;
                    case BlinkCardSDK.DetectionStatus.CameraTooNear:
                        a = "Card is too close to the camera. Move card away.";
                        break;
                    case BlinkCardSDK.DetectionStatus.DocumentTooCloseToEdge:
                        a = "Card is too close to the edge of the camera. Move card away.";
                        break;
                    default:
                        a = ""
                }
                a && this.fjs.emit("ocr_status", {message: a}), i && (a && a.length > 1 ? (i.style.display = "block", i.innerHTML = a) : i.style.display = "none");
                var c = document.getElementById("ocr-toolbar");
                c && (c.style.display = "block"), this._clearDrawCanvas(), this.applyTransform(e.transformMatrix), n.beginPath(), n.fillStyle = o, n.strokeStyle = o, n.lineWidth = 8, n.moveTo(e.topLeft.x, e.topLeft.y), n.lineTo(e.topRight.x, e.topRight.y), n.lineTo(e.bottomRight.x, e.bottomRight.y), n.lineTo(e.bottomLeft.x, e.bottomLeft.y), n.closePath(), n.stroke()
            }
        }, {
            key: "applyTransform", value: function (e) {
                var t = document.getElementById("ocr-camera-feedback"), n = t.getContext("2d"),
                    r = document.getElementById("ocr-camera-feed"), o = t.width / t.height,
                    i = r.videoWidth / r.videoHeight, a = 0, c = 0, s = 0, u = 0;
                o > i ? (u = i * (s = t.height), a = (t.width - u) / 2) : (s = (u = t.width) / i, c = (t.height - s) / 2), n.translate(a, c), n.scale(u / r.videoWidth, s / r.videoHeight), n.transform(e[0], e[3], e[1], e[4], e[2], e[5])
            }
        }]), e
    }(), T = n(10), A = n.n(T), E = n(6), P = n.n(E), j = n(11), O = n.n(j), z = n(12), B = n.n(z), D = function (e) {
        function t() {
            return l()(this, t), A()(this, P()(t).call(this, {}))
        }

        return B()(t, e), f()(t, [{
            key: "getRulesForValues", value: function (e) {
                var t = "card" === e.method, n = "bank" === e.method, r = !!e.customer_id;
                return {
                    method: {required: !0, inValues: ["bank", "card"]},
                    currency: {required: !1, inValues: ["USD", "CAD"]},
                    firstname: {required: !r, maxLength: 50},
                    lastname: {required: !r, maxLength: 50},
                    email: {
                        regex: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
                        maxLength: 255
                    },
                    address_1: {required: !r, maxLength: 255},
                    address_2: {maxLength: 255},
                    address_city: {required: !r, maxLength: 255},
                    address_state: {required: !r, hasLength: 2},
                    address_zip: {required: !r, maxLength: 16},
                    address_country: {required: !r, hasLength: 3},
                    month: {
                        required: t, predicate: function (e) {
                            switch (!0) {
                                case n:
                                    return !0;
                                case isNaN(e):
                                    return "month must be a number";
                                case+e > 12 || +e < 1:
                                    return "month must be between 1 and 12";
                                default:
                                    return !0
                            }
                        }
                    },
                    year: {
                        required: t, predicate: function (e) {
                            switch (!0) {
                                case n:
                                    return !0;
                                case isNaN(e):
                                    return "year must be a number";
                                case+e < +(new Date).getFullYear():
                                    return "year must not be in the past";
                                default:
                                    return !0
                            }
                        }
                    },
                    bank_account: {required: n},
                    bank_routing: {required: n},
                    bank_type: {required: n, inValues: ["checking", "savings"]},
                    bank_holder_type: {required: n, inValues: ["personal", "business"]},
                    total: {
                        predicate: function (e) {
                            return !isNaN(e) || "must be a number"
                        }
                    },
                    amount: {
                        predicate: function (e) {
                            return !isNaN(e) || "must be a number"
                        }
                    }
                }
            }
        }, {
            key: "validateCardExp", value: function (e) {
                if ("bank" !== e.method && !this.errors.some((function (e) {
                    return "month" === e.field || "year" === e.field
                }))) {
                    var t = e.month || "", n = "20" + (e.year || "").slice(-2);
                    +new Date(+n, +t) < +new Date && this.errors.push({
                        field: "month & year",
                        message: "month & year must be a future date"
                    })
                }
            }
        }, {
            key: "validate", value: function (e) {
                this.rules = this.getRulesForValues(e), "USA" !== e.address_county && delete this.rules.address_state, O()(P()(t.prototype), "validate", this).call(this, e), this.validateCardExp(e)
            }
        }]), t
    }(function () {
        function e(t) {
            l()(this, e), this.rules = t || {}, this.errors = []
        }

        return f()(e, [{
            key: "validateRequired", value: function (e, t) {
                null != t && "" !== t || this.errors.push({
                    field: e,
                    message: "this field is is required (".concat(e, ")")
                })
            }
        }, {
            key: "validateInValues", value: function (e, t, n) {
                t && -1 === n.indexOf(t) && this.errors.push({field: e, message: "must be in ".concat(n.join(", "))})
            }
        }, {
            key: "validateMaxLength", value: function (e, t, n) {
                t && t.length > n && this.errors.push({
                    field: e,
                    message: "must be fewer than ".concat(t.length, " characters")
                })
            }
        }, {
            key: "validateHasLength", value: function (e, t, n) {
                t && t.length !== n && this.errors.push({
                    field: e,
                    message: "must be exactly ".concat(t.length, " characters")
                })
            }
        }, {
            key: "validateRegex", value: function (e, t, n) {
                t && !n.test(t) && this.errors.push({field: e, message: "this field is invalid"})
            }
        }, {
            key: "validatePredicate", value: function (e, t, n) {
                if (t) {
                    var r = n(t);
                    "string" == typeof r ? this.errors.push({field: e, message: r}) : r || this.errors.push({
                        field: e,
                        message: "is invalid."
                    })
                }
            }
        }, {
            key: "validate", value: function (e) {
                for (var t in this.rules) {
                    var n = this.rules[t], r = e[t];
                    n.required && this.validateRequired(t, r), n.inValues && n.inValues.length && this.validateInValues(t, r, n.inValues), Number.isInteger(+n.maxLength) && this.validateMaxLength(t, r, +n.maxLength), Number.isInteger(+n.hasLength) && this.validateHasLength(t, r, +n.hasLength), n.regex && this.validateRegex(t, r, n.regex), n.predicate && "function" == typeof n.predicate && this.validatePredicate(t, r, n.predicate)
                }
                return 0 === this.errors.length
            }
        }]), e
    }());
    n.d(t, "default", (function () {
        return L
    })), n(26);
    var L = function () {
        function e(t, n) {
            l()(this, e);
            n = C({
                googlePay: {
                    selector: "#pay-with-google",
                    billingAddressRequired: !0,
                    billingAddressParameters: {phoneNumberRequired: !0, format: "FULL"},
                    emailRequired: !0,
                    buttonType: "pay",
                    buttonColor: "black",
                    buttonLocale: "en"
                },
                applePay: {
                    selector: "#pay-with-apple",
                    requiredBillingContactFields: ["postalAddress", "name"],
                    contactFields: ["phone", "email"],
                    contactFieldsMappedTo: "billing",
                    totalLabel: "Total",
                    type: "plain"
                }
            }, n), this.fields = {
                numberEl: n.cardField,
                cvvEl: n.cvvField
            }, this.listeners = new Set, this.validNumber = !1, this.validCvv = !1, this.cardType = null, this.overrideKey = n.overrideKey, this.conf = n, this.fmservice = new S(t, n.api_endpoint || "https://apiprod.fattlabs.com", this), this.ocrMode = !1, this.webpaymentsToken = t, this.conf.ocr || (this.conf.ocr = {
                number: {},
                ocr: {}
            })
        }

        var t, n, r, i, c, u, d;
        return f()(e, [{
            key: "mapSpreedlyFieldToGivenFieldId", value: function (e) {
                return {
                    number: this.conf.number && this.conf.number.id,
                    cvv: this.conf.cvv && this.conf.cvv.id,
                    year: this.conf.year && this.conf.year.id,
                    month: this.conf.month && this.conf.month.id
                }[e]
            }
        }, {
            key: "hasDigitalWalletToken", value: function () {
                return !!this.fmservice.digitalWalletToken
            }
        }, {
            key: "getTotal", value: function () {
                return this.getPrice()
            }
        }, {
            key: "getAmount", value: function () {
                return this.getPrice()
            }
        }, {
            key: "getPrice", value: function () {
                return this.conf.price
            }
        }, {
            key: "setAmount", value: function (e) {
                return this.setPrice(e)
            }
        }, {
            key: "setTotal", value: function (e) {
                return this.setPrice(e)
            }
        }, {
            key: "setPrice", value: function (e) {
                try {
                    "string" != typeof e && (e = e.toString());
                    var t = e.replace(/[^0-9\.]+/g, ""), n = t.split(".");
                    if (!t || !n || n.length > 2 || n[1] && n[1].length > 2 || parseFloat(t, 10) < .01) throw"invalid price";
                    return this.conf.price = e.toString(), window.CollectJS && window.CollectJS.configure({price: this.conf.price}), this.emit("set_price", this.conf.price), !0
                } catch (t) {
                    return console.log("Invalid price passed: " + e), this.conf.price = null, window.CollectJS && window.CollectJS.configure({price: this.conf.price}), !1
                }
            }
        }, {
            key: "appendReCAPTCHATerms", value: function (e) {
                var t = document.getElementById(e);
                if (!t) return console.error('Unable to find element with id="'.concat(e, '"')), !1;
                try {
                    return t.innerHTML = 'This site is protected by reCAPTCHA and the Google <a href="'.concat("https://policies.google.com/privacy", '" target="_blank">Privacy Policy</a> and <a href="').concat("https://policies.google.com/terms", '" target="_blank">Terms of Service</a> apply.'), !0
                } catch (e) {
                    return console.error("Unable to append reCAPTCHA terms."), !1
                }
            }
        }, {
            key: "appendBadgeHideCSS", value: function () {
                var e = document.createElement("style");
                e.innerHTML = ".grecaptcha-badge { visibility: hidden; }", document.body.appendChild(e)
            }
        }, {
            key: "showCardForm", value: (d = s()(a.a.mark((function e() {
                var t, n = this;
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Promise.all([new Promise((function (e, t) {
                                if (window.Spreedly) e(); else {
                                    var n = document.createElement("script");
                                    n.src = "https://core.spreedly.com/iframe/iframe-v1.min.js", document.getElementsByTagName("head")[0].appendChild(n), n.onload = e, n.onerror = t
                                }
                            })), new Promise((function (e, t) {
                                "development" === {} && console.log("recaptcha env vars missing"), e()
                            }))]);
                        case 2:
                            return Spreedly.removeHandlers(), Spreedly.init(this.overrideKey ? this.overrideKey : "zpxFDZAKCI522f7ZhB4PXCbSpj", {
                                numberEl: this.conf.number.id,
                                cvvEl: this.conf.cvv.id
                            }), this.validNumber = !1, this.validCvv = !1, this.emit("card_form_incomplete", {
                                validNumber: !1,
                                validCvv: !1
                            }), Spreedly.on("paymentMethod", (function (e, t) {
                                var r = {id: e};
                                n.emit("tokenize", r)
                            })), Spreedly.on("errors", (function (e) {
                                e.forEach((function (e) {
                                    switch (e.key) {
                                        case"errors.account_inactive":
                                        case"errors.environment_key_parameter_required":
                                        case"errors.unknown_referrer":
                                        case"errors.invalid_referrer":
                                        case"errors.configuration":
                                        case"errors.invalid_environment_key_parameter":
                                            n.emit("error_tokenize", {
                                                code: "system_error",
                                                key: e.key,
                                                message: e.key
                                            });
                                            break;
                                        case"errors.blank":
                                        case"errors.invalid":
                                        case"errors.blank_card_type":
                                        case"errors.expired":
                                            var t = {
                                                code: "logic_error",
                                                key: e.key,
                                                message: e.message,
                                                field: e.attribute
                                            }, r = n.mapSpreedlyFieldToGivenFieldId(t.field);
                                            r && (t.fieldErrors = [{
                                                field: r,
                                                message: e.message
                                            }]), n.emit("error_tokenize", t)
                                    }
                                }))
                            })), Spreedly.on("fieldEvent", (function (e, t, r, o) {
                                void 0 !== o.validNumber && void 0 !== o.validCvv && ("number" === e && n.conf.number ? n.emit("card_form_number_change", {
                                    validNumber: o.validNumber,
                                    cardType: o.cardType
                                }) : "cvv" === e && n.conf.cvv && n.emit("card_form_cvv_change", {
                                    validCvv: o.validCvv,
                                    cardType: o.cardType
                                }), n.validNumber === o.validNumber && n.validCvv === o.validCvv && n.cardType === o.cardType || (n.emit(o.validNumber && o.validCvv ? "card_form_complete" : "card_form_incomplete", {
                                    validNumber: o.validNumber,
                                    validCvv: o.validCvv,
                                    cardType: o.cardType
                                }), n.validNumber = o.validNumber, n.validCvv = o.validCvv, n.cardType = o.cardType))
                            })), Spreedly.on("validation", (function (e) {
                            })), Spreedly.on("consoleError", (function (e) {
                            })), t = new Promise((function (e, t) {
                                var r = n.on("ready", (function () {
                                    e(), r()
                                }))
                            })), Spreedly.on("ready", (function (e) {
                                Spreedly.setFieldType("number", n.conf.number.type || "text"), Spreedly.setFieldType("cvv", n.conf.cvv.type || "text"), Spreedly.setNumberFormat(n.conf.number.format || "prettyFormat"), Spreedly.setStyle("number", n.conf.number.style || ""), Spreedly.setStyle("cvv", n.conf.cvv.style || ""), n.conf.number.label && Spreedly.setLabel("number", n.conf.number.label), n.conf.cvv.label && Spreedly.setLabel("cvv", n.conf.number.label), n.conf.number.placeholder && Spreedly.setPlaceholder("number", n.conf.number.placeholder), n.conf.cvv.placeholder && Spreedly.setPlaceholder("cvv", n.conf.cvv.placeholder), n.conf.number.focus ? Spreedly.transferFocus("number") : n.conf.cvv.focus && Spreedly.transferFocus("cvv"), n.emit("ready", {})
                            })), e.next = 16, t;
                        case 16:
                            return e.abrupt("return", {
                                setTestPan: function (e) {
                                    Spreedly.setValue("number", e)
                                }, setTestCvv: function (e) {
                                    Spreedly.setValue("cvv", e)
                                }, reload: function () {
                                    var e = s()(a.a.mark((function e() {
                                        return a.a.wrap((function (e) {
                                            for (; ;) switch (e.prev = e.next) {
                                                case 0:
                                                    Spreedly.reload();
                                                case 1:
                                                case"end":
                                                    return e.stop()
                                            }
                                        }), e, this)
                                    })));
                                    return function () {
                                        return e.apply(this, arguments)
                                    }
                                }()
                            });
                        case 17:
                        case"end":
                            return e.stop()
                    }
                }), e, this)
            }))), function () {
                return d.apply(this, arguments)
            })
        }, {
            key: "ocrTokenize", value: (u = s()(a.a.mark((function e(t) {
                var n, r, i, c, s;
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            if (n = document.getElementById(this.conf.number.id).querySelector("input[name=card_number]").value.replace(/\s/g, ""), r = document.getElementById(this.conf.cvv.id).querySelector("input[name=card_cvv]").value, 16 === n.length) {
                                e.next = 5;
                                break
                            }
                            return this.emit("ocr_error", {message: "Card number length must be 16 digits"}), e.abrupt("return");
                        case 5:
                            if (3 === r.length) {
                                e.next = 8;
                                break
                            }
                            return this.emit("ocr_error", {message: "Card cvv length must be 3 digits"}), e.abrupt("return");
                        case 8:
                            return i = o()({}, t, {
                                tokenize: !0,
                                card_exp: t.month.padStart(2, "0") + t.year.slice(-2),
                                person_name: "".concat(t.firstname, " ").concat(t.lastname),
                                card_number: n,
                                card_cvv: r,
                                phone: t.phone.replace(/[- )(]/g, "")
                            }), e.prev = 9, c = "".concat("https://apiprod.fattlabs.com", "/webpayment/").concat(this.webpaymentsToken, "/tokenize"), e.next = 13, v.post(c, i);
                        case 13:
                            if (!(s = e.sent) || !s.id) {
                                e.next = 20;
                                break
                            }
                            return t.payment_method_id = s.id, this.emit("ocr_tokenized", {
                                message: "Payment method successfully tokenized",
                                id: s.id,
                                record: s
                            }), e.abrupt("return", s);
                        case 20:
                            this.emit("orc_tokenization_failure", {message: "Payment method tokenization failed"});
                        case 21:
                            e.next = 26;
                            break;
                        case 23:
                            e.prev = 23, e.t0 = e.catch(9), console.log(e.t0);
                        case 26:
                            return e.abrupt("return", !1);
                        case 27:
                        case"end":
                            return e.stop()
                    }
                }), e, this, [[9, 23]])
            }))), function (e) {
                return u.apply(this, arguments)
            })
        }, {
            key: "pay", value: (c = s()(a.a.mark((function e(t) {
                var n, r, i, c;
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            if (!this.ocrMode || "card" !== t.method) {
                                e.next = 7;
                                break
                            }
                            return e.next = 3, this.ocrTokenize(t);
                        case 3:
                            if (n = e.sent) {
                                e.next = 6;
                                break
                            }
                            throw{code: "tokenization_error", message: "failed to tokenize via ocr"};
                        case 6:
                            t.payment_method_id = n.id;
                        case 7:
                            if (!t.payment_method_id) {
                                e.next = 9;
                                break
                            }
                            return e.abrupt("return", this.fmservice.createWebPayment(t));
                        case 9:
                            if (r = o()({
                                first_name: t.firstname,
                                last_name: t.lastname,
                                address1: t.address_1,
                                address2: t.address_2,
                                city: t.address_city,
                                state: t.address_state,
                                zip: t.address_zip,
                                country: t.address_country
                            }, t), !t || !t.payment_token || t.payment_token.startsWith("nmi_") || !t.validate) {
                                e.next = 16;
                                break
                            }
                            if ((i = new D(t)).validate(t), !i.errors.length) {
                                e.next = 16;
                                break
                            }
                            throw{
                                code: "logic_error",
                                message: 1 === i.errors.length ? i.errors[0].message : "One or more fields failed validation.",
                                fieldErrors: i.errors
                            };
                        case 16:
                            e.next = 21;
                            break;
                        case 20:
                            t.recaptcha_token = e.sent;
                        case 21:
                            if (c = {}, t.payment_token) {
                                e.next = 33;
                                break
                            }
                            if ("bank" !== t.method) {
                                e.next = 29;
                                break
                            }
                            return e.next = 26, this._tokenizeBank(r);
                        case 26:
                            c = e.sent, e.next = 32;
                            break;
                        case 29:
                            return e.next = 31, this._tokenizeCard(r);
                        case 31:
                            c = e.sent;
                        case 32:
                            t.payment_token = c.id;
                        case 33:
                            return e.abrupt("return", this.fmservice.createWebPayment(t));
                        case 34:
                        case"end":
                            return e.stop()
                    }
                }), e, this)
            }))), function (e) {
                return c.apply(this, arguments)
            })
        }, {
            key: "tokenize", value: (i = s()(a.a.mark((function e(t) {
                var n, r, i, c, s, u = arguments;
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            if (n = u.length > 1 && void 0 !== u[1] ? u[1] : "", !this.ocrMode || "card" !== t.method) {
                                e.next = 8;
                                break
                            }
                            return e.next = 4, this.ocrTokenize(t);
                        case 4:
                            if ((r = e.sent) && r.id) {
                                e.next = 7;
                                break
                            }
                            throw{code: "tokenization_error", message: "failed to tokenize via ocr"};
                        case 7:
                            return e.abrupt("return", r);
                        case 8:
                            if (i = o()({
                                first_name: t.firstname,
                                last_name: t.lastname,
                                address1: t.address_1,
                                address2: t.address_2,
                                city: t.address_city,
                                state: t.address_state,
                                zip: t.address_zip,
                                country: t.address_country
                            }, t), !t.validate) {
                                e.next = 15;
                                break
                            }
                            if ((c = new D(t)).validate(t), !c.errors.length) {
                                e.next = 15;
                                break
                            }
                            throw{
                                code: "logic_error",
                                message: 1 === c.errors.length ? c.errors[0].message : "One or more fields failed validation.",
                                fieldErrors: c.errors
                            };
                        case 15:
                            e.next = 20;
                            break;
                        case 19:
                            t.recaptcha_token = e.sent;
                        case 20:
                            if ("bank" !== t.method) {
                                e.next = 22;
                                break
                            }
                            return e.abrupt("return", this.fmservice.tokenizeWebPaymentMethod(t, n));
                        case 22:
                            return e.next = 24, this._tokenizeCard(i);
                        case 24:
                            return s = e.sent, t.payment_token = s.id, e.abrupt("return", this.fmservice.tokenizeWebPaymentMethod(t, n));
                        case 27:
                        case"end":
                            return e.stop()
                    }
                }), e, this)
            }))), function (e) {
                return i.apply(this, arguments)
            })
        }, {
            key: "_tokenizeCard", value: (r = s()(a.a.mark((function e(t) {
                var n, r, o, i, c;
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            if (n = function () {
                            }, r = function () {
                            }, o = this, i = new Promise((function (e, t) {
                                n = o.on("tokenize", (function (t) {
                                    e(t)
                                })), r = o.on("error_tokenize", (function (e) {
                                    t(e)
                                }))
                            })), t.token_type && (!t.payment_token || t.payment_token.startsWith("nmi_"))) {
                                e.next = 26;
                                break
                            }
                            e.prev = 5, Spreedly.tokenizeCreditCard(t), e.next = 17;
                            break;
                        case 9:
                            if (e.prev = 9, e.t0 = e.catch(5), !(e.t0 && e.t0.message && e.t0.message.indexOf("not defined") > -1)) {
                                e.next = 16;
                                break
                            }
                            throw{
                                code: "fatal_error",
                                message: "Error: showCardForm() not called. Please ensure you are calling showCardForm() before calling pay()."
                            };
                        case 16:
                            throw e.t0;
                        case 17:
                            return e.prev = 17, e.next = 20, i;
                        case 20:
                            return c = e.sent, e.abrupt("return", c);
                        case 22:
                            return e.prev = 22, n(), r(), e.finish(22);
                        case 26:
                        case"end":
                            return e.stop()
                    }
                }), e, this, [[5, 9], [17, , 22, 26]])
            }))), function (e) {
                return r.apply(this, arguments)
            })
        }, {
            key: "_tokenizeBank", value: (n = s()(a.a.mark((function e(t) {
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", this.fmservice.tokenizeWebPaymentMethod(t));
                        case 1:
                        case"end":
                            return e.stop()
                    }
                }), e, this)
            }))), function (e) {
                return n.apply(this, arguments)
            })
        }, {
            key: "reviewSurcharge", value: (t = s()(a.a.mark((function e(t, n) {
                var r;
                return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, this.fmservice.calculateSurcharge(t, n);
                        case 3:
                            return e.abrupt("return", e.sent);
                        case 6:
                            throw e.prev = 6, e.t0 = e.catch(0), r = [], e.t0.payment_method_id && r.push(e.t0.payment_method_id), e.t0.total && r.push(e.t0.total), new Error(r.join(" "));
                        case 12:
                        case"end":
                            return e.stop()
                    }
                }), e, this, [[0, 6]])
            }))), function (e, n) {
                return t.apply(this, arguments)
            })
        }, {
            key: "on", value: function (e, t) {
                var n = this, r = {event: e, handler: t};
                return this.listeners.add(r), function () {
                    n.listeners.delete(r)
                }
            }
        }, {
            key: "emit", value: function (e, t) {
                this.listeners.forEach((function (n) {
                    n.event === e ? n.handler(t) : "card_form_uncomplete" === n.event && "card_form_incomplete" === e && (console.warn("event `card_form_uncomplete` is deprecated and will be removed in a future version. please use the new event `card_form_incomplete`"), n.handler(t))
                }))
            }
        }, {
            key: "ocrCancel", value: function () {
                this.fmservice._ocrCancel.bind(this.fmservice)()
            }
        }, {
            key: "ocr", value: function (e) {
                this.fmservice.initializeOcr(e.formId), this.ocrMode = !0
            }
        }]), e
    }();
    window.FattJs = L, window.StaxJs = L
}]);