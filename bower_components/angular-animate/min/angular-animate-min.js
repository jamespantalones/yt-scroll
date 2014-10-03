(function(n, a, t) {
    "use strict";
    a.module("ngAnimate", [ "ng" ]).directive("ngAnimateChildren", function() {
        var n = "$$ngAnimateChildren";
        return function(t, e, r) {
            var i = r.ngAnimateChildren;
            if (a.isString(i) && i.length === 0) {
                e.data(n, true);
            } else {
                t.$watch(i, function(a) {
                    e.data(n, !!a);
                });
            }
        };
    }).factory("$$animateReflow", [ "$$rAF", "$document", function(n, a) {
        var t = a[0].body;
        return function(a) {
            return n(function() {
                var n = t.offsetWidth + 1;
                a();
            });
        };
    } ]).config([ "$provide", "$animateProvider", function(e, r) {
        var i = a.noop;
        var s = a.forEach;
        var o = r.$$selectors;
        var u = 1;
        var l = "$$ngAnimateState";
        var f = "$$ngAnimateChildren";
        var v = "ng-animate";
        var c = {
            running: true
        };
        function d(n) {
            for (var a = 0; a < n.length; a++) {
                var t = n[a];
                if (t.nodeType == u) {
                    return t;
                }
            }
        }
        function m(n) {
            return n && a.element(n);
        }
        function g(n) {
            return a.element(d(n));
        }
        function C(n, a) {
            return d(n) == d(a);
        }
        e.decorator("$animate", [ "$delegate", "$injector", "$sniffer", "$rootElement", "$$asyncCallback", "$rootScope", "$document", function(n, t, e, u, p, y, h) {
            var D = 0;
            u.data(l, c);
            y.$$postDigest(function() {
                y.$$postDigest(function() {
                    c.running = false;
                });
            });
            var b = r.classNameFilter();
            var A = !b ? function() {
                return true;
            } : function(n) {
                return b.test(n);
            };
            function w(n) {
                var a = n.data(l) || {};
                a.running = true;
                n.data(l, a);
            }
            function S(n) {
                if (n) {
                    var a = [], r = {}, i = n.substr(1).split(".");
                    if (e.transitions || e.animations) {
                        a.push(t.get(o[""]));
                    }
                    for (var s = 0; s < i.length; s++) {
                        var u = i[s], l = o[u];
                        if (l && !r[u]) {
                            a.push(t.get(l));
                            r[u] = true;
                        }
                    }
                    return a;
                }
            }
            function k(n, t, e) {
                var r = n[0];
                if (!r) {
                    return;
                }
                var o = t == "setClass";
                var u = o || t == "addClass" || t == "removeClass";
                var l, f;
                if (a.isArray(e)) {
                    l = e[0];
                    f = e[1];
                    e = l + " " + f;
                }
                var v = n.attr("class");
                var c = v + " " + e;
                if (!A(c)) {
                    return;
                }
                var d = i, m = [], g = [], C = i, p = [], y = [];
                var h = (" " + c).replace(/\s+/g, ".");
                s(S(h), function(n) {
                    var a = D(n, t);
                    if (!a && o) {
                        D(n, "addClass");
                        D(n, "removeClass");
                    }
                });
                function D(n, a) {
                    var t = n[a];
                    var e = n["before" + a.charAt(0).toUpperCase() + a.substr(1)];
                    if (t || e) {
                        if (a == "leave") {
                            e = t;
                            t = null;
                        }
                        y.push({
                            event: a,
                            fn: t
                        });
                        g.push({
                            event: a,
                            fn: e
                        });
                        return true;
                    }
                }
                function b(a, t, r) {
                    var o = [];
                    s(a, function(n) {
                        n.fn && o.push(n);
                    });
                    var u = 0;
                    function v(n) {
                        if (t) {
                            (t[n] || i)();
                            if (++u < o.length) return;
                            t = null;
                        }
                        r();
                    }
                    s(o, function(a, r) {
                        var i = function() {
                            v(r);
                        };
                        switch (a.event) {
                          case "setClass":
                            t.push(a.fn(n, l, f, i));
                            break;

                          case "addClass":
                            t.push(a.fn(n, l || e, i));
                            break;

                          case "removeClass":
                            t.push(a.fn(n, f || e, i));
                            break;

                          default:
                            t.push(a.fn(n, i));
                            break;
                        }
                    });
                    if (t && t.length === 0) {
                        r();
                    }
                }
                return {
                    node: r,
                    event: t,
                    className: e,
                    isClassBased: u,
                    isSetClassOperation: o,
                    before: function(n) {
                        d = n;
                        b(g, m, function() {
                            d = i;
                            n();
                        });
                    },
                    after: function(n) {
                        C = n;
                        b(y, p, function() {
                            C = i;
                            n();
                        });
                    },
                    cancel: function() {
                        if (m) {
                            s(m, function(n) {
                                (n || i)(true);
                            });
                            d(true);
                        }
                        if (p) {
                            s(p, function(n) {
                                (n || i)(true);
                            });
                            C(true);
                        }
                    }
                };
            }
            return {
                enter: function(t, e, r, s) {
                    t = a.element(t);
                    e = m(e);
                    r = m(r);
                    w(t);
                    n.enter(t, e, r);
                    y.$$postDigest(function() {
                        t = g(t);
                        x("enter", "ng-enter", t, e, r, i, s);
                    });
                },
                leave: function(t, e) {
                    t = a.element(t);
                    B(t);
                    w(t);
                    y.$$postDigest(function() {
                        x("leave", "ng-leave", g(t), null, null, function() {
                            n.leave(t);
                        }, e);
                    });
                },
                move: function(t, e, r, s) {
                    t = a.element(t);
                    e = m(e);
                    r = m(r);
                    B(t);
                    w(t);
                    n.move(t, e, r);
                    y.$$postDigest(function() {
                        t = g(t);
                        x("move", "ng-move", t, e, r, i, s);
                    });
                },
                addClass: function(t, e, r) {
                    t = a.element(t);
                    t = g(t);
                    x("addClass", e, t, null, null, function() {
                        n.addClass(t, e);
                    }, r);
                },
                removeClass: function(t, e, r) {
                    t = a.element(t);
                    t = g(t);
                    x("removeClass", e, t, null, null, function() {
                        n.removeClass(t, e);
                    }, r);
                },
                setClass: function(t, e, r, i) {
                    t = a.element(t);
                    t = g(t);
                    x("setClass", [ e, r ], t, null, null, function() {
                        n.setClass(t, e, r);
                    }, i);
                },
                enabled: function(n, a) {
                    switch (arguments.length) {
                      case 2:
                        if (n) {
                            F(a);
                        } else {
                            var t = a.data(l) || {};
                            t.disabled = true;
                            a.data(l, t);
                        }
                        break;

                      case 1:
                        c.disabled = !n;
                        break;

                      default:
                        n = !c.disabled;
                        break;
                    }
                    return !!n;
                }
            };
            function x(n, t, e, r, i, o, u) {
                var f = k(e, n, t);
                if (!f) {
                    N();
                    B();
                    E();
                    P();
                    return;
                }
                t = f.className;
                var c = a.element._data(f.node);
                c = c && c.events;
                if (!r) {
                    r = i ? i.parent() : e.parent();
                }
                var d = e.data(l) || {};
                var m = d.active || {};
                var g = d.totalActive || 0;
                var C = d.last;
                var y;
                if (f.isClassBased) {
                    y = d.running || d.disabled || C && !C.isClassBased;
                }
                if (y || M(e, r)) {
                    N();
                    B();
                    E();
                    P();
                    return;
                }
                var h = false;
                if (g > 0) {
                    var b = [];
                    if (!f.isClassBased) {
                        if (n == "leave" && m["ng-leave"]) {
                            h = true;
                        } else {
                            for (var A in m) {
                                b.push(m[A]);
                                F(e, A);
                            }
                            m = {};
                            g = 0;
                        }
                    } else if (C.event == "setClass") {
                        b.push(C);
                        F(e, t);
                    } else if (m[t]) {
                        var w = m[t];
                        if (w.event == n) {
                            h = true;
                        } else {
                            b.push(w);
                            F(e, t);
                        }
                    }
                    if (b.length > 0) {
                        s(b, function(n) {
                            n.cancel();
                        });
                    }
                }
                if (f.isClassBased && !f.isSetClassOperation && !h) {
                    h = n == "addClass" == e.hasClass(t);
                }
                if (h) {
                    N();
                    B();
                    E();
                    R();
                    return;
                }
                if (n == "leave") {
                    e.one("$destroy", function(n) {
                        var t = a.element(this);
                        var e = t.data(l);
                        if (e) {
                            var r = e.active["ng-leave"];
                            if (r) {
                                r.cancel();
                                F(t, "ng-leave");
                            }
                        }
                    });
                }
                e.addClass(v);
                var S = D++;
                g++;
                m[t] = f;
                e.data(l, {
                    last: f,
                    active: m,
                    index: S,
                    totalActive: g
                });
                B();
                f.before(function(a) {
                    var r = e.data(l);
                    a = a || !r || !r.active[t] || f.isClassBased && r.active[t].event != n;
                    N();
                    if (a === true) {
                        P();
                    } else {
                        E();
                        f.after(P);
                    }
                });
                function x(a) {
                    var r = "$animate:" + a;
                    if (c && c[r] && c[r].length > 0) {
                        p(function() {
                            e.triggerHandler(r, {
                                event: n,
                                className: t
                            });
                        });
                    }
                }
                function B() {
                    x("before");
                }
                function E() {
                    x("after");
                }
                function R() {
                    x("close");
                    if (u) {
                        p(function() {
                            u();
                        });
                    }
                }
                function N() {
                    if (!N.hasBeenRun) {
                        N.hasBeenRun = true;
                        o();
                    }
                }
                function P() {
                    if (!P.hasBeenRun) {
                        P.hasBeenRun = true;
                        var a = e.data(l);
                        if (a) {
                            if (f && f.isClassBased) {
                                F(e, t);
                            } else {
                                p(function() {
                                    var a = e.data(l) || {};
                                    if (S == a.index) {
                                        F(e, t, n);
                                    }
                                });
                                e.data(l, a);
                            }
                        }
                        R();
                    }
                }
            }
            function B(n) {
                var t = d(n);
                if (t) {
                    var e = a.isFunction(t.getElementsByClassName) ? t.getElementsByClassName(v) : t.querySelectorAll("." + v);
                    s(e, function(n) {
                        n = a.element(n);
                        var t = n.data(l);
                        if (t && t.active) {
                            s(t.active, function(n) {
                                n.cancel();
                            });
                        }
                    });
                }
            }
            function F(n, a) {
                if (C(n, u)) {
                    if (!c.disabled) {
                        c.running = false;
                        c.structural = false;
                    }
                } else if (a) {
                    var t = n.data(l) || {};
                    var e = a === true;
                    if (!e && t.active && t.active[a]) {
                        t.totalActive--;
                        delete t.active[a];
                    }
                    if (e || !t.totalActive) {
                        n.removeClass(v);
                        n.removeData(l);
                    }
                }
            }
            function M(n, t) {
                if (c.disabled) {
                    return true;
                }
                if (C(n, u)) {
                    return c.running;
                }
                var e, r, i;
                do {
                    if (t.length === 0) break;
                    var s = C(t, u);
                    var o = s ? c : t.data(l) || {};
                    if (o.disabled) {
                        return true;
                    }
                    if (s) {
                        i = true;
                    }
                    if (e !== false) {
                        var v = t.data(f);
                        if (a.isDefined(v)) {
                            e = v;
                        }
                    }
                    r = r || o.running || o.last && !o.last.isClassBased;
                } while (t = t.parent());
                return !i || !e && r;
            }
        } ]);
        r.register("", [ "$window", "$sniffer", "$timeout", "$$animateReflow", function(e, r, o, l) {
            var f = "", v, c, m, g;
            if (n.ontransitionend === t && n.onwebkittransitionend !== t) {
                f = "-webkit-";
                v = "WebkitTransition";
                c = "webkitTransitionEnd transitionend";
            } else {
                v = "transition";
                c = "transitionend";
            }
            if (n.onanimationend === t && n.onwebkitanimationend !== t) {
                f = "-webkit-";
                m = "WebkitAnimation";
                g = "webkitAnimationEnd animationend";
            } else {
                m = "animation";
                g = "animationend";
            }
            var C = "Duration";
            var p = "Property";
            var y = "Delay";
            var h = "IterationCount";
            var D = "$$ngAnimateKey";
            var b = "$$ngAnimateCSS3Data";
            var A = "ng-animate-block-transitions";
            var w = 3;
            var S = 1.5;
            var k = 1e3;
            var x = {};
            var B = 0;
            var F = [];
            var M;
            function E(n, a) {
                if (M) {
                    M();
                }
                F.push(a);
                M = l(function() {
                    s(F, function(n) {
                        n();
                    });
                    F = [];
                    M = null;
                    x = {};
                });
            }
            var R = null;
            var N = 0;
            var P = [];
            function T(n, t) {
                var e = d(n);
                n = a.element(e);
                P.push(n);
                var r = Date.now() + t;
                if (r <= N) {
                    return;
                }
                o.cancel(R);
                N = r;
                R = o(function() {
                    I(P);
                    P = [];
                }, t, false);
            }
            function I(n) {
                s(n, function(n) {
                    var a = n.data(b);
                    if (a) {
                        (a.closeAnimationFn || i)();
                    }
                });
            }
            function O(n, a) {
                var t = a ? x[a] : null;
                if (!t) {
                    var r = 0;
                    var i = 0;
                    var o = 0;
                    var l = 0;
                    var f;
                    var c;
                    var d;
                    var g;
                    s(n, function(n) {
                        if (n.nodeType == u) {
                            var a = e.getComputedStyle(n) || {};
                            d = a[v + C];
                            r = Math.max(W(d), r);
                            g = a[v + p];
                            f = a[v + y];
                            i = Math.max(W(f), i);
                            c = a[m + y];
                            l = Math.max(W(c), l);
                            var t = W(a[m + C]);
                            if (t > 0) {
                                t *= parseInt(a[m + h], 10) || 1;
                            }
                            o = Math.max(t, o);
                        }
                    });
                    t = {
                        total: 0,
                        transitionPropertyStyle: g,
                        transitionDurationStyle: d,
                        transitionDelayStyle: f,
                        transitionDelay: i,
                        transitionDuration: r,
                        animationDelayStyle: c,
                        animationDelay: l,
                        animationDuration: o
                    };
                    if (a) {
                        x[a] = t;
                    }
                }
                return t;
            }
            function W(n) {
                var t = 0;
                var e = a.isString(n) ? n.split(/\s*,\s*/) : [];
                s(e, function(n) {
                    t = Math.max(parseFloat(n) || 0, t);
                });
                return t;
            }
            function j(n) {
                var a = n.parent();
                var t = a.data(D);
                if (!t) {
                    a.data(D, ++B);
                    t = B;
                }
                return t + "-" + d(n).getAttribute("class");
            }
            function q(n, a, t, e) {
                var r = j(a);
                var s = r + " " + t;
                var o = x[s] ? ++x[s].total : 0;
                var u = {};
                if (o > 0) {
                    var l = t + "-stagger";
                    var f = r + " " + l;
                    var v = !x[f];
                    v && a.addClass(l);
                    u = O(a, f);
                    v && a.removeClass(l);
                }
                e = e || function(n) {
                    return n();
                };
                a.addClass(t);
                var c = a.data(b) || {};
                var d = e(function() {
                    return O(a, s);
                });
                var m = d.transitionDuration;
                var g = d.animationDuration;
                if (m === 0 && g === 0) {
                    a.removeClass(t);
                    return false;
                }
                a.data(b, {
                    running: c.running || 0,
                    itemIndex: o,
                    stagger: u,
                    timings: d,
                    closeAnimationFn: i
                });
                var C = c.running > 0 || n == "setClass";
                if (m > 0) {
                    K(a, t, C);
                }
                if (g > 0 && u.animationDelay > 0 && u.animationDuration === 0) {
                    U(a);
                }
                return true;
            }
            function H(n) {
                return n == "ng-enter" || n == "ng-move" || n == "ng-leave";
            }
            function K(n, a, t) {
                if (H(a) || !t) {
                    d(n).style[v + p] = "none";
                } else {
                    n.addClass(A);
                }
            }
            function U(n) {
                d(n).style[m] = "none 0s";
            }
            function _(n, a) {
                var t = v + p;
                var e = d(n);
                if (e.style[t] && e.style[t].length > 0) {
                    e.style[t] = "";
                }
                n.removeClass(A);
            }
            function z(n) {
                var a = m;
                var t = d(n);
                if (t.style[a] && t.style[a].length > 0) {
                    t.style[a] = "";
                }
            }
            function G(n, a, t, e) {
                var r = d(a);
                var i = a.data(b);
                if (r.getAttribute("class").indexOf(t) == -1 || !i) {
                    e();
                    return;
                }
                var o = "";
                s(t.split(" "), function(n, a) {
                    o += (a > 0 ? " " : "") + n + "-active";
                });
                var u = i.stagger;
                var l = i.timings;
                var v = i.itemIndex;
                var m = Math.max(l.transitionDuration, l.animationDuration);
                var C = Math.max(l.transitionDelay, l.animationDelay);
                var p = C * k;
                var y = Date.now();
                var h = g + " " + c;
                var D = "", A = [];
                if (l.transitionDuration > 0) {
                    var x = l.transitionPropertyStyle;
                    if (x.indexOf("all") == -1) {
                        D += f + "transition-property: " + x + ";";
                        D += f + "transition-duration: " + l.transitionDurationStyle + ";";
                        A.push(f + "transition-property");
                        A.push(f + "transition-duration");
                    }
                }
                if (v > 0) {
                    if (u.transitionDelay > 0 && u.transitionDuration === 0) {
                        var B = l.transitionDelayStyle;
                        D += f + "transition-delay: " + J(B, u.transitionDelay, v) + "; ";
                        A.push(f + "transition-delay");
                    }
                    if (u.animationDelay > 0 && u.animationDuration === 0) {
                        D += f + "animation-delay: " + J(l.animationDelayStyle, u.animationDelay, v) + "; ";
                        A.push(f + "animation-delay");
                    }
                }
                if (A.length > 0) {
                    var F = r.getAttribute("style") || "";
                    r.setAttribute("style", F + "; " + D);
                }
                a.on(h, P);
                a.addClass(o);
                i.closeAnimationFn = function() {
                    N();
                    e();
                };
                var M = v * (Math.max(u.animationDelay, u.transitionDelay) || 0);
                var E = (C + m) * S;
                var R = (M + E) * k;
                i.running++;
                T(a, R);
                return N;
                function N(n) {
                    a.off(h, P);
                    a.removeClass(o);
                    X(a, t);
                    var e = d(a);
                    for (var r in A) {
                        e.style.removeProperty(A[r]);
                    }
                }
                function P(n) {
                    n.stopPropagation();
                    var a = n.originalEvent || n;
                    var t = a.$manualTimeStamp || a.timeStamp || Date.now();
                    var r = parseFloat(a.elapsedTime.toFixed(w));
                    if (Math.max(t - y, 0) >= p && r >= m) {
                        e();
                    }
                }
            }
            function J(n, a, t) {
                var e = "";
                s(n.split(","), function(n, r) {
                    e += (r > 0 ? "," : "") + (t * a + parseInt(n, 10)) + "s";
                });
                return e;
            }
            function L(n, a, t, e) {
                if (q(n, a, t, e)) {
                    return function(n) {
                        n && X(a, t);
                    };
                }
            }
            function Q(n, a, t, e) {
                if (a.data(b)) {
                    return G(n, a, t, e);
                } else {
                    X(a, t);
                    e();
                }
            }
            function V(n, a, t, e) {
                var r = L(n, a, t);
                if (!r) {
                    e();
                    return;
                }
                var s = r;
                E(a, function() {
                    _(a, t);
                    z(a);
                    s = Q(n, a, t, e);
                });
                return function(n) {
                    (s || i)(n);
                };
            }
            function X(n, a) {
                n.removeClass(a);
                var t = n.data(b);
                if (t) {
                    if (t.running) {
                        t.running--;
                    }
                    if (!t.running || t.running === 0) {
                        n.removeData(b);
                    }
                }
            }
            return {
                enter: function(n, a) {
                    return V("enter", n, "ng-enter", a);
                },
                leave: function(n, a) {
                    return V("leave", n, "ng-leave", a);
                },
                move: function(n, a) {
                    return V("move", n, "ng-move", a);
                },
                beforeSetClass: function(n, a, t, e) {
                    var r = Y(t, "-remove") + " " + Y(a, "-add");
                    var i = L("setClass", n, r, function(e) {
                        var r = n.attr("class");
                        n.removeClass(t);
                        n.addClass(a);
                        var i = e();
                        n.attr("class", r);
                        return i;
                    });
                    if (i) {
                        E(n, function() {
                            _(n, r);
                            z(n);
                            e();
                        });
                        return i;
                    }
                    e();
                },
                beforeAddClass: function(n, a, t) {
                    var e = L("addClass", n, Y(a, "-add"), function(t) {
                        n.addClass(a);
                        var e = t();
                        n.removeClass(a);
                        return e;
                    });
                    if (e) {
                        E(n, function() {
                            _(n, a);
                            z(n);
                            t();
                        });
                        return e;
                    }
                    t();
                },
                setClass: function(n, a, t, e) {
                    t = Y(t, "-remove");
                    a = Y(a, "-add");
                    var r = t + " " + a;
                    return Q("setClass", n, r, e);
                },
                addClass: function(n, a, t) {
                    return Q("addClass", n, Y(a, "-add"), t);
                },
                beforeRemoveClass: function(n, a, t) {
                    var e = L("removeClass", n, Y(a, "-remove"), function(t) {
                        var e = n.attr("class");
                        n.removeClass(a);
                        var r = t();
                        n.attr("class", e);
                        return r;
                    });
                    if (e) {
                        E(n, function() {
                            _(n, a);
                            z(n);
                            t();
                        });
                        return e;
                    }
                    t();
                },
                removeClass: function(n, a, t) {
                    return Q("removeClass", n, Y(a, "-remove"), t);
                }
            };
            function Y(n, t) {
                var e = "";
                n = a.isArray(n) ? n : n.split(/\s+/);
                s(n, function(n, a) {
                    if (n && n.length > 0) {
                        e += (a > 0 ? " " : "") + n + t;
                    }
                });
                return e;
            }
        } ]);
    } ]);
})(window, window.angular);