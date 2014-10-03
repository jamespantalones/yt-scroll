(function(n, t, e) {
    "use strict";
    t.module("ngAnimate", [ "ng" ]).directive("ngAnimateChildren", function() {
        return function(n, e, a) {
            a = a.ngAnimateChildren;
            t.isString(a) && 0 === a.length ? e.data("$$ngAnimateChildren", !0) : n.$watch(a, function(n) {
                e.data("$$ngAnimateChildren", !!n);
            });
        };
    }).factory("$$animateReflow", [ "$$rAF", "$document", function(n, t) {
        return function(t) {
            return n(function() {
                t();
            });
        };
    } ]).config([ "$provide", "$animateProvider", function(a, i) {
        function r(n) {
            for (var t = 0; t < n.length; t++) {
                var e = n[t];
                if (e.nodeType == f) return e;
            }
        }
        function s(n) {
            return t.element(r(n));
        }
        var o = t.noop, l = t.forEach, u = i.$$selectors, f = 1, c = "$$ngAnimateState", d = "$$ngAnimateChildren", v = "ng-animate", m = {
            running: !0
        };
        a.decorator("$animate", [ "$delegate", "$injector", "$sniffer", "$rootElement", "$$asyncCallback", "$rootScope", "$document", function(n, e, $, a, f, g, C) {
            function p(n) {
                var t = n.data(c) || {};
                t.running = !0;
                n.data(c, t);
            }
            function h(n) {
                if (n) {
                    var t = [], a = {};
                    n = n.substr(1).split(".");
                    ($.transitions || $.animations) && t.push(e.get(u[""]));
                    for (var i = 0; i < n.length; i++) {
                        var r = n[i], s = u[r];
                        s && !a[r] && (t.push(e.get(s)), a[r] = !0);
                    }
                    return t;
                }
            }
            function y(n, e, a) {
                function i(n, t) {
                    var e = n[t], a = n["before" + t.charAt(0).toUpperCase() + t.substr(1)];
                    if (e || a) return "leave" == t && (a = e, e = null), D.push({
                        event: t,
                        fn: e
                    }), C.push({
                        event: t,
                        fn: a
                    }), !0;
                }
                function r(t, e, i) {
                    var r = [];
                    l(t, function(n) {
                        n.fn && r.push(n);
                    });
                    var s = 0;
                    l(r, function(t, l) {
                        var u = function() {
                            n: {
                                if (e) {
                                    (e[l] || o)();
                                    if (++s < r.length) break n;
                                    e = null;
                                }
                                i();
                            }
                        };
                        switch (t.event) {
                          case "setClass":
                            e.push(t.fn(n, c, d, u));
                            break;

                          case "addClass":
                            e.push(t.fn(n, c || a, u));
                            break;

                          case "removeClass":
                            e.push(t.fn(n, d || a, u));
                            break;

                          default:
                            e.push(t.fn(n, u));
                        }
                    });
                    e && 0 === e.length && i();
                }
                var s = n[0];
                if (s) {
                    var u = "setClass" == e, f = u || "addClass" == e || "removeClass" == e, c, d;
                    t.isArray(a) && (c = a[0], d = a[1], a = c + " " + d);
                    var v = n.attr("class") + " " + a;
                    if (x(v)) {
                        var m = o, g = [], C = [], p = o, y = [], D = [], v = (" " + v).replace(/\s+/g, ".");
                        l(h(v), function(n) {
                            !i(n, e) && u && (i(n, "addClass"), i(n, "removeClass"));
                        });
                        return {
                            node: s,
                            event: e,
                            className: a,
                            isClassBased: f,
                            isSetClassOperation: u,
                            before: function(n) {
                                m = n;
                                r(C, g, function() {
                                    m = o;
                                    n();
                                });
                            },
                            after: function(n) {
                                p = n;
                                r(D, y, function() {
                                    p = o;
                                    n();
                                });
                            },
                            cancel: function() {
                                g && (l(g, function(n) {
                                    (n || o)(!0);
                                }), m(!0));
                                y && (l(y, function(n) {
                                    (n || o)(!0);
                                }), p(!0));
                            }
                        };
                    }
                }
            }
            function D(n, e, a, i, r, s, o) {
                function u(t) {
                    var i = "$animate:" + t;
                    D && (D[i] && 0 < D[i].length) && f(function() {
                        a.triggerHandler(i, {
                            event: n,
                            className: e
                        });
                    });
                }
                function d() {
                    u("before");
                }
                function m() {
                    u("after");
                }
                function g() {
                    u("close");
                    o && f(function() {
                        o();
                    });
                }
                function C() {
                    C.hasBeenRun || (C.hasBeenRun = !0, s());
                }
                function p() {
                    if (!p.hasBeenRun) {
                        p.hasBeenRun = !0;
                        var t = a.data(c);
                        t && (h && h.isClassBased ? A(a, e) : (f(function() {
                            var t = a.data(c) || {};
                            M == t.index && A(a, e, n);
                        }), a.data(c, t)));
                        g();
                    }
                }
                var h = y(a, n, e);
                if (h) {
                    e = h.className;
                    var D = t.element._data(h.node), D = D && D.events;
                    i || (i = r ? r.parent() : a.parent());
                    var b = a.data(c) || {};
                    r = b.active || {};
                    var k = b.totalActive || 0, x = b.last, B;
                    h.isClassBased && (B = b.running || b.disabled || x && !x.isClassBased);
                    if (B || w(a, i)) C(), d(), m(), p(); else {
                        i = !1;
                        if (0 < k) {
                            B = [];
                            if (h.isClassBased) "setClass" == x.event ? (B.push(x), A(a, e)) : r[e] && (F = r[e], 
                            F.event == n ? i = !0 : (B.push(F), A(a, e))); else if ("leave" == n && r["ng-leave"]) i = !0; else {
                                for (var F in r) B.push(r[F]), A(a, F);
                                r = {};
                                k = 0;
                            }
                            0 < B.length && l(B, function(n) {
                                n.cancel();
                            });
                        }
                        !h.isClassBased || (h.isSetClassOperation || i) || (i = "addClass" == n == a.hasClass(e));
                        if (i) C(), d(), m(), g(); else {
                            if ("leave" == n) a.one("$destroy", function(n) {
                                n = t.element(this);
                                var e = n.data(c);
                                e && (e = e.active["ng-leave"]) && (e.cancel(), A(n, "ng-leave"));
                            });
                            a.addClass(v);
                            var M = S++;
                            k++;
                            r[e] = h;
                            a.data(c, {
                                last: h,
                                active: r,
                                index: M,
                                totalActive: k
                            });
                            d();
                            h.before(function(t) {
                                var i = a.data(c);
                                t = t || !i || !i.active[e] || h.isClassBased && i.active[e].event != n;
                                C();
                                !0 === t ? p() : (m(), h.after(p));
                            });
                        }
                    }
                } else C(), d(), m(), p();
            }
            function b(n) {
                if (n = r(n)) n = t.isFunction(n.getElementsByClassName) ? n.getElementsByClassName(v) : n.querySelectorAll("." + v), 
                l(n, function(n) {
                    n = t.element(n);
                    (n = n.data(c)) && n.active && l(n.active, function(n) {
                        n.cancel();
                    });
                });
            }
            function A(n, t) {
                if (r(n) == r(a)) m.disabled || (m.running = !1, m.structural = !1); else if (t) {
                    var e = n.data(c) || {}, i = !0 === t;
                    !i && (e.active && e.active[t]) && (e.totalActive--, delete e.active[t]);
                    if (i || !e.totalActive) n.removeClass(v), n.removeData(c);
                }
            }
            function w(n, e) {
                if (m.disabled) return !0;
                if (r(n) == r(a)) return m.running;
                var i, s, o;
                do {
                    if (0 === e.length) break;
                    var l = r(e) == r(a), u = l ? m : e.data(c) || {};
                    if (u.disabled) return !0;
                    l && (o = !0);
                    !1 !== i && (l = e.data(d), t.isDefined(l) && (i = l));
                    s = s || u.running || u.last && !u.last.isClassBased;
                } while (e = e.parent());
                return !o || !i && s;
            }
            var S = 0;
            a.data(c, m);
            g.$$postDigest(function() {
                g.$$postDigest(function() {
                    m.running = !1;
                });
            });
            var k = i.classNameFilter(), x = k ? function(n) {
                return k.test(n);
            } : function() {
                return !0;
            };
            return {
                enter: function(e, a, i, r) {
                    e = t.element(e);
                    a = a && t.element(a);
                    i = i && t.element(i);
                    p(e);
                    n.enter(e, a, i);
                    g.$$postDigest(function() {
                        e = s(e);
                        D("enter", "ng-enter", e, a, i, o, r);
                    });
                },
                leave: function(e, a) {
                    e = t.element(e);
                    b(e);
                    p(e);
                    g.$$postDigest(function() {
                        D("leave", "ng-leave", s(e), null, null, function() {
                            n.leave(e);
                        }, a);
                    });
                },
                move: function(e, a, i, r) {
                    e = t.element(e);
                    a = a && t.element(a);
                    i = i && t.element(i);
                    b(e);
                    p(e);
                    n.move(e, a, i);
                    g.$$postDigest(function() {
                        e = s(e);
                        D("move", "ng-move", e, a, i, o, r);
                    });
                },
                addClass: function(e, a, i) {
                    e = t.element(e);
                    e = s(e);
                    D("addClass", a, e, null, null, function() {
                        n.addClass(e, a);
                    }, i);
                },
                removeClass: function(e, a, i) {
                    e = t.element(e);
                    e = s(e);
                    D("removeClass", a, e, null, null, function() {
                        n.removeClass(e, a);
                    }, i);
                },
                setClass: function(e, a, i, r) {
                    e = t.element(e);
                    e = s(e);
                    D("setClass", [ a, i ], e, null, null, function() {
                        n.setClass(e, a, i);
                    }, r);
                },
                enabled: function(n, t) {
                    switch (arguments.length) {
                      case 2:
                        if (n) A(t); else {
                            var e = t.data(c) || {};
                            e.disabled = !0;
                            t.data(c, e);
                        }
                        break;

                      case 1:
                        m.disabled = !n;
                        break;

                      default:
                        n = !m.disabled;
                    }
                    return !!n;
                }
            };
        } ]);
        i.register("", [ "$window", "$sniffer", "$timeout", "$$animateReflow", function(a, i, s, u) {
            function c(n, t) {
                J && J();
                G.push(t);
                J = u(function() {
                    l(G, function(n) {
                        n();
                    });
                    G = [];
                    J = null;
                    _ = {};
                });
            }
            function d(n, e) {
                var a = r(n);
                n = t.element(a);
                V.push(n);
                a = Date.now() + e;
                a <= Q || (s.cancel(L), Q = a, L = s(function() {
                    v(V);
                    V = [];
                }, e, !1));
            }
            function v(n) {
                l(n, function(n) {
                    (n = n.data(j)) && (n.closeAnimationFn || o)();
                });
            }
            function m(n, t) {
                var e = t ? _[t] : null;
                if (!e) {
                    var i = 0, r = 0, s = 0, o = 0, u, c, d, v;
                    l(n, function(n) {
                        if (n.nodeType == f) {
                            n = a.getComputedStyle(n) || {};
                            d = n[M + P];
                            i = Math.max(g(d), i);
                            v = n[M + T];
                            u = n[M + I];
                            r = Math.max(g(u), r);
                            c = n[R + I];
                            o = Math.max(g(c), o);
                            var t = g(n[R + P]);
                            0 < t && (t *= parseInt(n[R + O], 10) || 1);
                            s = Math.max(t, s);
                        }
                    });
                    e = {
                        total: 0,
                        transitionPropertyStyle: v,
                        transitionDurationStyle: d,
                        transitionDelayStyle: u,
                        transitionDelay: r,
                        transitionDuration: i,
                        animationDelayStyle: c,
                        animationDelay: o,
                        animationDuration: s
                    };
                    t && (_[t] = e);
                }
                return e;
            }
            function g(n) {
                var e = 0;
                n = t.isString(n) ? n.split(/\s*,\s*/) : [];
                l(n, function(n) {
                    e = Math.max(parseFloat(n) || 0, e);
                });
                return e;
            }
            function C(n) {
                var t = n.parent(), e = t.data(W);
                e || (t.data(W, ++z), e = z);
                return e + "-" + r(n).getAttribute("class");
            }
            function p(n, t, e, a) {
                var i = C(t), s = i + " " + e, l = _[s] ? ++_[s].total : 0, u = {};
                if (0 < l) {
                    var f = e + "-stagger", u = i + " " + f;
                    (i = !_[u]) && t.addClass(f);
                    u = m(t, u);
                    i && t.removeClass(f);
                }
                a = a || function(n) {
                    return n();
                };
                t.addClass(e);
                var f = t.data(j) || {}, c = a(function() {
                    return m(t, s);
                });
                a = c.transitionDuration;
                i = c.animationDuration;
                if (0 === a && 0 === i) return t.removeClass(e), !1;
                t.data(j, {
                    running: f.running || 0,
                    itemIndex: l,
                    stagger: u,
                    timings: c,
                    closeAnimationFn: o
                });
                n = 0 < f.running || "setClass" == n;
                0 < a && h(t, e, n);
                0 < i && (0 < u.animationDelay && 0 === u.animationDuration) && (r(t).style[R] = "none 0s");
                return !0;
            }
            function h(n, t, e) {
                "ng-enter" != t && ("ng-move" != t && "ng-leave" != t) && e ? n.addClass(q) : r(n).style[M + T] = "none";
            }
            function y(n, t) {
                var e = M + T, a = r(n);
                a.style[e] && 0 < a.style[e].length && (a.style[e] = "");
                n.removeClass(q);
            }
            function D(n) {
                var t = R;
                n = r(n);
                n.style[t] && 0 < n.style[t].length && (n.style[t] = "");
            }
            function b(n, t, e, a) {
                function i(n) {
                    t.off(h, s);
                    t.removeClass(u);
                    x(t, e);
                    n = r(t);
                    for (var a in D) n.style.removeProperty(D[a]);
                }
                function s(n) {
                    n.stopPropagation();
                    var t = n.originalEvent || n;
                    n = t.$manualTimeStamp || t.timeStamp || Date.now();
                    t = parseFloat(t.elapsedTime.toFixed(H));
                    Math.max(n - p, 0) >= C && t >= m && a();
                }
                var o = r(t);
                n = t.data(j);
                if (-1 != o.getAttribute("class").indexOf(e) && n) {
                    var u = "";
                    l(e.split(" "), function(n, t) {
                        u += (0 < t ? " " : "") + n + "-active";
                    });
                    var f = n.stagger, c = n.timings, v = n.itemIndex, m = Math.max(c.transitionDuration, c.animationDuration), g = Math.max(c.transitionDelay, c.animationDelay), C = g * U, p = Date.now(), h = N + " " + E, y = "", D = [];
                    if (0 < c.transitionDuration) {
                        var b = c.transitionPropertyStyle;
                        -1 == b.indexOf("all") && (y += F + "transition-property: " + b + ";", y += F + "transition-duration: " + c.transitionDurationStyle + ";", 
                        D.push(F + "transition-property"), D.push(F + "transition-duration"));
                    }
                    0 < v && (0 < f.transitionDelay && 0 === f.transitionDuration && (y += F + "transition-delay: " + A(c.transitionDelayStyle, f.transitionDelay, v) + "; ", 
                    D.push(F + "transition-delay")), 0 < f.animationDelay && 0 === f.animationDuration && (y += F + "animation-delay: " + A(c.animationDelayStyle, f.animationDelay, v) + "; ", 
                    D.push(F + "animation-delay")));
                    0 < D.length && (c = o.getAttribute("style") || "", o.setAttribute("style", c + "; " + y));
                    t.on(h, s);
                    t.addClass(u);
                    n.closeAnimationFn = function() {
                        i();
                        a();
                    };
                    o = (v * (Math.max(f.animationDelay, f.transitionDelay) || 0) + (g + m) * K) * U;
                    n.running++;
                    d(t, o);
                    return i;
                }
                a();
            }
            function A(n, t, e) {
                var a = "";
                l(n.split(","), function(n, i) {
                    a += (0 < i ? "," : "") + (e * t + parseInt(n, 10)) + "s";
                });
                return a;
            }
            function w(n, t, e, a) {
                if (p(n, t, e, a)) return function(n) {
                    n && x(t, e);
                };
            }
            function S(n, t, e, a) {
                if (t.data(j)) return b(n, t, e, a);
                x(t, e);
                a();
            }
            function k(n, t, e, a) {
                var i = w(n, t, e);
                if (i) {
                    var r = i;
                    c(t, function() {
                        y(t, e);
                        D(t);
                        r = S(n, t, e, a);
                    });
                    return function(n) {
                        (r || o)(n);
                    };
                }
                a();
            }
            function x(n, t) {
                n.removeClass(t);
                var e = n.data(j);
                e && (e.running && e.running--, e.running && 0 !== e.running || n.removeData(j));
            }
            function B(n, e) {
                var a = "";
                n = t.isArray(n) ? n : n.split(/\s+/);
                l(n, function(n, t) {
                    n && 0 < n.length && (a += (0 < t ? " " : "") + n + e);
                });
                return a;
            }
            var F = "", M, E, R, N;
            n.ontransitionend === e && n.onwebkittransitionend !== e ? (F = "-webkit-", M = "WebkitTransition", 
            E = "webkitTransitionEnd transitionend") : (M = "transition", E = "transitionend");
            n.onanimationend === e && n.onwebkitanimationend !== e ? (F = "-webkit-", R = "WebkitAnimation", 
            N = "webkitAnimationEnd animationend") : (R = "animation", N = "animationend");
            var P = "Duration", T = "Property", I = "Delay", O = "IterationCount", W = "$$ngAnimateKey", j = "$$ngAnimateCSS3Data", q = "ng-animate-block-transitions", H = 3, K = 1.5, U = 1e3, _ = {}, z = 0, G = [], J, L = null, Q = 0, V = [];
            return {
                enter: function(n, t) {
                    return k("enter", n, "ng-enter", t);
                },
                leave: function(n, t) {
                    return k("leave", n, "ng-leave", t);
                },
                move: function(n, t) {
                    return k("move", n, "ng-move", t);
                },
                beforeSetClass: function(n, t, e, a) {
                    var i = B(e, "-remove") + " " + B(t, "-add"), r = w("setClass", n, i, function(a) {
                        var i = n.attr("class");
                        n.removeClass(e);
                        n.addClass(t);
                        a = a();
                        n.attr("class", i);
                        return a;
                    });
                    if (r) return c(n, function() {
                        y(n, i);
                        D(n);
                        a();
                    }), r;
                    a();
                },
                beforeAddClass: function(n, t, e) {
                    var a = w("addClass", n, B(t, "-add"), function(e) {
                        n.addClass(t);
                        e = e();
                        n.removeClass(t);
                        return e;
                    });
                    if (a) return c(n, function() {
                        y(n, t);
                        D(n);
                        e();
                    }), a;
                    e();
                },
                setClass: function(n, t, e, a) {
                    e = B(e, "-remove");
                    t = B(t, "-add");
                    return S("setClass", n, e + " " + t, a);
                },
                addClass: function(n, t, e) {
                    return S("addClass", n, B(t, "-add"), e);
                },
                beforeRemoveClass: function(n, t, e) {
                    var a = w("removeClass", n, B(t, "-remove"), function(e) {
                        var a = n.attr("class");
                        n.removeClass(t);
                        e = e();
                        n.attr("class", a);
                        return e;
                    });
                    if (a) return c(n, function() {
                        y(n, t);
                        D(n);
                        e();
                    }), a;
                    e();
                },
                removeClass: function(n, t, e) {
                    return S("removeClass", n, B(t, "-remove"), e);
                }
            };
        } ]);
    } ]);
})(window, window.angular);