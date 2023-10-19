!function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var a = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(a.exports, a, a.exports, n),
        a.l = !0,
        a.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var a in e)
                n.d(r, a, function(t) {
                    return e[t]
                }
                .bind(null, a));
        return r
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 1)
}([function(e, t) {}
, function(e, t, n) {
    "use strict";
    n.r(t);
    n(0);
    var r = function(e) {
        return {
            width: e.innerWidth || -1,
            height: e.innerHeight || -1
        }
    }
      , a = function(e) {
        return {
            width: e.screen && e.screen.width || -1,
            height: e.screen && e.screen.height || -1
        }
    }
      , i = window
      , o = top;
    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var c = new (function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            u(this, "log", null),
            u(this, "warn", null),
            u(this, "error", null),
            i.diagPixSentCodes = i.diagPixSentCodes || {},
            this.log = this.logger.bind(this, "log"),
            this.warn = this.logger.bind(this, "warn"),
            this.error = this.logger.bind(this, "error")
        }
        var t, n, r;
        return t = e,
        (n = [{
            key: "getAnid",
            value: function() {
                return i.__iasPET.pubId || ""
            }
        }, {
            key: "getSessionId",
            value: function() {
                return i.__iasPET.sessionId || ""
            }
        }, {
            key: "resetDiagPixSentCodes",
            value: function() {
                i.diagPixSentCodes = {}
            }
        }, {
            key: "buildQueryString",
            value: function(e, t) {
                var n = "";
                return e && (n = Object.keys(e).reduce(function(n, r) {
                    return n.push([r, e[r]].join(t)),
                    n
                }, []).join("&")),
                n
            }
        }, {
            key: "getQueryParamByName",
            value: function(e) {
                var t, n, r, a, o = i.location.search && i.location.search.toLowerCase(), s = o && o.indexOf(e);
                return -1 !== s && (t = o.indexOf("=", s) + 1,
                n = -1 === (r = o.indexOf("&", t)) ? void 0 : r,
                a = decodeURIComponent(o.slice(t, n))),
                a
            }
        }, {
            key: "diagPix",
            value: function(e, t) {
                var n, r, a, o;
                if (!i.diagPixSentCodes[e])
                    try {
                        n = this.getAnid(),
                        r = this.getSessionId(),
                        i.diagPixSentCodes[e] = !0,
                        a = {
                            code: "pet_" + e,
                            anid: n,
                            sessionId: r
                        },
                        t && (a.err = encodeURIComponent(t.message)),
                        o = this.buildQueryString(a, ":"),
                        (new i.Image).src = "//pixel.adsafeprotected.com/jsdiagnostic?" + o
                    } catch (e) {
                        c.error(e)
                    }
            }
        }, {
            key: "logger",
            value: function(e, t) {
                var n = "background-color: "
                  , r = i.console && "function" == typeof i.console.error
                  , a = this.getQueryParamByName("iasdebug")
                  , o = a && "TRUE" === a.toUpperCase();
                "log" === e ? n += "lightgreen" : "error" === e ? n += "pink" : "warn" === e && (n += "lightyellow"),
                r && o && console.log("%cIAS_DEBUG: " + t, n)
            }
        }]) && s(t.prototype, n),
        r && s(t, r),
        e
    }())
      , l = "gpt"
      , f = "longreq"
      , d = "m"
      , g = "na"
      , h = "profile"
      , p = "x"
      , y = "xe"
      , m = "xt";
    function v(e) {
        return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function S(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    var b = new (function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        var t, n, r;
        return t = e,
        (n = [{
            key: "sendXHR",
            value: function(e, t, n, r) {
                var a, i;
                try {
                    (a = new XMLHttpRequest) && (i = encodeURI(e + "?" + t),
                    a.open("GET", i),
                    a.onreadystatechange = function() {
                        var e;
                        if (4 === a.readyState && 200 === a.status)
                            if ((e = a.responseText).code)
                                c.error("XMLHttpRequest failure code: " + e.code + ", message: " + e.message);
                            else if (n)
                                try {
                                    n.call({}, e || {})
                                } catch (e) {
                                    c.error("Error firing the XMLHttpRequest callback: " + e.message)
                                }
                    }
                    ,
                    r && (a.timeout = r),
                    a.ontimeout = function() {
                        c.error("XMLHttpRequest timeout event is fired."),
                        c.diagPix(m, {
                            message: "timeout:" + r
                        })
                    }
                    ,
                    a.onerror = function(e) {
                        c.error("XMLHttpRequest error event is fired."),
                        c.diagPix(y, e)
                    }
                    ,
                    a.send())
                } catch (e) {
                    c.error("Error sending XMLHttpRequest: " + e.message),
                    c.diagPix(p, e)
                }
            }
        }, {
            key: "forIn",
            value: function(e, t) {
                var n;
                for (n in e)
                    e.hasOwnProperty(n) && t(n, e[n])
            }
        }, {
            key: "getUID",
            value: function() {
                var e = function() {
                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                };
                return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
            }
        }, {
            key: "extend",
            value: function(e, t) {
                return t && Object.keys(t).forEach(function(n) {
                    e[n] = t[n]
                }),
                e
            }
        }, {
            key: "isArray",
            value: function(e) {
                return e instanceof Array
            }
        }, {
            key: "isDef",
            value: function(e) {
                return void 0 !== e
            }
        }, {
            key: "isFn",
            value: function(e) {
                return "function" == typeof e
            }
        }, {
            key: "isObj",
            value: function(e) {
                return "object" === v(e)
            }
        }, {
            key: "isEmptyObj",
            value: function(e) {
                return 0 === Object.getOwnPropertyNames(e).length
            }
        }, {
            key: "now",
            value: function() {
                return (new Date).getTime()
            }
        }, {
            key: "chance",
            value: function(e) {
                return 100 * Math.random() < e
            }
        }]) && S(t.prototype, n),
        r && S(t, r),
        e
    }())
      , _ = function(e) {
        var t, n, r, a, i, o, s, u, c = {}, l = function(e) {
            return e && e.replace(/[^\w-_.>\/]/g, "")
        };
        t = l((i = e.adSlotId) && i.replace(/\//g, "")),
        n = e.size && e.size instanceof Array && e.size.join("."),
        r = l(e.adUnitPath),
        a = function(t) {
            var n = "display";
            return void 0 !== e.type && null != t && "video" == l(t) && (n = "video"),
            n
        }(e.type),
        c.id = t,
        (c = b.extend(c, (o = e.size,
        u = {},
        b.isArray(o) && (o.every(b.isArray) ? (s = o.map(function(e) {
            return e.join(".")
        }).join(","),
        u.ss = "[" + s + "]") : u.s = o.join(".")),
        u))).p = r,
        c.t = a;
        return {
            toString: function() {
                var e, t = [];
                for (e in c)
                    t.push(e + ":" + c[e]);
                return "slot={" + t.join(",") + "}"
            },
            isValid: function() {
                return t && n && r
            }
        }
    };
    function E(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    var A = new (function() {
        function e() {
            var t, n, r;
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            r = [],
            (n = "list")in (t = this) ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = r
        }
        var t, n, r;
        return t = e,
        (n = [{
            key: "add",
            value: function(e) {
                new _(e).isValid() ? this.list.push(new _(e)) : c.error("Missing ad slot id, slot size and/or ad unit path.")
            }
        }, {
            key: "setAdSlots",
            value: function(e) {
                var t = e.adSlots
                  , n = this;
                t && (t instanceof Array ? t.forEach(function(e) {
                    n.add(e)
                }) : b.isObj(t) && this.add(t))
            }
        }, {
            key: "clear",
            value: function() {
                this.list = []
            }
        }, {
            key: "stringify",
            value: function() {
                return this.list.join("&")
            }
        }, {
            key: "isEmpty",
            value: function() {
                return 0 === this.list.length
            }
        }]) && E(t.prototype, n),
        r && E(t, r),
        e
    }());
    function I(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    function w(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var D = new (function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            w(this, "cachedPageData", {}),
            w(this, "cachedSlotsData", {}),
            w(this, "cachedCustomData", {}),
            w(this, "BRAND_SAFETY_OBJECT_FIELD_NAME", "brandSafety"),
            w(this, "FRAUD_FIELD_NAME", "fr"),
            w(this, "SLOTS_OBJECT_FIELD_NAME", "slots"),
            w(this, "CUSTOM_FIELD_NAME", "custom")
        }
        var t, n, r;
        return t = e,
        (n = [{
            key: "updateData",
            value: function(e) {
                var t = JSON.parse(e)
                  , n = t[this.BRAND_SAFETY_OBJECT_FIELD_NAME]
                  , r = t[this.SLOTS_OBJECT_FIELD_NAME]
                  , a = t[this.CUSTOM_FIELD_NAME];
                t[this.FRAUD_FIELD_NAME] && (this.cachedPageData[this.FRAUD_FIELD_NAME] = t[this.FRAUD_FIELD_NAME]);
                var i = function(e, t) {
                    b.forIn(e, function(e, n) {
                        t[e] = n
                    })
                };
                i(n, this.cachedPageData),
                i(r, this.cachedSlotsData),
                i(a, this.cachedCustomData)
            }
        }, {
            key: "clearCaches",
            value: function() {
                this.cachedPageData = {},
                this.cachedSlotsData = {},
                this.cachedCustomData = {}
            }
        }, {
            key: "setTargetingWrapper",
            value: function(e, t) {
                e && b.isFn(e.setTargeting) && b.forIn(t, function(t, n) {
                    c.log("setting targeting: {" + t + ": " + n + "}"),
                    e.setTargeting(t, n)
                })
            }
        }, {
            key: "setSlotLevelData",
            value: function() {
                var e, t = this, n = i.googletag.pubads().getSlots();
                n ? n.forEach(function(n) {
                    (e = b.isFn(n.getSlotElementId) && n.getSlotElementId()) && t.setTargetingWrapper(n, t.cachedSlotsData[e])
                }) : c.error("GPT slots have to be defined before setting slot level keyword targeting")
            }
        }, {
            key: "setPageLevelData",
            value: function() {
                this.setTargetingWrapper(i.googletag.pubads(), this.cachedPageData)
            }
        }, {
            key: "setCustomLevelData",
            value: function() {
                this.setTargetingWrapper(i.googletag.pubads(), this.cachedCustomData)
            }
        }, {
            key: "setTargeting",
            value: function() {
                var e = this;
                return function() {
                    i.googletag ? i.googletag.cmd.push(function() {
                        e.setPageLevelData(),
                        e.setSlotLevelData(),
                        e.setCustomLevelData()
                    }) : (c.error("googletag is not available. Cannot set keyword targeting for GPT."),
                    c.diagPix(l))
                }
            }
        }]) && I(t.prototype, n),
        r && I(t, r),
        e
    }());
    function T(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    function P(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var x = new (function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            P(this, "cachedPageData", {}),
            P(this, "cachedSlotsData", {}),
            P(this, "cachedCustomData", {}),
            P(this, "BRAND_SAFETY_OBJECT_FIELD_NAME", "brandSafety"),
            P(this, "FRAUD_FIELD_NAME", "fr"),
            P(this, "SLOTS_OBJECT_FIELD_NAME", "slots"),
            P(this, "CUSTOM_FIELD_NAME", "custom")
        }
        var t, n, r;
        return t = e,
        (n = [{
            key: "updateData",
            value: function(e) {
                var t = JSON.parse(e)
                  , n = t[this.BRAND_SAFETY_OBJECT_FIELD_NAME]
                  , r = t[this.SLOTS_OBJECT_FIELD_NAME]
                  , a = t[this.CUSTOM_FIELD_NAME];
                t[this.FRAUD_FIELD_NAME] && (this.cachedPageData[this.FRAUD_FIELD_NAME] = t[this.FRAUD_FIELD_NAME]);
                var i = function(e, t) {
                    b.forIn(e, function(e, n) {
                        t[e] = n
                    })
                };
                i(n, this.cachedPageData),
                i(r, this.cachedSlotsData),
                i(a, this.cachedCustomData)
            }
        }, {
            key: "clearCaches",
            value: function() {
                this.cachedPageData = {},
                this.cachedSlotsData = {},
                this.cachedCustomData = {}
            }
        }, {
            key: "setTargeting",
            value: function() {
                var e = this;
                return function() {
                    if (i.apntag && i.apntag.requests && i.apntag.requests.tags) {
                        var t = apntag.requests.tags;
                        Object.keys(t).map(function(t) {
                            apntag.setKeywords(t, e.cachedPageData),
                            apntag.setKeywords(t, e.cachedSlotsData[t]),
                            apntag.setKeywords(t, e.cachedCustomData)
                        })
                    } else
                        c.error("apntag is not available. Cannot set keyword targeting for AppNexus.")
                }
            }
        }]) && T(t.prototype, n),
        r && T(t, r),
        e
    }());
    function k(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    var C = function() {
        function e() {
            var t, n, r;
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            r = {},
            (n = "requestStatusDict")in (t = this) ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = r
        }
        var t, n, o;
        return t = e,
        (n = [{
            key: "reportLongRequest",
            value: function(e) {
                var t = this;
                return setTimeout(function() {
                    t.requestStatusDict[e] || (c.diagPix(f, {
                        message: "threshold:2000"
                    }),
                    c.warn("Long PET request that exceeds 2000ms."))
                }, 2e3)
            }
        }, {
            key: "reportResponseTime",
            value: function(e) {
                var t, n, r = this, a = c.getQueryParamByName("iasprofileprobability") || 10, i = {};
                b.chance(a) && setTimeout(function() {
                    t = r.requestStatusDict[e],
                    n = t && t - e,
                    i.responsetime = n,
                    i.probability = a,
                    c.diagPix(h, {
                        message: c.buildQueryString(i, ":")
                    })
                }, 2e3)
            }
        }, {
            key: "send",
            value: function(e, t) {
                var n, r, a, i = this, o = !1, s = c.getQueryParamByName("iasendpoint") || "//pixel.adsafeprotected.com/services/pub", u = this.buildQueryStrings(), l = b.isFn(e);
                u && (n = function(t) {
                    o = b.now(),
                    c.log("PET response " + t),
                    i.requestStatusDict[r] = o,
                    D.updateData(t),
                    x.updateData(t),
                    l && e(t),
                    clearTimeout(a)
                }
                ,
                r = b.now(),
                this.requestStatusDict[r] = !1,
                b.sendXHR(s, u, n, t),
                a = this.reportLongRequest(r),
                this.reportResponseTime(r),
                A.clear())
            }
        }, {
            key: "stringifySize",
            value: function(e) {
                return e.width + "." + e.height
            }
        }, {
            key: "buildQueryStrings",
            value: function() {
                var e = []
                  , t = i.__iasPET.pubId
                  , n = this.stringifySize(r(i))
                  , o = this.stringifySize(a(i))
                  , s = i.__iasPET.sessionId
                  , u = window.location.href;
                if (window.context && window.context.domFingerprint.match(/amp/g) && (u = u || i.document.referrer),
                !A.isEmpty() && t)
                    return e.push("anId=" + t),
                    e.push(A.stringify()),
                    e.push("wr=" + n),
                    e.push("sr=" + o),
                    e.push("sessionId=" + s),
                    e.push("url=" + encodeURIComponent(u)),
                    c.log("ad slots set: " + JSON.stringify(A)),
                    c.log("anid set: " + t),
                    e.join("&");
                A.isEmpty() && c.error("Expected valid ad slot configuration."),
                t || c.error("Expecting valid IAS publisher id."),
                c.diagPix(d)
            }
        }]) && k(t.prototype, n),
        o && k(t, o),
        e
    }();
    function O(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    function R(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var N = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            R(this, "timeout", null),
            R(this, "dataHandler", null),
            R(this, "outputManager", null),
            R(this, "commands", null),
            this.outputManager = new C,
            this.commands = this.commands || i.__iasPET.queue;
            var t = this;
            this.commands.push = function(e) {
                var n;
                try {
                    if (b.isFn(e))
                        n = e();
                    else {
                        if (!b.isObj(e))
                            throw Error("Items pushed into the queue must be a function or object");
                        n = e
                    }
                } catch (e) {
                    c.error("Error processing queued command: " + e.message)
                }
                t.setFromConfig(n),
                t.outputManager.send(t.dataHandler, t.timeout)
            }
        }
        var t, n, r;
        return t = e,
        (n = [{
            key: "executeCommands",
            value: function() {
                var e, t;
                if (this.commands = this.commands || i.__iasPET.queue,
                this.commands && this.commands.length) {
                    for (e = 0; e < this.commands.length; ++e) {
                        try {
                            b.isFn(this.commands[e]) ? t = this.commands[e]() : b.isObj(this.commands[e]) && (t = this.commands[e])
                        } catch (e) {
                            c.error("Error processing queued command: " + e.message)
                        }
                        this.setFromConfig(t)
                    }
                    this.outputManager.send(this.dataHandler, this.timeout)
                }
            }
        }, {
            key: "setFromConfig",
            value: function(e) {
                e && (this.dataHandler = b.isFn(e.dataHandler) ? e.dataHandler : this.dataHandler,
                this.timeout = e.timeout || this.timeout,
                A.setAdSlots(e))
            }
        }]) && O(t.prototype, n),
        r && O(t, r),
        e
    }();
    function j(e) {
        return (j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function L(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    function F(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var M = function() {
        var e, t, n;
        function r() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, r),
            F(this, "adServer", void 0),
            F(this, "iframesHtmlContents", {}),
            F(this, "topRequests", [{
                id: "isRefreshable",
                handler: function(e, t) {
                    var n = e.identifyAdServer(e.adServerList);
                    t.source.postMessage(JSON.stringify(n), t.origin)
                }
            }, {
                id: "recordAdSlotImpression",
                handler: function(e, t, n) {
                    try {
                        var r = e.getAdServer()
                          , a = r.getAllAdSlots();
                        r.findAdSlotByAdUnitId(a, n.adUnitId, function(r, a) {
                            !r && a ? e.recordAdSlotImpression(t, n.asid, n.adUnitId, a, n.cacheId) : c.warn("Unable to find adSlot by adUnitId", r)
                        }, e.getIframesHtmlContents(), n.cacheId)
                    } catch (e) {
                        c.error(e)
                    }
                }
            }, {
                id: "refreshAd",
                handler: function(e, t, n) {
                    try {
                        var r = e.getAdServer()
                          , a = n && n.adUnitId;
                        r.refresh(r.findAdSlotByCacheId(n.cacheId), a)
                    } catch (e) {
                        c.error(e)
                    }
                }
            }]),
            F(this, "adServerList", [{
                adServerName: "GPT",
                available: function() {
                    return !!(i.googletag && i.googletag.apiReady && i.googletag.pubads && "function" == typeof i.googletag.pubads)
                },
                findAdSlotByCacheId: function(e) {
                    var t = Object.keys(o.__IntegralASExec.adSlotData).filter(function(t) {
                        return o.__IntegralASExec.adSlotData[t].adSlot.cacheId === e
                    })[0];
                    return o.__IntegralASExec && o.__IntegralASExec.adSlotData && o.__IntegralASExec.adSlotData[t] && o.__IntegralASExec.adSlotData[t].adSlot || null
                },
                getAdSlot: function(e) {
                    return o.__IntegralASExec && o.__IntegralASExec.adSlotData && o.__IntegralASExec.adSlotData[e] && o.__IntegralASExec.adSlotData[e].adSlot || null
                },
                getAllAdSlots: function() {
                    var e = i.googletag.pubads && "function" == typeof i.googletag.pubads && i.googletag.pubads();
                    return e && "function" == typeof e.getSlots && e.getSlots()
                },
                isAdUnitIdInSlot: function(e, t, n) {
                    var r = null
                      , a = new RegExp("&chanId=".concat(t, "&"),"g")
                      , i = new RegExp("".concat(n),"gim")
                      , o = e && e.iasHtml && "string" == typeof e.iasHtml && e.iasHtml || null
                      , s = a.test(o)
                      , u = i.test(o);
                    return o && s && u && (r = e),
                    r
                },
                updateUnsafeAdSlots: function(e, t) {
                    var n = JSON.parse(JSON.stringify(t));
                    return e.forEach(function(e) {
                        var r = ["google_ads_iframe_".concat(e.getSlotId().toString()), "google_ads_iframe".concat(e.getSlotId().toString())].filter(function(e) {
                            return Boolean(i.document.getElementById(e)) && !t.hasOwnProperty(e)
                        })[0]
                          , a = i.document.getElementById(r) || null;
                        if (a)
                            try {
                                var o = a.contentDocument || a.contentWindow && a.contentWindow.document;
                                o && Object.defineProperty(n, r, {
                                    value: o.body.innerHTML,
                                    enumerable: !0,
                                    writable: !0
                                })
                            } catch (e) {
                                c.warn("Unable to access the unsafe iframe html contents", e)
                            }
                    }),
                    n
                },
                matchAdSlotHtml: function(e, t) {
                    if (!e)
                        return null;
                    var n, r, a, i = this.updateUnsafeAdSlots(e, t), o = Object.keys(i).map(function(e) {
                        return i[e]
                    });
                    return e.forEach(function(e) {
                        n = e.getEscapedQemQueryId(),
                        a = new RegExp("".concat(n),"g"),
                        e.iasHtml = o.filter(function(e) {
                            return a.test(e)
                        })[0] || null,
                        e.iasHtml || (r = new RegExp("".concat(e.getSlotId().toString()),"g"),
                        Object.keys(i).forEach(function(t) {
                            r.test(t) && (e.iasHtml = i[t])
                        }))
                    }),
                    e
                },
                findAdSlotByAdUnitId: function(e, t, n, r, a) {
                    var i = this.matchAdSlotHtml(e, r);
                    if (i && Array.isArray(i)) {
                        var o, s = null;
                        for (o = 0; o < i.length; o += 1)
                            if (s = this.isAdUnitIdInSlot(i[o], t, a)) {
                                n(null, s);
                                break
                            }
                        s || n(new Error("Ad Slot Not Found"))
                    } else
                        n(new Error("slots or ad unit id missing from request"))
                },
                refresh: function(e, t) {
                    var n = i.googletag && i.googletag.cmd
                      , r = i.googletag && i.googletag.pubads && "function" == typeof i.googletag.pubads && i.googletag.pubads();
                    n && r && "function" == typeof r.refresh && e && !this.isAdSlotExcluded(e, t) && (this.setRefreshTargeting(e, t),
                    n.push(function() {
                        r.refresh([e])
                    }))
                },
                setRefreshTargeting: function(e, t) {
                    var n = "AD_UNIT_".concat(t, "__").concat(e.getSlotId().toString());
                    i.__iasAdRefreshConfig.refreshTargeting && i.__iasAdRefreshConfig.refreshTargeting.enabled && i.__IntegralASExec.adSlotData.hasOwnProperty(n) && ("string" == typeof i.__iasAdRefreshConfig.refreshTargeting.targetingKey && i.__iasAdRefreshConfig.refreshTargeting.targetingKey.trim() ? e.setTargeting(i.__iasAdRefreshConfig.refreshTargeting.targetingKey.trim(), i.__IntegralASExec.adSlotData[n].refreshCount + 1) : c.warn("Invalid refresh targeting key specficied in config"))
                },
                buildAndValidateExtras: function(e, t, n) {
                    var r = !1;
                    if ("adSize" === e) {
                        var a = t.map(function(e) {
                            return "&campId=".concat(e, "&")
                        });
                        r = new RegExp("(".concat(a.join("|"), ")"),"g").test(n)
                    }
                    if (/^custom/.test(e)) {
                        var i = t.map(function(t) {
                            return "&".concat(e, "=").concat(t)
                        });
                        r = new RegExp("(".concat(i.join("|"), ")"),"g").test(n)
                    }
                    return r
                },
                isAdSlotExcluded: function(e, t) {
                    var n = this
                      , r = e.getResponseInformation()
                      , a = i.__iasAdRefreshConfig.excludeList ? JSON.parse(JSON.stringify(i.__iasAdRefreshConfig.excludeList)) : null
                      , o = !1;
                    return r.adUnitId = NaN !== Number(t) ? Number(t) : t,
                    r.chanId = r.adUnitId,
                    a && Object.keys(a).forEach(function(t) {
                        Array.isArray(a[t]) || "object" === j(a[t]) || (a[t] = [a[t]]),
                        r.hasOwnProperty(t) && a[t].indexOf(r[t]) > -1 && (o = !0),
                        ("adSize" === t || /^custom/.test(t)) && (o = n.buildAndValidateExtras(t, a[t], e.iasHtml))
                    }),
                    o
                }
            }]);
            var e = this;
            i.__iasAdRefreshConfig = i.__iasAdRefreshConfig || {},
            o.addEventListener("message", function(t) {
                e.setIframesHtmlContents(),
                /requestTop/g.test(t.data) && e.handleTopRequests(t)
            })
        }
        return e = r,
        (t = [{
            key: "getAdServer",
            value: function() {
                return this.adServer
            }
        }, {
            key: "setAdServer",
            value: function(e) {
                this.adServer = e
            }
        }, {
            key: "identifyAdServer",
            value: function(e) {
                for (var t = 0; t < e.length; t += 1)
                    if (e[t].adServerName && e[t].available && "function" == typeof e[t].available && e[t].available())
                        return this.setAdServer(e[t]),
                        {
                            isRefreshable: !0,
                            adServerName: e[t].adServerName
                        };
                return {
                    isRefreshable: !1,
                    adServerName: null
                }
            }
        }, {
            key: "findAdServerByName",
            value: function(e) {
                for (var t = 0; t < this.adServerList.length; t += 1)
                    if (this.adServerList[t].adServerName === e)
                        return this.adServerList[t];
                return null
            }
        }, {
            key: "getTopRequestById",
            value: function(e) {
                for (var t = null, n = 0; n < this.topRequests.length; n += 1)
                    if (e === this.topRequests[n].id) {
                        t = this.topRequests[n];
                        break
                    }
                return t
            }
        }, {
            key: "handleTopRequests",
            value: function(e) {
                var t, n = JSON.parse(e.data);
                n && n.requestTop && (t = this.getTopRequestById(n.requestTop)) && t.handler && "function" == typeof t.handler && t.handler(this, e, n)
            }
        }, {
            key: "getAdSlotDataIdForAdUnitId",
            value: function(e) {
                return "AD_UNIT_" + e
            }
        }, {
            key: "recordAdSlotImpression",
            value: function(e, t, n, r, a) {
                try {
                    var i = "".concat(this.getAdSlotDataIdForAdUnitId(n), "__").concat(r.getSlotId().toString());
                    r.cacheId = a,
                    o.__IntegralASExec = o.__IntegralASExec || {},
                    o.__IntegralASExec.adSlotData = o.__IntegralASExec.adSlotData || {},
                    o.__IntegralASExec.adSlotData.hasOwnProperty(i) ? o.__IntegralASExec.adSlotData[i].refreshCount += 1 : o.__IntegralASExec.adSlotData[i] = {
                        refreshCount: 0,
                        refreshSessionId: t,
                        adSlot: r
                    },
                    this.sendRefreshSession(e, o.__IntegralASExec.adSlotData[i], i)
                } catch (e) {
                    c.error("Unable to record ad slot impression", e)
                }
            }
        }, {
            key: "sendRefreshSession",
            value: function(e, t) {
                var n = {
                    requestId: "refreshSession",
                    refreshCount: t.refreshCount,
                    refreshSessionId: t.refreshSessionId
                };
                e.source.postMessage(JSON.stringify(n), e.origin)
            }
        }, {
            key: "setIframesHtmlContents",
            value: function() {
                var e = this;
                o.ampInaboxIframes && o.ampInaboxIframes.forEach(function(t) {
                    try {
                        (Boolean(t.getAttribute("data-is-safeframe")) || Boolean(t.getAttribute("sandbox"))) && t.name && (e.iframesHtmlContents[t.id] = t.name)
                    } catch (e) {
                        c.warn("Unable to access the safe iframe html contents", e)
                    }
                })
            }
        }, {
            key: "getIframesHtmlContents",
            value: function() {
                return this.iframesHtmlContents
            }
        }]) && L(e.prototype, t),
        n && L(e, n),
        r
    }();
    var U = function e() {
        if (function(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }(this, e),
        i.__iasPET.queue = i.__iasPET.queue || [],
        i.__iasPET.VERSION = "1.16.34",
        i.__iasPET.setTargetingForGPT = D.setTargeting(),
        i.__iasPET.setTargetingForAppNexus = x.setTargeting(),
        "undefined" != typeof XMLHttpRequest) {
            i.__iasPET.sessionId = b.getUID(),
            (new N).executeCommands();
            new M
        } else
            c.diagPix(g)
    };
    n.d(t, "start", function() {
        return q
    });
    var q = function() {
        try {
            new U
        } catch (e) {
            c.error(e.message)
        }
    };
    i.__iasPET = window.__iasPET || {},
    i.__iasPET.start = window.__iasPET.start || q,
    i.__iasPET.start()
}
]);
