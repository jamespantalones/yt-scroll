(function(e, r, t) {
    "use strict";
    var n = r.module("ngRoute", [ "ng" ]).provider("$route", a);
    function a() {
        function e(e, t) {
            return r.extend(new (r.extend(function() {}, {
                prototype: e
            }))(), t);
        }
        var t = {};
        this.when = function(e, a) {
            t[e] = r.extend({
                reloadOnSearch: true
            }, a, e && n(e, a));
            if (e) {
                var i = e[e.length - 1] == "/" ? e.substr(0, e.length - 1) : e + "/";
                t[i] = r.extend({
                    redirectTo: e
                }, n(i, a));
            }
            return this;
        };
        function n(e, r) {
            var t = r.caseInsensitiveMatch, n = {
                originalPath: e,
                regexp: e
            }, a = n.keys = [];
            e = e.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function(e, r, t, n) {
                var i = n === "?" ? n : null;
                var o = n === "*" ? n : null;
                a.push({
                    name: t,
                    optional: !!i
                });
                r = r || "";
                return "" + (i ? "" : r) + "(?:" + (i ? r : "") + (o && "(.+?)" || "([^/]+)") + (i || "") + ")" + (i || "");
            }).replace(/([\/$\*])/g, "\\$1");
            n.regexp = new RegExp("^" + e + "$", t ? "i" : "");
            return n;
        }
        this.otherwise = function(e) {
            this.when(null, e);
            return this;
        };
        this.$get = [ "$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", "$sce", function(n, a, i, o, c, l, u, s) {
            var f = false, p = {
                routes: t,
                reload: function() {
                    f = true;
                    n.$evalAsync(d);
                }
            };
            n.$on("$locationChangeSuccess", d);
            return p;
            function h(e, r) {
                var t = r.keys, n = {};
                if (!r.regexp) return null;
                var a = r.regexp.exec(e);
                if (!a) return null;
                for (var i = 1, o = a.length; i < o; ++i) {
                    var c = t[i - 1];
                    var l = a[i];
                    if (c && l) {
                        n[c.name] = l;
                    }
                }
                return n;
            }
            function d() {
                var e = v(), t = p.current;
                if (e && t && e.$$route === t.$$route && r.equals(e.pathParams, t.pathParams) && !e.reloadOnSearch && !f) {
                    t.params = e.params;
                    r.copy(t.params, i);
                    n.$broadcast("$routeUpdate", t);
                } else if (e || t) {
                    f = false;
                    n.$broadcast("$routeChangeStart", e, t);
                    p.current = e;
                    if (e) {
                        if (e.redirectTo) {
                            if (r.isString(e.redirectTo)) {
                                a.path(m(e.redirectTo, e.params)).search(e.params).replace();
                            } else {
                                a.url(e.redirectTo(e.pathParams, a.path(), a.search())).replace();
                            }
                        }
                    }
                    o.when(e).then(function() {
                        if (e) {
                            var t = r.extend({}, e.resolve), n, a;
                            r.forEach(t, function(e, n) {
                                t[n] = r.isString(e) ? c.get(e) : c.invoke(e);
                            });
                            if (r.isDefined(n = e.template)) {
                                if (r.isFunction(n)) {
                                    n = n(e.params);
                                }
                            } else if (r.isDefined(a = e.templateUrl)) {
                                if (r.isFunction(a)) {
                                    a = a(e.params);
                                }
                                a = s.getTrustedResourceUrl(a);
                                if (r.isDefined(a)) {
                                    e.loadedTemplateUrl = a;
                                    n = l.get(a, {
                                        cache: u
                                    }).then(function(e) {
                                        return e.data;
                                    });
                                }
                            }
                            if (r.isDefined(n)) {
                                t["$template"] = n;
                            }
                            return o.all(t);
                        }
                    }).then(function(a) {
                        if (e == p.current) {
                            if (e) {
                                e.locals = a;
                                r.copy(e.params, i);
                            }
                            n.$broadcast("$routeChangeSuccess", e, t);
                        }
                    }, function(r) {
                        if (e == p.current) {
                            n.$broadcast("$routeChangeError", e, t, r);
                        }
                    });
                }
            }
            function v() {
                var n, i;
                r.forEach(t, function(t, o) {
                    if (!i && (n = h(a.path(), t))) {
                        i = e(t, {
                            params: r.extend({}, a.search(), n),
                            pathParams: n
                        });
                        i.$$route = t;
                    }
                });
                return i || t[null] && e(t[null], {
                    params: {},
                    pathParams: {}
                });
            }
            function m(e, t) {
                var n = [];
                r.forEach((e || "").split(":"), function(e, r) {
                    if (r === 0) {
                        n.push(e);
                    } else {
                        var a = e.match(/(\w+)(.*)/);
                        var i = a[1];
                        n.push(t[i]);
                        n.push(a[2] || "");
                        delete t[i];
                    }
                });
                return n.join("");
            }
        } ];
    }
    n.provider("$routeParams", i);
    function i() {
        this.$get = function() {
            return {};
        };
    }
    n.directive("ngView", o);
    n.directive("ngView", c);
    o.$inject = [ "$route", "$anchorScroll", "$animate" ];
    function o(e, t, n) {
        return {
            restrict: "ECA",
            terminal: true,
            priority: 400,
            transclude: "element",
            link: function(a, i, o, c, l) {
                var u, s, f, p = o.autoscroll, h = o.onload || "";
                a.$on("$routeChangeSuccess", v);
                v();
                function d() {
                    if (f) {
                        f.remove();
                        f = null;
                    }
                    if (u) {
                        u.$destroy();
                        u = null;
                    }
                    if (s) {
                        n.leave(s, function() {
                            f = null;
                        });
                        f = s;
                        s = null;
                    }
                }
                function v() {
                    var o = e.current && e.current.locals, c = o && o.$template;
                    if (r.isDefined(c)) {
                        var f = a.$new();
                        var v = e.current;
                        var m = l(f, function(e) {
                            n.enter(e, null, s || i, function o() {
                                if (r.isDefined(p) && (!p || a.$eval(p))) {
                                    t();
                                }
                            });
                            d();
                        });
                        s = m;
                        u = v.scope = f;
                        u.$emit("$viewContentLoaded");
                        u.$eval(h);
                    } else {
                        d();
                    }
                }
            }
        };
    }
    c.$inject = [ "$compile", "$controller", "$route" ];
    function c(e, r, t) {
        return {
            restrict: "ECA",
            priority: -400,
            link: function(n, a) {
                var i = t.current, o = i.locals;
                a.html(o.$template);
                var c = e(a.contents());
                if (i.controller) {
                    o.$scope = n;
                    var l = r(i.controller, o);
                    if (i.controllerAs) {
                        n[i.controllerAs] = l;
                    }
                    a.data("$ngControllerController", l);
                    a.children().data("$ngControllerController", l);
                }
                c(n);
            }
        };
    }
})(window, window.angular);