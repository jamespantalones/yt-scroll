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
        if (null == t || C(t)) return !1;
        var e = t.length;
        return 1 === t.nodeType && e ? !0 : w(t) || ir(t) || 0 === e || "number" === typeof e && 0 < e && e - 1 in t;
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
    function a(t, e, n) {
        for (var r = s(t), i = 0; i < r.length; i++) e.call(n, t[r[i]], r[i]);
        return r;
    }
    function u(t) {
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
    function w(t) {
        return "string" === typeof t;
    }
    function b(t) {
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
    function C(t) {
        return t && t.document && t.location && t.alert && t.setInterval;
    }
    function k(t) {
        return !(!t || !(t.nodeName || t.prop && t.attr && t.find));
    }
    function T(t, e, n) {
        var r = [];
        o(t, function(t, i, o) {
            r.push(e.call(n, t, i, o));
        });
        return r;
    }
    function A(t, e) {
        if (t.indexOf) return t.indexOf(e);
        for (var n = 0; n < t.length; n++) if (e === t[n]) return n;
        return -1;
    }
    function E(t, e) {
        var n = A(t, e);
        0 <= n && t.splice(n, 1);
        return e;
    }
    function O(t, e, n, r) {
        if (C(t) || t && t.$evalAsync && t.$watch) throw Zn("cpws");
        if (e) {
            if (t === e) throw Zn("cpi");
            n = n || [];
            r = r || [];
            if (_(t)) {
                var i = A(n, t);
                if (-1 !== i) return r[i];
                n.push(t);
                r.push(e);
            }
            if (ir(t)) for (var s = e.length = 0; s < t.length; s++) i = O(t[s], null, n, r), 
            _(t[s]) && (n.push(t[s]), r.push(i)), e.push(i); else {
                var a = e.$$hashKey;
                ir(e) ? e.length = 0 : o(e, function(t, n) {
                    delete e[n];
                });
                for (s in t) i = O(t[s], null, n, r), _(t[s]) && (n.push(t[s]), r.push(i)), e[s] = i;
                l(e, a);
            }
        } else if (e = t) ir(t) ? e = O(t, [], n, r) : x(t) ? e = new Date(t.getTime()) : S(t) ? (e = RegExp(t.source, t.toString().match(/[^\/]*$/)[0]), 
        e.lastIndex = t.lastIndex) : _(t) && (e = O(t, {}, n, r));
        return e;
    }
    function P(t, e) {
        if (ir(t)) {
            e = e || [];
            for (var n = 0; n < t.length; n++) e[n] = t[n];
        } else if (_(t)) for (n in e = e || {}, t) !zn.call(t, n) || "$" === n.charAt(0) && "$" === n.charAt(1) || (e[n] = t[n]);
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
            if (t && t.$evalAsync && t.$watch || e && e.$evalAsync && e.$watch || C(t) || C(e) || ir(e)) return !1;
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
        var n = 2 < arguments.length ? Jn.call(arguments, 2) : [];
        return !j(e) || e instanceof RegExp ? e : n.length ? function() {
            return arguments.length ? e.apply(t, n.concat(Jn.call(arguments, 0))) : e.apply(t, n);
        } : function() {
            return arguments.length ? e.apply(t, arguments) : e.call(t);
        };
    }
    function M(t, r) {
        var i = r;
        "string" === typeof t && "$" === t.charAt(0) ? i = n : C(r) ? i = "$WINDOW" : r && e === r ? i = "$DOCUMENT" : r && (r.$evalAsync && r.$watch) && (i = "$SCOPE");
        return i;
    }
    function D(t, e) {
        return "undefined" === typeof t ? n : JSON.stringify(t, M, e ? "  " : null);
    }
    function N(t) {
        return w(t) ? JSON.parse(t) : t;
    }
    function I(t) {
        "function" === typeof t ? t = !0 : t && 0 !== t.length ? (t = Ln("" + t), t = !("f" == t || "0" == t || "false" == t || "no" == t || "n" == t || "[]" == t)) : t = !1;
        return t;
    }
    function q(t) {
        t = Kn(t).clone();
        try {
            t.empty();
        } catch (e) {}
        var n = Kn("<div>").append(t).html();
        try {
            return 3 === t[0].nodeType ? Ln(n) : n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(t, e) {
                return "<" + Ln(e);
            });
        } catch (r) {
            return Ln(n);
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
            zn.call(e, r) ? ir(e[r]) ? e[r].push(t) : e[r] = [ e[r], t ] : e[r] = t));
        });
        return e;
    }
    function U(t) {
        var e = [];
        o(t, function(t, n) {
            ir(t) ? o(t, function(t) {
                e.push(L(n, !0) + (!0 === t ? "" : "=" + L(t, !0)));
            }) : e.push(L(n, !0) + (!0 === t ? "" : "=" + L(t, !0)));
        });
        return e.length ? e.join("&") : "";
    }
    function B(t) {
        return L(t, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
    }
    function L(t, e) {
        return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, e ? "%20" : "+");
    }
    function z(t, n) {
        function r(t) {
            t && i.push(t);
        }
        var i = [ t ], s, a, u = [ "ng:app", "ng-app", "x-ng-app", "data-ng-app" ], c = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
        o(u, function(n) {
            u[n] = !0;
            r(e.getElementById(n));
            n = n.replace(":", "\\:");
            t.querySelectorAll && (o(t.querySelectorAll("." + n), r), o(t.querySelectorAll("." + n + "\\:"), r), 
            o(t.querySelectorAll("[" + n + "]"), r));
        });
        o(i, function(t) {
            if (!s) {
                var e = c.exec(" " + t.className + " ");
                e ? (s = t, a = (e[2] || "").replace(/\s+/g, ",")) : o(t.attributes, function(e) {
                    !s && u[e.name] && (s = t, a = e.value);
                });
            }
        });
        s && n(s, a ? [ a ] : []);
    }
    function W(n, r) {
        var i = function() {
            n = Kn(n);
            if (n.injector()) {
                var t = n[0] === e ? "document" : q(n);
                throw Zn("btstrpd", t.replace(/</, "&lt;").replace(/>/, "&gt;"));
            }
            r = r || [];
            r.unshift([ "$provide", function(t) {
                t.value("$rootElement", n);
            } ]);
            r.unshift("ng");
            t = be(r);
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
    function G(t, e) {
        e = e || "_";
        return t.replace(ar, function(t, n) {
            return (n ? e : "") + t.toLowerCase();
        });
    }
    function K(t, e, n) {
        if (!t) throw Zn("areq", e || "?", n || "required");
        return t;
    }
    function Q(t, e, n) {
        n && ir(t) && (t = t[t.length - 1]);
        K(j(t), e, "not a function, got " + (t && "object" === typeof t ? t.constructor.name || "Object" : typeof t));
        return t;
    }
    function J(t, e) {
        if ("hasOwnProperty" === t) throw Zn("badname", e);
    }
    function Y(t, e, n) {
        if (!e) return t;
        e = e.split(".");
        for (var r, i = t, o = e.length, s = 0; s < o; s++) r = e[s], t && (t = (i = t)[r]);
        return !n && j(t) ? F(i, t) : t;
    }
    function X(t) {
        var e = t[0];
        t = t[t.length - 1];
        if (e === t) return Kn(e);
        var n = [ e ];
        do {
            e = e.nextSibling;
            if (!e) break;
            n.push(e);
        } while (e !== t);
        return Kn(n);
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
                            return u;
                        };
                    }
                    if (!i) throw e("nomod", r);
                    var n = [], s = [], a = t("$injector", "invoke"), u = {
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
                        config: a,
                        run: function(t) {
                            s.push(t);
                            return this;
                        }
                    };
                    o && a(o);
                    return u;
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
            element: Kn,
            forEach: o,
            injector: be,
            noop: d,
            bind: F,
            toJson: D,
            fromJson: N,
            identity: v,
            isUndefined: g,
            isDefined: y,
            isString: w,
            isFunction: j,
            isObject: _,
            isNumber: b,
            isElement: k,
            isArray: ir,
            version: ur,
            isDate: x,
            lowercase: Ln,
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
            er("ngLocale", []).provider("$locale", Le);
        }
        er("ng", [ "ngLocale" ], [ "$provide", function(t) {
            t.provider({
                $$sanitizeUri: vn
            });
            t.provider("$compile", Ae).directive({
                a: ii,
                input: vi,
                textarea: vi,
                form: ui,
                script: Yi,
                select: to,
                style: no,
                option: eo,
                ngBind: ki,
                ngBindHtml: Ai,
                ngBindTemplate: Ti,
                ngClass: Ei,
                ngClassEven: Pi,
                ngClassOdd: Oi,
                ngCloak: Ri,
                ngController: Fi,
                ngForm: ci,
                ngHide: zi,
                ngIf: Ni,
                ngInclude: Ii,
                ngInit: Hi,
                ngNonBindable: Vi,
                ngPluralize: Ui,
                ngRepeat: Bi,
                ngShow: Li,
                ngStyle: Wi,
                ngSwitch: Gi,
                ngSwitchWhen: Ki,
                ngSwitchDefault: Qi,
                ngOptions: Zi,
                ngTransclude: Ji,
                ngModel: wi,
                ngList: ji,
                ngChange: bi,
                required: xi,
                ngRequired: xi,
                ngValue: Ci
            }).directive({
                ngInclude: qi
            }).directive(oi).directive(Mi);
            t.provider({
                $anchorScroll: xe,
                $animate: Er,
                $browser: Ce,
                $cacheFactory: ke,
                $controller: Pe,
                $document: Re,
                $exceptionHandler: Fe,
                $filter: Sn,
                $interpolate: Ue,
                $interval: Be,
                $http: Ie,
                $httpBackend: He,
                $location: nn,
                $log: rn,
                $parse: ln,
                $rootScope: dn,
                $q: fn,
                $sce: $n,
                $sceDelegate: yn,
                $sniffer: _n,
                $templateCache: Te,
                $timeout: wn,
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
            var i = n && t ? [ this.filter(t) ] : [ this ], s = e, a, u, c, l, f, p;
            if (!r || null != t) for (;i.length; ) for (a = i.shift(), u = 0, c = a.length; u < c; u++) for (l = Kn(a[u]), 
            s ? l.triggerHandler("$destroy") : s = !s, f = 0, l = (p = l.children()).length; f < l; f++) i.push(Qn(p[f]));
            return o.apply(this, arguments);
        }
        var o = Qn.fn[t], o = o.$original || o;
        i.$original = o;
        Qn.fn[t] = i;
    }
    function re(t) {
        if (t instanceof re) return t;
        w(t) && (t = or(t));
        if (!(this instanceof re)) {
            if (w(t) && "<" != t.charAt(0)) throw vr("nosel");
            return new re(t);
        }
        if (w(t)) {
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
            Kn(e.createDocumentFragment()).append(this);
        } else he(this, t);
    }
    function ie(t) {
        return t.cloneNode(!0);
    }
    function oe(t) {
        ae(t);
        var e = 0;
        for (t = t.childNodes || []; e < t.length; e++) oe(t[e]);
    }
    function se(t, e, n, r) {
        if (y(r)) throw vr("offargs");
        var i = ue(t, "events");
        ue(t, "handle") && (g(e) ? o(i, function(e, n) {
            pr(t, n, e);
            delete i[n];
        }) : o(e.split(" "), function(e) {
            g(n) ? (pr(t, e, i[e]), delete i[e]) : E(i[e] || [], n);
        }));
    }
    function ae(t, e) {
        var r = t.ng339, i = cr[r];
        i && (e ? delete cr[r].data[e] : (i.handle && (i.events.$destroy && i.handle({}, "$destroy"), 
        se(t)), delete cr[r], t.ng339 = n));
    }
    function ue(t, e, n) {
        var r = t.ng339, r = cr[r || -1];
        if (y(n)) r || (t.ng339 = r = ++lr, r = cr[r] = {}), r[e] = n; else return r && r[e];
    }
    function ce(t, e, n) {
        var r = ue(t, "data"), i = y(n), o = !i && y(e), s = o && !_(e);
        r || s || ue(t, "data", r = {});
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
            e = e.nodeName || !y(e.length) || C(e) ? [ e ] : e;
            for (var n = 0; n < e.length; n++) t.push(e[n]);
        }
    }
    function de(t, e) {
        return ve(t, "$" + (e || "ngController") + "Controller");
    }
    function ve(t, e, r) {
        9 == t.nodeType && (t = t.documentElement);
        for (e = ir(e) ? e : [ e ]; t; ) {
            for (var i = 0, o = e.length; i < o; i++) if ((r = Kn.data(t, e[i])) !== n) return r;
            t = t.parentNode || 11 === t.nodeType && t.host;
        }
    }
    function me(t) {
        for (var e = 0, n = t.childNodes; e < n.length; e++) oe(n[e]);
        for (;t.firstChild; ) t.removeChild(t.firstChild);
    }
    function ge(t, e) {
        var n = br[e.toLowerCase()];
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
            var a = P(n[i || r.type] || []);
            o(a, function(e) {
                e.call(t, r);
            });
            8 >= Gn ? (r.preventDefault = null, r.stopPropagation = null, r.isDefaultPrevented = null) : (delete r.preventDefault, 
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
    function we(t) {
        var e, n;
        "function" === typeof t ? (e = t.$inject) || (e = [], t.length && (n = t.toString().replace(kr, ""), 
        n = n.match(jr), o(n[1].split(Sr), function(t) {
            t.replace(Cr, function(t, n, r) {
                e.push(r);
            });
        })), t.$inject = e) : ir(t) ? (n = t.length - 1, Q(t[n], "fn"), e = t.slice(0, n)) : Q(t, "fn", !0);
        return e;
    }
    function be(t) {
        function e(t) {
            return function(e, n) {
                if (_(e)) o(e, u(t)); else return t(e, n);
            };
        }
        function n(t, e) {
            J(t, "service");
            if (j(e) || ir(e)) e = h.instantiate(e);
            if (!e.$get) throw Tr("pget", t);
            return p[t + c] = e;
        }
        function r(t, e) {
            return n(t, {
                $get: e
            });
        }
        function i(t) {
            var e = [], n, r, s, a;
            o(t, function(t) {
                if (!f.get(t)) {
                    f.put(t, !0);
                    try {
                        if (w(t)) for (n = er(t), e = e.concat(i(n.requires)).concat(n._runBlocks), r = n._invokeQueue, 
                        s = 0, a = r.length; s < a; s++) {
                            var o = r[s], u = h.get(o[0]);
                            u[o[1]].apply(u, o[2]);
                        } else j(t) ? e.push(h.invoke(t)) : ir(t) ? e.push(h.invoke(t)) : Q(t, "module");
                    } catch (c) {
                        throw ir(t) && (t = t[t.length - 1]), c.message && (c.stack && -1 == c.stack.indexOf(c.message)) && (c = c.message + "\n" + c.stack), 
                        Tr("modulerr", t, c.stack || c.message || c);
                    }
                }
            });
            return e;
        }
        function s(t, e) {
            function n(n) {
                if (t.hasOwnProperty(n)) {
                    if (t[n] === a) throw Tr("cdep", n + " <- " + l.join(" <- "));
                    return t[n];
                }
                try {
                    return l.unshift(n), t[n] = a, t[n] = e(n);
                } catch (r) {
                    throw t[n] === a && delete t[n], r;
                } finally {
                    l.shift();
                }
            }
            function r(t, e, r) {
                var i = [], o = we(t), s, a, u;
                a = 0;
                for (s = o.length; a < s; a++) {
                    u = o[a];
                    if ("string" !== typeof u) throw Tr("itkn", u);
                    i.push(r && r.hasOwnProperty(u) ? r[u] : n(u));
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
                annotate: we,
                has: function(e) {
                    return p.hasOwnProperty(e + c) || t.hasOwnProperty(e);
                }
            };
        }
        var a = {}, c = "Provider", l = [], f = new _e([], !0), p = {
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
                    J(t, "constant");
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
            throw Tr("unpr", l.join(" <- "));
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
                    e || "a" !== Ln(t.nodeName) || (e = t);
                });
                return e;
            }
            function s() {
                var t = n.hash(), r;
                t ? (r = a.getElementById(t)) ? r.scrollIntoView() : (r = i(a.getElementsByName(t))) ? r.scrollIntoView() : "top" === t && e.scrollTo(0, 0) : e.scrollTo(0, 0);
            }
            var a = e.document;
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
                t.apply(null, Jn.call(arguments, 1));
            } finally {
                if (y--, 0 === y) for (;_.length; ) try {
                    _.pop()();
                } catch (e) {
                    r.error(e);
                }
            }
        }
        function a(t, e) {
            (function n() {
                o(b, function(t) {
                    t();
                });
                x = e(n, t);
            })();
        }
        function u() {
            C = null;
            j != c.url() && (j = c.url(), o(k, function(t) {
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
            o(b, function(t) {
                t();
            });
            0 === y ? t() : _.push(t);
        };
        var b = [], x;
        c.addPollFn = function(t) {
            g(x) && a(100, h);
            b.push(t);
            return t;
        };
        var j = f.href, S = e.find("base"), C = null;
        c.url = function(e, n) {
            f !== t.location && (f = t.location);
            p !== t.history && (p = t.history);
            if (e) {
                if (j != e) return j = e, i.history ? n ? p.replaceState(null, "", e) : (p.pushState(null, "", e), 
                S.attr("href", S.attr("href"))) : (C = e, n ? f.replace(e) : f.href = e), c;
            } else return C || f.href.replace(/%27/g, "'");
        };
        var k = [], T = !1;
        c.onUrlChange = function(e) {
            if (!T) {
                if (i.history) Kn(t).on("popstate", u);
                if (i.hashchange) Kn(t).on("hashchange", u); else c.addPollFn(u);
                T = !0;
            }
            k.push(e);
            return e;
        };
        c.$$checkUrlChange = u;
        c.baseHref = function() {
            var t = S.attr("href");
            return t ? t.replace(/^(https?\:)?\/\/[^\/]*/, "") : "";
        };
        var A = {}, E = "", O = c.baseHref();
        c.cookies = function(t, e) {
            var i, o, s, a;
            if (t) e === n ? l.cookie = escape(t) + "=;path=" + O + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : w(e) && (i = (l.cookie = escape(t) + "=" + escape(e) + ";path=" + O).length + 1, 
            4096 < i && r.warn("Cookie '" + t + "' possibly not set or overflowed because it was too large (" + i + " > 4096 bytes)!")); else {
                if (l.cookie !== E) for (E = l.cookie, i = E.split("; "), A = {}, s = 0; s < i.length; s++) o = i[s], 
                a = o.indexOf("="), 0 < a && (t = unescape(o.substring(0, a)), A[t] === n && (A[t] = unescape(o.substring(a + 1))));
                return A;
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
    function Ce() {
        this.$get = [ "$window", "$log", "$sniffer", "$document", function(t, e, n, r) {
            return new Se(t, r, e, n);
        } ];
    }
    function ke() {
        this.$get = function() {
            function t(t, n) {
                function i(t) {
                    t != p && (h ? h == t && (h = t.n) : h = t, o(t.n, t.p), o(t, p), p = t, p.n = null);
                }
                function o(t, e) {
                    t != e && (t && (t.p = e), e && (e.n = t));
                }
                if (t in e) throw r("$cacheFactory")("iid", t);
                var s = 0, a = f({}, n, {
                    id: t
                }), u = {}, c = n && n.capacity || Number.MAX_VALUE, l = {}, p = null, h = null;
                return e[t] = {
                    put: function(t, e) {
                        if (c < Number.MAX_VALUE) {
                            var n = l[t] || (l[t] = {
                                key: t
                            });
                            i(n);
                        }
                        if (!g(e)) return t in u || s++, u[t] = e, s > c && this.remove(h.key), e;
                    },
                    get: function(t) {
                        if (c < Number.MAX_VALUE) {
                            var e = l[t];
                            if (!e) return;
                            i(e);
                        }
                        return u[t];
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
                        delete u[t];
                        s--;
                    },
                    removeAll: function() {
                        u = {};
                        s = 0;
                        l = {};
                        p = h = null;
                    },
                    destroy: function() {
                        l = a = u = null;
                        delete e[t];
                    },
                    info: function() {
                        return f({}, a, {
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
    function Te() {
        this.$get = [ "$cacheFactory", function(t) {
            return t("templates");
        } ];
    }
    function Ae(t, r) {
        var i = {}, s = "Directive", a = /^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/, c = /(([\d\w_\-]+)(?:\:([^;]+))?;?)/, l = /^(on[a-z]+|formaction)$/;
        this.directive = function p(e, n) {
            J(e, "directive");
            w(e) ? (K(n, "directiveFactory"), i.hasOwnProperty(e) || (i[e] = [], t.factory(e + s, [ "$injector", "$exceptionHandler", function(t, n) {
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
                    } catch (a) {
                        n(a);
                    }
                });
                return r;
            } ])), i[e].push(n)) : o(e, u(p));
            return this;
        };
        this.aHrefSanitizationWhitelist = function(t) {
            return y(t) ? (r.aHrefSanitizationWhitelist(t), this) : r.aHrefSanitizationWhitelist();
        };
        this.imgSrcSanitizationWhitelist = function(t) {
            return y(t) ? (r.imgSrcSanitizationWhitelist(t), this) : r.imgSrcSanitizationWhitelist();
        };
        this.$get = [ "$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(t, r, u, p, d, m, g, y, b, x, S, C) {
            function k(t, e, n, r, i) {
                t instanceof Kn || (t = Kn(t));
                o(t, function(e, n) {
                    3 == e.nodeType && e.nodeValue.match(/\S+/) && (t[n] = Kn(e).wrap("<span></span>").parent()[0]);
                });
                var s = A(t, e, t, n, r, i);
                T(t, "ng-scope");
                return function(e, n, r, i) {
                    K(e, "scope");
                    var a = n ? wr.clone.call(t) : t;
                    o(r, function(t, e) {
                        a.data("$" + e + "Controller", t);
                    });
                    r = 0;
                    for (var u = a.length; r < u; r++) {
                        var c = a[r].nodeType;
                        1 !== c && 9 !== c || a.eq(r).data("$scope", e);
                    }
                    n && n(a, e);
                    s && s(e, a, a, i);
                    return a;
                };
            }
            function T(t, e) {
                try {
                    t.addClass(e);
                } catch (n) {}
            }
            function A(t, e, r, i, o, s) {
                function a(t, r, i, o) {
                    var s, a, c, l, f, p, h;
                    s = r.length;
                    var d = Array(s);
                    for (l = 0; l < s; l++) d[l] = r[l];
                    p = l = 0;
                    for (f = u.length; l < f; p++) a = d[p], r = u[l++], s = u[l++], r ? (r.scope ? (c = t.$new(), 
                    Kn.data(a, "$scope", c)) : c = t, h = r.transcludeOnThisElement ? E(t, r.transclude, o) : !r.templateOnThisElement && o ? o : !o && e ? E(t, e) : null, 
                    r(s, c, a, i, h)) : s && s(t, a.childNodes, n, o);
                }
                for (var u = [], c, l, f, p, h = 0; h < t.length; h++) c = new Y(), l = O(t[h], [], c, 0 === h ? i : n, o), 
                (s = l.length ? D(l, t[h], c, e, r, null, [], [], s) : null) && s.scope && T(c.$$element, "ng-scope"), 
                c = s && s.terminal || !(f = t[h].childNodes) || !f.length ? null : A(f, s ? (s.transcludeOnThisElement || !s.templateOnThisElement) && s.transclude : e), 
                u.push(s, c), p = p || s || c, s = null;
                return p ? a : null;
            }
            function E(t, e, n) {
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
                    I(e, Ee(nr(t).toLowerCase()), "E", r, i);
                    for (var u, l, f, p = t.attributes, h = 0, d = p && p.length; h < d; h++) {
                        var v = !1, m = !1;
                        u = p[h];
                        if (!Gn || 8 <= Gn || u.specified) {
                            s = u.name;
                            l = or(u.value);
                            u = Ee(s);
                            if (f = ee.test(u)) s = G(u.substr(6), "-");
                            var g = u.replace(/(Start|End)$/, "");
                            u === g + "Start" && (v = s, m = s.substr(0, s.length - 5) + "end", s = s.substr(0, s.length - 6));
                            u = Ee(s.toLowerCase());
                            o[u] = s;
                            if (f || !n.hasOwnProperty(u)) n[u] = l, ge(t, u) && (n[u] = !0);
                            W(t, e, l, u);
                            I(e, u, "A", r, i, v, m);
                        }
                    }
                    t = t.className;
                    if (w(t) && "" !== t) for (;s = c.exec(t); ) u = Ee(s[2]), I(e, u, "C", r, i) && (n[u] = or(s[3])), 
                    t = t.substr(s.index + s[0].length);
                    break;

                  case 3:
                    L(e, t.nodeValue);
                    break;

                  case 8:
                    try {
                        if (s = a.exec(t.nodeValue)) u = Ee(s[1]), I(e, u, "M", r, i) && (n[u] = or(s[2]));
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
                return Kn(r);
            }
            function M(t, e, n) {
                return function(r, i, o, s, a) {
                    i = F(i[0], e, n);
                    return t(r, i, o, s, a);
                };
            }
            function D(t, i, s, a, c, l, f, p, h) {
                function d(t, e, n, r) {
                    if (t) {
                        n && (t = M(t, n, r));
                        t.require = z.require;
                        t.directiveName = W;
                        if (C === z || z.$$isolateScope) t = J(t, {
                            isolateScope: !0
                        });
                        f.push(t);
                    }
                    if (e) {
                        n && (e = M(e, n, r));
                        e.require = z.require;
                        e.directiveName = W;
                        if (C === z || z.$$isolateScope) e = J(e, {
                            isolateScope: !0
                        });
                        p.push(e);
                    }
                }
                function v(t, e, n, r) {
                    var i, s = "data", a = !1;
                    if (w(e)) {
                        for (;"^" == (i = e.charAt(0)) || "?" == i; ) e = e.substr(1), "^" == i && (s = "inheritedData"), 
                        a = a || "?" == i;
                        i = null;
                        r && "data" === s && (i = r[e]);
                        i = i || n[s]("$" + e + "Controller");
                        if (!i && !a) throw Or("ctreq", e, t);
                    } else ir(e) && (i = [], o(e, function(e) {
                        i.push(v(t, e, n, r));
                    }));
                    return i;
                }
                function y(t, e, a, c, l) {
                    function h(t, e) {
                        var r;
                        2 > arguments.length && (e = t, t = n);
                        U && (r = j);
                        return l(t, e, r);
                    }
                    var d, y, _, w, b, x, j = {}, k;
                    d = i === a ? s : P(s, new Y(Kn(a), s.$attr));
                    y = d.$$element;
                    if (C) {
                        var E = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
                        x = e.$new(!0);
                        !A || A !== C && A !== C.$$originalDirective ? y.data("$isolateScopeNoTemplate", x) : y.data("$isolateScope", x);
                        T(y, "ng-isolate-scope");
                        o(C.scope, function(t, n) {
                            var i = t.match(E) || [], o = i[3] || n, s = "?" == i[2], i = i[1], a, u, c, l;
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
                                u = m(d[o]);
                                l = u.literal ? R : function(t, e) {
                                    return t === e || t !== t && e !== e;
                                };
                                c = u.assign || function() {
                                    a = x[n] = u(e);
                                    throw Or("nonassign", d[o], C.name);
                                };
                                a = x[n] = u(e);
                                x.$watch(function() {
                                    var t = u(e);
                                    l(t, x[n]) || (l(t, a) ? c(e, t = x[n]) : x[n] = t);
                                    return a = t;
                                }, null, u.literal);
                                break;

                              case "&":
                                u = m(d[o]);
                                x[n] = function(t) {
                                    return u(e, t);
                                };
                                break;

                              default:
                                throw Or("iscp", C.name, n, t);
                            }
                        });
                    }
                    k = l && h;
                    S && o(S, function(t) {
                        var n = {
                            $scope: t === C || t.$$isolateScope ? x : e,
                            $element: y,
                            $attrs: d,
                            $transclude: k
                        }, r;
                        b = t.controller;
                        "@" == b && (b = d[t.name]);
                        r = g(b, n);
                        j[t.name] = r;
                        U || y.data("$" + t.name + "Controller", r);
                        t.controllerAs && (n.$scope[t.controllerAs] = r);
                    });
                    c = 0;
                    for (_ = f.length; c < _; c++) try {
                        w = f[c], w(w.isolateScope ? x : e, y, d, w.require && v(w.directiveName, w.require, y, j), k);
                    } catch (O) {
                        u(O, q(y));
                    }
                    c = e;
                    C && (C.template || null === C.templateUrl) && (c = x);
                    t && t(c, a.childNodes, n, l);
                    for (c = p.length - 1; 0 <= c; c--) try {
                        w = p[c], w(w.isolateScope ? x : e, y, d, w.require && v(w.directiveName, w.require, y, j), k);
                    } catch (F) {
                        u(F, q(y));
                    }
                }
                h = h || {};
                for (var b = -Number.MAX_VALUE, x, S = h.controllerDirectives, C = h.newIsolateScopeDirective, A = h.templateDirective, E = h.nonTlbTranscludeDirective, D = !1, I = !1, U = h.hasElementTranscludeDirective, L = s.$$element = Kn(i), z, W, G, K = a, X, Z = 0, ee = t.length; Z < ee; Z++) {
                    z = t[Z];
                    var ne = z.$$start, re = z.$$end;
                    ne && (L = F(i, ne, re));
                    G = n;
                    if (b > z.priority) break;
                    if (G = z.scope) x = x || z, z.templateUrl || (B("new/isolated scope", C, z, L), 
                    _(G) && (C = z));
                    W = z.name;
                    !z.templateUrl && z.controller && (G = z.controller, S = S || {}, B("'" + W + "' controller", S[W], z, L), 
                    S[W] = z);
                    if (G = z.transclude) D = !0, z.$$tlb || (B("transclusion", E, z, L), E = z), "element" == G ? (U = !0, 
                    b = z.priority, G = L, L = s.$$element = Kn(e.createComment(" " + W + ": " + s[W] + " ")), 
                    i = L[0], Q(c, Jn.call(G, 0), i), K = k(G, a, b, l && l.name, {
                        nonTlbTranscludeDirective: E
                    })) : (G = Kn(ie(i)).contents(), L.empty(), K = k(G, a));
                    if (z.template) if (I = !0, B("template", A, z, L), A = z, G = j(z.template) ? z.template(L, s) : z.template, 
                    G = te(G), z.replace) {
                        l = z;
                        G = gr.test(G) ? Kn(or(G)) : [];
                        i = G[0];
                        if (1 != G.length || 1 !== i.nodeType) throw Or("tplrt", W, "");
                        Q(c, L, i);
                        ee = {
                            $attr: {}
                        };
                        G = O(i, [], ee);
                        var $ = t.splice(Z + 1, t.length - (Z + 1));
                        C && N(G);
                        t = t.concat(G).concat($);
                        H(s, ee);
                        ee = t.length;
                    } else L.html(G);
                    if (z.templateUrl) I = !0, B("template", A, z, L), A = z, z.replace && (l = z), 
                    y = V(t.splice(Z, t.length - Z), L, s, c, D && K, f, p, {
                        controllerDirectives: S,
                        newIsolateScopeDirective: C,
                        templateDirective: A,
                        nonTlbTranscludeDirective: E
                    }), ee = t.length; else if (z.compile) try {
                        X = z.compile(L, s, K), j(X) ? d(null, X, ne, re) : X && d(X.pre, X.post, ne, re);
                    } catch (oe) {
                        u(oe, q(L));
                    }
                    z.terminal && (y.terminal = !0, b = Math.max(b, z.priority));
                }
                y.scope = x && !0 === x.scope;
                y.transcludeOnThisElement = D;
                y.templateOnThisElement = I;
                y.transclude = K;
                h.hasElementTranscludeDirective = U;
                return y;
            }
            function N(t) {
                for (var e = 0, n = t.length; e < n; e++) t[e] = h(t[e], {
                    $$isolateScope: !0
                });
            }
            function I(e, r, o, a, c, l, f) {
                if (r === c) return null;
                c = null;
                if (i.hasOwnProperty(r)) {
                    var p;
                    r = t.get(r + s);
                    for (var d = 0, v = r.length; d < v; d++) try {
                        p = r[d], (a === n || a > p.priority) && -1 != p.restrict.indexOf(o) && (l && (p = h(p, {
                            $$start: l,
                            $$end: f
                        })), e.push(p), c = p);
                    } catch (m) {
                        u(m);
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
                    "class" == o ? (T(i, e), t["class"] = (t["class"] ? t["class"] + " " : "") + e) : "style" == o ? (i.attr("style", i.attr("style") + ";" + e), 
                    t.style = (t.style ? t.style + ";" : "") + e) : "$" == o.charAt(0) || t.hasOwnProperty(o) || (t[o] = e, 
                    r[o] = n[o]);
                });
            }
            function V(t, e, n, r, i, s, a, u) {
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
                        f = gr.test(f) ? Kn(or(f)) : [];
                        p = f[0];
                        if (1 != f.length || 1 !== p.nodeType) throw Or("tplrt", m.name, y);
                        f = {
                            $attr: {}
                        };
                        Q(r, e, p);
                        var w = O(p, [], f);
                        _(m.scope) && N(w);
                        t = w.concat(t);
                        H(n, f);
                    } else p = v, e.html(f);
                    t.unshift(g);
                    l = D(t, p, n, i, e, m, s, a, u);
                    o(r, function(t, n) {
                        t == p && (r[n] = e[0]);
                    });
                    for (h = A(e[0].childNodes, i); c.length; ) {
                        f = c.shift();
                        d = c.shift();
                        var b = c.shift(), x = c.shift(), w = e[0];
                        if (d !== v) {
                            var j = d.className;
                            u.hasElementTranscludeDirective && m.replace || (w = ie(p));
                            Q(b, Kn(d), w);
                            T(Kn(w), j);
                        }
                        d = l.transcludeOnThisElement ? E(f, l.transclude, x) : x;
                        l(h, f, w, r, d);
                    }
                    c = null;
                }).error(function(t, e, n, r) {
                    throw Or("tpload", r.url);
                });
                return function(t, e, n, r, i) {
                    t = i;
                    c ? (c.push(e), c.push(n), c.push(r), c.push(t)) : (l.transcludeOnThisElement && (t = E(e, l.transclude, i)), 
                    l(h, e, n, r, t));
                };
            }
            function U(t, e) {
                var n = e.priority - t.priority;
                return 0 !== n ? n : t.name !== e.name ? t.name < e.name ? -1 : 1 : t.index - e.index;
            }
            function B(t, e, n, r) {
                if (e) throw Or("multidir", e.name, n.name, t, q(r));
            }
            function L(t, e) {
                var n = r(e, !0);
                n && t.push({
                    priority: 0,
                    compile: function(t) {
                        var e = t.parent().length;
                        e && T(t.parent(), "ng-binding");
                        return function(t, r) {
                            var i = r.parent(), o = i.data("$binding") || [];
                            o.push(n);
                            i.data("$binding", o);
                            e || T(i, "ng-binding");
                            t.$watch(n, function(t) {
                                r[0].nodeValue = t;
                            });
                        };
                    }
                });
            }
            function z(t, e) {
                if ("srcdoc" == e) return x.HTML;
                var n = nr(t);
                if ("xlinkHref" == e || "FORM" == n && "action" == e || "IMG" != n && ("src" == e || "ngSrc" == e)) return x.RESOURCE_URL;
            }
            function W(t, e, n, i) {
                var o = r(n, !0);
                if (o) {
                    if ("multiple" === i && "SELECT" === nr(t)) throw Or("selmulti", q(t));
                    e.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(e, n, s) {
                                    n = s.$$observers || (s.$$observers = {});
                                    if (l.test(i)) throw Or("nodomevents");
                                    if (o = r(s[i], !0, z(t, i))) s[i] = o(e), (n[i] || (n[i] = [])).$$inter = !0, (s.$$observers && s.$$observers[i].$$scope || e).$watch(o, function(t, e) {
                                        "class" === i && t != e ? s.$updateClass(t, e) : s.$set(i, t);
                                    });
                                }
                            };
                        }
                    });
                }
            }
            function Q(t, n, r) {
                var i = n[0], o = n.length, s = i.parentNode, a, u;
                if (t) for (a = 0, u = t.length; a < u; a++) if (t[a] == i) {
                    t[a++] = r;
                    u = a + o - 1;
                    for (var c = t.length; a < c; a++, u++) u < c ? t[a] = t[u] : delete t[a];
                    t.length -= o - 1;
                    break;
                }
                s && s.replaceChild(r, i);
                t = e.createDocumentFragment();
                t.appendChild(i);
                r[Kn.expando] = i[Kn.expando];
                i = 1;
                for (o = n.length; i < o; i++) s = n[i], Kn(s).remove(), t.appendChild(s), delete n[i];
                n[0] = r;
                n.length = 1;
            }
            function J(t, e) {
                return f(function() {
                    return t.apply(null, arguments);
                }, t, e);
            }
            var Y = function(t, e) {
                this.$$element = t;
                this.$attr = e || {};
            };
            Y.prototype = {
                $normalize: Ee,
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
                    i ? this.$attr[t] = i : (i = this.$attr[t]) || (this.$attr[t] = i = G(t, "-"));
                    s = nr(this.$$element);
                    if ("A" === s && "href" === t || "IMG" === s && "src" === t) this[t] = e = C(e, "src" === t);
                    !1 !== r && (null === e || e === n ? this.$$element.removeAttr(i) : this.$$element.attr(i, e));
                    (r = this.$$observers) && o(r[t], function(t) {
                        try {
                            t(e);
                        } catch (n) {
                            u(n);
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
            return k;
        } ];
    }
    function Ee(t) {
        return ee(t.replace(Pr, ""));
    }
    function Oe(t, e) {
        var n = "", r = t.split(/\s+/), i = e.split(/\s+/), o = 0;
        t: for (;o < r.length; o++) {
            for (var s = r[o], a = 0; a < i.length; a++) if (s == i[a]) continue t;
            n += (0 < n.length ? " " : "") + s;
        }
        return n;
    }
    function Pe() {
        var t = {}, e = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function(e, n) {
            J(e, "controller");
            _(e) ? f(t, e) : t[e] = n;
        };
        this.$get = [ "$injector", "$window", function(n, i) {
            return function(o, s) {
                var a, u, c;
                w(o) && (a = o.match(e), u = a[1], c = a[3], o = t.hasOwnProperty(u) ? t[u] : Y(s.$scope, u, !0) || Y(i, u, !0), 
                Q(o, u, !0));
                a = n.instantiate(o, s);
                if (c) {
                    if (!s || "object" !== typeof s.$scope) throw r("$controller")("noscp", u || o.name, c);
                    s.$scope[c] = a;
                }
                return a;
            };
        } ];
    }
    function Re() {
        this.$get = [ "$window", function(t) {
            return Kn(t.document);
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
            n = Ln(or(t.substr(0, i)));
            r = or(t.substr(i + 1));
            n && (e[n] = e[n] ? e[n] + ", " + r : r);
        });
        return e;
    }
    function De(t) {
        var e = _(t) ? t : n;
        return function(n) {
            e || (e = Me(t));
            return n ? e[Ln(n)] || null : e;
        };
    }
    function Ne(t, e, n) {
        if (j(n)) return n(t, e);
        o(n, function(n) {
            t = n(t, e);
        });
        return t;
    }
    function Ie() {
        var t = /^\s*(\[|\{[^\{])/, e = /[\}\]]\s*$/, r = /^\)\]\}',?\n/, i = {
            "Content-Type": "application/json;charset=utf-8"
        }, s = this.defaults = {
            transformResponse: [ function(n) {
                w(n) && (n = n.replace(r, ""), t.test(n) && e.test(n) && (n = N(n)));
                return n;
            } ],
            transformRequest: [ function(t) {
                return _(t) && "[object File]" !== Xn.call(t) && "[object Blob]" !== Xn.call(t) ? D(t) : t;
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
        }, u = this.interceptors = [], c = this.responseInterceptors = [];
        this.$get = [ "$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(t, e, r, i, l, p) {
            function h(t) {
                function e(t) {
                    var e = f({}, t, {
                        data: Ne(t.data, t.headers, r.transformResponse)
                    });
                    return 200 <= t.status && 300 > t.status ? e : l.reject(e);
                }
                var r = {
                    method: "get",
                    transformRequest: s.transformRequest,
                    transformResponse: s.transformResponse
                }, i = function(t) {
                    var e = s.headers, n = f({}, t.headers), r, i, e = f({}, e.common, e[Ln(t.method)]);
                    t: for (r in e) {
                        t = Ln(r);
                        for (i in n) if (Ln(i) === t) continue t;
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
                var a = [ function(t) {
                    i = t.headers;
                    var n = Ne(t.data, De(i), t.transformRequest);
                    g(n) && o(i, function(t, e) {
                        "content-type" === Ln(e) && delete i[e];
                    });
                    g(t.withCredentials) && !g(s.withCredentials) && (t.withCredentials = s.withCredentials);
                    return d(t, n, i).then(e, e);
                }, n ], u = l.when(r);
                for (o(b, function(t) {
                    (t.request || t.requestError) && a.unshift(t.request, t.requestError);
                    (t.response || t.responseError) && a.push(t.response, t.responseError);
                }); a.length; ) {
                    t = a.shift();
                    var c = a.shift(), u = u.then(t, c);
                }
                u.success = function(t) {
                    u.then(function(e) {
                        t(e.data, e.status, e.headers, r);
                    });
                    return u;
                };
                u.error = function(t) {
                    u.then(null, function(e) {
                        t(e.data, e.status, e.headers, r);
                    });
                    return u;
                };
                return u;
            }
            function d(r, o, a) {
                function u(t, e, n, r) {
                    w && (200 <= t && 300 > t ? w.put(x, [ t, e, Me(n), r ]) : w.remove(x));
                    c(e, t, n, r);
                    i.$$phase || i.$apply();
                }
                function c(t, e, n, i) {
                    e = Math.max(e, 0);
                    (200 <= e && 300 > e ? p.resolve : p.reject)({
                        data: t,
                        status: e,
                        headers: De(n),
                        config: r,
                        statusText: i
                    });
                }
                function f() {
                    var t = A(h.pendingRequests, r);
                    -1 !== t && h.pendingRequests.splice(t, 1);
                }
                var p = l.defer(), d = p.promise, w, b, x = v(r.url, r.params);
                h.pendingRequests.push(r);
                d.then(f, f);
                !r.cache && !s.cache || (!1 === r.cache || "GET" !== r.method && "JSONP" !== r.method) || (w = _(r.cache) ? r.cache : _(s.cache) ? s.cache : m);
                if (w) if (b = w.get(x), y(b)) {
                    if (b && j(b.then)) return b.then(f, f), b;
                    ir(b) ? c(b[1], b[0], P(b[2]), b[3]) : c(b, 200, {}, "OK");
                } else w.put(x, d);
                g(b) && ((b = xn(r.url) ? e.cookies()[r.xsrfCookieName || s.xsrfCookieName] : n) && (a[r.xsrfHeaderName || s.xsrfHeaderName] = b), 
                t(r.method, x, o, u, a, r.timeout, r.withCredentials, r.responseType));
                return d;
            }
            function v(t, e) {
                if (!e) return t;
                var n = [];
                a(e, function(t, e) {
                    null === t || g(t) || (ir(t) || (t = [ t ]), o(t, function(t) {
                        _(t) && (t = x(t) ? t.toISOString() : D(t));
                        n.push(L(e) + "=" + L(t));
                    }));
                });
                0 < n.length && (t += (-1 == t.indexOf("?") ? "?" : "&") + n.join("&"));
                return t;
            }
            var m = r("$http"), b = [];
            o(u, function(t) {
                b.unshift(w(t) ? p.get(t) : p.invoke(t));
            });
            o(c, function(t, e) {
                var n = w(t) ? p.get(t) : p.invoke(t);
                b.splice(e, 0, {
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
    function qe(e) {
        if (8 >= Gn && (!e.match(/^(get|post|head|put|delete|options)$/i) || !t.XMLHttpRequest)) return new t.ActiveXObject("Microsoft.XMLHTTP");
        if (t.XMLHttpRequest) return new t.XMLHttpRequest();
        throw r("$httpBackend")("noxhr");
    }
    function He() {
        this.$get = [ "$browser", "$window", "$document", function(t, e, n) {
            return Ve(t, qe, t.defer, e.angular.callbacks, n[0]);
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
                var a = -1, u = "unknown";
                t && ("load" !== t.type || r[e].called || (t = {
                    type: "error"
                }), u = t.type, a = "error" === t.type ? 404 : 200);
                n && n(a, u);
            };
            fr(o, "load", s);
            fr(o, "error", s);
            8 >= Gn && (o.onreadystatechange = function() {
                w(o.readyState) && /loaded|complete/.test(o.readyState) && (o.onreadystatechange = null, 
                s({
                    type: "load"
                }));
            });
            i.body.appendChild(o);
            return s;
        }
        var a = -1;
        return function(i, u, c, l, f, p, h, v) {
            function m() {
                _ = a;
                b && b();
                x && x.abort();
            }
            function g(e, r, i, o, s) {
                C && n.cancel(C);
                b = x = null;
                0 === r && (r = i ? 200 : "file" == bn(u).protocol ? 404 : 0);
                e(1223 === r ? 204 : r, i, o, s || "");
                t.$$completeOutstandingRequest(d);
            }
            var _;
            t.$$incOutstandingRequestCount();
            u = u || t.url();
            if ("jsonp" == Ln(i)) {
                var w = "_" + (r.counter++).toString(36);
                r[w] = function(t) {
                    r[w].data = t;
                    r[w].called = !0;
                };
                var b = s(u.replace("JSON_CALLBACK", "angular.callbacks." + w), w, function(t, e) {
                    g(l, t, r[w].data, "", e);
                    r[w] = d;
                });
            } else {
                var x = e(i);
                x.open(i, u, !0);
                o(f, function(t, e) {
                    y(t) && x.setRequestHeader(e, t);
                });
                x.onreadystatechange = function() {
                    if (x && 4 == x.readyState) {
                        var t = null, e = null, n = "";
                        _ !== a && (t = x.getAllResponseHeaders(), e = "response" in x ? x.response : x.responseText);
                        _ === a && 10 > Gn || (n = x.statusText);
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
            if (0 < p) var C = n(m, p); else p && j(p.then) && p.then(m);
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
            function o(o, u, c) {
                for (var l, f, p = 0, h = [], d = o.length, v = !1, m = []; p < d; ) -1 != (l = o.indexOf(t, p)) && -1 != (f = o.indexOf(e, l + s)) ? (p != l && h.push(o.substring(p, l)), 
                h.push(p = n(v = o.substring(l + s, f))), p.exp = v, p = f + a, v = !0) : (p != d && h.push(o.substring(p)), 
                p = d);
                (d = h.length) || (h.push(""), d = 1);
                if (c && 1 < h.length) throw Rr("noconcat", o);
                if (!u || v) return m.length = d, p = function(t) {
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
                                s = D(s);
                            }
                            m[e] = s;
                        }
                        return m.join("");
                    } catch (a) {
                        t = Rr("interr", o, a.toString()), r(t);
                    }
                }, p.exp = o, p.parts = h, p;
            }
            var s = t.length, a = e.length;
            o.startSymbol = function() {
                return t;
            };
            o.endSymbol = function() {
                return e;
            };
            return o;
        } ];
    }
    function Be() {
        this.$get = [ "$rootScope", "$window", "$q", function(t, e, n) {
            function r(r, o, s, a) {
                var u = e.setInterval, c = e.clearInterval, l = n.defer(), f = l.promise, p = 0, h = y(a) && !a;
                s = y(s) ? s : 0;
                f.then(null, null, r);
                f.$$intervalId = u(function() {
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
    function Le() {
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
    function ze(t) {
        t = t.split("/");
        for (var e = t.length; e--; ) t[e] = B(t[e]);
        return t.join("/");
    }
    function We(t, e, n) {
        t = bn(t, n);
        e.$$protocol = t.protocol;
        e.$$host = t.hostname;
        e.$$port = p(t.port) || Mr[t.protocol] || null;
    }
    function Ge(t, e, n) {
        var r = "/" !== t.charAt(0);
        r && (t = "/" + t);
        t = bn(t, n);
        e.$$path = decodeURIComponent(r && "/" === t.pathname.charAt(0) ? t.pathname.substring(1) : t.pathname);
        e.$$search = V(t.search);
        e.$$hash = decodeURIComponent(t.hash);
        e.$$path && "/" != e.$$path.charAt(0) && (e.$$path = "/" + e.$$path);
    }
    function Ke(t, e) {
        if (0 === e.indexOf(t)) return e.substr(t.length);
    }
    function Qe(t) {
        var e = t.indexOf("#");
        return -1 == e ? t : t.substr(0, e);
    }
    function Je(t) {
        return t.substr(0, Qe(t).lastIndexOf("/") + 1);
    }
    function Ye(t, e) {
        this.$$html5 = !0;
        e = e || "";
        var r = Je(t);
        We(t, this, t);
        this.$$parse = function(e) {
            var n = Ke(r, e);
            if (!w(n)) throw Dr("ipthprfx", e, r);
            Ge(n, this, t);
            this.$$path || (this.$$path = "/");
            this.$$compose();
        };
        this.$$compose = function() {
            var t = U(this.$$search), e = this.$$hash ? "#" + B(this.$$hash) : "";
            this.$$url = ze(this.$$path) + (t ? "?" + t : "") + e;
            this.$$absUrl = r + this.$$url.substr(1);
        };
        this.$$rewrite = function(i) {
            var o;
            if ((o = Ke(t, i)) !== n) return i = o, (o = Ke(e, o)) !== n ? r + (Ke("/", o) || o) : t + i;
            if ((o = Ke(r, i)) !== n) return r + o;
            if (r == i + "/") return r;
        };
    }
    function Xe(t, e) {
        var n = Je(t);
        We(t, this, t);
        this.$$parse = function(r) {
            var i = Ke(t, r) || Ke(n, r), i = "#" == i.charAt(0) ? Ke(e, i) : this.$$html5 ? i : "";
            if (!w(i)) throw Dr("ihshprfx", r, e);
            Ge(i, this, t);
            r = this.$$path;
            var o = /^\/[A-Z]:(\/.*)/;
            0 === i.indexOf(t) && (i = i.replace(t, ""));
            o.exec(i) || (r = (i = o.exec(r)) ? i[1] : r);
            this.$$path = r;
            this.$$compose();
        };
        this.$$compose = function() {
            var n = U(this.$$search), r = this.$$hash ? "#" + B(this.$$hash) : "";
            this.$$url = ze(this.$$path) + (n ? "?" + n : "") + r;
            this.$$absUrl = t + (this.$$url ? e + this.$$url : "");
        };
        this.$$rewrite = function(e) {
            if (Qe(t) == Qe(e)) return e;
        };
    }
    function Ze(t, e) {
        this.$$html5 = !0;
        Xe.apply(this, arguments);
        var n = Je(t);
        this.$$rewrite = function(r) {
            var i;
            if (t == Qe(r)) return r;
            if (i = Ke(n, r)) return t + e + i;
            if (n === r + "/") return n;
        };
        this.$$compose = function() {
            var n = U(this.$$search), r = this.$$hash ? "#" + B(this.$$hash) : "";
            this.$$url = ze(this.$$path) + (n ? "?" + n : "") + r;
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
            function a(t) {
                r.$broadcast("$locationChangeSuccess", u.absUrl(), t);
            }
            var u, c, l = i.baseHref(), f = i.url(), p;
            n ? (p = f.substring(0, f.indexOf("/", f.indexOf("//") + 2)) + (l || "/"), c = o.history ? Ye : Ze) : (p = Qe(f), 
            c = Xe);
            u = new c(p, "#" + e);
            u.$$parse(u.$$rewrite(f));
            var h = /^\s*(javascript|mailto):/i;
            s.on("click", function(n) {
                if (!n.ctrlKey && !n.metaKey && 2 != n.which) {
                    for (var o = Kn(n.target); "a" !== Ln(o[0].nodeName); ) if (o[0] === s[0] || !(o = o.parent())[0]) return;
                    var a = o.prop("href");
                    _(a) && "[object SVGAnimatedString]" === a.toString() && (a = bn(a.animVal).href);
                    if (!h.test(a)) {
                        if (c === Ze) {
                            var l = o.attr("href") || o.attr("xlink:href");
                            if (l && 0 > l.indexOf("://")) if (a = "#" + e, "/" == l[0]) a = p + a + l; else if ("#" == l[0]) a = p + a + (u.path() || "/") + l; else {
                                var f = u.path().split("/"), l = l.split("/");
                                2 !== f.length || f[1] || (f.length = 1);
                                for (var d = 0; d < l.length; d++) "." != l[d] && (".." == l[d] ? f.pop() : l[d].length && f.push(l[d]));
                                a = p + a + f.join("/");
                            }
                        }
                        f = u.$$rewrite(a);
                        a && (!o.attr("target") && f && !n.isDefaultPrevented()) && (n.preventDefault(), 
                        f != i.url() && (u.$$parse(f), r.$apply(), t.angular["ff-684208-preventDefault"] = !0));
                    }
                }
            });
            u.absUrl() != f && i.url(u.absUrl(), !0);
            i.onUrlChange(function(t) {
                u.absUrl() != t && (r.$evalAsync(function() {
                    var e = u.absUrl();
                    u.$$parse(t);
                    r.$broadcast("$locationChangeStart", t, e).defaultPrevented ? (u.$$parse(e), i.url(e)) : a(e);
                }), r.$$phase || r.$digest());
            });
            var d = 0;
            r.$watch(function() {
                var t = i.url(), e = u.$$replace;
                d && t == u.absUrl() || (d++, r.$evalAsync(function() {
                    r.$broadcast("$locationChangeStart", u.absUrl(), t).defaultPrevented ? u.$$parse(t) : (i.url(u.absUrl(), e), 
                    a(t));
                }));
                u.$$replace = !1;
                return d;
            });
            return u;
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
        if ("__defineGetter__" === t || "__defineSetter__" === t || "__lookupGetter__" === t || "__lookupSetter__" === t || "__proto__" === t) throw Nr("isecfld", e);
        return t;
    }
    function sn(t, e) {
        if (t) {
            if (t.constructor === t) throw Nr("isecfn", e);
            if (t.document && t.location && t.alert && t.setInterval) throw Nr("isecwindow", e);
            if (t.children && (t.nodeName || t.prop && t.attr && t.find)) throw Nr("isecdom", e);
            if (t === Object) throw Nr("isecobj", e);
        }
        return t;
    }
    function an(t, e, r, i, o) {
        sn(t, i);
        o = o || {};
        e = e.split(".");
        for (var s, a = 0; 1 < e.length; a++) {
            s = on(e.shift(), i);
            var u = sn(t[s], i);
            u || (u = {}, t[s] = u);
            t = u;
            t.then && o.unwrapPromises && (qr(i), "$$v" in t || function(t) {
                t.then(function(e) {
                    t.$$v = e;
                });
            }(t), t.$$v === n && (t.$$v = {}), t = t.$$v);
        }
        s = on(e.shift(), i);
        sn(t[s], i);
        return t[s] = r;
    }
    function un(t, e, r, i, o, s, a) {
        on(t, s);
        on(e, s);
        on(r, s);
        on(i, s);
        on(o, s);
        return a.unwrapPromises ? function(a, u) {
            var c = u && u.hasOwnProperty(t) ? u : a, l;
            if (null == c) return c;
            (c = c[t]) && c.then && (qr(s), "$$v" in c || (l = c, l.$$v = n, l.then(function(t) {
                l.$$v = t;
            })), c = c.$$v);
            if (!e) return c;
            if (null == c) return n;
            (c = c[e]) && c.then && (qr(s), "$$v" in c || (l = c, l.$$v = n, l.then(function(t) {
                l.$$v = t;
            })), c = c.$$v);
            if (!r) return c;
            if (null == c) return n;
            (c = c[r]) && c.then && (qr(s), "$$v" in c || (l = c, l.$$v = n, l.then(function(t) {
                l.$$v = t;
            })), c = c.$$v);
            if (!i) return c;
            if (null == c) return n;
            (c = c[i]) && c.then && (qr(s), "$$v" in c || (l = c, l.$$v = n, l.then(function(t) {
                l.$$v = t;
            })), c = c.$$v);
            if (!o) return c;
            if (null == c) return n;
            (c = c[o]) && c.then && (qr(s), "$$v" in c || (l = c, l.$$v = n, l.then(function(t) {
                l.$$v = t;
            })), c = c.$$v);
            return c;
        } : function(s, a) {
            var u = a && a.hasOwnProperty(t) ? a : s;
            if (null == u) return u;
            u = u[t];
            if (!e) return u;
            if (null == u) return n;
            u = u[e];
            if (!r) return u;
            if (null == u) return n;
            u = u[r];
            if (!i) return u;
            if (null == u) return n;
            u = u[i];
            return o ? null == u ? n : u = u[o] : u;
        };
    }
    function cn(t, e, r) {
        if (Gr.hasOwnProperty(t)) return Gr[t];
        var i = t.split("."), s = i.length, a;
        if (e.csp) a = 6 > s ? un(i[0], i[1], i[2], i[3], i[4], r, e) : function(t, o) {
            var a = 0, u;
            do u = un(i[a++], i[a++], i[a++], i[a++], i[a++], r, e)(t, o), o = n, t = u; while (a < s);
            return u;
        }; else {
            var u = "var p;\n";
            o(i, function(t, n) {
                on(t, r);
                u += "if(s == null) return undefined;\ns=" + (n ? "s" : '((k&&k.hasOwnProperty("' + t + '"))?k:s)') + '["' + t + '"];\n' + (e.unwrapPromises ? 'if (s && s.then) {\n pw("' + r.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n' : "");
            });
            var u = u + "return s;", c = new Function("s", "k", "pw", u);
            c.toString = m(u);
            a = e.unwrapPromises ? function(t, e) {
                return c(t, e, qr);
            } : c;
        }
        "hasOwnProperty" !== t && (Gr[t] = a);
        return a;
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
            qr = function(t) {
                e.logPromiseWarnings && !Ir.hasOwnProperty(t) && (Ir[t] = !0, i.warn("[$parse] Promise found in the expression `" + t + "`. Automatic unwrapping of promises in Angular expressions is deprecated."));
            };
            return function(r) {
                var i;
                switch (typeof r) {
                  case "string":
                    if (t.hasOwnProperty(r)) return t[r];
                    i = new zr(e);
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
            return u(t);
        }
        var s = function() {
            var o = [], u, l;
            return l = {
                resolve: function(e) {
                    if (o) {
                        var r = o;
                        o = n;
                        u = a(e);
                        r.length && t(function() {
                            for (var t, e = 0, n = r.length; e < n; e++) t = r[e], u.then(t[0], t[1], t[2]);
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
                    then: function(t, n, a) {
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
                                c.notify((j(a) ? a : r)(t));
                            } catch (n) {
                                e(n);
                            }
                        };
                        o ? o.push([ l, f, p ]) : u.then(l, f, p);
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
        }, a = function(e) {
            return e && j(e.then) ? e : {
                then: function(n) {
                    var r = s();
                    t(function() {
                        r.resolve(n(e));
                    });
                    return r.promise;
                }
            };
        }, u = function(t) {
            var e = s();
            e.reject(t);
            return e.promise;
        }, c = function(n) {
            return {
                then: function(r, o) {
                    var a = s();
                    t(function() {
                        try {
                            a.resolve((j(o) ? o : i)(n));
                        } catch (t) {
                            a.reject(t), e(t);
                        }
                    });
                    return a.promise;
                }
            };
        };
        return {
            defer: s,
            reject: u,
            when: function(n, o, c, l) {
                var f = s(), p, h = function(t) {
                    try {
                        return (j(o) ? o : r)(t);
                    } catch (n) {
                        return e(n), u(n);
                    }
                }, d = function(t) {
                    try {
                        return (j(c) ? c : i)(t);
                    } catch (n) {
                        return e(n), u(n);
                    }
                }, v = function(t) {
                    try {
                        return (j(l) ? l : r)(t);
                    } catch (n) {
                        e(n);
                    }
                };
                t(function() {
                    a(n).then(function(t) {
                        p || (p = !0, f.resolve(a(t).then(h, d, v)));
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
                    a(t).then(function(t) {
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
        this.$get = [ "$injector", "$exceptionHandler", "$parse", "$browser", function(r, s, a, u) {
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
                var n = a(t);
                Q(n, e);
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
                        var a = p(e || d, "listener");
                        s.fn = function(t, e, n) {
                            a(n);
                        };
                    }
                    if ("string" == typeof t && i.constant) {
                        var u = s.fn;
                        s.fn = function(t, e, n) {
                            u.call(this, t, e, n);
                            E(o, s);
                        };
                    }
                    o || (o = this.$$watchers = []);
                    o.unshift(s);
                    return function() {
                        E(o, s);
                        n = null;
                    };
                },
                $watchCollection: function(t, e) {
                    var n = this, r, o, s, u = 1 < e.length, c = 0, l = a(t), f = [], p = {}, h = !0, d = 0;
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
                        if (u) if (_(r)) if (i(r)) {
                            s = Array(r.length);
                            for (var t = 0; t < r.length; t++) s[t] = r[t];
                        } else for (t in s = {}, r) zn.call(r, t) && (s[t] = r[t]); else s = r;
                    });
                },
                $digest: function() {
                    var r, i, o, a, c = this.$$asyncQueue, l = this.$$postDigestQueue, p, h, d = t, g, y = [], _, w, b;
                    f("$digest");
                    u.$$checkUrlChange();
                    n = null;
                    do {
                        h = !1;
                        for (g = this; c.length; ) {
                            try {
                                b = c.shift(), b.scope.$eval(b.expression);
                            } catch (x) {
                                m.$$phase = null, s(x);
                            }
                            n = null;
                        }
                        t: do {
                            if (a = g.$$watchers) for (p = a.length; p--; ) try {
                                if (r = a[p]) if ((i = r.get(g)) !== (o = r.last) && !(r.eq ? R(i, o) : "number" === typeof i && "number" === typeof o && isNaN(i) && isNaN(o))) h = !0, 
                                n = r, r.last = r.eq ? O(i, null) : i, r.fn(i, o === v ? i : o, g), 5 > d && (_ = 4 - d, 
                                y[_] || (y[_] = []), w = j(r.exp) ? "fn: " + (r.exp.name || r.exp.toString()) : r.exp, 
                                w += "; newVal: " + D(i) + "; oldVal: " + D(o), y[_].push(w)); else if (r === n) {
                                    h = !1;
                                    break t;
                                }
                            } catch (S) {
                                m.$$phase = null, s(S);
                            }
                            if (!(a = g.$$childHead || g !== this && g.$$nextSibling)) for (;g !== this && !(a = g.$$nextSibling); ) g = g.$parent;
                        } while (g = a);
                        if ((h || c.length) && !d--) throw m.$$phase = null, e("infdig", t, D(y));
                    } while (h || c.length);
                    for (m.$$phase = null; l.length; ) try {
                        l.shift()();
                    } catch (C) {
                        s(C);
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
                    return a(t)(this, e);
                },
                $evalAsync: function(t) {
                    m.$$phase || m.$$asyncQueue.length || u.defer(function() {
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
                        n[A(n, e)] = null;
                        h(i, 1, t);
                    };
                },
                $emit: function(t, e) {
                    var n = [], r, i = this, o = !1, a = {
                        name: t,
                        targetScope: i,
                        stopPropagation: function() {
                            o = !0;
                        },
                        preventDefault: function() {
                            a.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    }, u = [ a ].concat(Jn.call(arguments, 1)), c, l;
                    do {
                        r = i.$$listeners[t] || n;
                        a.currentScope = i;
                        c = 0;
                        for (l = r.length; c < l; c++) if (r[c]) try {
                            r[c].apply(null, u);
                        } catch (f) {
                            s(f);
                        } else r.splice(c, 1), c--, l--;
                        if (o) break;
                        i = i.$parent;
                    } while (i);
                    return a;
                },
                $broadcast: function(t, e) {
                    for (var n = this, r = this, i = {
                        name: t,
                        targetScope: this,
                        preventDefault: function() {
                            i.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    }, o = [ i ].concat(Jn.call(arguments, 1)), a, u; n = r; ) {
                        i.currentScope = n;
                        r = n.$$listeners[t] || [];
                        a = 0;
                        for (u = r.length; a < u; a++) if (r[a]) try {
                            r[a].apply(null, o);
                        } catch (c) {
                            s(c);
                        } else r.splice(a, 1), a--, u--;
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
                if (!Gn || 8 <= Gn) if (o = bn(n).href, "" !== o && !o.match(i)) return "unsafe:" + o;
                return n;
            };
        };
    }
    function mn(t) {
        if ("self" === t) return t;
        if (w(t)) {
            if (-1 < t.indexOf("***")) throw Kr("iwcard", t);
            t = t.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");
            return RegExp("^" + t + "$");
        }
        if (S(t)) return RegExp("^" + t.source + "$");
        throw Kr("imatcher");
    }
    function gn(t) {
        var e = [];
        y(t) && o(t, function(t) {
            e.push(mn(t));
        });
        return e;
    }
    function yn() {
        this.SCE_CONTEXTS = Qr;
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
                throw Kr("unsafe");
            };
            r.has("$sanitize") && (o = r.get("$sanitize"));
            var s = i(), a = {};
            a[Qr.HTML] = i(s);
            a[Qr.CSS] = i(s);
            a[Qr.URL] = i(s);
            a[Qr.JS] = i(s);
            a[Qr.RESOURCE_URL] = i(a[Qr.URL]);
            return {
                trustAs: function(t, e) {
                    var r = a.hasOwnProperty(t) ? a[t] : null;
                    if (!r) throw Kr("icontext", t, e);
                    if (null === e || e === n || "" === e) return e;
                    if ("string" !== typeof e) throw Kr("itype", t);
                    return new r(e);
                },
                getTrusted: function(r, i) {
                    if (null === i || i === n || "" === i) return i;
                    var s = a.hasOwnProperty(r) ? a[r] : null;
                    if (s && i instanceof s) return i.$$unwrapTrustedValue();
                    if (r === Qr.RESOURCE_URL) {
                        var s = bn(i.toString()), u, c, l = !1;
                        u = 0;
                        for (c = t.length; u < c; u++) if ("self" === t[u] ? xn(s) : t[u].exec(s.href)) {
                            l = !0;
                            break;
                        }
                        if (l) for (u = 0, c = e.length; u < c; u++) if ("self" === e[u] ? xn(s) : e[u].exec(s.href)) {
                            l = !1;
                            break;
                        }
                        if (l) return i;
                        throw Kr("insecurl", i.toString());
                    }
                    if (r === Qr.HTML) return o(i);
                    throw Kr("unsafe");
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
            if (t && n.msie && 8 > n.msieDocumentMode) throw Kr("iequirks");
            var i = P(Qr);
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
            var s = i.parseAs, a = i.getTrusted, u = i.trustAs;
            o(Qr, function(t, e) {
                var n = Ln(e);
                i[ee("parse_as_" + n)] = function(e) {
                    return s(t, e);
                };
                i[ee("get_trusted_" + n)] = function(e) {
                    return a(t, e);
                };
                i[ee("trust_as_" + n)] = function(e) {
                    return u(t, e);
                };
            });
            return i;
        } ];
    }
    function _n() {
        this.$get = [ "$window", "$document", function(t, e) {
            var n = {}, r = p((/android (\d+)/.exec(Ln((t.navigator || {}).userAgent)) || [])[1]), i = /Boxee/i.test((t.navigator || {}).userAgent), o = e[0] || {}, s = o.documentMode, a, u = /^(Moz|webkit|O|ms)(?=[A-Z])/, c = o.body && o.body.style, l = !1, f = !1;
            if (c) {
                for (var h in c) if (l = u.exec(h)) {
                    a = l[0];
                    a = a.substr(0, 1).toUpperCase() + a.substr(1);
                    break;
                }
                a || (a = "WebkitOpacity" in c && "webkit");
                l = !!("transition" in c || a + "Transition" in c);
                f = !!("animation" in c || a + "Animation" in c);
                !r || l && f || (l = w(o.body.style.webkitTransition), f = w(o.body.style.webkitAnimation));
            }
            return {
                history: !(!t.history || !t.history.pushState || 4 > r || i),
                hashchange: "onhashchange" in t && (!s || 7 < s),
                hasEvent: function(t) {
                    if ("input" == t && 9 == Gn) return !1;
                    if (g(n[t])) {
                        var e = o.createElement("div");
                        n[t] = "on" + t in e;
                    }
                    return n[t];
                },
                csp: sr(),
                vendorPrefix: a,
                transitions: l,
                animations: f,
                android: r,
                msie: Gn,
                msieDocumentMode: s
            };
        } ];
    }
    function wn() {
        this.$get = [ "$rootScope", "$browser", "$q", "$exceptionHandler", function(t, e, n, r) {
            function i(i, s, a) {
                var u = n.defer(), c = u.promise, l = y(a) && !a;
                s = e.defer(function() {
                    try {
                        u.resolve(i());
                    } catch (e) {
                        u.reject(e), r(e);
                    } finally {
                        delete o[c.$$timeoutId];
                    }
                    l || t.$apply();
                }, s);
                c.$$timeoutId = s;
                o[s] = u;
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
    function bn(t, e) {
        var n = t;
        Gn && (Jr.setAttribute("href", n), n = Jr.href);
        Jr.setAttribute("href", n);
        return {
            href: Jr.href,
            protocol: Jr.protocol ? Jr.protocol.replace(/:$/, "") : "",
            host: Jr.host,
            search: Jr.search ? Jr.search.replace(/^\?/, "") : "",
            hash: Jr.hash ? Jr.hash.replace(/^#/, "") : "",
            hostname: Jr.hostname,
            port: Jr.port,
            pathname: "/" === Jr.pathname.charAt(0) ? Jr.pathname : "/" + Jr.pathname
        };
    }
    function xn(t) {
        t = w(t) ? bn(t) : t;
        return t.protocol === Yr.protocol && t.host === Yr.host;
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
        e("currency", kn);
        e("date", Pn);
        e("filter", Cn);
        e("json", Rn);
        e("limitTo", Fn);
        e("lowercase", ni);
        e("number", Tn);
        e("orderBy", Mn);
        e("uppercase", ri);
    }
    function Cn() {
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
                    for (var r in t) if ("$" !== r.charAt(0) && zn.call(t, r) && n(t[r], e[r])) return !0;
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
                var a = t[s];
                i.check(a) && r.push(a);
            }
            return r;
        };
    }
    function kn(t) {
        var e = t.NUMBER_FORMATS;
        return function(t, n) {
            g(n) && (n = e.CURRENCY_SYM);
            return An(t, e.PATTERNS[1], e.GROUP_SEP, e.DECIMAL_SEP, 2).replace(/\u00A4/g, n);
        };
    }
    function Tn(t) {
        var e = t.NUMBER_FORMATS;
        return function(t, n) {
            return An(t, e.PATTERNS[0], e.GROUP_SEP, e.DECIMAL_SEP, n);
        };
    }
    function An(t, e, n, r, i) {
        if (null == t || !isFinite(t) || _(t)) return "";
        var o = 0 > t;
        t = Math.abs(t);
        var s = t + "", a = "", u = [], c = !1;
        if (-1 !== s.indexOf("e")) {
            var l = s.match(/([\d\.]+)e(-?)(\d+)/);
            l && "-" == l[2] && l[3] > i + 1 ? (s = "0", t = 0) : (a = s, c = !0);
        }
        if (c) 0 < i && (-1 < t && 1 > t) && (a = t.toFixed(i)); else {
            s = (s.split(Xr)[1] || "").length;
            g(i) && (i = Math.min(Math.max(e.minFrac, s), e.maxFrac));
            t = +(Math.round(+(t.toString() + "e" + i)).toString() + "e" + -i);
            0 === t && (o = !1);
            t = ("" + t).split(Xr);
            s = t[0];
            t = t[1] || "";
            var l = 0, f = e.lgSize, p = e.gSize;
            if (s.length >= f + p) for (l = s.length - f, c = 0; c < l; c++) 0 === (l - c) % p && 0 !== c && (a += n), 
            a += s.charAt(c);
            for (c = l; c < s.length; c++) 0 === (s.length - c) % f && 0 !== c && (a += n), 
            a += s.charAt(c);
            for (;t.length < i; ) t += "0";
            i && "0" !== i && (a += r + t.substr(0, i));
        }
        u.push(o ? e.negPre : e.posPre);
        u.push(a);
        u.push(o ? e.negSuf : e.posSuf);
        return u.join("");
    }
    function En(t, e, n) {
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
            return En(i, e, r);
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
            var i = "", s = [], a, u;
            r = r || "mediumDate";
            r = t.DATETIME_FORMATS[r] || r;
            w(n) && (n = ei.test(n) ? p(n) : e(n));
            b(n) && (n = new Date(n));
            if (!x(n)) return n;
            for (;r; ) (u = ti.exec(r)) ? (s = s.concat(Jn.call(u, 1)), r = s.pop()) : (s.push(r), 
            r = null);
            o(s, function(e) {
                a = Zr[e];
                i += a ? a(n, t.DATETIME_FORMATS) : e.replace(/(^'|'$)/g, "").replace(/''/g, "'");
            });
            return i;
        };
    }
    function Rn() {
        return function(t) {
            return D(t, !0);
        };
    }
    function Fn() {
        return function(t, e) {
            if (!ir(t) && !w(t)) return t;
            e = Infinity === Math.abs(Number(e)) ? Number(e) : p(e);
            if (w(t)) return e ? 0 <= e ? t.slice(0, e) : t.slice(e, t.length) : "";
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
                return I(e) ? function(e, n) {
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
            n = T(n, function(e) {
                var n = !1, r = e || v;
                if (w(e)) {
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
            for (var a = [], u = 0; u < e.length; u++) a.push(e[u]);
            return a.sort(o(function(t, e) {
                for (var r = 0; r < n.length; r++) {
                    var i = n[r](t, e);
                    if (0 !== i) return i;
                }
                return 0;
            }, r));
        };
    }
    function Dn(t) {
        j(t) && (t = {
            link: t
        });
        t.restrict = t.restrict || "AC";
        return m(t);
    }
    function Nn(t, e, n, r) {
        function i(e, n) {
            n = n ? "-" + G(n, "-") : "";
            r.setClass(t, (e ? mi : gi) + n, (e ? gi : mi) + n);
        }
        var s = this, a = t.parent().controller("form") || si, u = 0, c = s.$error = {}, l = [];
        s.$name = e.name || e.ngForm;
        s.$dirty = !1;
        s.$pristine = !0;
        s.$valid = !0;
        s.$invalid = !1;
        a.$addControl(s);
        t.addClass(yi);
        i(!0);
        s.$addControl = function(t) {
            J(t.$name, "input");
            l.push(t);
            t.$name && (s[t.$name] = t);
        };
        s.$removeControl = function(t) {
            t.$name && s[t.$name] === t && delete s[t.$name];
            o(c, function(e, n) {
                s.$setValidity(n, !0, t);
            });
            E(l, t);
        };
        s.$setValidity = function(t, e, n) {
            var r = c[t];
            if (e) r && (E(r, n), r.length || (u--, u || (i(e), s.$valid = !0, s.$invalid = !1), 
            c[t] = !1, i(!0, t), a.$setValidity(t, !0, s))); else {
                u || i(e);
                if (r) {
                    if (-1 != A(r, n)) return;
                } else c[t] = r = [], u++, i(!1, t), a.$setValidity(t, !1, s);
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
            a.$setDirty();
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
    function In(t, e, r, i) {
        t.$setValidity(e, r);
        return r ? i : n;
    }
    function qn(t, e) {
        var n, r;
        if (e) for (n = 0; n < e.length; ++n) if (r = e[n], t[r]) return !0;
        return !1;
    }
    function Hn(t, e, n, r, i) {
        _(i) && (t.$$hasNativeValidators = !0, t.$parsers.push(function(o) {
            if (t.$error[e] || qn(i, r) || !qn(i, n)) return o;
            t.$setValidity(e, !1);
        }));
    }
    function Vn(t, e, n, i, o, s) {
        var a = e.prop(Bn), u = e[0].placeholder, c = {}, l = Ln(e[0].type);
        i.$$validityState = a;
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
                if (Gn && "input" === (r || c).type && e[0].placeholder !== u) u = e[0].placeholder; else if ("password" !== l && I(n.ngTrim || "T") && (o = or(o)), 
                r = a && i.$$hasNativeValidators, i.$viewValue !== o || "" === o && r) t.$root.$$phase ? i.$setViewValue(o) : t.$apply(function() {
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
            return In(i, "pattern", i.$isEmpty(t) || m.test(t), t);
        }) : o = function(n) {
            var o = t.$eval(m);
            if (!o || !o.test) throw r("ngPattern")("noregexp", m, o, q(e));
            return In(i, "pattern", i.$isEmpty(n) || o.test(n), n);
        }, i.$formatters.push(o), i.$parsers.push(o));
        if (n.ngMinlength) {
            var g = p(n.ngMinlength);
            o = function(t) {
                return In(i, "minlength", i.$isEmpty(t) || t.length >= g, t);
            };
            i.$parsers.push(o);
            i.$formatters.push(o);
        }
        if (n.ngMaxlength) {
            var y = p(n.ngMaxlength);
            o = function(t) {
                return In(i, "maxlength", i.$isEmpty(t) || t.length <= y, t);
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
                    if (w(t)) return t.split(" ");
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
                link: function(s, a, u) {
                    function c(t, e) {
                        var n = a.data("$classCounts") || {}, r = [];
                        o(t, function(t) {
                            if (0 < e || n[t]) n[t] = (n[t] || 0) + e, n[t] === +(0 < e) && r.push(t);
                        });
                        a.data("$classCounts", n);
                        return r.join(" ");
                    }
                    function l(t) {
                        if (!0 === e || s.$index % 2 === e) {
                            var o = i(t || []);
                            if (!f) {
                                var l = c(o, 1);
                                u.$addClass(l);
                            } else if (!R(t, f)) {
                                var p = i(f), l = r(o, p), o = r(p, o), o = c(o, -1), l = c(l, 1);
                                0 === l.length ? n.removeClass(a, o) : 0 === o.length ? n.addClass(a, l) : n.setClass(a, l, o);
                            }
                        }
                        f = P(t);
                    }
                    var f;
                    s.$watch(u[t], l, !0);
                    u.$observe("class", function(e) {
                        l(s.$eval(u[t]));
                    });
                    "ngClass" !== t && s.$watch("$index", function(n, r) {
                        var o = n & 1;
                        if (o !== (r & 1)) {
                            var a = i(s.$eval(u[t]));
                            o === e ? (o = c(a, 1), u.$addClass(o)) : (o = c(a, -1), u.$removeClass(o));
                        }
                    });
                }
            };
        } ];
    }
    var Bn = "validity", Ln = function(t) {
        return w(t) ? t.toLowerCase() : t;
    }, zn = Object.prototype.hasOwnProperty, Wn = function(t) {
        return w(t) ? t.toUpperCase() : t;
    }, Gn, Kn, Qn, Jn = [].slice, Yn = [].push, Xn = Object.prototype.toString, Zn = r("ng"), tr = t.angular || (t.angular = {}), er, nr, rr = [ "0", "0", "0" ];
    Gn = p((/msie (\d+)/.exec(Ln(navigator.userAgent)) || [])[1]);
    isNaN(Gn) && (Gn = p((/trident\/.*; rv:(\d+)/.exec(Ln(navigator.userAgent)) || [])[1]));
    d.$inject = [];
    v.$inject = [];
    var ir = function() {
        return j(Array.isArray) ? Array.isArray : function(t) {
            return "[object Array]" === Xn.call(t);
        };
    }(), or = function() {
        return String.prototype.trim ? function(t) {
            return w(t) ? t.trim() : t;
        } : function(t) {
            return w(t) ? t.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : t;
        };
    }();
    nr = 9 > Gn ? function(t) {
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
    }, ar = /[A-Z]/g, ur = {
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
    var wr = re.prototype = {
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
            return 0 <= t ? Kn(this[t]) : Kn(this[this.length + t]);
        },
        length: 0,
        push: Yn,
        sort: [].sort,
        splice: [].splice
    }, br = {};
    o("multiple selected checked disabled readOnly required open".split(" "), function(t) {
        br[Ln(t)] = t;
    });
    var xr = {};
    o("input select option textarea button form details".split(" "), function(t) {
        xr[Wn(t)] = !0;
    });
    o({
        data: ce,
        removeData: ae
    }, function(t, e) {
        re[e] = t;
    });
    o({
        data: ce,
        inheritedData: ve,
        scope: function(t) {
            return Kn.data(t, "$scope") || ve(t.parentNode || t, [ "$isolateScope", "$scope" ]);
        },
        isolateScope: function(t) {
            return Kn.data(t, "$isolateScope") || Kn.data(t, "$isolateScopeNoTemplate");
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
                8 >= Gn && (i = t.currentStyle && t.currentStyle[e], "" === i && (i = "auto"));
                i = i || t.style[e];
                8 >= Gn && (i = "" === i ? n : i);
                return i;
            }
        },
        attr: function(t, e, r) {
            var i = Ln(e);
            if (br[i]) if (y(r)) r ? (t[e] = !0, t.setAttribute(e, i)) : (t[e] = !1, t.removeAttribute(i)); else return t[e] || (t.attributes.getNamedItem(e) || d).specified ? i : n; else if (y(r)) t.setAttribute(e, r); else if (t.getAttribute) return t = t.getAttribute(e, 2), 
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
            9 > Gn ? (e[1] = "innerText", e[3] = "nodeValue") : e[1] = e[3] = "textContent";
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
                    var a = t(this[o], e, r);
                    i = i ? i + a : a;
                }
                return i;
            }
            for (i = 0; i < s; i++) t(this[i], e, r);
            return this;
        };
    });
    o({
        removeData: ae,
        dealoc: oe,
        on: function ro(t, n, r, i) {
            if (y(i)) throw vr("onargs");
            var s = ue(t, "events"), a = ue(t, "handle");
            s || ue(t, "events", s = {});
            a || ue(t, "handle", a = ye(t, s));
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
                            e && (e === this || o(this, e)) || a(t, n);
                        });
                    } else fr(t, n, a), s[n] = [];
                    i = s[n];
                }
                i.push(r);
            });
        },
        off: se,
        one: function(t, e, n) {
            t = Kn(t);
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
            e = Kn(e)[0];
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
            var s = (ue(t, "events") || {})[r];
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
            for (var i, o = 0; o < this.length; o++) g(i) ? (i = t(this[o], e, n, r), y(i) && (i = Kn(i))) : he(i, t(this[o], e, n, r));
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
    var jr = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, Sr = /,/, Cr = /^\s*(_?)(\S+?)\1\s*$/, kr = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, Tr = r("$injector"), Ar = r("$animate"), Er = [ "$provide", function(t) {
        this.$$selectors = {};
        this.register = function(e, n) {
            var r = e + "-animation";
            if (e && "." != e.charAt(0)) throw Ar("notcsel", e);
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
                    n = w(n) ? n : ir(n) ? n.join(" ") : "";
                    o(t, function(t) {
                        pe(t, n);
                    });
                    r && e(r);
                },
                removeClass: function(t, n, r) {
                    n = w(n) ? n : ir(n) ? n.join(" ") : "";
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
    Ae.$inject = [ "$provide", "$$sanitizeUriProvider" ];
    var Pr = /^(x[\:\-_]|data[\:\-_])/i, Rr = r("$interpolate"), Fr = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, Mr = {
        http: 80,
        https: 443,
        ftp: 21
    }, Dr = r("$location");
    Ze.prototype = Xe.prototype = Ye.prototype = {
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
                if (w(t) || b(t)) t = t.toString(), this.$$search = V(t); else if (_(t)) o(t, function(e, n) {
                    null == e && delete t[n];
                }), this.$$search = t; else throw Dr("isrcharg");
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
    var Nr = r("$parse"), Ir = {}, qr, Hr = Function.prototype.call, Vr = Function.prototype.apply, Ur = Function.prototype.bind, Br = {
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
    }, Lr = {
        n: "\n",
        f: "\f",
        r: "\r",
        t: "	",
        v: "",
        "'": "'",
        '"': '"'
    }, zr = function(t) {
        this.options = t;
    };
    zr.prototype = {
        constructor: zr,
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
                    var e = t + this.peek(2), r = Br[this.ch], i = Br[t], o = Br[e];
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
            throw Nr("lexerr", t, e, this.text);
        },
        readNumber: function() {
            for (var t = "", e = this.index; this.index < this.text.length; ) {
                var n = Ln(this.text.charAt(this.index));
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
            if (Br.hasOwnProperty(e)) n.fn = Br[e], n.literal = !0, n.constant = !0; else {
                var a = cn(e, this.options, this.text);
                n.fn = f(function(t, e) {
                    return a(t, e);
                }, {
                    assign: function(n, r) {
                        return an(n, e, r, t.text, t.options);
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
                this.index += 4, n += String.fromCharCode(parseInt(i, 16))) : n += Lr[o] || o, i = !1; else if ("\\" === o) i = !0; else {
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
            throw Nr("syntax", e.text, t, e.index + 1, this.text, this.text.substring(e.index));
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw Nr("ueoe", this.text);
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
                    return an(o, n, i, e.text, e.options);
                }
            });
        },
        objectIndex: function(t) {
            var e = this, r = this.expression();
            this.consume("]");
            return f(function(i, o) {
                var s = t(i, o), a = r(i, o), u;
                on(a, e.text);
                if (!s) return n;
                (s = sn(s[a], e.text)) && (s.then && e.options.unwrapPromises) && (u = s, "$$v" in s || (u.$$v = n, 
                u.then(function(t) {
                    u.$$v = t;
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
                for (var s = [], a = e ? e(i, o) : i, u = 0; u < n.length; u++) s.push(sn(n[u](i, o), r.text));
                u = t(i, o, a) || d;
                sn(a, r.text);
                var c = r.text;
                if (u) {
                    if (u.constructor === u) throw Nr("isecfn", c);
                    if (u === Hr || u === Vr || Ur && u === Ur) throw Nr("isecff", c);
                }
                s = u.apply ? u.apply(a, s) : u(s[0], s[1], s[2], s[3], s[4]);
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
    var Gr = {}, Kr = r("$sce"), Qr = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
    }, Jr = e.createElement("a"), Yr = bn(t.location.href, !0);
    Sn.$inject = [ "$provide" ];
    kn.$inject = [ "$locale" ];
    Tn.$inject = [ "$locale" ];
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
            return t = (0 <= t ? "+" : "") + (En(Math[0 < t ? "floor" : "ceil"](t / 60), 2) + En(Math.abs(t % 60), 2));
        }
    }, ti = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, ei = /^\-?\d+$/;
    Pn.$inject = [ "$locale" ];
    var ni = m(Ln), ri = m(Wn);
    Mn.$inject = [ "$parse" ];
    var ii = m({
        restrict: "E",
        compile: function(t, n) {
            8 >= Gn && (n.href || n.name || n.$set("href", ""), t.append(e.createComment("IE fix")));
            if (!n.href && !n.xlinkHref && !n.name) return function(t, e) {
                var n = "[object SVGAnimatedString]" === Xn.call(e.prop("href")) ? "xlink:href" : "href";
                e.on("click", function(t) {
                    e.attr(n) || t.preventDefault();
                });
            };
        }
    }), oi = {};
    o(br, function(t, e) {
        if ("multiple" != t) {
            var n = Ee("ng-" + e);
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
        var e = Ee("ng-" + t);
        oi[e] = function() {
            return {
                priority: 99,
                link: function(n, r, i) {
                    var o = t, s = t;
                    "href" === t && "[object SVGAnimatedString]" === Xn.call(r.prop("href")) && (s = "xlinkHref", 
                    i.$attr[s] = "xlink:href", o = null);
                    i.$observe(e, function(e) {
                        e ? (i.$set(s, e), Gn && o && r.prop(o, i[s])) : "href" === t && i.$set(s, null);
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
    Nn.$inject = [ "$element", "$attrs", "$scope", "$animate" ];
    var ai = function(t) {
        return [ "$timeout", function(e) {
            return {
                name: "form",
                restrict: t ? "EAC" : "E",
                controller: Nn,
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
                            var a = r.parent().controller("form"), u = i.name || i.ngForm;
                            u && an(t, u, o, u);
                            if (a) r.on("$destroy", function() {
                                a.$removeControl(o);
                                u && an(t, u, n, u);
                                f(o, si);
                            });
                        }
                    };
                }
            };
        } ];
    }, ui = ai(), ci = ai(!0), li = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, fi = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, pi = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, hi = {
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
                return In(i, "min", i.$isEmpty(t) || t >= e, t);
            }, i.$parsers.push(t), i.$formatters.push(t));
            r.max && (t = function(t) {
                var e = parseFloat(r.max);
                return In(i, "max", i.$isEmpty(t) || t <= e, t);
            }, i.$parsers.push(t), i.$formatters.push(t));
            i.$formatters.push(function(t) {
                return In(i, "number", i.$isEmpty(t) || b(t), t);
            });
        },
        url: function(t, e, n, r, i, o) {
            Vn(t, e, n, r, i, o);
            t = function(t) {
                return In(r, "url", r.$isEmpty(t) || li.test(t), t);
            };
            r.$formatters.push(t);
            r.$parsers.push(t);
        },
        email: function(t, e, n, r, i, o) {
            Vn(t, e, n, r, i, o);
            t = function(t) {
                return In(r, "email", r.$isEmpty(t) || fi.test(t), t);
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
            w(i) || (i = !0);
            w(o) || (o = !1);
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
                o && (hi[Ln(i.type)] || hi.text)(n, r, i, o, e, t);
            }
        };
    } ], mi = "ng-valid", gi = "ng-invalid", yi = "ng-pristine", $i = "ng-dirty", _i = [ "$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", function(t, e, n, i, s, a) {
        function u(t, e) {
            e = e ? "-" + G(e, "-") : "";
            a.removeClass(i, (t ? gi : mi) + e);
            a.addClass(i, (t ? mi : gi) + e);
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
        if (!l) throw r("ngModel")("nonassign", n.ngModel, q(i));
        this.$render = d;
        this.$isEmpty = function(t) {
            return g(t) || "" === t || null === t || t !== t;
        };
        var f = i.inheritedData("$formController") || si, p = 0, h = this.$error = {};
        i.addClass(yi);
        u(!0);
        this.$setValidity = function(t, e) {
            h[t] !== !e && (e ? (h[t] && p--, p || (u(!0), this.$valid = !0, this.$invalid = !1)) : (u(!1), 
            this.$invalid = !0, this.$valid = !1, p++), h[t] = !e, u(e, t), f.$setValidity(t, e, this));
        };
        this.$setPristine = function() {
            this.$dirty = !1;
            this.$pristine = !0;
            a.removeClass(i, $i);
            a.addClass(i, yi);
        };
        this.$setViewValue = function(n) {
            this.$viewValue = n;
            this.$pristine && (this.$dirty = !0, this.$pristine = !1, a.removeClass(i, yi), 
            a.addClass(i, $i), f.$setDirty());
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
    } ], wi = function() {
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
    }, bi = m({
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
    }, Si = /^(true|false|\d+)$/, Ci = function() {
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
    }, ki = Dn({
        compile: function(t) {
            t.addClass("ng-binding");
            return function(t, e, r) {
                e.data("$binding", r.ngBind);
                t.$watch(r.ngBind, function(t) {
                    e.text(t == n ? "" : t);
                });
            };
        }
    }), Ti = [ "$interpolate", function(t) {
        return function(e, n, r) {
            e = t(n.attr(r.$attr.ngBindTemplate));
            n.addClass("ng-binding").data("$binding", e);
            r.$observe("ngBindTemplate", function(t) {
                n.text(t);
            });
        };
    } ], Ai = [ "$sce", "$parse", function(t, e) {
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
    } ], Ei = Un("", !0), Oi = Un("Odd", 0), Pi = Un("Even", 1), Ri = Dn({
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
    } ], Mi = {}, Di = {
        blur: !0,
        focus: !0
    };
    o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(t) {
        var e = Ee("ng-" + t);
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
                            Di[t] && r.$$phase ? e.$evalAsync(i) : e.$apply(i);
                        });
                    };
                }
            };
        } ];
    });
    var Ni = [ "$animate", function(t) {
        return {
            transclude: "element",
            priority: 600,
            terminal: !0,
            restrict: "A",
            $$tlb: !0,
            link: function(n, r, i, o, s) {
                var a, u, c;
                n.$watch(i.ngIf, function(o) {
                    I(o) ? u || (u = n.$new(), s(u, function(n) {
                        n[n.length++] = e.createComment(" end ngIf: " + i.ngIf + " ");
                        a = {
                            clone: n
                        };
                        t.enter(n, r.parent(), r);
                    })) : (c && (c.remove(), c = null), u && (u.$destroy(), u = null), a && (c = X(a.clone), 
                    t.leave(c, function() {
                        c = null;
                    }), a = null));
                });
            }
        };
    } ], Ii = [ "$http", "$templateCache", "$anchorScroll", "$animate", "$sce", function(t, e, n, r, i) {
        return {
            restrict: "ECA",
            priority: 400,
            terminal: !0,
            transclude: "element",
            controller: tr.noop,
            compile: function(o, s) {
                var a = s.ngInclude || s.src, u = s.onload || "", c = s.autoscroll;
                return function(o, s, l, f, p) {
                    var h = 0, d, v, m, g = function() {
                        v && (v.remove(), v = null);
                        d && (d.$destroy(), d = null);
                        m && (r.leave(m, function() {
                            v = null;
                        }), v = m, m = null);
                    };
                    o.$watch(i.parseAsResourceUrl(a), function(i) {
                        var a = function() {
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
                                    r.enter(t, null, s, a);
                                });
                                d = e;
                                m = t;
                                d.$emit("$includeContentLoaded");
                                o.$eval(u);
                            }
                        }).error(function() {
                            l === h && g();
                        }), o.$emit("$includeContentRequested")) : (g(), f.template = null);
                    });
                };
            }
        };
    } ], qi = [ "$compile", function(t) {
        return {
            restrict: "ECA",
            priority: -400,
            require: "ngInclude",
            link: function(e, n, r, i) {
                n.html(i.template);
                t(n.contents())(e);
            }
        };
    } ], Hi = Dn({
        priority: 450,
        compile: function() {
            return {
                pre: function(t, e, n) {
                    t.$eval(n.ngInit);
                }
            };
        }
    }), Vi = Dn({
        terminal: !0,
        priority: 1e3
    }), Ui = [ "$locale", "$interpolate", function(t, e) {
        var n = /{}/g;
        return {
            restrict: "EA",
            link: function(r, i, s) {
                var a = s.count, u = s.$attr.when && i.attr(s.$attr.when), c = s.offset || 0, l = r.$eval(u) || {}, f = {}, p = e.startSymbol(), h = e.endSymbol(), d = /^when(Minus)?(.+)$/;
                o(s, function(t, e) {
                    d.test(e) && (l[Ln(e.replace("when", "").replace("Minus", "-"))] = i.attr(s.$attr[e]));
                });
                o(l, function(t, r) {
                    f[r] = e(t.replace(n, p + a + "-" + c + h));
                });
                r.$watch(function() {
                    var e = parseFloat(r.$eval(a));
                    if (isNaN(e)) return "";
                    e in l || (e = t.pluralCat(e - c));
                    return f[e](r, i, !0);
                }, function(t) {
                    i.text(t);
                });
            }
        };
    } ], Bi = [ "$parse", "$animate", function(t, n) {
        var s = r("ngRepeat");
        return {
            transclude: "element",
            priority: 1e3,
            terminal: !0,
            $$tlb: !0,
            link: function(r, a, u, c, l) {
                var f = u.ngRepeat, p = f.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/), h, d, v, m, g, y, _ = {
                    $id: $e
                };
                if (!p) throw s("iexp", f);
                u = p[1];
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
                p = u.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
                if (!p) throw s("iidexp", u);
                g = p[3] || p[1];
                y = p[2];
                var w = {};
                r.$watchCollection(c, function(t) {
                    var u, c, p = a[0], h, _ = {}, b, x, j, S, C, k, T, A = [];
                    if (i(t)) k = t, C = d || v; else {
                        C = d || m;
                        k = [];
                        for (j in t) t.hasOwnProperty(j) && "$" != j.charAt(0) && k.push(j);
                        k.sort();
                    }
                    b = k.length;
                    c = A.length = k.length;
                    for (u = 0; u < c; u++) if (j = t === k ? u : k[u], S = t[j], h = C(j, S, u), J(h, "`track by` id"), 
                    w.hasOwnProperty(h)) T = w[h], delete w[h], _[h] = T, A[u] = T; else {
                        if (_.hasOwnProperty(h)) throw o(A, function(t) {
                            t && t.scope && (w[t.id] = t);
                        }), s("dupes", f, h, D(S));
                        A[u] = {
                            id: h
                        };
                        _[h] = !1;
                    }
                    for (j in w) w.hasOwnProperty(j) && (T = w[j], u = X(T.clone), n.leave(u), o(u, function(t) {
                        t.$$NG_REMOVED = !0;
                    }), T.scope.$destroy());
                    u = 0;
                    for (c = k.length; u < c; u++) {
                        j = t === k ? u : k[u];
                        S = t[j];
                        T = A[u];
                        A[u - 1] && (p = A[u - 1].clone[A[u - 1].clone.length - 1]);
                        if (T.scope) {
                            x = T.scope;
                            h = p;
                            do h = h.nextSibling; while (h && h.$$NG_REMOVED);
                            T.clone[0] != h && n.move(X(T.clone), null, Kn(p));
                            p = T.clone[T.clone.length - 1];
                        } else x = r.$new();
                        x[g] = S;
                        y && (x[y] = j);
                        x.$index = u;
                        x.$first = 0 === u;
                        x.$last = u === b - 1;
                        x.$middle = !(x.$first || x.$last);
                        x.$odd = !(x.$even = 0 === (u & 1));
                        T.scope || l(x, function(t) {
                            t[t.length++] = e.createComment(" end ngRepeat: " + f + " ");
                            n.enter(t, null, Kn(p));
                            p = t;
                            T.scope = x;
                            T.clone = t;
                            _[T.id] = T;
                        });
                    }
                    w = _;
                });
            }
        };
    } ], Li = [ "$animate", function(t) {
        return function(e, n, r) {
            e.$watch(r.ngShow, function(e) {
                t[I(e) ? "removeClass" : "addClass"](n, "ng-hide");
            });
        };
    } ], zi = [ "$animate", function(t) {
        return function(e, n, r) {
            e.$watch(r.ngHide, function(e) {
                t[I(e) ? "addClass" : "removeClass"](n, "ng-hide");
            });
        };
    } ], Wi = Dn(function(t, e, n) {
        t.$watch(n.ngStyle, function(t, n) {
            n && t !== n && o(n, function(t, n) {
                e.css(n, "");
            });
            t && e.css(t);
        }, !0);
    }), Gi = [ "$animate", function(t) {
        return {
            restrict: "EA",
            require: "ngSwitch",
            controller: [ "$scope", function() {
                this.cases = {};
            } ],
            link: function(e, n, r, i) {
                var s = [], a = [], u = [], c = [];
                e.$watch(r.ngSwitch || r.on, function(n) {
                    var l, f;
                    l = 0;
                    for (f = u.length; l < f; ++l) u[l].remove();
                    l = u.length = 0;
                    for (f = c.length; l < f; ++l) {
                        var p = a[l];
                        c[l].$destroy();
                        u[l] = p;
                        t.leave(p, function() {
                            u.splice(l, 1);
                        });
                    }
                    a.length = 0;
                    c.length = 0;
                    if (s = i.cases["!" + n] || i.cases["?"]) e.$eval(r.change), o(s, function(n) {
                        var r = e.$new();
                        c.push(r);
                        n.transclude(r, function(e) {
                            var r = n.element;
                            a.push(e);
                            t.enter(e, r.parent(), r);
                        });
                    });
                });
            }
        };
    } ], Ki = Dn({
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
    }), Qi = Dn({
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
    }), Ji = Dn({
        link: function(t, e, n, i, o) {
            if (!o) throw r("ngTransclude")("orphan", q(e));
            o(function(t) {
                e.empty();
                e.append(t);
            });
        }
    }), Yi = [ "$templateCache", function(t) {
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
        var i = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, a = {
            $setViewValue: d
        };
        return {
            restrict: "E",
            require: [ "select", "?ngModel" ],
            controller: [ "$element", "$scope", "$attrs", function(t, e, n) {
                var r = this, i = {}, o = a, s;
                r.databound = n.ngModel;
                r.init = function(t, e, n) {
                    o = t;
                    s = n;
                };
                r.addOption = function(e) {
                    J(e, '"option value"');
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
            link: function(a, u, c, l) {
                function f(t, e, n, r) {
                    n.$render = function() {
                        var t = n.$viewValue;
                        r.hasOption(t) ? (j.parent() && j.remove(), e.val(t), "" === t && w.prop("selected", !0)) : g(t) && w ? e.val("") : r.renderUnknownOption(t);
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
                function h(e, o, a) {
                    function u() {
                        var t = {
                            "": []
                        }, n = [ "" ], r, i, u, c, m;
                        u = a.$modelValue;
                        c = w(e) || [];
                        var C = p ? s(c) : c, k, T, A;
                        T = {};
                        A = !1;
                        if (v) if (i = a.$modelValue, j && ir(i)) for (A = new _e([]), r = {}, m = 0; m < i.length; m++) r[f] = i[m], 
                        A.put(j(e, r), i[m]); else A = new _e(i);
                        m = A;
                        var E, O;
                        for (A = 0; k = C.length, A < k; A++) {
                            i = A;
                            if (p) {
                                i = C[A];
                                if ("$" === i.charAt(0)) continue;
                                T[p] = i;
                            }
                            T[f] = c[i];
                            r = h(e, T) || "";
                            (i = t[r]) || (i = t[r] = [], n.push(r));
                            v ? r = y(m.remove(j ? j(e, T) : g(e, T))) : (j ? (r = {}, r[f] = u, r = j(e, r) === j(e, T)) : r = u === g(e, T), 
                            m = m || r);
                            E = l(e, T);
                            E = y(E) ? E : "";
                            i.push({
                                id: j ? j(e, T) : p ? C[A] : A,
                                label: E,
                                selected: r
                            });
                        }
                        v || (_ || null === u ? t[""].unshift({
                            id: "",
                            label: "",
                            selected: !m
                        }) : m || t[""].unshift({
                            id: "?",
                            label: "",
                            selected: !0
                        }));
                        T = 0;
                        for (C = n.length; T < C; T++) {
                            r = n[T];
                            i = t[r];
                            S.length <= T ? (u = {
                                element: x.clone().attr("label", r),
                                label: i.label
                            }, c = [ u ], S.push(c), o.append(u.element)) : (c = S[T], u = c[0], u.label != r && u.element.attr("label", u.label = r));
                            E = null;
                            A = 0;
                            for (k = i.length; A < k; A++) r = i[A], (m = c[A + 1]) ? (E = m.element, m.label !== r.label && E.text(m.label = r.label), 
                            m.id !== r.id && E.val(m.id = r.id), E[0].selected !== r.selected && (E.prop("selected", m.selected = r.selected), 
                            Gn && E.prop("selected", m.selected))) : ("" === r.id && _ ? O = _ : (O = b.clone()).val(r.id).prop("selected", r.selected).attr("selected", r.selected).text(r.label), 
                            c.push({
                                element: O,
                                label: r.label,
                                id: r.id,
                                selected: r.selected
                            }), d.addOption(r.label, O), E ? E.after(O) : u.element.append(O), E = O);
                            for (A++; c.length > A; ) r = c.pop(), d.removeOption(r.label), r.element.remove();
                        }
                        for (;S.length > T; ) S.pop()[0].element.remove();
                    }
                    var c;
                    if (!(c = m.match(i))) throw Xi("iexp", m, q(o));
                    var l = r(c[2] || c[1]), f = c[4] || c[6], p = c[5], h = r(c[3] || ""), g = r(c[2] ? c[1] : f), w = r(c[7]), j = c[8] ? r(c[8]) : null, S = [ [ {
                        element: o,
                        label: ""
                    } ] ];
                    _ && (t(_)(e), _.removeClass("ng-scope"), _.remove());
                    o.empty();
                    o.on("change", function() {
                        e.$apply(function() {
                            var t, r = w(e) || [], i = {}, s, c, l, h, d, m, y;
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
                            a.$setViewValue(c);
                            u();
                        });
                    });
                    a.$render = u;
                    e.$watchCollection(w, u);
                    e.$watchCollection(function() {
                        var t = {}, n = w(e);
                        if (n) {
                            for (var r = Array(n.length), i = 0, o = n.length; i < o; i++) t[f] = n[i], r[i] = l(e, t);
                            return r;
                        }
                    }, u);
                    v && e.$watchCollection(function() {
                        return a.$modelValue;
                    }, u);
                }
                if (l[1]) {
                    var d = l[0];
                    l = l[1];
                    var v = c.multiple, m = c.ngOptions, _ = !1, w, b = Kn(e.createElement("option")), x = Kn(e.createElement("optgroup")), j = b.clone();
                    c = 0;
                    for (var S = u.children(), C = S.length; c < C; c++) if ("" === S[c].value) {
                        w = _ = S.eq(c);
                        break;
                    }
                    d.init(l, _, j);
                    v && (l.$isEmpty = function(t) {
                        return !t || 0 === t.length;
                    });
                    m ? h(a, u, l) : v ? p(a, u, l) : f(a, u, l, d);
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
    t.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : ((Qn = t.jQuery) && Qn.fn.on ? (Kn = Qn, 
    f(Qn.fn, {
        scope: wr.scope,
        isolateScope: wr.isolateScope,
        controller: wr.controller,
        injector: wr.injector,
        inheritedData: wr.inheritedData
    }), ne("remove", !0, !0, !1), ne("empty", !1, !1, !1), ne("html", !1, !1, !0)) : Kn = re, 
    tr.element = Kn, te(tr), Kn(e).ready(function() {
        z(e, W);
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
        this.$get = [ "$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", "$sce", function(r, i, o, s, a, u, c, l) {
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
                    var a = n[o - 1];
                    var u = i[o];
                    if (a && u) {
                        r[a.name] = u;
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
                                n[r] = e.isString(t) ? a.get(t) : a.invoke(t);
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
                                    r = u.get(i, {
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
    r.directive("ngView", a);
    s.$inject = [ "$route", "$anchorScroll", "$animate" ];
    function s(t, n, r) {
        return {
            restrict: "ECA",
            terminal: true,
            priority: 400,
            transclude: "element",
            link: function(i, o, s, a, u) {
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
                    var s = t.current && t.current.locals, a = s && s.$template;
                    if (e.isDefined(a)) {
                        var f = i.$new();
                        var v = t.current;
                        var m = u(f, function(t) {
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
    a.$inject = [ "$compile", "$controller", "$route" ];
    function a(t, e, n) {
        return {
            restrict: "ECA",
            priority: -400,
            link: function(r, i) {
                var o = n.current, s = o.locals;
                i.html(s.$template);
                var a = t(i.contents());
                if (o.controller) {
                    s.$scope = r;
                    var u = e(o.controller, s);
                    if (o.controllerAs) {
                        r[o.controllerAs] = u;
                    }
                    i.data("$ngControllerController", u);
                    i.children().data("$ngControllerController", u);
                }
                a(r);
            }
        };
    }
})(window, window.angular);

(function(t, e, n) {
    "use strict";
    function r(t) {
        var n = [];
        u(n, e.noop).chars(t);
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
        function r(t, r, o, a) {
            r = e.lowercase(r);
            if (x[r]) for (;u.last() && j[u.last()]; ) i("", u.last());
            b[r] && u.last() == r && i("", r);
            (a = w[r] || !!a) || u.push(r);
            var c = {};
            o.replace(p, function(t, e, n, r, i) {
                c[e] = s(n || r || i || "");
            });
            n.start && n.start(r, c, a);
        }
        function i(t, r) {
            var i = 0, o;
            if (r = e.lowercase(r)) for (i = u.length - 1; 0 <= i && u[i] != r; i--) ;
            if (0 <= i) {
                for (o = u.length - 1; o >= i; o--) n.end && n.end(u[o]);
                u.length = i;
            }
        }
        "string" !== typeof t && (t = null === t || "undefined" === typeof t ? "" : "" + t);
        var o, a, u = [], y = t, _;
        for (u.last = function() {
            return u[u.length - 1];
        }; t; ) {
            _ = "";
            a = !0;
            if (u.last() && S[u.last()]) t = t.replace(RegExp("(.*)<\\s*\\/\\s*" + u.last() + "[^>]*>", "i"), function(t, e) {
                e = e.replace(v, "$1").replace(g, "$1");
                n.chars && n.chars(s(e));
                return "";
            }), i("", u.last()); else {
                if (0 === t.indexOf("<!--")) o = t.indexOf("--", 4), 0 <= o && t.lastIndexOf("-->", o) === o && (n.comment && n.comment(t.substring(4, o)), 
                t = t.substring(o + 3), a = !1); else if (m.test(t)) {
                    if (o = t.match(m)) t = t.replace(o[0], ""), a = !1;
                } else if (d.test(t)) {
                    if (o = t.match(f)) t = t.substring(o[0].length), o[0].replace(f, i), a = !1;
                } else h.test(t) && ((o = t.match(l)) ? (o[4] && (t = t.substring(o[0].length), 
                o[0].replace(l, r)), a = !1) : (_ += "<", t = t.substring(1)));
                a && (o = t.indexOf("<"), _ += 0 > o ? t : t.substring(0, o), t = 0 > o ? "" : t.substring(o), 
                n.chars && n.chars(s(_)));
            }
            if (t == y) throw c("badparse", t);
            y = t;
        }
        i();
    }
    function s(t) {
        if (!t) return "";
        var e = E.exec(t);
        t = e[1];
        var n = e[3];
        if (e = e[2]) A.innerHTML = e.replace(/</g, "&lt;"), e = "textContent" in A ? A.textContent : A.innerText;
        return t + e + n;
    }
    function a(t) {
        return t.replace(/&/g, "&amp;").replace(y, function(t) {
            var e = t.charCodeAt(0);
            t = t.charCodeAt(1);
            return "&#" + (1024 * (e - 55296) + (t - 56320) + 65536) + ";";
        }).replace(_, function(t) {
            return "&#" + t.charCodeAt(0) + ";";
        }).replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    function u(t, n) {
        var r = !1, i = e.bind(t, t.push);
        return {
            start: function(t, o, s) {
                t = e.lowercase(t);
                !r && S[t] && (r = t);
                r || !0 !== C[t] || (i("<"), i(t), e.forEach(o, function(r, o) {
                    var s = e.lowercase(o), u = "img" === t && "src" === s || "background" === s;
                    !0 !== T[s] || !0 === k[s] && !n(r, u) || (i(" "), i(o), i('="'), i(a(r)), i('"'));
                }), i(s ? "/>" : ">"));
            },
            end: function(t) {
                t = e.lowercase(t);
                r || !0 !== C[t] || (i("</"), i(t), i(">"));
                t == r && (r = !1);
            },
            chars: function(t) {
                r || i(a(t));
            }
        };
    }
    var c = e.$$minErr("$sanitize"), l = /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/, f = /^<\/\s*([\w:-]+)[^>]*>/, p = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g, h = /^</, d = /^<\//, v = /\x3c!--(.*?)--\x3e/g, m = /<!DOCTYPE([^>]*?)>/i, g = /<!\[CDATA\[(.*?)]]\x3e/g, y = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, _ = /([^\#-~| |!])/g, w = i("area,br,col,hr,img,wbr");
    t = i("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");
    n = i("rp,rt");
    var b = e.extend({}, n, t), x = e.extend({}, t, i("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")), j = e.extend({}, n, i("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")), S = i("script,style"), C = e.extend({}, w, x, j, b), k = i("background,cite,href,longdesc,src,usemap"), T = e.extend({}, k, i("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width")), A = document.createElement("pre"), E = /^(\s*)([\s\S]*?)(\s*)$/;
    e.module("ngSanitize", []).provider("$sanitize", function() {
        this.$get = [ "$$sanitizeUri", function(t) {
            return function(e) {
                var n = [];
                o(e, u(n, function(e, n) {
                    return !/^unsafe/.test(t(e, n));
                }));
                return n.join("");
            };
        } ];
    });
    e.module("ngSanitize").filter("linky", [ "$sanitize", function(t) {
        var n = /((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"]/, i = /^mailto:/;
        return function(o, s) {
            function a(t) {
                t && f.push(r(t));
            }
            function u(t, n) {
                f.push("<a ");
                e.isDefined(s) && (f.push('target="'), f.push(s), f.push('" '));
                f.push('href="');
                f.push(t);
                f.push('">');
                a(n);
                f.push("</a>");
            }
            if (!o) return o;
            for (var c, l = o, f = [], p, h; c = l.match(n); ) p = c[0], c[2] == c[3] && (p = "mailto:" + p), 
            h = c.index, a(l.substr(0, h)), u(p, c[0].replace(i, "")), l = l.substring(h + c[0].length);
            a(l);
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
    var a = angular.element.prototype, u = function(t) {
        return "undefined" != typeof HTMLDocument && t instanceof HTMLDocument || t.nodeType && t.nodeType === t.DOCUMENT_NODE;
    }, c = function(t) {
        return "undefined" != typeof HTMLElement && t instanceof HTMLElement || t.nodeType && t.nodeType === t.ELEMENT_NODE;
    }, l = function(t) {
        return c(t) || u(t) ? t : t[0];
    };
    a.scrollTo = function(e, n, r) {
        var i;
        if (angular.isElement(e) ? i = this.scrollToElement : r && (i = this.scrollToAnimated), 
        i) return i.apply(this, arguments);
        var o = l(this);
        return u(o) ? t.scrollTo(e, n) : (o.scrollLeft = e, void (o.scrollTop = n));
    };
    var f, p;
    a.scrollToAnimated = function(t, o, s, a) {
        s && !a && (a = i);
        var u = this.scrollLeft(), c = this.scrollTop(), l = Math.round(t - u), h = Math.round(o - c), d = null, v = this, m = "scroll mousedown mousewheel touchmove keydown", g = function(t) {
            (!t || t.which > 0) && (v.unbind(m, g), n(f), p.reject(), f = null);
        };
        if (f && g(), p = e.defer(), !l && !h) return p.resolve(), p.promise;
        var y = function(t) {
            null === d && (d = t);
            var e = t - d, n = e >= s ? 1 : a(e / s);
            v.scrollTo(u + Math.ceil(l * n), c + Math.ceil(h * n)), 1 > n ? f = r(y) : (v.unbind(m, g), 
            f = null, p.resolve());
        };
        return v.scrollTo(u, c), v.bind(m, g), f = r(y), p.promise;
    }, a.scrollToElement = function(t, e, n, r) {
        var i = l(this);
        (!angular.isNumber(e) || isNaN(e)) && (e = s);
        var o = this.scrollTop() + l(t).getBoundingClientRect().top - e;
        return c(i) && (o -= i.getBoundingClientRect().top), this.scrollTo(0, o, n, r);
    };
    var h = {
        scrollLeft: function(e, n, r) {
            if (angular.isNumber(e)) return this.scrollTo(e, this.scrollTop(), n, r);
            var i = l(this);
            return u(i) ? t.scrollX || document.documentElement.scrollLeft || document.body.scrollLeft : i.scrollLeft;
        },
        scrollTop: function(e, n, r) {
            if (angular.isNumber(e)) return this.scrollTo(this.scrollTop(), e, n, r);
            var i = l(this);
            return u(i) ? t.scrollY || document.documentElement.scrollTop || document.body.scrollTop : i.scrollTop;
        }
    };
    a.scrollToElementAnimated = function(t, e, n, r) {
        return this.scrollToElement(t, e, n || o, r);
    }, a.scrollTopAnimated = function(t, e, n) {
        return this.scrollTop(t, e || o, n);
    }, a.scrollLeftAnimated = function(t, e, n) {
        return this.scrollLeft(t, e || o, n);
    };
    var d = function(t, e) {
        return function(n, r) {
            return r ? e.apply(this, arguments) : t.apply(this, arguments);
        };
    };
    for (var v in h) a[v] = a[v] ? d(a[v], h[v]) : h[v];
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
        var o = !1, s = !1, a = function() {
            s = !1;
            var e = n.container, i = e[0], o = 0;
            ("undefined" != typeof HTMLElement && i instanceof HTMLElement || i.nodeType && i.nodeType === i.ELEMENT_NODE) && (o = i.getBoundingClientRect().top);
            var a, u, c, l, f, p;
            for (l = n.spies, u = n.currentlyActive, c = void 0, a = 0; a < l.length; a++) f = l[a], 
            p = f.getTargetPosition(), p && p.top + f.offset - o < 20 && -1 * p.top + o < p.height && (!c || c.top < p.top) && (c = {
                top: p.top,
                spy: f
            });
            c && (c = c.spy), u === c || r && !c || (u && (u.$element.removeClass("active"), 
            t.$broadcast("duScrollspy:becameInactive", u.$element)), c && (c.$element.addClass("active"), 
            t.$broadcast("duScrollspy:becameActive", c.$element)), n.currentlyActive = c);
        };
        return i ? function() {
            o ? s = !0 : (a(), o = e(function() {
                o = !1, s && a();
            }, i, !1));
        } : a;
    }, s = {}, a = function(t) {
        var e = t.$id, n = {
            spies: []
        };
        return n.handler = o(n), s[e] = n, t.$on("$destroy", function() {
            u(t);
        }), e;
    }, u = function(t) {
        var e = t.$id, n = s[e], r = n.container;
        r && r.off("scroll", n.handler), delete s[e];
    }, c = a(t), l = function(t) {
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
        createContext: a,
        destroyContext: u,
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
                        var a = o.offset ? parseInt(o.offset, 10) : e, u = o.duration ? parseInt(o.duration, 10) : t, c = n.getContainer(r);
                        c.scrollToElement(angular.element(s), isNaN(a) ? 0 : a, isNaN(u) ? 0 : u);
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
        link: function(o, s, a) {
            var u, c = a.ngHref || a.href;
            c && -1 !== c.indexOf("#") ? u = c.replace(/.*(?=#[^\s]+$)/, "").substring(1) : a.duScrollspy && (u = a.duScrollspy), 
            u && n(function() {
                var n = new i(u, s, -(a.offset ? parseInt(a.offset, 10) : e));
                t.addSpy(n), o.$on("$destroy", function() {
                    t.removeSpy(n);
                }), o.$on("$locationChangeSuccess", n.flushTargetCache.bind(n)), r.$on("$stateChangeSuccess", n.flushTargetCache.bind(n));
            }, 0, !1);
        }
    };
} ]);

(function(t, e, n) {
    "use strict";
    e.module("ngAnimate", [ "ng" ]).directive("ngAnimateChildren", function() {
        return function(t, n, r) {
            r = r.ngAnimateChildren;
            e.isString(r) && 0 === r.length ? n.data("$$ngAnimateChildren", !0) : t.$watch(r, function(t) {
                n.data("$$ngAnimateChildren", !!t);
            });
        };
    }).factory("$$animateReflow", [ "$$rAF", "$document", function(t, e) {
        return function(e) {
            return t(function() {
                e();
            });
        };
    } ]).config([ "$provide", "$animateProvider", function(r, i) {
        function o(t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e];
                if (n.nodeType == l) return n;
            }
        }
        function s(t) {
            return e.element(o(t));
        }
        var a = e.noop, u = e.forEach, c = i.$$selectors, l = 1, f = "$$ngAnimateState", p = "$$ngAnimateChildren", h = "ng-animate", d = {
            running: !0
        };
        r.decorator("$animate", [ "$delegate", "$injector", "$sniffer", "$rootElement", "$$asyncCallback", "$rootScope", "$document", function(t, n, $, r, l, v, m) {
            function g(t) {
                var e = t.data(f) || {};
                e.running = !0;
                t.data(f, e);
            }
            function y(t) {
                if (t) {
                    var e = [], r = {};
                    t = t.substr(1).split(".");
                    ($.transitions || $.animations) && e.push(n.get(c[""]));
                    for (var i = 0; i < t.length; i++) {
                        var o = t[i], s = c[o];
                        s && !r[o] && (e.push(n.get(s)), r[o] = !0);
                    }
                    return e;
                }
            }
            function _(t, n, r) {
                function i(t, e) {
                    var n = t[e], r = t["before" + e.charAt(0).toUpperCase() + e.substr(1)];
                    if (n || r) return "leave" == e && (r = n, n = null), w.push({
                        event: e,
                        fn: n
                    }), m.push({
                        event: e,
                        fn: r
                    }), !0;
                }
                function o(e, n, i) {
                    var o = [];
                    u(e, function(t) {
                        t.fn && o.push(t);
                    });
                    var s = 0;
                    u(o, function(e, u) {
                        var c = function() {
                            t: {
                                if (n) {
                                    (n[u] || a)();
                                    if (++s < o.length) break t;
                                    n = null;
                                }
                                i();
                            }
                        };
                        switch (e.event) {
                          case "setClass":
                            n.push(e.fn(t, f, p, c));
                            break;

                          case "addClass":
                            n.push(e.fn(t, f || r, c));
                            break;

                          case "removeClass":
                            n.push(e.fn(t, p || r, c));
                            break;

                          default:
                            n.push(e.fn(t, c));
                        }
                    });
                    n && 0 === n.length && i();
                }
                var s = t[0];
                if (s) {
                    var c = "setClass" == n, l = c || "addClass" == n || "removeClass" == n, f, p;
                    e.isArray(r) && (f = r[0], p = r[1], r = f + " " + p);
                    var h = t.attr("class") + " " + r;
                    if (k(h)) {
                        var d = a, v = [], m = [], g = a, _ = [], w = [], h = (" " + h).replace(/\s+/g, ".");
                        u(y(h), function(t) {
                            !i(t, n) && c && (i(t, "addClass"), i(t, "removeClass"));
                        });
                        return {
                            node: s,
                            event: n,
                            className: r,
                            isClassBased: l,
                            isSetClassOperation: c,
                            before: function(t) {
                                d = t;
                                o(m, v, function() {
                                    d = a;
                                    t();
                                });
                            },
                            after: function(t) {
                                g = t;
                                o(w, _, function() {
                                    g = a;
                                    t();
                                });
                            },
                            cancel: function() {
                                v && (u(v, function(t) {
                                    (t || a)(!0);
                                }), d(!0));
                                _ && (u(_, function(t) {
                                    (t || a)(!0);
                                }), g(!0));
                            }
                        };
                    }
                }
            }
            function w(t, n, r, i, o, s, a) {
                function c(e) {
                    var i = "$animate:" + e;
                    w && (w[i] && 0 < w[i].length) && l(function() {
                        r.triggerHandler(i, {
                            event: t,
                            className: n
                        });
                    });
                }
                function p() {
                    c("before");
                }
                function d() {
                    c("after");
                }
                function v() {
                    c("close");
                    a && l(function() {
                        a();
                    });
                }
                function m() {
                    m.hasBeenRun || (m.hasBeenRun = !0, s());
                }
                function g() {
                    if (!g.hasBeenRun) {
                        g.hasBeenRun = !0;
                        var e = r.data(f);
                        e && (y && y.isClassBased ? x(r, n) : (l(function() {
                            var e = r.data(f) || {};
                            E == e.index && x(r, n, t);
                        }), r.data(f, e)));
                        v();
                    }
                }
                var y = _(r, t, n);
                if (y) {
                    n = y.className;
                    var w = e.element._data(y.node), w = w && w.events;
                    i || (i = o ? o.parent() : r.parent());
                    var b = r.data(f) || {};
                    o = b.active || {};
                    var C = b.totalActive || 0, k = b.last, T;
                    y.isClassBased && (T = b.running || b.disabled || k && !k.isClassBased);
                    if (T || j(r, i)) m(), p(), d(), g(); else {
                        i = !1;
                        if (0 < C) {
                            T = [];
                            if (y.isClassBased) "setClass" == k.event ? (T.push(k), x(r, n)) : o[n] && (A = o[n], 
                            A.event == t ? i = !0 : (T.push(A), x(r, n))); else if ("leave" == t && o["ng-leave"]) i = !0; else {
                                for (var A in o) T.push(o[A]), x(r, A);
                                o = {};
                                C = 0;
                            }
                            0 < T.length && u(T, function(t) {
                                t.cancel();
                            });
                        }
                        !y.isClassBased || (y.isSetClassOperation || i) || (i = "addClass" == t == r.hasClass(n));
                        if (i) m(), p(), d(), v(); else {
                            if ("leave" == t) r.one("$destroy", function(t) {
                                t = e.element(this);
                                var n = t.data(f);
                                n && (n = n.active["ng-leave"]) && (n.cancel(), x(t, "ng-leave"));
                            });
                            r.addClass(h);
                            var E = S++;
                            C++;
                            o[n] = y;
                            r.data(f, {
                                last: y,
                                active: o,
                                index: E,
                                totalActive: C
                            });
                            p();
                            y.before(function(e) {
                                var i = r.data(f);
                                e = e || !i || !i.active[n] || y.isClassBased && i.active[n].event != t;
                                m();
                                !0 === e ? g() : (d(), y.after(g));
                            });
                        }
                    }
                } else m(), p(), d(), g();
            }
            function b(t) {
                if (t = o(t)) t = e.isFunction(t.getElementsByClassName) ? t.getElementsByClassName(h) : t.querySelectorAll("." + h), 
                u(t, function(t) {
                    t = e.element(t);
                    (t = t.data(f)) && t.active && u(t.active, function(t) {
                        t.cancel();
                    });
                });
            }
            function x(t, e) {
                if (o(t) == o(r)) d.disabled || (d.running = !1, d.structural = !1); else if (e) {
                    var n = t.data(f) || {}, i = !0 === e;
                    !i && (n.active && n.active[e]) && (n.totalActive--, delete n.active[e]);
                    if (i || !n.totalActive) t.removeClass(h), t.removeData(f);
                }
            }
            function j(t, n) {
                if (d.disabled) return !0;
                if (o(t) == o(r)) return d.running;
                var i, s, a;
                do {
                    if (0 === n.length) break;
                    var u = o(n) == o(r), c = u ? d : n.data(f) || {};
                    if (c.disabled) return !0;
                    u && (a = !0);
                    !1 !== i && (u = n.data(p), e.isDefined(u) && (i = u));
                    s = s || c.running || c.last && !c.last.isClassBased;
                } while (n = n.parent());
                return !a || !i && s;
            }
            var S = 0;
            r.data(f, d);
            v.$$postDigest(function() {
                v.$$postDigest(function() {
                    d.running = !1;
                });
            });
            var C = i.classNameFilter(), k = C ? function(t) {
                return C.test(t);
            } : function() {
                return !0;
            };
            return {
                enter: function(n, r, i, o) {
                    n = e.element(n);
                    r = r && e.element(r);
                    i = i && e.element(i);
                    g(n);
                    t.enter(n, r, i);
                    v.$$postDigest(function() {
                        n = s(n);
                        w("enter", "ng-enter", n, r, i, a, o);
                    });
                },
                leave: function(n, r) {
                    n = e.element(n);
                    b(n);
                    g(n);
                    v.$$postDigest(function() {
                        w("leave", "ng-leave", s(n), null, null, function() {
                            t.leave(n);
                        }, r);
                    });
                },
                move: function(n, r, i, o) {
                    n = e.element(n);
                    r = r && e.element(r);
                    i = i && e.element(i);
                    b(n);
                    g(n);
                    t.move(n, r, i);
                    v.$$postDigest(function() {
                        n = s(n);
                        w("move", "ng-move", n, r, i, a, o);
                    });
                },
                addClass: function(n, r, i) {
                    n = e.element(n);
                    n = s(n);
                    w("addClass", r, n, null, null, function() {
                        t.addClass(n, r);
                    }, i);
                },
                removeClass: function(n, r, i) {
                    n = e.element(n);
                    n = s(n);
                    w("removeClass", r, n, null, null, function() {
                        t.removeClass(n, r);
                    }, i);
                },
                setClass: function(n, r, i, o) {
                    n = e.element(n);
                    n = s(n);
                    w("setClass", [ r, i ], n, null, null, function() {
                        t.setClass(n, r, i);
                    }, o);
                },
                enabled: function(t, e) {
                    switch (arguments.length) {
                      case 2:
                        if (t) x(e); else {
                            var n = e.data(f) || {};
                            n.disabled = !0;
                            e.data(f, n);
                        }
                        break;

                      case 1:
                        d.disabled = !t;
                        break;

                      default:
                        t = !d.disabled;
                    }
                    return !!t;
                }
            };
        } ]);
        i.register("", [ "$window", "$sniffer", "$timeout", "$$animateReflow", function(r, i, s, c) {
            function f(t, e) {
                G && G();
                W.push(e);
                G = c(function() {
                    u(W, function(t) {
                        t();
                    });
                    W = [];
                    G = null;
                    L = {};
                });
            }
            function p(t, n) {
                var r = o(t);
                t = e.element(r);
                J.push(t);
                r = Date.now() + n;
                r <= Q || (s.cancel(K), Q = r, K = s(function() {
                    h(J);
                    J = [];
                }, n, !1));
            }
            function h(t) {
                u(t, function(t) {
                    (t = t.data(q)) && (t.closeAnimationFn || a)();
                });
            }
            function d(t, e) {
                var n = e ? L[e] : null;
                if (!n) {
                    var i = 0, o = 0, s = 0, a = 0, c, f, p, h;
                    u(t, function(t) {
                        if (t.nodeType == l) {
                            t = r.getComputedStyle(t) || {};
                            p = t[E + F];
                            i = Math.max(v(p), i);
                            h = t[E + M];
                            c = t[E + D];
                            o = Math.max(v(c), o);
                            f = t[P + D];
                            a = Math.max(v(f), a);
                            var e = v(t[P + F]);
                            0 < e && (e *= parseInt(t[P + N], 10) || 1);
                            s = Math.max(e, s);
                        }
                    });
                    n = {
                        total: 0,
                        transitionPropertyStyle: h,
                        transitionDurationStyle: p,
                        transitionDelayStyle: c,
                        transitionDelay: o,
                        transitionDuration: i,
                        animationDelayStyle: f,
                        animationDelay: a,
                        animationDuration: s
                    };
                    e && (L[e] = n);
                }
                return n;
            }
            function v(t) {
                var n = 0;
                t = e.isString(t) ? t.split(/\s*,\s*/) : [];
                u(t, function(t) {
                    n = Math.max(parseFloat(t) || 0, n);
                });
                return n;
            }
            function m(t) {
                var e = t.parent(), n = e.data(I);
                n || (e.data(I, ++z), n = z);
                return n + "-" + o(t).getAttribute("class");
            }
            function g(t, e, n, r) {
                var i = m(e), s = i + " " + n, u = L[s] ? ++L[s].total : 0, c = {};
                if (0 < u) {
                    var l = n + "-stagger", c = i + " " + l;
                    (i = !L[c]) && e.addClass(l);
                    c = d(e, c);
                    i && e.removeClass(l);
                }
                r = r || function(t) {
                    return t();
                };
                e.addClass(n);
                var l = e.data(q) || {}, f = r(function() {
                    return d(e, s);
                });
                r = f.transitionDuration;
                i = f.animationDuration;
                if (0 === r && 0 === i) return e.removeClass(n), !1;
                e.data(q, {
                    running: l.running || 0,
                    itemIndex: u,
                    stagger: c,
                    timings: f,
                    closeAnimationFn: a
                });
                t = 0 < l.running || "setClass" == t;
                0 < r && y(e, n, t);
                0 < i && (0 < c.animationDelay && 0 === c.animationDuration) && (o(e).style[P] = "none 0s");
                return !0;
            }
            function y(t, e, n) {
                "ng-enter" != e && ("ng-move" != e && "ng-leave" != e) && n ? t.addClass(H) : o(t).style[E + M] = "none";
            }
            function _(t, e) {
                var n = E + M, r = o(t);
                r.style[n] && 0 < r.style[n].length && (r.style[n] = "");
                t.removeClass(H);
            }
            function w(t) {
                var e = P;
                t = o(t);
                t.style[e] && 0 < t.style[e].length && (t.style[e] = "");
            }
            function b(t, e, n, r) {
                function i(t) {
                    e.off(y, s);
                    e.removeClass(c);
                    k(e, n);
                    t = o(e);
                    for (var r in w) t.style.removeProperty(w[r]);
                }
                function s(t) {
                    t.stopPropagation();
                    var e = t.originalEvent || t;
                    t = e.$manualTimeStamp || e.timeStamp || Date.now();
                    e = parseFloat(e.elapsedTime.toFixed(V));
                    Math.max(t - g, 0) >= m && e >= d && r();
                }
                var a = o(e);
                t = e.data(q);
                if (-1 != a.getAttribute("class").indexOf(n) && t) {
                    var c = "";
                    u(n.split(" "), function(t, e) {
                        c += (0 < e ? " " : "") + t + "-active";
                    });
                    var l = t.stagger, f = t.timings, h = t.itemIndex, d = Math.max(f.transitionDuration, f.animationDuration), v = Math.max(f.transitionDelay, f.animationDelay), m = v * B, g = Date.now(), y = R + " " + O, _ = "", w = [];
                    if (0 < f.transitionDuration) {
                        var b = f.transitionPropertyStyle;
                        -1 == b.indexOf("all") && (_ += A + "transition-property: " + b + ";", _ += A + "transition-duration: " + f.transitionDurationStyle + ";", 
                        w.push(A + "transition-property"), w.push(A + "transition-duration"));
                    }
                    0 < h && (0 < l.transitionDelay && 0 === l.transitionDuration && (_ += A + "transition-delay: " + x(f.transitionDelayStyle, l.transitionDelay, h) + "; ", 
                    w.push(A + "transition-delay")), 0 < l.animationDelay && 0 === l.animationDuration && (_ += A + "animation-delay: " + x(f.animationDelayStyle, l.animationDelay, h) + "; ", 
                    w.push(A + "animation-delay")));
                    0 < w.length && (f = a.getAttribute("style") || "", a.setAttribute("style", f + "; " + _));
                    e.on(y, s);
                    e.addClass(c);
                    t.closeAnimationFn = function() {
                        i();
                        r();
                    };
                    a = (h * (Math.max(l.animationDelay, l.transitionDelay) || 0) + (v + d) * U) * B;
                    t.running++;
                    p(e, a);
                    return i;
                }
                r();
            }
            function x(t, e, n) {
                var r = "";
                u(t.split(","), function(t, i) {
                    r += (0 < i ? "," : "") + (n * e + parseInt(t, 10)) + "s";
                });
                return r;
            }
            function j(t, e, n, r) {
                if (g(t, e, n, r)) return function(t) {
                    t && k(e, n);
                };
            }
            function S(t, e, n, r) {
                if (e.data(q)) return b(t, e, n, r);
                k(e, n);
                r();
            }
            function C(t, e, n, r) {
                var i = j(t, e, n);
                if (i) {
                    var o = i;
                    f(e, function() {
                        _(e, n);
                        w(e);
                        o = S(t, e, n, r);
                    });
                    return function(t) {
                        (o || a)(t);
                    };
                }
                r();
            }
            function k(t, e) {
                t.removeClass(e);
                var n = t.data(q);
                n && (n.running && n.running--, n.running && 0 !== n.running || t.removeData(q));
            }
            function T(t, n) {
                var r = "";
                t = e.isArray(t) ? t : t.split(/\s+/);
                u(t, function(t, e) {
                    t && 0 < t.length && (r += (0 < e ? " " : "") + t + n);
                });
                return r;
            }
            var A = "", E, O, P, R;
            t.ontransitionend === n && t.onwebkittransitionend !== n ? (A = "-webkit-", E = "WebkitTransition", 
            O = "webkitTransitionEnd transitionend") : (E = "transition", O = "transitionend");
            t.onanimationend === n && t.onwebkitanimationend !== n ? (A = "-webkit-", P = "WebkitAnimation", 
            R = "webkitAnimationEnd animationend") : (P = "animation", R = "animationend");
            var F = "Duration", M = "Property", D = "Delay", N = "IterationCount", I = "$$ngAnimateKey", q = "$$ngAnimateCSS3Data", H = "ng-animate-block-transitions", V = 3, U = 1.5, B = 1e3, L = {}, z = 0, W = [], G, K = null, Q = 0, J = [];
            return {
                enter: function(t, e) {
                    return C("enter", t, "ng-enter", e);
                },
                leave: function(t, e) {
                    return C("leave", t, "ng-leave", e);
                },
                move: function(t, e) {
                    return C("move", t, "ng-move", e);
                },
                beforeSetClass: function(t, e, n, r) {
                    var i = T(n, "-remove") + " " + T(e, "-add"), o = j("setClass", t, i, function(r) {
                        var i = t.attr("class");
                        t.removeClass(n);
                        t.addClass(e);
                        r = r();
                        t.attr("class", i);
                        return r;
                    });
                    if (o) return f(t, function() {
                        _(t, i);
                        w(t);
                        r();
                    }), o;
                    r();
                },
                beforeAddClass: function(t, e, n) {
                    var r = j("addClass", t, T(e, "-add"), function(n) {
                        t.addClass(e);
                        n = n();
                        t.removeClass(e);
                        return n;
                    });
                    if (r) return f(t, function() {
                        _(t, e);
                        w(t);
                        n();
                    }), r;
                    n();
                },
                setClass: function(t, e, n, r) {
                    n = T(n, "-remove");
                    e = T(e, "-add");
                    return S("setClass", t, n + " " + e, r);
                },
                addClass: function(t, e, n) {
                    return S("addClass", t, T(e, "-add"), n);
                },
                beforeRemoveClass: function(t, e, n) {
                    var r = j("removeClass", t, T(e, "-remove"), function(n) {
                        var r = t.attr("class");
                        t.removeClass(e);
                        n = n();
                        t.attr("class", r);
                        return n;
                    });
                    if (r) return f(t, function() {
                        _(t, e);
                        w(t);
                        n();
                    }), r;
                    n();
                },
                removeClass: function(t, e, n) {
                    return S("removeClass", t, T(e, "-remove"), n);
                }
            };
        } ]);
    } ]);
})(window, window.angular);

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
            function a() {
                var t = Array.prototype.slice.call(arguments);
                i.$apply(function() {
                    i.$emit.apply(i, t);
                });
            }
            function u(t) {
                var e = n[t.data];
                "undefined" != typeof e && a(r + e, i.player, t), i.$apply(function() {
                    i.player.currentState = e;
                });
            }
            function c(t) {
                a(r + "ready", i.player, t);
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
                        onStateChange: u
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
        function i(s, a) {
            if (!n[s]) {
                if (!t[s]) {
                    var u = "function" == typeof require && require;
                    if (!a && u) return u(s, !0);
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
                return h.getPath(t, [ "sys", "type" ]) in T;
            }
            function s(t) {
                var e = T[t.sys.type];
                return e.parse(t);
            }
            function a(t) {
                return JSON.parse(t.body);
            }
            function u(t) {
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
                    return d(n, e).then(a).catch(Error, function(t) {
                        throw t;
                    }).catch(function(t) {
                        throw a(t);
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
                    return this.request("/content_types/" + t).then(w.parse).nodeify(e);
                },
                contentTypes: function(t, e) {
                    var n = j.parse(t);
                    return this.request("/content_types", {
                        query: n
                    }).then(h.partial(x.parse, w)).nodeify(e);
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
                            sys: C.parse(t.sys),
                            fields: t.fields
                        });
                    }
                }
            }), _ = v.Class({
                constructor: function() {},
                statics: {
                    parse: function(t) {
                        return h.extend(new _(), {
                            sys: C.parse(t.sys),
                            fields: t.fields
                        });
                    }
                }
            }), w = v.Class({
                constructor: function() {},
                statics: {
                    parse: function(t) {
                        return h.extend(new w(), {
                            sys: C.parse(t.sys),
                            fields: t.fields.map(b.parse)
                        }, h.pick(t, "name", "displayField"));
                    }
                }
            }), b = v.Class({
                constructor: function() {},
                statics: {
                    parse: function(t) {
                        return h.extend(new b(), t);
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
                        return h.extend(new j(), u(t));
                    }
                }
            }), S = v.Class({
                constructor: function() {},
                statics: {
                    parse: function(t) {
                        return h.extend(new S(), t);
                    }
                }
            }), C = v.Class({
                constructor: function() {},
                statics: {
                    parse: function(t) {
                        return h.extend(new C(), h.pick(t, "id", "revision", "type", "locale"), r({
                            contentType: t.contentType && k.parse(t.contentType),
                            createdAt: t.createdAt && new Date(t.createdAt),
                            linkType: t.linkType,
                            updatedAt: t.updatedAt && new Date(t.updatedAt),
                            space: t.space && k.parse(t.space)
                        }));
                    }
                }
            }), k = v.Class({
                constructor: function() {},
                statics: {
                    parse: function(t) {
                        return h.extend(new k(), {
                            sys: C.parse(t.sys)
                        });
                    }
                }
            });
            n.createClient = h.fnull(function(t) {
                return new g(t);
            }, {});
            var T = {
                Asset: y,
                ContentType: w,
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
                    for (var n, r = {}, i = Q(t), o = 0, s = i.length; s > o; o++) n = i[o], r[n] = K(t, n);
                    return X(void 0 === e ? J(t) : e, r);
                }
                function o(t, e, n, r) {
                    k(n || g.defaults || {}, re), k(r, re), (G.call(r, F) || G.call(r, q)) && (delete re[B], 
                    delete re[U]), $(t, e, re), te(re);
                }
                function s(t, e, n, r) {
                    o(t, e, r, n instanceof l ? n : n instanceof v ? c(t, e, n) : (oe[U] = n, oe)), 
                    delete oe[U];
                }
                function a(t, e, n) {
                    for (var r in e) G.call(e, r) && s(t, r, e[r], n);
                }
                function u(t, e) {
                    for (var n, r = 0; r < e.length; r++) n = e[r], d(n) && (n = "mixin" === (n.type || n.name) ? n.call(n) || n : n[I]), 
                    Y(t, n);
                }
                function c(t, e, n) {
                    var r, i = n._, o = G.call(n, E) ? !!n[E] : !0, s = G.call(n, P) && n[P], a = G.call(n, B) && n[B];
                    return n[F] = function() {
                        return se && (n = K(t, e), delete t[e]), re[U] = i.call(r = this), re[E] = o, re[P] = s, 
                        re[B] = a, $(r, e, re), te(re), se && (k(n, re), $(t, e, re), te(re)), r[e];
                    }, se && (n[E] = !0), n;
                }
                function l(t) {
                    k(t, this);
                }
                function f(t) {
                    return new l(t);
                }
                function p(t) {
                    return X(d(t) ? t[I] : t);
                }
                function h(t, e, n) {
                    var r = p(t);
                    return e ? g(r, e, n) : r;
                }
                function d(t) {
                    return "function" == typeof t;
                }
                function v(t) {
                    this._ = d(t) ? t : k(t, this) || t[U];
                }
                function m(t) {
                    return new v(t);
                }
                function g(t, e, n, r) {
                    return ("string" == typeof e ? s(t, e, n, r) : a(t, e, n)) || t;
                }
                function y(t) {
                    return function(e, n, r) {
                        return ("string" == typeof n ? s(e, n, r, t) : a(e, n, t)) || e;
                    };
                }
                function _(t, e) {
                    for (var n, r, i, o; e = J(e); ) for (i = Q(e), n = i.length; n--; ) if (e[r = i[n]] === t) {
                        do o = J(e), e = o; while (o[r] === t);
                        return o[r];
                    }
                }
                function w() {
                    return _(w.caller, this).apply(this, arguments);
                }
                function b(t, e) {
                    return "string" == typeof t ? b(this, t) : t[D + e] || x(t, e);
                }
                function x(t, e) {
                    return ee[U] = z.call(t[e], t), $(t, D + e, ee), ee[U] = b, t[D + e];
                }
                function j(t, e) {
                    var n, r = G.call(t, O) ? t[O] : function() {}, i = G.call(t, H) && t[H], s = G.call(t, R) && t[R];
                    if (e || (e = {}, e[B] = !0), delete t[O], s && (delete t[R], g(r[I] = p(s), "constructor", r), 
                    d(s))) for (n in s) G.call(s, n) && "name" !== n && "length" !== n && o(r, n, re, K(s, n));
                    return i && (delete t[H], a(r, i, ie)), G.call(t, M) && (u(r[I], [].concat(t[M])), 
                    delete t[M]), a(r[I], t, e), S(r[I]), A in r[I] || $(r[I], A, ee), r;
                }
                function S(t) {
                    return G.call(t, V) ? object : $(t, V, ne);
                }
                var C, k, T, A = "bound", E = "configurable", O = "constructor", P = "enumerable", R = "extend", F = "get", M = "mixin", D = "__@", N = "__proto__", I = "prototype", q = "set", H = "statics", V = "super", U = "value", B = "writable", L = n, z = n.bind || function(t) {
                    var e = this;
                    return function() {
                        return e.apply(t, arguments);
                    };
                }, W = function(e, n) {
                    return t[e] || r[e] || n;
                }, $ = W("defineProperty"), G = W("hasOwnProperty"), K = W("getOwnPropertyDescriptor"), Q = W("getOwnPropertyNames", r.keys), J = W("getPrototypeOf", function(t) {
                    return t[N];
                }), Y = r.mixin || function(t, e) {
                    for (var n = Q(e), r = n.length; r--; o(t, n[r], re, K(e, n[r]))) ;
                    return t;
                }, X = t.create || t.inherit || r.create, Z = [ E, P, F, q, U, B ], te = L("o", "delete o." + Z.join(";delete o.")), ee = X(null), ne = X(null), re = X(null), ie = {}, oe = {}, se = !1;
                for (ie[B] = !0, ie[P] = !0, C = 0; C < Z.length; C++) Z[C] = [ 'if(h.call(a,"', '"))b.', "=a.", ";" ].join(Z[C]);
                k = L("h", "return function(a,b){" + Z.join("") + "}")(G), ne[U] = function ue(t) {
                    return z.apply(_(ue.caller, t), arguments);
                }, ne[E] = ne[P] = ne[B] = !1, $(w, "bind", ne), ne[U] = w, ee[P] = !1, ee[E] = ee[B] = !0, 
                ee[U] = b, g.from = h, g.Class = j, g[V] = S, g.mixin = Y, g.bound = b, g.clone = i, 
                g.as = f, g.later = m, g.using = y, g.defaults = {}, "undefined" != typeof e && e.exports && ((e.exports = g).redefine = g), 
                t.mixin ? t.mixin({
                    redefine: g
                }) : t.redefine = g;
                try {
                    T = X(g({}, {
                        _: m(r)
                    }))._;
                } catch (ae) {
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
                var t = this, r = t._, i = {}, o = Array.prototype, s = Object.prototype, a = Function.prototype, u = o.push, c = o.slice, l = o.concat, f = s.toString, p = s.hasOwnProperty, h = o.forEach, d = o.map, v = o.reduce, m = o.reduceRight, g = o.filter, y = o.every, _ = o.some, w = o.indexOf, b = o.lastIndexOf, x = Array.isArray, j = Object.keys, S = a.bind, C = function(t) {
                    return t instanceof C ? t : this instanceof C ? void (this._wrapped = t) : new C(t);
                };
                "undefined" != typeof n ? ("undefined" != typeof e && e.exports && (n = e.exports = C), 
                n._ = C) : t._ = C, C.VERSION = "1.5.2";
                var k = C.each = C.forEach = function(t, e, n) {
                    if (null != t) if (h && t.forEach === h) t.forEach(e, n); else if (t.length === +t.length) {
                        for (var r = 0, o = t.length; o > r; r++) if (e.call(n, t[r], r, t) === i) return;
                    } else for (var s = C.keys(t), r = 0, o = s.length; o > r; r++) if (e.call(n, t[s[r]], s[r], t) === i) return;
                };
                C.map = C.collect = function(t, e, n) {
                    var r = [];
                    return null == t ? r : d && t.map === d ? t.map(e, n) : (k(t, function(t, i, o) {
                        r.push(e.call(n, t, i, o));
                    }), r);
                };
                var T = "Reduce of empty array with no initial value";
                C.reduce = C.foldl = C.inject = function(t, e, n, r) {
                    var i = arguments.length > 2;
                    if (null == t && (t = []), v && t.reduce === v) return r && (e = C.bind(e, r)), 
                    i ? t.reduce(e, n) : t.reduce(e);
                    if (k(t, function(t, o, s) {
                        i ? n = e.call(r, n, t, o, s) : (n = t, i = !0);
                    }), !i) throw new TypeError(T);
                    return n;
                }, C.reduceRight = C.foldr = function(t, e, n, r) {
                    var i = arguments.length > 2;
                    if (null == t && (t = []), m && t.reduceRight === m) return r && (e = C.bind(e, r)), 
                    i ? t.reduceRight(e, n) : t.reduceRight(e);
                    var o = t.length;
                    if (o !== +o) {
                        var s = C.keys(t);
                        o = s.length;
                    }
                    if (k(t, function(a, u, c) {
                        u = s ? s[--o] : --o, i ? n = e.call(r, n, t[u], u, c) : (n = t[u], i = !0);
                    }), !i) throw new TypeError(T);
                    return n;
                }, C.find = C.detect = function(t, e, n) {
                    var r;
                    return A(t, function(t, i, o) {
                        return e.call(n, t, i, o) ? (r = t, !0) : void 0;
                    }), r;
                }, C.filter = C.select = function(t, e, n) {
                    var r = [];
                    return null == t ? r : g && t.filter === g ? t.filter(e, n) : (k(t, function(t, i, o) {
                        e.call(n, t, i, o) && r.push(t);
                    }), r);
                }, C.reject = function(t, e, n) {
                    return C.filter(t, function(t, r, i) {
                        return !e.call(n, t, r, i);
                    }, n);
                }, C.every = C.all = function(t, e, n) {
                    e || (e = C.identity);
                    var r = !0;
                    return null == t ? r : y && t.every === y ? t.every(e, n) : (k(t, function(t, o, s) {
                        return (r = r && e.call(n, t, o, s)) ? void 0 : i;
                    }), !!r);
                };
                var A = C.some = C.any = function(t, e, n) {
                    e || (e = C.identity);
                    var r = !1;
                    return null == t ? r : _ && t.some === _ ? t.some(e, n) : (k(t, function(t, o, s) {
                        return r || (r = e.call(n, t, o, s)) ? i : void 0;
                    }), !!r);
                };
                C.contains = C.include = function(t, e) {
                    return null == t ? !1 : w && t.indexOf === w ? -1 != t.indexOf(e) : A(t, function(t) {
                        return t === e;
                    });
                }, C.invoke = function(t, e) {
                    var n = c.call(arguments, 2), r = C.isFunction(e);
                    return C.map(t, function(t) {
                        return (r ? e : t[e]).apply(t, n);
                    });
                }, C.pluck = function(t, e) {
                    return C.map(t, function(t) {
                        return t[e];
                    });
                }, C.where = function(t, e, n) {
                    return C.isEmpty(e) ? n ? void 0 : [] : C[n ? "find" : "filter"](t, function(t) {
                        for (var n in e) if (e[n] !== t[n]) return !1;
                        return !0;
                    });
                }, C.findWhere = function(t, e) {
                    return C.where(t, e, !0);
                }, C.max = function(t, e, n) {
                    if (!e && C.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.max.apply(Math, t);
                    if (!e && C.isEmpty(t)) return -1 / 0;
                    var r = {
                        computed: -1 / 0,
                        value: -1 / 0
                    };
                    return k(t, function(t, i, o) {
                        var s = e ? e.call(n, t, i, o) : t;
                        s > r.computed && (r = {
                            value: t,
                            computed: s
                        });
                    }), r.value;
                }, C.min = function(t, e, n) {
                    if (!e && C.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.min.apply(Math, t);
                    if (!e && C.isEmpty(t)) return 1 / 0;
                    var r = {
                        computed: 1 / 0,
                        value: 1 / 0
                    };
                    return k(t, function(t, i, o) {
                        var s = e ? e.call(n, t, i, o) : t;
                        s < r.computed && (r = {
                            value: t,
                            computed: s
                        });
                    }), r.value;
                }, C.shuffle = function(t) {
                    var e, n = 0, r = [];
                    return k(t, function(t) {
                        e = C.random(n++), r[n - 1] = r[e], r[e] = t;
                    }), r;
                }, C.sample = function(t, e, n) {
                    return arguments.length < 2 || n ? t[C.random(t.length - 1)] : C.shuffle(t).slice(0, Math.max(0, e));
                };
                var E = function(t) {
                    return C.isFunction(t) ? t : function(e) {
                        return e[t];
                    };
                };
                C.sortBy = function(t, e, n) {
                    var r = E(e);
                    return C.pluck(C.map(t, function(t, e, i) {
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
                        var i = {}, o = null == n ? C.identity : E(n);
                        return k(e, function(n, s) {
                            var a = o.call(r, n, s, e);
                            t(i, a, n);
                        }), i;
                    };
                };
                C.groupBy = O(function(t, e, n) {
                    (C.has(t, e) ? t[e] : t[e] = []).push(n);
                }), C.indexBy = O(function(t, e, n) {
                    t[e] = n;
                }), C.countBy = O(function(t, e) {
                    C.has(t, e) ? t[e]++ : t[e] = 1;
                }), C.sortedIndex = function(t, e, n, r) {
                    n = null == n ? C.identity : E(n);
                    for (var i = n.call(r, e), o = 0, s = t.length; s > o; ) {
                        var a = o + s >>> 1;
                        n.call(r, t[a]) < i ? o = a + 1 : s = a;
                    }
                    return o;
                }, C.toArray = function(t) {
                    return t ? C.isArray(t) ? c.call(t) : t.length === +t.length ? C.map(t, C.identity) : C.values(t) : [];
                }, C.size = function(t) {
                    return null == t ? 0 : t.length === +t.length ? t.length : C.keys(t).length;
                }, C.first = C.head = C.take = function(t, e, n) {
                    return null == t ? void 0 : null == e || n ? t[0] : c.call(t, 0, e);
                }, C.initial = function(t, e, n) {
                    return c.call(t, 0, t.length - (null == e || n ? 1 : e));
                }, C.last = function(t, e, n) {
                    return null == t ? void 0 : null == e || n ? t[t.length - 1] : c.call(t, Math.max(t.length - e, 0));
                }, C.rest = C.tail = C.drop = function(t, e, n) {
                    return c.call(t, null == e || n ? 1 : e);
                }, C.compact = function(t) {
                    return C.filter(t, C.identity);
                };
                var P = function(t, e, n) {
                    return e && C.every(t, C.isArray) ? l.apply(n, t) : (k(t, function(t) {
                        C.isArray(t) || C.isArguments(t) ? e ? u.apply(n, t) : P(t, e, n) : n.push(t);
                    }), n);
                };
                C.flatten = function(t, e) {
                    return P(t, e, []);
                }, C.without = function(t) {
                    return C.difference(t, c.call(arguments, 1));
                }, C.uniq = C.unique = function(t, e, n, r) {
                    C.isFunction(e) && (r = n, n = e, e = !1);
                    var i = n ? C.map(t, n, r) : t, o = [], s = [];
                    return k(i, function(n, r) {
                        (e ? r && s[s.length - 1] === n : C.contains(s, n)) || (s.push(n), o.push(t[r]));
                    }), o;
                }, C.union = function() {
                    return C.uniq(C.flatten(arguments, !0));
                }, C.intersection = function(t) {
                    var e = c.call(arguments, 1);
                    return C.filter(C.uniq(t), function(t) {
                        return C.every(e, function(e) {
                            return C.indexOf(e, t) >= 0;
                        });
                    });
                }, C.difference = function(t) {
                    var e = l.apply(o, c.call(arguments, 1));
                    return C.filter(t, function(t) {
                        return !C.contains(e, t);
                    });
                }, C.zip = function() {
                    for (var t = C.max(C.pluck(arguments, "length").concat(0)), e = new Array(t), n = 0; t > n; n++) e[n] = C.pluck(arguments, "" + n);
                    return e;
                }, C.object = function(t, e) {
                    if (null == t) return {};
                    for (var n = {}, r = 0, i = t.length; i > r; r++) e ? n[t[r]] = e[r] : n[t[r][0]] = t[r][1];
                    return n;
                }, C.indexOf = function(t, e, n) {
                    if (null == t) return -1;
                    var r = 0, i = t.length;
                    if (n) {
                        if ("number" != typeof n) return r = C.sortedIndex(t, e), t[r] === e ? r : -1;
                        r = 0 > n ? Math.max(0, i + n) : n;
                    }
                    if (w && t.indexOf === w) return t.indexOf(e, n);
                    for (;i > r; r++) if (t[r] === e) return r;
                    return -1;
                }, C.lastIndexOf = function(t, e, n) {
                    if (null == t) return -1;
                    var r = null != n;
                    if (b && t.lastIndexOf === b) return r ? t.lastIndexOf(e, n) : t.lastIndexOf(e);
                    for (var i = r ? n : t.length; i--; ) if (t[i] === e) return i;
                    return -1;
                }, C.range = function(t, e, n) {
                    arguments.length <= 1 && (e = t || 0, t = 0), n = arguments[2] || 1;
                    for (var r = Math.max(Math.ceil((e - t) / n), 0), i = 0, o = new Array(r); r > i; ) o[i++] = t, 
                    t += n;
                    return o;
                };
                var R = function() {};
                C.bind = function(t, e) {
                    var n, r;
                    if (S && t.bind === S) return S.apply(t, c.call(arguments, 1));
                    if (!C.isFunction(t)) throw new TypeError();
                    return n = c.call(arguments, 2), r = function() {
                        if (!(this instanceof r)) return t.apply(e, n.concat(c.call(arguments)));
                        R.prototype = t.prototype;
                        var i = new R();
                        R.prototype = null;
                        var o = t.apply(i, n.concat(c.call(arguments)));
                        return Object(o) === o ? o : i;
                    };
                }, C.partial = function(t) {
                    var e = c.call(arguments, 1);
                    return function() {
                        return t.apply(this, e.concat(c.call(arguments)));
                    };
                }, C.bindAll = function(t) {
                    var e = c.call(arguments, 1);
                    if (0 === e.length) throw new Error("bindAll must be passed function names");
                    return k(e, function(e) {
                        t[e] = C.bind(t[e], t);
                    }), t;
                }, C.memoize = function(t, e) {
                    var n = {};
                    return e || (e = C.identity), function() {
                        var r = e.apply(this, arguments);
                        return C.has(n, r) ? n[r] : n[r] = t.apply(this, arguments);
                    };
                }, C.delay = function(t, e) {
                    var n = c.call(arguments, 2);
                    return setTimeout(function() {
                        return t.apply(null, n);
                    }, e);
                }, C.defer = function(t) {
                    return C.delay.apply(C, [ t, 1 ].concat(c.call(arguments, 1)));
                }, C.throttle = function(t, e, n) {
                    var r, i, o, s = null, a = 0;
                    n || (n = {});
                    var u = function() {
                        a = n.leading === !1 ? 0 : new Date(), s = null, o = t.apply(r, i);
                    };
                    return function() {
                        var c = new Date();
                        a || n.leading !== !1 || (a = c);
                        var l = e - (c - a);
                        return r = this, i = arguments, 0 >= l ? (clearTimeout(s), s = null, a = c, o = t.apply(r, i)) : s || n.trailing === !1 || (s = setTimeout(u, l)), 
                        o;
                    };
                }, C.debounce = function(t, e, n) {
                    var r, i, o, s, a;
                    return function() {
                        o = this, i = arguments, s = new Date();
                        var u = function() {
                            var c = new Date() - s;
                            e > c ? r = setTimeout(u, e - c) : (r = null, n || (a = t.apply(o, i)));
                        }, c = n && !r;
                        return r || (r = setTimeout(u, e)), c && (a = t.apply(o, i)), a;
                    };
                }, C.once = function(t) {
                    var e, n = !1;
                    return function() {
                        return n ? e : (n = !0, e = t.apply(this, arguments), t = null, e);
                    };
                }, C.wrap = function(t, e) {
                    return function() {
                        var n = [ t ];
                        return u.apply(n, arguments), e.apply(this, n);
                    };
                }, C.compose = function() {
                    var t = arguments;
                    return function() {
                        for (var e = arguments, n = t.length - 1; n >= 0; n--) e = [ t[n].apply(this, e) ];
                        return e[0];
                    };
                }, C.after = function(t, e) {
                    return function() {
                        return --t < 1 ? e.apply(this, arguments) : void 0;
                    };
                }, C.keys = j || function(t) {
                    if (t !== Object(t)) throw new TypeError("Invalid object");
                    var e = [];
                    for (var n in t) C.has(t, n) && e.push(n);
                    return e;
                }, C.values = function(t) {
                    for (var e = C.keys(t), n = e.length, r = new Array(n), i = 0; n > i; i++) r[i] = t[e[i]];
                    return r;
                }, C.pairs = function(t) {
                    for (var e = C.keys(t), n = e.length, r = new Array(n), i = 0; n > i; i++) r[i] = [ e[i], t[e[i]] ];
                    return r;
                }, C.invert = function(t) {
                    for (var e = {}, n = C.keys(t), r = 0, i = n.length; i > r; r++) e[t[n[r]]] = n[r];
                    return e;
                }, C.functions = C.methods = function(t) {
                    var e = [];
                    for (var n in t) C.isFunction(t[n]) && e.push(n);
                    return e.sort();
                }, C.extend = function(t) {
                    return k(c.call(arguments, 1), function(e) {
                        if (e) for (var n in e) t[n] = e[n];
                    }), t;
                }, C.pick = function(t) {
                    var e = {}, n = l.apply(o, c.call(arguments, 1));
                    return k(n, function(n) {
                        n in t && (e[n] = t[n]);
                    }), e;
                }, C.omit = function(t) {
                    var e = {}, n = l.apply(o, c.call(arguments, 1));
                    for (var r in t) C.contains(n, r) || (e[r] = t[r]);
                    return e;
                }, C.defaults = function(t) {
                    return k(c.call(arguments, 1), function(e) {
                        if (e) for (var n in e) void 0 === t[n] && (t[n] = e[n]);
                    }), t;
                }, C.clone = function(t) {
                    return C.isObject(t) ? C.isArray(t) ? t.slice() : C.extend({}, t) : t;
                }, C.tap = function(t, e) {
                    return e(t), t;
                };
                var F = function(t, e, n, r) {
                    if (t === e) return 0 !== t || 1 / t == 1 / e;
                    if (null == t || null == e) return t === e;
                    t instanceof C && (t = t._wrapped), e instanceof C && (e = e._wrapped);
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
                    var s = t.constructor, a = e.constructor;
                    if (s !== a && !(C.isFunction(s) && s instanceof s && C.isFunction(a) && a instanceof a)) return !1;
                    n.push(t), r.push(e);
                    var u = 0, c = !0;
                    if ("[object Array]" == i) {
                        if (u = t.length, c = u == e.length) for (;u-- && (c = F(t[u], e[u], n, r)); ) ;
                    } else {
                        for (var l in t) if (C.has(t, l) && (u++, !(c = C.has(e, l) && F(t[l], e[l], n, r)))) break;
                        if (c) {
                            for (l in e) if (C.has(e, l) && !u--) break;
                            c = !u;
                        }
                    }
                    return n.pop(), r.pop(), c;
                };
                C.isEqual = function(t, e) {
                    return F(t, e, [], []);
                }, C.isEmpty = function(t) {
                    if (null == t) return !0;
                    if (C.isArray(t) || C.isString(t)) return 0 === t.length;
                    for (var e in t) if (C.has(t, e)) return !1;
                    return !0;
                }, C.isElement = function(t) {
                    return !(!t || 1 !== t.nodeType);
                }, C.isArray = x || function(t) {
                    return "[object Array]" == f.call(t);
                }, C.isObject = function(t) {
                    return t === Object(t);
                }, k([ "Arguments", "Function", "String", "Number", "Date", "RegExp" ], function(t) {
                    C["is" + t] = function(e) {
                        return f.call(e) == "[object " + t + "]";
                    };
                }), C.isArguments(arguments) || (C.isArguments = function(t) {
                    return !(!t || !C.has(t, "callee"));
                }), "function" != typeof /./ && (C.isFunction = function(t) {
                    return "function" == typeof t;
                }), C.isFinite = function(t) {
                    return isFinite(t) && !isNaN(parseFloat(t));
                }, C.isNaN = function(t) {
                    return C.isNumber(t) && t != +t;
                }, C.isBoolean = function(t) {
                    return t === !0 || t === !1 || "[object Boolean]" == f.call(t);
                }, C.isNull = function(t) {
                    return null === t;
                }, C.isUndefined = function(t) {
                    return void 0 === t;
                }, C.has = function(t, e) {
                    return p.call(t, e);
                }, C.noConflict = function() {
                    return t._ = r, this;
                }, C.identity = function(t) {
                    return t;
                }, C.times = function(t, e, n) {
                    for (var r = Array(Math.max(0, t)), i = 0; t > i; i++) r[i] = e.call(n, i);
                    return r;
                }, C.random = function(t, e) {
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
                M.unescape = C.invert(M.escape);
                var D = {
                    escape: new RegExp("[" + C.keys(M.escape).join("") + "]", "g"),
                    unescape: new RegExp("(" + C.keys(M.unescape).join("|") + ")", "g")
                };
                C.each([ "escape", "unescape" ], function(t) {
                    C[t] = function(e) {
                        return null == e ? "" : ("" + e).replace(D[t], function(e) {
                            return M[t][e];
                        });
                    };
                }), C.result = function(t, e) {
                    if (null == t) return void 0;
                    var n = t[e];
                    return C.isFunction(n) ? n.call(t) : n;
                }, C.mixin = function(t) {
                    k(C.functions(t), function(e) {
                        var n = C[e] = t[e];
                        C.prototype[e] = function() {
                            var t = [ this._wrapped ];
                            return u.apply(t, arguments), V.call(this, n.apply(C, t));
                        };
                    });
                };
                var N = 0;
                C.uniqueId = function(t) {
                    var e = ++N + "";
                    return t ? t + e : e;
                }, C.templateSettings = {
                    evaluate: /<%([\s\S]+?)%>/g,
                    interpolate: /<%=([\s\S]+?)%>/g,
                    escape: /<%-([\s\S]+?)%>/g
                };
                var I = /(.)^/, q = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "	": "t",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                }, H = /\\|'|\r|\n|\t|\u2028|\u2029/g;
                C.template = function(t, e, n) {
                    var r;
                    n = C.defaults({}, n, C.templateSettings);
                    var i = new RegExp([ (n.escape || I).source, (n.interpolate || I).source, (n.evaluate || I).source ].join("|") + "|$", "g"), o = 0, s = "__p+='";
                    t.replace(i, function(e, n, r, i, a) {
                        return s += t.slice(o, a).replace(H, function(t) {
                            return "\\" + q[t];
                        }), n && (s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (s += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), 
                        i && (s += "';\n" + i + "\n__p+='"), o = a + e.length, e;
                    }), s += "';\n", n.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
                    try {
                        r = new Function(n.variable || "obj", "_", s);
                    } catch (a) {
                        throw a.source = s, a;
                    }
                    if (e) return r(e, C);
                    var u = function(t) {
                        return r.call(this, t, C);
                    };
                    return u.source = "function(" + (n.variable || "obj") + "){\n" + s + "}", u;
                }, C.chain = function(t) {
                    return C(t).chain();
                };
                var V = function(t) {
                    return this._chain ? C(t).chain() : t;
                };
                C.mixin(C), k([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(t) {
                    var e = o[t];
                    C.prototype[t] = function() {
                        var n = this._wrapped;
                        return e.apply(n, arguments), "shift" != t && "splice" != t || 0 !== n.length || delete n[0], 
                        V.call(this, n);
                    };
                }), k([ "concat", "join", "slice" ], function(t) {
                    var e = o[t];
                    C.prototype[t] = function() {
                        return V.call(this, e.apply(this._wrapped, arguments));
                    };
                }), C.extend(C.prototype, {
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
                }, a = function(t) {
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
                        if (!a(t)) throw new TypeError();
                        for (var r = n.size(t), i = 0; r > i && s(e(t[i])); i++) ;
                        return n.take(t, i);
                    },
                    dropWhile: function(t, e) {
                        if (!a(t)) throw new TypeError();
                        for (var r = n.size(t), i = 0; r > i && s(e(t[i])); i++) ;
                        return n.drop(t, i);
                    },
                    splitWith: function(t, e) {
                        return [ n.takeWhile(t, e), n.dropWhile(t, e) ];
                    },
                    partitionBy: function(t, e) {
                        if (n.isEmpty(t) || !o(t)) return [];
                        var r = n.first(t), s = e(r), a = i.call([ r ], n.takeWhile(n.rest(t), function(t) {
                            return n.isEqual(s, e(t));
                        }));
                        return i.call([ a ], n.partitionBy(n.drop(t, n.size(a)), e));
                    },
                    best: function(t, e) {
                        return n.reduce(t, function(t, n) {
                            return e(t, n) ? t : n;
                        });
                    },
                    keep: function(t, e) {
                        if (!a(t)) throw new TypeError("expected an array as the first argument");
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
                            if (l.indexOf(t) >= 0) throw new TypeError(u);
                            l.push(t);
                        }
                        if (n) {
                            var d = n.call(i, t, p, h);
                            if (d === a) return a;
                            if (d === s) return;
                        }
                        var v, m = e(t);
                        if (o.isObject(m) && !o.isEmpty(m)) {
                            c && (v = o.isArray(t) ? [] : {});
                            var g = o.any(m, function(e, n) {
                                var r = f(e, n, t);
                                return r === a ? !0 : void (v && (v[n] = r));
                            });
                            if (g) return a;
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
                var o = e._ || t("underscore"), s = {}, a = {}, u = "Not a tree: same object found in two different branches", c = {
                    find: function(t, e, n) {
                        var r;
                        return this.preorder(t, function(t, i, o) {
                            return e.call(n, t, i, o) ? (r = t, a) : void 0;
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
                    function t(e, r, i, o, s, a) {
                        return a === !0 ? o.unshift(s) : o.push(s), o.length == i ? e.apply(r, o) : n(function() {
                            return t(e, r, i, o.slice(0), arguments[0], a);
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
                            var s = i.join(), a = "return function (" + s + ") { return fun.apply(this, arguments); };";
                            t[n] = new Function([ "fun" ], a);
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
                        return t.apply(this, u.call(arguments, e));
                    });
                }
                var r = e._ || t("underscore"), i = function(t) {
                    return null != t;
                }, o = function(t) {
                    return t !== !1 && i(t);
                }, s = [].reverse, a = [].slice, u = [].map, c = function(t) {
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
                            return t.call(this, a.call(arguments, 0));
                        } : function() {
                            var n = arguments.length, r = a.call(arguments, 0, e - 1), i = Math.max(e - n - 1, 0), o = new Array(i), s = a.call(arguments, t.length - 1);
                            return t.apply(this, r.concat(o).concat([ s ]));
                        };
                    },
                    unsplatl: function(t) {
                        var e = t.length;
                        return 1 > e ? t : 1 === e ? function() {
                            return t.call(this, a.call(arguments, 0));
                        } : function() {
                            var n = arguments.length, r = a.call(arguments, Math.max(n - e + 1, 0)), i = a.call(arguments, 0, Math.max(n - e + 1, 0));
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
                            var e = a.call(arguments);
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
                function a(t, e, n) {
                    var r, i, o = n;
                    return function() {
                        return i = t(), null == i ? i : void 0 === o ? o = i : (r = e.call(i, o, i), o = r[0], 
                        r[1]);
                    };
                }
                function u(t, e) {
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
                function w(t, e, n) {
                    return function() {
                        var r;
                        return e > t ? void 0 : (r = t, t -= n, r);
                    };
                }
                function b(t, e, n) {
                    return null == t ? _(1, 1 / 0, 1) : null == e ? _(t, 1 / 0, 1) : null == n ? e >= t ? _(t, e, 1) : w(t, e, 1) : n > 0 ? _(t, e, n) : 0 > n ? w(t, e, Math.abs(n)) : k(t);
                }
                var x = e._ || t("underscore"), j = {}, S = n(b);
                x.iterators = {
                    accumulate: s,
                    accumulateWithReturn: a,
                    foldl: r,
                    reduce: r,
                    unfold: i,
                    unfoldWithReturn: o,
                    map: u,
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
                    range: b
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
                }, a = function(t) {
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
                        var a = n.isArray(r), u = a ? r : [ r ], c = a ? n.snapshot(t) : n.clone(t), l = n.last(u), f = c;
                        return n.each(n.initial(u), function(t) {
                            o && !n.has(f, t) && (f[t] = n.clone(o)), f = f[t];
                        }), f[l] = e(f[l]), c;
                    },
                    setPath: function(t, e, r, o) {
                        if (!i(r)) throw new TypeError("Attempted to set a property at a null path.");
                        return n.updatePath(t, function() {
                            return e;
                        }, r, o);
                    },
                    frequencies: a(n.countBy)(n.identity)
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
                        return T.reduce(arguments, t);
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
                function a(t, e) {
                    return t * e;
                }
                function u(t, e) {
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
                function w(t, e) {
                    return t == e;
                }
                function b(t, e) {
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
                function C(t, e) {
                    return t >= e;
                }
                function k(t, e) {
                    return e >= t;
                }
                var T = e._ || t("underscore");
                T.mixin({
                    add: n(o),
                    sub: n(s),
                    mul: n(a),
                    div: n(u),
                    mod: c,
                    inc: l,
                    dec: f,
                    neg: p,
                    eq: r(w),
                    seq: r(b),
                    neq: i(r(w)),
                    sneq: i(r(b)),
                    not: x,
                    gt: r(j),
                    lt: r(S),
                    gte: r(C),
                    lte: r(k),
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
                    function o(a, u) {
                        if (!r[a]) {
                            if (!n[a]) {
                                var c = "function" == typeof e && e;
                                if (!u && c) return c(a, !0);
                                if (s) return s(a, !0);
                                throw new Error("Cannot find module '" + a + "'");
                            }
                            var l = r[a] = {
                                exports: {}
                            };
                            n[a][0].call(l.exports, function(t) {
                                var e = n[a][1][t];
                                return o(e ? e : t);
                            }, l, l.exports, t, n, r, i);
                        }
                        return r[a].exports;
                    }
                    for (var s = "function" == typeof e && e, a = 0; a < i.length; a++) o(i[a]);
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
                                    var s = i.substring(0, o), a = i.substring(o + 2);
                                    e[s] = a;
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
                            var i = (t("./assert.js"), t("./util.js").inherits), o = t("./es5.js").defineProperty, s = new RegExp("\\b(?:[\\w.]*Promise(?:Array|Spawn)?\\$_\\w+|tryCatch(?:1|2|Apply)|new \\w*PromiseArray|\\w*PromiseArray\\.\\w*PromiseArray|setTimeout|CatchFilter\\$_\\w+|makeNodePromisified|processImmediate|process._tickCallback|nextTick|Async\\$\\w+)\\b"), a = null, u = null, c = !1;
                            i(r, Error), r.prototype.captureStackTrace = function(t, e) {
                                l(this, t, e);
                            }, r.possiblyUnhandledRejection = function(t) {
                                if ("object" == typeof console) {
                                    var e;
                                    if ("object" == typeof t || "function" == typeof t) {
                                        var n = t.stack;
                                        e = "Possibly unhandled " + u(n, t);
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
                                for (var o = t.concat(e), u = [], r = 0, c = o.length; c > r; ++r) s.test(o[r]) || r > 0 && !a.test(o[r]) && "From previous event:" !== o[r] || u.push(o[r]);
                                return u;
                            }, r.isSupported = function() {
                                return "function" == typeof l;
                            };
                            var l = function f() {
                                if ("number" == typeof Error.stackTraceLimit && "function" == typeof Error.captureStackTrace) {
                                    a = /^\s*at\s*/, u = function(t, n) {
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
                                    }), a = /@/;
                                    var r = /[@\n]/;
                                    return u = function(t, n) {
                                        return "string" == typeof t ? n.name + ". " + n.message + "\n" + t : void 0 !== n.name && void 0 !== n.message ? n.name + ". " + n.message : e(n);
                                    }, function(t, e) {
                                        var n, i = e.name, o = new Error().stack, s = o.split(r), a = s.length;
                                        for (n = 0; a > n && s[n] !== i; n += 2) ;
                                        s = s.slice(n + 2), a = s.length - 2;
                                        var u = "";
                                        for (n = 0; a > n; n += 2) u += s[n], u += "@", u += s[n + 1], u += "\n";
                                        t.stack = u;
                                    };
                                }
                                return u = function(t, n) {
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
                                var i = a(n);
                                return i.length ? (s.e = new TypeError("Catch filter must inherit from Error or be a simple predicate function"), 
                                s) : r;
                            }
                            var i = t("./util.js"), o = i.tryCatch1, s = i.errorObj, a = t("./es5.js").keys;
                            return n.prototype.doFilter = function(t) {
                                for (var n = this._callback, i = this._promise, a = i._isBound() ? i._boundTo : void 0, u = 0, c = this._instances.length; c > u; ++u) {
                                    var l = this._instances[u], f = l === Error || null != l && l.prototype instanceof Error;
                                    if (f && t instanceof l) {
                                        var p = o(n, a, t);
                                        return p === s ? (e.e = p.e, e) : p;
                                    }
                                    if ("function" == typeof l && !f) {
                                        var h = r(l, t);
                                        if (h === s) {
                                            this._promise._attachExtraTrace(s.e), t = s.e;
                                            break;
                                        }
                                        if (h) {
                                            var p = o(n, a, t);
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
                        function a(t) {
                            var e;
                            return _(t) && void 0 !== (e = t.__promiseHandled__) && (t.__promiseHandled__ = s(e)), 
                            t;
                        }
                        function u(t) {
                            try {
                                w(t, "__rejectionError__", d);
                            } catch (e) {}
                        }
                        function c(t) {
                            return null == t ? !1 : t instanceof d || t.__rejectionError__ === d;
                        }
                        function l(t) {
                            try {
                                return w(t, "__promiseHandled__", 0), !0;
                            } catch (e) {
                                return !1;
                            }
                        }
                        function f(t) {
                            return t instanceof b;
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
                                this.message = "string" == typeof n ? n : e, this.name = t, b.captureStackTrace && b.captureStackTrace(this, this.constructor);
                            }
                            return y(n, b), n;
                        }
                        function d(t) {
                            this.name = "RejectionError", this.message = t, this.cause = t, t instanceof b ? (this.message = t.message, 
                            this.stack = t.stack) : b.captureStackTrace && b.captureStackTrace(this, this.constructor);
                        }
                        var v = t("./global.js"), m = t("./es5.js").freeze, g = t("./util.js"), y = g.inherits, _ = g.isObject, w = g.notEnumerableProp, b = v.Error, x = v.TypeError;
                        "function" != typeof x && (x = h("TypeError", "type error"));
                        var j = v.RangeError;
                        "function" != typeof j && (j = h("RangeError", "range error"));
                        var S = h("CancellationError", "cancellation error"), C = h("TimeoutError", "timeout error");
                        y(d, b);
                        var k = "__BluebirdErrorTypes__", T = v[k];
                        T || (T = m({
                            CancellationError: S,
                            TimeoutError: C,
                            RejectionError: d
                        }), w(v, k, T)), e.exports = {
                            Error: b,
                            TypeError: x,
                            RangeError: j,
                            CancellationError: T.CancellationError,
                            RejectionError: T.RejectionError,
                            TimeoutError: T.TimeoutError,
                            originatesFromRejection: c,
                            markAsOriginatingFromRejection: u,
                            attachDefaultState: l,
                            ensureNotHandled: a,
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
                            for (var n in t) u.call(t, n) && e.push(n);
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
                        var a = function() {
                            "use strict";
                            return void 0 === this;
                        }();
                        if (a) e.exports = {
                            freeze: Object.freeze,
                            defineProperty: Object.defineProperty,
                            keys: Object.keys,
                            getPrototypeOf: Object.getPrototypeOf,
                            isArray: Array.isArray,
                            isES5: a
                        }; else {
                            var u = {}.hasOwnProperty, c = {}.toString, l = {}.constructor.prototype;
                            e.exports = {
                                isArray: s,
                                keys: n,
                                defineProperty: r,
                                freeze: i,
                                getPrototypeOf: o,
                                isES5: a
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
                            function a(t, e, n) {
                                var u = f && p(e);
                                return n ? t._then(u ? r : o(e), h, void 0, e, void 0, a) : t._then(u ? i : s(e), h, void 0, e, void 0, a);
                            }
                            function u(t) {
                                var r = this.promise, i = this.handler, o = r._isBound() ? i.call(r._boundTo) : i();
                                if (void 0 !== o) {
                                    var s = e._cast(o, u, void 0);
                                    if (e.is(s)) return a(s, t, r.isFulfilled());
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
                                return this._then(u, u, void 0, e, void 0, this.lastly);
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
                                var a = !1, u = new Array(t.length);
                                if (void 0 === s) {
                                    for (var c = 0, l = t.length; l > c; ++c) if (void 0 !== t[c] || c in t) {
                                        var f = i(t[c], c, l);
                                        if (!a) {
                                            var p = e._cast(f, o, void 0);
                                            if (p instanceof e) {
                                                if (p.isFulfilled()) {
                                                    u[c] = p._settledValue;
                                                    continue;
                                                }
                                                a = !0, f = p;
                                            }
                                        }
                                        u[c] = f;
                                    }
                                } else for (var c = 0, l = t.length; l > c; ++c) if (void 0 !== t[c] || c in t) {
                                    var f = i.call(s, t[c], c, l);
                                    if (!a) {
                                        var p = e._cast(f, o, void 0);
                                        if (p instanceof e) {
                                            if (p.isFulfilled()) {
                                                u[c] = p._settledValue;
                                                continue;
                                            }
                                            a = !0, f = p;
                                        }
                                    }
                                    u[c] = f;
                                }
                                return a ? n(u, r, o, void 0).promise() : u;
                            }
                            function s(t, e, s, a, u) {
                                if ("function" != typeof e) return i("fn must be a function");
                                s === !0 && t._isBound() && (e = {
                                    fn: e,
                                    receiver: t._boundTo
                                });
                                var c = n(t, r, a, s === !0 && t._isBound() ? t._boundTo : void 0).promise();
                                return void 0 !== u && (u.ref = c), c._then(o, void 0, void 0, e, void 0, a);
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
                                var r = this, i = a(r, e, null, t);
                                i === c && s.invokeLater(n, void 0, i.e);
                            }
                            function i(t, e) {
                                var r = this, i = u(r, e, t);
                                i === c && s.invokeLater(n, void 0, i.e);
                            }
                            var o = t("./util.js"), s = t("./async.js"), a = (t("./assert.js"), o.tryCatch2), u = o.tryCatch1, c = o.errorObj;
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
                                var n = t.value, r = t.handler, i = t.promise, a = t.receiver;
                                this._pushContext();
                                var u = o(r, a, n);
                                this._popContext(), u === s ? null != u.e && "StopProgressPropagation" === u.e.name ? u.e.__promiseHandled__ = 2 : (i._attachExtraTrace(u.e), 
                                i._progress(u.e)) : e.is(u) ? u._then(i._progress, null, null, i, void 0, this._progress) : i._progress(u);
                            }, e.prototype._progressUnchecked = function(t) {
                                if (this.isPending()) for (var r = this._length(), o = 0; r > o; o += 5) {
                                    var s = this._progressHandlerAt(o), a = this._promiseAt(o);
                                    if (e.is(a)) "function" == typeof s ? i.invoke(this._doProgressWith, this, {
                                        handler: s,
                                        promise: a,
                                        receiver: this._receiverAt(o),
                                        value: t
                                    }) : i.invoke(a._progress, a, t); else {
                                        var u = this._receiverAt(o);
                                        "function" == typeof s ? s.call(u, t, a) : e.is(u) && u._isProxied() ? u._progressUnchecked(t) : n(u, a) && u._promiseProgressed(t, a);
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
                                if ("function" != typeof t) throw new T("the promise constructor requires a resolver function");
                                if (this.constructor !== i) throw new T("the promise constructor cannot be invoked directly");
                                this._bitField = 0, this._fulfillmentHandler0 = void 0, this._rejectionHandler0 = void 0, 
                                this._promise0 = void 0, this._receiver0 = void 0, this._settledValue = void 0, 
                                this._boundTo = void 0, t !== f && this._resolveFromResolver(t);
                            }
                            function o(t, e, n) {
                                return s(t, d, n, e === !0 && t._isBound() ? t._boundTo : void 0).promise();
                            }
                            function s(t, n, r, o) {
                                var a = null;
                                return y(t) ? a = t : (a = i._cast(t, r, void 0), a !== t ? a._setBoundTo(o) : e(a) || (a = null)), 
                                null !== a ? new n(a, "function" == typeof r ? r : s, o) : {
                                    promise: function() {
                                        return V("expecting an array, a promise or a thenable");
                                    }
                                };
                            }
                            var a = t("./global.js"), u = (t("./assert.js"), t("./util.js")), c = t("./async.js"), l = t("./errors.js"), f = function() {}, p = {}, h = {
                                e: null
                            }, d = t("./promise_array.js")(i, f), v = t("./captured_trace.js")(), m = t("./catch_filter.js")(h), g = t("./promise_resolver.js"), y = u.isArray, _ = u.notEnumerableProp, w = u.isObject, b = u.ensurePropertyExpansion, x = u.errorObj, j = u.tryCatch1, S = u.tryCatch2, C = u.tryCatchApply, k = l.RangeError, T = l.TypeError, A = l.CancellationError, E = l.TimeoutError, O = l.RejectionError, P = l.originatesFromRejection, R = l.markAsOriginatingFromRejection, F = l.ensureNotHandled, M = l.withHandledMarked, D = l.withStackAttached, N = l.isStackAttached, I = l.isHandled, q = l.canAttach, H = u.thrower, V = t("./errors_api_rejection")(i), U = function() {
                                return new T("circular promise resolution chain");
                            };
                            i.prototype.bind = function(t) {
                                var e = new i(f);
                                return B && e._setTrace(this.bind, this), e._follow(this), e._setBoundTo(t), this._cancellable() && (e._setCancellable(), 
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
                                            var s = new T("A catch filter must be an error constructor or a filter function");
                                            return this._attachExtraTrace(s), void c.invoke(this._reject, this, s);
                                        }
                                        r[i++] = o;
                                    }
                                    r.length = i, t = arguments[n], this._resetTrace(this.caught);
                                    var a = new m(r, t, this);
                                    return this._then(void 0, a.doFilter, void 0, a, void 0, this.caught);
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
                                return B && n._setTrace("function" == typeof e ? e : i.resolve, void 0), n._tryFollow(t) ? n : (n._cleanValues(), 
                                n._setFulfilled(), n._settledValue = t, n);
                            }, i.reject = i.rejected = function(t) {
                                var e = new i(f);
                                return B && e._setTrace(i.reject, void 0), R(t), e._cleanValues(), e._setRejected(), 
                                e._settledValue = t, e;
                            }, i.prototype.error = function(t) {
                                return this.caught(P, t);
                            }, i.prototype._resolveFromSyncValue = function(t, e) {
                                if (t === x) this._cleanValues(), this._setRejected(), this._settledValue = t.e; else {
                                    var n = i._cast(t, e, void 0);
                                    n instanceof i ? this._follow(n) : (this._cleanValues(), this._setFulfilled(), this._settledValue = t);
                                }
                            }, i.method = function(t) {
                                if ("function" != typeof t) throw new T("fn must be a function");
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
                                        n = C(t, o, this);
                                    }
                                    var a = new i(f);
                                    return B && a._setTrace(e, void 0), a._resolveFromSyncValue(n, e), a;
                                };
                            }, i["try"] = i.attempt = function(t, e, n) {
                                if ("function" != typeof t) return V("fn must be a function");
                                var r = y(e) ? C(t, e, n) : j(t, n, e), o = new i(f);
                                return B && o._setTrace(i.attempt, void 0), o._resolveFromSyncValue(r, i.attempt), 
                                o;
                            }, i.defer = i.pending = function(t) {
                                var e = new i(f);
                                return B && e._setTrace("function" == typeof t ? t : i.defer, void 0), new g(e);
                            }, i.bind = function(t) {
                                var e = new i(f);
                                return B && e._setTrace(i.bind, void 0), e._setFulfilled(), e._setBoundTo(t), e;
                            }, i.cast = function(t, e) {
                                "function" != typeof e && (e = i.cast);
                                var n = i._cast(t, e, void 0);
                                return n instanceof i ? n : i.resolve(n, e);
                            }, i.onPossiblyUnhandledRejection = function(t) {
                                v.possiblyUnhandledRejection = "function" == typeof t ? t : void 0;
                            };
                            var B = !1 || !("undefined" == typeof n || "string" != typeof n.execPath || "object" != typeof n.env || !n.env.BLUEBIRD_DEBUG && "development" !== n.env.NODE_ENV);
                            i.longStackTraces = function() {
                                if (c.haveItemsQueued() && B === !1) throw new Error("cannot enable long stack traces after promises have been created");
                                B = v.isSupported();
                            }, i.hasLongStackTraces = function() {
                                return B && v.isSupported();
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
                                var a = void 0 !== o, u = a ? o : new i(f);
                                if (B && !a) {
                                    var l = this._peekContext() === this._traceParent;
                                    u._traceParent = l ? this._traceParent : this, u._setTrace("function" == typeof s ? s : this._then, this);
                                }
                                !a && this._isBound() && u._setBoundTo(this._boundTo);
                                var p = this._addCallbacks(t, e, n, u, r);
                                return !a && this._cancellable() && (u._setCancellable(), u._cancellationParent = this), 
                                this.isResolved() && c.invoke(this._queueSettleAt, this, p), u;
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
                                var r = this, i = B;
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
                                if (y(r)) for (var a = this._settlePromiseFromHandler, u = 0, c = r.length; c > u; ++u) if (e(i._cast(r[u], a, void 0))) return void this._spreadSlowCase(t, n, r, s);
                                return o && n._pushContext(), C(t, r, s);
                            }, i.prototype._callHandler = function(t, e, n, r, i) {
                                var o;
                                return e !== p || this.isRejected() ? (i && n._pushContext(), o = j(t, e, r)) : o = this._callSpread(t, n, r, i), 
                                i && n._popContext(), o;
                            }, i.prototype._settlePromiseFromHandler = function(t, n, r, o) {
                                if (!e(o)) return void t.call(n, r, o);
                                this.isRejected() && this._markHandled(r);
                                var s = B, a = this._callHandler(t, n, o, r, s);
                                if (!o._isFollowing()) if (a === x || a === o || a === h) {
                                    var u = a === o ? U() : F(a.e);
                                    a !== h && o._attachExtraTrace(u), o._rejectUnchecked(u);
                                } else {
                                    var c = i._cast(a, s ? this._settlePromiseFromHandler : void 0, o);
                                    e(c) ? (o._follow(c), c._cancellable() && (o._cancellationParent = c, o._setCancellable())) : o._fulfillUnchecked(a);
                                }
                            }, i.prototype._follow = function(t) {
                                this._setFollowing(), t.isPending() ? (t._cancellable() && (this._cancellationParent = t, 
                                this._setCancellable()), t._proxyPromise(this)) : t.isFulfilled() ? this._fulfillUnchecked(t._settledValue) : this._rejectUnchecked(t._settledValue), 
                                B && null == t._traceParent && (t._traceParent = this);
                            }, i.prototype._tryFollow = function(t) {
                                if (this._isFollowingOrFulfilledOrRejected() || t === this) return !1;
                                var n = i._cast(t, this._tryFollow, void 0);
                                return e(n) ? (this._follow(n), !0) : !1;
                            }, i.prototype._resetTrace = function(t) {
                                if (B) {
                                    var e = this._peekContext(), n = void 0 === e;
                                    this._trace = new v("function" == typeof t ? t : this._resetTrace, n);
                                }
                            }, i.prototype._setTrace = function(t, e) {
                                if (B) {
                                    var n = this._peekContext();
                                    this._traceParent = n;
                                    var r = void 0 === n;
                                    this._trace = void 0 !== e && e._traceParent === n ? e._trace : new v("function" == typeof t ? t : this._setTrace, r);
                                }
                                return this;
                            }, i.prototype._attachExtraTrace = function(t) {
                                if (B && q(t)) {
                                    var e = this, n = t.stack;
                                    n = "string" == typeof n ? n.split("\n") : [];
                                    for (var r = 1; null != e && null != e._trace; ) n = v.combine(n, e._trace.stack.split("\n")), 
                                    e = e._traceParent;
                                    var i = Error.stackTraceLimit + r, o = n.length;
                                    o > i && (n.length = i), t.stack = n.length <= r ? "(No stack trace)" : n.join("\n"), 
                                    t.__promiseHandled__ = D(t.__promiseHandled__);
                                }
                            }, i.prototype._notifyUnhandledRejection = function(t) {
                                I(t.__promiseHandled__) || (t.__promiseHandled__ = M(t.__promiseHandled__), v.possiblyUnhandledRejection(t, this));
                            }, i.prototype._unhandledRejection = function(t) {
                                I(t.__promiseHandled__) || c.invokeLater(this._notifyUnhandledRejection, this, t);
                            }, i.prototype._cleanValues = function() {
                                this._cancellable() && (this._cancellationParent = void 0);
                            }, i.prototype._fulfill = function(t) {
                                this._isFollowingOrFulfilledOrRejected() || this._fulfillUnchecked(t);
                            }, i.prototype._reject = function(t) {
                                this._isFollowingOrFulfilledOrRejected() || this._rejectUnchecked(t);
                            }, i.prototype._settlePromiseAt = function(t) {
                                var e = this.isFulfilled() ? this._fulfillmentHandlerAt(t) : this._rejectionHandlerAt(t), n = this._settledValue, o = this._receiverAt(t), s = this._promiseAt(t);
                                if ("function" == typeof e) this._settlePromiseFromHandler(e, o, n, s); else {
                                    var a = !1, u = this.isFulfilled();
                                    void 0 !== o && (o instanceof i && o._isProxied() ? (o._unsetProxied(), u ? o._fulfillUnchecked(n) : o._rejectUnchecked(n), 
                                    a = !0) : r(o, s) && (u ? o._promiseFulfilled(n, s) : o._promiseRejected(n, s), 
                                    a = !0)), a || (u ? s._fulfill(n) : s._reject(n));
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
                                            var a = this._receiverAt(i);
                                            (e(a) && a._length() > 0 || r(a, s)) && (n = !0);
                                        }
                                    }
                                    this._settlePromiseAt(i);
                                }
                                n || this._ensurePossibleRejectionHandled(this._settledValue);
                            }, i.prototype._ensurePossibleRejectionHandled = function(t) {
                                if (void 0 !== v.possiblyUnhandledRejection && w(t)) {
                                    var e = t.__promiseHandled__, n = t;
                                    if (void 0 === e) n = b(t, "__promiseHandled__", 0), e = 0; else if (I(e)) return;
                                    N(e) || this._attachExtraTrace(n), c.invoke(this._unhandledRejection, this, n);
                                }
                            };
                            var L = [];
                            i.prototype._peekContext = function() {
                                var t = L.length - 1;
                                return t >= 0 ? L[t] : void 0;
                            }, i.prototype._pushContext = function() {
                                B && L.push(this);
                            }, i.prototype._popContext = function() {
                                B && L.pop();
                            };
                            var z = a.Promise;
                            return i.noConflict = function() {
                                return a.Promise === i && (a.Promise = z), i;
                            }, v.isSupported() || (i.longStackTraces = function() {}, B = !1), i._makeSelfResolutionError = U, 
                            t("./finally.js")(i, h), t("./direct_resolve.js")(i), t("./thenables.js")(i), i.RangeError = k, 
                            i.CancellationError = A, i.TimeoutError = E, i.TypeError = T, i.RejectionError = O, 
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
                            var o = (t("./assert.js"), t("./errors.js").ensureNotHandled), s = t("./util.js"), a = t("./async.js"), u = {}.hasOwnProperty, c = s.isArray;
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
                                    if (void 0 !== v || u.call(o, d)) {
                                        var m = e._cast(v, void 0, void 0);
                                        m instanceof e && m.isPending() ? m._proxyPromiseArray(this, d) : h = !0, l[d] = m;
                                    } else p--;
                                }
                                if (0 === p) return void this._resolve(-2 === n ? l : r(n));
                                if (this._values = l, this._length = p, h) {
                                    var g = p === f ? this._scanDirectValues : this._scanDirectValuesHoled;
                                    a.invoke(g, this, f);
                                }
                            }, i.prototype._settlePromiseAt = function(t) {
                                var n = this._values[t];
                                e.is(n) ? n.isFulfilled() ? this._promiseFulfilled(n._settledValue, t) : n.isRejected() && this._promiseRejected(n._settledValue, t) : this._promiseFulfilled(n, t);
                            }, i.prototype._scanDirectValuesHoled = function(t) {
                                for (var e = 0; t > e && !this._isResolved(); ++e) u.call(this._values, e) && this._settlePromiseAt(e);
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
                            return e = n(t) ? new l(t) : t, u.markAsOriginatingFromRejection(e), e;
                        }
                        function i(t) {
                            function e(e, n) {
                                if (e) {
                                    var i = r(a(e));
                                    t._attachExtraTrace(i), t._reject(i);
                                } else if (arguments.length > 2) {
                                    for (var o = arguments.length, s = new Array(o - 1), u = 1; o > u; ++u) s[u - 1] = arguments[u];
                                    t._fulfill(s);
                                } else t._fulfill(n);
                            }
                            return e;
                        }
                        var o, s = t("./util.js"), a = s.maybeWrapAsError, u = t("./errors.js"), c = u.TimeoutError, l = u.RejectionError, f = t("./async.js"), p = s.haveGetters, h = t("./es5.js");
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
                            u.markAsOriginatingFromRejection(t), e._attachExtraTrace(t), f.invoke(e._reject, e, t);
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
                            var i = t("./errors.js"), o = i.TypeError, s = i.ensureNotHandled, a = t("./util.js"), u = a.isArray, c = a.errorObj, l = a.tryCatch1;
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
                                        if (!u(r)) return void this._throw(new o("A value was yielded that could not be treated as a promise"));
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
                                    return "string" == typeof t && r === u ? "this['" + t + "'](" + n.join(",") + s + " fn);break;" : (void 0 === r ? "callback(" + n.join(",") + s + " fn);" : "callback.call(" + (r === u ? "this" : "receiver") + ", " + n.join(",") + s + " fn);") + "break;";
                                }
                                function s() {
                                    return "var args = new Array(len + 1);var i = 0;for (var i = 0; i < len; ++i) {    args[i] = arguments[i];}args[i] = fn;";
                                }
                                var a = "string" == typeof i ? i + "Async" : "promisified";
                                return new Function("Promise", "callback", "receiver", "withAppended", "maybeWrapAsError", "nodebackForPromise", "INTERNAL", "var ret = function " + a + '(a1, a2, a3, a4, a5) {"use strict";var len = arguments.length;var promise = new Promise(INTERNAL);promise._setTrace(' + a + ", void 0);var fn = nodebackForPromise(promise);try{switch(len) {case 1:" + o(1) + "case 2:" + o(2) + "case 3:" + o(3) + "case 0:" + o(0) + "case 4:" + o(4) + "case 5:" + o(5) + "default: " + s() + ("string" == typeof t ? "this['" + t + "'].apply(" : "callback.apply(") + (r === u ? "this" : "receiver") + ", args); break;}}catch(e){ var wrapped = maybeWrapAsError(e);promise._attachExtraTrace(wrapped);promise._reject(wrapped);}return promise;}; ret.__isPromisified__ = true; return ret;")(e, t, r, p, h, f, n);
                            }
                            function o(t, r) {
                                function i() {
                                    var o = r;
                                    r === u && (o = this), "string" == typeof t && (t = o[t]);
                                    var s = new e(n);
                                    s._setTrace(i, void 0);
                                    var a = f(s);
                                    try {
                                        t.apply(o, p(arguments, a));
                                    } catch (c) {
                                        var l = h(c);
                                        s._attachExtraTrace(l), s._reject(l);
                                    }
                                    return s;
                                }
                                return i.__isPromisified__ = !0, i;
                            }
                            function s() {}
                            function a(t, e, n) {
                                if (n) {
                                    for (var r = _(t), i = 0, o = r.length; o > i; i += 2) {
                                        var a = r[i], c = r[i + 1], l = a + "__beforePromisified__", f = a + "Async";
                                        v(t, l, c), t[f] = w(l, u, a);
                                    }
                                    return r.length > 16 && (s.prototype = t), t;
                                }
                                return w(t, e, void 0);
                            }
                            var u = {}, c = t("./util.js"), l = t("./es5.js"), f = t("./promise_resolver.js")._nodebackForPromise, p = c.withAppended, h = c.maybeWrapAsError, d = c.canEvaluate, v = c.notEnumerableProp, m = c.deprecated, g = (t("./assert.js"), 
                            new RegExp("__beforePromisified__$")), y = {}.hasOwnProperty, _ = function() {
                                if (l.isES5) {
                                    var t = Object.create, e = Object.getOwnPropertyDescriptor;
                                    return function(n) {
                                        for (var i = n, o = [], s = t(null); null !== n; ) {
                                            for (var a = l.keys(n), u = 0, c = a.length; c > u; ++u) {
                                                var f = a[u];
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
                            }(), w = d ? i : o;
                            e.promisify = function(t, e) {
                                if ("object" == typeof t && null !== t) return m("Promise.promisify for promisifying entire objects is deprecated. Use Promise.promisifyAll instead."), 
                                a(t, e, !0);
                                if ("function" != typeof t) throw new TypeError("fn must be a function");
                                return r(t) ? t : a(t, arguments.length < 2 ? u : e, !1);
                            }, e.promisifyAll = function(t) {
                                if ("function" != typeof t && "object" != typeof t) throw new TypeError("the target of promisifyAll must be an object or a function");
                                return a(t, void 0, !0);
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
                                for (var r = s.keys(t), i = new Array(r.length), o = 0, a = i.length; a > o; ++o) i[o] = t[r[o]];
                                if (this.constructor$(i, e, n), !this._isResolved()) for (var o = 0, a = r.length; a > o; ++o) i.push(r[o]);
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
                                var o, u = e._cast(t, r, void 0);
                                return a(u) ? (e.is(u) ? o = u._then(e.props, void 0, void 0, void 0, void 0, r) : (o = new i(u, r, n === !0 && u._isBound() ? u._boundTo : void 0).promise(), 
                                n = !1), n === !0 && u._isBound() && o._setBoundTo(u._boundTo), o) : s("cannot await properties of a non-object");
                            }
                            var i = t("./properties_promise_array.js")(e, n), o = t("./util.js"), s = t("./errors_api_rejection")(e), a = o.isObject;
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
                            function r(t, r, u) {
                                var c = e._cast(t, r, void 0);
                                if (e.is(c)) return s(c);
                                if (!o(t)) return i("expecting an array, a promise or a thenable");
                                var l = new e(n);
                                l._setTrace(r, u), void 0 !== u && (u._isBound() && l._setBoundTo(u._boundTo), u._cancellable() && (l._setCancellable(), 
                                l._cancellationParent = u));
                                for (var f = l._fulfill, p = l._reject, h = 0, d = t.length; d > h; ++h) {
                                    var v = t[h];
                                    (void 0 !== v || a.call(t, h)) && e.cast(v)._then(f, p, void 0, l, null, r);
                                }
                                return l;
                            }
                            var i = t("./errors_api_rejection.js")(e), o = t("./util.js").isArray, s = function(t) {
                                return t.then(function e(n) {
                                    return r(n, e, t);
                                });
                            }, a = {}.hasOwnProperty;
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
                                if (void 0 !== e) o = e, s = 0; else if (s = 1, i > 0) for (var a = 0; i > a; ++a) if (void 0 !== t[a] || a in t) {
                                    o = t[a], s = a + 1;
                                    break;
                                }
                                if (void 0 === r) for (var a = s; i > a; ++a) (void 0 !== t[a] || a in t) && (o = n(o, t[a], a, i)); else for (var a = s; i > a; ++a) (void 0 !== t[a] || a in t) && (o = n.call(r, o, t[a], a, i));
                                return o;
                            }
                            function s(t) {
                                var e = this.fn, n = this.initialValue;
                                return o.call(e, t, n);
                            }
                            function a(t, e, n, r, i) {
                                return n._then(function o(n) {
                                    return u(t, e, n, r, o);
                                }, void 0, void 0, void 0, void 0, i);
                            }
                            function u(t, u, c, l, f) {
                                if ("function" != typeof u) return i("fn must be a function");
                                if (l === !0 && t._isBound() && (u = {
                                    fn: u,
                                    receiver: t._boundTo
                                }), void 0 !== c) {
                                    if (e.is(c)) {
                                        if (!c.isFulfilled()) return a(t, u, c, l, f);
                                        c = c._settledValue;
                                    }
                                    return n(t, r, f, l === !0 && t._isBound() ? t._boundTo : void 0).promise()._then(s, void 0, void 0, {
                                        fn: u,
                                        initialValue: c
                                    }, void 0, e.reduce);
                                }
                                return n(t, r, f, l === !0 && t._isBound() ? t._boundTo : void 0).promise()._then(o, void 0, void 0, u, void 0, f);
                            }
                            t("./assert.js"), e.reduce = function(t, n, r) {
                                return u(t, n, r, !1, e.reduce);
                            }, e.prototype.reduce = function(t, e) {
                                return u(this, t, e, !0, this.reduce);
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
                                var a = n(t, s, o, r === !0 && t._isBound() ? t._boundTo : void 0), u = a.promise();
                                return u.isRejected() ? u : (a.setHowMany(e), a.init(), u);
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
                                    return a.e = e, a;
                                }
                            }
                            function r(t, o, s) {
                                if (u(t)) {
                                    if (t instanceof e) return t;
                                    var c = n(t);
                                    if (c === a) return o = "function" == typeof o ? o : r, void 0 !== s && s._attachExtraTrace(c.e), 
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
                                function u(t) {
                                    f || (f = !0, o.markAsOriginatingFromRejection(t), void 0 !== i && i._attachExtraTrace(t), 
                                    l.reject(t));
                                }
                                var l = e.defer(r), f = !1, p = c(n, t, s, u);
                                return p !== a || f || (f = !0, void 0 !== i && i._attachExtraTrace(p.e), l.promise._reject(p.e)), 
                                l.promise;
                            }
                            var o = (t("./assert.js"), t("./errors.js")), s = t("./util.js"), a = s.errorObj, u = s.isObject, c = s.tryCatch2;
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
                            var i = (t("./util.js"), t("./assert.js"), t("./errors.js")), o = t("./errors_api_rejection")(e), s = e.TimeoutError, a = function(t, e, n) {
                                if (t.isPending()) {
                                    "string" != typeof e && (e = "operation timed out after " + n + " ms");
                                    var r = new s(e);
                                    i.markAsOriginatingFromRejection(r), t._attachExtraTrace(r), t._rejectUnchecked(r);
                                }
                            }, u = function(t, e) {
                                e._fulfill(t);
                            };
                            e.delay = function(t, i, s) {
                                if (void 0 === i && (i = t, t = void 0), (0 | i) !== i || 0 > i) return o("expecting a positive integer");
                                "function" != typeof s && (s = e.delay);
                                var a = e._cast(t, s, void 0), c = new e(n);
                                return e.is(a) ? (a._isBound() && c._setBoundTo(a._boundTo), a._cancellable() && (c._setCancellable(), 
                                c._cancellationParent = a), c._setTrace(s, a), c._follow(a), c.then(function(t) {
                                    return e.delay(t, i);
                                })) : (c._setTrace(s, void 0), r(u, i, t, c), c);
                            }, e.prototype.delay = function(t) {
                                return e.delay(this, t, this.delay);
                            }, e.prototype.timeout = function(t, i) {
                                if ((0 | t) !== t || 0 > t) return o("expecting a positive integer");
                                var s = new e(n);
                                return s._setTrace(this.timeout, this), this._isBound() && s._setBoundTo(this._boundTo), 
                                this._cancellable() && (s._setCancellable(), s._cancellationParent = this), s._follow(this), 
                                r(a, t, s, i, t), s;
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
                        function a(t) {
                            return null == t || t === !0 || t === !1 || "string" == typeof t || "number" == typeof t;
                        }
                        function u(t) {
                            return !a(t);
                        }
                        function c(t) {
                            return a(t) ? new Error(s(t)) : t;
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
                                for (var i = {}, o = d.keys(t), s = 0, a = o.length; a > s; ++s) try {
                                    var u = o[s];
                                    i[u] = t[u];
                                } catch (c) {
                                    i[u] = c;
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
                        }, w = function() {
                            return "string" !== this;
                        }.call("string"), b = {
                            thrower: p,
                            isArray: d.isArray,
                            haveGetters: v,
                            notEnumerableProp: f,
                            isPrimitive: a,
                            isObject: u,
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
                            wrapsPrimitiveReceiver: w
                        };
                        e.exports = b;
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
                                    var i = p.responseText || u[String(p.status).charAt(0)];
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
                            p.setRequestHeader && a(s(m), function(t) {
                                p.setRequestHeader(t, m[t]);
                            }), p.send(v), p;
                        }
                        function r() {}
                        var i = t("global/window"), o = t("once"), s = t("lodash.keys"), a = t("lodash.foreach"), u = {
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
                                s.funcNames || (l = !a.test(f)), l || (l = u.test(f), o(t, l));
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
                        var r = t("lodash.bind"), i = t("lodash.identity"), o = t("lodash._setbinddata"), s = t("lodash.support"), a = /^\s*function[ \n\r\t]+\w/, u = /\bthis\b/, c = Function.prototype.toString;
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
                        function n(t, e, a, l, f, p) {
                            var h = 1 & e, d = 2 & e, v = 4 & e, m = 16 & e, g = 32 & e;
                            if (!d && !o(t)) throw new TypeError();
                            m && !a.length && (e &= -17, m = a = !1), g && !l.length && (e &= -33, g = l = !1);
                            var y = t && t.__bindData__;
                            if (y && y !== !0) return y = s(y), y[2] && (y[2] = s(y[2])), y[3] && (y[3] = s(y[3])), 
                            !h || 1 & y[1] || (y[4] = f), !h && 1 & y[1] && (e |= 8), !v || 4 & y[1] || (y[5] = p), 
                            m && u.apply(y[2] || (y[2] = []), a), g && c.apply(y[3] || (y[3] = []), l), y[1] |= e, 
                            n.apply(null, y);
                            var _ = 1 == e || 17 === e ? r : i;
                            return _([ t, e, a, l, f, p ]);
                        }
                        var r = t("lodash._basebind"), i = t("lodash._basecreatewrapper"), o = t("lodash.isfunction"), s = t("lodash._slice"), a = [], u = a.push, c = a.unshift;
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
                                if (a) {
                                    var t = s(a);
                                    u.apply(t, arguments);
                                }
                                if (this instanceof e) {
                                    var o = r(n.prototype), l = n.apply(o, t || arguments);
                                    return i(l) ? l : o;
                                }
                                return n.apply(c, t || arguments);
                            }
                            var n = t[0], a = t[2], c = t[4];
                            return o(e, t), e;
                        }
                        var r = t("lodash._basecreate"), i = t("lodash.isobject"), o = t("lodash._setbinddata"), s = t("lodash._slice"), a = [], u = a.push;
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
                                    u.apply(o, arguments);
                                }
                                if ((f || m) && (o || (o = s(arguments)), f && u.apply(o, f), m && o.length < h)) return c |= 16, 
                                n([ a, g ? c : -4 & c, o, null, p, h ]);
                                if (o || (o = arguments), v && (a = t[y]), this instanceof e) {
                                    t = r(a.prototype);
                                    var _ = a.apply(t, o);
                                    return i(_) ? _ : t;
                                }
                                return a.apply(t, o);
                            }
                            var a = t[0], c = t[1], l = t[2], f = t[3], p = t[4], h = t[5], d = 1 & c, v = 2 & c, m = 4 & c, g = 8 & c, y = a;
                            return o(e, t), e;
                        }
                        var r = t("lodash._basecreate"), i = t("lodash.isobject"), o = t("lodash._setbinddata"), s = t("lodash._slice"), a = [], u = a.push;
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
                            var s, a = t, u = a;
                            if (!a) return u;
                            if (!i[typeof a]) return u;
                            e = e && "undefined" == typeof o ? e : n(e, o, 3);
                            for (var c = -1, l = i[typeof a] && r(a), f = l ? l.length : 0; ++c < f; ) if (s = l[c], 
                            e(a[s], s, t) === !1) return u;
                            return u;
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
                var a = /\+/g;
                t = t.split(e);
                var u = 1e3;
                o && "number" == typeof o.maxKeys && (u = o.maxKeys);
                var c = t.length;
                u > 0 && c > u && (c = u);
                for (var l = 0; c > l; ++l) {
                    var f, p, h, d, v = t[l].replace(a, "%20"), m = v.indexOf(i);
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
            e.exports = function(t, e, s, a) {
                return e = e || "&", s = s || "=", null === t && (t = void 0), "object" == typeof t ? n(o(t), function(n) {
                    var o = encodeURIComponent(r(n)) + s;
                    return i(t[n]) ? t[n].map(function(t) {
                        return o + encodeURIComponent(r(t));
                    }).join(e) : o + encodeURIComponent(r(t[n]));
                }).join(e) : a ? encodeURIComponent(r(a)) + s + encodeURIComponent(r(t)) : "";
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
            a(s, "asset assets contentType contentTypes entry entries space".split(" "));
            return s;
            function a(t, e) {
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
};

var forEach = Showdown.forEach = function(t, e) {
    if (typeof t.forEach === "function") {
        t.forEach(e);
    } else {
        var n, r = t.length;
        for (n = 0; n < r; n++) {
            e(t[n], n, t);
        }
    }
};

var stdExtName = function(t) {
    return t.replace(/[_-]||\s/g, "").toLowerCase();
};

Showdown.converter = function(t) {
    var e;
    var n;
    var r;
    var i = 0;
    var o = [];
    var s = [];
    if (typeof module !== "undefind" && typeof exports !== "undefined" && typeof require !== "undefind") {
        var a = require("fs");
        if (a) {
            var u = a.readdirSync((__dirname || ".") + "/extensions").filter(function(t) {
                return ~t.indexOf(".js");
            }).map(function(t) {
                return t.replace(/\.js$/, "");
            });
            Showdown.forEach(u, function(t) {
                var e = stdExtName(t);
                Showdown.extensions[e] = require("./extensions/" + t);
            });
        }
    }
    this.makeHtml = function(t) {
        e = {};
        n = {};
        r = [];
        t = t.replace(/~/g, "~T");
        t = t.replace(/\$/g, "~D");
        t = t.replace(/\r\n/g, "\n");
        t = t.replace(/\r/g, "\n");
        t = "\n\n" + t + "\n\n";
        t = q(t);
        t = t.replace(/^[ \t]+$/gm, "");
        Showdown.forEach(o, function(e) {
            t = l(e, t);
        });
        t = C(t);
        t = p(t);
        t = f(t);
        t = d(t);
        t = N(t);
        t = t.replace(/~D/g, "$$");
        t = t.replace(/~T/g, "~");
        Showdown.forEach(s, function(e) {
            t = l(e, t);
        });
        return t;
    };
    if (t && t.extensions) {
        var c = this;
        Showdown.forEach(t.extensions, function(t) {
            if (typeof t === "string") {
                t = Showdown.extensions[stdExtName(t)];
            }
            if (typeof t === "function") {
                Showdown.forEach(t(c), function(t) {
                    if (t.type) {
                        if (t.type === "language" || t.type === "lang") {
                            o.push(t);
                        } else if (t.type === "output" || t.type === "html") {
                            s.push(t);
                        }
                    } else {
                        s.push(t);
                    }
                });
            } else {
                throw "Extension '" + t + "' could not be loaded.  It was either not found or is not a valid extension.";
            }
        });
    }
    var l = function(t, e) {
        if (t.regex) {
            var n = new RegExp(t.regex, "g");
            return e.replace(n, t.replace);
        } else if (t.filter) {
            return t.filter(e);
        }
    };
    var f = function(t) {
        t += "~0";
        t = t.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|(?=~0))/gm, function(t, r, i, o, s) {
            r = r.toLowerCase();
            e[r] = R(i);
            if (o) {
                return o + s;
            } else if (s) {
                n[r] = s.replace(/"/g, "&quot;");
            }
            return "";
        });
        t = t.replace(/~0/, "");
        return t;
    };
    var p = function(t) {
        t = t.replace(/\n/g, "\n\n");
        var e = "p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del|style|section|header|footer|nav|article|aside";
        var n = "p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside";
        t = t.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm, h);
        t = t.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside)\b[^\r]*?<\/\2>[ \t]*(?=\n+)\n)/gm, h);
        t = t.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, h);
        t = t.replace(/(\n\n[ ]{0,3}<!(--[^\r]*?--\s*)+>[ \t]*(?=\n{2,}))/g, h);
        t = t.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, h);
        t = t.replace(/\n\n/g, "\n");
        return t;
    };
    var h = function(t, e) {
        var n = e;
        n = n.replace(/\n\n/g, "\n");
        n = n.replace(/^\n/, "");
        n = n.replace(/\n+$/g, "");
        n = "\n\n~K" + (r.push(n) - 1) + "K\n\n";
        return n;
    };
    var d = function(t) {
        t = b(t);
        var e = k("<hr />");
        t = t.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm, e);
        t = t.replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm, e);
        t = t.replace(/^[ ]{0,2}([ ]?\_[ ]?){3,}[ \t]*$/gm, e);
        t = j(t);
        t = S(t);
        t = O(t);
        t = p(t);
        t = P(t);
        return t;
    };
    var v = function(t) {
        t = T(t);
        t = m(t);
        t = F(t);
        t = _(t);
        t = g(t);
        t = M(t);
        t = R(t);
        t = E(t);
        t = t.replace(/  +\n/g, " <br />\n");
        return t;
    };
    var m = function(t) {
        var e = /(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;
        t = t.replace(e, function(t) {
            var e = t.replace(/(.)<\/?code>(?=.)/g, "$1`");
            e = H(e, "\\`*_");
            return e;
        });
        return t;
    };
    var g = function(t) {
        t = t.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, y);
        t = t.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, y);
        t = t.replace(/(\[([^\[\]]+)\])()()()()()/g, y);
        return t;
    };
    var y = function(t, r, i, o, s, a, u, c) {
        if (c == undefined) c = "";
        var l = r;
        var f = i;
        var p = o.toLowerCase();
        var h = s;
        var d = c;
        if (h == "") {
            if (p == "") {
                p = f.toLowerCase().replace(/ ?\n/g, " ");
            }
            h = "#" + p;
            if (e[p] != undefined) {
                h = e[p];
                if (n[p] != undefined) {
                    d = n[p];
                }
            } else {
                if (l.search(/\(\s*\)$/m) > -1) {
                    h = "";
                } else {
                    return l;
                }
            }
        }
        h = H(h, "*_");
        var v = '<a href="' + h + '"';
        if (d != "") {
            d = d.replace(/"/g, "&quot;");
            d = H(d, "*_");
            v += ' title="' + d + '"';
        }
        v += ">" + f + "</a>";
        return v;
    };
    var _ = function(t) {
        t = t.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, w);
        t = t.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, w);
        return t;
    };
    var w = function(t, r, i, o, s, a, u, c) {
        var l = r;
        var f = i;
        var p = o.toLowerCase();
        var h = s;
        var d = c;
        if (!d) d = "";
        if (h == "") {
            if (p == "") {
                p = f.toLowerCase().replace(/ ?\n/g, " ");
            }
            h = "#" + p;
            if (e[p] != undefined) {
                h = e[p];
                if (n[p] != undefined) {
                    d = n[p];
                }
            } else {
                return l;
            }
        }
        f = f.replace(/"/g, "&quot;");
        h = H(h, "*_");
        var v = '<img src="' + h + '" alt="' + f + '"';
        d = d.replace(/"/g, "&quot;");
        d = H(d, "*_");
        v += ' title="' + d + '"';
        v += " />";
        return v;
    };
    var b = function(t) {
        t = t.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm, function(t, n) {
            return k('<h1 id="' + e(n) + '">' + v(n) + "</h1>");
        });
        t = t.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm, function(t, n) {
            return k('<h2 id="' + e(n) + '">' + v(n) + "</h2>");
        });
        t = t.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm, function(t, n, r) {
            var i = n.length;
            return k("<h" + i + ' id="' + e(r) + '">' + v(r) + "</h" + i + ">");
        });
        function e(t) {
            return t.replace(/[^\w]/g, "").toLowerCase();
        }
        return t;
    };
    var x;
    var j = function(t) {
        t += "~0";
        var e = /^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;
        if (i) {
            t = t.replace(e, function(t, e, n) {
                var r = e;
                var i = n.search(/[*+-]/g) > -1 ? "ul" : "ol";
                r = r.replace(/\n{2,}/g, "\n\n\n");
                var o = x(r);
                o = o.replace(/\s+$/, "");
                o = "<" + i + ">" + o + "</" + i + ">\n";
                return o;
            });
        } else {
            e = /(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g;
            t = t.replace(e, function(t, e, n, r) {
                var i = e;
                var o = n;
                var s = r.search(/[*+-]/g) > -1 ? "ul" : "ol";
                var o = o.replace(/\n{2,}/g, "\n\n\n");
                var a = x(o);
                a = i + "<" + s + ">\n" + a + "</" + s + ">\n";
                return a;
            });
        }
        t = t.replace(/~0/, "");
        return t;
    };
    x = function(t) {
        i++;
        t = t.replace(/\n{2,}$/, "\n");
        t += "~0";
        t = t.replace(/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+([^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm, function(t, e, n, r, i) {
            var o = i;
            var s = e;
            var a = n;
            if (s || o.search(/\n{2,}/) > -1) {
                o = d(I(o));
            } else {
                o = j(I(o));
                o = o.replace(/\n$/, "");
                o = v(o);
            }
            return "<li>" + o + "</li>\n";
        });
        t = t.replace(/~0/g, "");
        i--;
        return t;
    };
    var S = function(t) {
        t += "~0";
        t = t.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g, function(t, e, n) {
            var r = e;
            var i = n;
            r = A(I(r));
            r = q(r);
            r = r.replace(/^\n+/g, "");
            r = r.replace(/\n+$/g, "");
            r = "<pre><code>" + r + "\n</code></pre>";
            return k(r) + i;
        });
        t = t.replace(/~0/, "");
        return t;
    };
    var C = function(t) {
        t += "~0";
        t = t.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g, function(t, e, n) {
            var r = e;
            var i = n;
            i = A(i);
            i = q(i);
            i = i.replace(/^\n+/g, "");
            i = i.replace(/\n+$/g, "");
            i = "<pre><code" + (r ? ' class="' + r + '"' : "") + ">" + i + "\n</code></pre>";
            return k(i);
        });
        t = t.replace(/~0/, "");
        return t;
    };
    var k = function(t) {
        t = t.replace(/(^\n+|\n+$)/g, "");
        return "\n\n~K" + (r.push(t) - 1) + "K\n\n";
    };
    var T = function(t) {
        t = t.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, function(t, e, n, r, i) {
            var o = r;
            o = o.replace(/^([ \t]*)/g, "");
            o = o.replace(/[ \t]*$/g, "");
            o = A(o);
            return e + "<code>" + o + "</code>";
        });
        return t;
    };
    var A = function(t) {
        t = t.replace(/&/g, "&amp;");
        t = t.replace(/</g, "&lt;");
        t = t.replace(/>/g, "&gt;");
        t = H(t, "*_{}[]\\", false);
        return t;
    };
    var E = function(t) {
        t = t.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g, "<strong>$2</strong>");
        t = t.replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g, "<em>$2</em>");
        return t;
    };
    var O = function(t) {
        t = t.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm, function(t, e) {
            var n = e;
            n = n.replace(/^[ \t]*>[ \t]?/gm, "~0");
            n = n.replace(/~0/g, "");
            n = n.replace(/^[ \t]+$/gm, "");
            n = d(n);
            n = n.replace(/(^|\n)/g, "$1  ");
            n = n.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(t, e) {
                var n = e;
                n = n.replace(/^  /gm, "~0");
                n = n.replace(/~0/g, "");
                return n;
            });
            return k("<blockquote>\n" + n + "\n</blockquote>");
        });
        return t;
    };
    var P = function(t) {
        t = t.replace(/^\n+/g, "");
        t = t.replace(/\n+$/g, "");
        var e = t.split(/\n{2,}/g);
        var n = [];
        var i = e.length;
        for (var o = 0; o < i; o++) {
            var s = e[o];
            if (s.search(/~K(\d+)K/g) >= 0) {
                n.push(s);
            } else if (s.search(/\S/) >= 0) {
                s = v(s);
                s = s.replace(/^([ \t]*)/g, "<p>");
                s += "</p>";
                n.push(s);
            }
        }
        i = n.length;
        for (var o = 0; o < i; o++) {
            while (n[o].search(/~K(\d+)K/) >= 0) {
                var a = r[RegExp.$1];
                a = a.replace(/\$/g, "$$$$");
                n[o] = n[o].replace(/~K\d+K/, a);
            }
        }
        return n.join("\n\n");
    };
    var R = function(t) {
        t = t.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;");
        t = t.replace(/<(?![a-z\/?\$!])/gi, "&lt;");
        return t;
    };
    var F = function(t) {
        t = t.replace(/\\(\\)/g, V);
        t = t.replace(/\\([`*_{}\[\]()>#+-.!])/g, V);
        return t;
    };
    var M = function(t) {
        t = t.replace(/<((https?|ftp|dict):[^'">\s]+)>/gi, '<a href="$1">$1</a>');
        t = t.replace(/<(?:mailto:)?([-.\w]+\@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, function(t, e) {
            return D(N(e));
        });
        return t;
    };
    var D = function(t) {
        var e = [ function(t) {
            return "&#" + t.charCodeAt(0) + ";";
        }, function(t) {
            return "&#x" + t.charCodeAt(0).toString(16) + ";";
        }, function(t) {
            return t;
        } ];
        t = "mailto:" + t;
        t = t.replace(/./g, function(t) {
            if (t == "@") {
                t = e[Math.floor(Math.random() * 2)](t);
            } else if (t != ":") {
                var n = Math.random();
                t = n > .9 ? e[2](t) : n > .45 ? e[1](t) : e[0](t);
            }
            return t;
        });
        t = '<a href="' + t + '">' + t + "</a>";
        t = t.replace(/">.+:/g, '">');
        return t;
    };
    var N = function(t) {
        t = t.replace(/~E(\d+)E/g, function(t, e) {
            var n = parseInt(e);
            return String.fromCharCode(n);
        });
        return t;
    };
    var I = function(t) {
        t = t.replace(/^(\t|[ ]{1,4})/gm, "~0");
        t = t.replace(/~0/g, "");
        return t;
    };
    var q = function(t) {
        t = t.replace(/\t(?=\t)/g, "    ");
        t = t.replace(/\t/g, "~A~B");
        t = t.replace(/~B(.+?)~A/g, function(t, e, n) {
            var r = e;
            var i = 4 - r.length % 4;
            for (var o = 0; o < i; o++) r += " ";
            return r;
        });
        t = t.replace(/~A/g, "    ");
        t = t.replace(/~B/g, "");
        return t;
    };
    var H = function(t, e, n) {
        var r = "([" + e.replace(/([\[\]\\])/g, "\\$1") + "])";
        if (n) {
            r = "\\\\" + r;
        }
        var i = new RegExp(r, "g");
        t = t.replace(i, V);
        return t;
    };
    var V = function(t, e) {
        var n = e.charCodeAt(0);
        return "~E" + n + "E";
    };
};

if (typeof module !== "undefined") module.exports = Showdown;

if (typeof define === "function" && define.amd) {
    define("showdown", function() {
        return Showdown;
    });
}

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
        var i, o, s, a, u, c, l, f, p, h, d, v, m, g, y, _;
        i = n(r);
        f = t.call(r, "ontouchstart") >= 0;
        a = {
            horizontal: {},
            vertical: {}
        };
        u = 1;
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
                this.id = "context" + u++;
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
                        var i, o, s, a, u;
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
                        if (s !== null && s < (a = e.oldScroll) && a <= r.offset) {
                            return r.trigger([ e.backward ]);
                        } else if (s !== null && s > (u = e.oldScroll) && u >= r.offset) {
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
                a[this.axis][this.id] = this;
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
                delete a[this.axis][this.id];
                delete this.context.waypoints[this.axis][this.id];
                return this.context.checkEmpty();
            };
            t.getWaypointsByElement = function(t) {
                var e, r;
                r = t[g];
                if (!r) {
                    return [];
                }
                e = n.extend({}, a.horizontal, a.vertical);
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
                    var t, r, i, a;
                    t = n(this);
                    i = (a = e.context) != null ? a : n.fn[y].defaults.context;
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
                e = a;
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
                e = n.extend({}, a.vertical, a.horizontal);
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
        var e = t.data("width"), n = t.data("height"), r = t.data("ratio"), i = t.data("youtube-id"), o = [ "16", "9" ], s = 0, a = t.data("parameters") || "";
        if (typeof e === "undefined" || typeof n === "undefined") {
            n = 0;
            e = "100%";
            o = r.split(":")[1] / r.split(":")[0] * 100;
            s = o + "%";
        }
        t.css({
            position: "relative",
            height: n,
            width: e,
            "padding-top": s,
            background: "url(//img.youtube.com/vi/" + i + "/hqdefault.jpg) center center no-repeat",
            cursor: "pointer",
            "background-size": "cover"
        }).html('<p id="lazyYT-title-' + i + '" class="lazyYT-title"></p><div class="lazyYT-button"></div>').addClass("lazyYT-image-loaded");
        $.getJSON("https://gdata.youtube.com/feeds/api/videos/" + i + "?v=2&alt=json", function(t) {
            $("#lazyYT-title-" + i).text(t.entry.title.$t);
        });
        t.on("click", function(r) {
            r.preventDefault();
            if (!t.hasClass("lazyYT-video-loaded") && t.hasClass("lazyYT-image-loaded")) {
                t.html('<iframe width="' + e + '" height="' + n + '" src="//www.youtube.com/embed/' + i + "?autoplay=1&" + a + '" style="position:absolute; top:0; left:0; width:100%; height:100%;" frameborder="0" allowfullscreen></iframe>').removeClass("lazyYT-image-loaded").addClass("lazyYT-video-loaded");
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
    t = angular.module("ytlist", [ "ngRoute", "ngSanitize", "ngAnimate", "ng-contentful", "duScroll", "youtube-embed", "ytControllers", "ytDirectives", "ytServices" ]);
    t.config([ "$routeProvider", "$locationProvider", "contentfulClientProvider", function(t, e, n) {
        t.when("/", {
            templateUrl: "partials/index.html",
            controller: "IndexCtrl"
        }).when("/:featureId", {
            templateUrl: "partials/detail.html",
            controller: "DetailCtrl"
        }).otherwise({
            redirectTo: "/"
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
            console.log(e);
            return t.features = e;
        });
    } ]);
    t.controller("DetailCtrl", [ "$scope", "$routeParams", "$http", "$location", "contentfulClient", "$sce", "heightService", function(t, e, n, r, i, o, s) {
        var a;
        a = new Showdown.converter();
        t.player = {};
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
        return i.entries({
            "sys.id": e.featureId,
            include: 10
        }).then(function(e) {
            var n, r, i, u, c;
            t.feature = e[0];
            t.fields = t.feature.fields;
            c = t.fields.youTubeListItems;
            for (i = 0, u = c.length; i < u; i++) {
                n = c[i];
                r = n.fields.bodyText;
                r = a.makeHtml(r);
            }
            t.trust = function(t) {
                return o.trustAsHtml(t);
            };
            t.fields.introText = a.makeHtml(t.fields.introText);
            t.items = t.fields.youTubeListItems;
            t.video = t.items[0].fields.youTubeVideoId;
            return setTimeout(s.sendHeight, 2e3);
        });
    } ]);
}).call(this);

(function() {
    "use strict";
    var t;
    t = angular.module("ytDirectives", []);
    t.directive("checkDevice", [ "$window", "$rootScope", function(t, e) {
        var n;
        n = function(n, r, i) {
            n.onResize = function() {
                var n;
                n = t.innerWidth;
                if (n < 1024) {
                    r.removeClass("desktop").addClass("mobile");
                    return e.$broadcast("mobile");
                } else {
                    return r.removeClass("mobile").addClass("desktop");
                }
            };
            n.onResize();
            return angular.element(t).bind("resize", function() {
                return n.onResize();
            });
        };
        return {
            link: n
        };
    } ]);
    t.directive("fadeVideo", [ "$window", function(t) {
        var e, n, r;
        e = 0;
        n = 0;
        r = function(e, r, i) {
            e.fadeOutVideo = function() {
                $(".hero").fadeOut();
                return $(".video-wrapper").fadeIn();
            };
            e.fadeInVideo = function() {
                $(".hero").fadeIn();
                return $(".video-wrapper").fadeOut();
            };
            e.videoControl = function() {
                var n;
                console.log("video contorl called");
                n = t.innerWidth;
                if (n < 1024) {
                    return $.waypoints("destroy");
                } else {
                    return r.waypoint({
                        context: ".frame",
                        offset: "30%",
                        handler: function(t) {
                            if (t === "down") {
                                e.fadeOutVideo();
                            }
                            if (t === "up") {
                                return e.fadeInVideo();
                            }
                        }
                    });
                }
            };
            e.videoControl(r);
            return angular.element(t).bind("resize", function() {
                clearTimeout(n);
                return n = setTimeout(e.videoControl, 1e3);
            });
        };
        return {
            link: r
        };
    } ]);
    t.directive("lazy", function() {
        var t;
        t = function(t, e, n) {
            var r;
            r = n.videoid;
            e.data("youtube-id", r);
            return e.lazyYT();
        };
        return {
            link: t
        };
    });
    t.directive("wrap", [ "$rootScope", "$window", function(t, e) {
        var n, r;
        n = 1;
        r = function(t, r, i) {
            t.wrapMedia = function() {
                var i;
                i = e.innerWidth;
                console.log("yo");
                if (i > 1024) {
                    r.addClass("item" + n);
                    $(".item" + n).waypoint({
                        context: ".frame",
                        offset: "10%",
                        handler: function(e) {
                            var n, r, i, o;
                            n = $(this);
                            o = n.data("id");
                            i = n.data("time");
                            if (!i) {
                                i = 0;
                            }
                            r = n.data("chapter");
                            if (e === "down") {
                                if (r === 1) {
                                    return;
                                }
                                t.player.cueVideoById(o, i);
                            } else {
                                return;
                            }
                            return t.player.cueVideoById(o, i);
                        }
                    }).waypoint({
                        context: ".frame",
                        offset: "20%",
                        handler: function(e) {
                            var n, r, i, o, s;
                            n = $(this);
                            s = n.data("id");
                            i = n.prev().data("id");
                            o = n.data("time");
                            if (!o) {
                                o = 0;
                            }
                            r = n.data("chapter");
                            if (e === "up") {
                                if (i) {
                                    return t.player.cueVideoById(i, o);
                                } else {}
                            }
                        }
                    });
                    return n++;
                } else {
                    return $.waypoints("destroy");
                }
            };
            t.wrapMedia();
            return angular.element(e).bind("resize", function() {
                return t.wrapMedia();
            });
        };
        return {
            link: r
        };
    } ]);
}).call(this);

(function() {
    "use strict";
    var t;
    t = angular.module("ytServices", []);
    t.factory("heightService", [ "$rootScope", function(t) {
        var e, n, r;
        e = function() {
            return $(".frame").height();
        };
        n = function(e) {
            var n, r;
            n = {
                height: e
            };
            r = JSON.stringify(n);
            console.log(r);
            t.$broadcast("loaded");
            return window.parent.postMessage(r, "*");
        };
        window.addEventListener("resize", function() {
            var r;
            r = $(window).width();
            if (r < 768) {
                t.$broadcast("mobile");
            }
            if (r >= 768) {
                t.$broadcast("desktop");
            }
            return n(e());
        });
        r = function() {
            r = $(window).width();
            return r;
        };
        return {
            sendHeight: function() {
                return n(e());
            },
            getWidth: function() {
                return $(window).width();
            }
        };
    } ]);
}).call(this);