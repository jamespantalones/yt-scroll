(function(t, e, n) {
    "use strict";
    function r(t) {
        return function() {
            var e = arguments[0], n, e = "[" + (t ? t + ":" : "") + e + "] http://errors.angularjs.org/1.2.26/" + (t ? t + "/" : "") + e;
            for (n = 1; n < arguments.length; n++) e = e + (1 == n ? "?" : "&") + "p" + (n - 1) + "=" + encodeURIComponent("function" == typeof arguments[n] ? arguments[n].toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof arguments[n] ? "undefined" : "string" != typeof arguments[n] ? JSON.stringify(arguments[n]) : arguments[n]);
            return Error(e);
        };
    }
    function i(t) {
        if (null == t || k(t)) return !1;
        var e = t.length;
        return 1 === t.nodeType && e ? !0 : b(t) || ir(t) || 0 === e || "number" === typeof e && 0 < e && e - 1 in t;
    }
    function o(t, e, n) {
        var r;
        if (t) if (j(t)) for (r in t) "prototype" == r || ("length" == r || "name" == r || t.hasOwnProperty && !t.hasOwnProperty(r)) || e.call(n, t[r], r); else if (ir(t) || i(t)) for (r = 0; r < t.length; r++) e.call(n, t[r], r); else if (t.forEach && t.forEach !== o) t.forEach(e, n); else for (r in t) t.hasOwnProperty(r) && e.call(n, t[r], r);
        return t;
    }
    function s(t) {
        var e = [], n;
        for (n in t) t.hasOwnProperty(n) && e.push(n);
        return e.sort();
    }
    function u(t, e, n) {
        for (var r = s(t), i = 0; i < r.length; i++) e.call(n, t[r[i]], r[i]);
        return r;
    }
    function a(t) {
        return function(e, n) {
            t(n, e);
        };
    }
    function c() {
        for (var t = rr.length, e; t; ) {
            t--;
            e = rr[t].charCodeAt(0);
            if (57 == e) return rr[t] = "A", rr.join("");
            if (90 == e) rr[t] = "0"; else return rr[t] = String.fromCharCode(e + 1), rr.join("");
        }
        rr.unshift("0");
        return rr.join("");
    }
    function l(t, e) {
        e ? t.$$hashKey = e : delete t.$$hashKey;
    }
    function f(t) {
        var e = t.$$hashKey;
        o(arguments, function(e) {
            e !== t && o(e, function(e, n) {
                t[n] = e;
            });
        });
        l(t, e);
        return t;
    }
    function p(t) {
        return parseInt(t, 10);
    }
    function h(t, e) {
        return f(new (f(function() {}, {
            prototype: t
        }))(), e);
    }
    function d() {}
    function v(t) {
        return t;
    }
    function m(t) {
        return function() {
            return t;
        };
    }
    function g(t) {
        return "undefined" === typeof t;
    }
    function y(t) {
        return "undefined" !== typeof t;
    }
    function _(t) {
        return null != t && "object" === typeof t;
    }
    function b(t) {
        return "string" === typeof t;
    }
    function w(t) {
        return "number" === typeof t;
    }
    function x(t) {
        return "[object Date]" === Xn.call(t);
    }
    function j(t) {
        return "function" === typeof t;
    }
    function S(t) {
        return "[object RegExp]" === Xn.call(t);
    }
    function k(t) {
        return t && t.document && t.location && t.alert && t.setInterval;
    }
    function T(t) {
        return !(!t || !(t.nodeName || t.prop && t.attr && t.find));
    }
    function E(t, e, n) {
        var r = [];
        o(t, function(t, i, o) {
            r.push(e.call(n, t, i, o));
        });
        return r;
    }
    function C(t, e) {
        if (t.indexOf) return t.indexOf(e);
        for (var n = 0; n < t.length; n++) if (e === t[n]) return n;
        return -1;
    }
    function A(t, e) {
        var n = C(t, e);
        0 <= n && t.splice(n, 1);
        return e;
    }
    function O(t, e, n, r) {
        if (k(t) || t && t.$evalAsync && t.$watch) throw Zn("cpws");
        if (e) {
            if (t === e) throw Zn("cpi");
            n = n || [];
            r = r || [];
            if (_(t)) {
                var i = C(n, t);
                if (-1 !== i) return r[i];
                n.push(t);
                r.push(e);
            }
            if (ir(t)) for (var s = e.length = 0; s < t.length; s++) i = O(t[s], null, n, r), 
            _(t[s]) && (n.push(t[s]), r.push(i)), e.push(i); else {
                var u = e.$$hashKey;
                ir(e) ? e.length = 0 : o(e, function(t, n) {
                    delete e[n];
                });
                for (s in t) i = O(t[s], null, n, r), _(t[s]) && (n.push(t[s]), r.push(i)), e[s] = i;
                l(e, u);
            }
        } else if (e = t) ir(t) ? e = O(t, [], n, r) : x(t) ? e = new Date(t.getTime()) : S(t) ? (e = RegExp(t.source, t.toString().match(/[^\/]*$/)[0]), 
        e.lastIndex = t.lastIndex) : _(t) && (e = O(t, {}, n, r));
        return e;
    }
    function P(t, e) {
        if (ir(t)) {
            e = e || [];
            for (var n = 0; n < t.length; n++) e[n] = t[n];
        } else if (_(t)) for (n in e = e || {}, t) !Bn.call(t, n) || "$" === n.charAt(0) && "$" === n.charAt(1) || (e[n] = t[n]);
        return e || t;
    }
    function R(t, e) {
        if (t === e) return !0;
        if (null === t || null === e) return !1;
        if (t !== t && e !== e) return !0;
        var r = typeof t, i;
        if (r == typeof e && "object" == r) if (ir(t)) {
            if (!ir(e)) return !1;
            if ((r = t.length) == e.length) {
                for (i = 0; i < r; i++) if (!R(t[i], e[i])) return !1;
                return !0;
            }
        } else {
            if (x(t)) return x(e) ? isNaN(t.getTime()) && isNaN(e.getTime()) || t.getTime() === e.getTime() : !1;
            if (S(t) && S(e)) return t.toString() == e.toString();
            if (t && t.$evalAsync && t.$watch || e && e.$evalAsync && e.$watch || k(t) || k(e) || ir(e)) return !1;
            r = {};
            for (i in t) if ("$" !== i.charAt(0) && !j(t[i])) {
                if (!R(t[i], e[i])) return !1;
                r[i] = !0;
            }
            for (i in e) if (!r.hasOwnProperty(i) && "$" !== i.charAt(0) && e[i] !== n && !j(e[i])) return !1;
            return !0;
        }
        return !1;
    }
    function F(t, e) {
        var n = 2 < arguments.length ? Qn.call(arguments, 2) : [];
        return !j(e) || e instanceof RegExp ? e : n.length ? function() {
            return arguments.length ? e.apply(t, n.concat(Qn.call(arguments, 0))) : e.apply(t, n);
        } : function() {
            return arguments.length ? e.apply(t, arguments) : e.call(t);
        };
    }
    function M(t, r) {
        var i = r;
        "string" === typeof t && "$" === t.charAt(0) ? i = n : k(r) ? i = "$WINDOW" : r && e === r ? i = "$DOCUMENT" : r && (r.$evalAsync && r.$watch) && (i = "$SCOPE");
        return i;
    }
    function N(t, e) {
        return "undefined" === typeof t ? n : JSON.stringify(t, M, e ? "  " : null);
    }
    function I(t) {
        return b(t) ? JSON.parse(t) : t;
    }
    function q(t) {
        "function" === typeof t ? t = !0 : t && 0 !== t.length ? (t = zn("" + t), t = !("f" == t || "0" == t || "false" == t || "no" == t || "n" == t || "[]" == t)) : t = !1;
        return t;
    }
    function D(t) {
        t = Gn(t).clone();
        try {
            t.empty();
        } catch (e) {}
        var n = Gn("<div>").append(t).html();
        try {
            return 3 === t[0].nodeType ? zn(n) : n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(t, e) {
                return "<" + zn(e);
            });
        } catch (r) {
            return zn(n);
        }
    }
    function H(t) {
        try {
            return decodeURIComponent(t);
        } catch (e) {}
    }
    function V(t) {
        var e = {}, n, r;
        o((t || "").split("&"), function(t) {
            t && (n = t.replace(/\+/g, "%20").split("="), r = H(n[0]), y(r) && (t = y(n[1]) ? H(n[1]) : !0, 
            Bn.call(e, r) ? ir(e[r]) ? e[r].push(t) : e[r] = [ e[r], t ] : e[r] = t));
        });
        return e;
    }
    function U(t) {
        var e = [];
        o(t, function(t, n) {
            ir(t) ? o(t, function(t) {
                e.push(z(n, !0) + (!0 === t ? "" : "=" + z(t, !0)));
            }) : e.push(z(n, !0) + (!0 === t ? "" : "=" + z(t, !0)));
        });
        return e.length ? e.join("&") : "";
    }
    function L(t) {
        return z(t, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
    }
    function z(t, e) {
        return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, e ? "%20" : "+");
    }
    function B(t, n) {
        function r(t) {
            t && i.push(t);
        }
        var i = [ t ], s, u, a = [ "ng:app", "ng-app", "x-ng-app", "data-ng-app" ], c = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
        o(a, function(n) {
            a[n] = !0;
            r(e.getElementById(n));
            n = n.replace(":", "\\:");
            t.querySelectorAll && (o(t.querySelectorAll("." + n), r), o(t.querySelectorAll("." + n + "\\:"), r), 
            o(t.querySelectorAll("[" + n + "]"), r));
        });
        o(i, function(t) {
            if (!s) {
                var e = c.exec(" " + t.className + " ");
                e ? (s = t, u = (e[2] || "").replace(/\s+/g, ",")) : o(t.attributes, function(e) {
                    !s && a[e.name] && (s = t, u = e.value);
                });
            }
        });
        s && n(s, u ? [ u ] : []);
    }
    function W(n, r) {
        var i = function() {
            n = Gn(n);
            if (n.injector()) {
                var t = n[0] === e ? "document" : D(n);
                throw Zn("btstrpd", t.replace(/</, "&lt;").replace(/>/, "&gt;"));
            }
            r = r || [];
            r.unshift([ "$provide", function(t) {
                t.value("$rootElement", n);
            } ]);
            r.unshift("ng");
            t = we(r);
            t.invoke([ "$rootScope", "$rootElement", "$compile", "$injector", "$animate", function(t, e, n, r, i) {
                t.$apply(function() {
                    e.data("$injector", r);
                    n(e)(t);
                });
            } ]);
            return t;
        }, s = /^NG_DEFER_BOOTSTRAP!/;
        if (t && !s.test(t.name)) return i();
        t.name = t.name.replace(s, "");
        tr.resumeBootstrap = function(t) {
            o(t, function(t) {
                r.push(t);
            });
            i();
        };
    }
    function Y(t, e) {
        e = e || "_";
        return t.replace(ur, function(t, n) {
            return (n ? e : "") + t.toLowerCase();
        });
    }
    function G(t, e, n) {
        if (!t) throw Zn("areq", e || "?", n || "required");
        return t;
    }
    function K(t, e, n) {
        n && ir(t) && (t = t[t.length - 1]);
        G(j(t), e, "not a function, got " + (t && "object" === typeof t ? t.constructor.name || "Object" : typeof t));
        return t;
    }
    function Q(t, e) {
        if ("hasOwnProperty" === t) throw Zn("badname", e);
    }
    function J(t, e, n) {
        if (!e) return t;
        e = e.split(".");
        for (var r, i = t, o = e.length, s = 0; s < o; s++) r = e[s], t && (t = (i = t)[r]);
        return !n && j(t) ? F(i, t) : t;
    }
    function X(t) {
        var e = t[0];
        t = t[t.length - 1];
        if (e === t) return Gn(e);
        var n = [ e ];
        do {
            e = e.nextSibling;
            if (!e) break;
            n.push(e);
        } while (e !== t);
        return Gn(n);
    }
    function Z(t) {
        var e = r("$injector"), n = r("ng");
        t = t.angular || (t.angular = {});
        t.$$minErr = t.$$minErr || r;
        return t.module || (t.module = function() {
            var t = {};
            return function(r, i, o) {
                if ("hasOwnProperty" === r) throw n("badname", "module");
                i && t.hasOwnProperty(r) && (t[r] = null);
                return t[r] || (t[r] = function() {
                    function t(t, e, r) {
                        return function() {
                            n[r || "push"]([ t, e, arguments ]);
                            return a;
                        };
                    }
                    if (!i) throw e("nomod", r);
                    var n = [], s = [], u = t("$injector", "invoke"), a = {
                        _invokeQueue: n,
                        _runBlocks: s,
                        requires: i,
                        name: r,
                        provider: t("$provide", "provider"),
                        factory: t("$provide", "factory"),
                        service: t("$provide", "service"),
                        value: t("$provide", "value"),
                        constant: t("$provide", "constant", "unshift"),
                        animation: t("$animateProvider", "register"),
                        filter: t("$filterProvider", "register"),
                        controller: t("$controllerProvider", "register"),
                        directive: t("$compileProvider", "directive"),
                        config: u,
                        run: function(t) {
                            s.push(t);
                            return this;
                        }
                    };
                    o && u(o);
                    return a;
                }());
            };
        }());
    }
    function te(e) {
        f(e, {
            bootstrap: W,
            copy: O,
            extend: f,
            equals: R,
            element: Gn,
            forEach: o,
            injector: we,
            noop: d,
            bind: F,
            toJson: N,
            fromJson: I,
            identity: v,
            isUndefined: g,
            isDefined: y,
            isString: b,
            isFunction: j,
            isObject: _,
            isNumber: w,
            isElement: T,
            isArray: ir,
            version: ar,
            isDate: x,
            lowercase: zn,
            uppercase: Wn,
            callbacks: {
                counter: 0
            },
            $$minErr: r,
            $$csp: sr
        });
        er = Z(t);
        try {
            er("ngLocale");
        } catch (n) {
            er("ngLocale", []).provider("$locale", ze);
        }
        er("ng", [ "ngLocale" ], [ "$provide", function(t) {
            t.provider({
                $$sanitizeUri: vn
            });
            t.provider("$compile", Ce).directive({
                a: ii,
                input: vi,
                textarea: vi,
                form: ai,
                script: Ji,
                select: to,
                style: no,
                option: eo,
                ngBind: Ti,
                ngBindHtml: Ci,
                ngBindTemplate: Ei,
                ngClass: Ai,
                ngClassEven: Pi,
                ngClassOdd: Oi,
                ngCloak: Ri,
                ngController: Fi,
                ngForm: ci,
                ngHide: Bi,
                ngIf: Ii,
                ngInclude: qi,
                ngInit: Hi,
                ngNonBindable: Vi,
                ngPluralize: Ui,
                ngRepeat: Li,
                ngShow: zi,
                ngStyle: Wi,
                ngSwitch: Yi,
                ngSwitchWhen: Gi,
                ngSwitchDefault: Ki,
                ngOptions: Zi,
                ngTransclude: Qi,
                ngModel: bi,
                ngList: ji,
                ngChange: wi,
                required: xi,
                ngRequired: xi,
                ngValue: ki
            }).directive({
                ngInclude: Di
            }).directive(oi).directive(Mi);
            t.provider({
                $anchorScroll: xe,
                $animate: Ar,
                $browser: ke,
                $cacheFactory: Te,
                $controller: Pe,
                $document: Re,
                $exceptionHandler: Fe,
                $filter: Sn,
                $interpolate: Ue,
                $interval: Le,
                $http: qe,
                $httpBackend: He,
                $location: nn,
                $log: rn,
                $parse: ln,
                $rootScope: dn,
                $q: fn,
                $sce: $n,
                $sceDelegate: yn,
                $sniffer: _n,
                $templateCache: Ee,
                $timeout: bn,
                $window: jn,
                $$rAF: hn,
                $$asyncCallback: je
            });
        } ]);
    }
    function ee(t) {
        return t.replace(hr, function(t, e, n, r) {
            return r ? n.toUpperCase() : n;
        }).replace(dr, "Moz$1");
    }
    function ne(t, e, n, r) {
        function i(t) {
            var i = n && t ? [ this.filter(t) ] : [ this ], s = e, u, a, c, l, f, p;
            if (!r || null != t) for (;i.length; ) for (u = i.shift(), a = 0, c = u.length; a < c; a++) for (l = Gn(u[a]), 
            s ? l.triggerHandler("$destroy") : s = !s, f = 0, l = (p = l.children()).length; f < l; f++) i.push(Kn(p[f]));
            return o.apply(this, arguments);
        }
        var o = Kn.fn[t], o = o.$original || o;
        i.$original = o;
        Kn.fn[t] = i;
    }
    function re(t) {
        if (t instanceof re) return t;
        b(t) && (t = or(t));
        if (!(this instanceof re)) {
            if (b(t) && "<" != t.charAt(0)) throw vr("nosel");
            return new re(t);
        }
        if (b(t)) {
            var n = t;
            t = e;
            var r;
            if (r = mr.exec(n)) t = [ t.createElement(r[1]) ]; else {
                var i = t, o;
                t = i.createDocumentFragment();
                r = [];
                if (gr.test(n)) {
                    i = t.appendChild(i.createElement("div"));
                    o = (yr.exec(n) || [ "", "" ])[1].toLowerCase();
                    o = _r[o] || _r._default;
                    i.innerHTML = "<div>&#160;</div>" + o[1] + n.replace($r, "<$1></$2>") + o[2];
                    i.removeChild(i.firstChild);
                    for (n = o[0]; n--; ) i = i.lastChild;
                    n = 0;
                    for (o = i.childNodes.length; n < o; ++n) r.push(i.childNodes[n]);
                    i = t.firstChild;
                    i.textContent = "";
                } else r.push(i.createTextNode(n));
                t.textContent = "";
                t.innerHTML = "";
                t = r;
            }
            he(this, t);
            Gn(e.createDocumentFragment()).append(this);
        } else he(this, t);
    }
    function ie(t) {
        return t.cloneNode(!0);
    }
    function oe(t) {
        ue(t);
        var e = 0;
        for (t = t.childNodes || []; e < t.length; e++) oe(t[e]);
    }
    function se(t, e, n, r) {
        if (y(r)) throw vr("offargs");
        var i = ae(t, "events");
        ae(t, "handle") && (g(e) ? o(i, function(e, n) {
            pr(t, n, e);
            delete i[n];
        }) : o(e.split(" "), function(e) {
            g(n) ? (pr(t, e, i[e]), delete i[e]) : A(i[e] || [], n);
        }));
    }
    function ue(t, e) {
        var r = t.ng339, i = cr[r];
        i && (e ? delete cr[r].data[e] : (i.handle && (i.events.$destroy && i.handle({}, "$destroy"), 
        se(t)), delete cr[r], t.ng339 = n));
    }
    function ae(t, e, n) {
        var r = t.ng339, r = cr[r || -1];
        if (y(n)) r || (t.ng339 = r = ++lr, r = cr[r] = {}), r[e] = n; else return r && r[e];
    }
    function ce(t, e, n) {
        var r = ae(t, "data"), i = y(n), o = !i && y(e), s = o && !_(e);
        r || s || ae(t, "data", r = {});
        if (i) r[e] = n; else if (o) {
            if (s) return r && r[e];
            f(r, e);
        } else return r;
    }
    function le(t, e) {
        return t.getAttribute ? -1 < (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + e + " ") : !1;
    }
    function fe(t, e) {
        e && t.setAttribute && o(e.split(" "), function(e) {
            t.setAttribute("class", or((" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + or(e) + " ", " ")));
        });
    }
    function pe(t, e) {
        if (e && t.setAttribute) {
            var n = (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            o(e.split(" "), function(t) {
                t = or(t);
                -1 === n.indexOf(" " + t + " ") && (n += t + " ");
            });
            t.setAttribute("class", or(n));
        }
    }
    function he(t, e) {
        if (e) {
            e = e.nodeName || !y(e.length) || k(e) ? [ e ] : e;
            for (var n = 0; n < e.length; n++) t.push(e[n]);
        }
    }
    function de(t, e) {
        return ve(t, "$" + (e || "ngController") + "Controller");
    }
    function ve(t, e, r) {
        9 == t.nodeType && (t = t.documentElement);
        for (e = ir(e) ? e : [ e ]; t; ) {
            for (var i = 0, o = e.length; i < o; i++) if ((r = Gn.data(t, e[i])) !== n) return r;
            t = t.parentNode || 11 === t.nodeType && t.host;
        }
    }
    function me(t) {
        for (var e = 0, n = t.childNodes; e < n.length; e++) oe(n[e]);
        for (;t.firstChild; ) t.removeChild(t.firstChild);
    }
    function ge(t, e) {
        var n = wr[e.toLowerCase()];
        return n && xr[t.nodeName] && n;
    }
    function ye(t, n) {
        var r = function(r, i) {
            r.preventDefault || (r.preventDefault = function() {
                r.returnValue = !1;
            });
            r.stopPropagation || (r.stopPropagation = function() {
                r.cancelBubble = !0;
            });
            r.target || (r.target = r.srcElement || e);
            if (g(r.defaultPrevented)) {
                var s = r.preventDefault;
                r.preventDefault = function() {
                    r.defaultPrevented = !0;
                    s.call(r);
                };
                r.defaultPrevented = !1;
            }
            r.isDefaultPrevented = function() {
                return r.defaultPrevented || !1 === r.returnValue;
            };
            var u = P(n[i || r.type] || []);
            o(u, function(e) {
                e.call(t, r);
            });
            8 >= Yn ? (r.preventDefault = null, r.stopPropagation = null, r.isDefaultPrevented = null) : (delete r.preventDefault, 
            delete r.stopPropagation, delete r.isDefaultPrevented);
        };
        r.elem = t;
        return r;
    }
    function $e(t, e) {
        var r = typeof t, i;
        "function" == r || "object" == r && null !== t ? "function" == typeof (i = t.$$hashKey) ? i = t.$$hashKey() : i === n && (i = t.$$hashKey = (e || c)()) : i = t;
        return r + ":" + i;
    }
    function _e(t, e) {
        if (e) {
            var n = 0;
            this.nextUid = function() {
                return ++n;
            };
        }
        o(t, this.put, this);
    }
    function be(t) {
        var e, n;
        "function" === typeof t ? (e = t.$inject) || (e = [], t.length && (n = t.toString().replace(Tr, ""), 
        n = n.match(jr), o(n[1].split(Sr), function(t) {
            t.replace(kr, function(t, n, r) {
                e.push(r);
            });
        })), t.$inject = e) : ir(t) ? (n = t.length - 1, K(t[n], "fn"), e = t.slice(0, n)) : K(t, "fn", !0);
        return e;
    }
    function we(t) {
        function e(t) {
            return function(e, n) {
                if (_(e)) o(e, a(t)); else return t(e, n);
            };
        }
        function n(t, e) {
            Q(t, "service");
            if (j(e) || ir(e)) e = h.instantiate(e);
            if (!e.$get) throw Er("pget", t);
            return p[t + c] = e;
        }
        function r(t, e) {
            return n(t, {
                $get: e
            });
        }
        function i(t) {
            var e = [], n, r, s, u;
            o(t, function(t) {
                if (!f.get(t)) {
                    f.put(t, !0);
                    try {
                        if (b(t)) for (n = er(t), e = e.concat(i(n.requires)).concat(n._runBlocks), r = n._invokeQueue, 
                        s = 0, u = r.length; s < u; s++) {
                            var o = r[s], a = h.get(o[0]);
                            a[o[1]].apply(a, o[2]);
                        } else j(t) ? e.push(h.invoke(t)) : ir(t) ? e.push(h.invoke(t)) : K(t, "module");
                    } catch (c) {
                        throw ir(t) && (t = t[t.length - 1]), c.message && (c.stack && -1 == c.stack.indexOf(c.message)) && (c = c.message + "\n" + c.stack), 
                        Er("modulerr", t, c.stack || c.message || c);
                    }
                }
            });
            return e;
        }
        function s(t, e) {
            function n(n) {
                if (t.hasOwnProperty(n)) {
                    if (t[n] === u) throw Er("cdep", n + " <- " + l.join(" <- "));
                    return t[n];
                }
                try {
                    return l.unshift(n), t[n] = u, t[n] = e(n);
                } catch (r) {
                    throw t[n] === u && delete t[n], r;
                } finally {
                    l.shift();
                }
            }
            function r(t, e, r) {
                var i = [], o = be(t), s, u, a;
                u = 0;
                for (s = o.length; u < s; u++) {
                    a = o[u];
                    if ("string" !== typeof a) throw Er("itkn", a);
                    i.push(r && r.hasOwnProperty(a) ? r[a] : n(a));
                }
                ir(t) && (t = t[s]);
                return t.apply(e, i);
            }
            return {
                invoke: r,
                instantiate: function(t, e) {
                    var n = function() {}, i;
                    n.prototype = (ir(t) ? t[t.length - 1] : t).prototype;
                    n = new n();
                    i = r(t, n, e);
                    return _(i) || j(i) ? i : n;
                },
                get: n,
                annotate: be,
                has: function(e) {
                    return p.hasOwnProperty(e + c) || t.hasOwnProperty(e);
                }
            };
        }
        var u = {}, c = "Provider", l = [], f = new _e([], !0), p = {
            $provide: {
                provider: e(n),
                factory: e(r),
                service: e(function(t, e) {
                    return r(t, [ "$injector", function(t) {
                        return t.instantiate(e);
                    } ]);
                }),
                value: e(function(t, e) {
                    return r(t, m(e));
                }),
                constant: e(function(t, e) {
                    Q(t, "constant");
                    p[t] = e;
                    v[t] = e;
                }),
                decorator: function(t, e) {
                    var n = h.get(t + c), r = n.$get;
                    n.$get = function() {
                        var t = g.invoke(r, n);
                        return g.invoke(e, null, {
                            $delegate: t
                        });
                    };
                }
            }
        }, h = p.$injector = s(p, function() {
            throw Er("unpr", l.join(" <- "));
        }), v = {}, g = v.$injector = s(v, function(t) {
            t = h.get(t + c);
            return g.invoke(t.$get, t);
        });
        o(i(t), function(t) {
            g.invoke(t || d);
        });
        return g;
    }
    function xe() {
        var t = !0;
        this.disableAutoScrolling = function() {
            t = !1;
        };
        this.$get = [ "$window", "$location", "$rootScope", function(e, n, r) {
            function i(t) {
                var e = null;
                o(t, function(t) {
                    e || "a" !== zn(t.nodeName) || (e = t);
                });
                return e;
            }
            function s() {
                var t = n.hash(), r;
                t ? (r = u.getElementById(t)) ? r.scrollIntoView() : (r = i(u.getElementsByName(t))) ? r.scrollIntoView() : "top" === t && e.scrollTo(0, 0) : e.scrollTo(0, 0);
            }
            var u = e.document;
            t && r.$watch(function() {
                return n.hash();
            }, function() {
                r.$evalAsync(s);
            });
            return s;
        } ];
    }
    function je() {
        this.$get = [ "$$rAF", "$timeout", function(t, e) {
            return t.supported ? function(e) {
                return t(e);
            } : function(t) {
                return e(t, 0, !1);
            };
        } ];
    }
    function Se(t, e, r, i) {
        function s(t) {
            try {
                t.apply(null, Qn.call(arguments, 1));
            } finally {
                if (y--, 0 === y) for (;_.length; ) try {
                    _.pop()();
                } catch (e) {
                    r.error(e);
                }
            }
        }
        function u(t, e) {
            (function n() {
                o(w, function(t) {
                    t();
                });
                x = e(n, t);
            })();
        }
        function a() {
            k = null;
            j != c.url() && (j = c.url(), o(T, function(t) {
                t(c.url());
            }));
        }
        var c = this, l = e[0], f = t.location, p = t.history, h = t.setTimeout, v = t.clearTimeout, m = {};
        c.isMock = !1;
        var y = 0, _ = [];
        c.$$completeOutstandingRequest = s;
        c.$$incOutstandingRequestCount = function() {
            y++;
        };
        c.notifyWhenNoOutstandingRequests = function(t) {
            o(w, function(t) {
                t();
            });
            0 === y ? t() : _.push(t);
        };
        var w = [], x;
        c.addPollFn = function(t) {
            g(x) && u(100, h);
            w.push(t);
            return t;
        };
        var j = f.href, S = e.find("base"), k = null;
        c.url = function(e, n) {
            f !== t.location && (f = t.location);
            p !== t.history && (p = t.history);
            if (e) {
                if (j != e) return j = e, i.history ? n ? p.replaceState(null, "", e) : (p.pushState(null, "", e), 
                S.attr("href", S.attr("href"))) : (k = e, n ? f.replace(e) : f.href = e), c;
            } else return k || f.href.replace(/%27/g, "'");
        };
        var T = [], E = !1;
        c.onUrlChange = function(e) {
            if (!E) {
                if (i.history) Gn(t).on("popstate", a);
                if (i.hashchange) Gn(t).on("hashchange", a); else c.addPollFn(a);
                E = !0;
            }
            T.push(e);
            return e;
        };
        c.$$checkUrlChange = a;
        c.baseHref = function() {
            var t = S.attr("href");
            return t ? t.replace(/^(https?\:)?\/\/[^\/]*/, "") : "";
        };
        var C = {}, A = "", O = c.baseHref();
        c.cookies = function(t, e) {
            var i, o, s, u;
            if (t) e === n ? l.cookie = escape(t) + "=;path=" + O + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : b(e) && (i = (l.cookie = escape(t) + "=" + escape(e) + ";path=" + O).length + 1, 
            4096 < i && r.warn("Cookie '" + t + "' possibly not set or overflowed because it was too large (" + i + " > 4096 bytes)!")); else {
                if (l.cookie !== A) for (A = l.cookie, i = A.split("; "), C = {}, s = 0; s < i.length; s++) o = i[s], 
                u = o.indexOf("="), 0 < u && (t = unescape(o.substring(0, u)), C[t] === n && (C[t] = unescape(o.substring(u + 1))));
                return C;
            }
        };
        c.defer = function(t, e) {
            var n;
            y++;
            n = h(function() {
                delete m[n];
                s(t);
            }, e || 0);
            m[n] = !0;
            return n;
        };
        c.defer.cancel = function(t) {
            return m[t] ? (delete m[t], v(t), s(d), !0) : !1;
        };
    }
    function ke() {
        this.$get = [ "$window", "$log", "$sniffer", "$document", function(t, e, n, r) {
            return new Se(t, r, e, n);
        } ];
    }
    function Te() {
        this.$get = function() {
            function t(t, n) {
                function i(t) {
                    t != p && (h ? h == t && (h = t.n) : h = t, o(t.n, t.p), o(t, p), p = t, p.n = null);
                }
                function o(t, e) {
                    t != e && (t && (t.p = e), e && (e.n = t));
                }
                if (t in e) throw r("$cacheFactory")("iid", t);
                var s = 0, u = f({}, n, {
                    id: t
                }), a = {}, c = n && n.capacity || Number.MAX_VALUE, l = {}, p = null, h = null;
                return e[t] = {
                    put: function(t, e) {
                        if (c < Number.MAX_VALUE) {
                            var n = l[t] || (l[t] = {
                                key: t
                            });
                            i(n);
                        }
                        if (!g(e)) return t in a || s++, a[t] = e, s > c && this.remove(h.key), e;
                    },
                    get: function(t) {
                        if (c < Number.MAX_VALUE) {
                            var e = l[t];
                            if (!e) return;
                            i(e);
                        }
                        return a[t];
                    },
                    remove: function(t) {
                        if (c < Number.MAX_VALUE) {
                            var e = l[t];
                            if (!e) return;
                            e == p && (p = e.p);
                            e == h && (h = e.n);
                            o(e.n, e.p);
                            delete l[t];
                        }
                        delete a[t];
                        s--;
                    },
                    removeAll: function() {
                        a = {};
                        s = 0;
                        l = {};
                        p = h = null;
                    },
                    destroy: function() {
                        l = u = a = null;
                        delete e[t];
                    },
                    info: function() {
                        return f({}, u, {
                            size: s
                        });
                    }
                };
            }
            var e = {};
            t.info = function() {
                var t = {};
                o(e, function(e, n) {
                    t[n] = e.info();
                });
                return t;
            };
            t.get = function(t) {
                return e[t];
            };
            return t;
        };
    }
    function Ee() {
        this.$get = [ "$cacheFactory", function(t) {
            return t("templates");
        } ];
    }
    function Ce(t, r) {
        var i = {}, s = "Directive", u = /^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/, c = /(([\d\w_\-]+)(?:\:([^;]+))?;?)/, l = /^(on[a-z]+|formaction)$/;
        this.directive = function p(e, n) {
            Q(e, "directive");
            b(e) ? (G(n, "directiveFactory"), i.hasOwnProperty(e) || (i[e] = [], t.factory(e + s, [ "$injector", "$exceptionHandler", function(t, n) {
                var r = [];
                o(i[e], function(i, o) {
                    try {
                        var s = t.invoke(i);
                        j(s) ? s = {
                            compile: m(s)
                        } : !s.compile && s.link && (s.compile = m(s.link));
                        s.priority = s.priority || 0;
                        s.index = o;
                        s.name = s.name || e;
                        s.require = s.require || s.controller && s.name;
                        s.restrict = s.restrict || "A";
                        r.push(s);
                    } catch (u) {
                        n(u);
                    }
                });
                return r;
            } ])), i[e].push(n)) : o(e, a(p));
            return this;
        };
        this.aHrefSanitizationWhitelist = function(t) {
            return y(t) ? (r.aHrefSanitizationWhitelist(t), this) : r.aHrefSanitizationWhitelist();
        };
        this.imgSrcSanitizationWhitelist = function(t) {
            return y(t) ? (r.imgSrcSanitizationWhitelist(t), this) : r.imgSrcSanitizationWhitelist();
        };
        this.$get = [ "$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(t, r, a, p, d, m, g, y, w, x, S, k) {
            function T(t, e, n, r, i) {
                t instanceof Gn || (t = Gn(t));
                o(t, function(e, n) {
                    3 == e.nodeType && e.nodeValue.match(/\S+/) && (t[n] = Gn(e).wrap("<span></span>").parent()[0]);
                });
                var s = C(t, e, t, n, r, i);
                E(t, "ng-scope");
                return function(e, n, r, i) {
                    G(e, "scope");
                    var u = n ? br.clone.call(t) : t;
                    o(r, function(t, e) {
                        u.data("$" + e + "Controller", t);
                    });
                    r = 0;
                    for (var a = u.length; r < a; r++) {
                        var c = u[r].nodeType;
                        1 !== c && 9 !== c || u.eq(r).data("$scope", e);
                    }
                    n && n(u, e);
                    s && s(e, u, u, i);
                    return u;
                };
            }
            function E(t, e) {
                try {
                    t.addClass(e);
                } catch (n) {}
            }
            function C(t, e, r, i, o, s) {
                function u(t, r, i, o) {
                    var s, u, c, l, f, p, h;
                    s = r.length;
                    var d = Array(s);
                    for (l = 0; l < s; l++) d[l] = r[l];
                    p = l = 0;
                    for (f = a.length; l < f; p++) u = d[p], r = a[l++], s = a[l++], r ? (r.scope ? (c = t.$new(), 
                    Gn.data(u, "$scope", c)) : c = t, h = r.transcludeOnThisElement ? A(t, r.transclude, o) : !r.templateOnThisElement && o ? o : !o && e ? A(t, e) : null, 
                    r(s, c, u, i, h)) : s && s(t, u.childNodes, n, o);
                }
                for (var a = [], c, l, f, p, h = 0; h < t.length; h++) c = new J(), l = O(t[h], [], c, 0 === h ? i : n, o), 
                (s = l.length ? N(l, t[h], c, e, r, null, [], [], s) : null) && s.scope && E(c.$$element, "ng-scope"), 
                c = s && s.terminal || !(f = t[h].childNodes) || !f.length ? null : C(f, s ? (s.transcludeOnThisElement || !s.templateOnThisElement) && s.transclude : e), 
                a.push(s, c), p = p || s || c, s = null;
                return p ? u : null;
            }
            function A(t, e, n) {
                return function(r, i, o) {
                    var s = !1;
                    r || (r = t.$new(), s = r.$$transcluded = !0);
                    i = e(r, i, o, n);
                    if (s) i.on("$destroy", function() {
                        r.$destroy();
                    });
                    return i;
                };
            }
            function O(t, e, n, r, i) {
                var o = n.$attr, s;
                switch (t.nodeType) {
                  case 1:
                    q(e, Ae(nr(t).toLowerCase()), "E", r, i);
                    for (var a, l, f, p = t.attributes, h = 0, d = p && p.length; h < d; h++) {
                        var v = !1, m = !1;
                        a = p[h];
                        if (!Yn || 8 <= Yn || a.specified) {
                            s = a.name;
                            l = or(a.value);
                            a = Ae(s);
                            if (f = ee.test(a)) s = Y(a.substr(6), "-");
                            var g = a.replace(/(Start|End)$/, "");
                            a === g + "Start" && (v = s, m = s.substr(0, s.length - 5) + "end", s = s.substr(0, s.length - 6));
                            a = Ae(s.toLowerCase());
                            o[a] = s;
                            if (f || !n.hasOwnProperty(a)) n[a] = l, ge(t, a) && (n[a] = !0);
                            W(t, e, l, a);
                            q(e, a, "A", r, i, v, m);
                        }
                    }
                    t = t.className;
                    if (b(t) && "" !== t) for (;s = c.exec(t); ) a = Ae(s[2]), q(e, a, "C", r, i) && (n[a] = or(s[3])), 
                    t = t.substr(s.index + s[0].length);
                    break;

                  case 3:
                    z(e, t.nodeValue);
                    break;

                  case 8:
                    try {
                        if (s = u.exec(t.nodeValue)) a = Ae(s[1]), q(e, a, "M", r, i) && (n[a] = or(s[2]));
                    } catch (y) {}
                }
                e.sort(U);
                return e;
            }
            function F(t, e, n) {
                var r = [], i = 0;
                if (e && t.hasAttribute && t.hasAttribute(e)) {
                    do {
                        if (!t) throw Or("uterdir", e, n);
                        1 == t.nodeType && (t.hasAttribute(e) && i++, t.hasAttribute(n) && i--);
                        r.push(t);
                        t = t.nextSibling;
                    } while (0 < i);
                } else r.push(t);
                return Gn(r);
            }
            function M(t, e, n) {
                return function(r, i, o, s, u) {
                    i = F(i[0], e, n);
                    return t(r, i, o, s, u);
                };
            }
            function N(t, i, s, u, c, l, f, p, h) {
                function d(t, e, n, r) {
                    if (t) {
                        n && (t = M(t, n, r));
                        t.require = B.require;
                        t.directiveName = W;
                        if (k === B || B.$$isolateScope) t = Q(t, {
                            isolateScope: !0
                        });
                        f.push(t);
                    }
                    if (e) {
                        n && (e = M(e, n, r));
                        e.require = B.require;
                        e.directiveName = W;
                        if (k === B || B.$$isolateScope) e = Q(e, {
                            isolateScope: !0
                        });
                        p.push(e);
                    }
                }
                function v(t, e, n, r) {
                    var i, s = "data", u = !1;
                    if (b(e)) {
                        for (;"^" == (i = e.charAt(0)) || "?" == i; ) e = e.substr(1), "^" == i && (s = "inheritedData"), 
                        u = u || "?" == i;
                        i = null;
                        r && "data" === s && (i = r[e]);
                        i = i || n[s]("$" + e + "Controller");
                        if (!i && !u) throw Or("ctreq", e, t);
                    } else ir(e) && (i = [], o(e, function(e) {
                        i.push(v(t, e, n, r));
                    }));
                    return i;
                }
                function y(t, e, u, c, l) {
                    function h(t, e) {
                        var r;
                        2 > arguments.length && (e = t, t = n);
                        U && (r = j);
                        return l(t, e, r);
                    }
                    var d, y, _, b, w, x, j = {}, T;
                    d = i === u ? s : P(s, new J(Gn(u), s.$attr));
                    y = d.$$element;
                    if (k) {
                        var A = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
                        x = e.$new(!0);
                        !C || C !== k && C !== k.$$originalDirective ? y.data("$isolateScopeNoTemplate", x) : y.data("$isolateScope", x);
                        E(y, "ng-isolate-scope");
                        o(k.scope, function(t, n) {
                            var i = t.match(A) || [], o = i[3] || n, s = "?" == i[2], i = i[1], u, a, c, l;
                            x.$$isolateBindings[n] = i + o;
                            switch (i) {
                              case "@":
                                d.$observe(o, function(t) {
                                    x[n] = t;
                                });
                                d.$$observers[o].$$scope = e;
                                d[o] && (x[n] = r(d[o])(e));
                                break;

                              case "=":
                                if (s && !d[o]) break;
                                a = m(d[o]);
                                l = a.literal ? R : function(t, e) {
                                    return t === e || t !== t && e !== e;
                                };
                                c = a.assign || function() {
                                    u = x[n] = a(e);
                                    throw Or("nonassign", d[o], k.name);
                                };
                                u = x[n] = a(e);
                                x.$watch(function() {
                                    var t = a(e);
                                    l(t, x[n]) || (l(t, u) ? c(e, t = x[n]) : x[n] = t);
                                    return u = t;
                                }, null, a.literal);
                                break;

                              case "&":
                                a = m(d[o]);
                                x[n] = function(t) {
                                    return a(e, t);
                                };
                                break;

                              default:
                                throw Or("iscp", k.name, n, t);
                            }
                        });
                    }
                    T = l && h;
                    S && o(S, function(t) {
                        var n = {
                            $scope: t === k || t.$$isolateScope ? x : e,
                            $element: y,
                            $attrs: d,
                            $transclude: T
                        }, r;
                        w = t.controller;
                        "@" == w && (w = d[t.name]);
                        r = g(w, n);
                        j[t.name] = r;
                        U || y.data("$" + t.name + "Controller", r);
                        t.controllerAs && (n.$scope[t.controllerAs] = r);
                    });
                    c = 0;
                    for (_ = f.length; c < _; c++) try {
                        b = f[c], b(b.isolateScope ? x : e, y, d, b.require && v(b.directiveName, b.require, y, j), T);
                    } catch (O) {
                        a(O, D(y));
                    }
                    c = e;
                    k && (k.template || null === k.templateUrl) && (c = x);
                    t && t(c, u.childNodes, n, l);
                    for (c = p.length - 1; 0 <= c; c--) try {
                        b = p[c], b(b.isolateScope ? x : e, y, d, b.require && v(b.directiveName, b.require, y, j), T);
                    } catch (F) {
                        a(F, D(y));
                    }
                }
                h = h || {};
                for (var w = -Number.MAX_VALUE, x, S = h.controllerDirectives, k = h.newIsolateScopeDirective, C = h.templateDirective, A = h.nonTlbTranscludeDirective, N = !1, q = !1, U = h.hasElementTranscludeDirective, z = s.$$element = Gn(i), B, W, Y, G = u, X, Z = 0, ee = t.length; Z < ee; Z++) {
                    B = t[Z];
                    var ne = B.$$start, re = B.$$end;
                    ne && (z = F(i, ne, re));
                    Y = n;
                    if (w > B.priority) break;
                    if (Y = B.scope) x = x || B, B.templateUrl || (L("new/isolated scope", k, B, z), 
                    _(Y) && (k = B));
                    W = B.name;
                    !B.templateUrl && B.controller && (Y = B.controller, S = S || {}, L("'" + W + "' controller", S[W], B, z), 
                    S[W] = B);
                    if (Y = B.transclude) N = !0, B.$$tlb || (L("transclusion", A, B, z), A = B), "element" == Y ? (U = !0, 
                    w = B.priority, Y = z, z = s.$$element = Gn(e.createComment(" " + W + ": " + s[W] + " ")), 
                    i = z[0], K(c, Qn.call(Y, 0), i), G = T(Y, u, w, l && l.name, {
                        nonTlbTranscludeDirective: A
                    })) : (Y = Gn(ie(i)).contents(), z.empty(), G = T(Y, u));
                    if (B.template) if (q = !0, L("template", C, B, z), C = B, Y = j(B.template) ? B.template(z, s) : B.template, 
                    Y = te(Y), B.replace) {
                        l = B;
                        Y = gr.test(Y) ? Gn(or(Y)) : [];
                        i = Y[0];
                        if (1 != Y.length || 1 !== i.nodeType) throw Or("tplrt", W, "");
                        K(c, z, i);
                        ee = {
                            $attr: {}
                        };
                        Y = O(i, [], ee);
                        var $ = t.splice(Z + 1, t.length - (Z + 1));
                        k && I(Y);
                        t = t.concat(Y).concat($);
                        H(s, ee);
                        ee = t.length;
                    } else z.html(Y);
                    if (B.templateUrl) q = !0, L("template", C, B, z), C = B, B.replace && (l = B), 
                    y = V(t.splice(Z, t.length - Z), z, s, c, N && G, f, p, {
                        controllerDirectives: S,
                        newIsolateScopeDirective: k,
                        templateDirective: C,
                        nonTlbTranscludeDirective: A
                    }), ee = t.length; else if (B.compile) try {
                        X = B.compile(z, s, G), j(X) ? d(null, X, ne, re) : X && d(X.pre, X.post, ne, re);
                    } catch (oe) {
                        a(oe, D(z));
                    }
                    B.terminal && (y.terminal = !0, w = Math.max(w, B.priority));
                }
                y.scope = x && !0 === x.scope;
                y.transcludeOnThisElement = N;
                y.templateOnThisElement = q;
                y.transclude = G;
                h.hasElementTranscludeDirective = U;
                return y;
            }
            function I(t) {
                for (var e = 0, n = t.length; e < n; e++) t[e] = h(t[e], {
                    $$isolateScope: !0
                });
            }
            function q(e, r, o, u, c, l, f) {
                if (r === c) return null;
                c = null;
                if (i.hasOwnProperty(r)) {
                    var p;
                    r = t.get(r + s);
                    for (var d = 0, v = r.length; d < v; d++) try {
                        p = r[d], (u === n || u > p.priority) && -1 != p.restrict.indexOf(o) && (l && (p = h(p, {
                            $$start: l,
                            $$end: f
                        })), e.push(p), c = p);
                    } catch (m) {
                        a(m);
                    }
                }
                return c;
            }
            function H(t, e) {
                var n = e.$attr, r = t.$attr, i = t.$$element;
                o(t, function(r, i) {
                    "$" != i.charAt(0) && (e[i] && e[i] !== r && (r += ("style" === i ? ";" : " ") + e[i]), 
                    t.$set(i, r, !0, n[i]));
                });
                o(e, function(e, o) {
                    "class" == o ? (E(i, e), t["class"] = (t["class"] ? t["class"] + " " : "") + e) : "style" == o ? (i.attr("style", i.attr("style") + ";" + e), 
                    t.style = (t.style ? t.style + ";" : "") + e) : "$" == o.charAt(0) || t.hasOwnProperty(o) || (t[o] = e, 
                    r[o] = n[o]);
                });
            }
            function V(t, e, n, r, i, s, u, a) {
                var c = [], l, h, v = e[0], m = t.shift(), g = f({}, m, {
                    templateUrl: null,
                    transclude: null,
                    replace: null,
                    $$originalDirective: m
                }), y = j(m.templateUrl) ? m.templateUrl(e, n) : m.templateUrl;
                e.empty();
                p.get(x.getTrustedResourceUrl(y), {
                    cache: d
                }).success(function(f) {
                    var p, d;
                    f = te(f);
                    if (m.replace) {
                        f = gr.test(f) ? Gn(or(f)) : [];
                        p = f[0];
                        if (1 != f.length || 1 !== p.nodeType) throw Or("tplrt", m.name, y);
                        f = {
                            $attr: {}
                        };
                        K(r, e, p);
                        var b = O(p, [], f);
                        _(m.scope) && I(b);
                        t = b.concat(t);
                        H(n, f);
                    } else p = v, e.html(f);
                    t.unshift(g);
                    l = N(t, p, n, i, e, m, s, u, a);
                    o(r, function(t, n) {
                        t == p && (r[n] = e[0]);
                    });
                    for (h = C(e[0].childNodes, i); c.length; ) {
                        f = c.shift();
                        d = c.shift();
                        var w = c.shift(), x = c.shift(), b = e[0];
                        if (d !== v) {
                            var j = d.className;
                            a.hasElementTranscludeDirective && m.replace || (b = ie(p));
                            K(w, Gn(d), b);
                            E(Gn(b), j);
                        }
                        d = l.transcludeOnThisElement ? A(f, l.transclude, x) : x;
                        l(h, f, b, r, d);
                    }
                    c = null;
                }).error(function(t, e, n, r) {
                    throw Or("tpload", r.url);
                });
                return function(t, e, n, r, i) {
                    t = i;
                    c ? (c.push(e), c.push(n), c.push(r), c.push(t)) : (l.transcludeOnThisElement && (t = A(e, l.transclude, i)), 
                    l(h, e, n, r, t));
                };
            }
            function U(t, e) {
                var n = e.priority - t.priority;
                return 0 !== n ? n : t.name !== e.name ? t.name < e.name ? -1 : 1 : t.index - e.index;
            }
            function L(t, e, n, r) {
                if (e) throw Or("multidir", e.name, n.name, t, D(r));
            }
            function z(t, e) {
                var n = r(e, !0);
                n && t.push({
                    priority: 0,
                    compile: function(t) {
                        var e = t.parent().length;
                        e && E(t.parent(), "ng-binding");
                        return function(t, r) {
                            var i = r.parent(), o = i.data("$binding") || [];
                            o.push(n);
                            i.data("$binding", o);
                            e || E(i, "ng-binding");
                            t.$watch(n, function(t) {
                                r[0].nodeValue = t;
                            });
                        };
                    }
                });
            }
            function B(t, e) {
                if ("srcdoc" == e) return x.HTML;
                var n = nr(t);
                if ("xlinkHref" == e || "FORM" == n && "action" == e || "IMG" != n && ("src" == e || "ngSrc" == e)) return x.RESOURCE_URL;
            }
            function W(t, e, n, i) {
                var o = r(n, !0);
                if (o) {
                    if ("multiple" === i && "SELECT" === nr(t)) throw Or("selmulti", D(t));
                    e.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(e, n, s) {
                                    n = s.$$observers || (s.$$observers = {});
                                    if (l.test(i)) throw Or("nodomevents");
                                    if (o = r(s[i], !0, B(t, i))) s[i] = o(e), (n[i] || (n[i] = [])).$$inter = !0, (s.$$observers && s.$$observers[i].$$scope || e).$watch(o, function(t, e) {
                                        "class" === i && t != e ? s.$updateClass(t, e) : s.$set(i, t);
                                    });
                                }
                            };
                        }
                    });
                }
            }
            function K(t, n, r) {
                var i = n[0], o = n.length, s = i.parentNode, u, a;
                if (t) for (u = 0, a = t.length; u < a; u++) if (t[u] == i) {
                    t[u++] = r;
                    a = u + o - 1;
                    for (var c = t.length; u < c; u++, a++) a < c ? t[u] = t[a] : delete t[u];
                    t.length -= o - 1;
                    break;
                }
                s && s.replaceChild(r, i);
                t = e.createDocumentFragment();
                t.appendChild(i);
                r[Gn.expando] = i[Gn.expando];
                i = 1;
                for (o = n.length; i < o; i++) s = n[i], Gn(s).remove(), t.appendChild(s), delete n[i];
                n[0] = r;
                n.length = 1;
            }
            function Q(t, e) {
                return f(function() {
                    return t.apply(null, arguments);
                }, t, e);
            }
            var J = function(t, e) {
                this.$$element = t;
                this.$attr = e || {};
            };
            J.prototype = {
                $normalize: Ae,
                $addClass: function(t) {
                    t && 0 < t.length && S.addClass(this.$$element, t);
                },
                $removeClass: function(t) {
                    t && 0 < t.length && S.removeClass(this.$$element, t);
                },
                $updateClass: function(t, e) {
                    var n = Oe(t, e), r = Oe(e, t);
                    0 === n.length ? S.removeClass(this.$$element, r) : 0 === r.length ? S.addClass(this.$$element, n) : S.setClass(this.$$element, n, r);
                },
                $set: function(t, e, r, i) {
                    var s = ge(this.$$element[0], t);
                    s && (this.$$element.prop(t, e), i = s);
                    this[t] = e;
                    i ? this.$attr[t] = i : (i = this.$attr[t]) || (this.$attr[t] = i = Y(t, "-"));
                    s = nr(this.$$element);
                    if ("A" === s && "href" === t || "IMG" === s && "src" === t) this[t] = e = k(e, "src" === t);
                    !1 !== r && (null === e || e === n ? this.$$element.removeAttr(i) : this.$$element.attr(i, e));
                    (r = this.$$observers) && o(r[t], function(t) {
                        try {
                            t(e);
                        } catch (n) {
                            a(n);
                        }
                    });
                },
                $observe: function(t, e) {
                    var n = this, r = n.$$observers || (n.$$observers = {}), i = r[t] || (r[t] = []);
                    i.push(e);
                    y.$evalAsync(function() {
                        i.$$inter || e(n[t]);
                    });
                    return e;
                }
            };
            var X = r.startSymbol(), Z = r.endSymbol(), te = "{{" == X || "}}" == Z ? v : function(t) {
                return t.replace(/\{\{/g, X).replace(/}}/g, Z);
            }, ee = /^ngAttr[A-Z]/;
            return T;
        } ];
    }
    function Ae(t) {
        return ee(t.replace(Pr, ""));
    }
    function Oe(t, e) {
        var n = "", r = t.split(/\s+/), i = e.split(/\s+/), o = 0;
        t: for (;o < r.length; o++) {
            for (var s = r[o], u = 0; u < i.length; u++) if (s == i[u]) continue t;
            n += (0 < n.length ? " " : "") + s;
        }
        return n;
    }
    function Pe() {
        var t = {}, e = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function(e, n) {
            Q(e, "controller");
            _(e) ? f(t, e) : t[e] = n;
        };
        this.$get = [ "$injector", "$window", function(n, i) {
            return function(o, s) {
                var u, a, c;
                b(o) && (u = o.match(e), a = u[1], c = u[3], o = t.hasOwnProperty(a) ? t[a] : J(s.$scope, a, !0) || J(i, a, !0), 
                K(o, a, !0));
                u = n.instantiate(o, s);
                if (c) {
                    if (!s || "object" !== typeof s.$scope) throw r("$controller")("noscp", a || o.name, c);
                    s.$scope[c] = u;
                }
                return u;
            };
        } ];
    }
    function Re() {
        this.$get = [ "$window", function(t) {
            return Gn(t.document);
        } ];
    }
    function Fe() {
        this.$get = [ "$log", function(t) {
            return function(e, n) {
                t.error.apply(t, arguments);
            };
        } ];
    }
    function Me(t) {
        var e = {}, n, r, i;
        if (!t) return e;
        o(t.split("\n"), function(t) {
            i = t.indexOf(":");
            n = zn(or(t.substr(0, i)));
            r = or(t.substr(i + 1));
            n && (e[n] = e[n] ? e[n] + ", " + r : r);
        });
        return e;
    }
    function Ne(t) {
        var e = _(t) ? t : n;
        return function(n) {
            e || (e = Me(t));
            return n ? e[zn(n)] || null : e;
        };
    }
    function Ie(t, e, n) {
        if (j(n)) return n(t, e);
        o(n, function(n) {
            t = n(t, e);
        });
        return t;
    }
    function qe() {
        var t = /^\s*(\[|\{[^\{])/, e = /[\}\]]\s*$/, r = /^\)\]\}',?\n/, i = {
            "Content-Type": "application/json;charset=utf-8"
        }, s = this.defaults = {
            transformResponse: [ function(n) {
                b(n) && (n = n.replace(r, ""), t.test(n) && e.test(n) && (n = I(n)));
                return n;
            } ],
            transformRequest: [ function(t) {
                return _(t) && "[object File]" !== Xn.call(t) && "[object Blob]" !== Xn.call(t) ? N(t) : t;
            } ],
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                },
                post: P(i),
                put: P(i),
                patch: P(i)
            },
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN"
        }, a = this.interceptors = [], c = this.responseInterceptors = [];
        this.$get = [ "$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(t, e, r, i, l, p) {
            function h(t) {
                function e(t) {
                    var e = f({}, t, {
                        data: Ie(t.data, t.headers, r.transformResponse)
                    });
                    return 200 <= t.status && 300 > t.status ? e : l.reject(e);
                }
                var r = {
                    method: "get",
                    transformRequest: s.transformRequest,
                    transformResponse: s.transformResponse
                }, i = function(t) {
                    var e = s.headers, n = f({}, t.headers), r, i, e = f({}, e.common, e[zn(t.method)]);
                    t: for (r in e) {
                        t = zn(r);
                        for (i in n) if (zn(i) === t) continue t;
                        n[r] = e[r];
                    }
                    (function(t) {
                        var e;
                        o(t, function(n, r) {
                            j(n) && (e = n(), null != e ? t[r] = e : delete t[r]);
                        });
                    })(n);
                    return n;
                }(t);
                f(r, t);
                r.headers = i;
                r.method = Wn(r.method);
                var u = [ function(t) {
                    i = t.headers;
                    var n = Ie(t.data, Ne(i), t.transformRequest);
                    g(n) && o(i, function(t, e) {
                        "content-type" === zn(e) && delete i[e];
                    });
                    g(t.withCredentials) && !g(s.withCredentials) && (t.withCredentials = s.withCredentials);
                    return d(t, n, i).then(e, e);
                }, n ], a = l.when(r);
                for (o(w, function(t) {
                    (t.request || t.requestError) && u.unshift(t.request, t.requestError);
                    (t.response || t.responseError) && u.push(t.response, t.responseError);
                }); u.length; ) {
                    t = u.shift();
                    var c = u.shift(), a = a.then(t, c);
                }
                a.success = function(t) {
                    a.then(function(e) {
                        t(e.data, e.status, e.headers, r);
                    });
                    return a;
                };
                a.error = function(t) {
                    a.then(null, function(e) {
                        t(e.data, e.status, e.headers, r);
                    });
                    return a;
                };
                return a;
            }
            function d(r, o, u) {
                function a(t, e, n, r) {
                    b && (200 <= t && 300 > t ? b.put(x, [ t, e, Me(n), r ]) : b.remove(x));
                    c(e, t, n, r);
                    i.$$phase || i.$apply();
                }
                function c(t, e, n, i) {
                    e = Math.max(e, 0);
                    (200 <= e && 300 > e ? p.resolve : p.reject)({
                        data: t,
                        status: e,
                        headers: Ne(n),
                        config: r,
                        statusText: i
                    });
                }
                function f() {
                    var t = C(h.pendingRequests, r);
                    -1 !== t && h.pendingRequests.splice(t, 1);
                }
                var p = l.defer(), d = p.promise, b, w, x = v(r.url, r.params);
                h.pendingRequests.push(r);
                d.then(f, f);
                !r.cache && !s.cache || (!1 === r.cache || "GET" !== r.method && "JSONP" !== r.method) || (b = _(r.cache) ? r.cache : _(s.cache) ? s.cache : m);
                if (b) if (w = b.get(x), y(w)) {
                    if (w && j(w.then)) return w.then(f, f), w;
                    ir(w) ? c(w[1], w[0], P(w[2]), w[3]) : c(w, 200, {}, "OK");
                } else b.put(x, d);
                g(w) && ((w = xn(r.url) ? e.cookies()[r.xsrfCookieName || s.xsrfCookieName] : n) && (u[r.xsrfHeaderName || s.xsrfHeaderName] = w), 
                t(r.method, x, o, a, u, r.timeout, r.withCredentials, r.responseType));
                return d;
            }
            function v(t, e) {
                if (!e) return t;
                var n = [];
                u(e, function(t, e) {
                    null === t || g(t) || (ir(t) || (t = [ t ]), o(t, function(t) {
                        _(t) && (t = x(t) ? t.toISOString() : N(t));
                        n.push(z(e) + "=" + z(t));
                    }));
                });
                0 < n.length && (t += (-1 == t.indexOf("?") ? "?" : "&") + n.join("&"));
                return t;
            }
            var m = r("$http"), w = [];
            o(a, function(t) {
                w.unshift(b(t) ? p.get(t) : p.invoke(t));
            });
            o(c, function(t, e) {
                var n = b(t) ? p.get(t) : p.invoke(t);
                w.splice(e, 0, {
                    response: function(t) {
                        return n(l.when(t));
                    },
                    responseError: function(t) {
                        return n(l.reject(t));
                    }
                });
            });
            h.pendingRequests = [];
            (function(t) {
                o(arguments, function(t) {
                    h[t] = function(e, n) {
                        return h(f(n || {}, {
                            method: t,
                            url: e
                        }));
                    };
                });
            })("get", "delete", "head", "jsonp");
            (function(t) {
                o(arguments, function(t) {
                    h[t] = function(e, n, r) {
                        return h(f(r || {}, {
                            method: t,
                            url: e,
                            data: n
                        }));
                    };
                });
            })("post", "put");
            h.defaults = s;
            return h;
        } ];
    }
    function De(e) {
        if (8 >= Yn && (!e.match(/^(get|post|head|put|delete|options)$/i) || !t.XMLHttpRequest)) return new t.ActiveXObject("Microsoft.XMLHTTP");
        if (t.XMLHttpRequest) return new t.XMLHttpRequest();
        throw r("$httpBackend")("noxhr");
    }
    function He() {
        this.$get = [ "$browser", "$window", "$document", function(t, e, n) {
            return Ve(t, De, t.defer, e.angular.callbacks, n[0]);
        } ];
    }
    function Ve(t, e, n, r, i) {
        function s(t, e, n) {
            var o = i.createElement("script"), s = null;
            o.type = "text/javascript";
            o.src = t;
            o.async = !0;
            s = function(t) {
                pr(o, "load", s);
                pr(o, "error", s);
                i.body.removeChild(o);
                o = null;
                var u = -1, a = "unknown";
                t && ("load" !== t.type || r[e].called || (t = {
                    type: "error"
                }), a = t.type, u = "error" === t.type ? 404 : 200);
                n && n(u, a);
            };
            fr(o, "load", s);
            fr(o, "error", s);
            8 >= Yn && (o.onreadystatechange = function() {
                b(o.readyState) && /loaded|complete/.test(o.readyState) && (o.onreadystatechange = null, 
                s({
                    type: "load"
                }));
            });
            i.body.appendChild(o);
            return s;
        }
        var u = -1;
        return function(i, a, c, l, f, p, h, v) {
            function m() {
                _ = u;
                w && w();
                x && x.abort();
            }
            function g(e, r, i, o, s) {
                k && n.cancel(k);
                w = x = null;
                0 === r && (r = i ? 200 : "file" == wn(a).protocol ? 404 : 0);
                e(1223 === r ? 204 : r, i, o, s || "");
                t.$$completeOutstandingRequest(d);
            }
            var _;
            t.$$incOutstandingRequestCount();
            a = a || t.url();
            if ("jsonp" == zn(i)) {
                var b = "_" + (r.counter++).toString(36);
                r[b] = function(t) {
                    r[b].data = t;
                    r[b].called = !0;
                };
                var w = s(a.replace("JSON_CALLBACK", "angular.callbacks." + b), b, function(t, e) {
                    g(l, t, r[b].data, "", e);
                    r[b] = d;
                });
            } else {
                var x = e(i);
                x.open(i, a, !0);
                o(f, function(t, e) {
                    y(t) && x.setRequestHeader(e, t);
                });
                x.onreadystatechange = function() {
                    if (x && 4 == x.readyState) {
                        var t = null, e = null, n = "";
                        _ !== u && (t = x.getAllResponseHeaders(), e = "response" in x ? x.response : x.responseText);
                        _ === u && 10 > Yn || (n = x.statusText);
                        g(l, _ || x.status, e, t, n);
                    }
                };
                h && (x.withCredentials = !0);
                if (v) try {
                    x.responseType = v;
                } catch (S) {
                    if ("json" !== v) throw S;
                }
                x.send(c || null);
            }
            if (0 < p) var k = n(m, p); else p && j(p.then) && p.then(m);
        };
    }
    function Ue() {
        var t = "{{", e = "}}";
        this.startSymbol = function(e) {
            return e ? (t = e, this) : t;
        };
        this.endSymbol = function(t) {
            return t ? (e = t, this) : e;
        };
        this.$get = [ "$parse", "$exceptionHandler", "$sce", function(n, r, i) {
            function o(o, a, c) {
                for (var l, f, p = 0, h = [], d = o.length, v = !1, m = []; p < d; ) -1 != (l = o.indexOf(t, p)) && -1 != (f = o.indexOf(e, l + s)) ? (p != l && h.push(o.substring(p, l)), 
                h.push(p = n(v = o.substring(l + s, f))), p.exp = v, p = f + u, v = !0) : (p != d && h.push(o.substring(p)), 
                p = d);
                (d = h.length) || (h.push(""), d = 1);
                if (c && 1 < h.length) throw Rr("noconcat", o);
                if (!a || v) return m.length = d, p = function(t) {
                    try {
                        for (var e = 0, n = d, s; e < n; e++) {
                            if ("function" == typeof (s = h[e])) if (s = s(t), s = c ? i.getTrusted(c, s) : i.valueOf(s), 
                            null == s) s = ""; else switch (typeof s) {
                              case "string":
                                break;

                              case "number":
                                s = "" + s;
                                break;

                              default:
                                s = N(s);
                            }
                            m[e] = s;
                        }
                        return m.join("");
                    } catch (u) {
                        t = Rr("interr", o, u.toString()), r(t);
                    }
                }, p.exp = o, p.parts = h, p;
            }
            var s = t.length, u = e.length;
            o.startSymbol = function() {
                return t;
            };
            o.endSymbol = function() {
                return e;
            };
            return o;
        } ];
    }
    function Le() {
        this.$get = [ "$rootScope", "$window", "$q", function(t, e, n) {
            function r(r, o, s, u) {
                var a = e.setInterval, c = e.clearInterval, l = n.defer(), f = l.promise, p = 0, h = y(u) && !u;
                s = y(s) ? s : 0;
                f.then(null, null, r);
                f.$$intervalId = a(function() {
                    l.notify(p++);
                    0 < s && p >= s && (l.resolve(p), c(f.$$intervalId), delete i[f.$$intervalId]);
                    h || t.$apply();
                }, o);
                i[f.$$intervalId] = l;
                return f;
            }
            var i = {};
            r.cancel = function(t) {
                return t && t.$$intervalId in i ? (i[t.$$intervalId].reject("canceled"), e.clearInterval(t.$$intervalId), 
                delete i[t.$$intervalId], !0) : !1;
            };
            return r;
        } ];
    }
    function ze() {
        this.$get = function() {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [ {
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "¤",
                        posSuf: "",
                        negPre: "(¤",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    } ],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January February March April May June July August September October November December".split(" "),
                    SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                    DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                    SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                    AMPMS: [ "AM", "PM" ],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function(t) {
                    return 1 === t ? "one" : "other";
                }
            };
        };
    }
    function Be(t) {
        t = t.split("/");
        for (var e = t.length; e--; ) t[e] = L(t[e]);
        return t.join("/");
    }
    function We(t, e, n) {
        t = wn(t, n);
        e.$$protocol = t.protocol;
        e.$$host = t.hostname;
        e.$$port = p(t.port) || Mr[t.protocol] || null;
    }
    function Ye(t, e, n) {
        var r = "/" !== t.charAt(0);
        r && (t = "/" + t);
        t = wn(t, n);
        e.$$path = decodeURIComponent(r && "/" === t.pathname.charAt(0) ? t.pathname.substring(1) : t.pathname);
        e.$$search = V(t.search);
        e.$$hash = decodeURIComponent(t.hash);
        e.$$path && "/" != e.$$path.charAt(0) && (e.$$path = "/" + e.$$path);
    }
    function Ge(t, e) {
        if (0 === e.indexOf(t)) return e.substr(t.length);
    }
    function Ke(t) {
        var e = t.indexOf("#");
        return -1 == e ? t : t.substr(0, e);
    }
    function Qe(t) {
        return t.substr(0, Ke(t).lastIndexOf("/") + 1);
    }
    function Je(t, e) {
        this.$$html5 = !0;
        e = e || "";
        var r = Qe(t);
        We(t, this, t);
        this.$$parse = function(e) {
            var n = Ge(r, e);
            if (!b(n)) throw Nr("ipthprfx", e, r);
            Ye(n, this, t);
            this.$$path || (this.$$path = "/");
            this.$$compose();
        };
        this.$$compose = function() {
            var t = U(this.$$search), e = this.$$hash ? "#" + L(this.$$hash) : "";
            this.$$url = Be(this.$$path) + (t ? "?" + t : "") + e;
            this.$$absUrl = r + this.$$url.substr(1);
        };
        this.$$rewrite = function(i) {
            var o;
            if ((o = Ge(t, i)) !== n) return i = o, (o = Ge(e, o)) !== n ? r + (Ge("/", o) || o) : t + i;
            if ((o = Ge(r, i)) !== n) return r + o;
            if (r == i + "/") return r;
        };
    }
    function Xe(t, e) {
        var n = Qe(t);
        We(t, this, t);
        this.$$parse = function(r) {
            var i = Ge(t, r) || Ge(n, r), i = "#" == i.charAt(0) ? Ge(e, i) : this.$$html5 ? i : "";
            if (!b(i)) throw Nr("ihshprfx", r, e);
            Ye(i, this, t);
            r = this.$$path;
            var o = /^\/[A-Z]:(\/.*)/;
            0 === i.indexOf(t) && (i = i.replace(t, ""));
            o.exec(i) || (r = (i = o.exec(r)) ? i[1] : r);
            this.$$path = r;
            this.$$compose();
        };
        this.$$compose = function() {
            var n = U(this.$$search), r = this.$$hash ? "#" + L(this.$$hash) : "";
            this.$$url = Be(this.$$path) + (n ? "?" + n : "") + r;
            this.$$absUrl = t + (this.$$url ? e + this.$$url : "");
        };
        this.$$rewrite = function(e) {
            if (Ke(t) == Ke(e)) return e;
        };
    }
    function Ze(t, e) {
        this.$$html5 = !0;
        Xe.apply(this, arguments);
        var n = Qe(t);
        this.$$rewrite = function(r) {
            var i;
            if (t == Ke(r)) return r;
            if (i = Ge(n, r)) return t + e + i;
            if (n === r + "/") return n;
        };
        this.$$compose = function() {
            var n = U(this.$$search), r = this.$$hash ? "#" + L(this.$$hash) : "";
            this.$$url = Be(this.$$path) + (n ? "?" + n : "") + r;
            this.$$absUrl = t + e + this.$$url;
        };
    }
    function tn(t) {
        return function() {
            return this[t];
        };
    }
    function en(t, e) {
        return function(n) {
            if (g(n)) return this[t];
            this[t] = e(n);
            this.$$compose();
            return this;
        };
    }
    function nn() {
        var e = "", n = !1;
        this.hashPrefix = function(t) {
            return y(t) ? (e = t, this) : e;
        };
        this.html5Mode = function(t) {
            return y(t) ? (n = t, this) : n;
        };
        this.$get = [ "$rootScope", "$browser", "$sniffer", "$rootElement", function(r, i, o, s) {
            function u(t) {
                r.$broadcast("$locationChangeSuccess", a.absUrl(), t);
            }
            var a, c, l = i.baseHref(), f = i.url(), p;
            n ? (p = f.substring(0, f.indexOf("/", f.indexOf("//") + 2)) + (l || "/"), c = o.history ? Je : Ze) : (p = Ke(f), 
            c = Xe);
            a = new c(p, "#" + e);
            a.$$parse(a.$$rewrite(f));
            var h = /^\s*(javascript|mailto):/i;
            s.on("click", function(n) {
                if (!n.ctrlKey && !n.metaKey && 2 != n.which) {
                    for (var o = Gn(n.target); "a" !== zn(o[0].nodeName); ) if (o[0] === s[0] || !(o = o.parent())[0]) return;
                    var u = o.prop("href");
                    _(u) && "[object SVGAnimatedString]" === u.toString() && (u = wn(u.animVal).href);
                    if (!h.test(u)) {
                        if (c === Ze) {
                            var l = o.attr("href") || o.attr("xlink:href");
                            if (l && 0 > l.indexOf("://")) if (u = "#" + e, "/" == l[0]) u = p + u + l; else if ("#" == l[0]) u = p + u + (a.path() || "/") + l; else {
                                var f = a.path().split("/"), l = l.split("/");
                                2 !== f.length || f[1] || (f.length = 1);
                                for (var d = 0; d < l.length; d++) "." != l[d] && (".." == l[d] ? f.pop() : l[d].length && f.push(l[d]));
                                u = p + u + f.join("/");
                            }
                        }
                        f = a.$$rewrite(u);
                        u && (!o.attr("target") && f && !n.isDefaultPrevented()) && (n.preventDefault(), 
                        f != i.url() && (a.$$parse(f), r.$apply(), t.angular["ff-684208-preventDefault"] = !0));
                    }
                }
            });
            a.absUrl() != f && i.url(a.absUrl(), !0);
            i.onUrlChange(function(t) {
                a.absUrl() != t && (r.$evalAsync(function() {
                    var e = a.absUrl();
                    a.$$parse(t);
                    r.$broadcast("$locationChangeStart", t, e).defaultPrevented ? (a.$$parse(e), i.url(e)) : u(e);
                }), r.$$phase || r.$digest());
            });
            var d = 0;
            r.$watch(function() {
                var t = i.url(), e = a.$$replace;
                d && t == a.absUrl() || (d++, r.$evalAsync(function() {
                    r.$broadcast("$locationChangeStart", a.absUrl(), t).defaultPrevented ? a.$$parse(t) : (i.url(a.absUrl(), e), 
                    u(t));
                }));
                a.$$replace = !1;
                return d;
            });
            return a;
        } ];
    }
    function rn() {
        var t = !0, e = this;
        this.debugEnabled = function(e) {
            return y(e) ? (t = e, this) : t;
        };
        this.$get = [ "$window", function(n) {
            function r(t) {
                t instanceof Error && (t.stack ? t = t.message && -1 === t.stack.indexOf(t.message) ? "Error: " + t.message + "\n" + t.stack : t.stack : t.sourceURL && (t = t.message + "\n" + t.sourceURL + ":" + t.line));
                return t;
            }
            function i(t) {
                var e = n.console || {}, i = e[t] || e.log || d;
                t = !1;
                try {
                    t = !!i.apply;
                } catch (s) {}
                return t ? function() {
                    var t = [];
                    o(arguments, function(e) {
                        t.push(r(e));
                    });
                    return i.apply(e, t);
                } : function(t, e) {
                    i(t, null == e ? "" : e);
                };
            }
            return {
                log: i("log"),
                info: i("info"),
                warn: i("warn"),
                error: i("error"),
                debug: function() {
                    var n = i("debug");
                    return function() {
                        t && n.apply(e, arguments);
                    };
                }()
            };
        } ];
    }
    function on(t, e) {
        if ("__defineGetter__" === t || "__defineSetter__" === t || "__lookupGetter__" === t || "__lookupSetter__" === t || "__proto__" === t) throw Ir("isecfld", e);
        return t;
    }
    function sn(t, e) {
        if (t) {
            if (t.constructor === t) throw Ir("isecfn", e);
            if (t.document && t.location && t.alert && t.setInterval) throw Ir("isecwindow", e);
            if (t.children && (t.nodeName || t.prop && t.attr && t.find)) throw Ir("isecdom", e);
            if (t === Object) throw Ir("isecobj", e);
        }
        return t;
    }
    function un(t, e, r, i, o) {
        sn(t, i);
        o = o || {};
        e = e.split(".");
        for (var s, u = 0; 1 < e.length; u++) {
            s = on(e.shift(), i);
            var a = sn(t[s], i);
            a || (a = {}, t[s] = a);
            t = a;
            t.then && o.unwrapPromises && (Dr(i), "$$v" in t || function(t) {
                t.then(function(e) {
                    t.$$v = e;
                });
            }(t), t.$$v === n && (t.$$v = {}), t = t.$$v);
        }
        s = on(e.shift(), i);
        sn(t[s], i);
        return t[s] = r;
    }
    function an(t, e, r, i, o, s, u) {
        on(t, s);
        on(e, s);
        on(r, s);
        on(i, s);
        on(o, s);
        return u.unwrapPromises ? function(u, a) {
            var c = a && a.hasOwnProperty(t) ? a : u, l;
            if (null == c) return c;
            (c = c[t]) && c.then && (Dr(s), "$$v" in c || (l = c, l.$$v = n, l.then(function(t) {
                l.$$v = t;
            })), c = c.$$v);
            if (!e) return c;
            if (null == c) return n;
            (c = c[e]) && c.then && (Dr(s), "$$v" in c || (l = c, l.$$v = n, l.then(function(t) {
                l.$$v = t;
            })), c = c.$$v);
            if (!r) return c;
            if (null == c) return n;
            (c = c[r]) && c.then && (Dr(s), "$$v" in c || (l = c, l.$$v = n, l.then(function(t) {
                l.$$v = t;
            })), c = c.$$v);
            if (!i) return c;
            if (null == c) return n;
            (c = c[i]) && c.then && (Dr(s), "$$v" in c || (l = c, l.$$v = n, l.then(function(t) {
                l.$$v = t;
            })), c = c.$$v);
            if (!o) return c;
            if (null == c) return n;
            (c = c[o]) && c.then && (Dr(s), "$$v" in c || (l = c, l.$$v = n, l.then(function(t) {
                l.$$v = t;
            })), c = c.$$v);
            return c;
        } : function(s, u) {
            var a = u && u.hasOwnProperty(t) ? u : s;
            if (null == a) return a;
            a = a[t];
            if (!e) return a;
            if (null == a) return n;
            a = a[e];
            if (!r) return a;
            if (null == a) return n;
            a = a[r];
            if (!i) return a;
            if (null == a) return n;
            a = a[i];
            return o ? null == a ? n : a = a[o] : a;
        };
    }
    function cn(t, e, r) {
        if (Yr.hasOwnProperty(t)) return Yr[t];
        var i = t.split("."), s = i.length, u;
        if (e.csp) u = 6 > s ? an(i[0], i[1], i[2], i[3], i[4], r, e) : function(t, o) {
            var u = 0, a;
            do a = an(i[u++], i[u++], i[u++], i[u++], i[u++], r, e)(t, o), o = n, t = a; while (u < s);
            return a;
        }; else {
            var a = "var p;\n";
            o(i, function(t, n) {
                on(t, r);
                a += "if(s == null) return undefined;\ns=" + (n ? "s" : '((k&&k.hasOwnProperty("' + t + '"))?k:s)') + '["' + t + '"];\n' + (e.unwrapPromises ? 'if (s && s.then) {\n pw("' + r.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n' : "");
            });
            var a = a + "return s;", c = new Function("s", "k", "pw", a);
            c.toString = m(a);
            u = e.unwrapPromises ? function(t, e) {
                return c(t, e, Dr);
            } : c;
        }
        "hasOwnProperty" !== t && (Yr[t] = u);
        return u;
    }
    function ln() {
        var t = {}, e = {
            csp: !1,
            unwrapPromises: !1,
            logPromiseWarnings: !0
        };
        this.unwrapPromises = function(t) {
            return y(t) ? (e.unwrapPromises = !!t, this) : e.unwrapPromises;
        };
        this.logPromiseWarnings = function(t) {
            return y(t) ? (e.logPromiseWarnings = t, this) : e.logPromiseWarnings;
        };
        this.$get = [ "$filter", "$sniffer", "$log", function(n, r, i) {
            e.csp = r.csp;
            Dr = function(t) {
                e.logPromiseWarnings && !qr.hasOwnProperty(t) && (qr[t] = !0, i.warn("[$parse] Promise found in the expression `" + t + "`. Automatic unwrapping of promises in Angular expressions is deprecated."));
            };
            return function(r) {
                var i;
                switch (typeof r) {
                  case "string":
                    if (t.hasOwnProperty(r)) return t[r];
                    i = new Br(e);
                    i = new Wr(i, n, e).parse(r);
                    "hasOwnProperty" !== r && (t[r] = i);
                    return i;

                  case "function":
                    return r;

                  default:
                    return d;
                }
            };
        } ];
    }
    function fn() {
        this.$get = [ "$rootScope", "$exceptionHandler", function(t, e) {
            return pn(function(e) {
                t.$evalAsync(e);
            }, e);
        } ];
    }
    function pn(t, e) {
        function r(t) {
            return t;
        }
        function i(t) {
            return a(t);
        }
        var s = function() {
            var o = [], a, l;
            return l = {
                resolve: function(e) {
                    if (o) {
                        var r = o;
                        o = n;
                        a = u(e);
                        r.length && t(function() {
                            for (var t, e = 0, n = r.length; e < n; e++) t = r[e], a.then(t[0], t[1], t[2]);
                        });
                    }
                },
                reject: function(t) {
                    l.resolve(c(t));
                },
                notify: function(e) {
                    if (o) {
                        var n = o;
                        o.length && t(function() {
                            for (var t, r = 0, i = n.length; r < i; r++) t = n[r], t[2](e);
                        });
                    }
                },
                promise: {
                    then: function(t, n, u) {
                        var c = s(), l = function(n) {
                            try {
                                c.resolve((j(t) ? t : r)(n));
                            } catch (i) {
                                c.reject(i), e(i);
                            }
                        }, f = function(t) {
                            try {
                                c.resolve((j(n) ? n : i)(t));
                            } catch (r) {
                                c.reject(r), e(r);
                            }
                        }, p = function(t) {
                            try {
                                c.notify((j(u) ? u : r)(t));
                            } catch (n) {
                                e(n);
                            }
                        };
                        o ? o.push([ l, f, p ]) : a.then(l, f, p);
                        return c.promise;
                    },
                    "catch": function(t) {
                        return this.then(null, t);
                    },
                    "finally": function(t) {
                        function e(t, e) {
                            var n = s();
                            e ? n.resolve(t) : n.reject(t);
                            return n.promise;
                        }
                        function n(n, i) {
                            var o = null;
                            try {
                                o = (t || r)();
                            } catch (s) {
                                return e(s, !1);
                            }
                            return o && j(o.then) ? o.then(function() {
                                return e(n, i);
                            }, function(t) {
                                return e(t, !1);
                            }) : e(n, i);
                        }
                        return this.then(function(t) {
                            return n(t, !0);
                        }, function(t) {
                            return n(t, !1);
                        });
                    }
                }
            };
        }, u = function(e) {
            return e && j(e.then) ? e : {
                then: function(n) {
                    var r = s();
                    t(function() {
                        r.resolve(n(e));
                    });
                    return r.promise;
                }
            };
        }, a = function(t) {
            var e = s();
            e.reject(t);
            return e.promise;
        }, c = function(n) {
            return {
                then: function(r, o) {
                    var u = s();
                    t(function() {
                        try {
                            u.resolve((j(o) ? o : i)(n));
                        } catch (t) {
                            u.reject(t), e(t);
                        }
                    });
                    return u.promise;
                }
            };
        };
        return {
            defer: s,
            reject: a,
            when: function(n, o, c, l) {
                var f = s(), p, h = function(t) {
                    try {
                        return (j(o) ? o : r)(t);
                    } catch (n) {
                        return e(n), a(n);
                    }
                }, d = function(t) {
                    try {
                        return (j(c) ? c : i)(t);
                    } catch (n) {
                        return e(n), a(n);
                    }
                }, v = function(t) {
                    try {
                        return (j(l) ? l : r)(t);
                    } catch (n) {
                        e(n);
                    }
                };
                t(function() {
                    u(n).then(function(t) {
                        p || (p = !0, f.resolve(u(t).then(h, d, v)));
                    }, function(t) {
                        p || (p = !0, f.resolve(d(t)));
                    }, function(t) {
                        p || f.notify(v(t));
                    });
                });
                return f.promise;
            },
            all: function(t) {
                var e = s(), n = 0, r = ir(t) ? [] : {};
                o(t, function(t, i) {
                    n++;
                    u(t).then(function(t) {
                        r.hasOwnProperty(i) || (r[i] = t, --n || e.resolve(r));
                    }, function(t) {
                        r.hasOwnProperty(i) || e.reject(t);
                    });
                });
                0 === n && e.resolve(r);
                return e.promise;
            }
        };
    }
    function hn() {
        this.$get = [ "$window", "$timeout", function(t, e) {
            var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame, r = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.webkitCancelRequestAnimationFrame, i = !!n, o = i ? function(t) {
                var e = n(t);
                return function() {
                    r(e);
                };
            } : function(t) {
                var n = e(t, 16.66, !1);
                return function() {
                    e.cancel(n);
                };
            };
            o.supported = i;
            return o;
        } ];
    }
    function dn() {
        var t = 10, e = r("$rootScope"), n = null;
        this.digestTtl = function(e) {
            arguments.length && (t = e);
            return t;
        };
        this.$get = [ "$injector", "$exceptionHandler", "$parse", "$browser", function(r, s, u, a) {
            function l() {
                this.$id = c();
                this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                this["this"] = this.$root = this;
                this.$$destroyed = !1;
                this.$$asyncQueue = [];
                this.$$postDigestQueue = [];
                this.$$listeners = {};
                this.$$listenerCount = {};
                this.$$isolateBindings = {};
            }
            function f(t) {
                if (m.$$phase) throw e("inprog", m.$$phase);
                m.$$phase = t;
            }
            function p(t, e) {
                var n = u(t);
                K(n, e);
                return n;
            }
            function h(t, e, n) {
                do t.$$listenerCount[n] -= e, 0 === t.$$listenerCount[n] && delete t.$$listenerCount[n]; while (t = t.$parent);
            }
            function v() {}
            l.prototype = {
                constructor: l,
                $new: function(t) {
                    t ? (t = new l(), t.$root = this.$root, t.$$asyncQueue = this.$$asyncQueue, t.$$postDigestQueue = this.$$postDigestQueue) : (this.$$childScopeClass || (this.$$childScopeClass = function() {
                        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
                        this.$$listeners = {};
                        this.$$listenerCount = {};
                        this.$id = c();
                        this.$$childScopeClass = null;
                    }, this.$$childScopeClass.prototype = this), t = new this.$$childScopeClass());
                    t["this"] = t;
                    t.$parent = this;
                    t.$$prevSibling = this.$$childTail;
                    this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = t : this.$$childHead = this.$$childTail = t;
                    return t;
                },
                $watch: function(t, e, r) {
                    var i = p(t, "watch"), o = this.$$watchers, s = {
                        fn: e,
                        last: v,
                        get: i,
                        exp: t,
                        eq: !!r
                    };
                    n = null;
                    if (!j(e)) {
                        var u = p(e || d, "listener");
                        s.fn = function(t, e, n) {
                            u(n);
                        };
                    }
                    if ("string" == typeof t && i.constant) {
                        var a = s.fn;
                        s.fn = function(t, e, n) {
                            a.call(this, t, e, n);
                            A(o, s);
                        };
                    }
                    o || (o = this.$$watchers = []);
                    o.unshift(s);
                    return function() {
                        A(o, s);
                        n = null;
                    };
                },
                $watchCollection: function(t, e) {
                    var n = this, r, o, s, a = 1 < e.length, c = 0, l = u(t), f = [], p = {}, h = !0, d = 0;
                    return this.$watch(function() {
                        r = l(n);
                        var t, e, s;
                        if (_(r)) if (i(r)) for (o !== f && (o = f, d = o.length = 0, c++), t = r.length, 
                        d !== t && (c++, o.length = d = t), e = 0; e < t; e++) s = o[e] !== o[e] && r[e] !== r[e], 
                        s || o[e] === r[e] || (c++, o[e] = r[e]); else {
                            o !== p && (o = p = {}, d = 0, c++);
                            t = 0;
                            for (e in r) r.hasOwnProperty(e) && (t++, o.hasOwnProperty(e) ? (s = o[e] !== o[e] && r[e] !== r[e], 
                            s || o[e] === r[e] || (c++, o[e] = r[e])) : (d++, o[e] = r[e], c++));
                            if (d > t) for (e in c++, o) o.hasOwnProperty(e) && !r.hasOwnProperty(e) && (d--, 
                            delete o[e]);
                        } else o !== r && (o = r, c++);
                        return c;
                    }, function() {
                        h ? (h = !1, e(r, r, n)) : e(r, s, n);
                        if (a) if (_(r)) if (i(r)) {
                            s = Array(r.length);
                            for (var t = 0; t < r.length; t++) s[t] = r[t];
                        } else for (t in s = {}, r) Bn.call(r, t) && (s[t] = r[t]); else s = r;
                    });
                },
                $digest: function() {
                    var r, i, o, u, c = this.$$asyncQueue, l = this.$$postDigestQueue, p, h, d = t, g, y = [], _, b, w;
                    f("$digest");
                    a.$$checkUrlChange();
                    n = null;
                    do {
                        h = !1;
                        for (g = this; c.length; ) {
                            try {
                                w = c.shift(), w.scope.$eval(w.expression);
                            } catch (x) {
                                m.$$phase = null, s(x);
                            }
                            n = null;
                        }
                        t: do {
                            if (u = g.$$watchers) for (p = u.length; p--; ) try {
                                if (r = u[p]) if ((i = r.get(g)) !== (o = r.last) && !(r.eq ? R(i, o) : "number" === typeof i && "number" === typeof o && isNaN(i) && isNaN(o))) h = !0, 
                                n = r, r.last = r.eq ? O(i, null) : i, r.fn(i, o === v ? i : o, g), 5 > d && (_ = 4 - d, 
                                y[_] || (y[_] = []), b = j(r.exp) ? "fn: " + (r.exp.name || r.exp.toString()) : r.exp, 
                                b += "; newVal: " + N(i) + "; oldVal: " + N(o), y[_].push(b)); else if (r === n) {
                                    h = !1;
                                    break t;
                                }
                            } catch (S) {
                                m.$$phase = null, s(S);
                            }
                            if (!(u = g.$$childHead || g !== this && g.$$nextSibling)) for (;g !== this && !(u = g.$$nextSibling); ) g = g.$parent;
                        } while (g = u);
                        if ((h || c.length) && !d--) throw m.$$phase = null, e("infdig", t, N(y));
                    } while (h || c.length);
                    for (m.$$phase = null; l.length; ) try {
                        l.shift()();
                    } catch (k) {
                        s(k);
                    }
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var t = this.$parent;
                        this.$broadcast("$destroy");
                        this.$$destroyed = !0;
                        this !== m && (o(this.$$listenerCount, F(null, h, this)), t.$$childHead == this && (t.$$childHead = this.$$nextSibling), 
                        t.$$childTail == this && (t.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), 
                        this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = null, 
                        this.$$listeners = {}, this.$$watchers = this.$$asyncQueue = this.$$postDigestQueue = [], 
                        this.$destroy = this.$digest = this.$apply = d, this.$on = this.$watch = function() {
                            return d;
                        });
                    }
                },
                $eval: function(t, e) {
                    return u(t)(this, e);
                },
                $evalAsync: function(t) {
                    m.$$phase || m.$$asyncQueue.length || a.defer(function() {
                        m.$$asyncQueue.length && m.$digest();
                    });
                    this.$$asyncQueue.push({
                        scope: this,
                        expression: t
                    });
                },
                $$postDigest: function(t) {
                    this.$$postDigestQueue.push(t);
                },
                $apply: function(t) {
                    try {
                        return f("$apply"), this.$eval(t);
                    } catch (e) {
                        s(e);
                    } finally {
                        m.$$phase = null;
                        try {
                            m.$digest();
                        } catch (n) {
                            throw s(n), n;
                        }
                    }
                },
                $on: function(t, e) {
                    var n = this.$$listeners[t];
                    n || (this.$$listeners[t] = n = []);
                    n.push(e);
                    var r = this;
                    do r.$$listenerCount[t] || (r.$$listenerCount[t] = 0), r.$$listenerCount[t]++; while (r = r.$parent);
                    var i = this;
                    return function() {
                        n[C(n, e)] = null;
                        h(i, 1, t);
                    };
                },
                $emit: function(t, e) {
                    var n = [], r, i = this, o = !1, u = {
                        name: t,
                        targetScope: i,
                        stopPropagation: function() {
                            o = !0;
                        },
                        preventDefault: function() {
                            u.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    }, a = [ u ].concat(Qn.call(arguments, 1)), c, l;
                    do {
                        r = i.$$listeners[t] || n;
                        u.currentScope = i;
                        c = 0;
                        for (l = r.length; c < l; c++) if (r[c]) try {
                            r[c].apply(null, a);
                        } catch (f) {
                            s(f);
                        } else r.splice(c, 1), c--, l--;
                        if (o) break;
                        i = i.$parent;
                    } while (i);
                    return u;
                },
                $broadcast: function(t, e) {
                    for (var n = this, r = this, i = {
                        name: t,
                        targetScope: this,
                        preventDefault: function() {
                            i.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    }, o = [ i ].concat(Qn.call(arguments, 1)), u, a; n = r; ) {
                        i.currentScope = n;
                        r = n.$$listeners[t] || [];
                        u = 0;
                        for (a = r.length; u < a; u++) if (r[u]) try {
                            r[u].apply(null, o);
                        } catch (c) {
                            s(c);
                        } else r.splice(u, 1), u--, a--;
                        if (!(r = n.$$listenerCount[t] && n.$$childHead || n !== this && n.$$nextSibling)) for (;n !== this && !(r = n.$$nextSibling); ) n = n.$parent;
                    }
                    return i;
                }
            };
            var m = new l();
            return m;
        } ];
    }
    function vn() {
        var t = /^\s*(https?|ftp|mailto|tel|file):/, e = /^\s*((https?|ftp|file):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(e) {
            return y(e) ? (t = e, this) : t;
        };
        this.imgSrcSanitizationWhitelist = function(t) {
            return y(t) ? (e = t, this) : e;
        };
        this.$get = function() {
            return function(n, r) {
                var i = r ? e : t, o;
                if (!Yn || 8 <= Yn) if (o = wn(n).href, "" !== o && !o.match(i)) return "unsafe:" + o;
                return n;
            };
        };
    }
    function mn(t) {
        if ("self" === t) return t;
        if (b(t)) {
            if (-1 < t.indexOf("***")) throw Gr("iwcard", t);
            t = t.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");
            return RegExp("^" + t + "$");
        }
        if (S(t)) return RegExp("^" + t.source + "$");
        throw Gr("imatcher");
    }
    function gn(t) {
        var e = [];
        y(t) && o(t, function(t) {
            e.push(mn(t));
        });
        return e;
    }
    function yn() {
        this.SCE_CONTEXTS = Kr;
        var t = [ "self" ], e = [];
        this.resourceUrlWhitelist = function(e) {
            arguments.length && (t = gn(e));
            return t;
        };
        this.resourceUrlBlacklist = function(t) {
            arguments.length && (e = gn(t));
            return e;
        };
        this.$get = [ "$injector", function(r) {
            function i(t) {
                var e = function(t) {
                    this.$$unwrapTrustedValue = function() {
                        return t;
                    };
                };
                t && (e.prototype = new t());
                e.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue();
                };
                e.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString();
                };
                return e;
            }
            var o = function(t) {
                throw Gr("unsafe");
            };
            r.has("$sanitize") && (o = r.get("$sanitize"));
            var s = i(), u = {};
            u[Kr.HTML] = i(s);
            u[Kr.CSS] = i(s);
            u[Kr.URL] = i(s);
            u[Kr.JS] = i(s);
            u[Kr.RESOURCE_URL] = i(u[Kr.URL]);
            return {
                trustAs: function(t, e) {
                    var r = u.hasOwnProperty(t) ? u[t] : null;
                    if (!r) throw Gr("icontext", t, e);
                    if (null === e || e === n || "" === e) return e;
                    if ("string" !== typeof e) throw Gr("itype", t);
                    return new r(e);
                },
                getTrusted: function(r, i) {
                    if (null === i || i === n || "" === i) return i;
                    var s = u.hasOwnProperty(r) ? u[r] : null;
                    if (s && i instanceof s) return i.$$unwrapTrustedValue();
                    if (r === Kr.RESOURCE_URL) {
                        var s = wn(i.toString()), a, c, l = !1;
                        a = 0;
                        for (c = t.length; a < c; a++) if ("self" === t[a] ? xn(s) : t[a].exec(s.href)) {
                            l = !0;
                            break;
                        }
                        if (l) for (a = 0, c = e.length; a < c; a++) if ("self" === e[a] ? xn(s) : e[a].exec(s.href)) {
                            l = !1;
                            break;
                        }
                        if (l) return i;
                        throw Gr("insecurl", i.toString());
                    }
                    if (r === Kr.HTML) return o(i);
                    throw Gr("unsafe");
                },
                valueOf: function(t) {
                    return t instanceof s ? t.$$unwrapTrustedValue() : t;
                }
            };
        } ];
    }
    function $n() {
        var t = !0;
        this.enabled = function(e) {
            arguments.length && (t = !!e);
            return t;
        };
        this.$get = [ "$parse", "$sniffer", "$sceDelegate", function(e, n, r) {
            if (t && n.msie && 8 > n.msieDocumentMode) throw Gr("iequirks");
            var i = P(Kr);
            i.isEnabled = function() {
                return t;
            };
            i.trustAs = r.trustAs;
            i.getTrusted = r.getTrusted;
            i.valueOf = r.valueOf;
            t || (i.trustAs = i.getTrusted = function(t, e) {
                return e;
            }, i.valueOf = v);
            i.parseAs = function(t, n) {
                var r = e(n);
                return r.literal && r.constant ? r : function(e, n) {
                    return i.getTrusted(t, r(e, n));
                };
            };
            var s = i.parseAs, u = i.getTrusted, a = i.trustAs;
            o(Kr, function(t, e) {
                var n = zn(e);
                i[ee("parse_as_" + n)] = function(e) {
                    return s(t, e);
                };
                i[ee("get_trusted_" + n)] = function(e) {
                    return u(t, e);
                };
                i[ee("trust_as_" + n)] = function(e) {
                    return a(t, e);
                };
            });
            return i;
        } ];
    }
    function _n() {
        this.$get = [ "$window", "$document", function(t, e) {
            var n = {}, r = p((/android (\d+)/.exec(zn((t.navigator || {}).userAgent)) || [])[1]), i = /Boxee/i.test((t.navigator || {}).userAgent), o = e[0] || {}, s = o.documentMode, u, a = /^(Moz|webkit|O|ms)(?=[A-Z])/, c = o.body && o.body.style, l = !1, f = !1;
            if (c) {
                for (var h in c) if (l = a.exec(h)) {
                    u = l[0];
                    u = u.substr(0, 1).toUpperCase() + u.substr(1);
                    break;
                }
                u || (u = "WebkitOpacity" in c && "webkit");
                l = !!("transition" in c || u + "Transition" in c);
                f = !!("animation" in c || u + "Animation" in c);
                !r || l && f || (l = b(o.body.style.webkitTransition), f = b(o.body.style.webkitAnimation));
            }
            return {
                history: !(!t.history || !t.history.pushState || 4 > r || i),
                hashchange: "onhashchange" in t && (!s || 7 < s),
                hasEvent: function(t) {
                    if ("input" == t && 9 == Yn) return !1;
                    if (g(n[t])) {
                        var e = o.createElement("div");
                        n[t] = "on" + t in e;
                    }
                    return n[t];
                },
                csp: sr(),
                vendorPrefix: u,
                transitions: l,
                animations: f,
                android: r,
                msie: Yn,
                msieDocumentMode: s
            };
        } ];
    }
    function bn() {
        this.$get = [ "$rootScope", "$browser", "$q", "$exceptionHandler", function(t, e, n, r) {
            function i(i, s, u) {
                var a = n.defer(), c = a.promise, l = y(u) && !u;
                s = e.defer(function() {
                    try {
                        a.resolve(i());
                    } catch (e) {
                        a.reject(e), r(e);
                    } finally {
                        delete o[c.$$timeoutId];
                    }
                    l || t.$apply();
                }, s);
                c.$$timeoutId = s;
                o[s] = a;
                return c;
            }
            var o = {};
            i.cancel = function(t) {
                return t && t.$$timeoutId in o ? (o[t.$$timeoutId].reject("canceled"), delete o[t.$$timeoutId], 
                e.defer.cancel(t.$$timeoutId)) : !1;
            };
            return i;
        } ];
    }
    function wn(t, e) {
        var n = t;
        Yn && (Qr.setAttribute("href", n), n = Qr.href);
        Qr.setAttribute("href", n);
        return {
            href: Qr.href,
            protocol: Qr.protocol ? Qr.protocol.replace(/:$/, "") : "",
            host: Qr.host,
            search: Qr.search ? Qr.search.replace(/^\?/, "") : "",
            hash: Qr.hash ? Qr.hash.replace(/^#/, "") : "",
            hostname: Qr.hostname,
            port: Qr.port,
            pathname: "/" === Qr.pathname.charAt(0) ? Qr.pathname : "/" + Qr.pathname
        };
    }
    function xn(t) {
        t = b(t) ? wn(t) : t;
        return t.protocol === Jr.protocol && t.host === Jr.host;
    }
    function jn() {
        this.$get = m(t);
    }
    function Sn(t) {
        function e(r, i) {
            if (_(r)) {
                var s = {};
                o(r, function(t, n) {
                    s[n] = e(n, t);
                });
                return s;
            }
            return t.factory(r + n, i);
        }
        var n = "Filter";
        this.register = e;
        this.$get = [ "$injector", function(t) {
            return function(e) {
                return t.get(e + n);
            };
        } ];
        e("currency", Tn);
        e("date", Pn);
        e("filter", kn);
        e("json", Rn);
        e("limitTo", Fn);
        e("lowercase", ni);
        e("number", En);
        e("orderBy", Mn);
        e("uppercase", ri);
    }
    function kn() {
        return function(t, e, n) {
            if (!ir(t)) return t;
            var r = typeof n, i = [];
            i.check = function(t) {
                for (var e = 0; e < i.length; e++) if (!i[e](t)) return !1;
                return !0;
            };
            "function" !== r && (n = "boolean" === r && n ? function(t, e) {
                return tr.equals(t, e);
            } : function(t, e) {
                if (t && e && "object" === typeof t && "object" === typeof e) {
                    for (var r in t) if ("$" !== r.charAt(0) && Bn.call(t, r) && n(t[r], e[r])) return !0;
                    return !1;
                }
                e = ("" + e).toLowerCase();
                return -1 < ("" + t).toLowerCase().indexOf(e);
            });
            var o = function(t, e) {
                if ("string" == typeof e && "!" === e.charAt(0)) return !o(t, e.substr(1));
                switch (typeof t) {
                  case "boolean":
                  case "number":
                  case "string":
                    return n(t, e);

                  case "object":
                    switch (typeof e) {
                      case "object":
                        return n(t, e);

                      default:
                        for (var r in t) if ("$" !== r.charAt(0) && o(t[r], e)) return !0;
                    }
                    return !1;

                  case "array":
                    for (r = 0; r < t.length; r++) if (o(t[r], e)) return !0;
                    return !1;

                  default:
                    return !1;
                }
            };
            switch (typeof e) {
              case "boolean":
              case "number":
              case "string":
                e = {
                    $: e
                };

              case "object":
                for (var s in e) (function(t) {
                    "undefined" !== typeof e[t] && i.push(function(n) {
                        return o("$" == t ? n : n && n[t], e[t]);
                    });
                })(s);
                break;

              case "function":
                i.push(e);
                break;

              default:
                return t;
            }
            r = [];
            for (s = 0; s < t.length; s++) {
                var u = t[s];
                i.check(u) && r.push(u);
            }
            return r;
        };
    }
    function Tn(t) {
        var e = t.NUMBER_FORMATS;
        return function(t, n) {
            g(n) && (n = e.CURRENCY_SYM);
            return Cn(t, e.PATTERNS[1], e.GROUP_SEP, e.DECIMAL_SEP, 2).replace(/\u00A4/g, n);
        };
    }
    function En(t) {
        var e = t.NUMBER_FORMATS;
        return function(t, n) {
            return Cn(t, e.PATTERNS[0], e.GROUP_SEP, e.DECIMAL_SEP, n);
        };
    }
    function Cn(t, e, n, r, i) {
        if (null == t || !isFinite(t) || _(t)) return "";
        var o = 0 > t;
        t = Math.abs(t);
        var s = t + "", u = "", a = [], c = !1;
        if (-1 !== s.indexOf("e")) {
            var l = s.match(/([\d\.]+)e(-?)(\d+)/);
            l && "-" == l[2] && l[3] > i + 1 ? (s = "0", t = 0) : (u = s, c = !0);
        }
        if (c) 0 < i && (-1 < t && 1 > t) && (u = t.toFixed(i)); else {
            s = (s.split(Xr)[1] || "").length;
            g(i) && (i = Math.min(Math.max(e.minFrac, s), e.maxFrac));
            t = +(Math.round(+(t.toString() + "e" + i)).toString() + "e" + -i);
            0 === t && (o = !1);
            t = ("" + t).split(Xr);
            s = t[0];
            t = t[1] || "";
            var l = 0, f = e.lgSize, p = e.gSize;
            if (s.length >= f + p) for (l = s.length - f, c = 0; c < l; c++) 0 === (l - c) % p && 0 !== c && (u += n), 
            u += s.charAt(c);
            for (c = l; c < s.length; c++) 0 === (s.length - c) % f && 0 !== c && (u += n), 
            u += s.charAt(c);
            for (;t.length < i; ) t += "0";
            i && "0" !== i && (u += r + t.substr(0, i));
        }
        a.push(o ? e.negPre : e.posPre);
        a.push(u);
        a.push(o ? e.negSuf : e.posSuf);
        return a.join("");
    }
    function An(t, e, n) {
        var r = "";
        0 > t && (r = "-", t = -t);
        for (t = "" + t; t.length < e; ) t = "0" + t;
        n && (t = t.substr(t.length - e));
        return r + t;
    }
    function $(t, e, n, r) {
        n = n || 0;
        return function(i) {
            i = i["get" + t]();
            if (0 < n || i > -n) i += n;
            0 === i && -12 == n && (i = 12);
            return An(i, e, r);
        };
    }
    function On(t, e) {
        return function(n, r) {
            var i = n["get" + t](), o = Wn(e ? "SHORT" + t : t);
            return r[o][i];
        };
    }
    function Pn(t) {
        function e(t) {
            var e;
            if (e = t.match(n)) {
                t = new Date(0);
                var r = 0, i = 0, o = e[8] ? t.setUTCFullYear : t.setFullYear, s = e[8] ? t.setUTCHours : t.setHours;
                e[9] && (r = p(e[9] + e[10]), i = p(e[9] + e[11]));
                o.call(t, p(e[1]), p(e[2]) - 1, p(e[3]));
                r = p(e[4] || 0) - r;
                i = p(e[5] || 0) - i;
                o = p(e[6] || 0);
                e = Math.round(1e3 * parseFloat("0." + (e[7] || 0)));
                s.call(t, r, i, o, e);
            }
            return t;
        }
        var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(n, r) {
            var i = "", s = [], u, a;
            r = r || "mediumDate";
            r = t.DATETIME_FORMATS[r] || r;
            b(n) && (n = ei.test(n) ? p(n) : e(n));
            w(n) && (n = new Date(n));
            if (!x(n)) return n;
            for (;r; ) (a = ti.exec(r)) ? (s = s.concat(Qn.call(a, 1)), r = s.pop()) : (s.push(r), 
            r = null);
            o(s, function(e) {
                u = Zr[e];
                i += u ? u(n, t.DATETIME_FORMATS) : e.replace(/(^'|'$)/g, "").replace(/''/g, "'");
            });
            return i;
        };
    }
    function Rn() {
        return function(t) {
            return N(t, !0);
        };
    }
    function Fn() {
        return function(t, e) {
            if (!ir(t) && !b(t)) return t;
            e = Infinity === Math.abs(Number(e)) ? Number(e) : p(e);
            if (b(t)) return e ? 0 <= e ? t.slice(0, e) : t.slice(e, t.length) : "";
            var n = [], r, i;
            e > t.length ? e = t.length : e < -t.length && (e = -t.length);
            0 < e ? (r = 0, i = e) : (r = t.length + e, i = t.length);
            for (;r < i; r++) n.push(t[r]);
            return n;
        };
    }
    function Mn(t) {
        return function(e, n, r) {
            function o(t, e) {
                return q(e) ? function(e, n) {
                    return t(n, e);
                } : t;
            }
            function s(t, e) {
                var n = typeof t, r = typeof e;
                return n == r ? (x(t) && x(e) && (t = t.valueOf(), e = e.valueOf()), "string" == n && (t = t.toLowerCase(), 
                e = e.toLowerCase()), t === e ? 0 : t < e ? -1 : 1) : n < r ? -1 : 1;
            }
            if (!i(e) || !n) return e;
            n = ir(n) ? n : [ n ];
            n = E(n, function(e) {
                var n = !1, r = e || v;
                if (b(e)) {
                    if ("+" == e.charAt(0) || "-" == e.charAt(0)) n = "-" == e.charAt(0), e = e.substring(1);
                    r = t(e);
                    if (r.constant) {
                        var i = r();
                        return o(function(t, e) {
                            return s(t[i], e[i]);
                        }, n);
                    }
                }
                return o(function(t, e) {
                    return s(r(t), r(e));
                }, n);
            });
            for (var u = [], a = 0; a < e.length; a++) u.push(e[a]);
            return u.sort(o(function(t, e) {
                for (var r = 0; r < n.length; r++) {
                    var i = n[r](t, e);
                    if (0 !== i) return i;
                }
                return 0;
            }, r));
        };
    }
    function Nn(t) {
        j(t) && (t = {
            link: t
        });
        t.restrict = t.restrict || "AC";
        return m(t);
    }
    function In(t, e, n, r) {
        function i(e, n) {
            n = n ? "-" + Y(n, "-") : "";
            r.setClass(t, (e ? mi : gi) + n, (e ? gi : mi) + n);
        }
        var s = this, u = t.parent().controller("form") || si, a = 0, c = s.$error = {}, l = [];
        s.$name = e.name || e.ngForm;
        s.$dirty = !1;
        s.$pristine = !0;
        s.$valid = !0;
        s.$invalid = !1;
        u.$addControl(s);
        t.addClass(yi);
        i(!0);
        s.$addControl = function(t) {
            Q(t.$name, "input");
            l.push(t);
            t.$name && (s[t.$name] = t);
        };
        s.$removeControl = function(t) {
            t.$name && s[t.$name] === t && delete s[t.$name];
            o(c, function(e, n) {
                s.$setValidity(n, !0, t);
            });
            A(l, t);
        };
        s.$setValidity = function(t, e, n) {
            var r = c[t];
            if (e) r && (A(r, n), r.length || (a--, a || (i(e), s.$valid = !0, s.$invalid = !1), 
            c[t] = !1, i(!0, t), u.$setValidity(t, !0, s))); else {
                a || i(e);
                if (r) {
                    if (-1 != C(r, n)) return;
                } else c[t] = r = [], a++, i(!1, t), u.$setValidity(t, !1, s);
                r.push(n);
                s.$valid = !1;
                s.$invalid = !0;
            }
        };
        s.$setDirty = function() {
            r.removeClass(t, yi);
            r.addClass(t, $i);
            s.$dirty = !0;
            s.$pristine = !1;
            u.$setDirty();
        };
        s.$setPristine = function() {
            r.removeClass(t, $i);
            r.addClass(t, yi);
            s.$dirty = !1;
            s.$pristine = !0;
            o(l, function(t) {
                t.$setPristine();
            });
        };
    }
    function qn(t, e, r, i) {
        t.$setValidity(e, r);
        return r ? i : n;
    }
    function Dn(t, e) {
        var n, r;
        if (e) for (n = 0; n < e.length; ++n) if (r = e[n], t[r]) return !0;
        return !1;
    }
    function Hn(t, e, n, r, i) {
        _(i) && (t.$$hasNativeValidators = !0, t.$parsers.push(function(o) {
            if (t.$error[e] || Dn(i, r) || !Dn(i, n)) return o;
            t.$setValidity(e, !1);
        }));
    }
    function Vn(t, e, n, i, o, s) {
        var u = e.prop(Ln), a = e[0].placeholder, c = {}, l = zn(e[0].type);
        i.$$validityState = u;
        if (!o.android) {
            var f = !1;
            e.on("compositionstart", function(t) {
                f = !0;
            });
            e.on("compositionend", function() {
                f = !1;
                h();
            });
        }
        var h = function(r) {
            if (!f) {
                var o = e.val();
                if (Yn && "input" === (r || c).type && e[0].placeholder !== a) a = e[0].placeholder; else if ("password" !== l && q(n.ngTrim || "T") && (o = or(o)), 
                r = u && i.$$hasNativeValidators, i.$viewValue !== o || "" === o && r) t.$root.$$phase ? i.$setViewValue(o) : t.$apply(function() {
                    i.$setViewValue(o);
                });
            }
        };
        if (o.hasEvent("input")) e.on("input", h); else {
            var d, v = function() {
                d || (d = s.defer(function() {
                    h();
                    d = null;
                }));
            };
            e.on("keydown", function(t) {
                t = t.keyCode;
                91 === t || (15 < t && 19 > t || 37 <= t && 40 >= t) || v();
            });
            if (o.hasEvent("paste")) e.on("paste cut", v);
        }
        e.on("change", h);
        i.$render = function() {
            e.val(i.$isEmpty(i.$viewValue) ? "" : i.$viewValue);
        };
        var m = n.ngPattern;
        m && ((o = m.match(/^\/(.*)\/([gim]*)$/)) ? (m = RegExp(o[1], o[2]), o = function(t) {
            return qn(i, "pattern", i.$isEmpty(t) || m.test(t), t);
        }) : o = function(n) {
            var o = t.$eval(m);
            if (!o || !o.test) throw r("ngPattern")("noregexp", m, o, D(e));
            return qn(i, "pattern", i.$isEmpty(n) || o.test(n), n);
        }, i.$formatters.push(o), i.$parsers.push(o));
        if (n.ngMinlength) {
            var g = p(n.ngMinlength);
            o = function(t) {
                return qn(i, "minlength", i.$isEmpty(t) || t.length >= g, t);
            };
            i.$parsers.push(o);
            i.$formatters.push(o);
        }
        if (n.ngMaxlength) {
            var y = p(n.ngMaxlength);
            o = function(t) {
                return qn(i, "maxlength", i.$isEmpty(t) || t.length <= y, t);
            };
            i.$parsers.push(o);
            i.$formatters.push(o);
        }
    }
    function Un(t, e) {
        t = "ngClass" + t;
        return [ "$animate", function(n) {
            function r(t, e) {
                var n = [], r = 0;
                t: for (;r < t.length; r++) {
                    for (var i = t[r], o = 0; o < e.length; o++) if (i == e[o]) continue t;
                    n.push(i);
                }
                return n;
            }
            function i(t) {
                if (!ir(t)) {
                    if (b(t)) return t.split(" ");
                    if (_(t)) {
                        var e = [];
                        o(t, function(t, n) {
                            t && (e = e.concat(n.split(" ")));
                        });
                        return e;
                    }
                }
                return t;
            }
            return {
                restrict: "AC",
                link: function(s, u, a) {
                    function c(t, e) {
                        var n = u.data("$classCounts") || {}, r = [];
                        o(t, function(t) {
                            if (0 < e || n[t]) n[t] = (n[t] || 0) + e, n[t] === +(0 < e) && r.push(t);
                        });
                        u.data("$classCounts", n);
                        return r.join(" ");
                    }
                    function l(t) {
                        if (!0 === e || s.$index % 2 === e) {
                            var o = i(t || []);
                            if (!f) {
                                var l = c(o, 1);
                                a.$addClass(l);
                            } else if (!R(t, f)) {
                                var p = i(f), l = r(o, p), o = r(p, o), o = c(o, -1), l = c(l, 1);
                                0 === l.length ? n.removeClass(u, o) : 0 === o.length ? n.addClass(u, l) : n.setClass(u, l, o);
                            }
                        }
                        f = P(t);
                    }
                    var f;
                    s.$watch(a[t], l, !0);
                    a.$observe("class", function(e) {
                        l(s.$eval(a[t]));
                    });
                    "ngClass" !== t && s.$watch("$index", function(n, r) {
                        var o = n & 1;
                        if (o !== (r & 1)) {
                            var u = i(s.$eval(a[t]));
                            o === e ? (o = c(u, 1), a.$addClass(o)) : (o = c(u, -1), a.$removeClass(o));
                        }
                    });
                }
            };
        } ];
    }
    var Ln = "validity", zn = function(t) {
        return b(t) ? t.toLowerCase() : t;
    }, Bn = Object.prototype.hasOwnProperty, Wn = function(t) {
        return b(t) ? t.toUpperCase() : t;
    }, Yn, Gn, Kn, Qn = [].slice, Jn = [].push, Xn = Object.prototype.toString, Zn = r("ng"), tr = t.angular || (t.angular = {}), er, nr, rr = [ "0", "0", "0" ];
    Yn = p((/msie (\d+)/.exec(zn(navigator.userAgent)) || [])[1]);
    isNaN(Yn) && (Yn = p((/trident\/.*; rv:(\d+)/.exec(zn(navigator.userAgent)) || [])[1]));
    d.$inject = [];
    v.$inject = [];
    var ir = function() {
        return j(Array.isArray) ? Array.isArray : function(t) {
            return "[object Array]" === Xn.call(t);
        };
    }(), or = function() {
        return String.prototype.trim ? function(t) {
            return b(t) ? t.trim() : t;
        } : function(t) {
            return b(t) ? t.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : t;
        };
    }();
    nr = 9 > Yn ? function(t) {
        t = t.nodeName ? t : t[0];
        return t.scopeName && "HTML" != t.scopeName ? Wn(t.scopeName + ":" + t.nodeName) : t.nodeName;
    } : function(t) {
        return t.nodeName ? t.nodeName : t[0].nodeName;
    };
    var sr = function() {
        if (y(sr.isActive_)) return sr.isActive_;
        var t = !(!e.querySelector("[ng-csp]") && !e.querySelector("[data-ng-csp]"));
        if (!t) try {
            new Function("");
        } catch (n) {
            t = !0;
        }
        return sr.isActive_ = t;
    }, ur = /[A-Z]/g, ar = {
        full: "1.2.26",
        major: 1,
        minor: 2,
        dot: 26,
        codeName: "zucchini-expansion"
    };
    re.expando = "ng339";
    var cr = re.cache = {}, lr = 1, fr = t.document.addEventListener ? function(t, e, n) {
        t.addEventListener(e, n, !1);
    } : function(t, e, n) {
        t.attachEvent("on" + e, n);
    }, pr = t.document.removeEventListener ? function(t, e, n) {
        t.removeEventListener(e, n, !1);
    } : function(t, e, n) {
        t.detachEvent("on" + e, n);
    };
    re._data = function(t) {
        return this.cache[t[this.expando]] || {};
    };
    var hr = /([\:\-\_]+(.))/g, dr = /^moz([A-Z])/, vr = r("jqLite"), mr = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, gr = /<|&#?\w+;/, yr = /<([\w:]+)/, $r = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, _r = {
        option: [ 1, '<select multiple="multiple">', "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    _r.optgroup = _r.option;
    _r.tbody = _r.tfoot = _r.colgroup = _r.caption = _r.thead;
    _r.th = _r.td;
    var br = re.prototype = {
        ready: function(n) {
            function r() {
                i || (i = !0, n());
            }
            var i = !1;
            "complete" === e.readyState ? setTimeout(r) : (this.on("DOMContentLoaded", r), re(t).on("load", r));
        },
        toString: function() {
            var t = [];
            o(this, function(e) {
                t.push("" + e);
            });
            return "[" + t.join(", ") + "]";
        },
        eq: function(t) {
            return 0 <= t ? Gn(this[t]) : Gn(this[this.length + t]);
        },
        length: 0,
        push: Jn,
        sort: [].sort,
        splice: [].splice
    }, wr = {};
    o("multiple selected checked disabled readOnly required open".split(" "), function(t) {
        wr[zn(t)] = t;
    });
    var xr = {};
    o("input select option textarea button form details".split(" "), function(t) {
        xr[Wn(t)] = !0;
    });
    o({
        data: ce,
        removeData: ue
    }, function(t, e) {
        re[e] = t;
    });
    o({
        data: ce,
        inheritedData: ve,
        scope: function(t) {
            return Gn.data(t, "$scope") || ve(t.parentNode || t, [ "$isolateScope", "$scope" ]);
        },
        isolateScope: function(t) {
            return Gn.data(t, "$isolateScope") || Gn.data(t, "$isolateScopeNoTemplate");
        },
        controller: de,
        injector: function(t) {
            return ve(t, "$injector");
        },
        removeAttr: function(t, e) {
            t.removeAttribute(e);
        },
        hasClass: le,
        css: function(t, e, r) {
            e = ee(e);
            if (y(r)) t.style[e] = r; else {
                var i;
                8 >= Yn && (i = t.currentStyle && t.currentStyle[e], "" === i && (i = "auto"));
                i = i || t.style[e];
                8 >= Yn && (i = "" === i ? n : i);
                return i;
            }
        },
        attr: function(t, e, r) {
            var i = zn(e);
            if (wr[i]) if (y(r)) r ? (t[e] = !0, t.setAttribute(e, i)) : (t[e] = !1, t.removeAttribute(i)); else return t[e] || (t.attributes.getNamedItem(e) || d).specified ? i : n; else if (y(r)) t.setAttribute(e, r); else if (t.getAttribute) return t = t.getAttribute(e, 2), 
            null === t ? n : t;
        },
        prop: function(t, e, n) {
            if (y(n)) t[e] = n; else return t[e];
        },
        text: function() {
            function t(t, n) {
                var r = e[t.nodeType];
                if (g(n)) return r ? t[r] : "";
                t[r] = n;
            }
            var e = [];
            9 > Yn ? (e[1] = "innerText", e[3] = "nodeValue") : e[1] = e[3] = "textContent";
            t.$dv = "";
            return t;
        }(),
        val: function(t, e) {
            if (g(e)) {
                if ("SELECT" === nr(t) && t.multiple) {
                    var n = [];
                    o(t.options, function(t) {
                        t.selected && n.push(t.value || t.text);
                    });
                    return 0 === n.length ? null : n;
                }
                return t.value;
            }
            t.value = e;
        },
        html: function(t, e) {
            if (g(e)) return t.innerHTML;
            for (var n = 0, r = t.childNodes; n < r.length; n++) oe(r[n]);
            t.innerHTML = e;
        },
        empty: me
    }, function(t, e) {
        re.prototype[e] = function(e, r) {
            var i, o, s = this.length;
            if (t !== me && (2 == t.length && t !== le && t !== de ? e : r) === n) {
                if (_(e)) {
                    for (i = 0; i < s; i++) if (t === ce) t(this[i], e); else for (o in e) t(this[i], o, e[o]);
                    return this;
                }
                i = t.$dv;
                s = i === n ? Math.min(s, 1) : s;
                for (o = 0; o < s; o++) {
                    var u = t(this[o], e, r);
                    i = i ? i + u : u;
                }
                return i;
            }
            for (i = 0; i < s; i++) t(this[i], e, r);
            return this;
        };
    });
    o({
        removeData: ue,
        dealoc: oe,
        on: function ro(t, n, r, i) {
            if (y(i)) throw vr("onargs");
            var s = ae(t, "events"), u = ae(t, "handle");
            s || ae(t, "events", s = {});
            u || ae(t, "handle", u = ye(t, s));
            o(n.split(" "), function(n) {
                var i = s[n];
                if (!i) {
                    if ("mouseenter" == n || "mouseleave" == n) {
                        var o = e.body.contains || e.body.compareDocumentPosition ? function(t, e) {
                            var n = 9 === t.nodeType ? t.documentElement : t, r = e && e.parentNode;
                            return t === r || !!(r && 1 === r.nodeType && (n.contains ? n.contains(r) : t.compareDocumentPosition && t.compareDocumentPosition(r) & 16));
                        } : function(t, e) {
                            if (e) for (;e = e.parentNode; ) if (e === t) return !0;
                            return !1;
                        };
                        s[n] = [];
                        ro(t, {
                            mouseleave: "mouseout",
                            mouseenter: "mouseover"
                        }[n], function(t) {
                            var e = t.relatedTarget;
                            e && (e === this || o(this, e)) || u(t, n);
                        });
                    } else fr(t, n, u), s[n] = [];
                    i = s[n];
                }
                i.push(r);
            });
        },
        off: se,
        one: function(t, e, n) {
            t = Gn(t);
            t.on(e, function r() {
                t.off(e, n);
                t.off(e, r);
            });
            t.on(e, n);
        },
        replaceWith: function(t, e) {
            var n, r = t.parentNode;
            oe(t);
            o(new re(e), function(e) {
                n ? r.insertBefore(e, n.nextSibling) : r.replaceChild(e, t);
                n = e;
            });
        },
        children: function(t) {
            var e = [];
            o(t.childNodes, function(t) {
                1 === t.nodeType && e.push(t);
            });
            return e;
        },
        contents: function(t) {
            return t.contentDocument || t.childNodes || [];
        },
        append: function(t, e) {
            o(new re(e), function(e) {
                1 !== t.nodeType && 11 !== t.nodeType || t.appendChild(e);
            });
        },
        prepend: function(t, e) {
            if (1 === t.nodeType) {
                var n = t.firstChild;
                o(new re(e), function(e) {
                    t.insertBefore(e, n);
                });
            }
        },
        wrap: function(t, e) {
            e = Gn(e)[0];
            var n = t.parentNode;
            n && n.replaceChild(e, t);
            e.appendChild(t);
        },
        remove: function(t) {
            oe(t);
            var e = t.parentNode;
            e && e.removeChild(t);
        },
        after: function(t, e) {
            var n = t, r = t.parentNode;
            o(new re(e), function(t) {
                r.insertBefore(t, n.nextSibling);
                n = t;
            });
        },
        addClass: pe,
        removeClass: fe,
        toggleClass: function(t, e, n) {
            e && o(e.split(" "), function(e) {
                var r = n;
                g(r) && (r = !le(t, e));
                (r ? pe : fe)(t, e);
            });
        },
        parent: function(t) {
            return (t = t.parentNode) && 11 !== t.nodeType ? t : null;
        },
        next: function(t) {
            if (t.nextElementSibling) return t.nextElementSibling;
            for (t = t.nextSibling; null != t && 1 !== t.nodeType; ) t = t.nextSibling;
            return t;
        },
        find: function(t, e) {
            return t.getElementsByTagName ? t.getElementsByTagName(e) : [];
        },
        clone: ie,
        triggerHandler: function(t, e, n) {
            var r, i;
            r = e.type || e;
            var s = (ae(t, "events") || {})[r];
            s && (r = {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                },
                isDefaultPrevented: function() {
                    return !0 === this.defaultPrevented;
                },
                stopPropagation: d,
                type: r,
                target: t
            }, e.type && (r = f(r, e)), e = P(s), i = n ? [ r ].concat(n) : [ r ], o(e, function(e) {
                e.apply(t, i);
            }));
        }
    }, function(t, e) {
        re.prototype[e] = function(e, n, r) {
            for (var i, o = 0; o < this.length; o++) g(i) ? (i = t(this[o], e, n, r), y(i) && (i = Gn(i))) : he(i, t(this[o], e, n, r));
            return y(i) ? i : this;
        };
        re.prototype.bind = re.prototype.on;
        re.prototype.unbind = re.prototype.off;
    });
    _e.prototype = {
        put: function(t, e) {
            this[$e(t, this.nextUid)] = e;
        },
        get: function(t) {
            return this[$e(t, this.nextUid)];
        },
        remove: function(t) {
            var e = this[t = $e(t, this.nextUid)];
            delete this[t];
            return e;
        }
    };
    var jr = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, Sr = /,/, kr = /^\s*(_?)(\S+?)\1\s*$/, Tr = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, Er = r("$injector"), Cr = r("$animate"), Ar = [ "$provide", function(t) {
        this.$$selectors = {};
        this.register = function(e, n) {
            var r = e + "-animation";
            if (e && "." != e.charAt(0)) throw Cr("notcsel", e);
            this.$$selectors[e.substr(1)] = r;
            t.factory(r, n);
        };
        this.classNameFilter = function(t) {
            1 === arguments.length && (this.$$classNameFilter = t instanceof RegExp ? t : null);
            return this.$$classNameFilter;
        };
        this.$get = [ "$timeout", "$$asyncCallback", function(t, e) {
            return {
                enter: function(t, n, r, i) {
                    r ? r.after(t) : (n && n[0] || (n = r.parent()), n.append(t));
                    i && e(i);
                },
                leave: function(t, n) {
                    t.remove();
                    n && e(n);
                },
                move: function(t, e, n, r) {
                    this.enter(t, e, n, r);
                },
                addClass: function(t, n, r) {
                    n = b(n) ? n : ir(n) ? n.join(" ") : "";
                    o(t, function(t) {
                        pe(t, n);
                    });
                    r && e(r);
                },
                removeClass: function(t, n, r) {
                    n = b(n) ? n : ir(n) ? n.join(" ") : "";
                    o(t, function(t) {
                        fe(t, n);
                    });
                    r && e(r);
                },
                setClass: function(t, n, r, i) {
                    o(t, function(t) {
                        pe(t, n);
                        fe(t, r);
                    });
                    i && e(i);
                },
                enabled: d
            };
        } ];
    } ], Or = r("$compile");
    Ce.$inject = [ "$provide", "$$sanitizeUriProvider" ];
    var Pr = /^(x[\:\-_]|data[\:\-_])/i, Rr = r("$interpolate"), Fr = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, Mr = {
        http: 80,
        https: 443,
        ftp: 21
    }, Nr = r("$location");
    Ze.prototype = Xe.prototype = Je.prototype = {
        $$html5: !1,
        $$replace: !1,
        absUrl: tn("$$absUrl"),
        url: function(t) {
            if (g(t)) return this.$$url;
            t = Fr.exec(t);
            t[1] && this.path(decodeURIComponent(t[1]));
            (t[2] || t[1]) && this.search(t[3] || "");
            this.hash(t[5] || "");
            return this;
        },
        protocol: tn("$$protocol"),
        host: tn("$$host"),
        port: tn("$$port"),
        path: en("$$path", function(t) {
            t = t ? t.toString() : "";
            return "/" == t.charAt(0) ? t : "/" + t;
        }),
        search: function(t, e) {
            switch (arguments.length) {
              case 0:
                return this.$$search;

              case 1:
                if (b(t) || w(t)) t = t.toString(), this.$$search = V(t); else if (_(t)) o(t, function(e, n) {
                    null == e && delete t[n];
                }), this.$$search = t; else throw Nr("isrcharg");
                break;

              default:
                g(e) || null === e ? delete this.$$search[t] : this.$$search[t] = e;
            }
            this.$$compose();
            return this;
        },
        hash: en("$$hash", function(t) {
            return t ? t.toString() : "";
        }),
        replace: function() {
            this.$$replace = !0;
            return this;
        }
    };
    var Ir = r("$parse"), qr = {}, Dr, Hr = Function.prototype.call, Vr = Function.prototype.apply, Ur = Function.prototype.bind, Lr = {
        "null": function() {
            return null;
        },
        "true": function() {
            return !0;
        },
        "false": function() {
            return !1;
        },
        undefined: d,
        "+": function(t, e, r, i) {
            r = r(t, e);
            i = i(t, e);
            return y(r) ? y(i) ? r + i : r : y(i) ? i : n;
        },
        "-": function(t, e, n, r) {
            n = n(t, e);
            r = r(t, e);
            return (y(n) ? n : 0) - (y(r) ? r : 0);
        },
        "*": function(t, e, n, r) {
            return n(t, e) * r(t, e);
        },
        "/": function(t, e, n, r) {
            return n(t, e) / r(t, e);
        },
        "%": function(t, e, n, r) {
            return n(t, e) % r(t, e);
        },
        "^": function(t, e, n, r) {
            return n(t, e) ^ r(t, e);
        },
        "=": d,
        "===": function(t, e, n, r) {
            return n(t, e) === r(t, e);
        },
        "!==": function(t, e, n, r) {
            return n(t, e) !== r(t, e);
        },
        "==": function(t, e, n, r) {
            return n(t, e) == r(t, e);
        },
        "!=": function(t, e, n, r) {
            return n(t, e) != r(t, e);
        },
        "<": function(t, e, n, r) {
            return n(t, e) < r(t, e);
        },
        ">": function(t, e, n, r) {
            return n(t, e) > r(t, e);
        },
        "<=": function(t, e, n, r) {
            return n(t, e) <= r(t, e);
        },
        ">=": function(t, e, n, r) {
            return n(t, e) >= r(t, e);
        },
        "&&": function(t, e, n, r) {
            return n(t, e) && r(t, e);
        },
        "||": function(t, e, n, r) {
            return n(t, e) || r(t, e);
        },
        "&": function(t, e, n, r) {
            return n(t, e) & r(t, e);
        },
        "|": function(t, e, n, r) {
            return r(t, e)(t, e, n(t, e));
        },
        "!": function(t, e, n) {
            return !n(t, e);
        }
    }, zr = {
        n: "\n",
        f: "\f",
        r: "\r",
        t: "	",
        v: "",
        "'": "'",
        '"': '"'
    }, Br = function(t) {
        this.options = t;
    };
    Br.prototype = {
        constructor: Br,
        lex: function(t) {
            this.text = t;
            this.index = 0;
            this.ch = n;
            this.lastCh = ":";
            for (this.tokens = []; this.index < this.text.length; ) {
                this.ch = this.text.charAt(this.index);
                if (this.is("\"'")) this.readString(this.ch); else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek())) this.readNumber(); else if (this.isIdent(this.ch)) this.readIdent(); else if (this.is("(){}[].,;:?")) this.tokens.push({
                    index: this.index,
                    text: this.ch
                }), this.index++; else if (this.isWhitespace(this.ch)) {
                    this.index++;
                    continue;
                } else {
                    t = this.ch + this.peek();
                    var e = t + this.peek(2), r = Lr[this.ch], i = Lr[t], o = Lr[e];
                    o ? (this.tokens.push({
                        index: this.index,
                        text: e,
                        fn: o
                    }), this.index += 3) : i ? (this.tokens.push({
                        index: this.index,
                        text: t,
                        fn: i
                    }), this.index += 2) : r ? (this.tokens.push({
                        index: this.index,
                        text: this.ch,
                        fn: r
                    }), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1);
                }
                this.lastCh = this.ch;
            }
            return this.tokens;
        },
        is: function(t) {
            return -1 !== t.indexOf(this.ch);
        },
        was: function(t) {
            return -1 !== t.indexOf(this.lastCh);
        },
        peek: function(t) {
            t = t || 1;
            return this.index + t < this.text.length ? this.text.charAt(this.index + t) : !1;
        },
        isNumber: function(t) {
            return "0" <= t && "9" >= t;
        },
        isWhitespace: function(t) {
            return " " === t || "\r" === t || "	" === t || "\n" === t || "" === t || " " === t;
        },
        isIdent: function(t) {
            return "a" <= t && "z" >= t || "A" <= t && "Z" >= t || "_" === t || "$" === t;
        },
        isExpOperator: function(t) {
            return "-" === t || "+" === t || this.isNumber(t);
        },
        throwError: function(t, e, n) {
            n = n || this.index;
            e = y(e) ? "s " + e + "-" + this.index + " [" + this.text.substring(e, n) + "]" : " " + n;
            throw Ir("lexerr", t, e, this.text);
        },
        readNumber: function() {
            for (var t = "", e = this.index; this.index < this.text.length; ) {
                var n = zn(this.text.charAt(this.index));
                if ("." == n || this.isNumber(n)) t += n; else {
                    var r = this.peek();
                    if ("e" == n && this.isExpOperator(r)) t += n; else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" == t.charAt(t.length - 1)) t += n; else if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" != t.charAt(t.length - 1)) break; else this.throwError("Invalid exponent");
                }
                this.index++;
            }
            t *= 1;
            this.tokens.push({
                index: e,
                text: t,
                literal: !0,
                constant: !0,
                fn: function() {
                    return t;
                }
            });
        },
        readIdent: function() {
            for (var t = this, e = "", n = this.index, r, i, o, s; this.index < this.text.length; ) {
                s = this.text.charAt(this.index);
                if ("." === s || this.isIdent(s) || this.isNumber(s)) "." === s && (r = this.index), 
                e += s; else break;
                this.index++;
            }
            if (r) for (i = this.index; i < this.text.length; ) {
                s = this.text.charAt(i);
                if ("(" === s) {
                    o = e.substr(r - n + 1);
                    e = e.substr(0, r - n);
                    this.index = i;
                    break;
                }
                if (this.isWhitespace(s)) i++; else break;
            }
            n = {
                index: n,
                text: e
            };
            if (Lr.hasOwnProperty(e)) n.fn = Lr[e], n.literal = !0, n.constant = !0; else {
                var u = cn(e, this.options, this.text);
                n.fn = f(function(t, e) {
                    return u(t, e);
                }, {
                    assign: function(n, r) {
                        return un(n, e, r, t.text, t.options);
                    }
                });
            }
            this.tokens.push(n);
            o && (this.tokens.push({
                index: r,
                text: "."
            }), this.tokens.push({
                index: r + 1,
                text: o
            }));
        },
        readString: function(t) {
            var e = this.index;
            this.index++;
            for (var n = "", r = t, i = !1; this.index < this.text.length; ) {
                var o = this.text.charAt(this.index), r = r + o;
                if (i) "u" === o ? (i = this.text.substring(this.index + 1, this.index + 5), i.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + i + "]"), 
                this.index += 4, n += String.fromCharCode(parseInt(i, 16))) : n += zr[o] || o, i = !1; else if ("\\" === o) i = !0; else {
                    if (o === t) {
                        this.index++;
                        this.tokens.push({
                            index: e,
                            text: r,
                            string: n,
                            literal: !0,
                            constant: !0,
                            fn: function() {
                                return n;
                            }
                        });
                        return;
                    }
                    n += o;
                }
                this.index++;
            }
            this.throwError("Unterminated quote", e);
        }
    };
    var Wr = function(t, e, n) {
        this.lexer = t;
        this.$filter = e;
        this.options = n;
    };
    Wr.ZERO = f(function() {
        return 0;
    }, {
        constant: !0
    });
    Wr.prototype = {
        constructor: Wr,
        parse: function(t) {
            this.text = t;
            this.tokens = this.lexer.lex(t);
            t = this.statements();
            0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
            t.literal = !!t.literal;
            t.constant = !!t.constant;
            return t;
        },
        primary: function() {
            var t;
            if (this.expect("(")) t = this.filterChain(), this.consume(")"); else if (this.expect("[")) t = this.arrayDeclaration(); else if (this.expect("{")) t = this.object(); else {
                var e = this.expect();
                (t = e.fn) || this.throwError("not a primary expression", e);
                t.literal = !!e.literal;
                t.constant = !!e.constant;
            }
            for (var n; e = this.expect("(", "[", "."); ) "(" === e.text ? (t = this.functionCall(t, n), 
            n = null) : "[" === e.text ? (n = t, t = this.objectIndex(t)) : "." === e.text ? (n = t, 
            t = this.fieldAccess(t)) : this.throwError("IMPOSSIBLE");
            return t;
        },
        throwError: function(t, e) {
            throw Ir("syntax", e.text, t, e.index + 1, this.text, this.text.substring(e.index));
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw Ir("ueoe", this.text);
            return this.tokens[0];
        },
        peek: function(t, e, n, r) {
            if (0 < this.tokens.length) {
                var i = this.tokens[0], o = i.text;
                if (o === t || o === e || o === n || o === r || !(t || e || n || r)) return i;
            }
            return !1;
        },
        expect: function(t, e, n, r) {
            return (t = this.peek(t, e, n, r)) ? (this.tokens.shift(), t) : !1;
        },
        consume: function(t) {
            this.expect(t) || this.throwError("is unexpected, expecting [" + t + "]", this.peek());
        },
        unaryFn: function(t, e) {
            return f(function(n, r) {
                return t(n, r, e);
            }, {
                constant: e.constant
            });
        },
        ternaryFn: function(t, e, n) {
            return f(function(r, i) {
                return t(r, i) ? e(r, i) : n(r, i);
            }, {
                constant: t.constant && e.constant && n.constant
            });
        },
        binaryFn: function(t, e, n) {
            return f(function(r, i) {
                return e(r, i, t, n);
            }, {
                constant: t.constant && n.constant
            });
        },
        statements: function() {
            for (var t = []; ;) if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && t.push(this.filterChain()), 
            !this.expect(";")) return 1 === t.length ? t[0] : function(e, n) {
                for (var r, i = 0; i < t.length; i++) {
                    var o = t[i];
                    o && (r = o(e, n));
                }
                return r;
            };
        },
        filterChain: function() {
            for (var t = this.expression(), e; ;) if (e = this.expect("|")) t = this.binaryFn(t, e.fn, this.filter()); else return t;
        },
        filter: function() {
            for (var t = this.expect(), e = this.$filter(t.text), n = []; ;) if (t = this.expect(":")) n.push(this.expression()); else {
                var r = function(t, r, i) {
                    i = [ i ];
                    for (var o = 0; o < n.length; o++) i.push(n[o](t, r));
                    return e.apply(t, i);
                };
                return function() {
                    return r;
                };
            }
        },
        expression: function() {
            return this.assignment();
        },
        assignment: function() {
            var t = this.ternary(), e, n;
            return (n = this.expect("=")) ? (t.assign || this.throwError("implies assignment but [" + this.text.substring(0, n.index) + "] can not be assigned to", n), 
            e = this.ternary(), function(n, r) {
                return t.assign(n, e(n, r), r);
            }) : t;
        },
        ternary: function() {
            var t = this.logicalOR(), e, n;
            if (this.expect("?")) {
                e = this.assignment();
                if (n = this.expect(":")) return this.ternaryFn(t, e, this.assignment());
                this.throwError("expected :", n);
            } else return t;
        },
        logicalOR: function() {
            for (var t = this.logicalAND(), e; ;) if (e = this.expect("||")) t = this.binaryFn(t, e.fn, this.logicalAND()); else return t;
        },
        logicalAND: function() {
            var t = this.equality(), e;
            if (e = this.expect("&&")) t = this.binaryFn(t, e.fn, this.logicalAND());
            return t;
        },
        equality: function() {
            var t = this.relational(), e;
            if (e = this.expect("==", "!=", "===", "!==")) t = this.binaryFn(t, e.fn, this.equality());
            return t;
        },
        relational: function() {
            var t = this.additive(), e;
            if (e = this.expect("<", ">", "<=", ">=")) t = this.binaryFn(t, e.fn, this.relational());
            return t;
        },
        additive: function() {
            for (var t = this.multiplicative(), e; e = this.expect("+", "-"); ) t = this.binaryFn(t, e.fn, this.multiplicative());
            return t;
        },
        multiplicative: function() {
            for (var t = this.unary(), e; e = this.expect("*", "/", "%"); ) t = this.binaryFn(t, e.fn, this.unary());
            return t;
        },
        unary: function() {
            var t;
            return this.expect("+") ? this.primary() : (t = this.expect("-")) ? this.binaryFn(Wr.ZERO, t.fn, this.unary()) : (t = this.expect("!")) ? this.unaryFn(t.fn, this.unary()) : this.primary();
        },
        fieldAccess: function(t) {
            var e = this, n = this.expect().text, r = cn(n, this.options, this.text);
            return f(function(e, n, i) {
                return r(i || t(e, n));
            }, {
                assign: function(r, i, o) {
                    (o = t(r, o)) || t.assign(r, o = {});
                    return un(o, n, i, e.text, e.options);
                }
            });
        },
        objectIndex: function(t) {
            var e = this, r = this.expression();
            this.consume("]");
            return f(function(i, o) {
                var s = t(i, o), u = r(i, o), a;
                on(u, e.text);
                if (!s) return n;
                (s = sn(s[u], e.text)) && (s.then && e.options.unwrapPromises) && (a = s, "$$v" in s || (a.$$v = n, 
                a.then(function(t) {
                    a.$$v = t;
                })), s = s.$$v);
                return s;
            }, {
                assign: function(n, i, o) {
                    var s = on(r(n, o), e.text);
                    (o = sn(t(n, o), e.text)) || t.assign(n, o = {});
                    return o[s] = i;
                }
            });
        },
        functionCall: function(t, e) {
            var n = [];
            if (")" !== this.peekToken().text) {
                do n.push(this.expression()); while (this.expect(","));
            }
            this.consume(")");
            var r = this;
            return function(i, o) {
                for (var s = [], u = e ? e(i, o) : i, a = 0; a < n.length; a++) s.push(sn(n[a](i, o), r.text));
                a = t(i, o, u) || d;
                sn(u, r.text);
                var c = r.text;
                if (a) {
                    if (a.constructor === a) throw Ir("isecfn", c);
                    if (a === Hr || a === Vr || Ur && a === Ur) throw Ir("isecff", c);
                }
                s = a.apply ? a.apply(u, s) : a(s[0], s[1], s[2], s[3], s[4]);
                return sn(s, r.text);
            };
        },
        arrayDeclaration: function() {
            var t = [], e = !0;
            if ("]" !== this.peekToken().text) {
                do {
                    if (this.peek("]")) break;
                    var n = this.expression();
                    t.push(n);
                    n.constant || (e = !1);
                } while (this.expect(","));
            }
            this.consume("]");
            return f(function(e, n) {
                for (var r = [], i = 0; i < t.length; i++) r.push(t[i](e, n));
                return r;
            }, {
                literal: !0,
                constant: e
            });
        },
        object: function() {
            var t = [], e = !0;
            if ("}" !== this.peekToken().text) {
                do {
                    if (this.peek("}")) break;
                    var n = this.expect(), n = n.string || n.text;
                    this.consume(":");
                    var r = this.expression();
                    t.push({
                        key: n,
                        value: r
                    });
                    r.constant || (e = !1);
                } while (this.expect(","));
            }
            this.consume("}");
            return f(function(e, n) {
                for (var r = {}, i = 0; i < t.length; i++) {
                    var o = t[i];
                    r[o.key] = o.value(e, n);
                }
                return r;
            }, {
                literal: !0,
                constant: e
            });
        }
    };
    var Yr = {}, Gr = r("$sce"), Kr = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
    }, Qr = e.createElement("a"), Jr = wn(t.location.href, !0);
    Sn.$inject = [ "$provide" ];
    Tn.$inject = [ "$locale" ];
    En.$inject = [ "$locale" ];
    var Xr = ".", Zr = {
        yyyy: $("FullYear", 4),
        yy: $("FullYear", 2, 0, !0),
        y: $("FullYear", 1),
        MMMM: On("Month"),
        MMM: On("Month", !0),
        MM: $("Month", 2, 1),
        M: $("Month", 1, 1),
        dd: $("Date", 2),
        d: $("Date", 1),
        HH: $("Hours", 2),
        H: $("Hours", 1),
        hh: $("Hours", 2, -12),
        h: $("Hours", 1, -12),
        mm: $("Minutes", 2),
        m: $("Minutes", 1),
        ss: $("Seconds", 2),
        s: $("Seconds", 1),
        sss: $("Milliseconds", 3),
        EEEE: On("Day"),
        EEE: On("Day", !0),
        a: function(t, e) {
            return 12 > t.getHours() ? e.AMPMS[0] : e.AMPMS[1];
        },
        Z: function(t) {
            t = -1 * t.getTimezoneOffset();
            return t = (0 <= t ? "+" : "") + (An(Math[0 < t ? "floor" : "ceil"](t / 60), 2) + An(Math.abs(t % 60), 2));
        }
    }, ti = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, ei = /^\-?\d+$/;
    Pn.$inject = [ "$locale" ];
    var ni = m(zn), ri = m(Wn);
    Mn.$inject = [ "$parse" ];
    var ii = m({
        restrict: "E",
        compile: function(t, n) {
            8 >= Yn && (n.href || n.name || n.$set("href", ""), t.append(e.createComment("IE fix")));
            if (!n.href && !n.xlinkHref && !n.name) return function(t, e) {
                var n = "[object SVGAnimatedString]" === Xn.call(e.prop("href")) ? "xlink:href" : "href";
                e.on("click", function(t) {
                    e.attr(n) || t.preventDefault();
                });
            };
        }
    }), oi = {};
    o(wr, function(t, e) {
        if ("multiple" != t) {
            var n = Ae("ng-" + e);
            oi[n] = function() {
                return {
                    priority: 100,
                    link: function(t, r, i) {
                        t.$watch(i[n], function(t) {
                            i.$set(e, !!t);
                        });
                    }
                };
            };
        }
    });
    o([ "src", "srcset", "href" ], function(t) {
        var e = Ae("ng-" + t);
        oi[e] = function() {
            return {
                priority: 99,
                link: function(n, r, i) {
                    var o = t, s = t;
                    "href" === t && "[object SVGAnimatedString]" === Xn.call(r.prop("href")) && (s = "xlinkHref", 
                    i.$attr[s] = "xlink:href", o = null);
                    i.$observe(e, function(e) {
                        e ? (i.$set(s, e), Yn && o && r.prop(o, i[s])) : "href" === t && i.$set(s, null);
                    });
                }
            };
        };
    });
    var si = {
        $addControl: d,
        $removeControl: d,
        $setValidity: d,
        $setDirty: d,
        $setPristine: d
    };
    In.$inject = [ "$element", "$attrs", "$scope", "$animate" ];
    var ui = function(t) {
        return [ "$timeout", function(e) {
            return {
                name: "form",
                restrict: t ? "EAC" : "E",
                controller: In,
                compile: function() {
                    return {
                        pre: function(t, r, i, o) {
                            if (!i.action) {
                                var s = function(t) {
                                    t.preventDefault ? t.preventDefault() : t.returnValue = !1;
                                };
                                fr(r[0], "submit", s);
                                r.on("$destroy", function() {
                                    e(function() {
                                        pr(r[0], "submit", s);
                                    }, 0, !1);
                                });
                            }
                            var u = r.parent().controller("form"), a = i.name || i.ngForm;
                            a && un(t, a, o, a);
                            if (u) r.on("$destroy", function() {
                                u.$removeControl(o);
                                a && un(t, a, n, a);
                                f(o, si);
                            });
                        }
                    };
                }
            };
        } ];
    }, ai = ui(), ci = ui(!0), li = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, fi = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, pi = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, hi = {
        text: Vn,
        number: function(t, e, r, i, o, s) {
            Vn(t, e, r, i, o, s);
            i.$parsers.push(function(t) {
                var e = i.$isEmpty(t);
                if (e || pi.test(t)) return i.$setValidity("number", !0), "" === t ? null : e ? t : parseFloat(t);
                i.$setValidity("number", !1);
                return n;
            });
            Hn(i, "number", di, null, i.$$validityState);
            i.$formatters.push(function(t) {
                return i.$isEmpty(t) ? "" : "" + t;
            });
            r.min && (t = function(t) {
                var e = parseFloat(r.min);
                return qn(i, "min", i.$isEmpty(t) || t >= e, t);
            }, i.$parsers.push(t), i.$formatters.push(t));
            r.max && (t = function(t) {
                var e = parseFloat(r.max);
                return qn(i, "max", i.$isEmpty(t) || t <= e, t);
            }, i.$parsers.push(t), i.$formatters.push(t));
            i.$formatters.push(function(t) {
                return qn(i, "number", i.$isEmpty(t) || w(t), t);
            });
        },
        url: function(t, e, n, r, i, o) {
            Vn(t, e, n, r, i, o);
            t = function(t) {
                return qn(r, "url", r.$isEmpty(t) || li.test(t), t);
            };
            r.$formatters.push(t);
            r.$parsers.push(t);
        },
        email: function(t, e, n, r, i, o) {
            Vn(t, e, n, r, i, o);
            t = function(t) {
                return qn(r, "email", r.$isEmpty(t) || fi.test(t), t);
            };
            r.$formatters.push(t);
            r.$parsers.push(t);
        },
        radio: function(t, e, n, r) {
            g(n.name) && e.attr("name", c());
            e.on("click", function() {
                e[0].checked && t.$apply(function() {
                    r.$setViewValue(n.value);
                });
            });
            r.$render = function() {
                e[0].checked = n.value == r.$viewValue;
            };
            n.$observe("value", r.$render);
        },
        checkbox: function(t, e, n, r) {
            var i = n.ngTrueValue, o = n.ngFalseValue;
            b(i) || (i = !0);
            b(o) || (o = !1);
            e.on("click", function() {
                t.$apply(function() {
                    r.$setViewValue(e[0].checked);
                });
            });
            r.$render = function() {
                e[0].checked = r.$viewValue;
            };
            r.$isEmpty = function(t) {
                return t !== i;
            };
            r.$formatters.push(function(t) {
                return t === i;
            });
            r.$parsers.push(function(t) {
                return t ? i : o;
            });
        },
        hidden: d,
        button: d,
        submit: d,
        reset: d,
        file: d
    }, di = [ "badInput" ], vi = [ "$browser", "$sniffer", function(t, e) {
        return {
            restrict: "E",
            require: "?ngModel",
            link: function(n, r, i, o) {
                o && (hi[zn(i.type)] || hi.text)(n, r, i, o, e, t);
            }
        };
    } ], mi = "ng-valid", gi = "ng-invalid", yi = "ng-pristine", $i = "ng-dirty", _i = [ "$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", function(t, e, n, i, s, u) {
        function a(t, e) {
            e = e ? "-" + Y(e, "-") : "";
            u.removeClass(i, (t ? gi : mi) + e);
            u.addClass(i, (t ? mi : gi) + e);
        }
        this.$modelValue = this.$viewValue = Number.NaN;
        this.$parsers = [];
        this.$formatters = [];
        this.$viewChangeListeners = [];
        this.$pristine = !0;
        this.$dirty = !1;
        this.$valid = !0;
        this.$invalid = !1;
        this.$name = n.name;
        var c = s(n.ngModel), l = c.assign;
        if (!l) throw r("ngModel")("nonassign", n.ngModel, D(i));
        this.$render = d;
        this.$isEmpty = function(t) {
            return g(t) || "" === t || null === t || t !== t;
        };
        var f = i.inheritedData("$formController") || si, p = 0, h = this.$error = {};
        i.addClass(yi);
        a(!0);
        this.$setValidity = function(t, e) {
            h[t] !== !e && (e ? (h[t] && p--, p || (a(!0), this.$valid = !0, this.$invalid = !1)) : (a(!1), 
            this.$invalid = !0, this.$valid = !1, p++), h[t] = !e, a(e, t), f.$setValidity(t, e, this));
        };
        this.$setPristine = function() {
            this.$dirty = !1;
            this.$pristine = !0;
            u.removeClass(i, $i);
            u.addClass(i, yi);
        };
        this.$setViewValue = function(n) {
            this.$viewValue = n;
            this.$pristine && (this.$dirty = !0, this.$pristine = !1, u.removeClass(i, yi), 
            u.addClass(i, $i), f.$setDirty());
            o(this.$parsers, function(t) {
                n = t(n);
            });
            this.$modelValue !== n && (this.$modelValue = n, l(t, n), o(this.$viewChangeListeners, function(t) {
                try {
                    t();
                } catch (n) {
                    e(n);
                }
            }));
        };
        var v = this;
        t.$watch(function() {
            var e = c(t);
            if (v.$modelValue !== e) {
                var n = v.$formatters, r = n.length;
                for (v.$modelValue = e; r--; ) e = n[r](e);
                v.$viewValue !== e && (v.$viewValue = e, v.$render());
            }
            return e;
        });
    } ], bi = function() {
        return {
            require: [ "ngModel", "^?form" ],
            controller: _i,
            link: function(t, e, n, r) {
                var i = r[0], o = r[1] || si;
                o.$addControl(i);
                t.$on("$destroy", function() {
                    o.$removeControl(i);
                });
            }
        };
    }, wi = m({
        require: "ngModel",
        link: function(t, e, n, r) {
            r.$viewChangeListeners.push(function() {
                t.$eval(n.ngChange);
            });
        }
    }), xi = function() {
        return {
            require: "?ngModel",
            link: function(t, e, n, r) {
                if (r) {
                    n.required = !0;
                    var i = function(t) {
                        if (n.required && r.$isEmpty(t)) r.$setValidity("required", !1); else return r.$setValidity("required", !0), 
                        t;
                    };
                    r.$formatters.push(i);
                    r.$parsers.unshift(i);
                    n.$observe("required", function() {
                        i(r.$viewValue);
                    });
                }
            }
        };
    }, ji = function() {
        return {
            require: "ngModel",
            link: function(t, e, r, i) {
                var s = (t = /\/(.*)\//.exec(r.ngList)) && RegExp(t[1]) || r.ngList || ",";
                i.$parsers.push(function(t) {
                    if (!g(t)) {
                        var e = [];
                        t && o(t.split(s), function(t) {
                            t && e.push(or(t));
                        });
                        return e;
                    }
                });
                i.$formatters.push(function(t) {
                    return ir(t) ? t.join(", ") : n;
                });
                i.$isEmpty = function(t) {
                    return !t || !t.length;
                };
            }
        };
    }, Si = /^(true|false|\d+)$/, ki = function() {
        return {
            priority: 100,
            compile: function(t, e) {
                return Si.test(e.ngValue) ? function(t, e, n) {
                    n.$set("value", t.$eval(n.ngValue));
                } : function(t, e, n) {
                    t.$watch(n.ngValue, function(t) {
                        n.$set("value", t);
                    });
                };
            }
        };
    }, Ti = Nn({
        compile: function(t) {
            t.addClass("ng-binding");
            return function(t, e, r) {
                e.data("$binding", r.ngBind);
                t.$watch(r.ngBind, function(t) {
                    e.text(t == n ? "" : t);
                });
            };
        }
    }), Ei = [ "$interpolate", function(t) {
        return function(e, n, r) {
            e = t(n.attr(r.$attr.ngBindTemplate));
            n.addClass("ng-binding").data("$binding", e);
            r.$observe("ngBindTemplate", function(t) {
                n.text(t);
            });
        };
    } ], Ci = [ "$sce", "$parse", function(t, e) {
        return {
            compile: function(n) {
                n.addClass("ng-binding");
                return function(n, r, i) {
                    r.data("$binding", i.ngBindHtml);
                    var o = e(i.ngBindHtml);
                    n.$watch(function() {
                        return (o(n) || "").toString();
                    }, function(e) {
                        r.html(t.getTrustedHtml(o(n)) || "");
                    });
                };
            }
        };
    } ], Ai = Un("", !0), Oi = Un("Odd", 0), Pi = Un("Even", 1), Ri = Nn({
        compile: function(t, e) {
            e.$set("ngCloak", n);
            t.removeClass("ng-cloak");
        }
    }), Fi = [ function() {
        return {
            scope: !0,
            controller: "@",
            priority: 500
        };
    } ], Mi = {}, Ni = {
        blur: !0,
        focus: !0
    };
    o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(t) {
        var e = Ae("ng-" + t);
        Mi[e] = [ "$parse", "$rootScope", function(n, r) {
            return {
                compile: function(i, o) {
                    var s = n(o[e]);
                    return function(e, n) {
                        n.on(t, function(n) {
                            var i = function() {
                                s(e, {
                                    $event: n
                                });
                            };
                            Ni[t] && r.$$phase ? e.$evalAsync(i) : e.$apply(i);
                        });
                    };
                }
            };
        } ];
    });
    var Ii = [ "$animate", function(t) {
        return {
            transclude: "element",
            priority: 600,
            terminal: !0,
            restrict: "A",
            $$tlb: !0,
            link: function(n, r, i, o, s) {
                var u, a, c;
                n.$watch(i.ngIf, function(o) {
                    q(o) ? a || (a = n.$new(), s(a, function(n) {
                        n[n.length++] = e.createComment(" end ngIf: " + i.ngIf + " ");
                        u = {
                            clone: n
                        };
                        t.enter(n, r.parent(), r);
                    })) : (c && (c.remove(), c = null), a && (a.$destroy(), a = null), u && (c = X(u.clone), 
                    t.leave(c, function() {
                        c = null;
                    }), u = null));
                });
            }
        };
    } ], qi = [ "$http", "$templateCache", "$anchorScroll", "$animate", "$sce", function(t, e, n, r, i) {
        return {
            restrict: "ECA",
            priority: 400,
            terminal: !0,
            transclude: "element",
            controller: tr.noop,
            compile: function(o, s) {
                var u = s.ngInclude || s.src, a = s.onload || "", c = s.autoscroll;
                return function(o, s, l, f, p) {
                    var h = 0, d, v, m, g = function() {
                        v && (v.remove(), v = null);
                        d && (d.$destroy(), d = null);
                        m && (r.leave(m, function() {
                            v = null;
                        }), v = m, m = null);
                    };
                    o.$watch(i.parseAsResourceUrl(u), function(i) {
                        var u = function() {
                            !y(c) || c && !o.$eval(c) || n();
                        }, l = ++h;
                        i ? (t.get(i, {
                            cache: e
                        }).success(function(t) {
                            if (l === h) {
                                var e = o.$new();
                                f.template = t;
                                t = p(e, function(t) {
                                    g();
                                    r.enter(t, null, s, u);
                                });
                                d = e;
                                m = t;
                                d.$emit("$includeContentLoaded");
                                o.$eval(a);
                            }
                        }).error(function() {
                            l === h && g();
                        }), o.$emit("$includeContentRequested")) : (g(), f.template = null);
                    });
                };
            }
        };
    } ], Di = [ "$compile", function(t) {
        return {
            restrict: "ECA",
            priority: -400,
            require: "ngInclude",
            link: function(e, n, r, i) {
                n.html(i.template);
                t(n.contents())(e);
            }
        };
    } ], Hi = Nn({
        priority: 450,
        compile: function() {
            return {
                pre: function(t, e, n) {
                    t.$eval(n.ngInit);
                }
            };
        }
    }), Vi = Nn({
        terminal: !0,
        priority: 1e3
    }), Ui = [ "$locale", "$interpolate", function(t, e) {
        var n = /{}/g;
        return {
            restrict: "EA",
            link: function(r, i, s) {
                var u = s.count, a = s.$attr.when && i.attr(s.$attr.when), c = s.offset || 0, l = r.$eval(a) || {}, f = {}, p = e.startSymbol(), h = e.endSymbol(), d = /^when(Minus)?(.+)$/;
                o(s, function(t, e) {
                    d.test(e) && (l[zn(e.replace("when", "").replace("Minus", "-"))] = i.attr(s.$attr[e]));
                });
                o(l, function(t, r) {
                    f[r] = e(t.replace(n, p + u + "-" + c + h));
                });
                r.$watch(function() {
                    var e = parseFloat(r.$eval(u));
                    if (isNaN(e)) return "";
                    e in l || (e = t.pluralCat(e - c));
                    return f[e](r, i, !0);
                }, function(t) {
                    i.text(t);
                });
            }
        };
    } ], Li = [ "$parse", "$animate", function(t, n) {
        var s = r("ngRepeat");
        return {
            transclude: "element",
            priority: 1e3,
            terminal: !0,
            $$tlb: !0,
            link: function(r, u, a, c, l) {
                var f = a.ngRepeat, p = f.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/), h, d, v, m, g, y, _ = {
                    $id: $e
                };
                if (!p) throw s("iexp", f);
                a = p[1];
                c = p[2];
                (p = p[3]) ? (h = t(p), d = function(t, e, n) {
                    y && (_[y] = t);
                    _[g] = e;
                    _.$index = n;
                    return h(r, _);
                }) : (v = function(t, e) {
                    return $e(e);
                }, m = function(t) {
                    return t;
                });
                p = a.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
                if (!p) throw s("iidexp", a);
                g = p[3] || p[1];
                y = p[2];
                var b = {};
                r.$watchCollection(c, function(t) {
                    var a, c, p = u[0], h, _ = {}, w, x, j, S, k, T, E, C = [];
                    if (i(t)) T = t, k = d || v; else {
                        k = d || m;
                        T = [];
                        for (j in t) t.hasOwnProperty(j) && "$" != j.charAt(0) && T.push(j);
                        T.sort();
                    }
                    w = T.length;
                    c = C.length = T.length;
                    for (a = 0; a < c; a++) if (j = t === T ? a : T[a], S = t[j], h = k(j, S, a), Q(h, "`track by` id"), 
                    b.hasOwnProperty(h)) E = b[h], delete b[h], _[h] = E, C[a] = E; else {
                        if (_.hasOwnProperty(h)) throw o(C, function(t) {
                            t && t.scope && (b[t.id] = t);
                        }), s("dupes", f, h, N(S));
                        C[a] = {
                            id: h
                        };
                        _[h] = !1;
                    }
                    for (j in b) b.hasOwnProperty(j) && (E = b[j], a = X(E.clone), n.leave(a), o(a, function(t) {
                        t.$$NG_REMOVED = !0;
                    }), E.scope.$destroy());
                    a = 0;
                    for (c = T.length; a < c; a++) {
                        j = t === T ? a : T[a];
                        S = t[j];
                        E = C[a];
                        C[a - 1] && (p = C[a - 1].clone[C[a - 1].clone.length - 1]);
                        if (E.scope) {
                            x = E.scope;
                            h = p;
                            do h = h.nextSibling; while (h && h.$$NG_REMOVED);
                            E.clone[0] != h && n.move(X(E.clone), null, Gn(p));
                            p = E.clone[E.clone.length - 1];
                        } else x = r.$new();
                        x[g] = S;
                        y && (x[y] = j);
                        x.$index = a;
                        x.$first = 0 === a;
                        x.$last = a === w - 1;
                        x.$middle = !(x.$first || x.$last);
                        x.$odd = !(x.$even = 0 === (a & 1));
                        E.scope || l(x, function(t) {
                            t[t.length++] = e.createComment(" end ngRepeat: " + f + " ");
                            n.enter(t, null, Gn(p));
                            p = t;
                            E.scope = x;
                            E.clone = t;
                            _[E.id] = E;
                        });
                    }
                    b = _;
                });
            }
        };
    } ], zi = [ "$animate", function(t) {
        return function(e, n, r) {
            e.$watch(r.ngShow, function(e) {
                t[q(e) ? "removeClass" : "addClass"](n, "ng-hide");
            });
        };
    } ], Bi = [ "$animate", function(t) {
        return function(e, n, r) {
            e.$watch(r.ngHide, function(e) {
                t[q(e) ? "addClass" : "removeClass"](n, "ng-hide");
            });
        };
    } ], Wi = Nn(function(t, e, n) {
        t.$watch(n.ngStyle, function(t, n) {
            n && t !== n && o(n, function(t, n) {
                e.css(n, "");
            });
            t && e.css(t);
        }, !0);
    }), Yi = [ "$animate", function(t) {
        return {
            restrict: "EA",
            require: "ngSwitch",
            controller: [ "$scope", function() {
                this.cases = {};
            } ],
            link: function(e, n, r, i) {
                var s = [], u = [], a = [], c = [];
                e.$watch(r.ngSwitch || r.on, function(n) {
                    var l, f;
                    l = 0;
                    for (f = a.length; l < f; ++l) a[l].remove();
                    l = a.length = 0;
                    for (f = c.length; l < f; ++l) {
                        var p = u[l];
                        c[l].$destroy();
                        a[l] = p;
                        t.leave(p, function() {
                            a.splice(l, 1);
                        });
                    }
                    u.length = 0;
                    c.length = 0;
                    if (s = i.cases["!" + n] || i.cases["?"]) e.$eval(r.change), o(s, function(n) {
                        var r = e.$new();
                        c.push(r);
                        n.transclude(r, function(e) {
                            var r = n.element;
                            u.push(e);
                            t.enter(e, r.parent(), r);
                        });
                    });
                });
            }
        };
    } ], Gi = Nn({
        transclude: "element",
        priority: 800,
        require: "^ngSwitch",
        link: function(t, e, n, r, i) {
            r.cases["!" + n.ngSwitchWhen] = r.cases["!" + n.ngSwitchWhen] || [];
            r.cases["!" + n.ngSwitchWhen].push({
                transclude: i,
                element: e
            });
        }
    }), Ki = Nn({
        transclude: "element",
        priority: 800,
        require: "^ngSwitch",
        link: function(t, e, n, r, i) {
            r.cases["?"] = r.cases["?"] || [];
            r.cases["?"].push({
                transclude: i,
                element: e
            });
        }
    }), Qi = Nn({
        link: function(t, e, n, i, o) {
            if (!o) throw r("ngTransclude")("orphan", D(e));
            o(function(t) {
                e.empty();
                e.append(t);
            });
        }
    }), Ji = [ "$templateCache", function(t) {
        return {
            restrict: "E",
            terminal: !0,
            compile: function(e, n) {
                "text/ng-template" == n.type && t.put(n.id, e[0].text);
            }
        };
    } ], Xi = r("ngOptions"), Zi = m({
        terminal: !0
    }), to = [ "$compile", "$parse", function(t, r) {
        var i = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, u = {
            $setViewValue: d
        };
        return {
            restrict: "E",
            require: [ "select", "?ngModel" ],
            controller: [ "$element", "$scope", "$attrs", function(t, e, n) {
                var r = this, i = {}, o = u, s;
                r.databound = n.ngModel;
                r.init = function(t, e, n) {
                    o = t;
                    s = n;
                };
                r.addOption = function(e) {
                    Q(e, '"option value"');
                    i[e] = !0;
                    o.$viewValue == e && (t.val(e), s.parent() && s.remove());
                };
                r.removeOption = function(t) {
                    this.hasOption(t) && (delete i[t], o.$viewValue == t && this.renderUnknownOption(t));
                };
                r.renderUnknownOption = function(e) {
                    e = "? " + $e(e) + " ?";
                    s.val(e);
                    t.prepend(s);
                    t.val(e);
                    s.prop("selected", !0);
                };
                r.hasOption = function(t) {
                    return i.hasOwnProperty(t);
                };
                e.$on("$destroy", function() {
                    r.renderUnknownOption = d;
                });
            } ],
            link: function(u, a, c, l) {
                function f(t, e, n, r) {
                    n.$render = function() {
                        var t = n.$viewValue;
                        r.hasOption(t) ? (j.parent() && j.remove(), e.val(t), "" === t && b.prop("selected", !0)) : g(t) && b ? e.val("") : r.renderUnknownOption(t);
                    };
                    e.on("change", function() {
                        t.$apply(function() {
                            j.parent() && j.remove();
                            n.$setViewValue(e.val());
                        });
                    });
                }
                function p(t, e, n) {
                    var r;
                    n.$render = function() {
                        var t = new _e(n.$viewValue);
                        o(e.find("option"), function(e) {
                            e.selected = y(t.get(e.value));
                        });
                    };
                    t.$watch(function() {
                        R(r, n.$viewValue) || (r = P(n.$viewValue), n.$render());
                    });
                    e.on("change", function() {
                        t.$apply(function() {
                            var t = [];
                            o(e.find("option"), function(e) {
                                e.selected && t.push(e.value);
                            });
                            n.$setViewValue(t);
                        });
                    });
                }
                function h(e, o, u) {
                    function a() {
                        var t = {
                            "": []
                        }, n = [ "" ], r, i, a, c, m;
                        a = u.$modelValue;
                        c = b(e) || [];
                        var k = p ? s(c) : c, T, E, C;
                        E = {};
                        C = !1;
                        if (v) if (i = u.$modelValue, j && ir(i)) for (C = new _e([]), r = {}, m = 0; m < i.length; m++) r[f] = i[m], 
                        C.put(j(e, r), i[m]); else C = new _e(i);
                        m = C;
                        var A, O;
                        for (C = 0; T = k.length, C < T; C++) {
                            i = C;
                            if (p) {
                                i = k[C];
                                if ("$" === i.charAt(0)) continue;
                                E[p] = i;
                            }
                            E[f] = c[i];
                            r = h(e, E) || "";
                            (i = t[r]) || (i = t[r] = [], n.push(r));
                            v ? r = y(m.remove(j ? j(e, E) : g(e, E))) : (j ? (r = {}, r[f] = a, r = j(e, r) === j(e, E)) : r = a === g(e, E), 
                            m = m || r);
                            A = l(e, E);
                            A = y(A) ? A : "";
                            i.push({
                                id: j ? j(e, E) : p ? k[C] : C,
                                label: A,
                                selected: r
                            });
                        }
                        v || (_ || null === a ? t[""].unshift({
                            id: "",
                            label: "",
                            selected: !m
                        }) : m || t[""].unshift({
                            id: "?",
                            label: "",
                            selected: !0
                        }));
                        E = 0;
                        for (k = n.length; E < k; E++) {
                            r = n[E];
                            i = t[r];
                            S.length <= E ? (a = {
                                element: x.clone().attr("label", r),
                                label: i.label
                            }, c = [ a ], S.push(c), o.append(a.element)) : (c = S[E], a = c[0], a.label != r && a.element.attr("label", a.label = r));
                            A = null;
                            C = 0;
                            for (T = i.length; C < T; C++) r = i[C], (m = c[C + 1]) ? (A = m.element, m.label !== r.label && A.text(m.label = r.label), 
                            m.id !== r.id && A.val(m.id = r.id), A[0].selected !== r.selected && (A.prop("selected", m.selected = r.selected), 
                            Yn && A.prop("selected", m.selected))) : ("" === r.id && _ ? O = _ : (O = w.clone()).val(r.id).prop("selected", r.selected).attr("selected", r.selected).text(r.label), 
                            c.push({
                                element: O,
                                label: r.label,
                                id: r.id,
                                selected: r.selected
                            }), d.addOption(r.label, O), A ? A.after(O) : a.element.append(O), A = O);
                            for (C++; c.length > C; ) r = c.pop(), d.removeOption(r.label), r.element.remove();
                        }
                        for (;S.length > E; ) S.pop()[0].element.remove();
                    }
                    var c;
                    if (!(c = m.match(i))) throw Xi("iexp", m, D(o));
                    var l = r(c[2] || c[1]), f = c[4] || c[6], p = c[5], h = r(c[3] || ""), g = r(c[2] ? c[1] : f), b = r(c[7]), j = c[8] ? r(c[8]) : null, S = [ [ {
                        element: o,
                        label: ""
                    } ] ];
                    _ && (t(_)(e), _.removeClass("ng-scope"), _.remove());
                    o.empty();
                    o.on("change", function() {
                        e.$apply(function() {
                            var t, r = b(e) || [], i = {}, s, c, l, h, d, m, y;
                            if (v) for (c = [], h = 0, m = S.length; h < m; h++) for (t = S[h], l = 1, d = t.length; l < d; l++) {
                                if ((s = t[l].element)[0].selected) {
                                    s = s.val();
                                    p && (i[p] = s);
                                    if (j) for (y = 0; y < r.length && (i[f] = r[y], j(e, i) != s); y++) ; else i[f] = r[s];
                                    c.push(g(e, i));
                                }
                            } else if (s = o.val(), "?" == s) c = n; else if ("" === s) c = null; else if (j) for (y = 0; y < r.length; y++) {
                                if (i[f] = r[y], j(e, i) == s) {
                                    c = g(e, i);
                                    break;
                                }
                            } else i[f] = r[s], p && (i[p] = s), c = g(e, i);
                            u.$setViewValue(c);
                            a();
                        });
                    });
                    u.$render = a;
                    e.$watchCollection(b, a);
                    e.$watchCollection(function() {
                        var t = {}, n = b(e);
                        if (n) {
                            for (var r = Array(n.length), i = 0, o = n.length; i < o; i++) t[f] = n[i], r[i] = l(e, t);
                            return r;
                        }
                    }, a);
                    v && e.$watchCollection(function() {
                        return u.$modelValue;
                    }, a);
                }
                if (l[1]) {
                    var d = l[0];
                    l = l[1];
                    var v = c.multiple, m = c.ngOptions, _ = !1, b, w = Gn(e.createElement("option")), x = Gn(e.createElement("optgroup")), j = w.clone();
                    c = 0;
                    for (var S = a.children(), k = S.length; c < k; c++) if ("" === S[c].value) {
                        b = _ = S.eq(c);
                        break;
                    }
                    d.init(l, _, j);
                    v && (l.$isEmpty = function(t) {
                        return !t || 0 === t.length;
                    });
                    m ? h(u, a, l) : v ? p(u, a, l) : f(u, a, l, d);
                }
            }
        };
    } ], eo = [ "$interpolate", function(t) {
        var e = {
            addOption: d,
            removeOption: d
        };
        return {
            restrict: "E",
            priority: 100,
            compile: function(n, r) {
                if (g(r.value)) {
                    var i = t(n.text(), !0);
                    i || r.$set("value", n.text());
                }
                return function(t, n, r) {
                    var o = n.parent(), s = o.data("$selectController") || o.parent().data("$selectController");
                    s && s.databound ? n.prop("selected", !1) : s = e;
                    i ? t.$watch(i, function(t, e) {
                        r.$set("value", t);
                        t !== e && s.removeOption(e);
                        s.addOption(t);
                    }) : s.addOption(r.value);
                    n.on("$destroy", function() {
                        s.removeOption(r.value);
                    });
                };
            }
        };
    } ], no = m({
        restrict: "E",
        terminal: !0
    });
    t.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : ((Kn = t.jQuery) && Kn.fn.on ? (Gn = Kn, 
    f(Kn.fn, {
        scope: br.scope,
        isolateScope: br.isolateScope,
        controller: br.controller,
        injector: br.injector,
        inheritedData: br.inheritedData
    }), ne("remove", !0, !0, !1), ne("empty", !1, !1, !1), ne("html", !1, !1, !0)) : Gn = re, 
    tr.element = Gn, te(tr), Gn(e).ready(function() {
        B(e, W);
    }));
})(window, document);

!window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>');

(function(t, e, n) {
    "use strict";
    var r = e.module("ngRoute", [ "ng" ]).provider("$route", i);
    function i() {
        function t(t, n) {
            return e.extend(new (e.extend(function() {}, {
                prototype: t
            }))(), n);
        }
        var n = {};
        this.when = function(t, i) {
            n[t] = e.extend({
                reloadOnSearch: true
            }, i, t && r(t, i));
            if (t) {
                var o = t[t.length - 1] == "/" ? t.substr(0, t.length - 1) : t + "/";
                n[o] = e.extend({
                    redirectTo: t
                }, r(o, i));
            }
            return this;
        };
        function r(t, e) {
            var n = e.caseInsensitiveMatch, r = {
                originalPath: t,
                regexp: t
            }, i = r.keys = [];
            t = t.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function(t, e, n, r) {
                var o = r === "?" ? r : null;
                var s = r === "*" ? r : null;
                i.push({
                    name: n,
                    optional: !!o
                });
                e = e || "";
                return "" + (o ? "" : e) + "(?:" + (o ? e : "") + (s && "(.+?)" || "([^/]+)") + (o || "") + ")" + (o || "");
            }).replace(/([\/$\*])/g, "\\$1");
            r.regexp = new RegExp("^" + t + "$", n ? "i" : "");
            return r;
        }
        this.otherwise = function(t) {
            this.when(null, t);
            return this;
        };
        this.$get = [ "$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", "$sce", function(r, i, o, s, u, a, c, l) {
            var f = false, p = {
                routes: n,
                reload: function() {
                    f = true;
                    r.$evalAsync(d);
                }
            };
            r.$on("$locationChangeSuccess", d);
            return p;
            function h(t, e) {
                var n = e.keys, r = {};
                if (!e.regexp) return null;
                var i = e.regexp.exec(t);
                if (!i) return null;
                for (var o = 1, s = i.length; o < s; ++o) {
                    var u = n[o - 1];
                    var a = i[o];
                    if (u && a) {
                        r[u.name] = a;
                    }
                }
                return r;
            }
            function d() {
                var t = v(), n = p.current;
                if (t && n && t.$$route === n.$$route && e.equals(t.pathParams, n.pathParams) && !t.reloadOnSearch && !f) {
                    n.params = t.params;
                    e.copy(n.params, o);
                    r.$broadcast("$routeUpdate", n);
                } else if (t || n) {
                    f = false;
                    r.$broadcast("$routeChangeStart", t, n);
                    p.current = t;
                    if (t) {
                        if (t.redirectTo) {
                            if (e.isString(t.redirectTo)) {
                                i.path(m(t.redirectTo, t.params)).search(t.params).replace();
                            } else {
                                i.url(t.redirectTo(t.pathParams, i.path(), i.search())).replace();
                            }
                        }
                    }
                    s.when(t).then(function() {
                        if (t) {
                            var n = e.extend({}, t.resolve), r, i;
                            e.forEach(n, function(t, r) {
                                n[r] = e.isString(t) ? u.get(t) : u.invoke(t);
                            });
                            if (e.isDefined(r = t.template)) {
                                if (e.isFunction(r)) {
                                    r = r(t.params);
                                }
                            } else if (e.isDefined(i = t.templateUrl)) {
                                if (e.isFunction(i)) {
                                    i = i(t.params);
                                }
                                i = l.getTrustedResourceUrl(i);
                                if (e.isDefined(i)) {
                                    t.loadedTemplateUrl = i;
                                    r = a.get(i, {
                                        cache: c
                                    }).then(function(t) {
                                        return t.data;
                                    });
                                }
                            }
                            if (e.isDefined(r)) {
                                n["$template"] = r;
                            }
                            return s.all(n);
                        }
                    }).then(function(i) {
                        if (t == p.current) {
                            if (t) {
                                t.locals = i;
                                e.copy(t.params, o);
                            }
                            r.$broadcast("$routeChangeSuccess", t, n);
                        }
                    }, function(e) {
                        if (t == p.current) {
                            r.$broadcast("$routeChangeError", t, n, e);
                        }
                    });
                }
            }
            function v() {
                var r, o;
                e.forEach(n, function(n, s) {
                    if (!o && (r = h(i.path(), n))) {
                        o = t(n, {
                            params: e.extend({}, i.search(), r),
                            pathParams: r
                        });
                        o.$$route = n;
                    }
                });
                return o || n[null] && t(n[null], {
                    params: {},
                    pathParams: {}
                });
            }
            function m(t, n) {
                var r = [];
                e.forEach((t || "").split(":"), function(t, e) {
                    if (e === 0) {
                        r.push(t);
                    } else {
                        var i = t.match(/(\w+)(.*)/);
                        var o = i[1];
                        r.push(n[o]);
                        r.push(i[2] || "");
                        delete n[o];
                    }
                });
                return r.join("");
            }
        } ];
    }
    r.provider("$routeParams", o);
    function o() {
        this.$get = function() {
            return {};
        };
    }
    r.directive("ngView", s);
    r.directive("ngView", u);
    s.$inject = [ "$route", "$anchorScroll", "$animate" ];
    function s(t, n, r) {
        return {
            restrict: "ECA",
            terminal: true,
            priority: 400,
            transclude: "element",
            link: function(i, o, s, u, a) {
                var c, l, f, p = s.autoscroll, h = s.onload || "";
                i.$on("$routeChangeSuccess", v);
                v();
                function d() {
                    if (f) {
                        f.remove();
                        f = null;
                    }
                    if (c) {
                        c.$destroy();
                        c = null;
                    }
                    if (l) {
                        r.leave(l, function() {
                            f = null;
                        });
                        f = l;
                        l = null;
                    }
                }
                function v() {
                    var s = t.current && t.current.locals, u = s && s.$template;
                    if (e.isDefined(u)) {
                        var f = i.$new();
                        var v = t.current;
                        var m = a(f, function(t) {
                            r.enter(t, null, l || o, function s() {
                                if (e.isDefined(p) && (!p || i.$eval(p))) {
                                    n();
                                }
                            });
                            d();
                        });
                        l = m;
                        c = v.scope = f;
                        c.$emit("$viewContentLoaded");
                        c.$eval(h);
                    } else {
                        d();
                    }
                }
            }
        };
    }
    u.$inject = [ "$compile", "$controller", "$route" ];
    function u(t, e, n) {
        return {
            restrict: "ECA",
            priority: -400,
            link: function(r, i) {
                var o = n.current, s = o.locals;
                i.html(s.$template);
                var u = t(i.contents());
                if (o.controller) {
                    s.$scope = r;
                    var a = e(o.controller, s);
                    if (o.controllerAs) {
                        r[o.controllerAs] = a;
                    }
                    i.data("$ngControllerController", a);
                    i.children().data("$ngControllerController", a);
                }
                u(r);
            }
        };
    }
})(window, window.angular);

(function(t, e, n) {
    "use strict";
    function r(t) {
        var n = [];
        a(n, e.noop).chars(t);
        return n.join("");
    }
    function i(t) {
        var e = {};
        t = t.split(",");
        var n;
        for (n = 0; n < t.length; n++) e[t[n]] = !0;
        return e;
    }
    function o(t, n) {
        function r(t, r, o, u) {
            r = e.lowercase(r);
            if (x[r]) for (;a.last() && j[a.last()]; ) i("", a.last());
            w[r] && a.last() == r && i("", r);
            (u = b[r] || !!u) || a.push(r);
            var c = {};
            o.replace(p, function(t, e, n, r, i) {
                c[e] = s(n || r || i || "");
            });
            n.start && n.start(r, c, u);
        }
        function i(t, r) {
            var i = 0, o;
            if (r = e.lowercase(r)) for (i = a.length - 1; 0 <= i && a[i] != r; i--) ;
            if (0 <= i) {
                for (o = a.length - 1; o >= i; o--) n.end && n.end(a[o]);
                a.length = i;
            }
        }
        "string" !== typeof t && (t = null === t || "undefined" === typeof t ? "" : "" + t);
        var o, u, a = [], y = t, _;
        for (a.last = function() {
            return a[a.length - 1];
        }; t; ) {
            _ = "";
            u = !0;
            if (a.last() && S[a.last()]) t = t.replace(RegExp("(.*)<\\s*\\/\\s*" + a.last() + "[^>]*>", "i"), function(t, e) {
                e = e.replace(v, "$1").replace(g, "$1");
                n.chars && n.chars(s(e));
                return "";
            }), i("", a.last()); else {
                if (0 === t.indexOf("<!--")) o = t.indexOf("--", 4), 0 <= o && t.lastIndexOf("-->", o) === o && (n.comment && n.comment(t.substring(4, o)), 
                t = t.substring(o + 3), u = !1); else if (m.test(t)) {
                    if (o = t.match(m)) t = t.replace(o[0], ""), u = !1;
                } else if (d.test(t)) {
                    if (o = t.match(f)) t = t.substring(o[0].length), o[0].replace(f, i), u = !1;
                } else h.test(t) && ((o = t.match(l)) ? (o[4] && (t = t.substring(o[0].length), 
                o[0].replace(l, r)), u = !1) : (_ += "<", t = t.substring(1)));
                u && (o = t.indexOf("<"), _ += 0 > o ? t : t.substring(0, o), t = 0 > o ? "" : t.substring(o), 
                n.chars && n.chars(s(_)));
            }
            if (t == y) throw c("badparse", t);
            y = t;
        }
        i();
    }
    function s(t) {
        if (!t) return "";
        var e = A.exec(t);
        t = e[1];
        var n = e[3];
        if (e = e[2]) C.innerHTML = e.replace(/</g, "&lt;"), e = "textContent" in C ? C.textContent : C.innerText;
        return t + e + n;
    }
    function u(t) {
        return t.replace(/&/g, "&amp;").replace(y, function(t) {
            var e = t.charCodeAt(0);
            t = t.charCodeAt(1);
            return "&#" + (1024 * (e - 55296) + (t - 56320) + 65536) + ";";
        }).replace(_, function(t) {
            return "&#" + t.charCodeAt(0) + ";";
        }).replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    function a(t, n) {
        var r = !1, i = e.bind(t, t.push);
        return {
            start: function(t, o, s) {
                t = e.lowercase(t);
                !r && S[t] && (r = t);
                r || !0 !== k[t] || (i("<"), i(t), e.forEach(o, function(r, o) {
                    var s = e.lowercase(o), a = "img" === t && "src" === s || "background" === s;
                    !0 !== E[s] || !0 === T[s] && !n(r, a) || (i(" "), i(o), i('="'), i(u(r)), i('"'));
                }), i(s ? "/>" : ">"));
            },
            end: function(t) {
                t = e.lowercase(t);
                r || !0 !== k[t] || (i("</"), i(t), i(">"));
                t == r && (r = !1);
            },
            chars: function(t) {
                r || i(u(t));
            }
        };
    }
    var c = e.$$minErr("$sanitize"), l = /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/, f = /^<\/\s*([\w:-]+)[^>]*>/, p = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g, h = /^</, d = /^<\//, v = /\x3c!--(.*?)--\x3e/g, m = /<!DOCTYPE([^>]*?)>/i, g = /<!\[CDATA\[(.*?)]]\x3e/g, y = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, _ = /([^\#-~| |!])/g, b = i("area,br,col,hr,img,wbr");
    t = i("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");
    n = i("rp,rt");
    var w = e.extend({}, n, t), x = e.extend({}, t, i("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")), j = e.extend({}, n, i("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")), S = i("script,style"), k = e.extend({}, b, x, j, w), T = i("background,cite,href,longdesc,src,usemap"), E = e.extend({}, T, i("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width")), C = document.createElement("pre"), A = /^(\s*)([\s\S]*?)(\s*)$/;
    e.module("ngSanitize", []).provider("$sanitize", function() {
        this.$get = [ "$$sanitizeUri", function(t) {
            return function(e) {
                var n = [];
                o(e, a(n, function(e, n) {
                    return !/^unsafe/.test(t(e, n));
                }));
                return n.join("");
            };
        } ];
    });
    e.module("ngSanitize").filter("linky", [ "$sanitize", function(t) {
        var n = /((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"]/, i = /^mailto:/;
        return function(o, s) {
            function u(t) {
                t && f.push(r(t));
            }
            function a(t, n) {
                f.push("<a ");
                e.isDefined(s) && (f.push('target="'), f.push(s), f.push('" '));
                f.push('href="');
                f.push(t);
                f.push('">');
                u(n);
                f.push("</a>");
            }
            if (!o) return o;
            for (var c, l = o, f = [], p, h; c = l.match(n); ) p = c[0], c[2] == c[3] && (p = "mailto:" + p), 
            h = c.index, u(l.substr(0, h)), a(p, c[0].replace(i, "")), l = l.substring(h + c[0].length);
            u(l);
            return t(f.join(""));
        };
    } ]);
})(window, window.angular);

var duScrollDefaultEasing = function(t) {
    "use strict";
    return .5 > t ? Math.pow(2 * t, 2) / 2 : 1 - Math.pow(2 * (1 - t), 2) / 2;
};

angular.module("duScroll", [ "duScroll.scrollspy", "duScroll.smoothScroll", "duScroll.scrollContainer", "duScroll.spyContext", "duScroll.scrollHelpers" ]).value("duScrollDuration", 350).value("duScrollSpyWait", 100).value("duScrollGreedy", !1).value("duScrollOffset", 0).value("duScrollEasing", duScrollDefaultEasing), 
angular.module("duScroll.scrollHelpers", [ "duScroll.requestAnimation" ]).run([ "$window", "$q", "cancelAnimation", "requestAnimation", "duScrollEasing", "duScrollDuration", "duScrollOffset", function(t, e, n, r, i, o, s) {
    "use strict";
    var u = angular.element.prototype, a = function(t) {
        return "undefined" != typeof HTMLDocument && t instanceof HTMLDocument || t.nodeType && t.nodeType === t.DOCUMENT_NODE;
    }, c = function(t) {
        return "undefined" != typeof HTMLElement && t instanceof HTMLElement || t.nodeType && t.nodeType === t.ELEMENT_NODE;
    }, l = function(t) {
        return c(t) || a(t) ? t : t[0];
    };
    u.scrollTo = function(e, n, r) {
        var i;
        if (angular.isElement(e) ? i = this.scrollToElement : r && (i = this.scrollToAnimated), 
        i) return i.apply(this, arguments);
        var o = l(this);
        return a(o) ? t.scrollTo(e, n) : (o.scrollLeft = e, void (o.scrollTop = n));
    };
    var f, p;
    u.scrollToAnimated = function(t, o, s, u) {
        s && !u && (u = i);
        var a = this.scrollLeft(), c = this.scrollTop(), l = Math.round(t - a), h = Math.round(o - c), d = null, v = this, m = "scroll mousedown mousewheel touchmove keydown", g = function(t) {
            (!t || t.which > 0) && (v.unbind(m, g), n(f), p.reject(), f = null);
        };
        if (f && g(), p = e.defer(), !l && !h) return p.resolve(), p.promise;
        var y = function(t) {
            null === d && (d = t);
            var e = t - d, n = e >= s ? 1 : u(e / s);
            v.scrollTo(a + Math.ceil(l * n), c + Math.ceil(h * n)), 1 > n ? f = r(y) : (v.unbind(m, g), 
            f = null, p.resolve());
        };
        return v.scrollTo(a, c), v.bind(m, g), f = r(y), p.promise;
    }, u.scrollToElement = function(t, e, n, r) {
        var i = l(this);
        (!angular.isNumber(e) || isNaN(e)) && (e = s);
        var o = this.scrollTop() + l(t).getBoundingClientRect().top - e;
        return c(i) && (o -= i.getBoundingClientRect().top), this.scrollTo(0, o, n, r);
    };
    var h = {
        scrollLeft: function(e, n, r) {
            if (angular.isNumber(e)) return this.scrollTo(e, this.scrollTop(), n, r);
            var i = l(this);
            return a(i) ? t.scrollX || document.documentElement.scrollLeft || document.body.scrollLeft : i.scrollLeft;
        },
        scrollTop: function(e, n, r) {
            if (angular.isNumber(e)) return this.scrollTo(this.scrollTop(), e, n, r);
            var i = l(this);
            return a(i) ? t.scrollY || document.documentElement.scrollTop || document.body.scrollTop : i.scrollTop;
        }
    };
    u.scrollToElementAnimated = function(t, e, n, r) {
        return this.scrollToElement(t, e, n || o, r);
    }, u.scrollTopAnimated = function(t, e, n) {
        return this.scrollTop(t, e || o, n);
    }, u.scrollLeftAnimated = function(t, e, n) {
        return this.scrollLeft(t, e || o, n);
    };
    var d = function(t, e) {
        return function(n, r) {
            return r ? e.apply(this, arguments) : t.apply(this, arguments);
        };
    };
    for (var v in h) u[v] = u[v] ? d(u[v], h[v]) : h[v];
} ]), angular.module("duScroll.polyfill", []).factory("polyfill", [ "$window", function(t) {
    "use strict";
    var e = [ "webkit", "moz", "o", "ms" ];
    return function(n, r) {
        if (t[n]) return t[n];
        for (var i, o = n.substr(0, 1).toUpperCase() + n.substr(1), s = 0; s < e.length; s++) if (i = e[s] + o, 
        t[i]) return t[i];
        return r;
    };
} ]), angular.module("duScroll.requestAnimation", [ "duScroll.polyfill" ]).factory("requestAnimation", [ "polyfill", "$timeout", function(t, e) {
    "use strict";
    var n = 0, r = function(t) {
        var r = new Date().getTime(), i = Math.max(0, 16 - (r - n)), o = e(function() {
            t(r + i);
        }, i);
        return n = r + i, o;
    };
    return t("requestAnimationFrame", r);
} ]).factory("cancelAnimation", [ "polyfill", "$timeout", function(t, e) {
    "use strict";
    var n = function(t) {
        e.cancel(t);
    };
    return t("cancelAnimationFrame", n);
} ]), angular.module("duScroll.spyAPI", [ "duScroll.scrollContainerAPI" ]).factory("spyAPI", [ "$rootScope", "$timeout", "scrollContainerAPI", "duScrollGreedy", "duScrollSpyWait", function(t, e, n, r, i) {
    "use strict";
    var o = function(n) {
        var o = !1, s = !1, u = function() {
            s = !1;
            var e = n.container, i = e[0], o = 0;
            ("undefined" != typeof HTMLElement && i instanceof HTMLElement || i.nodeType && i.nodeType === i.ELEMENT_NODE) && (o = i.getBoundingClientRect().top);
            var u, a, c, l, f, p;
            for (l = n.spies, a = n.currentlyActive, c = void 0, u = 0; u < l.length; u++) f = l[u], 
            p = f.getTargetPosition(), p && p.top + f.offset - o < 20 && -1 * p.top + o < p.height && (!c || c.top < p.top) && (c = {
                top: p.top,
                spy: f
            });
            c && (c = c.spy), a === c || r && !c || (a && (a.$element.removeClass("active"), 
            t.$broadcast("duScrollspy:becameInactive", a.$element)), c && (c.$element.addClass("active"), 
            t.$broadcast("duScrollspy:becameActive", c.$element)), n.currentlyActive = c);
        };
        return i ? function() {
            o ? s = !0 : (u(), o = e(function() {
                o = !1, s && u();
            }, i, !1));
        } : u;
    }, s = {}, u = function(t) {
        var e = t.$id, n = {
            spies: []
        };
        return n.handler = o(n), s[e] = n, t.$on("$destroy", function() {
            a(t);
        }), e;
    }, a = function(t) {
        var e = t.$id, n = s[e], r = n.container;
        r && r.off("scroll", n.handler), delete s[e];
    }, c = u(t), l = function(t) {
        return s[t.$id] ? s[t.$id] : t.$parent ? l(t.$parent) : s[c];
    }, f = function(t) {
        var e, n, r = t.$element.scope();
        if (r) return l(r);
        for (n in s) if (e = s[n], -1 !== e.spies.indexOf(t)) return e;
    }, p = function(t) {
        for (;t.parentNode; ) if (t = t.parentNode, t === document) return !0;
        return !1;
    }, h = function(t) {
        var e = f(t);
        e && (e.spies.push(t), e.container && p(e.container) || (e.container && e.container.off("scroll", e.handler), 
        e.container = n.getContainer(t.$element.scope()), e.container.on("scroll", e.handler).triggerHandler("scroll")));
    }, d = function(t) {
        var e = f(t);
        t === e.currentlyActive && (e.currentlyActive = null);
        var n = e.spies.indexOf(t);
        -1 !== n && e.spies.splice(n, 1);
    };
    return {
        addSpy: h,
        removeSpy: d,
        createContext: u,
        destroyContext: a,
        getContextForScope: l
    };
} ]), angular.module("duScroll.scrollContainerAPI", []).factory("scrollContainerAPI", [ "$document", function(t) {
    "use strict";
    var e = {}, n = function(t, n) {
        var r = t.$id;
        return e[r] = n, r;
    }, r = function(t) {
        return e[t.$id] ? t.$id : t.$parent ? r(t.$parent) : void 0;
    }, i = function(n) {
        var i = r(n);
        return i ? e[i] : t;
    }, o = function(t) {
        var n = r(t);
        n && delete e[n];
    };
    return {
        getContainerId: r,
        getContainer: i,
        setContainer: n,
        removeContainer: o
    };
} ]), angular.module("duScroll.smoothScroll", [ "duScroll.scrollHelpers", "duScroll.scrollContainerAPI" ]).directive("duSmoothScroll", [ "duScrollDuration", "duScrollOffset", "scrollContainerAPI", function(t, e, n) {
    "use strict";
    return {
        link: function(r, i, o) {
            i.on("click", function(i) {
                if (o.href && -1 !== o.href.indexOf("#")) {
                    var s = document.getElementById(o.href.replace(/.*(?=#[^\s]+$)/, "").substring(1));
                    if (s && s.getBoundingClientRect) {
                        i.stopPropagation && i.stopPropagation(), i.preventDefault && i.preventDefault();
                        var u = o.offset ? parseInt(o.offset, 10) : e, a = o.duration ? parseInt(o.duration, 10) : t, c = n.getContainer(r);
                        c.scrollToElement(angular.element(s), isNaN(u) ? 0 : u, isNaN(a) ? 0 : a);
                    }
                }
            });
        }
    };
} ]), angular.module("duScroll.spyContext", [ "duScroll.spyAPI" ]).directive("duSpyContext", [ "spyAPI", function(t) {
    "use strict";
    return {
        restrict: "A",
        scope: !0,
        compile: function() {
            return {
                pre: function(e) {
                    t.createContext(e);
                }
            };
        }
    };
} ]), angular.module("duScroll.scrollContainer", [ "duScroll.scrollContainerAPI" ]).directive("duScrollContainer", [ "scrollContainerAPI", function(t) {
    "use strict";
    return {
        restrict: "A",
        scope: !0,
        compile: function() {
            return {
                pre: function(e, n, r) {
                    r.$observe("duScrollContainer", function(r) {
                        angular.isString(r) && (r = document.getElementById(r)), r = angular.isElement(r) ? angular.element(r) : n, 
                        t.setContainer(e, r), e.$on("$destroy", function() {
                            t.removeContainer(e);
                        });
                    });
                }
            };
        }
    };
} ]), angular.module("duScroll.scrollspy", [ "duScroll.spyAPI" ]).directive("duScrollspy", [ "spyAPI", "duScrollOffset", "$timeout", "$rootScope", function(t, e, n, r) {
    "use strict";
    var i = function(t, e, n) {
        angular.isElement(t) ? this.target = t : angular.isString(t) && (this.targetId = t), 
        this.$element = e, this.offset = n;
    };
    return i.prototype.getTargetElement = function() {
        return !this.target && this.targetId && (this.target = document.getElementById(this.targetId)), 
        this.target;
    }, i.prototype.getTargetPosition = function() {
        var t = this.getTargetElement();
        return t ? t.getBoundingClientRect() : void 0;
    }, i.prototype.flushTargetCache = function() {
        this.targetId && (this.target = void 0);
    }, {
        link: function(o, s, u) {
            var a, c = u.ngHref || u.href;
            c && -1 !== c.indexOf("#") ? a = c.replace(/.*(?=#[^\s]+$)/, "").substring(1) : u.duScrollspy && (a = u.duScrollspy), 
            a && n(function() {
                var n = new i(a, s, -(u.offset ? parseInt(u.offset, 10) : e));
                t.addSpy(n), o.$on("$destroy", function() {
                    t.removeSpy(n);
                }), o.$on("$locationChangeSuccess", n.flushTargetCache.bind(n)), r.$on("$stateChangeSuccess", n.flushTargetCache.bind(n));
            }, 0, !1);
        }
    };
} ]);

angular.module("youtube-embed", [ "ng" ]).service("youtubeEmbedUtils", [ "$window", "$rootScope", function(t, e) {
    function n(t, e) {
        return t.indexOf(e) > -1;
    }
    var r = {}, i = /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/gi, o = /t=(\d+)[ms]?(\d+)?s?/;
    return r.getIdFromURL = function(t) {
        var e = t.replace(i, "$1");
        if (n(e, ";")) {
            var r = e.split(";");
            if (n(r[1], "%")) {
                var o = decodeURIComponent(e.split(";")[1]);
                e = ("http://youtube.com" + o).replace(i, "$1");
            } else e = r[0];
        } else n(e, "#") && (e = e.split("#")[0]);
        return e;
    }, r.getTimeFromURL = function(t) {
        t = t || "";
        var e = t.match(o);
        if (!e) return 0;
        var r = e[0], i = e[1], s = e[2];
        return "undefined" != typeof s ? (s = parseInt(s, 10), i = parseInt(i, 10)) : n(r, "m") ? (i = parseInt(i, 10), 
        s = 0) : (s = parseInt(i, 10), i = 0), s + 60 * i;
    }, function() {
        var t = [ "http:", "https:" ], e = "//www.youtube.com/iframe_api";
        t.indexOf(window.location.protocol) < 0 && (e = "http:" + e);
        var n = document.createElement("script");
        n.src = e;
        var r = document.getElementsByTagName("script")[0];
        r.parentNode.insertBefore(n, r);
    }(), r.ready = !1, t.onYouTubeIframeAPIReady = function() {
        e.$apply(function() {
            r.ready = !0;
        });
    }, r;
} ]).directive("youtubeVideo", [ "youtubeEmbedUtils", function(t) {
    var e = 1, n = {
        "-1": "unstarted",
        0: "ended",
        1: "playing",
        2: "paused",
        3: "buffering",
        5: "queued"
    }, r = "youtube.player.";
    return {
        restrict: "EA",
        scope: {
            videoId: "=?",
            videoUrl: "=?",
            player: "=?",
            playerVars: "=?",
            playerHeight: "=?",
            playerWidth: "=?"
        },
        link: function(i, o, s) {
            function u() {
                var t = Array.prototype.slice.call(arguments);
                i.$apply(function() {
                    i.$emit.apply(i, t);
                });
            }
            function a(t) {
                var e = n[t.data];
                "undefined" != typeof e && u(r + e, i.player, t), i.$apply(function() {
                    i.player.currentState = e;
                });
            }
            function c(t) {
                u(r + "ready", i.player, t);
            }
            function l() {
                var t = angular.copy(i.playerVars);
                t.start = t.start || i.urlStartTime;
                var e = new YT.Player(p, {
                    height: i.playerHeight,
                    width: i.playerWidth,
                    videoId: i.videoId,
                    playerVars: t,
                    events: {
                        onReady: c,
                        onStateChange: a
                    }
                });
                return e.id = p, e;
            }
            function f() {
                p && i.videoId && (i.player && "function" == typeof i.player.destroy && i.player.destroy(), 
                i.player = l());
            }
            i.utils = t;
            var p = s.playerId || o[0].id || "unique-youtube-embed-id-" + e++;
            o[0].id = p, i.playerHeight = i.playerHeight || 390, i.playerWidth = i.playerWidth || 640, 
            i.playerVars = i.playerVars || {};
            var h = i.$watch(function() {
                return i.utils.ready && ("undefined" != typeof i.videoUrl || "undefined" != typeof i.videoId);
            }, function(t) {
                t && (h(), "undefined" != typeof i.videoUrl ? i.$watch("videoUrl", function(t) {
                    i.videoId = i.utils.getIdFromURL(t), i.urlStartTime = i.utils.getTimeFromURL(t), 
                    f();
                }) : i.$watch("videoId", function() {
                    i.urlStartTime = null, f();
                }));
            });
            i.$on("$destroy", function() {
                i.player && i.player.destroy();
            });
        }
    };
} ]);

!function(t) {
    if ("object" == typeof exports) module.exports = t(); else if ("function" == typeof define && define.amd) define(t); else {
        var e;
        "undefined" != typeof window ? e = window : "undefined" != typeof global ? e = global : "undefined" != typeof self && (e = self), 
        e.contentful = t();
    }
}(function() {
    var t;
    return function e(t, n, r) {
        function i(s, u) {
            if (!n[s]) {
                if (!t[s]) {
                    var a = "function" == typeof require && require;
                    if (!u && a) return a(s, !0);
                    if (o) return o(s, !0);
                    throw new Error("Cannot find module '" + s + "'");
                }
                var c = n[s] = {
                    exports: {}
                };
                t[s][0].call(c.exports, function(e) {
                    var n = t[s][1][e];
                    return i(n ? n : e);
                }, c, c.exports, e, t, n, r);
            }
            return n[s].exports;
        }
        for (var o = "function" == typeof require && require, s = 0; s < r.length; s++) i(r[s]);
        return i;
    }({
        1: [ function(t, e, n) {
            "use strict";
            function r(t) {
                return h.reduce(t, function(t, e, n) {
                    return h.truthy(e) && (t[n] = e), t;
                }, {});
            }
            function i(t, e) {
                if (!h.exists(t[e])) throw new TypeError("Expected property " + e);
            }
            function o(t) {
                return h.getPath(t, [ "sys", "type" ]) in E;
            }
            function s(t) {
                var e = E[t.sys.type];
                return e.parse(t);
            }
            function u(t) {
                return JSON.parse(t.body);
            }
            function a(t) {
                return h.reduce(t, function(t, e, n) {
                    return t[n] = h.isArray(e) ? e.join(",") : e, t;
                }, {});
            }
            function c(t) {
                return p(t, l, function(e) {
                    return f(t, e) || e;
                }), t.items;
            }
            function l(t) {
                return "Link" === h.getPath(t, [ "sys", "type" ]);
            }
            function f(t, e) {
                var n = e.sys.linkType, r = e.sys.id, i = function(t) {
                    return t.sys.type === n && t.sys.id === r;
                };
                return h.find(t.items, i) || t.includes && h.find(t.includes[n], i);
            }
            function p(t, e, n) {
                return e(t) ? n(t) : h.isArray(t) || h.isObject(t) ? (h.each(t, function(r, i) {
                    t[i] = p(r, e, n);
                }), t) : t;
            }
            var h = t("underscore-contrib"), d = t("questor"), v = t("redefine"), m = t("querystring"), g = v.Class({
                constructor: function(t) {
                    i(t, "accessToken"), i(t, "space"), this.options = h.defaults({}, t, {
                        host: "cdn.contentful.com",
                        secure: !0
                    });
                },
                request: function(t, e) {
                    e || (e = {}), e.headers || (e.headers = {}), e.query || (e.query = {}), e.headers["Content-Type"] = "application/vnd.contentful.delivery.v1+json", 
                    e.query.access_token = this.options.accessToken;
                    var n = [ this.options.secure ? "https" : "http", "://", h.first(this.options.host.split(":")), ":", this.options.secure ? "443" : "80", "/spaces/", this.options.space, t, "?", m.stringify(e.query) ].join("");
                    return d(n, e).then(u).catch(Error, function(t) {
                        throw t;
                    }).catch(function(t) {
                        throw u(t);
                    });
                },
                asset: function(t, e) {
                    return this.request("/assets/" + t).then(y.parse).nodeify(e);
                },
                assets: function(t, e) {
                    var n = j.parse(t);
                    return this.request("/assets", {
                        query: n
                    }).then(h.partial(x.parse, y)).nodeify(e);
                },
                contentType: function(t, e) {
                    return this.request("/content_types/" + t).then(b.parse).nodeify(e);
                },
                contentTypes: function(t, e) {
                    var n = j.parse(t);
                    return this.request("/content_types", {
                        query: n
                    }).then(h.partial(x.parse, b)).nodeify(e);
                },
                entry: function(t, e) {
                    return this.request("/entries/" + t).then(_.parse).nodeify(e);
                },
                entries: function(t, e) {
                    var n = j.parse(t);
                    return this.request("/entries", {
                        query: n
                    }).then(h.partial(x.parse, _)).nodeify(e);
                },
                space: function(t) {
                    return this.request("").nodeify(t);
                }
            }), y = v.Class({
                constructor: function() {},
                statics: {
                    parse: function(t) {
                        return h.extend(new y(), {
                            sys: k.parse(t.sys),
                            fields: t.fields
                        });
                    }
                }
            }), _ = v.Class({
                constructor: function() {},
                statics: {
                    parse: function(t) {
                        return h.extend(new _(), {
                            sys: k.parse(t.sys),
                            fields: t.fields
                        });
                    }
                }
            }), b = v.Class({
                constructor: function() {},
                statics: {
                    parse: function(t) {
                        return h.extend(new b(), {
                            sys: k.parse(t.sys),
                            fields: t.fields.map(w.parse)
                        }, h.pick(t, "name", "displayField"));
                    }
                }
            }), w = v.Class({
                constructor: function() {},
                statics: {
                    parse: function(t) {
                        return h.extend(new w(), t);
                    }
                }
            }), x = v.Class({
                constructor: function() {},
                statics: {
                    parse: function(t, e) {
                        p(e, o, s);
                        var n = c(e);
                        return v(n, {
                            limit: e.limit,
                            skip: e.skip,
                            total: e.total
                        }, {
                            enumerable: !1
                        });
                    }
                }
            }), j = v.Class({
                constructor: function() {},
                toQueryString: function() {
                    return m.stringify(this);
                },
                statics: {
                    parse: function(t) {
                        return h.extend(new j(), a(t));
                    }
                }
            }), S = v.Class({
                constructor: function() {},
                statics: {
                    parse: function(t) {
                        return h.extend(new S(), t);
                    }
                }
            }), k = v.Class({
                constructor: function() {},
                statics: {
                    parse: function(t) {
                        return h.extend(new k(), h.pick(t, "id", "revision", "type", "locale"), r({
                            contentType: t.contentType && T.parse(t.contentType),
                            createdAt: t.createdAt && new Date(t.createdAt),
                            linkType: t.linkType,
                            updatedAt: t.updatedAt && new Date(t.updatedAt),
                            space: t.space && T.parse(t.space)
                        }));
                    }
                }
            }), T = v.Class({
                constructor: function() {},
                statics: {
                    parse: function(t) {
                        return h.extend(new T(), {
                            sys: k.parse(t.sys)
                        });
                    }
                }
            });
            n.createClient = h.fnull(function(t) {
                return new g(t);
            }, {});
            var E = {
                Asset: y,
                ContentType: b,
                Entry: _,
                Space: S
            };
        }, {
            querystring: 22,
            questor: 19,
            redefine: 2,
            "underscore-contrib": 3
        } ],
        2: [ function(t, e) {
            var n = this._ = function(t, n, r) {
                function i(t, e) {
                    for (var n, r = {}, i = K(t), o = 0, s = i.length; s > o; o++) n = i[o], r[n] = G(t, n);
                    return X(void 0 === e ? Q(t) : e, r);
                }
                function o(t, e, n, r) {
                    T(n || g.defaults || {}, re), T(r, re), (Y.call(r, F) || Y.call(r, D)) && (delete re[L], 
                    delete re[U]), $(t, e, re), te(re);
                }
                function s(t, e, n, r) {
                    o(t, e, r, n instanceof l ? n : n instanceof v ? c(t, e, n) : (oe[U] = n, oe)), 
                    delete oe[U];
                }
                function u(t, e, n) {
                    for (var r in e) Y.call(e, r) && s(t, r, e[r], n);
                }
                function a(t, e) {
                    for (var n, r = 0; r < e.length; r++) n = e[r], d(n) && (n = "mixin" === (n.type || n.name) ? n.call(n) || n : n[q]), 
                    J(t, n);
                }
                function c(t, e, n) {
                    var r, i = n._, o = Y.call(n, A) ? !!n[A] : !0, s = Y.call(n, P) && n[P], u = Y.call(n, L) && n[L];
                    return n[F] = function() {
                        return se && (n = G(t, e), delete t[e]), re[U] = i.call(r = this), re[A] = o, re[P] = s, 
                        re[L] = u, $(r, e, re), te(re), se && (T(n, re), $(t, e, re), te(re)), r[e];
                    }, se && (n[A] = !0), n;
                }
                function l(t) {
                    T(t, this);
                }
                function f(t) {
                    return new l(t);
                }
                function p(t) {
                    return X(d(t) ? t[q] : t);
                }
                function h(t, e, n) {
                    var r = p(t);
                    return e ? g(r, e, n) : r;
                }
                function d(t) {
                    return "function" == typeof t;
                }
                function v(t) {
                    this._ = d(t) ? t : T(t, this) || t[U];
                }
                function m(t) {
                    return new v(t);
                }
                function g(t, e, n, r) {
                    return ("string" == typeof e ? s(t, e, n, r) : u(t, e, n)) || t;
                }
                function y(t) {
                    return function(e, n, r) {
                        return ("string" == typeof n ? s(e, n, r, t) : u(e, n, t)) || e;
                    };
                }
                function _(t, e) {
                    for (var n, r, i, o; e = Q(e); ) for (i = K(e), n = i.length; n--; ) if (e[r = i[n]] === t) {
                        do o = Q(e), e = o; while (o[r] === t);
                        return o[r];
                    }
                }
                function b() {
                    return _(b.caller, this).apply(this, arguments);
                }
                function w(t, e) {
                    return "string" == typeof t ? w(this, t) : t[N + e] || x(t, e);
                }
                function x(t, e) {
                    return ee[U] = B.call(t[e], t), $(t, N + e, ee), ee[U] = w, t[N + e];
                }
                function j(t, e) {
                    var n, r = Y.call(t, O) ? t[O] : function() {}, i = Y.call(t, H) && t[H], s = Y.call(t, R) && t[R];
                    if (e || (e = {}, e[L] = !0), delete t[O], s && (delete t[R], g(r[q] = p(s), "constructor", r), 
                    d(s))) for (n in s) Y.call(s, n) && "name" !== n && "length" !== n && o(r, n, re, G(s, n));
                    return i && (delete t[H], u(r, i, ie)), Y.call(t, M) && (a(r[q], [].concat(t[M])), 
                    delete t[M]), u(r[q], t, e), S(r[q]), C in r[q] || $(r[q], C, ee), r;
                }
                function S(t) {
                    return Y.call(t, V) ? object : $(t, V, ne);
                }
                var k, T, E, C = "bound", A = "configurable", O = "constructor", P = "enumerable", R = "extend", F = "get", M = "mixin", N = "__@", I = "__proto__", q = "prototype", D = "set", H = "statics", V = "super", U = "value", L = "writable", z = n, B = n.bind || function(t) {
                    var e = this;
                    return function() {
                        return e.apply(t, arguments);
                    };
                }, W = function(e, n) {
                    return t[e] || r[e] || n;
                }, $ = W("defineProperty"), Y = W("hasOwnProperty"), G = W("getOwnPropertyDescriptor"), K = W("getOwnPropertyNames", r.keys), Q = W("getPrototypeOf", function(t) {
                    return t[I];
                }), J = r.mixin || function(t, e) {
                    for (var n = K(e), r = n.length; r--; o(t, n[r], re, G(e, n[r]))) ;
                    return t;
                }, X = t.create || t.inherit || r.create, Z = [ A, P, F, D, U, L ], te = z("o", "delete o." + Z.join(";delete o.")), ee = X(null), ne = X(null), re = X(null), ie = {}, oe = {}, se = !1;
                for (ie[L] = !0, ie[P] = !0, k = 0; k < Z.length; k++) Z[k] = [ 'if(h.call(a,"', '"))b.', "=a.", ";" ].join(Z[k]);
                T = z("h", "return function(a,b){" + Z.join("") + "}")(Y), ne[U] = function ae(t) {
                    return B.apply(_(ae.caller, t), arguments);
                }, ne[A] = ne[P] = ne[L] = !1, $(b, "bind", ne), ne[U] = b, ee[P] = !1, ee[A] = ee[L] = !0, 
                ee[U] = w, g.from = h, g.Class = j, g[V] = S, g.mixin = J, g.bound = w, g.clone = i, 
                g.as = f, g.later = m, g.using = y, g.defaults = {}, "undefined" != typeof e && e.exports && ((e.exports = g).redefine = g), 
                t.mixin ? t.mixin({
                    redefine: g
                }) : t.redefine = g;
                try {
                    E = X(g({}, {
                        _: m(r)
                    }))._;
                } catch (ue) {
                    te(re), se = !0;
                }
                return t;
            }(n || this, Function, Object);
        }, {} ],
        3: [ function(t, e) {
            t("./underscore.array.builders"), t("./underscore.array.selectors"), t("./underscore.collections.walk"), 
            t("./underscore.function.arity"), t("./underscore.function.combinators"), t("./underscore.function.dispatch"), 
            t("./underscore.function.iterators"), t("./underscore.function.predicates"), t("./underscore.object.builders"), 
            t("./underscore.object.selectors"), t("./underscore.util.existential"), t("./underscore.util.operators"), 
            t("./underscore.util.strings"), t("./underscore.util.trampolines"), e.exports = t("underscore");
        }, {
            "./underscore.array.builders": 5,
            "./underscore.array.selectors": 6,
            "./underscore.collections.walk": 7,
            "./underscore.function.arity": 8,
            "./underscore.function.combinators": 9,
            "./underscore.function.dispatch": 10,
            "./underscore.function.iterators": 11,
            "./underscore.function.predicates": 12,
            "./underscore.object.builders": 13,
            "./underscore.object.selectors": 14,
            "./underscore.util.existential": 15,
            "./underscore.util.operators": 16,
            "./underscore.util.strings": 17,
            "./underscore.util.trampolines": 18,
            underscore: 4
        } ],
        4: [ function(t, e, n) {
            (function() {
                var t = this, r = t._, i = {}, o = Array.prototype, s = Object.prototype, u = Function.prototype, a = o.push, c = o.slice, l = o.concat, f = s.toString, p = s.hasOwnProperty, h = o.forEach, d = o.map, v = o.reduce, m = o.reduceRight, g = o.filter, y = o.every, _ = o.some, b = o.indexOf, w = o.lastIndexOf, x = Array.isArray, j = Object.keys, S = u.bind, k = function(t) {
                    return t instanceof k ? t : this instanceof k ? void (this._wrapped = t) : new k(t);
                };
                "undefined" != typeof n ? ("undefined" != typeof e && e.exports && (n = e.exports = k), 
                n._ = k) : t._ = k, k.VERSION = "1.5.2";
                var T = k.each = k.forEach = function(t, e, n) {
                    if (null != t) if (h && t.forEach === h) t.forEach(e, n); else if (t.length === +t.length) {
                        for (var r = 0, o = t.length; o > r; r++) if (e.call(n, t[r], r, t) === i) return;
                    } else for (var s = k.keys(t), r = 0, o = s.length; o > r; r++) if (e.call(n, t[s[r]], s[r], t) === i) return;
                };
                k.map = k.collect = function(t, e, n) {
                    var r = [];
                    return null == t ? r : d && t.map === d ? t.map(e, n) : (T(t, function(t, i, o) {
                        r.push(e.call(n, t, i, o));
                    }), r);
                };
                var E = "Reduce of empty array with no initial value";
                k.reduce = k.foldl = k.inject = function(t, e, n, r) {
                    var i = arguments.length > 2;
                    if (null == t && (t = []), v && t.reduce === v) return r && (e = k.bind(e, r)), 
                    i ? t.reduce(e, n) : t.reduce(e);
                    if (T(t, function(t, o, s) {
                        i ? n = e.call(r, n, t, o, s) : (n = t, i = !0);
                    }), !i) throw new TypeError(E);
                    return n;
                }, k.reduceRight = k.foldr = function(t, e, n, r) {
                    var i = arguments.length > 2;
                    if (null == t && (t = []), m && t.reduceRight === m) return r && (e = k.bind(e, r)), 
                    i ? t.reduceRight(e, n) : t.reduceRight(e);
                    var o = t.length;
                    if (o !== +o) {
                        var s = k.keys(t);
                        o = s.length;
                    }
                    if (T(t, function(u, a, c) {
                        a = s ? s[--o] : --o, i ? n = e.call(r, n, t[a], a, c) : (n = t[a], i = !0);
                    }), !i) throw new TypeError(E);
                    return n;
                }, k.find = k.detect = function(t, e, n) {
                    var r;
                    return C(t, function(t, i, o) {
                        return e.call(n, t, i, o) ? (r = t, !0) : void 0;
                    }), r;
                }, k.filter = k.select = function(t, e, n) {
                    var r = [];
                    return null == t ? r : g && t.filter === g ? t.filter(e, n) : (T(t, function(t, i, o) {
                        e.call(n, t, i, o) && r.push(t);
                    }), r);
                }, k.reject = function(t, e, n) {
                    return k.filter(t, function(t, r, i) {
                        return !e.call(n, t, r, i);
                    }, n);
                }, k.every = k.all = function(t, e, n) {
                    e || (e = k.identity);
                    var r = !0;
                    return null == t ? r : y && t.every === y ? t.every(e, n) : (T(t, function(t, o, s) {
                        return (r = r && e.call(n, t, o, s)) ? void 0 : i;
                    }), !!r);
                };
                var C = k.some = k.any = function(t, e, n) {
                    e || (e = k.identity);
                    var r = !1;
                    return null == t ? r : _ && t.some === _ ? t.some(e, n) : (T(t, function(t, o, s) {
                        return r || (r = e.call(n, t, o, s)) ? i : void 0;
                    }), !!r);
                };
                k.contains = k.include = function(t, e) {
                    return null == t ? !1 : b && t.indexOf === b ? -1 != t.indexOf(e) : C(t, function(t) {
                        return t === e;
                    });
                }, k.invoke = function(t, e) {
                    var n = c.call(arguments, 2), r = k.isFunction(e);
                    return k.map(t, function(t) {
                        return (r ? e : t[e]).apply(t, n);
                    });
                }, k.pluck = function(t, e) {
                    return k.map(t, function(t) {
                        return t[e];
                    });
                }, k.where = function(t, e, n) {
                    return k.isEmpty(e) ? n ? void 0 : [] : k[n ? "find" : "filter"](t, function(t) {
                        for (var n in e) if (e[n] !== t[n]) return !1;
                        return !0;
                    });
                }, k.findWhere = function(t, e) {
                    return k.where(t, e, !0);
                }, k.max = function(t, e, n) {
                    if (!e && k.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.max.apply(Math, t);
                    if (!e && k.isEmpty(t)) return -1 / 0;
                    var r = {
                        computed: -1 / 0,
                        value: -1 / 0
                    };
                    return T(t, function(t, i, o) {
                        var s = e ? e.call(n, t, i, o) : t;
                        s > r.computed && (r = {
                            value: t,
                            computed: s
                        });
                    }), r.value;
                }, k.min = function(t, e, n) {
                    if (!e && k.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.min.apply(Math, t);
                    if (!e && k.isEmpty(t)) return 1 / 0;
                    var r = {
                        computed: 1 / 0,
                        value: 1 / 0
                    };
                    return T(t, function(t, i, o) {
                        var s = e ? e.call(n, t, i, o) : t;
                        s < r.computed && (r = {
                            value: t,
                            computed: s
                        });
                    }), r.value;
                }, k.shuffle = function(t) {
                    var e, n = 0, r = [];
                    return T(t, function(t) {
                        e = k.random(n++), r[n - 1] = r[e], r[e] = t;
                    }), r;
                }, k.sample = function(t, e, n) {
                    return arguments.length < 2 || n ? t[k.random(t.length - 1)] : k.shuffle(t).slice(0, Math.max(0, e));
                };
                var A = function(t) {
                    return k.isFunction(t) ? t : function(e) {
                        return e[t];
                    };
                };
                k.sortBy = function(t, e, n) {
                    var r = A(e);
                    return k.pluck(k.map(t, function(t, e, i) {
                        return {
                            value: t,
                            index: e,
                            criteria: r.call(n, t, e, i)
                        };
                    }).sort(function(t, e) {
                        var n = t.criteria, r = e.criteria;
                        if (n !== r) {
                            if (n > r || void 0 === n) return 1;
                            if (r > n || void 0 === r) return -1;
                        }
                        return t.index - e.index;
                    }), "value");
                };
                var O = function(t) {
                    return function(e, n, r) {
                        var i = {}, o = null == n ? k.identity : A(n);
                        return T(e, function(n, s) {
                            var u = o.call(r, n, s, e);
                            t(i, u, n);
                        }), i;
                    };
                };
                k.groupBy = O(function(t, e, n) {
                    (k.has(t, e) ? t[e] : t[e] = []).push(n);
                }), k.indexBy = O(function(t, e, n) {
                    t[e] = n;
                }), k.countBy = O(function(t, e) {
                    k.has(t, e) ? t[e]++ : t[e] = 1;
                }), k.sortedIndex = function(t, e, n, r) {
                    n = null == n ? k.identity : A(n);
                    for (var i = n.call(r, e), o = 0, s = t.length; s > o; ) {
                        var u = o + s >>> 1;
                        n.call(r, t[u]) < i ? o = u + 1 : s = u;
                    }
                    return o;
                }, k.toArray = function(t) {
                    return t ? k.isArray(t) ? c.call(t) : t.length === +t.length ? k.map(t, k.identity) : k.values(t) : [];
                }, k.size = function(t) {
                    return null == t ? 0 : t.length === +t.length ? t.length : k.keys(t).length;
                }, k.first = k.head = k.take = function(t, e, n) {
                    return null == t ? void 0 : null == e || n ? t[0] : c.call(t, 0, e);
                }, k.initial = function(t, e, n) {
                    return c.call(t, 0, t.length - (null == e || n ? 1 : e));
                }, k.last = function(t, e, n) {
                    return null == t ? void 0 : null == e || n ? t[t.length - 1] : c.call(t, Math.max(t.length - e, 0));
                }, k.rest = k.tail = k.drop = function(t, e, n) {
                    return c.call(t, null == e || n ? 1 : e);
                }, k.compact = function(t) {
                    return k.filter(t, k.identity);
                };
                var P = function(t, e, n) {
                    return e && k.every(t, k.isArray) ? l.apply(n, t) : (T(t, function(t) {
                        k.isArray(t) || k.isArguments(t) ? e ? a.apply(n, t) : P(t, e, n) : n.push(t);
                    }), n);
                };
                k.flatten = function(t, e) {
                    return P(t, e, []);
                }, k.without = function(t) {
                    return k.difference(t, c.call(arguments, 1));
                }, k.uniq = k.unique = function(t, e, n, r) {
                    k.isFunction(e) && (r = n, n = e, e = !1);
                    var i = n ? k.map(t, n, r) : t, o = [], s = [];
                    return T(i, function(n, r) {
                        (e ? r && s[s.length - 1] === n : k.contains(s, n)) || (s.push(n), o.push(t[r]));
                    }), o;
                }, k.union = function() {
                    return k.uniq(k.flatten(arguments, !0));
                }, k.intersection = function(t) {
                    var e = c.call(arguments, 1);
                    return k.filter(k.uniq(t), function(t) {
                        return k.every(e, function(e) {
                            return k.indexOf(e, t) >= 0;
                        });
                    });
                }, k.difference = function(t) {
                    var e = l.apply(o, c.call(arguments, 1));
                    return k.filter(t, function(t) {
                        return !k.contains(e, t);
                    });
                }, k.zip = function() {
                    for (var t = k.max(k.pluck(arguments, "length").concat(0)), e = new Array(t), n = 0; t > n; n++) e[n] = k.pluck(arguments, "" + n);
                    return e;
                }, k.object = function(t, e) {
                    if (null == t) return {};
                    for (var n = {}, r = 0, i = t.length; i > r; r++) e ? n[t[r]] = e[r] : n[t[r][0]] = t[r][1];
                    return n;
                }, k.indexOf = function(t, e, n) {
                    if (null == t) return -1;
                    var r = 0, i = t.length;
                    if (n) {
                        if ("number" != typeof n) return r = k.sortedIndex(t, e), t[r] === e ? r : -1;
                        r = 0 > n ? Math.max(0, i + n) : n;
                    }
                    if (b && t.indexOf === b) return t.indexOf(e, n);
                    for (;i > r; r++) if (t[r] === e) return r;
                    return -1;
                }, k.lastIndexOf = function(t, e, n) {
                    if (null == t) return -1;
                    var r = null != n;
                    if (w && t.lastIndexOf === w) return r ? t.lastIndexOf(e, n) : t.lastIndexOf(e);
                    for (var i = r ? n : t.length; i--; ) if (t[i] === e) return i;
                    return -1;
                }, k.range = function(t, e, n) {
                    arguments.length <= 1 && (e = t || 0, t = 0), n = arguments[2] || 1;
                    for (var r = Math.max(Math.ceil((e - t) / n), 0), i = 0, o = new Array(r); r > i; ) o[i++] = t, 
                    t += n;
                    return o;
                };
                var R = function() {};
                k.bind = function(t, e) {
                    var n, r;
                    if (S && t.bind === S) return S.apply(t, c.call(arguments, 1));
                    if (!k.isFunction(t)) throw new TypeError();
                    return n = c.call(arguments, 2), r = function() {
                        if (!(this instanceof r)) return t.apply(e, n.concat(c.call(arguments)));
                        R.prototype = t.prototype;
                        var i = new R();
                        R.prototype = null;
                        var o = t.apply(i, n.concat(c.call(arguments)));
                        return Object(o) === o ? o : i;
                    };
                }, k.partial = function(t) {
                    var e = c.call(arguments, 1);
                    return function() {
                        return t.apply(this, e.concat(c.call(arguments)));
                    };
                }, k.bindAll = function(t) {
                    var e = c.call(arguments, 1);
                    if (0 === e.length) throw new Error("bindAll must be passed function names");
                    return T(e, function(e) {
                        t[e] = k.bind(t[e], t);
                    }), t;
                }, k.memoize = function(t, e) {
                    var n = {};
                    return e || (e = k.identity), function() {
                        var r = e.apply(this, arguments);
                        return k.has(n, r) ? n[r] : n[r] = t.apply(this, arguments);
                    };
                }, k.delay = function(t, e) {
                    var n = c.call(arguments, 2);
                    return setTimeout(function() {
                        return t.apply(null, n);
                    }, e);
                }, k.defer = function(t) {
                    return k.delay.apply(k, [ t, 1 ].concat(c.call(arguments, 1)));
                }, k.throttle = function(t, e, n) {
                    var r, i, o, s = null, u = 0;
                    n || (n = {});
                    var a = function() {
                        u = n.leading === !1 ? 0 : new Date(), s = null, o = t.apply(r, i);
                    };
                    return function() {
                        var c = new Date();
                        u || n.leading !== !1 || (u = c);
                        var l = e - (c - u);
                        return r = this, i = arguments, 0 >= l ? (clearTimeout(s), s = null, u = c, o = t.apply(r, i)) : s || n.trailing === !1 || (s = setTimeout(a, l)), 
                        o;
                    };
                }, k.debounce = function(t, e, n) {
                    var r, i, o, s, u;
                    return function() {
                        o = this, i = arguments, s = new Date();
                        var a = function() {
                            var c = new Date() - s;
                            e > c ? r = setTimeout(a, e - c) : (r = null, n || (u = t.apply(o, i)));
                        }, c = n && !r;
                        return r || (r = setTimeout(a, e)), c && (u = t.apply(o, i)), u;
                    };
                }, k.once = function(t) {
                    var e, n = !1;
                    return function() {
                        return n ? e : (n = !0, e = t.apply(this, arguments), t = null, e);
                    };
                }, k.wrap = function(t, e) {
                    return function() {
                        var n = [ t ];
                        return a.apply(n, arguments), e.apply(this, n);
                    };
                }, k.compose = function() {
                    var t = arguments;
                    return function() {
                        for (var e = arguments, n = t.length - 1; n >= 0; n--) e = [ t[n].apply(this, e) ];
                        return e[0];
                    };
                }, k.after = function(t, e) {
                    return function() {
                        return --t < 1 ? e.apply(this, arguments) : void 0;
                    };
                }, k.keys = j || function(t) {
                    if (t !== Object(t)) throw new TypeError("Invalid object");
                    var e = [];
                    for (var n in t) k.has(t, n) && e.push(n);
                    return e;
                }, k.values = function(t) {
                    for (var e = k.keys(t), n = e.length, r = new Array(n), i = 0; n > i; i++) r[i] = t[e[i]];
                    return r;
                }, k.pairs = function(t) {
                    for (var e = k.keys(t), n = e.length, r = new Array(n), i = 0; n > i; i++) r[i] = [ e[i], t[e[i]] ];
                    return r;
                }, k.invert = function(t) {
                    for (var e = {}, n = k.keys(t), r = 0, i = n.length; i > r; r++) e[t[n[r]]] = n[r];
                    return e;
                }, k.functions = k.methods = function(t) {
                    var e = [];
                    for (var n in t) k.isFunction(t[n]) && e.push(n);
                    return e.sort();
                }, k.extend = function(t) {
                    return T(c.call(arguments, 1), function(e) {
                        if (e) for (var n in e) t[n] = e[n];
                    }), t;
                }, k.pick = function(t) {
                    var e = {}, n = l.apply(o, c.call(arguments, 1));
                    return T(n, function(n) {
                        n in t && (e[n] = t[n]);
                    }), e;
                }, k.omit = function(t) {
                    var e = {}, n = l.apply(o, c.call(arguments, 1));
                    for (var r in t) k.contains(n, r) || (e[r] = t[r]);
                    return e;
                }, k.defaults = function(t) {
                    return T(c.call(arguments, 1), function(e) {
                        if (e) for (var n in e) void 0 === t[n] && (t[n] = e[n]);
                    }), t;
                }, k.clone = function(t) {
                    return k.isObject(t) ? k.isArray(t) ? t.slice() : k.extend({}, t) : t;
                }, k.tap = function(t, e) {
                    return e(t), t;
                };
                var F = function(t, e, n, r) {
                    if (t === e) return 0 !== t || 1 / t == 1 / e;
                    if (null == t || null == e) return t === e;
                    t instanceof k && (t = t._wrapped), e instanceof k && (e = e._wrapped);
                    var i = f.call(t);
                    if (i != f.call(e)) return !1;
                    switch (i) {
                      case "[object String]":
                        return t == String(e);

                      case "[object Number]":
                        return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;

                      case "[object Date]":
                      case "[object Boolean]":
                        return +t == +e;

                      case "[object RegExp]":
                        return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase;
                    }
                    if ("object" != typeof t || "object" != typeof e) return !1;
                    for (var o = n.length; o--; ) if (n[o] == t) return r[o] == e;
                    var s = t.constructor, u = e.constructor;
                    if (s !== u && !(k.isFunction(s) && s instanceof s && k.isFunction(u) && u instanceof u)) return !1;
                    n.push(t), r.push(e);
                    var a = 0, c = !0;
                    if ("[object Array]" == i) {
                        if (a = t.length, c = a == e.length) for (;a-- && (c = F(t[a], e[a], n, r)); ) ;
                    } else {
                        for (var l in t) if (k.has(t, l) && (a++, !(c = k.has(e, l) && F(t[l], e[l], n, r)))) break;
                        if (c) {
                            for (l in e) if (k.has(e, l) && !a--) break;
                            c = !a;
                        }
                    }
                    return n.pop(), r.pop(), c;
                };
                k.isEqual = function(t, e) {
                    return F(t, e, [], []);
                }, k.isEmpty = function(t) {
                    if (null == t) return !0;
                    if (k.isArray(t) || k.isString(t)) return 0 === t.length;
                    for (var e in t) if (k.has(t, e)) return !1;
                    return !0;
                }, k.isElement = function(t) {
                    return !(!t || 1 !== t.nodeType);
                }, k.isArray = x || function(t) {
                    return "[object Array]" == f.call(t);
                }, k.isObject = function(t) {
                    return t === Object(t);
                }, T([ "Arguments", "Function", "String", "Number", "Date", "RegExp" ], function(t) {
                    k["is" + t] = function(e) {
                        return f.call(e) == "[object " + t + "]";
                    };
                }), k.isArguments(arguments) || (k.isArguments = function(t) {
                    return !(!t || !k.has(t, "callee"));
                }), "function" != typeof /./ && (k.isFunction = function(t) {
                    return "function" == typeof t;
                }), k.isFinite = function(t) {
                    return isFinite(t) && !isNaN(parseFloat(t));
                }, k.isNaN = function(t) {
                    return k.isNumber(t) && t != +t;
                }, k.isBoolean = function(t) {
                    return t === !0 || t === !1 || "[object Boolean]" == f.call(t);
                }, k.isNull = function(t) {
                    return null === t;
                }, k.isUndefined = function(t) {
                    return void 0 === t;
                }, k.has = function(t, e) {
                    return p.call(t, e);
                }, k.noConflict = function() {
                    return t._ = r, this;
                }, k.identity = function(t) {
                    return t;
                }, k.times = function(t, e, n) {
                    for (var r = Array(Math.max(0, t)), i = 0; t > i; i++) r[i] = e.call(n, i);
                    return r;
                }, k.random = function(t, e) {
                    return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1));
                };
                var M = {
                    escape: {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#x27;"
                    }
                };
                M.unescape = k.invert(M.escape);
                var N = {
                    escape: new RegExp("[" + k.keys(M.escape).join("") + "]", "g"),
                    unescape: new RegExp("(" + k.keys(M.unescape).join("|") + ")", "g")
                };
                k.each([ "escape", "unescape" ], function(t) {
                    k[t] = function(e) {
                        return null == e ? "" : ("" + e).replace(N[t], function(e) {
                            return M[t][e];
                        });
                    };
                }), k.result = function(t, e) {
                    if (null == t) return void 0;
                    var n = t[e];
                    return k.isFunction(n) ? n.call(t) : n;
                }, k.mixin = function(t) {
                    T(k.functions(t), function(e) {
                        var n = k[e] = t[e];
                        k.prototype[e] = function() {
                            var t = [ this._wrapped ];
                            return a.apply(t, arguments), V.call(this, n.apply(k, t));
                        };
                    });
                };
                var I = 0;
                k.uniqueId = function(t) {
                    var e = ++I + "";
                    return t ? t + e : e;
                }, k.templateSettings = {
                    evaluate: /<%([\s\S]+?)%>/g,
                    interpolate: /<%=([\s\S]+?)%>/g,
                    escape: /<%-([\s\S]+?)%>/g
                };
                var q = /(.)^/, D = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "	": "t",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                }, H = /\\|'|\r|\n|\t|\u2028|\u2029/g;
                k.template = function(t, e, n) {
                    var r;
                    n = k.defaults({}, n, k.templateSettings);
                    var i = new RegExp([ (n.escape || q).source, (n.interpolate || q).source, (n.evaluate || q).source ].join("|") + "|$", "g"), o = 0, s = "__p+='";
                    t.replace(i, function(e, n, r, i, u) {
                        return s += t.slice(o, u).replace(H, function(t) {
                            return "\\" + D[t];
                        }), n && (s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (s += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), 
                        i && (s += "';\n" + i + "\n__p+='"), o = u + e.length, e;
                    }), s += "';\n", n.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
                    try {
                        r = new Function(n.variable || "obj", "_", s);
                    } catch (u) {
                        throw u.source = s, u;
                    }
                    if (e) return r(e, k);
                    var a = function(t) {
                        return r.call(this, t, k);
                    };
                    return a.source = "function(" + (n.variable || "obj") + "){\n" + s + "}", a;
                }, k.chain = function(t) {
                    return k(t).chain();
                };
                var V = function(t) {
                    return this._chain ? k(t).chain() : t;
                };
                k.mixin(k), T([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(t) {
                    var e = o[t];
                    k.prototype[t] = function() {
                        var n = this._wrapped;
                        return e.apply(n, arguments), "shift" != t && "splice" != t || 0 !== n.length || delete n[0], 
                        V.call(this, n);
                    };
                }), T([ "concat", "join", "slice" ], function(t) {
                    var e = o[t];
                    k.prototype[t] = function() {
                        return V.call(this, e.apply(this._wrapped, arguments));
                    };
                }), k.extend(k.prototype, {
                    chain: function() {
                        return this._chain = !0, this;
                    },
                    value: function() {
                        return this._wrapped;
                    }
                });
            }).call(this);
        }, {} ],
        5: [ function(t) {
            !function(e) {
                var n = e._ || t("underscore"), r = Array.prototype.slice, i = Array.prototype.concat, o = function(t) {
                    return null != t;
                };
                n.mixin({
                    cat: function() {
                        return n.reduce(arguments, function(t, e) {
                            return n.isArguments(e) ? i.call(t, r.call(e)) : i.call(t, e);
                        }, []);
                    },
                    cons: function(t, e) {
                        return n.cat([ t ], e);
                    },
                    partition: function(t, e, r) {
                        var i = function(t) {
                            if (null == t) return [];
                            var o = n.take(t, e);
                            return e === n.size(o) ? n.cons(o, i(n.drop(t, e))) : r ? [ n.take(n.cat(o, r), e) ] : [];
                        };
                        return i(t);
                    },
                    partitionAll: function(t, e, r) {
                        r = null != r ? r : e;
                        var i = function(t, e, r) {
                            return n.isEmpty(t) ? [] : n.cons(n.take(t, e), i(n.drop(t, r), e, r));
                        };
                        return i(t, e, r);
                    },
                    mapcat: function(t, e) {
                        return n.cat.apply(null, n.map(t, e));
                    },
                    interpose: function(t, e) {
                        if (!n.isArray(t)) throw new TypeError();
                        var i = n.size(t);
                        return 0 === i ? t : 1 === i ? t : r.call(n.mapcat(t, function(t) {
                            return n.cons(t, [ e ]);
                        }), 0, -1);
                    },
                    weave: function() {
                        return n.some(arguments) ? 1 == arguments.length ? arguments[0] : n.filter(n.flatten(n.zip.apply(null, arguments), !0), function(t) {
                            return null != t;
                        }) : [];
                    },
                    interleave: n.weave,
                    repeat: function(t, e) {
                        return n.times(t, function() {
                            return e;
                        });
                    },
                    cycle: function(t, e) {
                        return n.flatten(n.times(t, function() {
                            return e;
                        }), !0);
                    },
                    splitAt: function(t, e) {
                        return [ n.take(t, e), n.drop(t, e) ];
                    },
                    iterateUntil: function(t, e, n) {
                        for (var r = [], i = t(n); e(i); ) r.push(i), i = t(i);
                        return r;
                    },
                    takeSkipping: function(t, e) {
                        var r = [], i = n.size(t);
                        if (0 >= e) return [];
                        if (1 === e) return t;
                        for (var o = 0; i > o; o += e) r.push(t[o]);
                        return r;
                    },
                    reductions: function(t, e, r) {
                        var i = [], o = r;
                        return n.each(t, function(n, r) {
                            o = e(o, t[r]), i.push(o);
                        }), i;
                    },
                    keepIndexed: function(t, e) {
                        return n.filter(n.map(n.range(n.size(t)), function(n) {
                            return e(n, t[n]);
                        }), o);
                    },
                    reverseOrder: function(t) {
                        if ("string" == typeof t) throw new TypeError("Strings cannot be reversed by _.reverseOrder");
                        return r.call(t).reverse();
                    }
                });
            }(this);
        }, {
            underscore: 4
        } ],
        6: [ function(t) {
            !function(e) {
                var n = e._ || t("underscore"), r = Array.prototype.slice, i = Array.prototype.concat, o = function(t) {
                    return null != t;
                }, s = function(t) {
                    return t !== !1 && o(t);
                }, u = function(t) {
                    return n.isArray(t) || n.isArguments(t);
                };
                n.mixin({
                    second: function(t, e, n) {
                        return null == t ? void 0 : null == e || n ? t[1] : r.call(t, 1, e);
                    },
                    third: function(t, e, n) {
                        return null == t ? void 0 : null == e || n ? t[2] : r.call(t, 2, e);
                    },
                    nth: function(t, e, n) {
                        return null == e || n ? void 0 : t[e];
                    },
                    takeWhile: function(t, e) {
                        if (!u(t)) throw new TypeError();
                        for (var r = n.size(t), i = 0; r > i && s(e(t[i])); i++) ;
                        return n.take(t, i);
                    },
                    dropWhile: function(t, e) {
                        if (!u(t)) throw new TypeError();
                        for (var r = n.size(t), i = 0; r > i && s(e(t[i])); i++) ;
                        return n.drop(t, i);
                    },
                    splitWith: function(t, e) {
                        return [ n.takeWhile(t, e), n.dropWhile(t, e) ];
                    },
                    partitionBy: function(t, e) {
                        if (n.isEmpty(t) || !o(t)) return [];
                        var r = n.first(t), s = e(r), u = i.call([ r ], n.takeWhile(n.rest(t), function(t) {
                            return n.isEqual(s, e(t));
                        }));
                        return i.call([ u ], n.partitionBy(n.drop(t, n.size(u)), e));
                    },
                    best: function(t, e) {
                        return n.reduce(t, function(t, n) {
                            return e(t, n) ? t : n;
                        });
                    },
                    keep: function(t, e) {
                        if (!u(t)) throw new TypeError("expected an array as the first argument");
                        return n.filter(n.map(t, function(t) {
                            return e(t);
                        }), o);
                    }
                });
            }(this);
        }, {
            underscore: 4
        } ],
        7: [ function(t) {
            !function(e) {
                function n(t) {
                    return o.isElement(t) ? t.children : t;
                }
                function r(t, e, n, r, i, c) {
                    var l = [];
                    return function f(t, p, h) {
                        if (o.isObject(t)) {
                            if (l.indexOf(t) >= 0) throw new TypeError(a);
                            l.push(t);
                        }
                        if (n) {
                            var d = n.call(i, t, p, h);
                            if (d === u) return u;
                            if (d === s) return;
                        }
                        var v, m = e(t);
                        if (o.isObject(m) && !o.isEmpty(m)) {
                            c && (v = o.isArray(t) ? [] : {});
                            var g = o.any(m, function(e, n) {
                                var r = f(e, n, t);
                                return r === u ? !0 : void (v && (v[n] = r));
                            });
                            if (g) return u;
                        }
                        return r ? r.call(i, t, p, h, v) : void 0;
                    }(t);
                }
                function i(t, e, n) {
                    var r = [];
                    return this.preorder(t, function(t, i) {
                        return n || i != e ? void (o.has(t, e) && (r[r.length] = t[e])) : s;
                    }), r;
                }
                var o = e._ || t("underscore"), s = {}, u = {}, a = "Not a tree: same object found in two different branches", c = {
                    find: function(t, e, n) {
                        var r;
                        return this.preorder(t, function(t, i, o) {
                            return e.call(n, t, i, o) ? (r = t, u) : void 0;
                        }, n), r;
                    },
                    filter: function(t, e, n, r) {
                        var i = [];
                        return null == t ? i : (e(t, function(t, e, o) {
                            n.call(r, t, e, o) && i.push(t);
                        }, null, this._traversalStrategy), i);
                    },
                    reject: function(t, e, n, r) {
                        return this.filter(t, e, function(t, e, i) {
                            return !n.call(r, t, e, i);
                        });
                    },
                    map: function(t, e, n, r) {
                        var i = [];
                        return e(t, function(t, e, o) {
                            i[i.length] = n.call(r, t, e, o);
                        }, null, this._traversalStrategy), i;
                    },
                    pluck: function(t, e) {
                        return i.call(this, t, e, !1);
                    },
                    pluckRec: function(t, e) {
                        return i.call(this, t, e, !0);
                    },
                    postorder: function(t, e, n, i) {
                        i = i || this._traversalStrategy, r(t, i, null, e, n);
                    },
                    preorder: function(t, e, n, i) {
                        i = i || this._traversalStrategy, r(t, i, e, null, n);
                    },
                    reduce: function(t, e, n, i) {
                        var o = function(t, r, i, o) {
                            return e(o || n, t, r, i);
                        };
                        return r(t, this._traversalStrategy, null, o, i, !0);
                    }
                };
                c.collect = c.map, c.detect = c.find, c.select = c.filter, o.walk = function(t) {
                    var e = o.clone(c);
                    return o.bindAll.apply(null, [ e ].concat(o.keys(e))), e._traversalStrategy = t || n, 
                    e;
                }, o.extend(o.walk, o.walk());
            }(this);
        }, {
            underscore: 4
        } ],
        8: [ function(t) {
            !function(e) {
                function n(t) {
                    return function() {
                        if (1 === arguments.length) return t.apply(this, arguments);
                        throw new RangeError("Only a single argument may be accepted.");
                    };
                }
                var r = e._ || t("underscore"), i = function() {
                    function t(e, r, i, o, s, u) {
                        return u === !0 ? o.unshift(s) : o.push(s), o.length == i ? e.apply(r, o) : n(function() {
                            return t(e, r, i, o.slice(0), arguments[0], u);
                        });
                    }
                    return function(e, r) {
                        var i = this;
                        return n(function() {
                            return t(e, i, e.length, [], arguments[0], r);
                        });
                    };
                }(), o = function() {
                    var t = [];
                    return function(e) {
                        if ("function" != typeof e) throw new Error("Argument 1 must be a function.");
                        var n = e.length;
                        return void 0 === t[n] && (t[n] = function(t) {
                            return function() {
                                if (arguments.length !== n) throw new RangeError(n + " arguments must be applied.");
                                return t.apply(this, arguments);
                            };
                        }), t[n](e);
                    };
                }();
                r.mixin({
                    fix: function(t) {
                        var e = r.rest(arguments), n = function() {
                            for (var n = e.slice(), i = 0, o = 0; o < n.length || i < arguments.length; o++) n[o] === r && (n[o] = arguments[i++]);
                            return t.apply(null, n);
                        };
                        return n._original = t, n;
                    },
                    unary: function(t) {
                        return function(e) {
                            return t.call(this, e);
                        };
                    },
                    binary: function(t) {
                        return function(e, n) {
                            return t.call(this, e, n);
                        };
                    },
                    ternary: function(t) {
                        return function(e, n, r) {
                            return t.call(this, e, n, r);
                        };
                    },
                    quaternary: function(t) {
                        return function(e, n, r, i) {
                            return t.call(this, e, n, r, i);
                        };
                    },
                    curry: i,
                    rCurry: function(t) {
                        return i.call(this, t, !0);
                    },
                    curry2: function(t) {
                        return n(function(e) {
                            return n(function(n) {
                                return t.call(this, e, n);
                            });
                        });
                    },
                    curry3: function(t) {
                        return n(function(e) {
                            return n(function(r) {
                                return n(function(n) {
                                    return t.call(this, e, r, n);
                                });
                            });
                        });
                    },
                    rcurry2: function(t) {
                        return n(function(e) {
                            return n(function(n) {
                                return t.call(this, n, e);
                            });
                        });
                    },
                    rcurry3: function(t) {
                        return n(function(e) {
                            return n(function(r) {
                                return n(function(n) {
                                    return t.call(this, n, r, e);
                                });
                            });
                        });
                    },
                    enforce: o
                }), r.arity = function() {
                    var t = {};
                    return function e(n, r) {
                        if (null == t[n]) {
                            for (var i = new Array(n), o = 0; n > o; ++o) i[o] = "__" + o;
                            var s = i.join(), u = "return function (" + s + ") { return fun.apply(this, arguments); };";
                            t[n] = new Function([ "fun" ], u);
                        }
                        return null == r ? function(t) {
                            return e(n, t);
                        } : t[n](r);
                    };
                }();
            }(this);
        }, {
            underscore: 4
        } ],
        9: [ function(t) {
            !function(e) {
                function n(t, e) {
                    return r.arity(t.length, function() {
                        return t.apply(this, a.call(arguments, e));
                    });
                }
                var r = e._ || t("underscore"), i = function(t) {
                    return null != t;
                }, o = function(t) {
                    return t !== !1 && i(t);
                }, s = [].reverse, u = [].slice, a = [].map, c = function(t) {
                    return function(e, n) {
                        return 1 === arguments.length ? function(n) {
                            return t(e, n);
                        } : t(e, n);
                    };
                };
                r.mixin({
                    always: function(t) {
                        return function() {
                            return t;
                        };
                    },
                    pipeline: function() {
                        var t = r.isArray(arguments[0]) ? arguments[0] : arguments;
                        return function(e) {
                            return r.reduce(t, function(t, e) {
                                return e(t);
                            }, e);
                        };
                    },
                    conjoin: function() {
                        var t = arguments;
                        return function(e) {
                            return r.every(e, function(e) {
                                return r.every(t, function(t) {
                                    return t(e);
                                });
                            });
                        };
                    },
                    disjoin: function() {
                        var t = arguments;
                        return function(e) {
                            return r.some(e, function(e) {
                                return r.some(t, function(t) {
                                    return t(e);
                                });
                            });
                        };
                    },
                    comparator: function(t) {
                        return function(e, n) {
                            return o(t(e, n)) ? -1 : o(t(n, e)) ? 1 : 0;
                        };
                    },
                    complement: function(t) {
                        return function() {
                            return !t.apply(null, arguments);
                        };
                    },
                    splat: function(t) {
                        return function(e) {
                            return t.apply(null, e);
                        };
                    },
                    unsplat: function(t) {
                        var e = t.length;
                        return 1 > e ? t : 1 === e ? function() {
                            return t.call(this, u.call(arguments, 0));
                        } : function() {
                            var n = arguments.length, r = u.call(arguments, 0, e - 1), i = Math.max(e - n - 1, 0), o = new Array(i), s = u.call(arguments, t.length - 1);
                            return t.apply(this, r.concat(o).concat([ s ]));
                        };
                    },
                    unsplatl: function(t) {
                        var e = t.length;
                        return 1 > e ? t : 1 === e ? function() {
                            return t.call(this, u.call(arguments, 0));
                        } : function() {
                            var n = arguments.length, r = u.call(arguments, Math.max(n - e + 1, 0)), i = u.call(arguments, 0, Math.max(n - e + 1, 0));
                            return t.apply(this, [ i ].concat(r));
                        };
                    },
                    mapArgs: c(n),
                    juxt: function() {
                        var t = arguments;
                        return function() {
                            var e = arguments;
                            return r.map(t, function(t) {
                                return t.apply(null, e);
                            });
                        };
                    },
                    fnull: function(t) {
                        var e = r.rest(arguments);
                        return function() {
                            for (var n = r.toArray(arguments), o = r.size(e), s = 0; o > s; s++) i(n[s]) || (n[s] = e[s]);
                            return t.apply(null, n);
                        };
                    },
                    flip2: function(t) {
                        return function() {
                            var e = u.call(arguments);
                            return e[0] = arguments[1], e[1] = arguments[0], t.apply(null, e);
                        };
                    },
                    flip: function(t) {
                        return function() {
                            var e = s.call(arguments);
                            return t.apply(null, e);
                        };
                    },
                    functionalize: function(t) {
                        return function(e) {
                            return t.apply(e, r.rest(arguments));
                        };
                    },
                    methodize: function(t) {
                        return function() {
                            return t.apply(null, r.cons(this, arguments));
                        };
                    },
                    k: r.always,
                    t: r.pipeline
                }), r.unsplatr = r.unsplat, r.mapArgsWith = c(r.flip(n)), r.bound = function(t, e) {
                    var n = t[e];
                    if (!r.isFunction(n)) throw new TypeError("Expected property to be a function");
                    return r.bind(n, t);
                };
            }(this);
        }, {
            underscore: 4
        } ],
        10: [ function(t) {
            !function(e) {
                var n = e._ || t("underscore"), r = Array.prototype.slice;
                n.mixin({
                    attempt: function(t, e) {
                        if (null == t) return void 0;
                        var i = t[e], o = r.call(arguments, 2);
                        return n.isFunction(i) ? i.apply(t, o) : void 0;
                    }
                });
            }(this);
        }, {
            underscore: 4
        } ],
        11: [ function(t) {
            !function(e) {
                function n(t) {
                    return function(e) {
                        return t.call(this, e);
                    };
                }
                function r(t, e, n) {
                    var r, i;
                    for (r = void 0 !== n ? n : t(), i = t(); null != i; ) r = e.call(i, r, i), i = t();
                    return r;
                }
                function i(t, e) {
                    var n = j;
                    return function() {
                        return n === j ? n = t : null != n && (n = e.call(n, n)), n;
                    };
                }
                function o(t, e) {
                    var n, r, i = t;
                    return function() {
                        return null != i ? (n = e.call(i, i), r = n[1], i = null != r ? n[0] : void 0, r) : void 0;
                    };
                }
                function s(t, e, n) {
                    var r = n;
                    return function() {
                        var n = t();
                        return null == n ? n : r = void 0 === r ? n : e.call(n, r, n);
                    };
                }
                function u(t, e, n) {
                    var r, i, o = n;
                    return function() {
                        return i = t(), null == i ? i : void 0 === o ? o = i : (r = e.call(i, o, i), o = r[0], 
                        r[1]);
                    };
                }
                function a(t, e) {
                    return function() {
                        var n;
                        return n = t(), null != n ? e.call(n, n) : void 0;
                    };
                }
                function c(t, e) {
                    var n = null;
                    return function() {
                        var r, i;
                        if (null == n) {
                            if (i = t(), null == i) return void (n = null);
                            n = e.call(i, i);
                        }
                        for (;null == r; ) if (r = n(), null == r) {
                            if (i = t(), null == i) return void (n = null);
                            n = e.call(i, i);
                        }
                        return r;
                    };
                }
                function l(t, e) {
                    return function() {
                        var n;
                        for (n = t(); null != n; ) {
                            if (e.call(n, n)) return n;
                            n = t();
                        }
                        return void 0;
                    };
                }
                function f(t, e) {
                    return l(t, function(t) {
                        return !e(t);
                    });
                }
                function p(t, e) {
                    return l(t, e)();
                }
                function h(t, e, n) {
                    for (var r = 0; e-- > 0; ) t();
                    return null != n ? function() {
                        return ++r <= n ? t() : void 0;
                    } : t;
                }
                function d(t, e) {
                    return h(t, null == e ? 1 : e);
                }
                function v(t, e) {
                    return h(t, 0, null == e ? 1 : e);
                }
                function m(t) {
                    var e = 0;
                    return function() {
                        return t[e++];
                    };
                }
                function g(t) {
                    var e, n, r;
                    return e = 0, r = [], n = function() {
                        var i, o;
                        return i = t[e++], i instanceof Array ? (r.push({
                            array: t,
                            index: e
                        }), t = i, e = 0, n()) : void 0 === i ? r.length > 0 ? (o = r.pop(), t = o.array, 
                        e = o.index, n()) : void 0 : i;
                    };
                }
                function y(t) {
                    return function() {
                        return t;
                    };
                }
                function _(t, e, n) {
                    return function() {
                        var r;
                        return t > e ? void 0 : (r = t, t += n, r);
                    };
                }
                function b(t, e, n) {
                    return function() {
                        var r;
                        return e > t ? void 0 : (r = t, t -= n, r);
                    };
                }
                function w(t, e, n) {
                    return null == t ? _(1, 1 / 0, 1) : null == e ? _(t, 1 / 0, 1) : null == n ? e >= t ? _(t, e, 1) : b(t, e, 1) : n > 0 ? _(t, e, n) : 0 > n ? b(t, e, Math.abs(n)) : k(t);
                }
                var x = e._ || t("underscore"), j = {}, S = n(w);
                x.iterators = {
                    accumulate: s,
                    accumulateWithReturn: u,
                    foldl: r,
                    reduce: r,
                    unfold: i,
                    unfoldWithReturn: o,
                    map: a,
                    mapcat: c,
                    select: l,
                    reject: f,
                    filter: l,
                    find: p,
                    slice: h,
                    drop: d,
                    take: v,
                    List: m,
                    Tree: g,
                    constant: y,
                    K: y,
                    numbers: S,
                    range: w
                };
            }(this, void 0);
        }, {
            underscore: 4
        } ],
        12: [ function(t) {
            !function(e) {
                var n = e._ || t("underscore");
                n.mixin({
                    isInstanceOf: function(t, e) {
                        return t instanceof e;
                    },
                    isAssociative: function(t) {
                        return n.isArray(t) || n.isObject(t) || n.isArguments(t);
                    },
                    isIndexed: function(t) {
                        return n.isArray(t) || n.isString(t) || n.isArguments(t);
                    },
                    isSequential: function(t) {
                        return n.isArray(t) || n.isArguments(t);
                    },
                    isPlainObject: function(t) {
                        return n.isObject(t) && t.constructor === e.Object;
                    },
                    isZero: function(t) {
                        return 0 === t;
                    },
                    isEven: function(t) {
                        return n.isFinite(t) && 0 === (1 & t);
                    },
                    isOdd: function(t) {
                        return n.isFinite(t) && !n.isEven(t);
                    },
                    isPositive: function(t) {
                        return t > 0;
                    },
                    isNegative: function(t) {
                        return 0 > t;
                    },
                    isValidDate: function(t) {
                        return n.isDate(t) && !n.isNaN(t.getTime());
                    },
                    isNumeric: function(t) {
                        return !isNaN(parseFloat(t)) && isFinite(t);
                    },
                    isInteger: function(t) {
                        return n.isNumeric(t) && t % 1 === 0;
                    },
                    isFloat: function(t) {
                        return n.isNumeric(t) && !n.isInteger(t);
                    },
                    isJSON: function(t) {
                        try {
                            JSON.parse(t);
                        } catch (e) {
                            return !1;
                        }
                        return !0;
                    },
                    isIncreasing: function() {
                        var t = n.size(arguments);
                        if (1 === t) return !0;
                        if (2 === t) return arguments[0] < arguments[1];
                        for (var e = 1; t > e; e++) if (arguments[e - 1] >= arguments[e]) return !1;
                        return !0;
                    },
                    isDecreasing: function() {
                        var t = n.size(arguments);
                        if (1 === t) return !0;
                        if (2 === t) return arguments[0] > arguments[1];
                        for (var e = 1; t > e; e++) if (arguments[e - 1] <= arguments[e]) return !1;
                        return !0;
                    }
                });
            }(this);
        }, {
            underscore: 4
        } ],
        13: [ function(t) {
            !function(e) {
                var n = e._ || t("underscore"), r = (Array.prototype.slice, Array.prototype.concat), i = function(t) {
                    return null != t;
                }, o = function(t) {
                    return t !== !1 && i(t);
                }, s = function(t) {
                    return n.isArray(t) || n.isObject(t);
                }, u = function(t) {
                    return function(e) {
                        return function(n) {
                            return t(n, e);
                        };
                    };
                };
                n.mixin({
                    merge: function() {
                        var t = n.some(arguments) ? {} : null;
                        return o(t) && n.extend.apply(null, r.call([ t ], n.toArray(arguments))), t;
                    },
                    renameKeys: function(t, e) {
                        return n.reduce(e, function(e, n, r) {
                            return i(t[r]) ? (e[n] = t[r], e) : e;
                        }, n.omit.apply(null, r.call([ t ], n.keys(e))));
                    },
                    snapshot: function(t) {
                        if (null == t || "object" != typeof t) return t;
                        var e = new t.constructor();
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = n.snapshot(t[r]));
                        return e;
                    },
                    updatePath: function(t, e, r, o) {
                        if (!s(t)) throw new TypeError("Attempted to update a non-associative object.");
                        if (!i(r)) return e(t);
                        var u = n.isArray(r), a = u ? r : [ r ], c = u ? n.snapshot(t) : n.clone(t), l = n.last(a), f = c;
                        return n.each(n.initial(a), function(t) {
                            o && !n.has(f, t) && (f[t] = n.clone(o)), f = f[t];
                        }), f[l] = e(f[l]), c;
                    },
                    setPath: function(t, e, r, o) {
                        if (!i(r)) throw new TypeError("Attempted to set a property at a null path.");
                        return n.updatePath(t, function() {
                            return e;
                        }, r, o);
                    },
                    frequencies: u(n.countBy)(n.identity)
                });
            }(this);
        }, {
            underscore: 4
        } ],
        14: [ function(t) {
            !function(e) {
                {
                    var n = e._ || t("underscore"), r = Array.prototype.concat, i = Array.prototype;
                    i.slice;
                }
                n.mixin({
                    accessor: function(t) {
                        return function(e) {
                            return e && e[t];
                        };
                    },
                    dictionary: function(t) {
                        return function(e) {
                            return t && e && t[e];
                        };
                    },
                    selectKeys: function(t, e) {
                        return n.pick.apply(null, r.call([ t ], e));
                    },
                    kv: function(t, e) {
                        return n.has(t, e) ? [ e, t[e] ] : void 0;
                    },
                    getPath: function o(t, e) {
                        return "string" == typeof e && (e = e.split(".")), void 0 === t ? void 0 : 0 === e.length ? t : null === t ? void 0 : o(t[n.first(e)], n.rest(e));
                    },
                    hasPath: function s(t, e) {
                        "string" == typeof e && (e = e.split("."));
                        var r = e.length;
                        return null == t && r > 0 ? !1 : e[0] in t ? 1 === r ? !0 : s(t[n.first(e)], n.rest(e)) : !1;
                    },
                    pickWhen: function(t, e) {
                        var r = {};
                        return n.each(t, function(n, i) {
                            e(t[i]) && (r[i] = t[i]);
                        }), r;
                    },
                    omitWhen: function(t, e) {
                        return n.pickWhen(t, function(t) {
                            return !e(t);
                        });
                    }
                });
            }(this);
        }, {
            underscore: 4
        } ],
        15: [ function(t) {
            !function(e) {
                var n = e._ || t("underscore");
                n.mixin({
                    exists: function(t) {
                        return null != t;
                    },
                    truthy: function(t) {
                        return t !== !1 && n.exists(t);
                    },
                    falsey: function(t) {
                        return !n.truthy(t);
                    },
                    not: function(t) {
                        return !t;
                    },
                    firstExisting: function() {
                        for (var t = 0; t < arguments.length; t++) if (null != arguments[t]) return arguments[t];
                    }
                });
            }(this);
        }, {
            underscore: 4
        } ],
        16: [ function(t) {
            !function(e) {
                function n(t) {
                    return function() {
                        return E.reduce(arguments, t);
                    };
                }
                function r(t) {
                    return function() {
                        for (var e, n = 0; n < arguments.length - 1; n++) if (e = t(arguments[n], arguments[n + 1]), 
                        e === !1) return e;
                        return e;
                    };
                }
                function i(t) {
                    return function() {
                        return !t.apply(this, arguments);
                    };
                }
                function o(t, e) {
                    return t + e;
                }
                function s(t, e) {
                    return t - e;
                }
                function u(t, e) {
                    return t * e;
                }
                function a(t, e) {
                    return t / e;
                }
                function c(t, e) {
                    return t % e;
                }
                function l(t) {
                    return ++t;
                }
                function f(t) {
                    return --t;
                }
                function p(t) {
                    return -t;
                }
                function h(t, e) {
                    return t & e;
                }
                function d(t, e) {
                    return t | e;
                }
                function v(t, e) {
                    return t ^ e;
                }
                function m(t, e) {
                    return t << e;
                }
                function g(t, e) {
                    return t >> e;
                }
                function y(t, e) {
                    return t >>> e;
                }
                function _(t) {
                    return ~t;
                }
                function b(t, e) {
                    return t == e;
                }
                function w(t, e) {
                    return t === e;
                }
                function x(t) {
                    return !t;
                }
                function j(t, e) {
                    return t > e;
                }
                function S(t, e) {
                    return e > t;
                }
                function k(t, e) {
                    return t >= e;
                }
                function T(t, e) {
                    return e >= t;
                }
                var E = e._ || t("underscore");
                E.mixin({
                    add: n(o),
                    sub: n(s),
                    mul: n(u),
                    div: n(a),
                    mod: c,
                    inc: l,
                    dec: f,
                    neg: p,
                    eq: r(b),
                    seq: r(w),
                    neq: i(r(b)),
                    sneq: i(r(w)),
                    not: x,
                    gt: r(j),
                    lt: r(S),
                    gte: r(k),
                    lte: r(T),
                    bitwiseAnd: n(h),
                    bitwiseOr: n(d),
                    bitwiseXor: n(v),
                    bitwiseNot: _,
                    bitwiseLeft: n(m),
                    bitwiseRight: n(g),
                    bitwiseZ: n(y)
                });
            }(this);
        }, {
            underscore: 4
        } ],
        17: [ function(t) {
            !function(e) {
                var n = e._ || t("underscore");
                n.mixin({
                    explode: function(t) {
                        return t.split("");
                    },
                    implode: function(t) {
                        return t.join("");
                    },
                    camelCase: function(t) {
                        return t.replace(/-([a-z])/g, function(t) {
                            return t[1].toUpperCase();
                        });
                    },
                    toDash: function(t) {
                        return t = t.replace(/([A-Z])/g, function(t) {
                            return "-" + t.toLowerCase();
                        }), "-" == t.charAt(0) ? t.substr(1) : t;
                    },
                    strContains: function(t, e) {
                        if ("string" != typeof t) throw new TypeError();
                        return -1 != t.indexOf(e);
                    }
                });
            }(this);
        }, {
            underscore: 4
        } ],
        18: [ function(t) {
            !function(e) {
                var n = e._ || t("underscore");
                n.mixin({
                    done: function(t) {
                        var e = n(t);
                        return e.stopTrampoline = !0, e;
                    },
                    trampoline: function(t) {
                        for (var e = t.apply(t, n.rest(arguments)); n.isFunction(e) && (e = e(), !(e instanceof n && e.stopTrampoline)); ) ;
                        return e.value();
                    }
                });
            }(this);
        }, {
            underscore: 4
        } ],
        19: [ function(e, n, r) {
            var i = "undefined" != typeof self ? self : "undefined" != typeof window ? window : {};
            !function(e) {
                if ("object" == typeof r) n.exports = e(); else if ("function" == typeof t && t.amd) t(e); else {
                    var o;
                    "undefined" != typeof window ? o = window : "undefined" != typeof i ? o = i : "undefined" != typeof self && (o = self), 
                    o.questor = e();
                }
            }(function() {
                return function t(n, r, i) {
                    function o(u, a) {
                        if (!r[u]) {
                            if (!n[u]) {
                                var c = "function" == typeof e && e;
                                if (!a && c) return c(u, !0);
                                if (s) return s(u, !0);
                                throw new Error("Cannot find module '" + u + "'");
                            }
                            var l = r[u] = {
                                exports: {}
                            };
                            n[u][0].call(l.exports, function(t) {
                                var e = n[u][1][t];
                                return o(e ? e : t);
                            }, l, l.exports, t, n, r, i);
                        }
                        return r[u].exports;
                    }
                    for (var s = "function" == typeof e && e, u = 0; u < i.length; u++) o(i[u]);
                    return o;
                }({
                    1: [ function(t, e) {
                        "use strict";
                        function n(t, e) {
                            return e || (e = {}), o({
                                headers: e.headers,
                                method: e.method,
                                uri: t
                            }).spread(function(t) {
                                var e = {
                                    body: t.body,
                                    headers: r(t.getAllResponseHeaders()),
                                    status: t.statusCode
                                };
                                if (e.status >= 300) {
                                    var n = new Error(e.body);
                                    throw n.body = e.body, n.headers = e.headers, n.status = e.status, n;
                                }
                                return e;
                            });
                        }
                        function r(t) {
                            var e = {};
                            if (!t) return e;
                            for (var n = t.split("\r\n"), r = 0; r < n.length; r++) {
                                var i = n[r], o = i.indexOf(": ") || i.indexOf(":");
                                if (o > 0) {
                                    var s = i.substring(0, o), u = i.substring(o + 2);
                                    e[s] = u;
                                }
                            }
                            return e;
                        }
                        var i = t("bluebird"), o = i.promisify(t("xhr"));
                        e.exports = n;
                    }, {
                        bluebird: 5,
                        xhr: 41
                    } ],
                    2: [ function(t, e) {
                        "use strict";
                        e.exports = function(e, n, r) {
                            function i(t, e, r) {
                                var i = n(t, o, r, e === !0 && t._isBound() ? t._boundTo : void 0), s = i.promise();
                                return s.isRejected() ? s : (i.setHowMany(1), i.setUnwrap(), i.init(), s);
                            }
                            var o = t("./some_promise_array.js")(r);
                            t("./assert.js"), e.any = function(t) {
                                return i(t, !1, e.any);
                            }, e.prototype.any = function() {
                                return i(this, !0, this.any);
                            };
                        };
                    }, {
                        "./assert.js": 3,
                        "./some_promise_array.js": 36
                    } ],
                    3: [ function(t, e) {
                        "use strict";
                        e.exports = function() {
                            var t = function() {
                                function t(t) {
                                    this.constructor$(t), this.message = t, this.name = "AssertionError";
                                }
                                return t.prototype = new Error(), t.prototype.constructor = t, t.prototype.constructor$ = Error, 
                                t;
                            }();
                            return function e(n, r) {
                                if (n !== !0) {
                                    var i = new t(r);
                                    throw Error.captureStackTrace && Error.captureStackTrace(i, e), console && console.error && console.error(i.stack + ""), 
                                    i;
                                }
                            };
                        }();
                    }, {} ],
                    4: [ function(t, e) {
                        "use strict";
                        function n() {
                            this._isTickUsed = !1, this._length = 0, this._lateBuffer = new i(), this._functionBuffer = new i(75e3);
                            var t = this;
                            this.consumeFunctionBuffer = function() {
                                t._consumeFunctionBuffer();
                            };
                        }
                        var r = (t("./assert.js"), t("./schedule.js")), i = t("./queue.js"), o = t("./util.js").errorObj, s = t("./util.js").tryCatch1;
                        n.prototype.haveItemsQueued = function() {
                            return this._length > 0;
                        }, n.prototype.invokeLater = function(t, e, n) {
                            this._lateBuffer.push(t, e, n), this._queueTick();
                        }, n.prototype.invoke = function(t, e, n) {
                            var r = this._functionBuffer;
                            r.push(t, e, n), this._length = r.length(), this._queueTick();
                        }, n.prototype._consumeFunctionBuffer = function() {
                            for (var t = this._functionBuffer; t.length() > 0; ) {
                                var e = t.shift(), n = t.shift(), r = t.shift();
                                e.call(n, r);
                            }
                            this._reset(), this._consumeLateBuffer();
                        }, n.prototype._consumeLateBuffer = function() {
                            for (var t = this._lateBuffer; t.length() > 0; ) {
                                var e = t.shift(), n = t.shift(), r = t.shift(), i = s(e, n, r);
                                if (i === o) throw this._queueTick(), i.e;
                            }
                        }, n.prototype._queueTick = function() {
                            this._isTickUsed || (r(this.consumeFunctionBuffer), this._isTickUsed = !0);
                        }, n.prototype._reset = function() {
                            this._isTickUsed = !1, this._length = 0;
                        }, e.exports = new n();
                    }, {
                        "./assert.js": 3,
                        "./queue.js": 29,
                        "./schedule.js": 32,
                        "./util.js": 40
                    } ],
                    5: [ function(t, e) {
                        "use strict";
                        var n = t("./promise.js")();
                        e.exports = n;
                    }, {
                        "./promise.js": 21
                    } ],
                    6: [ function(t, e) {
                        "use strict";
                        e.exports = function(t) {
                            function e(t) {
                                var e = "string" == typeof this ? this : "" + this;
                                return t[e];
                            }
                            t.prototype.call = function(t) {
                                for (var e = arguments.length, n = new Array(e - 1), r = 1; e > r; ++r) n[r - 1] = arguments[r];
                                return this._then(function(e) {
                                    return e[t].apply(e, n);
                                }, void 0, void 0, void 0, void 0, this.call);
                            }, t.prototype.get = function(t) {
                                return this._then(e, void 0, void 0, t, void 0, this.get);
                            };
                        };
                    }, {} ],
                    7: [ function(t, e) {
                        "use strict";
                        e.exports = function(e, n) {
                            var r = t("./errors.js"), i = t("./async.js"), o = (t("./assert.js"), r.CancellationError), s = {};
                            e.prototype._cancel = function() {
                                if (!this.isCancellable()) return this;
                                var t;
                                if (void 0 !== (t = this._cancellationParent)) return void t.cancel(s);
                                var e = new o();
                                this._attachExtraTrace(e), this._rejectUnchecked(e);
                            }, e.prototype.cancel = function(t) {
                                return this.isCancellable() ? t === s ? (this._cancel(), this) : (i.invokeLater(this._cancel, this, void 0), 
                                this) : this;
                            }, e.prototype.cancellable = function() {
                                return this._cancellable() ? this : (this._setCancellable(), this._cancellationParent = void 0, 
                                this);
                            }, e.prototype.uncancellable = function() {
                                var t = new e(n);
                                return t._setTrace(this.uncancellable, this), t._follow(this), t._unsetCancellable(), 
                                this._isBound() && t._setBoundTo(this._boundTo), t;
                            }, e.prototype.fork = function(t, e, n) {
                                var r = this._then(t, e, n, void 0, void 0, this.fork);
                                return r._setCancellable(), r._cancellationParent = void 0, r;
                            };
                        };
                    }, {
                        "./assert.js": 3,
                        "./async.js": 4,
                        "./errors.js": 11
                    } ],
                    8: [ function(t, e) {
                        "use strict";
                        e.exports = function() {
                            function e(t) {
                                var e;
                                if ("function" == typeof t) e = "[function " + (t.name || "anonymous") + "]"; else {
                                    e = t.toString();
                                    var r = /\[object [a-zA-Z0-9$_]+\]/;
                                    if (r.test(e)) try {
                                        var i = JSON.stringify(t);
                                        e = i;
                                    } catch (o) {}
                                    0 === e.length && (e = "(empty array)");
                                }
                                return "(<" + n(e) + ">, no stack trace)";
                            }
                            function n(t) {
                                var e = 41;
                                return t.length < e ? t : t.substr(0, e - 3) + "...";
                            }
                            function r(t, e) {
                                this.captureStackTrace(t, e);
                            }
                            var i = (t("./assert.js"), t("./util.js").inherits), o = t("./es5.js").defineProperty, s = new RegExp("\\b(?:[\\w.]*Promise(?:Array|Spawn)?\\$_\\w+|tryCatch(?:1|2|Apply)|new \\w*PromiseArray|\\w*PromiseArray\\.\\w*PromiseArray|setTimeout|CatchFilter\\$_\\w+|makeNodePromisified|processImmediate|process._tickCallback|nextTick|Async\\$\\w+)\\b"), u = null, a = null, c = !1;
                            i(r, Error), r.prototype.captureStackTrace = function(t, e) {
                                l(this, t, e);
                            }, r.possiblyUnhandledRejection = function(t) {
                                if ("object" == typeof console) {
                                    var e;
                                    if ("object" == typeof t || "function" == typeof t) {
                                        var n = t.stack;
                                        e = "Possibly unhandled " + a(n, t);
                                    } else e = "Possibly unhandled " + String(t);
                                    "function" == typeof console.error || "object" == typeof console.error ? console.error(e) : ("function" == typeof console.log || "object" == typeof console.error) && console.log(e);
                                }
                            }, c = "CapturedTrace$captureStackTrace" !== r.prototype.captureStackTrace.name, 
                            r.combine = function(t, e) {
                                for (var n = t.length - 1, r = e.length - 1; r >= 0; --r) {
                                    var i = e[r];
                                    if (t[n] !== i) break;
                                    t.pop(), n--;
                                }
                                t.push("From previous event:");
                                for (var o = t.concat(e), a = [], r = 0, c = o.length; c > r; ++r) s.test(o[r]) || r > 0 && !u.test(o[r]) && "From previous event:" !== o[r] || a.push(o[r]);
                                return a;
                            }, r.isSupported = function() {
                                return "function" == typeof l;
                            };
                            var l = function f() {
                                if ("number" == typeof Error.stackTraceLimit && "function" == typeof Error.captureStackTrace) {
                                    u = /^\s*at\s*/, a = function(t, n) {
                                        return "string" == typeof t ? t : void 0 !== n.name && void 0 !== n.message ? n.name + ". " + n.message : e(n);
                                    };
                                    var t = Error.captureStackTrace;
                                    return function(e, n) {
                                        t(e, n);
                                    };
                                }
                                var n = new Error();
                                if (!c && "string" == typeof n.stack && "function" == typeof "".startsWith && n.stack.startsWith("stackDetection@") && "stackDetection" === f.name) {
                                    o(Error, "stackTraceLimit", {
                                        writable: !0,
                                        enumerable: !1,
                                        configurable: !1,
                                        value: 25
                                    }), u = /@/;
                                    var r = /[@\n]/;
                                    return a = function(t, n) {
                                        return "string" == typeof t ? n.name + ". " + n.message + "\n" + t : void 0 !== n.name && void 0 !== n.message ? n.name + ". " + n.message : e(n);
                                    }, function(t, e) {
                                        var n, i = e.name, o = new Error().stack, s = o.split(r), u = s.length;
                                        for (n = 0; u > n && s[n] !== i; n += 2) ;
                                        s = s.slice(n + 2), u = s.length - 2;
                                        var a = "";
                                        for (n = 0; u > n; n += 2) a += s[n], a += "@", a += s[n + 1], a += "\n";
                                        t.stack = a;
                                    };
                                }
                                return a = function(t, n) {
                                    return "string" == typeof t ? t : "object" != typeof n && "function" != typeof n || void 0 === n.name || void 0 === n.message ? e(n) : n.name + ". " + n.message;
                                }, null;
                            }();
                            return r;
                        };
                    }, {
                        "./assert.js": 3,
                        "./es5.js": 13,
                        "./util.js": 40
                    } ],
                    9: [ function(t, e) {
                        "use strict";
                        e.exports = function(e) {
                            function n(t, e, n) {
                                this._instances = t, this._callback = e, this._promise = n;
                            }
                            function r(t, e) {
                                var n = {}, r = o(t, n, e);
                                if (r === s) return r;
                                var i = u(n);
                                return i.length ? (s.e = new TypeError("Catch filter must inherit from Error or be a simple predicate function"), 
                                s) : r;
                            }
                            var i = t("./util.js"), o = i.tryCatch1, s = i.errorObj, u = t("./es5.js").keys;
                            return n.prototype.doFilter = function(t) {
                                for (var n = this._callback, i = this._promise, u = i._isBound() ? i._boundTo : void 0, a = 0, c = this._instances.length; c > a; ++a) {
                                    var l = this._instances[a], f = l === Error || null != l && l.prototype instanceof Error;
                                    if (f && t instanceof l) {
                                        var p = o(n, u, t);
                                        return p === s ? (e.e = p.e, e) : p;
                                    }
                                    if ("function" == typeof l && !f) {
                                        var h = r(l, t);
                                        if (h === s) {
                                            this._promise._attachExtraTrace(s.e), t = s.e;
                                            break;
                                        }
                                        if (h) {
                                            var p = o(n, u, t);
                                            return p === s ? (e.e = p.e, e) : p;
                                        }
                                    }
                                }
                                return e.e = t, e;
                            }, n;
                        };
                    }, {
                        "./es5.js": 13,
                        "./util.js": 40
                    } ],
                    10: [ function(t, e) {
                        "use strict";
                        var n = t("./util.js"), r = (t("./assert.js"), n.isPrimitive), i = n.wrapsPrimitiveReceiver;
                        e.exports = function(t) {
                            var e = function() {
                                return this;
                            }, n = function() {
                                throw this;
                            }, o = function(t, e) {
                                return 1 === e ? function() {
                                    throw t;
                                } : 2 === e ? function() {
                                    return t;
                                } : void 0;
                            };
                            t.prototype["return"] = t.prototype.thenReturn = function(t) {
                                return i && r(t) ? this._then(o(t, 2), void 0, void 0, void 0, void 0, this.thenReturn) : this._then(e, void 0, void 0, t, void 0, this.thenReturn);
                            }, t.prototype["throw"] = t.prototype.thenThrow = function(t) {
                                return i && r(t) ? this._then(o(t, 1), void 0, void 0, void 0, void 0, this.thenThrow) : this._then(n, void 0, void 0, t, void 0, this.thenThrow);
                            };
                        };
                    }, {
                        "./assert.js": 3,
                        "./util.js": 40
                    } ],
                    11: [ function(t, e) {
                        "use strict";
                        function n(t) {
                            return (1 & t) > 0;
                        }
                        function r(t) {
                            return (2 & t) > 0;
                        }
                        function i(t) {
                            return 1 | t;
                        }
                        function o(t) {
                            return 2 | t;
                        }
                        function s(t) {
                            return -3 & t;
                        }
                        function u(t) {
                            var e;
                            return _(t) && void 0 !== (e = t.__promiseHandled__) && (t.__promiseHandled__ = s(e)), 
                            t;
                        }
                        function a(t) {
                            try {
                                b(t, "__rejectionError__", d);
                            } catch (e) {}
                        }
                        function c(t) {
                            return null == t ? !1 : t instanceof d || t.__rejectionError__ === d;
                        }
                        function l(t) {
                            try {
                                return b(t, "__promiseHandled__", 0), !0;
                            } catch (e) {
                                return !1;
                            }
                        }
                        function f(t) {
                            return t instanceof w;
                        }
                        function p(t) {
                            if (f(t)) {
                                var e = t.__promiseHandled__;
                                return void 0 === e ? l(t) : !n(e);
                            }
                            return !1;
                        }
                        function h(t, e) {
                            function n(n) {
                                this.message = "string" == typeof n ? n : e, this.name = t, w.captureStackTrace && w.captureStackTrace(this, this.constructor);
                            }
                            return y(n, w), n;
                        }
                        function d(t) {
                            this.name = "RejectionError", this.message = t, this.cause = t, t instanceof w ? (this.message = t.message, 
                            this.stack = t.stack) : w.captureStackTrace && w.captureStackTrace(this, this.constructor);
                        }
                        var v = t("./global.js"), m = t("./es5.js").freeze, g = t("./util.js"), y = g.inherits, _ = g.isObject, b = g.notEnumerableProp, w = v.Error, x = v.TypeError;
                        "function" != typeof x && (x = h("TypeError", "type error"));
                        var j = v.RangeError;
                        "function" != typeof j && (j = h("RangeError", "range error"));
                        var S = h("CancellationError", "cancellation error"), k = h("TimeoutError", "timeout error");
                        y(d, w);
                        var T = "__BluebirdErrorTypes__", E = v[T];
                        E || (E = m({
                            CancellationError: S,
                            TimeoutError: k,
                            RejectionError: d
                        }), b(v, T, E)), e.exports = {
                            Error: w,
                            TypeError: x,
                            RangeError: j,
                            CancellationError: E.CancellationError,
                            RejectionError: E.RejectionError,
                            TimeoutError: E.TimeoutError,
                            originatesFromRejection: c,
                            markAsOriginatingFromRejection: a,
                            attachDefaultState: l,
                            ensureNotHandled: u,
                            withHandledUnmarked: s,
                            withHandledMarked: o,
                            withStackAttached: i,
                            isStackAttached: n,
                            isHandled: r,
                            canAttach: p
                        };
                    }, {
                        "./es5.js": 13,
                        "./global.js": 17,
                        "./util.js": 40
                    } ],
                    12: [ function(t, e) {
                        "use strict";
                        e.exports = function(e) {
                            function n(t) {
                                var n = new r(t), i = e.rejected(n), o = i._peekContext();
                                return null != o && o._attachExtraTrace(n), i;
                            }
                            var r = t("./errors.js").TypeError;
                            return n;
                        };
                    }, {
                        "./errors.js": 11
                    } ],
                    13: [ function(t, e) {
                        function n(t) {
                            var e = [];
                            for (var n in t) a.call(t, n) && e.push(n);
                            return e;
                        }
                        function r(t, e, n) {
                            return t[e] = n.value, t;
                        }
                        function i(t) {
                            return t;
                        }
                        function o(t) {
                            try {
                                return Object(t).constructor.prototype;
                            } catch (e) {
                                return l;
                            }
                        }
                        function s(t) {
                            try {
                                return "[object Array]" === c.call(t);
                            } catch (e) {
                                return !1;
                            }
                        }
                        var u = function() {
                            "use strict";
                            return void 0 === this;
                        }();
                        if (u) e.exports = {
                            freeze: Object.freeze,
                            defineProperty: Object.defineProperty,
                            keys: Object.keys,
                            getPrototypeOf: Object.getPrototypeOf,
                            isArray: Array.isArray,
                            isES5: u
                        }; else {
                            var a = {}.hasOwnProperty, c = {}.toString, l = {}.constructor.prototype;
                            e.exports = {
                                isArray: s,
                                keys: n,
                                defineProperty: r,
                                freeze: i,
                                getPrototypeOf: o,
                                isES5: u
                            };
                        }
                    }, {} ],
                    14: [ function(t, e) {
                        "use strict";
                        e.exports = function(e) {
                            function n(t) {
                                for (var e = this._settledValue, n = e.length, r = new Array(n), i = 0, o = 0; n > o; ++o) {
                                    var s = t[o];
                                    (void 0 !== s || o in t) && s && (r[i++] = e[o]);
                                }
                                return r.length = i, r;
                            }
                            var r = (t("./assert.js"), t("./util.js").isArray, {
                                ref: null
                            });
                            e.filter = function(t, i) {
                                return e.map(t, i, r)._then(n, void 0, void 0, r.ref, void 0, e.filter);
                            }, e.prototype.filter = function(t) {
                                return this.map(t, r)._then(n, void 0, void 0, r.ref, void 0, this.filter);
                            };
                        };
                    }, {
                        "./assert.js": 3,
                        "./util.js": 40
                    } ],
                    15: [ function(t, e) {
                        e.exports = function(e, n) {
                            function r() {
                                return this;
                            }
                            function i() {
                                throw l(this), this;
                            }
                            function o(t) {
                                return function() {
                                    return t;
                                };
                            }
                            function s(t) {
                                return function() {
                                    throw l(t), t;
                                };
                            }
                            function u(t, e, n) {
                                var a = f && p(e);
                                return n ? t._then(a ? r : o(e), h, void 0, e, void 0, u) : t._then(a ? i : s(e), h, void 0, e, void 0, u);
                            }
                            function a(t) {
                                var r = this.promise, i = this.handler, o = r._isBound() ? i.call(r._boundTo) : i();
                                if (void 0 !== o) {
                                    var s = e._cast(o, a, void 0);
                                    if (e.is(s)) return u(s, t, r.isFulfilled());
                                }
                                return r.isRejected() ? (l(t), n.e = t, n) : t;
                            }
                            var c = t("./util.js"), l = t("./errors.js").ensureNotHandled, f = c.wrapsPrimitiveReceiver, p = c.isPrimitive, h = c.thrower;
                            e.prototype.lastly = e.prototype["finally"] = function(t) {
                                if ("function" != typeof t) return this.then();
                                var e = {
                                    promise: this,
                                    handler: t
                                };
                                return this._then(a, a, void 0, e, void 0, this.lastly);
                            };
                        };
                    }, {
                        "./errors.js": 11,
                        "./util.js": 40
                    } ],
                    16: [ function(t, e) {
                        "use strict";
                        e.exports = function(e, n, r) {
                            var i = t("./promise_spawn.js")(e, r), o = t("./errors.js"), s = o.TypeError;
                            e.coroutine = function(t) {
                                if ("function" != typeof t) throw new s("generatorFunction must be a function");
                                var e = i;
                                return function n() {
                                    var r = t.apply(this, arguments), i = new e(void 0, void 0, n);
                                    return i._generator = r, i._next(void 0), i.promise();
                                };
                            }, e.spawn = function(t) {
                                if ("function" != typeof t) return n("generatorFunction must be a function");
                                var r = new i(t, this, e.spawn), o = r.promise();
                                return r._run(e.spawn), o;
                            };
                        };
                    }, {
                        "./errors.js": 11,
                        "./promise_spawn.js": 25
                    } ],
                    17: [ function(t, e) {
                        var n = t("__browserify_process"), r = "undefined" != typeof self ? self : "undefined" != typeof window ? window : {};
                        e.exports = function() {
                            return "undefined" != typeof this ? this : "undefined" != typeof n && "undefined" != typeof r && "string" == typeof n.execPath ? r : "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator && null !== navigator && "string" == typeof navigator.appName ? void 0 !== window.wrappedJSObject ? window.wrappedJSObject : window : void 0;
                        }();
                    }, {
                        __browserify_process: 76
                    } ],
                    18: [ function(t, e) {
                        "use strict";
                        e.exports = function(e, n, r, i) {
                            function o(t) {
                                var i = this, s = void 0;
                                "function" != typeof i && (s = i.receiver, i = i.fn);
                                var u = !1, a = new Array(t.length);
                                if (void 0 === s) {
                                    for (var c = 0, l = t.length; l > c; ++c) if (void 0 !== t[c] || c in t) {
                                        var f = i(t[c], c, l);
                                        if (!u) {
                                            var p = e._cast(f, o, void 0);
                                            if (p instanceof e) {
                                                if (p.isFulfilled()) {
                                                    a[c] = p._settledValue;
                                                    continue;
                                                }
                                                u = !0, f = p;
                                            }
                                        }
                                        a[c] = f;
                                    }
                                } else for (var c = 0, l = t.length; l > c; ++c) if (void 0 !== t[c] || c in t) {
                                    var f = i.call(s, t[c], c, l);
                                    if (!u) {
                                        var p = e._cast(f, o, void 0);
                                        if (p instanceof e) {
                                            if (p.isFulfilled()) {
                                                a[c] = p._settledValue;
                                                continue;
                                            }
                                            u = !0, f = p;
                                        }
                                    }
                                    a[c] = f;
                                }
                                return u ? n(a, r, o, void 0).promise() : a;
                            }
                            function s(t, e, s, u, a) {
                                if ("function" != typeof e) return i("fn must be a function");
                                s === !0 && t._isBound() && (e = {
                                    fn: e,
                                    receiver: t._boundTo
                                });
                                var c = n(t, r, u, s === !0 && t._isBound() ? t._boundTo : void 0).promise();
                                return void 0 !== a && (a.ref = c), c._then(o, void 0, void 0, e, void 0, u);
                            }
                            t("./assert.js"), e.prototype.map = function(t, e) {
                                return s(this, t, !0, this.map, e);
                            }, e.map = function(t, n, r) {
                                return s(t, n, !1, e.map, r);
                            };
                        };
                    }, {
                        "./assert.js": 3
                    } ],
                    19: [ function(t, e) {
                        "use strict";
                        e.exports = function(e) {
                            function n(t) {
                                throw t;
                            }
                            function r(t, e) {
                                var r = this, i = u(r, e, null, t);
                                i === c && s.invokeLater(n, void 0, i.e);
                            }
                            function i(t, e) {
                                var r = this, i = a(r, e, t);
                                i === c && s.invokeLater(n, void 0, i.e);
                            }
                            var o = t("./util.js"), s = t("./async.js"), u = (t("./assert.js"), o.tryCatch2), a = o.tryCatch1, c = o.errorObj;
                            e.prototype.nodeify = function(t) {
                                return "function" == typeof t && this._then(r, i, void 0, t, this._isBound() ? this._boundTo : null, this.nodeify), 
                                this;
                            };
                        };
                    }, {
                        "./assert.js": 3,
                        "./async.js": 4,
                        "./util.js": 40
                    } ],
                    20: [ function(t, e) {
                        "use strict";
                        e.exports = function(e, n) {
                            var r = (t("./assert.js"), t("./util.js")), i = t("./async.js"), o = r.tryCatch1, s = r.errorObj;
                            e.prototype.progressed = function(t) {
                                return this._then(void 0, void 0, t, void 0, void 0, this.progressed);
                            }, e.prototype._progress = function(t) {
                                this._isFollowingOrFulfilledOrRejected() || this._progressUnchecked(t);
                            }, e.prototype._progressHandlerAt = function(t) {
                                return 0 === t ? this._progressHandler0 : this[t + 2 - 5];
                            }, e.prototype._doProgressWith = function(t) {
                                var n = t.value, r = t.handler, i = t.promise, u = t.receiver;
                                this._pushContext();
                                var a = o(r, u, n);
                                this._popContext(), a === s ? null != a.e && "StopProgressPropagation" === a.e.name ? a.e.__promiseHandled__ = 2 : (i._attachExtraTrace(a.e), 
                                i._progress(a.e)) : e.is(a) ? a._then(i._progress, null, null, i, void 0, this._progress) : i._progress(a);
                            }, e.prototype._progressUnchecked = function(t) {
                                if (this.isPending()) for (var r = this._length(), o = 0; r > o; o += 5) {
                                    var s = this._progressHandlerAt(o), u = this._promiseAt(o);
                                    if (e.is(u)) "function" == typeof s ? i.invoke(this._doProgressWith, this, {
                                        handler: s,
                                        promise: u,
                                        receiver: this._receiverAt(o),
                                        value: t
                                    }) : i.invoke(u._progress, u, t); else {
                                        var a = this._receiverAt(o);
                                        "function" == typeof s ? s.call(a, t, u) : e.is(a) && a._isProxied() ? a._progressUnchecked(t) : n(a, u) && a._promiseProgressed(t, u);
                                    }
                                }
                            };
                        };
                    }, {
                        "./assert.js": 3,
                        "./async.js": 4,
                        "./util.js": 40
                    } ],
                    21: [ function(t, e) {
                        var n = t("__browserify_process");
                        e.exports = function() {
                            function e(t) {
                                return void 0 === t ? !1 : t instanceof i;
                            }
                            function r(t, e) {
                                return t instanceof d ? e >= 0 : !1;
                            }
                            function i(t) {
                                if ("function" != typeof t) throw new E("the promise constructor requires a resolver function");
                                if (this.constructor !== i) throw new E("the promise constructor cannot be invoked directly");
                                this._bitField = 0, this._fulfillmentHandler0 = void 0, this._rejectionHandler0 = void 0, 
                                this._promise0 = void 0, this._receiver0 = void 0, this._settledValue = void 0, 
                                this._boundTo = void 0, t !== f && this._resolveFromResolver(t);
                            }
                            function o(t, e, n) {
                                return s(t, d, n, e === !0 && t._isBound() ? t._boundTo : void 0).promise();
                            }
                            function s(t, n, r, o) {
                                var u = null;
                                return y(t) ? u = t : (u = i._cast(t, r, void 0), u !== t ? u._setBoundTo(o) : e(u) || (u = null)), 
                                null !== u ? new n(u, "function" == typeof r ? r : s, o) : {
                                    promise: function() {
                                        return V("expecting an array, a promise or a thenable");
                                    }
                                };
                            }
                            var u = t("./global.js"), a = (t("./assert.js"), t("./util.js")), c = t("./async.js"), l = t("./errors.js"), f = function() {}, p = {}, h = {
                                e: null
                            }, d = t("./promise_array.js")(i, f), v = t("./captured_trace.js")(), m = t("./catch_filter.js")(h), g = t("./promise_resolver.js"), y = a.isArray, _ = a.notEnumerableProp, b = a.isObject, w = a.ensurePropertyExpansion, x = a.errorObj, j = a.tryCatch1, S = a.tryCatch2, k = a.tryCatchApply, T = l.RangeError, E = l.TypeError, C = l.CancellationError, A = l.TimeoutError, O = l.RejectionError, P = l.originatesFromRejection, R = l.markAsOriginatingFromRejection, F = l.ensureNotHandled, M = l.withHandledMarked, N = l.withStackAttached, I = l.isStackAttached, q = l.isHandled, D = l.canAttach, H = a.thrower, V = t("./errors_api_rejection")(i), U = function() {
                                return new E("circular promise resolution chain");
                            };
                            i.prototype.bind = function(t) {
                                var e = new i(f);
                                return L && e._setTrace(this.bind, this), e._follow(this), e._setBoundTo(t), this._cancellable() && (e._setCancellable(), 
                                e._cancellationParent = this), e;
                            }, i.prototype.toString = function() {
                                return "[object Promise]";
                            }, i.prototype.caught = i.prototype["catch"] = function(t) {
                                var e = arguments.length;
                                if (e > 1) {
                                    var n, r = new Array(e - 1), i = 0;
                                    for (n = 0; e - 1 > n; ++n) {
                                        var o = arguments[n];
                                        if ("function" != typeof o) {
                                            var s = new E("A catch filter must be an error constructor or a filter function");
                                            return this._attachExtraTrace(s), void c.invoke(this._reject, this, s);
                                        }
                                        r[i++] = o;
                                    }
                                    r.length = i, t = arguments[n], this._resetTrace(this.caught);
                                    var u = new m(r, t, this);
                                    return this._then(void 0, u.doFilter, void 0, u, void 0, this.caught);
                                }
                                return this._then(void 0, t, void 0, void 0, void 0, this.caught);
                            }, i.prototype.then = function(t, e, n) {
                                return this._then(t, e, n, void 0, void 0, this.then);
                            }, i.prototype.done = function(t, e, n) {
                                var r = this._then(t, e, n, void 0, void 0, this.done);
                                r._setIsFinal();
                            }, i.prototype.spread = function(t, e) {
                                return this._then(t, e, void 0, p, void 0, this.spread);
                            }, i.prototype.isFulfilled = function() {
                                return (268435456 & this._bitField) > 0;
                            }, i.prototype.isRejected = function() {
                                return (134217728 & this._bitField) > 0;
                            }, i.prototype.isPending = function() {
                                return !this.isResolved();
                            }, i.prototype.isResolved = function() {
                                return (402653184 & this._bitField) > 0;
                            }, i.prototype.isCancellable = function() {
                                return !this.isResolved() && this._cancellable();
                            }, i.prototype.toJSON = function() {
                                var t = {
                                    isFulfilled: !1,
                                    isRejected: !1,
                                    fulfillmentValue: void 0,
                                    rejectionReason: void 0
                                };
                                return this.isFulfilled() ? (t.fulfillmentValue = this._settledValue, t.isFulfilled = !0) : this.isRejected() && (t.rejectionReason = this._settledValue, 
                                t.isRejected = !0), t;
                            }, i.prototype.all = function() {
                                return o(this, !0, this.all);
                            }, i.is = e, i.all = function(t) {
                                return o(t, !1, i.all);
                            }, i.join = function() {
                                for (var t = arguments.length, e = new Array(t), n = 0; t > n; ++n) e[n] = arguments[n];
                                return s(e, d, i.join, void 0).promise();
                            }, i.resolve = i.fulfilled = function(t, e) {
                                var n = new i(f);
                                return L && n._setTrace("function" == typeof e ? e : i.resolve, void 0), n._tryFollow(t) ? n : (n._cleanValues(), 
                                n._setFulfilled(), n._settledValue = t, n);
                            }, i.reject = i.rejected = function(t) {
                                var e = new i(f);
                                return L && e._setTrace(i.reject, void 0), R(t), e._cleanValues(), e._setRejected(), 
                                e._settledValue = t, e;
                            }, i.prototype.error = function(t) {
                                return this.caught(P, t);
                            }, i.prototype._resolveFromSyncValue = function(t, e) {
                                if (t === x) this._cleanValues(), this._setRejected(), this._settledValue = t.e; else {
                                    var n = i._cast(t, e, void 0);
                                    n instanceof i ? this._follow(n) : (this._cleanValues(), this._setFulfilled(), this._settledValue = t);
                                }
                            }, i.method = function(t) {
                                if ("function" != typeof t) throw new E("fn must be a function");
                                return function e() {
                                    var n;
                                    switch (arguments.length) {
                                      case 0:
                                        n = j(t, this, void 0);
                                        break;

                                      case 1:
                                        n = j(t, this, arguments[0]);
                                        break;

                                      case 2:
                                        n = S(t, this, arguments[0], arguments[1]);
                                        break;

                                      default:
                                        for (var r = arguments.length, o = new Array(r), s = 0; r > s; ++s) o[s] = arguments[s];
                                        n = k(t, o, this);
                                    }
                                    var u = new i(f);
                                    return L && u._setTrace(e, void 0), u._resolveFromSyncValue(n, e), u;
                                };
                            }, i["try"] = i.attempt = function(t, e, n) {
                                if ("function" != typeof t) return V("fn must be a function");
                                var r = y(e) ? k(t, e, n) : j(t, n, e), o = new i(f);
                                return L && o._setTrace(i.attempt, void 0), o._resolveFromSyncValue(r, i.attempt), 
                                o;
                            }, i.defer = i.pending = function(t) {
                                var e = new i(f);
                                return L && e._setTrace("function" == typeof t ? t : i.defer, void 0), new g(e);
                            }, i.bind = function(t) {
                                var e = new i(f);
                                return L && e._setTrace(i.bind, void 0), e._setFulfilled(), e._setBoundTo(t), e;
                            }, i.cast = function(t, e) {
                                "function" != typeof e && (e = i.cast);
                                var n = i._cast(t, e, void 0);
                                return n instanceof i ? n : i.resolve(n, e);
                            }, i.onPossiblyUnhandledRejection = function(t) {
                                v.possiblyUnhandledRejection = "function" == typeof t ? t : void 0;
                            };
                            var L = !1 || !("undefined" == typeof n || "string" != typeof n.execPath || "object" != typeof n.env || !n.env.BLUEBIRD_DEBUG && "development" !== n.env.NODE_ENV);
                            i.longStackTraces = function() {
                                if (c.haveItemsQueued() && L === !1) throw new Error("cannot enable long stack traces after promises have been created");
                                L = v.isSupported();
                            }, i.hasLongStackTraces = function() {
                                return L && v.isSupported();
                            }, i.prototype._setProxyHandlers = function(t, e) {
                                var n = this._length();
                                if (n >= 4194298 && (n = 0, this._setLength(0)), 0 === n) this._promise0 = e, this._receiver0 = t; else {
                                    var r = n - 5;
                                    this[r + 3] = e, this[r + 4] = t, this[r + 0] = this[r + 1] = this[r + 2] = void 0;
                                }
                                this._setLength(n + 5);
                            }, i.prototype._proxyPromiseArray = function(t, e) {
                                this._setProxyHandlers(t, e);
                            }, i.prototype._proxyPromise = function(t) {
                                t._setProxied(), this._setProxyHandlers(t, -1);
                            }, i.prototype._then = function(t, e, n, r, o, s) {
                                var u = void 0 !== o, a = u ? o : new i(f);
                                if (L && !u) {
                                    var l = this._peekContext() === this._traceParent;
                                    a._traceParent = l ? this._traceParent : this, a._setTrace("function" == typeof s ? s : this._then, this);
                                }
                                !u && this._isBound() && a._setBoundTo(this._boundTo);
                                var p = this._addCallbacks(t, e, n, a, r);
                                return !u && this._cancellable() && (a._setCancellable(), a._cancellationParent = this), 
                                this.isResolved() && c.invoke(this._queueSettleAt, this, p), a;
                            }, i.prototype._length = function() {
                                return 4194303 & this._bitField;
                            }, i.prototype._isFollowingOrFulfilledOrRejected = function() {
                                return (939524096 & this._bitField) > 0;
                            }, i.prototype._isFollowing = function() {
                                return 536870912 === (536870912 & this._bitField);
                            }, i.prototype._setLength = function(t) {
                                this._bitField = -4194304 & this._bitField | 4194303 & t;
                            }, i.prototype._cancellable = function() {
                                return (67108864 & this._bitField) > 0;
                            }, i.prototype._setFulfilled = function() {
                                this._bitField = 268435456 | this._bitField;
                            }, i.prototype._setRejected = function() {
                                this._bitField = 134217728 | this._bitField;
                            }, i.prototype._setFollowing = function() {
                                this._bitField = 536870912 | this._bitField;
                            }, i.prototype._setIsFinal = function() {
                                this._bitField = 33554432 | this._bitField;
                            }, i.prototype._isFinal = function() {
                                return (33554432 & this._bitField) > 0;
                            }, i.prototype._setCancellable = function() {
                                this._bitField = 67108864 | this._bitField;
                            }, i.prototype._unsetCancellable = function() {
                                this._bitField = -67108865 & this._bitField;
                            }, i.prototype._receiverAt = function(t) {
                                var e;
                                return e = 0 === t ? this._receiver0 : this[t + 4 - 5], this._isBound() && void 0 === e ? this._boundTo : e;
                            }, i.prototype._promiseAt = function(t) {
                                return 0 === t ? this._promise0 : this[t + 3 - 5];
                            }, i.prototype._fulfillmentHandlerAt = function(t) {
                                return 0 === t ? this._fulfillmentHandler0 : this[t + 0 - 5];
                            }, i.prototype._rejectionHandlerAt = function(t) {
                                return 0 === t ? this._rejectionHandler0 : this[t + 1 - 5];
                            }, i.prototype._unsetAt = function(t) {
                                0 === t ? this._fulfillmentHandler0 = this._rejectionHandler0 = this._progressHandler0 = this._promise0 = this._receiver0 = void 0 : this[t - 5 + 0] = this[t - 5 + 1] = this[t - 5 + 2] = this[t - 5 + 3] = this[t - 5 + 4] = void 0;
                            }, i.prototype._resolveFromResolver = function(t) {
                                function e(t) {
                                    r._tryFollow(t) || r._fulfill(t);
                                }
                                function n(t) {
                                    r._attachExtraTrace(t), R(t), r._reject(t);
                                }
                                var r = this, i = L;
                                i && (this._setTrace(this._resolveFromResolver, void 0), this._pushContext());
                                var o = S(t, void 0, e, n);
                                i && this._popContext(), void 0 !== o && o === x && r._reject(o.e);
                            }, i.prototype._addCallbacks = function(t, e, n, r, i) {
                                var o = this._length();
                                if (o >= 4194298 && (o = 0, this._setLength(0)), 0 === o) this._promise0 = r, void 0 !== i && (this._receiver0 = i), 
                                "function" == typeof t && (this._fulfillmentHandler0 = t), "function" == typeof e && (this._rejectionHandler0 = e), 
                                "function" == typeof n && (this._progressHandler0 = n); else {
                                    var s = o - 5;
                                    this[s + 3] = r, this[s + 4] = i, this[s + 0] = "function" == typeof t ? t : void 0, 
                                    this[s + 1] = "function" == typeof e ? e : void 0, this[s + 2] = "function" == typeof n ? n : void 0;
                                }
                                return this._setLength(o + 5), o;
                            }, i.prototype._setBoundTo = function(t) {
                                void 0 !== t ? (this._bitField = 8388608 | this._bitField, this._boundTo = t) : this._bitField = -8388609 & this._bitField;
                            }, i.prototype._isBound = function() {
                                return 8388608 === (8388608 & this._bitField);
                            }, i.prototype._spreadSlowCase = function(t, e, n, r) {
                                var i = s(n, d, this._spreadSlowCase, r).promise()._then(function() {
                                    return t.apply(r, arguments);
                                }, void 0, void 0, p, void 0, this._spreadSlowCase);
                                e._follow(i);
                            }, i.prototype._markHandled = function(t) {
                                if ("object" == typeof t && null !== t) {
                                    var e = t.__promiseHandled__;
                                    void 0 === e ? _(t, "__promiseHandled__", 2) : t.__promiseHandled__ = M(e);
                                }
                            }, i.prototype._callSpread = function(t, n, r, o) {
                                var s = this._isBound() ? this._boundTo : void 0;
                                if (y(r)) for (var u = this._settlePromiseFromHandler, a = 0, c = r.length; c > a; ++a) if (e(i._cast(r[a], u, void 0))) return void this._spreadSlowCase(t, n, r, s);
                                return o && n._pushContext(), k(t, r, s);
                            }, i.prototype._callHandler = function(t, e, n, r, i) {
                                var o;
                                return e !== p || this.isRejected() ? (i && n._pushContext(), o = j(t, e, r)) : o = this._callSpread(t, n, r, i), 
                                i && n._popContext(), o;
                            }, i.prototype._settlePromiseFromHandler = function(t, n, r, o) {
                                if (!e(o)) return void t.call(n, r, o);
                                this.isRejected() && this._markHandled(r);
                                var s = L, u = this._callHandler(t, n, o, r, s);
                                if (!o._isFollowing()) if (u === x || u === o || u === h) {
                                    var a = u === o ? U() : F(u.e);
                                    u !== h && o._attachExtraTrace(a), o._rejectUnchecked(a);
                                } else {
                                    var c = i._cast(u, s ? this._settlePromiseFromHandler : void 0, o);
                                    e(c) ? (o._follow(c), c._cancellable() && (o._cancellationParent = c, o._setCancellable())) : o._fulfillUnchecked(u);
                                }
                            }, i.prototype._follow = function(t) {
                                this._setFollowing(), t.isPending() ? (t._cancellable() && (this._cancellationParent = t, 
                                this._setCancellable()), t._proxyPromise(this)) : t.isFulfilled() ? this._fulfillUnchecked(t._settledValue) : this._rejectUnchecked(t._settledValue), 
                                L && null == t._traceParent && (t._traceParent = this);
                            }, i.prototype._tryFollow = function(t) {
                                if (this._isFollowingOrFulfilledOrRejected() || t === this) return !1;
                                var n = i._cast(t, this._tryFollow, void 0);
                                return e(n) ? (this._follow(n), !0) : !1;
                            }, i.prototype._resetTrace = function(t) {
                                if (L) {
                                    var e = this._peekContext(), n = void 0 === e;
                                    this._trace = new v("function" == typeof t ? t : this._resetTrace, n);
                                }
                            }, i.prototype._setTrace = function(t, e) {
                                if (L) {
                                    var n = this._peekContext();
                                    this._traceParent = n;
                                    var r = void 0 === n;
                                    this._trace = void 0 !== e && e._traceParent === n ? e._trace : new v("function" == typeof t ? t : this._setTrace, r);
                                }
                                return this;
                            }, i.prototype._attachExtraTrace = function(t) {
                                if (L && D(t)) {
                                    var e = this, n = t.stack;
                                    n = "string" == typeof n ? n.split("\n") : [];
                                    for (var r = 1; null != e && null != e._trace; ) n = v.combine(n, e._trace.stack.split("\n")), 
                                    e = e._traceParent;
                                    var i = Error.stackTraceLimit + r, o = n.length;
                                    o > i && (n.length = i), t.stack = n.length <= r ? "(No stack trace)" : n.join("\n"), 
                                    t.__promiseHandled__ = N(t.__promiseHandled__);
                                }
                            }, i.prototype._notifyUnhandledRejection = function(t) {
                                q(t.__promiseHandled__) || (t.__promiseHandled__ = M(t.__promiseHandled__), v.possiblyUnhandledRejection(t, this));
                            }, i.prototype._unhandledRejection = function(t) {
                                q(t.__promiseHandled__) || c.invokeLater(this._notifyUnhandledRejection, this, t);
                            }, i.prototype._cleanValues = function() {
                                this._cancellable() && (this._cancellationParent = void 0);
                            }, i.prototype._fulfill = function(t) {
                                this._isFollowingOrFulfilledOrRejected() || this._fulfillUnchecked(t);
                            }, i.prototype._reject = function(t) {
                                this._isFollowingOrFulfilledOrRejected() || this._rejectUnchecked(t);
                            }, i.prototype._settlePromiseAt = function(t) {
                                var e = this.isFulfilled() ? this._fulfillmentHandlerAt(t) : this._rejectionHandlerAt(t), n = this._settledValue, o = this._receiverAt(t), s = this._promiseAt(t);
                                if ("function" == typeof e) this._settlePromiseFromHandler(e, o, n, s); else {
                                    var u = !1, a = this.isFulfilled();
                                    void 0 !== o && (o instanceof i && o._isProxied() ? (o._unsetProxied(), a ? o._fulfillUnchecked(n) : o._rejectUnchecked(n), 
                                    u = !0) : r(o, s) && (a ? o._promiseFulfilled(n, s) : o._promiseRejected(n, s), 
                                    u = !0)), u || (a ? s._fulfill(n) : s._reject(n));
                                }
                                t >= 256 && this._queueGC();
                            }, i.prototype._isProxied = function() {
                                return 4194304 === (4194304 & this._bitField);
                            }, i.prototype._setProxied = function() {
                                this._bitField = 4194304 | this._bitField;
                            }, i.prototype._unsetProxied = function() {
                                this._bitField = -4194305 & this._bitField;
                            }, i.prototype._isGcQueued = function() {
                                return -1073741824 === (-1073741824 & this._bitField);
                            }, i.prototype._setGcQueued = function() {
                                this._bitField = -1073741824 | this._bitField;
                            }, i.prototype._unsetGcQueued = function() {
                                this._bitField = 1073741823 & this._bitField;
                            }, i.prototype._queueGC = function() {
                                this._isGcQueued() || (this._setGcQueued(), c.invokeLater(this._gc, this, void 0));
                            }, i.prototype._gc = function() {
                                var t = this._length();
                                this._unsetAt(0);
                                for (var e = 0; t > e; e++) delete this[e];
                                this._setLength(0), this._unsetGcQueued();
                            }, i.prototype._queueSettleAt = function(t) {
                                c.invoke(this._settlePromiseAt, this, t);
                            }, i.prototype._fulfillUnchecked = function(t) {
                                if (this.isPending()) {
                                    if (t === this) {
                                        var e = U();
                                        return this._attachExtraTrace(e), this._rejectUnchecked(e);
                                    }
                                    this._cleanValues(), this._setFulfilled(), this._settledValue = t;
                                    var n = this._length();
                                    n > 0 && c.invoke(this._fulfillPromises, this, n);
                                }
                            }, i.prototype._fulfillPromises = function(t) {
                                t = this._length();
                                for (var e = 0; t > e; e += 5) this._settlePromiseAt(e);
                            }, i.prototype._rejectUnchecked = function(t) {
                                if (this.isPending()) {
                                    if (t === this) {
                                        var e = U();
                                        return this._attachExtraTrace(e), this._rejectUnchecked(e);
                                    }
                                    if (this._cleanValues(), this._setRejected(), this._settledValue = t, this._isFinal()) return void c.invokeLater(H, void 0, t);
                                    var n = this._length();
                                    n > 0 ? c.invoke(this._rejectPromises, this, n) : this._ensurePossibleRejectionHandled(t);
                                }
                            }, i.prototype._rejectPromises = function(t) {
                                t = this._length();
                                for (var n = !1, i = 0; t > i; i += 5) {
                                    var o = this._rejectionHandlerAt(i);
                                    if (!n) if ("function" == typeof o) n = !0; else {
                                        var s = this._promiseAt(i);
                                        if (e(s) && s._length() > 0) n = !0; else {
                                            var u = this._receiverAt(i);
                                            (e(u) && u._length() > 0 || r(u, s)) && (n = !0);
                                        }
                                    }
                                    this._settlePromiseAt(i);
                                }
                                n || this._ensurePossibleRejectionHandled(this._settledValue);
                            }, i.prototype._ensurePossibleRejectionHandled = function(t) {
                                if (void 0 !== v.possiblyUnhandledRejection && b(t)) {
                                    var e = t.__promiseHandled__, n = t;
                                    if (void 0 === e) n = w(t, "__promiseHandled__", 0), e = 0; else if (q(e)) return;
                                    I(e) || this._attachExtraTrace(n), c.invoke(this._unhandledRejection, this, n);
                                }
                            };
                            var z = [];
                            i.prototype._peekContext = function() {
                                var t = z.length - 1;
                                return t >= 0 ? z[t] : void 0;
                            }, i.prototype._pushContext = function() {
                                L && z.push(this);
                            }, i.prototype._popContext = function() {
                                L && z.pop();
                            };
                            var B = u.Promise;
                            return i.noConflict = function() {
                                return u.Promise === i && (u.Promise = B), i;
                            }, v.isSupported() || (i.longStackTraces = function() {}, L = !1), i._makeSelfResolutionError = U, 
                            t("./finally.js")(i, h), t("./direct_resolve.js")(i), t("./thenables.js")(i), i.RangeError = T, 
                            i.CancellationError = C, i.TimeoutError = A, i.TypeError = E, i.RejectionError = O, 
                            t("./timers.js")(i, f), t("./synchronous_inspection.js")(i), t("./any.js")(i, s, d), 
                            t("./race.js")(i, f), t("./call_get.js")(i), t("./filter.js")(i, s, d, V), t("./generators.js")(i, V, f), 
                            t("./map.js")(i, s, d, V), t("./nodeify.js")(i), t("./promisify.js")(i, f), t("./props.js")(i, d), 
                            t("./reduce.js")(i, s, d, V), t("./settle.js")(i, s, d), t("./some.js")(i, s, d, V), 
                            t("./progress.js")(i, r), t("./cancel.js")(i, f), i.prototype = i.prototype, i;
                        };
                    }, {
                        "./any.js": 2,
                        "./assert.js": 3,
                        "./async.js": 4,
                        "./call_get.js": 6,
                        "./cancel.js": 7,
                        "./captured_trace.js": 8,
                        "./catch_filter.js": 9,
                        "./direct_resolve.js": 10,
                        "./errors.js": 11,
                        "./errors_api_rejection": 12,
                        "./filter.js": 14,
                        "./finally.js": 15,
                        "./generators.js": 16,
                        "./global.js": 17,
                        "./map.js": 18,
                        "./nodeify.js": 19,
                        "./progress.js": 20,
                        "./promise_array.js": 22,
                        "./promise_resolver.js": 24,
                        "./promisify.js": 26,
                        "./props.js": 28,
                        "./race.js": 30,
                        "./reduce.js": 31,
                        "./settle.js": 33,
                        "./some.js": 35,
                        "./synchronous_inspection.js": 37,
                        "./thenables.js": 38,
                        "./timers.js": 39,
                        "./util.js": 40,
                        __browserify_process: 76
                    } ],
                    22: [ function(t, e) {
                        "use strict";
                        e.exports = function(e, n) {
                            function r(t) {
                                switch (t) {
                                  case -1:
                                    return void 0;

                                  case -2:
                                    return [];

                                  case -3:
                                    return {};
                                }
                            }
                            function i(t, r, i) {
                                var o = this._promise = new e(n), s = void 0;
                                e.is(t) && (s = t, t._cancellable() && (o._setCancellable(), o._cancellationParent = t), 
                                t._isBound() && o._setBoundTo(i)), o._setTrace(r, s), this._values = t, this._length = 0, 
                                this._totalResolved = 0, this._init(void 0, -2);
                            }
                            var o = (t("./assert.js"), t("./errors.js").ensureNotHandled), s = t("./util.js"), u = t("./async.js"), a = {}.hasOwnProperty, c = s.isArray;
                            return i.PropertiesPromiseArray = function() {}, i.prototype.length = function() {
                                return this._length;
                            }, i.prototype.promise = function() {
                                return this._promise;
                            }, i.prototype._init = function(t, n) {
                                var o = this._values;
                                if (e.is(o)) {
                                    if (!o.isFulfilled()) return o.isPending() ? void o._then(this._init, this._reject, void 0, this, n, this.constructor) : void this._reject(o._settledValue);
                                    if (o = o._settledValue, !c(o)) {
                                        var s = new e.TypeError("expecting an array, a promise or a thenable");
                                        return void this.__hardReject__(s);
                                    }
                                    this._values = o;
                                }
                                if (0 === o.length) return void this._resolve(r(n));
                                var l, f = o.length, p = f;
                                l = this instanceof i.PropertiesPromiseArray ? this._values : new Array(f);
                                for (var h = !1, d = 0; f > d; ++d) {
                                    var v = o[d];
                                    if (void 0 !== v || a.call(o, d)) {
                                        var m = e._cast(v, void 0, void 0);
                                        m instanceof e && m.isPending() ? m._proxyPromiseArray(this, d) : h = !0, l[d] = m;
                                    } else p--;
                                }
                                if (0 === p) return void this._resolve(-2 === n ? l : r(n));
                                if (this._values = l, this._length = p, h) {
                                    var g = p === f ? this._scanDirectValues : this._scanDirectValuesHoled;
                                    u.invoke(g, this, f);
                                }
                            }, i.prototype._settlePromiseAt = function(t) {
                                var n = this._values[t];
                                e.is(n) ? n.isFulfilled() ? this._promiseFulfilled(n._settledValue, t) : n.isRejected() && this._promiseRejected(n._settledValue, t) : this._promiseFulfilled(n, t);
                            }, i.prototype._scanDirectValuesHoled = function(t) {
                                for (var e = 0; t > e && !this._isResolved(); ++e) a.call(this._values, e) && this._settlePromiseAt(e);
                            }, i.prototype._scanDirectValues = function(t) {
                                for (var e = 0; t > e && !this._isResolved(); ++e) this._settlePromiseAt(e);
                            }, i.prototype._isResolved = function() {
                                return null === this._values;
                            }, i.prototype._resolve = function(t) {
                                this._values = null, this._promise._fulfill(t);
                            }, i.prototype.__hardReject__ = i.prototype._reject = function(t) {
                                o(t), this._values = null, this._promise._attachExtraTrace(t), this._promise._reject(t);
                            }, i.prototype._promiseProgressed = function(t, e) {
                                this._isResolved() || this._promise._progress({
                                    index: e,
                                    value: t
                                });
                            }, i.prototype._promiseFulfilled = function(t, e) {
                                if (!this._isResolved()) {
                                    this._values[e] = t;
                                    var n = ++this._totalResolved;
                                    n >= this._length && this._resolve(this._values);
                                }
                            }, i.prototype._promiseRejected = function(t) {
                                this._isResolved() || (this._totalResolved++, this._reject(t));
                            }, i;
                        };
                    }, {
                        "./assert.js": 3,
                        "./async.js": 4,
                        "./errors.js": 11,
                        "./util.js": 40
                    } ],
                    23: [ function(t, e) {
                        "use strict";
                        function n(t) {
                            void 0 !== t ? (this._bitField = t._bitField, this._settledValue = t.isResolved() ? t._settledValue : void 0) : (this._bitField = 0, 
                            this._settledValue = void 0);
                        }
                        var r = t("./errors.js").TypeError;
                        n.prototype.isFulfilled = function() {
                            return (268435456 & this._bitField) > 0;
                        }, n.prototype.isRejected = function() {
                            return (134217728 & this._bitField) > 0;
                        }, n.prototype.isPending = function() {
                            return 0 === (402653184 & this._bitField);
                        }, n.prototype.value = function() {
                            if (!this.isFulfilled()) throw new r("cannot get fulfillment value of a non-fulfilled promise");
                            return this._settledValue;
                        }, n.prototype.error = function() {
                            if (!this.isRejected()) throw new r("cannot get rejection reason of a non-rejected promise");
                            return this._settledValue;
                        }, e.exports = n;
                    }, {
                        "./errors.js": 11
                    } ],
                    24: [ function(t, e) {
                        "use strict";
                        function n(t) {
                            return t instanceof Error && h.getPrototypeOf(t) === Error.prototype;
                        }
                        function r(t) {
                            var e;
                            return e = n(t) ? new l(t) : t, a.markAsOriginatingFromRejection(e), e;
                        }
                        function i(t) {
                            function e(e, n) {
                                if (e) {
                                    var i = r(u(e));
                                    t._attachExtraTrace(i), t._reject(i);
                                } else if (arguments.length > 2) {
                                    for (var o = arguments.length, s = new Array(o - 1), a = 1; o > a; ++a) s[a - 1] = arguments[a];
                                    t._fulfill(s);
                                } else t._fulfill(n);
                            }
                            return e;
                        }
                        var o, s = t("./util.js"), u = s.maybeWrapAsError, a = t("./errors.js"), c = a.TimeoutError, l = a.RejectionError, f = t("./async.js"), p = s.haveGetters, h = t("./es5.js");
                        if (o = p ? function(t) {
                            this.promise = t;
                        } : function(t) {
                            this.promise = t, this.asCallback = i(t), this.callback = this.asCallback;
                        }, p) {
                            var d = {
                                get: function() {
                                    return i(this.promise);
                                }
                            };
                            h.defineProperty(o.prototype, "asCallback", d), h.defineProperty(o.prototype, "callback", d);
                        }
                        o._nodebackForPromise = i, o.prototype.toString = function() {
                            return "[object PromiseResolver]";
                        }, o.prototype.resolve = o.prototype.fulfill = function(t) {
                            var e = this.promise;
                            e._tryFollow(t) || f.invoke(e._fulfill, e, t);
                        }, o.prototype.reject = function(t) {
                            var e = this.promise;
                            a.markAsOriginatingFromRejection(t), e._attachExtraTrace(t), f.invoke(e._reject, e, t);
                        }, o.prototype.progress = function(t) {
                            f.invoke(this.promise._progress, this.promise, t);
                        }, o.prototype.cancel = function() {
                            f.invoke(this.promise.cancel, this.promise, void 0);
                        }, o.prototype.timeout = function() {
                            this.reject(new c("timeout"));
                        }, o.prototype.isResolved = function() {
                            return this.promise.isResolved();
                        }, o.prototype.toJSON = function() {
                            return this.promise.toJSON();
                        }, e.exports = o;
                    }, {
                        "./async.js": 4,
                        "./errors.js": 11,
                        "./es5.js": 13,
                        "./util.js": 40
                    } ],
                    25: [ function(t, e) {
                        "use strict";
                        e.exports = function(e, n) {
                            function r(t, r, i) {
                                var o = this._promise = new e(n);
                                o._setTrace(i, void 0), this._generatorFunction = t, this._receiver = r, this._generator = void 0;
                            }
                            var i = t("./errors.js"), o = i.TypeError, s = i.ensureNotHandled, u = t("./util.js"), a = u.isArray, c = u.errorObj, l = u.tryCatch1;
                            return r.prototype.promise = function() {
                                return this._promise;
                            }, r.prototype._run = function() {
                                this._generator = this._generatorFunction.call(this._receiver), this._receiver = this._generatorFunction = void 0, 
                                this._next(void 0);
                            }, r.prototype._continue = function f(t) {
                                if (t === c) return this._generator = void 0, this._promise._attachExtraTrace(t.e), 
                                void this._promise._reject(t.e);
                                var n = t.value;
                                if (t.done === !0) this._generator = void 0, this._promise._fulfill(n); else {
                                    var r = e._cast(n, f, void 0);
                                    if (!(r instanceof e)) {
                                        if (!a(r)) return void this._throw(new o("A value was yielded that could not be treated as a promise"));
                                        r = e.all(r);
                                    }
                                    r._then(this._next, this._throw, void 0, this, null, void 0);
                                }
                            }, r.prototype._throw = function(t) {
                                s(t), this._promise._attachExtraTrace(t), this._continue(l(this._generator["throw"], this._generator, t));
                            }, r.prototype._next = function(t) {
                                this._continue(l(this._generator.next, this._generator, t));
                            }, r;
                        };
                    }, {
                        "./errors.js": 11,
                        "./util.js": 40
                    } ],
                    26: [ function(t, e) {
                        "use strict";
                        e.exports = function(e, n) {
                            function r(t) {
                                return t.__isPromisified__ === !0;
                            }
                            function i(t, r, i) {
                                function o(e) {
                                    for (var n = new Array(e), i = 0, o = n.length; o > i; ++i) n[i] = "a" + (i + 1);
                                    var s = e > 0 ? "," : "";
                                    return "string" == typeof t && r === a ? "this['" + t + "'](" + n.join(",") + s + " fn);break;" : (void 0 === r ? "callback(" + n.join(",") + s + " fn);" : "callback.call(" + (r === a ? "this" : "receiver") + ", " + n.join(",") + s + " fn);") + "break;";
                                }
                                function s() {
                                    return "var args = new Array(len + 1);var i = 0;for (var i = 0; i < len; ++i) {    args[i] = arguments[i];}args[i] = fn;";
                                }
                                var u = "string" == typeof i ? i + "Async" : "promisified";
                                return new Function("Promise", "callback", "receiver", "withAppended", "maybeWrapAsError", "nodebackForPromise", "INTERNAL", "var ret = function " + u + '(a1, a2, a3, a4, a5) {"use strict";var len = arguments.length;var promise = new Promise(INTERNAL);promise._setTrace(' + u + ", void 0);var fn = nodebackForPromise(promise);try{switch(len) {case 1:" + o(1) + "case 2:" + o(2) + "case 3:" + o(3) + "case 0:" + o(0) + "case 4:" + o(4) + "case 5:" + o(5) + "default: " + s() + ("string" == typeof t ? "this['" + t + "'].apply(" : "callback.apply(") + (r === a ? "this" : "receiver") + ", args); break;}}catch(e){ var wrapped = maybeWrapAsError(e);promise._attachExtraTrace(wrapped);promise._reject(wrapped);}return promise;}; ret.__isPromisified__ = true; return ret;")(e, t, r, p, h, f, n);
                            }
                            function o(t, r) {
                                function i() {
                                    var o = r;
                                    r === a && (o = this), "string" == typeof t && (t = o[t]);
                                    var s = new e(n);
                                    s._setTrace(i, void 0);
                                    var u = f(s);
                                    try {
                                        t.apply(o, p(arguments, u));
                                    } catch (c) {
                                        var l = h(c);
                                        s._attachExtraTrace(l), s._reject(l);
                                    }
                                    return s;
                                }
                                return i.__isPromisified__ = !0, i;
                            }
                            function s() {}
                            function u(t, e, n) {
                                if (n) {
                                    for (var r = _(t), i = 0, o = r.length; o > i; i += 2) {
                                        var u = r[i], c = r[i + 1], l = u + "__beforePromisified__", f = u + "Async";
                                        v(t, l, c), t[f] = b(l, a, u);
                                    }
                                    return r.length > 16 && (s.prototype = t), t;
                                }
                                return b(t, e, void 0);
                            }
                            var a = {}, c = t("./util.js"), l = t("./es5.js"), f = t("./promise_resolver.js")._nodebackForPromise, p = c.withAppended, h = c.maybeWrapAsError, d = c.canEvaluate, v = c.notEnumerableProp, m = c.deprecated, g = (t("./assert.js"), 
                            new RegExp("__beforePromisified__$")), y = {}.hasOwnProperty, _ = function() {
                                if (l.isES5) {
                                    var t = Object.create, e = Object.getOwnPropertyDescriptor;
                                    return function(n) {
                                        for (var i = n, o = [], s = t(null); null !== n; ) {
                                            for (var u = l.keys(n), a = 0, c = u.length; c > a; ++a) {
                                                var f = u[a];
                                                if (!(s[f] || g.test(f) || y.call(i, f + "__beforePromisified__"))) {
                                                    s[f] = !0;
                                                    var p = e(n, f);
                                                    null == p || "function" != typeof p.value || r(p.value) || o.push(f, p.value);
                                                }
                                            }
                                            n = l.getPrototypeOf(n);
                                        }
                                        return o;
                                    };
                                }
                                return function(t) {
                                    var e = [];
                                    for (var n in t) if (!g.test(n) && !y.call(t, n + "__beforePromisified__")) {
                                        var i = t[n];
                                        "function" != typeof i || r(i) || e.push(n, i);
                                    }
                                    return e;
                                };
                            }(), b = d ? i : o;
                            e.promisify = function(t, e) {
                                if ("object" == typeof t && null !== t) return m("Promise.promisify for promisifying entire objects is deprecated. Use Promise.promisifyAll instead."), 
                                u(t, e, !0);
                                if ("function" != typeof t) throw new TypeError("fn must be a function");
                                return r(t) ? t : u(t, arguments.length < 2 ? a : e, !1);
                            }, e.promisifyAll = function(t) {
                                if ("function" != typeof t && "object" != typeof t) throw new TypeError("the target of promisifyAll must be an object or a function");
                                return u(t, void 0, !0);
                            };
                        };
                    }, {
                        "./assert.js": 3,
                        "./es5.js": 13,
                        "./promise_resolver.js": 24,
                        "./util.js": 40
                    } ],
                    27: [ function(t, e) {
                        "use strict";
                        e.exports = function(e, n) {
                            function r(t, e, n) {
                                for (var r = s.keys(t), i = new Array(r.length), o = 0, u = i.length; u > o; ++o) i[o] = t[r[o]];
                                if (this.constructor$(i, e, n), !this._isResolved()) for (var o = 0, u = r.length; u > o; ++o) i.push(r[o]);
                            }
                            var i = (t("./assert.js"), t("./util.js")), o = i.inherits, s = t("./es5.js");
                            return o(r, n), r.prototype._init = function() {
                                this._init$(void 0, -3);
                            }, r.prototype._promiseFulfilled = function(t, e) {
                                if (!this._isResolved()) {
                                    this._values[e] = t;
                                    var n = ++this._totalResolved;
                                    if (n >= this._length) {
                                        for (var r = {}, i = this.length(), o = 0, s = this.length(); s > o; ++o) r[this._values[o + i]] = this._values[o];
                                        this._resolve(r);
                                    }
                                }
                            }, r.prototype._promiseProgressed = function(t, e) {
                                this._isResolved() || this._promise._progress({
                                    key: this._values[e + this.length()],
                                    value: t
                                });
                            }, n.PropertiesPromiseArray = r, r;
                        };
                    }, {
                        "./assert.js": 3,
                        "./es5.js": 13,
                        "./util.js": 40
                    } ],
                    28: [ function(t, e) {
                        "use strict";
                        e.exports = function(e, n) {
                            function r(t, n, r) {
                                var o, a = e._cast(t, r, void 0);
                                return u(a) ? (e.is(a) ? o = a._then(e.props, void 0, void 0, void 0, void 0, r) : (o = new i(a, r, n === !0 && a._isBound() ? a._boundTo : void 0).promise(), 
                                n = !1), n === !0 && a._isBound() && o._setBoundTo(a._boundTo), o) : s("cannot await properties of a non-object");
                            }
                            var i = t("./properties_promise_array.js")(e, n), o = t("./util.js"), s = t("./errors_api_rejection")(e), u = o.isObject;
                            e.prototype.props = function() {
                                return r(this, !0, this.props);
                            }, e.props = function(t) {
                                return r(t, !1, e.props);
                            };
                        };
                    }, {
                        "./errors_api_rejection": 12,
                        "./properties_promise_array.js": 27,
                        "./util.js": 40
                    } ],
                    29: [ function(t, e) {
                        "use strict";
                        function n(t, e, n, r, i) {
                            for (var o = 0; i > o; ++o) n[o + r] = t[o + e];
                        }
                        function r(t) {
                            return t >>>= 0, t -= 1, t |= t >> 1, t |= t >> 2, t |= t >> 4, t |= t >> 8, t |= t >> 16, 
                            t + 1;
                        }
                        function i(t) {
                            return "number" != typeof t ? 16 : r(Math.min(Math.max(16, t), 1073741824));
                        }
                        function o(t) {
                            this._capacity = i(t), this._length = 0, this._front = 0, this._makeCapacity();
                        }
                        t("./assert.js"), o.prototype._willBeOverCapacity = function(t) {
                            return this._capacity < t;
                        }, o.prototype._pushOne = function(t) {
                            var e = this.length();
                            this._checkCapacity(e + 1);
                            var n = this._front + e & this._capacity - 1;
                            this[n] = t, this._length = e + 1;
                        }, o.prototype.push = function(t, e, n) {
                            var r = this.length() + 3;
                            if (this._willBeOverCapacity(r)) return this._pushOne(t), this._pushOne(e), void this._pushOne(n);
                            var i = this._front + r - 3;
                            this._checkCapacity(r);
                            var o = this._capacity - 1;
                            this[i + 0 & o] = t, this[i + 1 & o] = e, this[i + 2 & o] = n, this._length = r;
                        }, o.prototype.shift = function() {
                            var t = this._front, e = this[t];
                            return this[t] = void 0, this._front = t + 1 & this._capacity - 1, this._length--, 
                            e;
                        }, o.prototype.length = function() {
                            return this._length;
                        }, o.prototype._makeCapacity = function() {
                            for (var t = this._capacity, e = 0; t > e; ++e) this[e] = void 0;
                        }, o.prototype._checkCapacity = function(t) {
                            this._capacity < t && this._resizeTo(this._capacity << 3);
                        }, o.prototype._resizeTo = function(t) {
                            var e = this._front, r = this._capacity, i = new Array(r), o = this.length();
                            if (n(this, 0, i, 0, r), this._capacity = t, this._makeCapacity(), this._front = 0, 
                            r >= e + o) n(i, e, this, 0, o); else {
                                var s = o - (e + o & r - 1);
                                n(i, e, this, 0, s), n(i, 0, this, s, o - s);
                            }
                        }, e.exports = o;
                    }, {
                        "./assert.js": 3
                    } ],
                    30: [ function(t, e) {
                        "use strict";
                        e.exports = function(e, n) {
                            function r(t, r, a) {
                                var c = e._cast(t, r, void 0);
                                if (e.is(c)) return s(c);
                                if (!o(t)) return i("expecting an array, a promise or a thenable");
                                var l = new e(n);
                                l._setTrace(r, a), void 0 !== a && (a._isBound() && l._setBoundTo(a._boundTo), a._cancellable() && (l._setCancellable(), 
                                l._cancellationParent = a));
                                for (var f = l._fulfill, p = l._reject, h = 0, d = t.length; d > h; ++h) {
                                    var v = t[h];
                                    (void 0 !== v || u.call(t, h)) && e.cast(v)._then(f, p, void 0, l, null, r);
                                }
                                return l;
                            }
                            var i = t("./errors_api_rejection.js")(e), o = t("./util.js").isArray, s = function(t) {
                                return t.then(function e(n) {
                                    return r(n, e, t);
                                });
                            }, u = {}.hasOwnProperty;
                            e.race = function(t) {
                                return r(t, e.race, void 0);
                            }, e.prototype.race = function() {
                                return r(this, this.race, void 0);
                            };
                        };
                    }, {
                        "./errors_api_rejection.js": 12,
                        "./util.js": 40
                    } ],
                    31: [ function(t, e) {
                        "use strict";
                        e.exports = function(e, n, r, i) {
                            function o(t, e) {
                                var n = this, r = void 0;
                                "function" != typeof n && (r = n.receiver, n = n.fn);
                                var i = t.length, o = void 0, s = 0;
                                if (void 0 !== e) o = e, s = 0; else if (s = 1, i > 0) for (var u = 0; i > u; ++u) if (void 0 !== t[u] || u in t) {
                                    o = t[u], s = u + 1;
                                    break;
                                }
                                if (void 0 === r) for (var u = s; i > u; ++u) (void 0 !== t[u] || u in t) && (o = n(o, t[u], u, i)); else for (var u = s; i > u; ++u) (void 0 !== t[u] || u in t) && (o = n.call(r, o, t[u], u, i));
                                return o;
                            }
                            function s(t) {
                                var e = this.fn, n = this.initialValue;
                                return o.call(e, t, n);
                            }
                            function u(t, e, n, r, i) {
                                return n._then(function o(n) {
                                    return a(t, e, n, r, o);
                                }, void 0, void 0, void 0, void 0, i);
                            }
                            function a(t, a, c, l, f) {
                                if ("function" != typeof a) return i("fn must be a function");
                                if (l === !0 && t._isBound() && (a = {
                                    fn: a,
                                    receiver: t._boundTo
                                }), void 0 !== c) {
                                    if (e.is(c)) {
                                        if (!c.isFulfilled()) return u(t, a, c, l, f);
                                        c = c._settledValue;
                                    }
                                    return n(t, r, f, l === !0 && t._isBound() ? t._boundTo : void 0).promise()._then(s, void 0, void 0, {
                                        fn: a,
                                        initialValue: c
                                    }, void 0, e.reduce);
                                }
                                return n(t, r, f, l === !0 && t._isBound() ? t._boundTo : void 0).promise()._then(o, void 0, void 0, a, void 0, f);
                            }
                            t("./assert.js"), e.reduce = function(t, n, r) {
                                return a(t, n, r, !1, e.reduce);
                            }, e.prototype.reduce = function(t, e) {
                                return a(this, t, e, !0, this.reduce);
                            };
                        };
                    }, {
                        "./assert.js": 3
                    } ],
                    32: [ function(t, e) {
                        var n, r = t("__browserify_process"), i = t("./global.js");
                        if (t("./assert.js"), "undefined" != typeof r && null !== r && "function" == typeof r.cwd && "function" == typeof r.nextTick) n = r.nextTick; else if ("function" != typeof MutationObserver && "function" != typeof WebkitMutationObserver && "function" != typeof WebKitMutationObserver || "undefined" == typeof document || "function" != typeof document.createElement) if ("function" == typeof i.postMessage && "function" != typeof i.importScripts && "function" == typeof i.addEventListener && "function" == typeof i.removeEventListener) {
                            var o = "bluebird_message_key_" + Math.random();
                            n = function() {
                                function t(t) {
                                    if (t.source === i && t.data === o) {
                                        var n = e;
                                        e = void 0, n();
                                    }
                                }
                                var e = void 0;
                                return i.addEventListener("message", t, !1), function(t) {
                                    e = t, i.postMessage(o, "*");
                                };
                            }();
                        } else n = "function" == typeof MessageChannel ? function() {
                            var t = void 0, e = new MessageChannel();
                            return e.port1.onmessage = function() {
                                var e = t;
                                t = void 0, e();
                            }, function(n) {
                                t = n, e.port2.postMessage(null);
                            };
                        }() : i.setTimeout ? function(t) {
                            setTimeout(t, 4);
                        } : function(t) {
                            t();
                        }; else n = function() {
                            var t = i.MutationObserver || i.WebkitMutationObserver || i.WebKitMutationObserver, e = document.createElement("div"), n = void 0, r = new t(function() {
                                var t = n;
                                n = void 0, t();
                            });
                            return r.observe(e, {
                                attributes: !0
                            }), function(t) {
                                n = t, e.setAttribute("class", "foo");
                            };
                        }();
                        e.exports = n;
                    }, {
                        "./assert.js": 3,
                        "./global.js": 17,
                        __browserify_process: 76
                    } ],
                    33: [ function(t, e) {
                        "use strict";
                        e.exports = function(e, n, r) {
                            function i(t, e, r) {
                                return n(t, o, r, e === !0 && t._isBound() ? t._boundTo : void 0).promise();
                            }
                            var o = t("./settled_promise_array.js")(e, r);
                            e.settle = function(t) {
                                return i(t, !1, e.settle);
                            }, e.prototype.settle = function() {
                                return i(this, !0, this.settle);
                            };
                        };
                    }, {
                        "./settled_promise_array.js": 34
                    } ],
                    34: [ function(t, e) {
                        "use strict";
                        e.exports = function(e, n) {
                            function r(t, e, n) {
                                this.constructor$(t, e, n);
                            }
                            var i = (t("./assert.js"), t("./promise_inspection.js")), o = t("./util.js"), s = o.inherits;
                            return s(r, n), r.prototype._promiseResolved = function(t, e) {
                                this._values[t] = e;
                                var n = ++this._totalResolved;
                                n >= this._length && this._resolve(this._values);
                            }, r.prototype._promiseFulfilled = function(t, e) {
                                if (!this._isResolved()) {
                                    var n = new i();
                                    n._bitField = 268435456, n._settledValue = t, this._promiseResolved(e, n);
                                }
                            }, r.prototype._promiseRejected = function(t, e) {
                                if (!this._isResolved()) {
                                    var n = new i();
                                    n._bitField = 134217728, n._settledValue = t, this._promiseResolved(e, n);
                                }
                            }, r;
                        };
                    }, {
                        "./assert.js": 3,
                        "./promise_inspection.js": 23,
                        "./util.js": 40
                    } ],
                    35: [ function(t, e) {
                        "use strict";
                        e.exports = function(e, n, r, i) {
                            function o(t, e, r, o) {
                                if ((0 | e) !== e || 0 > e) return i("expecting a positive integer");
                                var u = n(t, s, o, r === !0 && t._isBound() ? t._boundTo : void 0), a = u.promise();
                                return a.isRejected() ? a : (u.setHowMany(e), u.init(), a);
                            }
                            var s = t("./some_promise_array.js")(r);
                            t("./assert.js"), e.some = function(t, n) {
                                return o(t, n, !1, e.some);
                            }, e.prototype.some = function(t) {
                                return o(this, t, !0, this.some);
                            };
                        };
                    }, {
                        "./assert.js": 3,
                        "./some_promise_array.js": 36
                    } ],
                    36: [ function(t, e) {
                        "use strict";
                        e.exports = function(e) {
                            function n(t, e, n) {
                                this.constructor$(t, e, n), this._howMany = 0, this._unwrap = !1, this._initialized = !1;
                            }
                            var r = t("./util.js"), i = t("./errors.js").RangeError, o = r.inherits, s = r.isArray;
                            return o(n, e), n.prototype._init = function() {
                                if (this._initialized) {
                                    if (0 === this._howMany) return void this._resolve([]);
                                    this._init$(void 0, -2);
                                    var t = s(this._values);
                                    if (this._holes = t ? this._values.length - this.length() : 0, !this._isResolved() && t && this._howMany > this._canPossiblyFulfill()) {
                                        var e = "(Promise.some) input array contains less than " + this._howMany + " promises";
                                        this._reject(new i(e));
                                    }
                                }
                            }, n.prototype.init = function() {
                                this._initialized = !0, this._init();
                            }, n.prototype.setUnwrap = function() {
                                this._unwrap = !0;
                            }, n.prototype.howMany = function() {
                                return this._howMany;
                            }, n.prototype.setHowMany = function(t) {
                                this._isResolved() || (this._howMany = t);
                            }, n.prototype._promiseFulfilled = function(t) {
                                this._isResolved() || (this._addFulfilled(t), this._fulfilled() === this.howMany() && (this._values.length = this.howMany(), 
                                this._resolve(1 === this.howMany() && this._unwrap ? this._values[0] : this._values)));
                            }, n.prototype._promiseRejected = function(t) {
                                this._isResolved() || (this._addRejected(t), this.howMany() > this._canPossiblyFulfill() && this._reject(this._values.length === this.length() ? [] : this._values.slice(this.length() + this._holes)));
                            }, n.prototype._fulfilled = function() {
                                return this._totalResolved;
                            }, n.prototype._rejected = function() {
                                return this._values.length - this.length() - this._holes;
                            }, n.prototype._addRejected = function(t) {
                                this._values.push(t);
                            }, n.prototype._addFulfilled = function(t) {
                                this._values[this._totalResolved++] = t;
                            }, n.prototype._canPossiblyFulfill = function() {
                                return this.length() - this._rejected();
                            }, n;
                        };
                    }, {
                        "./errors.js": 11,
                        "./util.js": 40
                    } ],
                    37: [ function(t, e) {
                        "use strict";
                        e.exports = function(e) {
                            var n = t("./promise_inspection.js");
                            e.prototype.inspect = function() {
                                return new n(this);
                            };
                        };
                    }, {
                        "./promise_inspection.js": 23
                    } ],
                    38: [ function(t, e) {
                        "use strict";
                        e.exports = function(e) {
                            function n(t) {
                                try {
                                    return t.then;
                                } catch (e) {
                                    return u.e = e, u;
                                }
                            }
                            function r(t, o, s) {
                                if (a(t)) {
                                    if (t instanceof e) return t;
                                    var c = n(t);
                                    if (c === u) return o = "function" == typeof o ? o : r, void 0 !== s && s._attachExtraTrace(c.e), 
                                    e.reject(c.e, o);
                                    if ("function" == typeof c) return o = "function" == typeof o ? o : r, i(t, c, o, s);
                                }
                                return t;
                            }
                            function i(t, n, r, i) {
                                function s(n) {
                                    if (!f) {
                                        if (f = !0, t === n) {
                                            var r = e._makeSelfResolutionError();
                                            return void 0 !== i && i._attachExtraTrace(r), void l.reject(r);
                                        }
                                        l.resolve(n);
                                    }
                                }
                                function a(t) {
                                    f || (f = !0, o.markAsOriginatingFromRejection(t), void 0 !== i && i._attachExtraTrace(t), 
                                    l.reject(t));
                                }
                                var l = e.defer(r), f = !1, p = c(n, t, s, a);
                                return p !== u || f || (f = !0, void 0 !== i && i._attachExtraTrace(p.e), l.promise._reject(p.e)), 
                                l.promise;
                            }
                            var o = (t("./assert.js"), t("./errors.js")), s = t("./util.js"), u = s.errorObj, a = s.isObject, c = s.tryCatch2;
                            e._cast = r;
                        };
                    }, {
                        "./assert.js": 3,
                        "./errors.js": 11,
                        "./util.js": 40
                    } ],
                    39: [ function(t, e) {
                        "use strict";
                        var n = t("./global.js"), r = function(t, e) {
                            for (var r = arguments.length, i = new Array(r - 2), o = 2; r > o; ++o) i[o - 2] = arguments[o];
                            n.setTimeout(function() {
                                t.apply(void 0, i);
                            }, e);
                        }, i = {};
                        n.setTimeout(function(t) {
                            t === i && (r = n.setTimeout);
                        }, 1, i), e.exports = function(e, n) {
                            var i = (t("./util.js"), t("./assert.js"), t("./errors.js")), o = t("./errors_api_rejection")(e), s = e.TimeoutError, u = function(t, e, n) {
                                if (t.isPending()) {
                                    "string" != typeof e && (e = "operation timed out after " + n + " ms");
                                    var r = new s(e);
                                    i.markAsOriginatingFromRejection(r), t._attachExtraTrace(r), t._rejectUnchecked(r);
                                }
                            }, a = function(t, e) {
                                e._fulfill(t);
                            };
                            e.delay = function(t, i, s) {
                                if (void 0 === i && (i = t, t = void 0), (0 | i) !== i || 0 > i) return o("expecting a positive integer");
                                "function" != typeof s && (s = e.delay);
                                var u = e._cast(t, s, void 0), c = new e(n);
                                return e.is(u) ? (u._isBound() && c._setBoundTo(u._boundTo), u._cancellable() && (c._setCancellable(), 
                                c._cancellationParent = u), c._setTrace(s, u), c._follow(u), c.then(function(t) {
                                    return e.delay(t, i);
                                })) : (c._setTrace(s, void 0), r(a, i, t, c), c);
                            }, e.prototype.delay = function(t) {
                                return e.delay(this, t, this.delay);
                            }, e.prototype.timeout = function(t, i) {
                                if ((0 | t) !== t || 0 > t) return o("expecting a positive integer");
                                var s = new e(n);
                                return s._setTrace(this.timeout, this), this._isBound() && s._setBoundTo(this._boundTo), 
                                this._cancellable() && (s._setCancellable(), s._cancellationParent = this), s._follow(this), 
                                r(u, t, s, i, t), s;
                            };
                        };
                    }, {
                        "./assert.js": 3,
                        "./errors.js": 11,
                        "./errors_api_rejection": 12,
                        "./global.js": 17,
                        "./util.js": 40
                    } ],
                    40: [ function(t, e) {
                        "use strict";
                        function n(t) {
                            "undefined" != typeof console && null !== console && "function" == typeof console.warn && console.warn("Bluebird: " + t);
                        }
                        function r(t, e, n) {
                            try {
                                return t.call(e, n);
                            } catch (r) {
                                return y.e = r, y;
                            }
                        }
                        function i(t, e, n, r) {
                            try {
                                return t.call(e, n, r);
                            } catch (i) {
                                return y.e = i, y;
                            }
                        }
                        function o(t, e, n) {
                            try {
                                return t.apply(n, e);
                            } catch (r) {
                                return y.e = r, y;
                            }
                        }
                        function s(t) {
                            return "string" == typeof t ? t : "" + t;
                        }
                        function u(t) {
                            return null == t || t === !0 || t === !1 || "string" == typeof t || "number" == typeof t;
                        }
                        function a(t) {
                            return !u(t);
                        }
                        function c(t) {
                            return u(t) ? new Error(s(t)) : t;
                        }
                        function l(t, e) {
                            var n, r = t.length, i = new Array(r + 1);
                            for (n = 0; r > n; ++n) i[n] = t[n];
                            return i[n] = e, i;
                        }
                        function f(t, e, n) {
                            var r = {
                                value: n,
                                configurable: !0,
                                enumerable: !1,
                                writable: !0
                            };
                            return d.defineProperty(t, e, r), t;
                        }
                        function p(t) {
                            throw t;
                        }
                        var h = t("./global.js"), d = (t("./assert.js"), t("./es5.js")), v = function() {
                            try {
                                var t = {};
                                return d.defineProperty(t, "f", {
                                    get: function() {
                                        return 3;
                                    }
                                }), 3 === t.f;
                            } catch (e) {
                                return !1;
                            }
                        }(), m = function(t, e, n) {
                            try {
                                return f(t, e, n), t;
                            } catch (r) {
                                for (var i = {}, o = d.keys(t), s = 0, u = o.length; u > s; ++s) try {
                                    var a = o[s];
                                    i[a] = t[a];
                                } catch (c) {
                                    i[a] = c;
                                }
                                return f(i, e, n), i;
                            }
                        }, g = function() {
                            return "undefined" != typeof window && null !== window && "undefined" != typeof window.document && "undefined" != typeof navigator && null !== navigator && "string" == typeof navigator.appName && window === h ? !1 : !0;
                        }(), y = {
                            e: {}
                        }, _ = function(t, e) {
                            function n() {
                                this.constructor = t, this.constructor$ = e;
                                for (var n in e.prototype) r.call(e.prototype, n) && "$" !== n.charAt(n.length - 1) && (this[n + "$"] = e.prototype[n]);
                            }
                            var r = {}.hasOwnProperty;
                            return n.prototype = e.prototype, t.prototype = new n(), t.prototype;
                        }, b = function() {
                            return "string" !== this;
                        }.call("string"), w = {
                            thrower: p,
                            isArray: d.isArray,
                            haveGetters: v,
                            notEnumerableProp: f,
                            isPrimitive: u,
                            isObject: a,
                            ensurePropertyExpansion: m,
                            canEvaluate: g,
                            deprecated: n,
                            errorObj: y,
                            tryCatch1: r,
                            tryCatch2: i,
                            tryCatchApply: o,
                            inherits: _,
                            withAppended: l,
                            asString: s,
                            maybeWrapAsError: c,
                            wrapsPrimitiveReceiver: b
                        };
                        e.exports = w;
                    }, {
                        "./assert.js": 3,
                        "./es5.js": 13,
                        "./global.js": 17
                    } ],
                    41: [ function(t, e) {
                        function n(t, e) {
                            function n() {
                                4 === p.readyState && i();
                            }
                            function i() {
                                var t = null, n = p.statusCode = p.status, r = p.body = p.response || p.responseText || p.responseXML;
                                if (0 === n) {
                                    var i = p.responseText || a[String(p.status).charAt(0)];
                                    t = new Error(i), t.statusCode = p.status;
                                }
                                e(t, p, r);
                            }
                            function f(t) {
                                e(t, p);
                            }
                            "string" == typeof t && (t = {
                                uri: t
                            }), t = t || {}, e = o(e);
                            var p;
                            p = t.cors ? new l() : new c();
                            var h = p.url = t.uri, d = p.method = t.method || "GET", v = t.body || t.data, m = p.headers = t.headers || {}, g = !!t.sync;
                            return p.onreadystatechange = n, p.onload = i, p.onerror = f, p.onprogress = function() {}, 
                            p.ontimeout = r, p.open(d, h, !g), t.cors && (p.withCredentials = !0), g || (p.timeout = "timeout" in t ? t.timeout : 5e3), 
                            p.setRequestHeader && u(s(m), function(t) {
                                p.setRequestHeader(t, m[t]);
                            }), p.send(v), p;
                        }
                        function r() {}
                        var i = t("global/window"), o = t("once"), s = t("lodash.keys"), u = t("lodash.foreach"), a = {
                            0: "Internal XMLHttpRequest Error"
                        }, c = i.XMLHttpRequest || r, l = "withCredentials" in new c() ? i.XMLHttpRequest : i.XDomainRequest;
                        e.exports = n;
                    }, {
                        "global/window": 42,
                        "lodash.foreach": 43,
                        "lodash.keys": 69,
                        once: 75
                    } ],
                    42: [ function(t, e) {
                        var n = "undefined" != typeof self ? self : "undefined" != typeof window ? window : {};
                        e.exports = "undefined" != typeof window ? window : "undefined" != typeof n ? n : {};
                    }, {} ],
                    43: [ function(t, e) {
                        function n(t, e, n) {
                            var o = -1, s = t ? t.length : 0;
                            if (e = e && "undefined" == typeof n ? e : r(e, n, 3), "number" == typeof s) for (;++o < s && e(t[o], o, t) !== !1; ) ; else i(t, e);
                            return t;
                        }
                        var r = t("lodash._basecreatecallback"), i = t("lodash.forown");
                        e.exports = n;
                    }, {
                        "lodash._basecreatecallback": 44,
                        "lodash.forown": 67
                    } ],
                    44: [ function(t, e) {
                        function n(t, e, n) {
                            if ("function" != typeof t) return i;
                            if ("undefined" == typeof e || !("prototype" in t)) return t;
                            var l = t.__bindData__;
                            if ("undefined" == typeof l && (s.funcNames && (l = !t.name), l = l || !s.funcDecomp, 
                            !l)) {
                                var f = c.call(t);
                                s.funcNames || (l = !u.test(f)), l || (l = a.test(f), o(t, l));
                            }
                            if (l === !1 || l !== !0 && 1 & l[1]) return t;
                            switch (n) {
                              case 1:
                                return function(n) {
                                    return t.call(e, n);
                                };

                              case 2:
                                return function(n, r) {
                                    return t.call(e, n, r);
                                };

                              case 3:
                                return function(n, r, i) {
                                    return t.call(e, n, r, i);
                                };

                              case 4:
                                return function(n, r, i, o) {
                                    return t.call(e, n, r, i, o);
                                };
                            }
                            return r(t, e);
                        }
                        var r = t("lodash.bind"), i = t("lodash.identity"), o = t("lodash._setbinddata"), s = t("lodash.support"), u = /^\s*function[ \n\r\t]+\w/, a = /\bthis\b/, c = Function.prototype.toString;
                        e.exports = n;
                    }, {
                        "lodash._setbinddata": 45,
                        "lodash.bind": 48,
                        "lodash.identity": 64,
                        "lodash.support": 65
                    } ],
                    45: [ function(t, e) {
                        var n = t("lodash._isnative"), r = t("lodash.noop"), i = {
                            configurable: !1,
                            enumerable: !1,
                            value: null,
                            writable: !1
                        }, o = function() {
                            try {
                                var t = {}, e = n(e = Object.defineProperty) && e, r = e(t, t, t) && e;
                            } catch (i) {}
                            return r;
                        }(), s = o ? function(t, e) {
                            i.value = e, o(t, "__bindData__", i);
                        } : r;
                        e.exports = s;
                    }, {
                        "lodash._isnative": 46,
                        "lodash.noop": 47
                    } ],
                    46: [ function(t, e) {
                        function n(t) {
                            return "function" == typeof t && o.test(t);
                        }
                        var r = Object.prototype, i = r.toString, o = RegExp("^" + String(i).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$");
                        e.exports = n;
                    }, {} ],
                    47: [ function(t, e) {
                        function n() {}
                        e.exports = n;
                    }, {} ],
                    48: [ function(t, e) {
                        function n(t, e) {
                            return arguments.length > 2 ? r(t, 17, i(arguments, 2), null, e) : r(t, 1, null, null, e);
                        }
                        var r = t("lodash._createwrapper"), i = t("lodash._slice");
                        e.exports = n;
                    }, {
                        "lodash._createwrapper": 49,
                        "lodash._slice": 63
                    } ],
                    49: [ function(t, e) {
                        function n(t, e, u, l, f, p) {
                            var h = 1 & e, d = 2 & e, v = 4 & e, m = 16 & e, g = 32 & e;
                            if (!d && !o(t)) throw new TypeError();
                            m && !u.length && (e &= -17, m = u = !1), g && !l.length && (e &= -33, g = l = !1);
                            var y = t && t.__bindData__;
                            if (y && y !== !0) return y = s(y), y[2] && (y[2] = s(y[2])), y[3] && (y[3] = s(y[3])), 
                            !h || 1 & y[1] || (y[4] = f), !h && 1 & y[1] && (e |= 8), !v || 4 & y[1] || (y[5] = p), 
                            m && a.apply(y[2] || (y[2] = []), u), g && c.apply(y[3] || (y[3] = []), l), y[1] |= e, 
                            n.apply(null, y);
                            var _ = 1 == e || 17 === e ? r : i;
                            return _([ t, e, u, l, f, p ]);
                        }
                        var r = t("lodash._basebind"), i = t("lodash._basecreatewrapper"), o = t("lodash.isfunction"), s = t("lodash._slice"), u = [], a = u.push, c = u.unshift;
                        e.exports = n;
                    }, {
                        "lodash._basebind": 50,
                        "lodash._basecreatewrapper": 56,
                        "lodash._slice": 63,
                        "lodash.isfunction": 62
                    } ],
                    50: [ function(t, e) {
                        function n(t) {
                            function e() {
                                if (u) {
                                    var t = s(u);
                                    a.apply(t, arguments);
                                }
                                if (this instanceof e) {
                                    var o = r(n.prototype), l = n.apply(o, t || arguments);
                                    return i(l) ? l : o;
                                }
                                return n.apply(c, t || arguments);
                            }
                            var n = t[0], u = t[2], c = t[4];
                            return o(e, t), e;
                        }
                        var r = t("lodash._basecreate"), i = t("lodash.isobject"), o = t("lodash._setbinddata"), s = t("lodash._slice"), u = [], a = u.push;
                        e.exports = n;
                    }, {
                        "lodash._basecreate": 51,
                        "lodash._setbinddata": 45,
                        "lodash._slice": 63,
                        "lodash.isobject": 54
                    } ],
                    51: [ function(t, e) {
                        function n(t) {
                            return o(t) ? s(t) : {};
                        }
                        var r = "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, i = t("lodash._isnative"), o = t("lodash.isobject"), s = (t("lodash.noop"), 
                        i(s = Object.create) && s);
                        s || (n = function() {
                            function t() {}
                            return function(e) {
                                if (o(e)) {
                                    t.prototype = e;
                                    var n = new t();
                                    t.prototype = null;
                                }
                                return n || r.Object();
                            };
                        }()), e.exports = n;
                    }, {
                        "lodash._isnative": 52,
                        "lodash.isobject": 54,
                        "lodash.noop": 53
                    } ],
                    52: [ function(t, e) {
                        e.exports = t(46);
                    }, {} ],
                    53: [ function(t, e) {
                        e.exports = t(47);
                    }, {} ],
                    54: [ function(t, e) {
                        function n(t) {
                            return !(!t || !r[typeof t]);
                        }
                        var r = t("lodash._objecttypes");
                        e.exports = n;
                    }, {
                        "lodash._objecttypes": 55
                    } ],
                    55: [ function(t, e) {
                        var n = {
                            "boolean": !1,
                            "function": !0,
                            object: !0,
                            number: !1,
                            string: !1,
                            undefined: !1
                        };
                        e.exports = n;
                    }, {} ],
                    56: [ function(t, e) {
                        function n(t) {
                            function e() {
                                var t = d ? p : this;
                                if (l) {
                                    var o = s(l);
                                    a.apply(o, arguments);
                                }
                                if ((f || m) && (o || (o = s(arguments)), f && a.apply(o, f), m && o.length < h)) return c |= 16, 
                                n([ u, g ? c : -4 & c, o, null, p, h ]);
                                if (o || (o = arguments), v && (u = t[y]), this instanceof e) {
                                    t = r(u.prototype);
                                    var _ = u.apply(t, o);
                                    return i(_) ? _ : t;
                                }
                                return u.apply(t, o);
                            }
                            var u = t[0], c = t[1], l = t[2], f = t[3], p = t[4], h = t[5], d = 1 & c, v = 2 & c, m = 4 & c, g = 8 & c, y = u;
                            return o(e, t), e;
                        }
                        var r = t("lodash._basecreate"), i = t("lodash.isobject"), o = t("lodash._setbinddata"), s = t("lodash._slice"), u = [], a = u.push;
                        e.exports = n;
                    }, {
                        "lodash._basecreate": 57,
                        "lodash._setbinddata": 45,
                        "lodash._slice": 63,
                        "lodash.isobject": 60
                    } ],
                    57: [ function(t, e, n) {
                        arguments[4][51][0].apply(n, arguments);
                    }, {
                        "lodash._isnative": 58,
                        "lodash.isobject": 60,
                        "lodash.noop": 59
                    } ],
                    58: [ function(t, e) {
                        e.exports = t(46);
                    }, {} ],
                    59: [ function(t, e) {
                        e.exports = t(47);
                    }, {} ],
                    60: [ function(t, e) {
                        e.exports = t(54);
                    }, {
                        "lodash._objecttypes": 61
                    } ],
                    61: [ function(t, e) {
                        e.exports = t(55);
                    }, {} ],
                    62: [ function(t, e) {
                        function n(t) {
                            return "function" == typeof t;
                        }
                        e.exports = n;
                    }, {} ],
                    63: [ function(t, e) {
                        function n(t, e, n) {
                            e || (e = 0), "undefined" == typeof n && (n = t ? t.length : 0);
                            for (var r = -1, i = n - e || 0, o = Array(0 > i ? 0 : i); ++r < i; ) o[r] = t[e + r];
                            return o;
                        }
                        e.exports = n;
                    }, {} ],
                    64: [ function(t, e) {
                        function n(t) {
                            return t;
                        }
                        e.exports = n;
                    }, {} ],
                    65: [ function(t, e) {
                        var n = "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, r = t("lodash._isnative"), i = /\bthis\b/, o = {};
                        o.funcDecomp = !r(n.WinRTError) && i.test(function() {
                            return this;
                        }), o.funcNames = "string" == typeof Function.name, e.exports = o;
                    }, {
                        "lodash._isnative": 66
                    } ],
                    66: [ function(t, e) {
                        e.exports = t(46);
                    }, {} ],
                    67: [ function(t, e) {
                        var n = t("lodash._basecreatecallback"), r = t("lodash.keys"), i = t("lodash._objecttypes"), o = function(t, e, o) {
                            var s, u = t, a = u;
                            if (!u) return a;
                            if (!i[typeof u]) return a;
                            e = e && "undefined" == typeof o ? e : n(e, o, 3);
                            for (var c = -1, l = i[typeof u] && r(u), f = l ? l.length : 0; ++c < f; ) if (s = l[c], 
                            e(u[s], s, t) === !1) return a;
                            return a;
                        };
                        e.exports = o;
                    }, {
                        "lodash._basecreatecallback": 44,
                        "lodash._objecttypes": 68,
                        "lodash.keys": 69
                    } ],
                    68: [ function(t, e) {
                        e.exports = t(55);
                    }, {} ],
                    69: [ function(t, e) {
                        var n = t("lodash._isnative"), r = t("lodash.isobject"), i = t("lodash._shimkeys"), o = n(o = Object.keys) && o, s = o ? function(t) {
                            return r(t) ? o(t) : [];
                        } : i;
                        e.exports = s;
                    }, {
                        "lodash._isnative": 70,
                        "lodash._shimkeys": 71,
                        "lodash.isobject": 73
                    } ],
                    70: [ function(t, e) {
                        e.exports = t(46);
                    }, {} ],
                    71: [ function(t, e) {
                        var n = t("lodash._objecttypes"), r = Object.prototype, i = r.hasOwnProperty, o = function(t) {
                            var e, r = t, o = [];
                            if (!r) return o;
                            if (!n[typeof t]) return o;
                            for (e in r) i.call(r, e) && o.push(e);
                            return o;
                        };
                        e.exports = o;
                    }, {
                        "lodash._objecttypes": 72
                    } ],
                    72: [ function(t, e) {
                        e.exports = t(55);
                    }, {} ],
                    73: [ function(t, e) {
                        e.exports = t(54);
                    }, {
                        "lodash._objecttypes": 74
                    } ],
                    74: [ function(t, e) {
                        e.exports = t(55);
                    }, {} ],
                    75: [ function(t, e) {
                        function n(t) {
                            var e = !1;
                            return function() {
                                return e ? void 0 : (e = !0, t.apply(this, arguments));
                            };
                        }
                        e.exports = n, n.proto = n(function() {
                            Object.defineProperty(Function.prototype, "once", {
                                value: function() {
                                    return n(this);
                                },
                                configurable: !0
                            });
                        });
                    }, {} ],
                    76: [ function(t, e) {
                        var n = e.exports = {};
                        n.nextTick = function() {
                            var t = "undefined" != typeof window && window.setImmediate, e = "undefined" != typeof window && window.postMessage && window.addEventListener;
                            if (t) return function(t) {
                                return window.setImmediate(t);
                            };
                            if (e) {
                                var n = [];
                                return window.addEventListener("message", function(t) {
                                    var e = t.source;
                                    if ((e === window || null === e) && "process-tick" === t.data && (t.stopPropagation(), 
                                    n.length > 0)) {
                                        var r = n.shift();
                                        r();
                                    }
                                }, !0), function(t) {
                                    n.push(t), window.postMessage("process-tick", "*");
                                };
                            }
                            return function(t) {
                                setTimeout(t, 0);
                            };
                        }(), n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.binding = function() {
                            throw new Error("process.binding is not supported");
                        }, n.cwd = function() {
                            return "/";
                        }, n.chdir = function() {
                            throw new Error("process.chdir is not supported");
                        };
                    }, {} ]
                }, {}, [ 1 ])(1);
            });
        }, {} ],
        20: [ function(t, e) {
            "use strict";
            function n(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }
            e.exports = function(t, e, i, o) {
                e = e || "&", i = i || "=";
                var s = {};
                if ("string" != typeof t || 0 === t.length) return s;
                var u = /\+/g;
                t = t.split(e);
                var a = 1e3;
                o && "number" == typeof o.maxKeys && (a = o.maxKeys);
                var c = t.length;
                a > 0 && c > a && (c = a);
                for (var l = 0; c > l; ++l) {
                    var f, p, h, d, v = t[l].replace(u, "%20"), m = v.indexOf(i);
                    m >= 0 ? (f = v.substr(0, m), p = v.substr(m + 1)) : (f = v, p = ""), h = decodeURIComponent(f), 
                    d = decodeURIComponent(p), n(s, h) ? r(s[h]) ? s[h].push(d) : s[h] = [ s[h], d ] : s[h] = d;
                }
                return s;
            };
            var r = Array.isArray || function(t) {
                return "[object Array]" === Object.prototype.toString.call(t);
            };
        }, {} ],
        21: [ function(t, e) {
            "use strict";
            function n(t, e) {
                if (t.map) return t.map(e);
                for (var n = [], r = 0; r < t.length; r++) n.push(e(t[r], r));
                return n;
            }
            var r = function(t) {
                switch (typeof t) {
                  case "string":
                    return t;

                  case "boolean":
                    return t ? "true" : "false";

                  case "number":
                    return isFinite(t) ? t : "";

                  default:
                    return "";
                }
            };
            e.exports = function(t, e, s, u) {
                return e = e || "&", s = s || "=", null === t && (t = void 0), "object" == typeof t ? n(o(t), function(n) {
                    var o = encodeURIComponent(r(n)) + s;
                    return i(t[n]) ? t[n].map(function(t) {
                        return o + encodeURIComponent(r(t));
                    }).join(e) : o + encodeURIComponent(r(t[n]));
                }).join(e) : u ? encodeURIComponent(r(u)) + s + encodeURIComponent(r(t)) : "";
            };
            var i = Array.isArray || function(t) {
                return "[object Array]" === Object.prototype.toString.call(t);
            }, o = Object.keys || function(t) {
                var e = [];
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
                return e;
            };
        }, {} ],
        22: [ function(t, e, n) {
            "use strict";
            n.decode = n.parse = t("./decode"), n.encode = n.stringify = t("./encode");
        }, {
            "./decode": 20,
            "./encode": 21
        } ]
    }, {}, [ 1 ])(1);
});

"use strict";

(function() {
    var t = angular.module("ng-contentful", []);
    t.provider("contentfulClient", function e() {
        var t, e, n = true, r = {};
        this.setSpaceId = function(e) {
            t = e;
        };
        this.setAccessToken = function(t) {
            e = t;
        };
        this.setSSL = function(t) {
            n = !!t;
        };
        this.setOptions = function(t) {
            r = t;
        };
        this.$get = [ "$q", function(i) {
            var o = Object.create(r);
            o.space = t;
            o.accessToken = e;
            o.secure = n;
            var s = contentful.createClient(o);
            u(s, "asset assets contentType contentTypes entry entries space".split(" "));
            return s;
            function u(t, e) {
                e.forEach(function(e) {
                    var n = t[e];
                    t[e] = function() {
                        var e = arguments;
                        return i.when(n.apply(t, e));
                    };
                });
            }
        } ];
    });
    t.factory("ContentTypeList", [ "$q", "contentfulClient", function(t, e) {
        var n = {};
        var r = {};
        return {
            lookupContentType: function(i) {
                if (n[i]) {
                    return t.when(n[i]);
                } else if (r[i]) {
                    return r[i];
                } else {
                    var o = e.contentType(i).then(function(t) {
                        n[i] = t;
                        return t;
                    });
                    r[i] = o;
                    return o;
                }
            },
            loadAllContentTypes: function() {
                e.contentTypes().then(function(t) {
                    t.forEach(function(t) {
                        n[t.sys.id] = t;
                    });
                });
            },
            getContentType: function(t) {
                return n[t];
            }
        };
    } ]);
    t.controller("EntryController", [ "$scope", "ContentTypeList", function(t, e) {
        t.entryTitle = function() {
            var e = r();
            if (e) {
                return t.entry.fields[e.displayField];
            }
        };
        t.contentType = function() {
            return r();
        };
        function n() {
            return e.lookupContentType(i());
        }
        function r() {
            var t = e.getContentType(i());
            if (t) {
                return t;
            } else {
                n();
            }
        }
        function i() {
            return t.entry.sys.contentType.sys.id;
        }
    } ]);
})();

var Showdown = {
    extensions: {}
}, forEach = Showdown.forEach = function(t, e) {
    if (typeof t.forEach == "function") t.forEach(e); else {
        var n, r = t.length;
        for (n = 0; n < r; n++) e(t[n], n, t);
    }
}, stdExtName = function(t) {
    return t.replace(/[_-]||\s/g, "").toLowerCase();
};

Showdown.converter = function(t) {
    var e, n, r, i = 0, o = [], s = [];
    if (typeof module != "undefind" && typeof exports != "undefined" && typeof require != "undefind") {
        var u = require("fs");
        if (u) {
            var a = u.readdirSync((__dirname || ".") + "/extensions").filter(function(t) {
                return ~t.indexOf(".js");
            }).map(function(t) {
                return t.replace(/\.js$/, "");
            });
            Showdown.forEach(a, function(t) {
                var e = stdExtName(t);
                Showdown.extensions[e] = require("./extensions/" + t);
            });
        }
    }
    t && t.extensions && Showdown.forEach(t.extensions, function(t) {
        typeof t == "string" && (t = Showdown.extensions[stdExtName(t)]);
        if (typeof t != "function") throw "Extension '" + t + "' could not be loaded.  It was either not found or is not a valid extension.";
        Showdown.forEach(t(this), function(t) {
            t.type ? t.type === "language" || t.type === "lang" ? o.push(t) : (t.type === "output" || t.type === "html") && s.push(t) : s.push(t);
        });
    }), this.makeHtml = function(t) {
        return e = {}, n = {}, r = [], t = t.replace(/~/g, "~T"), t = t.replace(/\$/g, "~D"), 
        t = t.replace(/\r\n/g, "\n"), t = t.replace(/\r/g, "\n"), t = "\n\n" + t + "\n\n", 
        t = q(t), t = t.replace(/^[ \t]+$/gm, ""), Showdown.forEach(o, function(e) {
            t = c(e, t);
        }), t = S(t), t = f(t), t = l(t), t = h(t), t = N(t), t = t.replace(/~D/g, "$$"), 
        t = t.replace(/~T/g, "~"), Showdown.forEach(s, function(e) {
            t = c(e, t);
        }), t;
    };
    var c = function(t, e) {
        if (t.regex) {
            var n = new RegExp(t.regex, "g");
            return e.replace(n, t.replace);
        }
        if (t.filter) return t.filter(e);
    }, l = function(t) {
        return t += "~0", t = t.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|(?=~0))/gm, function(t, r, i, o, s) {
            return r = r.toLowerCase(), e[r] = P(i), o ? o + s : (s && (n[r] = s.replace(/"/g, "&quot;")), 
            "");
        }), t = t.replace(/~0/, ""), t;
    }, f = function(t) {
        t = t.replace(/\n/g, "\n\n");
        var e = "p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del|style|section|header|footer|nav|article|aside", n = "p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside";
        return t = t.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm, p), 
        t = t.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside)\b[^\r]*?<\/\2>[ \t]*(?=\n+)\n)/gm, p), 
        t = t.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, p), t = t.replace(/(\n\n[ ]{0,3}<!(--[^\r]*?--\s*)+>[ \t]*(?=\n{2,}))/g, p), 
        t = t.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, p), t = t.replace(/\n\n/g, "\n"), 
        t;
    }, p = function(t, e) {
        var n = e;
        return n = n.replace(/\n\n/g, "\n"), n = n.replace(/^\n/, ""), n = n.replace(/\n+$/g, ""), 
        n = "\n\n~K" + (r.push(n) - 1) + "K\n\n", n;
    }, h = function(t) {
        t = b(t);
        var e = k("<hr />");
        return t = t.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm, e), t = t.replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm, e), 
        t = t.replace(/^[ ]{0,2}([ ]?\_[ ]?){3,}[ \t]*$/gm, e), t = x(t), t = j(t), t = A(t), 
        t = f(t), t = O(t), t;
    }, d = function(t) {
        return t = T(t), t = v(t), t = R(t), t = y(t), t = m(t), t = F(t), t = P(t), t = C(t), 
        t = t.replace(/  +\n/g, " <br />\n"), t;
    }, v = function(t) {
        var e = /(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;
        return t = t.replace(e, function(t) {
            var e = t.replace(/(.)<\/?code>(?=.)/g, "$1`");
            return e = D(e, "\\`*_"), e;
        }), t;
    }, m = function(t) {
        return t = t.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, g), 
        t = t.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, g), 
        t = t.replace(/(\[([^\[\]]+)\])()()()()()/g, g), t;
    }, g = function(t, r, i, o, s, u, a, c) {
        c == undefined && (c = "");
        var l = r, f = i, p = o.toLowerCase(), h = s, d = c;
        if (h == "") {
            p == "" && (p = f.toLowerCase().replace(/ ?\n/g, " ")), h = "#" + p;
            if (e[p] != undefined) h = e[p], n[p] != undefined && (d = n[p]); else {
                if (!(l.search(/\(\s*\)$/m) > -1)) return l;
                h = "";
            }
        }
        h = D(h, "*_");
        var v = '<a href="' + h + '"';
        return d != "" && (d = d.replace(/"/g, "&quot;"), d = D(d, "*_"), v += ' title="' + d + '"'), 
        v += ">" + f + "</a>", v;
    }, y = function(t) {
        return t = t.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, _), t = t.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, _), 
        t;
    }, _ = function(t, r, i, o, s, u, a, c) {
        var l = r, f = i, p = o.toLowerCase(), h = s, d = c;
        d || (d = "");
        if (h == "") {
            p == "" && (p = f.toLowerCase().replace(/ ?\n/g, " ")), h = "#" + p;
            if (e[p] == undefined) return l;
            h = e[p], n[p] != undefined && (d = n[p]);
        }
        f = f.replace(/"/g, "&quot;"), h = D(h, "*_");
        var v = '<img src="' + h + '" alt="' + f + '"';
        return d = d.replace(/"/g, "&quot;"), d = D(d, "*_"), v += ' title="' + d + '"', 
        v += " />", v;
    }, b = function(t) {
        function e(t) {
            return t.replace(/[^\w]/g, "").toLowerCase();
        }
        return t = t.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm, function(t, n) {
            return k('<h1 id="' + e(n) + '">' + d(n) + "</h1>");
        }), t = t.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm, function(t, n) {
            return k('<h2 id="' + e(n) + '">' + d(n) + "</h2>");
        }), t = t.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm, function(t, n, r) {
            var i = n.length;
            return k("<h" + i + ' id="' + e(r) + '">' + d(r) + "</h" + i + ">");
        }), t;
    }, w, x = function(t) {
        t += "~0";
        var e = /^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;
        return i ? t = t.replace(e, function(t, e, n) {
            var r = e, i = n.search(/[*+-]/g) > -1 ? "ul" : "ol";
            r = r.replace(/\n{2,}/g, "\n\n\n");
            var o = w(r);
            return o = o.replace(/\s+$/, ""), o = "<" + i + ">" + o + "</" + i + ">\n", o;
        }) : (e = /(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g, 
        t = t.replace(e, function(t, e, n, r) {
            var i = e, o = n, s = r.search(/[*+-]/g) > -1 ? "ul" : "ol", o = o.replace(/\n{2,}/g, "\n\n\n"), u = w(o);
            return u = i + "<" + s + ">\n" + u + "</" + s + ">\n", u;
        })), t = t.replace(/~0/, ""), t;
    };
    w = function(t) {
        return i++, t = t.replace(/\n{2,}$/, "\n"), t += "~0", t = t.replace(/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+([^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm, function(t, e, n, r, i) {
            var o = i, s = e, u = n;
            return s || o.search(/\n{2,}/) > -1 ? o = h(I(o)) : (o = x(I(o)), o = o.replace(/\n$/, ""), 
            o = d(o)), "<li>" + o + "</li>\n";
        }), t = t.replace(/~0/g, ""), i--, t;
    };
    var j = function(t) {
        return t += "~0", t = t.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g, function(t, e, n) {
            var r = e, i = n;
            return r = E(I(r)), r = q(r), r = r.replace(/^\n+/g, ""), r = r.replace(/\n+$/g, ""), 
            r = "<pre><code>" + r + "\n</code></pre>", k(r) + i;
        }), t = t.replace(/~0/, ""), t;
    }, S = function(t) {
        return t += "~0", t = t.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g, function(t, e, n) {
            var r = e, i = n;
            return i = E(i), i = q(i), i = i.replace(/^\n+/g, ""), i = i.replace(/\n+$/g, ""), 
            i = "<pre><code" + (r ? ' class="' + r + '"' : "") + ">" + i + "\n</code></pre>", 
            k(i);
        }), t = t.replace(/~0/, ""), t;
    }, k = function(t) {
        return t = t.replace(/(^\n+|\n+$)/g, ""), "\n\n~K" + (r.push(t) - 1) + "K\n\n";
    }, T = function(t) {
        return t = t.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, function(t, e, n, r, i) {
            var o = r;
            return o = o.replace(/^([ \t]*)/g, ""), o = o.replace(/[ \t]*$/g, ""), o = E(o), 
            e + "<code>" + o + "</code>";
        }), t;
    }, E = function(t) {
        return t = t.replace(/&/g, "&amp;"), t = t.replace(/</g, "&lt;"), t = t.replace(/>/g, "&gt;"), 
        t = D(t, "*_{}[]\\", !1), t;
    }, C = function(t) {
        return t = t.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g, "<strong>$2</strong>"), 
        t = t.replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g, "<em>$2</em>"), t;
    }, A = function(t) {
        return t = t.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm, function(t, e) {
            var n = e;
            return n = n.replace(/^[ \t]*>[ \t]?/gm, "~0"), n = n.replace(/~0/g, ""), n = n.replace(/^[ \t]+$/gm, ""), 
            n = h(n), n = n.replace(/(^|\n)/g, "$1  "), n = n.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(t, e) {
                var n = e;
                return n = n.replace(/^  /gm, "~0"), n = n.replace(/~0/g, ""), n;
            }), k("<blockquote>\n" + n + "\n</blockquote>");
        }), t;
    }, O = function(t) {
        t = t.replace(/^\n+/g, ""), t = t.replace(/\n+$/g, "");
        var e = t.split(/\n{2,}/g), n = [], i = e.length;
        for (var o = 0; o < i; o++) {
            var s = e[o];
            s.search(/~K(\d+)K/g) >= 0 ? n.push(s) : s.search(/\S/) >= 0 && (s = d(s), s = s.replace(/^([ \t]*)/g, "<p>"), 
            s += "</p>", n.push(s));
        }
        i = n.length;
        for (var o = 0; o < i; o++) while (n[o].search(/~K(\d+)K/) >= 0) {
            var u = r[RegExp.$1];
            u = u.replace(/\$/g, "$$$$"), n[o] = n[o].replace(/~K\d+K/, u);
        }
        return n.join("\n\n");
    }, P = function(t) {
        return t = t.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;"), t = t.replace(/<(?![a-z\/?\$!])/gi, "&lt;"), 
        t;
    }, R = function(t) {
        return t = t.replace(/\\(\\)/g, H), t = t.replace(/\\([`*_{}\[\]()>#+-.!])/g, H), 
        t;
    }, F = function(t) {
        return t = t.replace(/<((https?|ftp|dict):[^'">\s]+)>/gi, '<a href="$1">$1</a>'), 
        t = t.replace(/<(?:mailto:)?([-.\w]+\@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, function(t, e) {
            return M(N(e));
        }), t;
    }, M = function(t) {
        var e = [ function(t) {
            return "&#" + t.charCodeAt(0) + ";";
        }, function(t) {
            return "&#x" + t.charCodeAt(0).toString(16) + ";";
        }, function(t) {
            return t;
        } ];
        return t = "mailto:" + t, t = t.replace(/./g, function(t) {
            if (t == "@") t = e[Math.floor(Math.random() * 2)](t); else if (t != ":") {
                var n = Math.random();
                t = n > .9 ? e[2](t) : n > .45 ? e[1](t) : e[0](t);
            }
            return t;
        }), t = '<a href="' + t + '">' + t + "</a>", t = t.replace(/">.+:/g, '">'), t;
    }, N = function(t) {
        return t = t.replace(/~E(\d+)E/g, function(t, e) {
            var n = parseInt(e);
            return String.fromCharCode(n);
        }), t;
    }, I = function(t) {
        return t = t.replace(/^(\t|[ ]{1,4})/gm, "~0"), t = t.replace(/~0/g, ""), t;
    }, q = function(t) {
        return t = t.replace(/\t(?=\t)/g, "    "), t = t.replace(/\t/g, "~A~B"), t = t.replace(/~B(.+?)~A/g, function(t, e, n) {
            var r = e, i = 4 - r.length % 4;
            for (var o = 0; o < i; o++) r += " ";
            return r;
        }), t = t.replace(/~A/g, "    "), t = t.replace(/~B/g, ""), t;
    }, D = function(t, e, n) {
        var r = "([" + e.replace(/([\[\]\\])/g, "\\$1") + "])";
        n && (r = "\\\\" + r);
        var i = new RegExp(r, "g");
        return t = t.replace(i, H), t;
    }, H = function(t, e) {
        var n = e.charCodeAt(0);
        return "~E" + n + "E";
    };
}, typeof module != "undefined" && (module.exports = Showdown), typeof define == "function" && define.amd && define("showdown", function() {
    return Showdown;
});

(function() {
    var t = [].indexOf || function(t) {
        for (var e = 0, n = this.length; e < n; e++) {
            if (e in this && this[e] === t) return e;
        }
        return -1;
    }, e = [].slice;
    (function(t, e) {
        if (typeof define === "function" && define.amd) {
            return define("waypoints", [ "jquery" ], function(n) {
                return e(n, t);
            });
        } else {
            return e(t.jQuery, t);
        }
    })(window, function(n, r) {
        var i, o, s, u, a, c, l, f, p, h, d, v, m, g, y, _;
        i = n(r);
        f = t.call(r, "ontouchstart") >= 0;
        u = {
            horizontal: {},
            vertical: {}
        };
        a = 1;
        l = {};
        c = "waypoints-context-id";
        d = "resize.waypoints";
        v = "scroll.waypoints";
        m = 1;
        g = "waypoints-waypoint-ids";
        y = "waypoint";
        _ = "waypoints";
        o = function() {
            function t(t) {
                var e = this;
                this.$element = t;
                this.element = t[0];
                this.didResize = false;
                this.didScroll = false;
                this.id = "context" + a++;
                this.oldScroll = {
                    x: t.scrollLeft(),
                    y: t.scrollTop()
                };
                this.waypoints = {
                    horizontal: {},
                    vertical: {}
                };
                this.element[c] = this.id;
                l[this.id] = this;
                t.bind(v, function() {
                    var t;
                    if (!(e.didScroll || f)) {
                        e.didScroll = true;
                        t = function() {
                            e.doScroll();
                            return e.didScroll = false;
                        };
                        return r.setTimeout(t, n[_].settings.scrollThrottle);
                    }
                });
                t.bind(d, function() {
                    var t;
                    if (!e.didResize) {
                        e.didResize = true;
                        t = function() {
                            n[_]("refresh");
                            return e.didResize = false;
                        };
                        return r.setTimeout(t, n[_].settings.resizeThrottle);
                    }
                });
            }
            t.prototype.doScroll = function() {
                var t, e = this;
                t = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
                if (f && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
                    n[_]("refresh");
                }
                n.each(t, function(t, r) {
                    var i, o, s;
                    s = [];
                    o = r.newScroll > r.oldScroll;
                    i = o ? r.forward : r.backward;
                    n.each(e.waypoints[t], function(t, e) {
                        var n, i;
                        if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
                            return s.push(e);
                        } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
                            return s.push(e);
                        }
                    });
                    s.sort(function(t, e) {
                        return t.offset - e.offset;
                    });
                    if (!o) {
                        s.reverse();
                    }
                    return n.each(s, function(t, e) {
                        if (e.options.continuous || t === s.length - 1) {
                            return e.trigger([ i ]);
                        }
                    });
                });
                return this.oldScroll = {
                    x: t.horizontal.newScroll,
                    y: t.vertical.newScroll
                };
            };
            t.prototype.refresh = function() {
                var t, e, r, i = this;
                r = n.isWindow(this.element);
                e = this.$element.offset();
                this.doScroll();
                t = {
                    horizontal: {
                        contextOffset: r ? 0 : e.left,
                        contextScroll: r ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: r ? 0 : e.top,
                        contextScroll: r ? 0 : this.oldScroll.y,
                        contextDimension: r ? n[_]("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                };
                return n.each(t, function(t, e) {
                    return n.each(i.waypoints[t], function(t, r) {
                        var i, o, s, u, a;
                        i = r.options.offset;
                        s = r.offset;
                        o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
                        if (n.isFunction(i)) {
                            i = i.apply(r.element);
                        } else if (typeof i === "string") {
                            i = parseFloat(i);
                            if (r.options.offset.indexOf("%") > -1) {
                                i = Math.ceil(e.contextDimension * i / 100);
                            }
                        }
                        r.offset = o - e.contextOffset + e.contextScroll - i;
                        if (r.options.onlyOnScroll && s != null || !r.enabled) {
                            return;
                        }
                        if (s !== null && s < (u = e.oldScroll) && u <= r.offset) {
                            return r.trigger([ e.backward ]);
                        } else if (s !== null && s > (a = e.oldScroll) && a >= r.offset) {
                            return r.trigger([ e.forward ]);
                        } else if (s === null && e.oldScroll >= r.offset) {
                            return r.trigger([ e.forward ]);
                        }
                    });
                });
            };
            t.prototype.checkEmpty = function() {
                if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
                    this.$element.unbind([ d, v ].join(" "));
                    return delete l[this.id];
                }
            };
            return t;
        }();
        s = function() {
            function t(t, e, r) {
                var i, o;
                if (r.offset === "bottom-in-view") {
                    r.offset = function() {
                        var t;
                        t = n[_]("viewportHeight");
                        if (!n.isWindow(e.element)) {
                            t = e.$element.height();
                        }
                        return t - n(this).outerHeight();
                    };
                }
                this.$element = t;
                this.element = t[0];
                this.axis = r.horizontal ? "horizontal" : "vertical";
                this.callback = r.handler;
                this.context = e;
                this.enabled = r.enabled;
                this.id = "waypoints" + m++;
                this.offset = null;
                this.options = r;
                e.waypoints[this.axis][this.id] = this;
                u[this.axis][this.id] = this;
                i = (o = this.element[g]) != null ? o : [];
                i.push(this.id);
                this.element[g] = i;
            }
            t.prototype.trigger = function(t) {
                if (!this.enabled) {
                    return;
                }
                if (this.callback != null) {
                    this.callback.apply(this.element, t);
                }
                if (this.options.triggerOnce) {
                    return this.destroy();
                }
            };
            t.prototype.disable = function() {
                return this.enabled = false;
            };
            t.prototype.enable = function() {
                this.context.refresh();
                return this.enabled = true;
            };
            t.prototype.destroy = function() {
                delete u[this.axis][this.id];
                delete this.context.waypoints[this.axis][this.id];
                return this.context.checkEmpty();
            };
            t.getWaypointsByElement = function(t) {
                var e, r;
                r = t[g];
                if (!r) {
                    return [];
                }
                e = n.extend({}, u.horizontal, u.vertical);
                return n.map(r, function(t) {
                    return e[t];
                });
            };
            return t;
        }();
        h = {
            init: function(t, e) {
                var r;
                e = n.extend({}, n.fn[y].defaults, e);
                if ((r = e.handler) == null) {
                    e.handler = t;
                }
                this.each(function() {
                    var t, r, i, u;
                    t = n(this);
                    i = (u = e.context) != null ? u : n.fn[y].defaults.context;
                    if (!n.isWindow(i)) {
                        i = t.closest(i);
                    }
                    i = n(i);
                    r = l[i[0][c]];
                    if (!r) {
                        r = new o(i);
                    }
                    return new s(t, r, e);
                });
                n[_]("refresh");
                return this;
            },
            disable: function() {
                return h._invoke.call(this, "disable");
            },
            enable: function() {
                return h._invoke.call(this, "enable");
            },
            destroy: function() {
                return h._invoke.call(this, "destroy");
            },
            prev: function(t, e) {
                return h._traverse.call(this, t, e, function(t, e, n) {
                    if (e > 0) {
                        return t.push(n[e - 1]);
                    }
                });
            },
            next: function(t, e) {
                return h._traverse.call(this, t, e, function(t, e, n) {
                    if (e < n.length - 1) {
                        return t.push(n[e + 1]);
                    }
                });
            },
            _traverse: function(t, e, i) {
                var o, s;
                if (t == null) {
                    t = "vertical";
                }
                if (e == null) {
                    e = r;
                }
                s = p.aggregate(e);
                o = [];
                this.each(function() {
                    var e;
                    e = n.inArray(this, s[t]);
                    return i(o, e, s[t]);
                });
                return this.pushStack(o);
            },
            _invoke: function(t) {
                this.each(function() {
                    var e;
                    e = s.getWaypointsByElement(this);
                    return n.each(e, function(e, n) {
                        n[t]();
                        return true;
                    });
                });
                return this;
            }
        };
        n.fn[y] = function() {
            var t, r;
            r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
            if (h[r]) {
                return h[r].apply(this, t);
            } else if (n.isFunction(r)) {
                return h.init.apply(this, arguments);
            } else if (n.isPlainObject(r)) {
                return h.init.apply(this, [ null, r ]);
            } else if (!r) {
                return n.error("jQuery Waypoints needs a callback function or handler option.");
            } else {
                return n.error("The " + r + " method does not exist in jQuery Waypoints.");
            }
        };
        n.fn[y].defaults = {
            context: r,
            continuous: true,
            enabled: true,
            horizontal: false,
            offset: 0,
            triggerOnce: false
        };
        p = {
            refresh: function() {
                return n.each(l, function(t, e) {
                    return e.refresh();
                });
            },
            viewportHeight: function() {
                var t;
                return (t = r.innerHeight) != null ? t : i.height();
            },
            aggregate: function(t) {
                var e, r, i;
                e = u;
                if (t) {
                    e = (i = l[n(t)[0][c]]) != null ? i.waypoints : void 0;
                }
                if (!e) {
                    return [];
                }
                r = {
                    horizontal: [],
                    vertical: []
                };
                n.each(r, function(t, i) {
                    n.each(e[t], function(t, e) {
                        return i.push(e);
                    });
                    i.sort(function(t, e) {
                        return t.offset - e.offset;
                    });
                    r[t] = n.map(i, function(t) {
                        return t.element;
                    });
                    return r[t] = n.unique(r[t]);
                });
                return r;
            },
            above: function(t) {
                if (t == null) {
                    t = r;
                }
                return p._filter(t, "vertical", function(t, e) {
                    return e.offset <= t.oldScroll.y;
                });
            },
            below: function(t) {
                if (t == null) {
                    t = r;
                }
                return p._filter(t, "vertical", function(t, e) {
                    return e.offset > t.oldScroll.y;
                });
            },
            left: function(t) {
                if (t == null) {
                    t = r;
                }
                return p._filter(t, "horizontal", function(t, e) {
                    return e.offset <= t.oldScroll.x;
                });
            },
            right: function(t) {
                if (t == null) {
                    t = r;
                }
                return p._filter(t, "horizontal", function(t, e) {
                    return e.offset > t.oldScroll.x;
                });
            },
            enable: function() {
                return p._invoke("enable");
            },
            disable: function() {
                return p._invoke("disable");
            },
            destroy: function() {
                return p._invoke("destroy");
            },
            extendFn: function(t, e) {
                return h[t] = e;
            },
            _invoke: function(t) {
                var e;
                e = n.extend({}, u.vertical, u.horizontal);
                return n.each(e, function(e, n) {
                    n[t]();
                    return true;
                });
            },
            _filter: function(t, e, r) {
                var i, o;
                i = l[n(t)[0][c]];
                if (!i) {
                    return [];
                }
                o = [];
                n.each(i.waypoints[e], function(t, e) {
                    if (r(i, e)) {
                        return o.push(e);
                    }
                });
                o.sort(function(t, e) {
                    return t.offset - e.offset;
                });
                return n.map(o, function(t) {
                    return t.element;
                });
            }
        };
        n[_] = function() {
            var t, n;
            n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
            if (p[n]) {
                return p[n].apply(null, t);
            } else {
                return p.aggregate.call(null, n);
            }
        };
        n[_].settings = {
            resizeThrottle: 100,
            scrollThrottle: 30
        };
        return i.on("load.waypoints", function() {
            return n[_]("refresh");
        });
    });
}).call(this);

(function($) {
    "use strict";
    function t(t) {
        var e = t.data("width"), n = t.data("height"), r = t.data("ratio"), i = t.data("youtube-id"), o = t.data("thumbnail"), s = t.data("timecode"), u = [ "16", "9" ], a = 0, c = t.data("parameters") || "";
        if (typeof e === "undefined" || typeof n === "undefined") {
            n = 0;
            e = "100%";
            u = r.split(":")[1] / r.split(":")[0] * 100;
            a = u + "%";
        }
        t.css({
            position: "relative",
            height: n,
            width: e,
            "padding-top": a,
            background: "url(" + o + ") center center no-repeat",
            cursor: "pointer",
            "background-size": "cover"
        }).html('<p id="lazyYT-title-' + i + '" class="lazyYT-title"></p><div class="lazyYT-button"></div>').addClass("lazyYT-image-loaded");
        $.getJSON("https://gdata.youtube.com/feeds/api/videos/" + i + "?v=2&alt=json", function(t) {
            $("#lazyYT-title-" + i).text(t.entry.title.$t);
        });
        t.on("click", function(r) {
            r.preventDefault();
            if (!t.hasClass("lazyYT-video-loaded") && t.hasClass("lazyYT-image-loaded")) {
                t.html('<iframe width="' + e + '" height="' + n + '" src="//www.youtube.com/embed/' + i + "?autoplay=1&hd=0&start=" + s + "&" + c + '" style="position:absolute; top:0; left:0; width:100%; height:100%;" frameborder="0" allowfullscreen></iframe>').removeClass("lazyYT-image-loaded").addClass("lazyYT-video-loaded");
            }
        });
    }
    $.fn.lazyYT = function() {
        return this.each(function() {
            var e = $(this).css("cursor", "pointer");
            t(e);
        });
    };
})(jQuery);

(function() {
    "use strict";
    var t;
    t = angular.module("ytlist", [ "ngRoute", "ngSanitize", "ng-contentful", "duScroll", "youtube-embed", "ytControllers", "ytDirectives", "ytServices" ]);
    t.config([ "$routeProvider", "$locationProvider", "contentfulClientProvider", "$sceDelegateProvider", function(t, e, n, r) {
        t.when("/", {
            templateUrl: "partials/index.html",
            controller: "IndexCtrl"
        }).when("/:featureId", {
            templateUrl: "partials/detail.html",
            controller: "DetailCtrl"
        }).otherwise({
            redirectTo: "/"
        });
        r.resourceUrlWhitelist({
            self: "self",
            "http://www.youtube.com/**": "http://www.youtube.com/**",
            "https://www.youtube.com/**": "https://www.youtube.com/**"
        });
        n.setSpaceId("6s2rqhmim2vw");
        return n.setAccessToken("c74b04faaa839cf30d0fbf6d0fa5827984c15b39864d7fc3c48a6fe57ad6ad0d");
    } ]);
}).call(this);

(function() {
    "use strict";
    var t;
    t = angular.module("ytControllers", []);
    t.controller("IndexCtrl", [ "$scope", "$http", "contentfulClient", function(t, e, n) {
        t.features = "";
        return n.entries({
            content_type: "tGyjv9K8h2kiGAW6qe2WI",
            include: 1
        }).then(function(e) {
            return t.features = e;
        });
    } ]);
    t.controller("DetailCtrl", [ "$scope", "$rootScope", "$routeParams", "$http", "$location", "contentfulClient", "$sce", "initVidStyles", "initThumbStyles", "initButtonStyles", "initHeroStyles", function(t, e, n, r, i, o, s, u, a, c, l) {
        var f;
        f = new Showdown.converter();
        t.player = {};
        t.video = {};
        t.video.currentTime = 0;
        t.video.id = "";
        t.dataready = false;
        t.scrolled = false;
        t.vidMaster = u;
        t.thumbMaster = a;
        t.buttonMaster = c;
        t.heroMaster = l;
        t.youTubePrefix = "//www.youtube.com/embed/";
        t.youTubeParams = "?autoplay=0&loop=1&hd=1&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&rel=0";
        t.$watch("vidMaster", function() {
            return t.videoStyles = function() {
                return {
                    opacity: t.vidMaster.opacity
                };
            };
        });
        t.$watch("thumbMaster", function() {
            return t.thumbStyles = function() {
                return {
                    backgroundImage: t.thumbMaster.backgroundImage
                };
            };
        });
        t.$watch("buttonMaster", function() {
            return t.buttonStyles = function() {
                return {
                    display: t.buttonMaster.display
                };
            };
        });
        t.$watch("heroMaster", function() {
            return t.heroStyles = function() {
                return {
                    backgroundImage: t.heroMaster.backgroundImage
                };
            };
        });
        t.playerVars = {
            controls: 0,
            autoplay: 0,
            modestbranding: 1,
            showinfo: 0,
            hd: 1
        };
        t.$on("youtube.player.ready", function(e, n) {
            return t.player = n;
        });
        return o.entries({
            "sys.id": n.featureId,
            include: 10
        }).then(function(e) {
            var n, r, i, o, u;
            t.feature = e[0];
            t.fields = t.feature.fields;
            u = t.fields.youTubeListItems;
            for (i = 0, o = u.length; i < o; i++) {
                n = u[i];
                if (n.fields.bodyText) {
                    r = n.fields.bodyText;
                    r = f.makeHtml(r);
                }
            }
            t.fields.introText = f.makeHtml(t.fields.introText);
            t.items = t.fields.youTubeListItems;
            t.video.id = t.items[0].fields.youTubeVideoId;
            t.thumbMaster.backgroundImage = "url(" + t.fields.heroImage.fields.file.url + "?w=800)";
            t.thumbMaster.initBackground = t.fields.heroImage.fields.file.url;
            t.thumbInit = "url(" + t.fields.heroImage.fields.file.url + "?w=800)";
            t.thumbMaster.backgroundSize = "cover";
            t.dataready = true;
            t.playVideo = function(e) {
                t.vidMaster.opacity = 1;
                t.thumbMaster.backgroundImage = "none";
                t.buttonMaster.display = "none";
                t.player.seekTo(e);
                return t.player.playVideo();
            };
            return t.trust = function(t) {
                return s.trustAsHtml(t);
            };
        });
    } ]);
}).call(this);

(function() {
    "use strict";
    var t;
    t = angular.module("ytDirectives", []);
    t.directive("lazy", [ "$timeout", function(t) {
        var e;
        e = function(e, n, r) {
            return t(function() {
                var t, e, i;
                t = r.videoid;
                e = r.thumbnail;
                i = r.seconds;
                n.data("youtube-id", t);
                n.data("thumbnail", e);
                n.data("timecode", i);
                return n.lazyYT();
            });
        };
        return {
            link: e
        };
    } ]);
    t.directive("wrapWaypoints", [ "$window", "$timeout", function(t, e) {
        var n, r, i;
        r = $(".video");
        i = $(".video-wrapper");
        n = function(t, n, i) {
            return e(function() {
                var e, n;
                e = function(t, e) {
                    if (!e) {
                        e = "";
                    }
                    return r.css({
                        backgroundImage: "url(" + t + "?w=800)",
                        backgroundSize: "cover"
                    });
                };
                n = function() {
                    var n;
                    n = $(".item");
                    return n.waypoint({
                        context: ".frame",
                        offset: "50%",
                        handler: function(n) {
                            var r, i, o, s, u, a;
                            r = $(this);
                            o = r.prev().data("id");
                            a = r.data("id");
                            u = r.data("thumbnail");
                            s = r.data("thumblur");
                            t.video.currentTime = r.data("time");
                            i = r.data("chapter");
                            if (!t.time) {
                                t.time = 0;
                            }
                            if (n === "down") {
                                e(u, s);
                                if (i === 1) {
                                    $(".lazyYT-button").css({
                                        opacity: 1
                                    });
                                }
                            }
                            if (n === "up") {
                                if (i === 1) {
                                    $(".lazyYT-button").css({
                                        opacity: 0
                                    });
                                }
                                if (o) {
                                    return e(u, s);
                                } else {
                                    return e(t.thumbMaster.initBackground);
                                }
                            }
                        }
                    });
                };
                return n();
            });
        };
        return {
            link: n
        };
    } ]);
    t.directive("triggerPlay", function() {
        var t;
        t = function(t, e, n) {};
        return {
            link: t
        };
    });
    t.directive("moveVideo", function() {
        var t, e, n, r, i, o;
        i = $(".text-wrapper");
        o = $(".video");
        e = $(".frame");
        r = 0;
        t = 0;
        n = function(t, e, n) {
            return e.scroll(function() {
                var t, e;
                t = -i.offset().top;
                e = t * .02;
                return o.css({
                    "-webkitTransform": "translateY(" + (e + "px") + ")",
                    "-mozTransform": "translateY(" + (e + "px") + ")",
                    "-msTransform": "translateY(" + (e + "px") + ")",
                    "-oTransform": "translateY(" + (e + "px") + ")",
                    transform: "translateY(" + (e + "px") + ")"
                });
            });
        };
        return {
            link: n
        };
    });
}).call(this);

(function() {
    "use strict";
    var t;
    t = angular.module("ytServices", []);
    t.factory("initVidStyles", function() {
        return {
            opacity: 0
        };
    });
    t.factory("initThumbStyles", function() {
        return {
            backgroundImage: "none",
            backgroundSize: "cover",
            backgroundPosition: "center center"
        };
    });
    t.factory("initButtonStyles", function() {
        return {
            display: "block"
        };
    });
    t.factory("initHeroStyles", function() {
        return {
            backgroundImage: "none",
            backgroundSize: "cover",
            backgroundPosition: "center center"
        };
    });
}).call(this);