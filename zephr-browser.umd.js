!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e || self).zephrBrowser = {})
}(this, function(e) {
    var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function n(e) {
        var t = {
            exports: {}
        };
        return e(t, t.exports),
        t.exports
    }
    var r = function(e) {
        return e && e.Math == Math && e
    }
      , o = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof t && t) || function() {
        return this
    }() || Function("return this")()
      , i = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
      , c = !i(function() {
        return 7 != Object.defineProperty({}, 1, {
            get: function() {
                return 7
            }
        })[1]
    })
      , a = {}.propertyIsEnumerable
      , u = Object.getOwnPropertyDescriptor
      , s = {
        f: u && !a.call({
            1: 2
        }, 1) ? function(e) {
            var t = u(this, e);
            return !!t && t.enumerable
        }
        : a
    }
      , f = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
      , l = {}.toString
      , p = function(e) {
        return l.call(e).slice(8, -1)
    }
      , d = "".split
      , h = i(function() {
        return !Object("z").propertyIsEnumerable(0)
    }) ? function(e) {
        return "String" == p(e) ? d.call(e, "") : Object(e)
    }
    : Object
      , v = function(e) {
        if (null == e)
            throw TypeError("Can't call method on " + e);
        return e
    }
      , m = function(e) {
        return h(v(e))
    }
      , y = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
      , g = function(e, t) {
        if (!y(e))
            return e;
        var n, r;
        if (t && "function" == typeof (n = e.toString) && !y(r = n.call(e)))
            return r;
        if ("function" == typeof (n = e.valueOf) && !y(r = n.call(e)))
            return r;
        if (!t && "function" == typeof (n = e.toString) && !y(r = n.call(e)))
            return r;
        throw TypeError("Can't convert object to primitive value")
    }
      , b = {}.hasOwnProperty
      , w = function(e, t) {
        return b.call(e, t)
    }
      , x = o.document
      , E = y(x) && y(x.createElement)
      , I = function(e) {
        return E ? x.createElement(e) : {}
    }
      , S = !c && !i(function() {
        return 7 != Object.defineProperty(I("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
      , O = Object.getOwnPropertyDescriptor
      , T = {
        f: c ? O : function(e, t) {
            if (e = m(e),
            t = g(t, !0),
            S)
                try {
                    return O(e, t)
                } catch (e) {}
            if (w(e, t))
                return f(!s.f.call(e, t), e[t])
        }
    }
      , j = function(e) {
        if (!y(e))
            throw TypeError(String(e) + " is not an object");
        return e
    }
      , A = Object.defineProperty
      , C = {
        f: c ? A : function(e, t, n) {
            if (j(e),
            t = g(t, !0),
            j(n),
            S)
                try {
                    return A(e, t, n)
                } catch (e) {}
            if ("get"in n || "set"in n)
                throw TypeError("Accessors not supported");
            return "value"in n && (e[t] = n.value),
            e
        }
    }
      , P = c ? function(e, t, n) {
        return C.f(e, t, f(1, n))
    }
    : function(e, t, n) {
        return e[t] = n,
        e
    }
      , L = function(e, t) {
        try {
            P(o, e, t)
        } catch (n) {
            o[e] = t
        }
        return t
    }
      , R = "__core-js_shared__"
      , D = o[R] || L(R, {})
      , _ = Function.toString;
    "function" != typeof D.inspectSource && (D.inspectSource = function(e) {
        return _.call(e)
    }
    );
    var N, F, M, k = D.inspectSource, U = o.WeakMap, z = "function" == typeof U && /native code/.test(k(U)), Z = n(function(e) {
        (e.exports = function(e, t) {
            return D[e] || (D[e] = void 0 !== t ? t : {})
        }
        )("versions", []).push({
            version: "3.9.1",
            mode: "global",
            copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
        })
    }), H = 0, G = Math.random(), K = function(e) {
        return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++H + G).toString(36)
    }, B = Z("keys"), V = function(e) {
        return B[e] || (B[e] = K(e))
    }, q = {};
    if (z) {
        var $ = D.state || (D.state = new (0,
        o.WeakMap))
          , Y = $.get
          , W = $.has
          , X = $.set;
        N = function(e, t) {
            return t.facade = e,
            X.call($, e, t),
            t
        }
        ,
        F = function(e) {
            return Y.call($, e) || {}
        }
        ,
        M = function(e) {
            return W.call($, e)
        }
    } else {
        var J = V("state");
        q[J] = !0,
        N = function(e, t) {
            return t.facade = e,
            P(e, J, t),
            t
        }
        ,
        F = function(e) {
            return w(e, J) ? e[J] : {}
        }
        ,
        M = function(e) {
            return w(e, J)
        }
    }
    var Q, ee, te = {
        set: N,
        get: F,
        has: M,
        enforce: function(e) {
            return M(e) ? F(e) : N(e, {})
        },
        getterFor: function(e) {
            return function(t) {
                var n;
                if (!y(t) || (n = F(t)).type !== e)
                    throw TypeError("Incompatible receiver, " + e + " required");
                return n
            }
        }
    }, ne = n(function(e) {
        var t = te.get
          , n = te.enforce
          , r = String(String).split("String");
        (e.exports = function(e, t, i, c) {
            var a, u = !!c && !!c.unsafe, s = !!c && !!c.enumerable, f = !!c && !!c.noTargetGet;
            "function" == typeof i && ("string" != typeof t || w(i, "name") || P(i, "name", t),
            (a = n(i)).source || (a.source = r.join("string" == typeof t ? t : ""))),
            e !== o ? (u ? !f && e[t] && (s = !0) : delete e[t],
            s ? e[t] = i : P(e, t, i)) : s ? e[t] = i : L(t, i)
        }
        )(Function.prototype, "toString", function() {
            return "function" == typeof this && t(this).source || k(this)
        })
    }), re = o, oe = function(e) {
        return "function" == typeof e ? e : void 0
    }, ie = function(e, t) {
        return arguments.length < 2 ? oe(re[e]) || oe(o[e]) : re[e] && re[e][t] || o[e] && o[e][t]
    }, ce = Math.ceil, ae = Math.floor, ue = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? ae : ce)(e)
    }, se = Math.min, fe = function(e) {
        return e > 0 ? se(ue(e), 9007199254740991) : 0
    }, le = Math.max, pe = Math.min, de = function(e, t) {
        var n = ue(e);
        return n < 0 ? le(n + t, 0) : pe(n, t)
    }, he = function(e) {
        return function(t, n, r) {
            var o, i = m(t), c = fe(i.length), a = de(r, c);
            if (e && n != n) {
                for (; c > a; )
                    if ((o = i[a++]) != o)
                        return !0
            } else
                for (; c > a; a++)
                    if ((e || a in i) && i[a] === n)
                        return e || a || 0;
            return !e && -1
        }
    }, ve = {
        includes: he(!0),
        indexOf: he(!1)
    }, me = ve.indexOf, ye = function(e, t) {
        var n, r = m(e), o = 0, i = [];
        for (n in r)
            !w(q, n) && w(r, n) && i.push(n);
        for (; t.length > o; )
            w(r, n = t[o++]) && (~me(i, n) || i.push(n));
        return i
    }, ge = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], be = ge.concat("length", "prototype"), we = {
        f: Object.getOwnPropertyNames || function(e) {
            return ye(e, be)
        }
    }, xe = {
        f: Object.getOwnPropertySymbols
    }, Ee = ie("Reflect", "ownKeys") || function(e) {
        var t = we.f(j(e))
          , n = xe.f;
        return n ? t.concat(n(e)) : t
    }
    , Ie = function(e, t) {
        for (var n = Ee(t), r = C.f, o = T.f, i = 0; i < n.length; i++) {
            var c = n[i];
            w(e, c) || r(e, c, o(t, c))
        }
    }, Se = /#|\.prototype\./, Oe = function(e, t) {
        var n = je[Te(e)];
        return n == Ce || n != Ae && ("function" == typeof t ? i(t) : !!t)
    }, Te = Oe.normalize = function(e) {
        return String(e).replace(Se, ".").toLowerCase()
    }
    , je = Oe.data = {}, Ae = Oe.NATIVE = "N", Ce = Oe.POLYFILL = "P", Pe = Oe, Le = T.f, Re = function(e, t) {
        var n, r, i, c, a, u = e.target, s = e.global, f = e.stat;
        if (n = s ? o : f ? o[u] || L(u, {}) : (o[u] || {}).prototype)
            for (r in t) {
                if (c = t[r],
                i = e.noTargetGet ? (a = Le(n, r)) && a.value : n[r],
                !Pe(s ? r : u + (f ? "." : "#") + r, e.forced) && void 0 !== i) {
                    if (typeof c == typeof i)
                        continue;
                    Ie(c, i)
                }
                (e.sham || i && i.sham) && P(c, "sham", !0),
                ne(n, r, c, e)
            }
    }, De = Array.isArray || function(e) {
        return "Array" == p(e)
    }
    , _e = function(e, t, n) {
        var r = g(t);
        r in e ? C.f(e, r, f(0, n)) : e[r] = n
    }, Ne = "process" == p(o.process), Fe = ie("navigator", "userAgent") || "", Me = o.process, ke = Me && Me.versions, Ue = ke && ke.v8;
    Ue ? ee = (Q = Ue.split("."))[0] + Q[1] : Fe && (!(Q = Fe.match(/Edge\/(\d+)/)) || Q[1] >= 74) && (Q = Fe.match(/Chrome\/(\d+)/)) && (ee = Q[1]);
    var ze = ee && +ee
      , Ze = !!Object.getOwnPropertySymbols && !i(function() {
        return !Symbol.sham && (Ne ? 38 === ze : ze > 37 && ze < 41)
    })
      , He = Ze && !Symbol.sham && "symbol" == typeof Symbol.iterator
      , Ge = Z("wks")
      , Ke = o.Symbol
      , Be = He ? Ke : Ke && Ke.withoutSetter || K
      , Ve = function(e) {
        return w(Ge, e) && (Ze || "string" == typeof Ge[e]) || (Ge[e] = Ze && w(Ke, e) ? Ke[e] : Be("Symbol." + e)),
        Ge[e]
    }
      , qe = Ve("species")
      , $e = function(e) {
        return ze >= 51 || !i(function() {
            var t = [];
            return (t.constructor = {})[qe] = function() {
                return {
                    foo: 1
                }
            }
            ,
            1 !== t[e](Boolean).foo
        })
    }
      , Ye = $e("slice")
      , We = Ve("species")
      , Xe = [].slice
      , Je = Math.max;
    Re({
        target: "Array",
        proto: !0,
        forced: !Ye
    }, {
        slice: function(e, t) {
            var n, r, o, i = m(this), c = fe(i.length), a = de(e, c), u = de(void 0 === t ? c : t, c);
            if (De(i) && ("function" != typeof (n = i.constructor) || n !== Array && !De(n.prototype) ? y(n) && null === (n = n[We]) && (n = void 0) : n = void 0,
            n === Array || void 0 === n))
                return Xe.call(i, a, u);
            for (r = new (void 0 === n ? Array : n)(Je(u - a, 0)),
            o = 0; a < u; a++,
            o++)
                a in i && _e(r, o, i[a]);
            return r.length = o,
            r
        }
    });
    var Qe = {};
    Qe[Ve("toStringTag")] = "z";
    var et = "[object z]" === String(Qe)
      , tt = Ve("toStringTag")
      , nt = "Arguments" == p(function() {
        return arguments
    }())
      , rt = et ? p : function(e) {
        var t, n, r;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function(e, t) {
            try {
                return e[t]
            } catch (e) {}
        }(t = Object(e), tt)) ? n : nt ? p(t) : "Object" == (r = p(t)) && "function" == typeof t.callee ? "Arguments" : r
    }
    ;
    et || ne(Object.prototype, "toString", et ? {}.toString : function() {
        return "[object " + rt(this) + "]"
    }
    , {
        unsafe: !0
    });
    var ot = o.Promise
      , it = C.f
      , ct = Ve("toStringTag")
      , at = function(e, t, n) {
        e && !w(e = n ? e : e.prototype, ct) && it(e, ct, {
            configurable: !0,
            value: t
        })
    }
      , ut = Ve("species")
      , st = function(e) {
        if ("function" != typeof e)
            throw TypeError(String(e) + " is not a function");
        return e
    }
      , ft = {}
      , lt = Ve("iterator")
      , pt = Array.prototype
      , dt = function(e) {
        return void 0 !== e && (ft.Array === e || pt[lt] === e)
    }
      , ht = function(e, t, n) {
        if (st(e),
        void 0 === t)
            return e;
        switch (n) {
        case 0:
            return function() {
                return e.call(t)
            }
            ;
        case 1:
            return function(n) {
                return e.call(t, n)
            }
            ;
        case 2:
            return function(n, r) {
                return e.call(t, n, r)
            }
            ;
        case 3:
            return function(n, r, o) {
                return e.call(t, n, r, o)
            }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
      , vt = Ve("iterator")
      , mt = function(e) {
        if (null != e)
            return e[vt] || e["@@iterator"] || ft[rt(e)]
    }
      , yt = function(e) {
        var t = e.return;
        if (void 0 !== t)
            return j(t.call(e)).value
    }
      , gt = function(e, t) {
        this.stopped = e,
        this.result = t
    }
      , bt = function(e, t, n) {
        var r, o, i, c, a, u, s, f = !(!n || !n.AS_ENTRIES), l = !(!n || !n.IS_ITERATOR), p = !(!n || !n.INTERRUPTED), d = ht(t, n && n.that, 1 + f + p), h = function(e) {
            return r && yt(r),
            new gt(!0,e)
        }, v = function(e) {
            return f ? (j(e),
            p ? d(e[0], e[1], h) : d(e[0], e[1])) : p ? d(e, h) : d(e)
        };
        if (l)
            r = e;
        else {
            if ("function" != typeof (o = mt(e)))
                throw TypeError("Target is not iterable");
            if (dt(o)) {
                for (i = 0,
                c = fe(e.length); c > i; i++)
                    if ((a = v(e[i])) && a instanceof gt)
                        return a;
                return new gt(!1)
            }
            r = o.call(e)
        }
        for (u = r.next; !(s = u.call(r)).done; ) {
            try {
                a = v(s.value)
            } catch (e) {
                throw yt(r),
                e
            }
            if ("object" == typeof a && a && a instanceof gt)
                return a
        }
        return new gt(!1)
    }
      , wt = Ve("iterator")
      , xt = !1;
    try {
        var Et = 0
          , It = {
            next: function() {
                return {
                    done: !!Et++
                }
            },
            return: function() {
                xt = !0
            }
        };
        It[wt] = function() {
            return this
        }
        ,
        Array.from(It, function() {
            throw 2
        })
    } catch (e) {}
    var St, Ot, Tt, jt = function(e, t) {
        if (!t && !xt)
            return !1;
        var n = !1;
        try {
            var r = {};
            r[wt] = function() {
                return {
                    next: function() {
                        return {
                            done: n = !0
                        }
                    }
                }
            }
            ,
            e(r)
        } catch (e) {}
        return n
    }, At = Ve("species"), Ct = function(e, t) {
        var n, r = j(e).constructor;
        return void 0 === r || null == (n = j(r)[At]) ? t : st(n)
    }, Pt = ie("document", "documentElement"), Lt = /(iphone|ipod|ipad).*applewebkit/i.test(Fe), Rt = o.location, Dt = o.setImmediate, _t = o.clearImmediate, Nt = o.process, Ft = o.MessageChannel, Mt = o.Dispatch, kt = 0, Ut = {}, zt = function(e) {
        if (Ut.hasOwnProperty(e)) {
            var t = Ut[e];
            delete Ut[e],
            t()
        }
    }, Zt = function(e) {
        return function() {
            zt(e)
        }
    }, Ht = function(e) {
        zt(e.data)
    }, Gt = function(e) {
        o.postMessage(e + "", Rt.protocol + "//" + Rt.host)
    };
    Dt && _t || (Dt = function(e) {
        for (var t = [], n = 1; arguments.length > n; )
            t.push(arguments[n++]);
        return Ut[++kt] = function() {
            ("function" == typeof e ? e : Function(e)).apply(void 0, t)
        }
        ,
        St(kt),
        kt
    }
    ,
    _t = function(e) {
        delete Ut[e]
    }
    ,
    Ne ? St = function(e) {
        Nt.nextTick(Zt(e))
    }
    : Mt && Mt.now ? St = function(e) {
        Mt.now(Zt(e))
    }
    : Ft && !Lt ? (Tt = (Ot = new Ft).port2,
    Ot.port1.onmessage = Ht,
    St = ht(Tt.postMessage, Tt, 1)) : o.addEventListener && "function" == typeof postMessage && !o.importScripts && Rt && "file:" !== Rt.protocol && !i(Gt) ? (St = Gt,
    o.addEventListener("message", Ht, !1)) : St = "onreadystatechange"in I("script") ? function(e) {
        Pt.appendChild(I("script")).onreadystatechange = function() {
            Pt.removeChild(this),
            zt(e)
        }
    }
    : function(e) {
        setTimeout(Zt(e), 0)
    }
    );
    var Kt, Bt, Vt, qt, $t, Yt, Wt, Xt, Jt = {
        set: Dt,
        clear: _t
    }, Qt = /web0s(?!.*chrome)/i.test(Fe), en = Jt.set, tn = o.MutationObserver || o.WebKitMutationObserver, nn = o.document, rn = o.process, on = o.Promise, cn = (0,
    T.f)(o, "queueMicrotask"), an = cn && cn.value;
    an || (Kt = function() {
        var e, t;
        for (Ne && (e = rn.domain) && e.exit(); Bt; ) {
            t = Bt.fn,
            Bt = Bt.next;
            try {
                t()
            } catch (e) {
                throw Bt ? qt() : Vt = void 0,
                e
            }
        }
        Vt = void 0,
        e && e.enter()
    }
    ,
    Lt || Ne || Qt || !tn || !nn ? on && on.resolve ? (Wt = on.resolve(void 0),
    Xt = Wt.then,
    qt = function() {
        Xt.call(Wt, Kt)
    }
    ) : qt = Ne ? function() {
        rn.nextTick(Kt)
    }
    : function() {
        en.call(o, Kt)
    }
    : ($t = !0,
    Yt = nn.createTextNode(""),
    new tn(Kt).observe(Yt, {
        characterData: !0
    }),
    qt = function() {
        Yt.data = $t = !$t
    }
    ));
    var un, sn, fn, ln, pn, dn = an || function(e) {
        var t = {
            fn: e,
            next: void 0
        };
        Vt && (Vt.next = t),
        Bt || (Bt = t,
        qt()),
        Vt = t
    }
    , hn = function(e) {
        var t, n;
        this.promise = new e(function(e, r) {
            if (void 0 !== t || void 0 !== n)
                throw TypeError("Bad Promise constructor");
            t = e,
            n = r
        }
        ),
        this.resolve = st(t),
        this.reject = st(n)
    }, vn = {
        f: function(e) {
            return new hn(e)
        }
    }, mn = function(e, t) {
        if (j(e),
        y(t) && t.constructor === e)
            return t;
        var n = vn.f(e);
        return (0,
        n.resolve)(t),
        n.promise
    }, yn = function(e) {
        try {
            return {
                error: !1,
                value: e()
            }
        } catch (e) {
            return {
                error: !0,
                value: e
            }
        }
    }, gn = Jt.set, bn = Ve("species"), wn = "Promise", xn = te.get, En = te.set, In = te.getterFor(wn), Sn = ot, On = o.TypeError, Tn = o.document, jn = o.process, An = ie("fetch"), Cn = vn.f, Pn = Cn, Ln = !!(Tn && Tn.createEvent && o.dispatchEvent), Rn = "function" == typeof PromiseRejectionEvent, Dn = "unhandledrejection", _n = Pe(wn, function() {
        if (k(Sn) === String(Sn)) {
            if (66 === ze)
                return !0;
            if (!Ne && !Rn)
                return !0
        }
        if (ze >= 51 && /native code/.test(Sn))
            return !1;
        var e = Sn.resolve(1)
          , t = function(e) {
            e(function() {}, function() {})
        };
        return (e.constructor = {})[bn] = t,
        !(e.then(function() {})instanceof t)
    }), Nn = _n || !jt(function(e) {
        Sn.all(e).catch(function() {})
    }), Fn = function(e) {
        var t;
        return !(!y(e) || "function" != typeof (t = e.then)) && t
    }, Mn = function(e, t) {
        if (!e.notified) {
            e.notified = !0;
            var n = e.reactions;
            dn(function() {
                for (var r = e.value, o = 1 == e.state, i = 0; n.length > i; ) {
                    var c, a, u, s = n[i++], f = o ? s.ok : s.fail, l = s.resolve, p = s.reject, d = s.domain;
                    try {
                        f ? (o || (2 === e.rejection && Zn(e),
                        e.rejection = 1),
                        !0 === f ? c = r : (d && d.enter(),
                        c = f(r),
                        d && (d.exit(),
                        u = !0)),
                        c === s.promise ? p(On("Promise-chain cycle")) : (a = Fn(c)) ? a.call(c, l, p) : l(c)) : p(r)
                    } catch (e) {
                        d && !u && d.exit(),
                        p(e)
                    }
                }
                e.reactions = [],
                e.notified = !1,
                t && !e.rejection && Un(e)
            })
        }
    }, kn = function(e, t, n) {
        var r, i;
        Ln ? ((r = Tn.createEvent("Event")).promise = t,
        r.reason = n,
        r.initEvent(e, !1, !0),
        o.dispatchEvent(r)) : r = {
            promise: t,
            reason: n
        },
        !Rn && (i = o["on" + e]) ? i(r) : e === Dn && function(e, t) {
            var n = o.console;
            n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t))
        }("Unhandled promise rejection", n)
    }, Un = function(e) {
        gn.call(o, function() {
            var t, n = e.facade, r = e.value;
            if (zn(e) && (t = yn(function() {
                Ne ? jn.emit("unhandledRejection", r, n) : kn(Dn, n, r)
            }),
            e.rejection = Ne || zn(e) ? 2 : 1,
            t.error))
                throw t.value
        })
    }, zn = function(e) {
        return 1 !== e.rejection && !e.parent
    }, Zn = function(e) {
        gn.call(o, function() {
            var t = e.facade;
            Ne ? jn.emit("rejectionHandled", t) : kn("rejectionhandled", t, e.value)
        })
    }, Hn = function(e, t, n) {
        return function(r) {
            e(t, r, n)
        }
    }, Gn = function(e, t, n) {
        e.done || (e.done = !0,
        n && (e = n),
        e.value = t,
        e.state = 2,
        Mn(e, !0))
    }, Kn = function(e, t, n) {
        if (!e.done) {
            e.done = !0,
            n && (e = n);
            try {
                if (e.facade === t)
                    throw On("Promise can't be resolved itself");
                var r = Fn(t);
                r ? dn(function() {
                    var n = {
                        done: !1
                    };
                    try {
                        r.call(t, Hn(Kn, n, e), Hn(Gn, n, e))
                    } catch (t) {
                        Gn(n, t, e)
                    }
                }) : (e.value = t,
                e.state = 1,
                Mn(e, !1))
            } catch (t) {
                Gn({
                    done: !1
                }, t, e)
            }
        }
    };
    function Bn(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    function Vn(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (n)
            return (n = n.call(e)).next.bind(n);
        if (Array.isArray(e) || (n = function(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return Bn(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Bn(e, t) : void 0
            }
        }(e)) || t && e && "number" == typeof e.length) {
            n && (e = n);
            var r = 0;
            return function() {
                return r >= e.length ? {
                    done: !0
                } : {
                    done: !1,
                    value: e[r++]
                }
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    _n && (Sn = function(e) {
        !function(e, t, n) {
            if (!(e instanceof t))
                throw TypeError("Incorrect Promise invocation")
        }(this, Sn),
        st(e),
        un.call(this);
        var t = xn(this);
        try {
            e(Hn(Kn, t), Hn(Gn, t))
        } catch (e) {
            Gn(t, e)
        }
    }
    ,
    (un = function(e) {
        En(this, {
            type: wn,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: 0,
            value: void 0
        })
    }
    ).prototype = function(e, t, n) {
        for (var r in t)
            ne(e, r, t[r], void 0);
        return e
    }(Sn.prototype, {
        then: function(e, t) {
            var n = In(this)
              , r = Cn(Ct(this, Sn));
            return r.ok = "function" != typeof e || e,
            r.fail = "function" == typeof t && t,
            r.domain = Ne ? jn.domain : void 0,
            n.parent = !0,
            n.reactions.push(r),
            0 != n.state && Mn(n, !1),
            r.promise
        },
        catch: function(e) {
            return this.then(void 0, e)
        }
    }),
    sn = function() {
        var e = new un
          , t = xn(e);
        this.promise = e,
        this.resolve = Hn(Kn, t),
        this.reject = Hn(Gn, t)
    }
    ,
    vn.f = Cn = function(e) {
        return e === Sn || e === fn ? new sn(e) : Pn(e)
    }
    ,
    "function" == typeof ot && (ln = ot.prototype.then,
    ne(ot.prototype, "then", function(e, t) {
        var n = this;
        return new Sn(function(e, t) {
            ln.call(n, e, t)
        }
        ).then(e, t)
    }, {
        unsafe: !0
    }),
    "function" == typeof An && Re({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function(e) {
            return mn(Sn, An.apply(o, arguments))
        }
    }))),
    Re({
        global: !0,
        wrap: !0,
        forced: _n
    }, {
        Promise: Sn
    }),
    at(Sn, wn, !1),
    pn = ie(wn),
    c && pn && !pn[ut] && (0,
    C.f)(pn, ut, {
        configurable: !0,
        get: function() {
            return this
        }
    }),
    fn = ie(wn),
    Re({
        target: wn,
        stat: !0,
        forced: _n
    }, {
        reject: function(e) {
            var t = Cn(this);
            return t.reject.call(void 0, e),
            t.promise
        }
    }),
    Re({
        target: wn,
        stat: !0,
        forced: _n
    }, {
        resolve: function(e) {
            return mn(this, e)
        }
    }),
    Re({
        target: wn,
        stat: !0,
        forced: Nn
    }, {
        all: function(e) {
            var t = this
              , n = Cn(t)
              , r = n.resolve
              , o = n.reject
              , i = yn(function() {
                var n = st(t.resolve)
                  , i = []
                  , c = 0
                  , a = 1;
                bt(e, function(e) {
                    var u = c++
                      , s = !1;
                    i.push(void 0),
                    a++,
                    n.call(t, e).then(function(e) {
                        s || (s = !0,
                        i[u] = e,
                        --a || r(i))
                    }, o)
                }),
                --a || r(i)
            });
            return i.error && o(i.value),
            n.promise
        },
        race: function(e) {
            var t = this
              , n = Cn(t)
              , r = n.reject
              , o = yn(function() {
                var o = st(t.resolve);
                bt(e, function(e) {
                    o.call(t, e).then(n.resolve, r)
                })
            });
            return o.error && r(o.value),
            n.promise
        }
    });
    var qn = function(e) {
        return Object(v(e))
    }
      , $n = Ve("species")
      , Yn = function(e, t) {
        var n;
        return De(e) && ("function" != typeof (n = e.constructor) || n !== Array && !De(n.prototype) ? y(n) && null === (n = n[$n]) && (n = void 0) : n = void 0),
        new (void 0 === n ? Array : n)(0 === t ? 0 : t)
    }
      , Wn = [].push
      , Xn = function(e) {
        var t = 1 == e
          , n = 2 == e
          , r = 3 == e
          , o = 4 == e
          , i = 6 == e
          , c = 7 == e
          , a = 5 == e || i;
        return function(u, s, f, l) {
            for (var p, d, v = qn(u), m = h(v), y = ht(s, f, 3), g = fe(m.length), b = 0, w = l || Yn, x = t ? w(u, g) : n || c ? w(u, 0) : void 0; g > b; b++)
                if ((a || b in m) && (d = y(p = m[b], b, v),
                e))
                    if (t)
                        x[b] = d;
                    else if (d)
                        switch (e) {
                        case 3:
                            return !0;
                        case 5:
                            return p;
                        case 6:
                            return b;
                        case 2:
                            Wn.call(x, p)
                        }
                    else
                        switch (e) {
                        case 4:
                            return !1;
                        case 7:
                            Wn.call(x, p)
                        }
            return i ? -1 : r || o ? o : x
        }
    }
      , Jn = {
        forEach: Xn(0),
        map: Xn(1),
        filter: Xn(2),
        some: Xn(3),
        every: Xn(4),
        find: Xn(5),
        findIndex: Xn(6),
        filterOut: Xn(7)
    }
      , Qn = Jn.map;
    Re({
        target: "Array",
        proto: !0,
        forced: !$e("map")
    }, {
        map: function(e) {
            return Qn(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var er = Object.keys || function(e) {
        return ye(e, ge)
    }
      , tr = Object.assign
      , nr = Object.defineProperty
      , rr = !tr || i(function() {
        if (c && 1 !== tr({
            b: 1
        }, tr(nr({}, "a", {
            enumerable: !0,
            get: function() {
                nr(this, "b", {
                    value: 3,
                    enumerable: !1
                })
            }
        }), {
            b: 2
        })).b)
            return !0;
        var e = {}
          , t = {}
          , n = Symbol()
          , r = "abcdefghijklmnopqrst";
        return e[n] = 7,
        r.split("").forEach(function(e) {
            t[e] = e
        }),
        7 != tr({}, e)[n] || er(tr({}, t)).join("") != r
    }) ? function(e, t) {
        for (var n = qn(e), r = arguments.length, o = 1, i = xe.f, a = s.f; r > o; )
            for (var u, f = h(arguments[o++]), l = i ? er(f).concat(i(f)) : er(f), p = l.length, d = 0; p > d; )
                u = l[d++],
                c && !a.call(f, u) || (n[u] = f[u]);
        return n
    }
    : tr;
    Re({
        target: "Object",
        stat: !0,
        forced: Object.assign !== rr
    }, {
        assign: rr
    });
    var or = function() {
        var e = j(this)
          , t = "";
        return e.global && (t += "g"),
        e.ignoreCase && (t += "i"),
        e.multiline && (t += "m"),
        e.dotAll && (t += "s"),
        e.unicode && (t += "u"),
        e.sticky && (t += "y"),
        t
    };
    function ir(e, t) {
        return RegExp(e, t)
    }
    var cr, ar, ur = {
        UNSUPPORTED_Y: i(function() {
            var e = ir("a", "y");
            return e.lastIndex = 2,
            null != e.exec("abcd")
        }),
        BROKEN_CARET: i(function() {
            var e = ir("^r", "gy");
            return e.lastIndex = 2,
            null != e.exec("str")
        })
    }, sr = RegExp.prototype.exec, fr = String.prototype.replace, lr = sr, pr = (ar = /b*/g,
    sr.call(cr = /a/, "a"),
    sr.call(ar, "a"),
    0 !== cr.lastIndex || 0 !== ar.lastIndex), dr = ur.UNSUPPORTED_Y || ur.BROKEN_CARET, hr = void 0 !== /()??/.exec("")[1];
    (pr || hr || dr) && (lr = function(e) {
        var t, n, r, o, i = this, c = dr && i.sticky, a = or.call(i), u = i.source, s = 0, f = e;
        return c && (-1 === (a = a.replace("y", "")).indexOf("g") && (a += "g"),
        f = String(e).slice(i.lastIndex),
        i.lastIndex > 0 && (!i.multiline || i.multiline && "\n" !== e[i.lastIndex - 1]) && (u = "(?: " + u + ")",
        f = " " + f,
        s++),
        n = new RegExp("^(?:" + u + ")",a)),
        hr && (n = new RegExp("^" + u + "$(?!\\s)",a)),
        pr && (t = i.lastIndex),
        r = sr.call(c ? n : i, f),
        c ? r ? (r.input = r.input.slice(s),
        r[0] = r[0].slice(s),
        r.index = i.lastIndex,
        i.lastIndex += r[0].length) : i.lastIndex = 0 : pr && r && (i.lastIndex = i.global ? r.index + r[0].length : t),
        hr && r && r.length > 1 && fr.call(r[0], n, function() {
            for (o = 1; o < arguments.length - 2; o++)
                void 0 === arguments[o] && (r[o] = void 0)
        }),
        r
    }
    );
    var vr = lr;
    Re({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== vr
    }, {
        exec: vr
    });
    var mr = Ve("species")
      , yr = !i(function() {
        var e = /./;
        return e.exec = function() {
            var e = [];
            return e.groups = {
                a: "7"
            },
            e
        }
        ,
        "7" !== "".replace(e, "$<a>")
    })
      , gr = "$0" === "a".replace(/./, "$0")
      , br = Ve("replace")
      , wr = !!/./[br] && "" === /./[br]("a", "$0")
      , xr = !i(function() {
        var e = /(?:)/
          , t = e.exec;
        e.exec = function() {
            return t.apply(this, arguments)
        }
        ;
        var n = "ab".split(e);
        return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
    })
      , Er = function(e, t, n, r) {
        var o = Ve(e)
          , c = !i(function() {
            var t = {};
            return t[o] = function() {
                return 7
            }
            ,
            7 != ""[e](t)
        })
          , a = c && !i(function() {
            var t = !1
              , n = /a/;
            return "split" === e && ((n = {}).constructor = {},
            n.constructor[mr] = function() {
                return n
            }
            ,
            n.flags = "",
            n[o] = /./[o]),
            n.exec = function() {
                return t = !0,
                null
            }
            ,
            n[o](""),
            !t
        });
        if (!c || !a || "replace" === e && (!yr || !gr || wr) || "split" === e && !xr) {
            var u = /./[o]
              , s = n(o, ""[e], function(e, t, n, r, o) {
                return t.exec === vr ? c && !o ? {
                    done: !0,
                    value: u.call(t, n, r)
                } : {
                    done: !0,
                    value: e.call(n, t, r)
                } : {
                    done: !1
                }
            }, {
                REPLACE_KEEPS_$0: gr,
                REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: wr
            })
              , f = s[1];
            ne(String.prototype, e, s[0]),
            ne(RegExp.prototype, o, 2 == t ? function(e, t) {
                return f.call(e, this, t)
            }
            : function(e) {
                return f.call(e, this)
            }
            )
        }
        r && P(RegExp.prototype[o], "sham", !0)
    }
      , Ir = Object.is || function(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
    }
      , Sr = function(e, t) {
        var n = e.exec;
        if ("function" == typeof n) {
            var r = n.call(e, t);
            if ("object" != typeof r)
                throw TypeError("RegExp exec method returned something other than an Object or null");
            return r
        }
        if ("RegExp" !== p(e))
            throw TypeError("RegExp#exec called on incompatible receiver");
        return vr.call(e, t)
    };
    Er("search", 1, function(e, t, n) {
        return [function(t) {
            var n = v(this)
              , r = null == t ? void 0 : t[e];
            return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
        }
        , function(e) {
            var r = n(t, e, this);
            if (r.done)
                return r.value;
            var o = j(e)
              , i = String(this)
              , c = o.lastIndex;
            Ir(c, 0) || (o.lastIndex = 0);
            var a = Sr(o, i);
            return Ir(o.lastIndex, c) || (o.lastIndex = c),
            null === a ? -1 : a.index
        }
        ]
    });
    var Or = s.f
      , Tr = function(e) {
        return function(t) {
            for (var n, r = m(t), o = er(r), i = o.length, a = 0, u = []; i > a; )
                n = o[a++],
                c && !Or.call(r, n) || u.push(e ? [n, r[n]] : r[n]);
            return u
        }
    }
      , jr = [Tr(!0), Tr(!1)][0];
    Re({
        target: "Object",
        stat: !0
    }, {
        entries: function(e) {
            return jr(e)
        }
    });
    var Ar = Jn.filter;
    Re({
        target: "Array",
        proto: !0,
        forced: !$e("filter")
    }, {
        filter: function(e) {
            return Ar(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }),
    self.fetch || (self.fetch = function(e, t) {
        return t = t || {},
        new Promise(function(n, r) {
            var o = new XMLHttpRequest
              , i = []
              , c = []
              , a = {}
              , u = function() {
                return {
                    ok: 2 == (o.status / 100 | 0),
                    statusText: o.statusText,
                    status: o.status,
                    url: o.responseURL,
                    text: function() {
                        return Promise.resolve(o.responseText)
                    },
                    json: function() {
                        return Promise.resolve(o.responseText).then(JSON.parse)
                    },
                    blob: function() {
                        return Promise.resolve(new Blob([o.response]))
                    },
                    clone: u,
                    headers: {
                        keys: function() {
                            return i
                        },
                        entries: function() {
                            return c
                        },
                        get: function(e) {
                            return a[e.toLowerCase()]
                        },
                        has: function(e) {
                            return e.toLowerCase()in a
                        }
                    }
                }
            };
            for (var s in o.open(t.method || "get", e, !0),
            o.onload = function() {
                o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(e, t, n) {
                    i.push(t = t.toLowerCase()),
                    c.push([t, n]),
                    a[t] = a[t] ? a[t] + "," + n : n
                }),
                n(u())
            }
            ,
            o.onerror = r,
            o.withCredentials = "include" == t.credentials,
            t.headers)
                o.setRequestHeader(s, t.headers[s]);
            o.send(t.body || null)
        }
        )
    }
    );
    var Cr, Pr = Object.setPrototypeOf || ("__proto__"in {} ? function() {
        var e, t = !1, n = {};
        try {
            (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []),
            t = n instanceof Array
        } catch (e) {}
        return function(n, r) {
            return j(n),
            function(e) {
                if (!y(e) && null !== e)
                    throw TypeError("Can't set " + String(e) + " as a prototype")
            }(r),
            t ? e.call(n, r) : n.__proto__ = r,
            n
        }
    }() : void 0), Lr = function(e, t, n) {
        var r, o;
        return Pr && "function" == typeof (r = t.constructor) && r !== n && y(o = r.prototype) && o !== n.prototype && Pr(e, o),
        e
    }, Rr = c ? Object.defineProperties : function(e, t) {
        j(e);
        for (var n, r = er(t), o = r.length, i = 0; o > i; )
            C.f(e, n = r[i++], t[n]);
        return e
    }
    , Dr = V("IE_PROTO"), _r = function() {}, Nr = function(e) {
        return "<script>" + e + "<\/script>"
    }, Fr = function() {
        try {
            Cr = document.domain && new ActiveXObject("htmlfile")
        } catch (e) {}
        var e, t;
        Fr = Cr ? function(e) {
            e.write(Nr("")),
            e.close();
            var t = e.parentWindow.Object;
            return e = null,
            t
        }(Cr) : ((t = I("iframe")).style.display = "none",
        Pt.appendChild(t),
        t.src = String("javascript:"),
        (e = t.contentWindow.document).open(),
        e.write(Nr("document.F=Object")),
        e.close(),
        e.F);
        for (var n = ge.length; n--; )
            delete Fr.prototype[ge[n]];
        return Fr()
    };
    q[Dr] = !0;
    var Mr = Object.create || function(e, t) {
        var n;
        return null !== e ? (_r.prototype = j(e),
        n = new _r,
        _r.prototype = null,
        n[Dr] = e) : n = Fr(),
        void 0 === t ? n : Rr(n, t)
    }
      , kr = "\t\n\v\f\r                　\u2028\u2029\ufeff"
      , Ur = "[" + kr + "]"
      , zr = RegExp("^" + Ur + Ur + "*")
      , Zr = RegExp(Ur + Ur + "*$")
      , Hr = function(e) {
        return function(t) {
            var n = String(v(t));
            return 1 & e && (n = n.replace(zr, "")),
            2 & e && (n = n.replace(Zr, "")),
            n
        }
    }
      , Gr = {
        start: Hr(1),
        end: Hr(2),
        trim: Hr(3)
    }
      , Kr = we.f
      , Br = T.f
      , Vr = C.f
      , qr = Gr.trim
      , $r = "Number"
      , Yr = o.Number
      , Wr = Yr.prototype
      , Xr = p(Mr(Wr)) == $r
      , Jr = function(e) {
        var t, n, r, o, i, c, a, u, s = g(e, !1);
        if ("string" == typeof s && s.length > 2)
            if (43 === (t = (s = qr(s)).charCodeAt(0)) || 45 === t) {
                if (88 === (n = s.charCodeAt(2)) || 120 === n)
                    return NaN
            } else if (48 === t) {
                switch (s.charCodeAt(1)) {
                case 66:
                case 98:
                    r = 2,
                    o = 49;
                    break;
                case 79:
                case 111:
                    r = 8,
                    o = 55;
                    break;
                default:
                    return +s
                }
                for (c = (i = s.slice(2)).length,
                a = 0; a < c; a++)
                    if ((u = i.charCodeAt(a)) < 48 || u > o)
                        return NaN;
                return parseInt(i, r)
            }
        return +s
    };
    if (Pe($r, !Yr(" 0o1") || !Yr("0b1") || Yr("+0x1"))) {
        for (var Qr, eo = function(e) {
            var t = arguments.length < 1 ? 0 : e
              , n = this;
            return n instanceof eo && (Xr ? i(function() {
                Wr.valueOf.call(n)
            }) : p(n) != $r) ? Lr(new Yr(Jr(t)), n, eo) : Jr(t)
        }, to = c ? Kr(Yr) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","), no = 0; to.length > no; no++)
            w(Yr, Qr = to[no]) && !w(eo, Qr) && Vr(eo, Qr, Br(Yr, Qr));
        eo.prototype = Wr,
        Wr.constructor = eo,
        ne(o, $r, eo)
    }
    var ro = Gr.trim;
    Re({
        target: "String",
        proto: !0,
        forced: i(function() {
            return !!kr.trim() || "​᠎" != "​᠎".trim() || "trim" !== kr.trim.name
        })
    }, {
        trim: function() {
            return ro(this)
        }
    });
    var oo = function(e, t, n, r, o, i, c, a) {
        for (var u, s = o, f = 0, l = !!c && ht(c, a, 3); f < r; ) {
            if (f in n) {
                if (u = l ? l(n[f], f, t) : n[f],
                i > 0 && De(u))
                    s = oo(e, t, u, fe(u.length), s, i - 1) - 1;
                else {
                    if (s >= 9007199254740991)
                        throw TypeError("Exceed the acceptable array length");
                    e[s] = u
                }
                s++
            }
            f++
        }
        return s
    }
      , io = oo;
    Re({
        target: "Array",
        proto: !0
    }, {
        flat: function() {
            var e = arguments.length ? arguments[0] : void 0
              , t = qn(this)
              , n = fe(t.length)
              , r = Yn(t, 0);
            return r.length = io(r, t, t, n, 0, void 0 === e ? 1 : ue(e)),
            r
        }
    });
    var co = Ve("unscopables")
      , ao = Array.prototype;
    null == ao[co] && C.f(ao, co, {
        configurable: !0,
        value: Mr(null)
    });
    var uo = function(e) {
        ao[co][e] = !0
    };
    uo("flat");
    var so = {
        transform: {
            concat: function(e) {
                return e.map(function(e) {
                    return lo(e)
                })
            },
            form: function(e) {
                return {
                    type: "Form",
                    formId: e
                }
            },
            paymentForm: function(e) {
                return {
                    type: "PaymentForm",
                    formId: e
                }
            },
            resource: function(e) {
                return {
                    type: "UIComponent",
                    componentId: e
                }
            },
            parameterisedResource: function(e) {
                return {
                    type: "UIComponent",
                    componentId: e
                }
            },
            url: function(e) {
                return {
                    type: "HostedUIComponent",
                    url: e
                }
            },
            componentTemplate: function(e) {
                return {
                    type: "ComponentTemplate",
                    componentId: e
                }
            },
            parameterisedComponentTemplate: function(e) {
                return {
                    type: "ComponentTemplate",
                    componentId: e
                }
            },
            truncate: function(e) {
                return {
                    type: "Truncate",
                    truncateLength: Number(e),
                    style: "nostyle"
                }
            },
            truncateWithStyle: function(e, t) {
                return {
                    type: "Truncate",
                    truncateLength: Number(e),
                    style: t
                }
            },
            outcomeTracker: function(e, t, n, r) {
                return {
                    type: "OutcomeTracker",
                    featureId: e,
                    featureLabel: t,
                    outcomeId: n,
                    outcomeLabel: r
                }
            },
            remove: function() {
                return {
                    type: "Remove"
                }
            }
        }
    }
      , fo = {
        type: "LeavePristine"
    }
      , lo = function(e) {
        var t = e.trim().length ? e : "blaize.transform.remove()";
        return new Function("blaize,leave_pristine",'"use strict";return (' + t + ");")(so, fo)
    }
      , po = function(e) {
        return [lo(e)].flat()
    }
      , ho = Ve("match")
      , vo = function(e) {
        var t;
        return y(e) && (void 0 !== (t = e[ho]) ? !!t : "RegExp" == p(e))
    }
      , mo = function(e) {
        return function(t, n) {
            var r, o, i = String(v(t)), c = ue(n), a = i.length;
            return c < 0 || c >= a ? e ? "" : void 0 : (r = i.charCodeAt(c)) < 55296 || r > 56319 || c + 1 === a || (o = i.charCodeAt(c + 1)) < 56320 || o > 57343 ? e ? i.charAt(c) : r : e ? i.slice(c, c + 2) : o - 56320 + (r - 55296 << 10) + 65536
        }
    }
      , yo = {
        codeAt: mo(!1),
        charAt: mo(!0)
    }
      , go = yo.charAt
      , bo = function(e, t, n) {
        return t + (n ? go(e, t).length : 1)
    }
      , wo = [].push
      , xo = Math.min
      , Eo = 4294967295
      , Io = !i(function() {
        return !RegExp(Eo, "y")
    });
    Er("split", 2, function(e, t, n) {
        var r;
        return r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(e, n) {
            var r = String(v(this))
              , o = void 0 === n ? Eo : n >>> 0;
            if (0 === o)
                return [];
            if (void 0 === e)
                return [r];
            if (!vo(e))
                return t.call(r, e, o);
            for (var i, c, a, u = [], s = 0, f = new RegExp(e.source,(e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : "") + "g"); (i = vr.call(f, r)) && !((c = f.lastIndex) > s && (u.push(r.slice(s, i.index)),
            i.length > 1 && i.index < r.length && wo.apply(u, i.slice(1)),
            a = i[0].length,
            s = c,
            u.length >= o)); )
                f.lastIndex === i.index && f.lastIndex++;
            return s === r.length ? !a && f.test("") || u.push("") : u.push(r.slice(s)),
            u.length > o ? u.slice(0, o) : u
        }
        : "0".split(void 0, 0).length ? function(e, n) {
            return void 0 === e && 0 === n ? [] : t.call(this, e, n)
        }
        : t,
        [function(t, n) {
            var o = v(this)
              , i = null == t ? void 0 : t[e];
            return void 0 !== i ? i.call(t, o, n) : r.call(String(o), t, n)
        }
        , function(e, o) {
            var i = n(r, e, this, o, r !== t);
            if (i.done)
                return i.value;
            var c = j(e)
              , a = String(this)
              , u = Ct(c, RegExp)
              , s = c.unicode
              , f = new u(Io ? c : "^(?:" + c.source + ")",(c.ignoreCase ? "i" : "") + (c.multiline ? "m" : "") + (c.unicode ? "u" : "") + (Io ? "y" : "g"))
              , l = void 0 === o ? Eo : o >>> 0;
            if (0 === l)
                return [];
            if (0 === a.length)
                return null === Sr(f, a) ? [a] : [];
            for (var p = 0, d = 0, h = []; d < a.length; ) {
                f.lastIndex = Io ? d : 0;
                var v, m = Sr(f, Io ? a : a.slice(d));
                if (null === m || (v = xo(fe(f.lastIndex + (Io ? 0 : d)), a.length)) === p)
                    d = bo(a, d, s);
                else {
                    if (h.push(a.slice(p, d)),
                    h.length === l)
                        return h;
                    for (var y = 1; y <= m.length - 1; y++)
                        if (h.push(m[y]),
                        h.length === l)
                            return h;
                    d = p = v
                }
            }
            return h.push(a.slice(p)),
            h
        }
        ]
    }, !Io);
    var So = function(e, t) {
        var n = [][e];
        return !!n && i(function() {
            n.call(null, t || function() {
                throw 1
            }
            , 1)
        })
    }
      , Oo = Math.min
      , To = [].lastIndexOf
      , jo = !!To && 1 / [1].lastIndexOf(1, -0) < 0
      , Ao = So("lastIndexOf")
      , Co = jo || !Ao ? function(e) {
        if (jo)
            return To.apply(this, arguments) || 0;
        var t = m(this)
          , n = fe(t.length)
          , r = n - 1;
        for (arguments.length > 1 && (r = Oo(r, ue(arguments[1]))),
        r < 0 && (r = n + r); r >= 0; r--)
            if (r in t && t[r] === e)
                return r || 0;
        return -1
    }
    : To;
    Re({
        target: "Array",
        proto: !0,
        forced: Co !== [].lastIndexOf
    }, {
        lastIndexOf: Co
    });
    var Po = ve.includes;
    Re({
        target: "Array",
        proto: !0
    }, {
        includes: function(e) {
            return Po(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }),
    uo("includes");
    var Lo = function(e) {
        if (vo(e))
            throw TypeError("The method doesn't accept regular expressions");
        return e
    }
      , Ro = Ve("match");
    Re({
        target: "String",
        proto: !0,
        forced: !function(e) {
            var t = /./;
            try {
                "/./".includes(t)
            } catch (e) {
                try {
                    return t[Ro] = !1,
                    "/./".includes(t)
                } catch (e) {}
            }
            return !1
        }()
    }, {
        includes: function(e) {
            return !!~String(v(this)).indexOf(Lo(e), arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Do = Ve("isConcatSpreadable")
      , _o = 9007199254740991
      , No = "Maximum allowed index exceeded"
      , Fo = ze >= 51 || !i(function() {
        var e = [];
        return e[Do] = !1,
        e.concat()[0] !== e
    })
      , Mo = $e("concat")
      , ko = function(e) {
        if (!y(e))
            return !1;
        var t = e[Do];
        return void 0 !== t ? !!t : De(e)
    };
    Re({
        target: "Array",
        proto: !0,
        forced: !Fo || !Mo
    }, {
        concat: function(e) {
            var t, n, r, o, i, c = qn(this), a = Yn(c, 0), u = 0;
            for (t = -1,
            r = arguments.length; t < r; t++)
                if (ko(i = -1 === t ? c : arguments[t])) {
                    if (u + (o = fe(i.length)) > _o)
                        throw TypeError(No);
                    for (n = 0; n < o; n++,
                    u++)
                        n in i && _e(a, u, i[n])
                } else {
                    if (u >= _o)
                        throw TypeError(No);
                    _e(a, u++, i)
                }
            return a.length = u,
            a
        }
    });
    var Uo = function(e, t, n, r) {
        try {
            return r ? t(j(n)[0], n[1]) : t(n)
        } catch (t) {
            throw yt(e),
            t
        }
    };
    Re({
        target: "Array",
        stat: !0,
        forced: !jt(function(e) {
            Array.from(e)
        })
    }, {
        from: function(e) {
            var t, n, r, o, i, c, a = qn(e), u = "function" == typeof this ? this : Array, s = arguments.length, f = s > 1 ? arguments[1] : void 0, l = void 0 !== f, p = mt(a), d = 0;
            if (l && (f = ht(f, s > 2 ? arguments[2] : void 0, 2)),
            null == p || u == Array && dt(p))
                for (n = new u(t = fe(a.length)); t > d; d++)
                    c = l ? f(a[d], d) : a[d],
                    _e(n, d, c);
            else
                for (i = (o = p.call(a)).next,
                n = new u; !(r = i.call(o)).done; d++)
                    c = l ? Uo(o, f, [r.value, d], !0) : r.value,
                    _e(n, d, c);
            return n.length = d,
            n
        }
    });
    var zo, Zo, Ho, Go = !i(function() {
        function e() {}
        return e.prototype.constructor = null,
        Object.getPrototypeOf(new e) !== e.prototype
    }), Ko = V("IE_PROTO"), Bo = Object.prototype, Vo = Go ? Object.getPrototypeOf : function(e) {
        return e = qn(e),
        w(e, Ko) ? e[Ko] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? Bo : null
    }
    , qo = Ve("iterator"), $o = !1;
    [].keys && ("next"in (Ho = [].keys()) ? (Zo = Vo(Vo(Ho))) !== Object.prototype && (zo = Zo) : $o = !0);
    var Yo = null == zo || i(function() {
        var e = {};
        return zo[qo].call(e) !== e
    });
    Yo && (zo = {}),
    w(zo, qo) || P(zo, qo, function() {
        return this
    });
    var Wo = {
        IteratorPrototype: zo,
        BUGGY_SAFARI_ITERATORS: $o
    }
      , Xo = Wo.IteratorPrototype
      , Jo = function() {
        return this
    }
      , Qo = Wo.IteratorPrototype
      , ei = Wo.BUGGY_SAFARI_ITERATORS
      , ti = Ve("iterator")
      , ni = function() {
        return this
    }
      , ri = yo.charAt
      , oi = "String Iterator"
      , ii = te.set
      , ci = te.getterFor(oi);
    !function(e, t, n, r, o, i, c) {
        !function(e, t, n) {
            var r = "String Iterator";
            e.prototype = Mr(Xo, {
                next: f(1, function() {
                    var e, t = ci(this), n = t.string, r = t.index;
                    return r >= n.length ? {
                        value: void 0,
                        done: !0
                    } : (e = ri(n, r),
                    t.index += e.length,
                    {
                        value: e,
                        done: !1
                    })
                })
            }),
            at(e, r, !1),
            ft[r] = Jo
        }(n);
        var a, u, s = e.prototype, l = s[ti] || s["@@iterator"] || o, p = !ei && l || (u = o,
        p || (!ei && u in s ? s[u] : function() {
            return new n(this)
        }
        ));
        l && (a = Vo(l.call(new e)),
        Qo !== Object.prototype && a.next && (Vo(a) !== Qo && (Pr ? Pr(a, Qo) : "function" != typeof a[ti] && P(a, ti, ni)),
        at(a, "String Iterator", !0))),
        s[ti] !== p && P(s, ti, p),
        ft.String = p
    }(String, 0, function(e) {
        ii(this, {
            type: oi,
            string: String(e),
            index: 0
        })
    });
    var ai = Jn.forEach
      , ui = So("forEach") ? [].forEach : function(e) {
        return ai(this, e, arguments.length > 1 ? arguments[1] : void 0)
    }
    ;
    for (var si in {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    }) {
        var fi = o[si]
          , li = fi && fi.prototype;
        if (li && li.forEach !== ui)
            try {
                P(li, "forEach", ui)
            } catch (e) {
                li.forEach = ui
            }
    }
    var pi = ve.indexOf
      , di = [].indexOf
      , hi = !!di && 1 / [1].indexOf(1, -0) < 0
      , vi = So("indexOf");
    Re({
        target: "Array",
        proto: !0,
        forced: hi || !vi
    }, {
        indexOf: function(e) {
            return hi ? di.apply(this, arguments) || 0 : pi(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var mi = function(e) {
        return -1 !== e.search(">[^<>]+<")
    }
      , yi = function(e) {
        var t = (new DOMParser).parseFromString(e, "text/html")
          , n = [].concat(Array.from(t.head.children), Array.from(t.body.children));
        if (!n.length)
            return document.createTextNode(e);
        var r = document.createDocumentFragment();
        return n.forEach(function(e) {
            return r.appendChild(e)
        }),
        gi(r),
        r
    }
      , gi = function(e) {
        var t = e.querySelectorAll("script");
        t.length && Array.from(t).map(function(e) {
            var t = document.createElement("script");
            Array.from(e.attributes).forEach(function(e) {
                t.setAttribute(e.name, e.value)
            }),
            t.innerHTML = e.innerHTML,
            e.parentNode.appendChild(t),
            e.parentNode.removeChild(e)
        })
    }
      , bi = function(e, t, n) {
        void 0 === n && (n = {}),
        e.forEach(function(e) {
            var r = e.parentNode
              , o = Array.from(r.children).indexOf(e)
              , i = r.removeChild(e)
              , c = t.map(function(e) {
                return function(e, t, n) {
                    switch (t.type) {
                    case "LeavePristine":
                        return e;
                    case "Truncate":
                        return function(e, t) {
                            var n = 2 * t.truncateLength
                              , r = e.outerHTML.trim().split(/\s+/);
                            if (t.truncateLength >= r.length)
                                return e;
                            for (var o, i = 0, c = !1, a = 0, u = 0, s = Vn(r); !(o = s()).done; ) {
                                var f = o.value;
                                u++;
                                var l = c
                                  , p = f.lastIndexOf("<")
                                  , d = f.lastIndexOf(">");
                                if (p >= 0 && (c = !0),
                                d >= 0 && (c = !1),
                                -1 !== p && -1 !== d && p > d && (c = !0),
                                l && d === f.length - 1 && !mi(f) || 0 === p && d === f.length - 1)
                                    c = !1;
                                else if (!c) {
                                    if (i > 0)
                                        break;
                                    (++a >= t.truncateLength && f.includes(".") || a == n) && (i = u)
                                }
                            }
                            if (u === r.length)
                                return e;
                            var h = r.slice(0, u = i > 0 ? i : u).join(" ");
                            a === n && (h += "...\n");
                            var v, m = (new DOMParser).parseFromString(h, "text/html").body.children[0];
                            switch (t.style) {
                            case "fadeout":
                                var y = document.createElement("div");
                                y.style.position = "absolute",
                                y.style.height = "100%",
                                y.style.width = "100%",
                                y.style.bottom = 0,
                                y.style.backgroundImage = "linear-gradient(0deg, #fff 0%, rgba(255, 255, 255, 0) 100%)",
                                m.appendChild(y),
                                (v = document.createElement("div")).style.position = "relative",
                                v.appendChild(m);
                                break;
                            case "linebreak":
                                var g = document.createElement("hr");
                                g.style.border = "1px solid #ebebeb",
                                m.appendChild(g),
                                v = m;
                                break;
                            default:
                                v = m
                            }
                            return v
                        }(e, t);
                    case "OutcomeTracker":
                        !function(e) {
                            window.Zephr || (window.Zephr = {}),
                            window.Zephr.outcomes || (window.Zephr.outcomes = {}),
                            window.Zephr.outcomes[e.featureId] = {
                                featureLabel: e.featureLabel,
                                outcomeId: e.outcomeId,
                                outcomeLabel: e.outcomeLabel
                            }
                        }(t);
                        break;
                    case "Form":
                        return function(e, t) {
                            if (t.forms && t.forms[e.formId])
                                return yi(t.forms[e.formId]);
                            console.error("Form not found.")
                        }(t, n);
                    case "PaymentForm":
                        return function(e, t) {
                            if (t.paymentForms && t.paymentForms[e.formId])
                                return yi(t.paymentForms[e.formId]);
                            console.error("Payment form not found.")
                        }(t, n);
                    case "UIComponent":
                        return function(e, t) {
                            if (t.uiComponents && t.uiComponents[e.componentId])
                                return yi(t.uiComponents[e.componentId]);
                            console.error("UI component not found.")
                        }(t, n);
                    case "HostedUIComponent":
                        return function(e, t) {
                            if (t.hostedUiComponents && t.hostedUiComponents[e.url])
                                return yi(t.hostedUiComponents[e.url]);
                            console.error("Hosted UI component not found.")
                        }(t, n);
                    case "ComponentTemplate":
                        return function(e, t) {
                            if (t.componentTemplates && t.componentTemplates[e.componentId])
                                return yi(t.componentTemplates[e.componentId]);
                            console.error("Component template not found.")
                        }(t, n);
                    case "Remove":
                        break;
                    default:
                        console.error("No matching outcome type " + t.type)
                    }
                }(i, e, n)
            }).filter(Boolean)
              , a = document.createDocumentFragment();
            c.forEach(function(e) {
                return a.appendChild(e)
            }),
            o < r.children.length ? r.insertBefore(a, r.children[o]) : r.appendChild(a)
        })
    };
    Re({
        target: "Object",
        stat: !0,
        forced: i(function() {
            er(1)
        })
    }, {
        keys: function(e) {
            return er(qn(e))
        }
    });
    var wi = function(e) {
        var t;
        return "function" == typeof Event ? t = new Event(e) : (t = document.createEvent("Event")).initEvent(e, !0, !0),
        t
    };
    function xi(e, t) {
        try {
            var n = e()
        } catch (e) {
            return t(e)
        }
        return n && n.then ? n.then(void 0, t) : n
    }
    var Ei = function() {
        function e(e) {
            this.cdnApi = e || ""
        }
        var t = e.prototype;
        return t.fetchLiveFeatures = function() {
            try {
                var e = this;
                return Promise.resolve(xi(function() {
                    return Promise.resolve(fetch(e.cdnApi + "/zephr/features").then(function(e) {
                        return e.json()
                    }))
                }, function() {
                    return Promise.reject(new Error("Live features endpoint failed."))
                }))
            } catch (e) {
                return Promise.reject(e)
            }
        }
        ,
        t.fetchDecisions = function(e, t) {
            var n = void 0 === t ? {
                customData: {}
            } : t
              , r = n.jwt
              , o = n.customData
              , i = void 0 === o ? {} : o;
            try {
                var c = this
                  , a = e.map(function(e) {
                    return e.id
                });
                return Promise.resolve(xi(function() {
                    return Promise.resolve(fetch(c.cdnApi + "/zephr/feature-decisions", {
                        method: "POST",
                        credentials: "include",
                        headers: Object.assign({
                            "Content-Type": "application/json",
                            Accept: "application/json"
                        }, r && {
                            Authorization: "Bearer " + r
                        }),
                        body: JSON.stringify({
                            path: document.location.pathname + document.location.search + document.location.hash,
                            referer: document.referrer,
                            featureIds: a,
                            customData: i
                        })
                    }).then(function(e) {
                        return e.json()
                    }))
                }, function() {
                    return Promise.reject(new Error("Feature decisions endpoint failed."))
                }))
            } catch (e) {
                return Promise.reject(e)
            }
        }
        ,
        t.executeDecisions = function(e, t, n) {
            for (var r, o = Vn(e); !(r = o()).done; ) {
                var i = r.value
                  , c = (t.featureResults || {})[i.id];
                if (c) {
                    var a = po(c)
                      , u = this.selectFeatureNodes(i);
                    bi(u, a, t.resources || {})
                }
            }
            t.accessDetails && (window.Zephr || (window.Zephr = {}),
            window.Zephr.accessDetails ? window.Zephr.accessDetails = this._mergeAccessDetails(window.Zephr.accessDetails, t.accessDetails) : window.Zephr.accessDetails = t.accessDetails),
            n && function(e) {
                var t = e.datalayerName;
                t in window || (window[t] = []);
                var n = {}
                  , r = [];
                e.includeOutcomes && window.Zephr.outcomes && (n.zephrOutcomes = window.Zephr.outcomes,
                e.outcomesAsEvents && Object.keys(window.Zephr.outcomes || []).forEach(function(e) {
                    var t = {
                        event: "zephr-outcome-" + e,
                        featureId: e,
                        featureLabel: window.Zephr.outcomes[e].featureLabel,
                        outcomeId: window.Zephr.outcomes[e].outcomeId,
                        outcomeLabel: window.Zephr.outcomes[e].outcomeLabel
                    };
                    r.push(t)
                })),
                window.Zephr && window.Zephr.accessDetails && (Object.keys(window.Zephr.accessDetails.trials || {}).forEach(function(t) {
                    var r = window.Zephr.accessDetails.trials[t];
                    if (r.reportInDataLayer) {
                        var o = r.totalCredits - r.remainingCredits;
                        e.groupFields && !n.zephrTrials && (n.zephrTrials = {});
                        var i = e.groupFields ? n.zephrTrials : n;
                        r.dataLayerCreditsUsedKey && (i[r.dataLayerCreditsUsedKey] = o),
                        r.dataLayerCreditsRemainingKey && (i[r.dataLayerCreditsRemainingKey] = r.remainingCredits)
                    }
                }),
                (window.Zephr.accessDetails.trialTrackingDetails || []).forEach(function(t) {
                    var r = (window.Zephr.accessDetails["credits" === t.entitlementType ? "credits" : "meters"] || {})[t.entitlementId];
                    r && (e.groupFields && !n.zephrTrials && (n.zephrTrials = {}),
                    t.creditsRemainingKey && (e.groupFields ? n.zephrTrials[t.creditsRemainingKey] = r.remainingCredits : n[t.creditsRemainingKey] = r.remainingCredits),
                    t.creditsUsedKey && (e.groupFields ? n.zephrTrials[t.creditsUsedKey] = r.totalCredits - r.remainingCredits : n[t.creditsUsedKey] = r.totalCredits - r.remainingCredits))
                })),
                Object.keys(n).length && (n.event = "zephr-pageview",
                r.unshift(n)),
                r.length && (r.forEach(function(e) {
                    window[t].push(e)
                }),
                document.dispatchEvent(wi("zephr.dataLayerReady")))
            }(n)
        }
        ,
        t._mergeAccessDetails = function(e, t) {
            var n, r;
            return Object.assign({}, e, t, {
                authenticated: t.authenticated,
                accessDecisions: Object.assign({}, e.accessDecisions, t.accessDecisions),
                entitlements: this._mergeCreditData(e.entitlements, t.entitlements),
                credits: this._mergeCreditData(e.credits, t.credits),
                meters: this._mergeCreditData(e.meters, t.meters),
                trials: this._mergeCreditData(null != (n = e.trials) ? n : {}, null != (r = t.trials) ? r : {})
            })
        }
        ,
        t._mergeCreditData = function(e, t) {
            for (var n = Object.assign({}, e, t), r = 0, o = Object.entries(e); r < o.length; r++) {
                var i = o[r]
                  , c = i[0]
                  , a = i[1]
                  , u = t[c];
                if (u) {
                    var s = n[c];
                    this._eitherHasProperty(a, u, "decrementedInDecision") && (s.decrementedInDecision = !(!a.decrementedInDecision && !u.decrementedInDecision)),
                    this._eitherHasProperty(a, u, "usedInDecision") && (s.usedInDecision = !(!a.usedInDecision && !u.usedInDecision)),
                    this._eitherHasProperty(a, u, "remainingCredits") && (s.remainingCredits = this._minOrNumber(a.remainingCredits, u.remainingCredits)),
                    this._eitherHasProperty(a, u, "totalCredits") && (s.totalCredits = this._minOrNumber(a.totalCredits, u.totalCredits))
                }
            }
            return n
        }
        ,
        t._eitherHasProperty = function(e, t, n) {
            return e && e.hasOwnProperty(n) || t && t.hasOwnProperty(n)
        }
        ,
        t._minOrNumber = function(e, t) {
            var n = "number" == typeof e
              , r = "number" == typeof t;
            return n && r ? Math.min(e, t) : n ? e : r ? t : void 0
        }
        ,
        t.findFeatures = function(e) {
            return Array.isArray(e) && e.length ? e.filter(function(e) {
                return "COMMENT_TAG" !== e.targetType && null !== document.querySelector(e.cssSelector)
            }) : []
        }
        ,
        t.selectFeatureNodes = function(e) {
            return document.querySelectorAll(e.cssSelector)
        }
        ,
        e
    }()
      , Ii = function(e) {
        return new Ei(e)
    }
      , Si = function(e) {
        var t;
        e && (t = console).log.apply(t, [].slice.call(arguments, 1))
    };
    e.createInstance = Ii,
    e.run = function(e) {
        try {
            var t = e && e.debug || localStorage && localStorage.getItem("zephrBrowserDebug")
              , n = ""
              , r = {};
            "string" == typeof e ? n = e : "object" == typeof e && (r = e,
            n = e.cdnApi || "");
            var o = Ii(n);
            return Promise.resolve(o.fetchLiveFeatures()).then(function(e) {
                function n() {
                    return document.dispatchEvent(wi("zephr.browserDecisionsFinished")),
                    o
                }
                var i, c;
                Array.isArray(e) ? i = e : (i = e.features,
                c = e.datalayerOutcomesConfig),
                Si(t, "Live Features:", i);
                var a = o.findFeatures(i)
                  , u = function() {
                    if (a.length)
                        return Si(t, "Features on page:", a),
                        Promise.resolve(o.fetchDecisions(a, r)).then(function(e) {
                            Si(t, "Decisions:", e),
                            o.executeDecisions(a, e, c)
                        });
                    Si(t, "No features found on page.")
                }();
                return u && u.then ? u.then(n) : n()
            })
        } catch (e) {
            return Promise.reject(e)
        }
    }
});
