(function() {
    "use strict";
    var e;
    e = angular.module("ytDirectives", []);
    e.directive("checkDevice", [ "$window", "$rootScope", function(e, t) {
        var r;
        r = function(r, n, i) {
            r.onResize = function() {
                var r;
                r = e.innerWidth;
                if (r < 1024) {
                    n.removeClass("desktop").addClass("mobile");
                    return t.$broadcast("mobile");
                } else {
                    return n.removeClass("mobile").addClass("desktop");
                }
            };
            r.onResize();
            return angular.element(e).bind("resize", function() {
                return r.onResize();
            });
        };
        return {
            link: r
        };
    } ]);
    e.directive("fadeVideo", [ "$rootScope", function(e) {
        var t, r, n;
        r = 0;
        t = function() {
            if (r === 0) {
                $(".hero").fadeOut();
                $(".video-wrapper").fadeIn();
                return r = 1;
            } else {
                $(".hero").fadeIn();
                $(".video-wrapper").fadeOut();
                return r = 0;
            }
        };
        n = function(e, r, n) {
            return r.waypoint({
                context: ".frame",
                offset: "30%",
                handler: function(e) {
                    return t();
                }
            });
        };
        return {
            link: n
        };
    } ]);
    e.directive("lazy", function() {
        var e;
        e = function(e, t, r) {
            var n;
            n = r.videoid;
            t.data("youtube-id", n);
            return t.lazyYT();
        };
        return {
            link: e
        };
    });
    e.directive("wrap", [ "$rootScope", function(e) {
        var t, r;
        t = 1;
        r = function(e, r, n) {
            r.addClass("item" + t);
            $(".item" + t).waypoint({
                context: ".frame",
                offset: "10%",
                handler: function(t) {
                    var r, n, i, a;
                    r = $(this);
                    a = r.data("id");
                    i = r.data("time");
                    if (!i) {
                        i = 0;
                    }
                    n = r.data("chapter");
                    if (t === "down") {
                        if (n === 1) {
                            return;
                        }
                        e.player.cueVideoById(a, i);
                    } else {
                        return;
                    }
                    return e.player.cueVideoById(a, i);
                }
            }).waypoint({
                context: ".frame",
                offset: "20%",
                handler: function(t) {
                    var r, n, i, a, o;
                    r = $(this);
                    o = r.data("id");
                    i = r.prev().data("id");
                    a = r.data("time");
                    if (!a) {
                        a = 0;
                    }
                    n = r.data("chapter");
                    if (t === "up") {
                        if (i) {
                            return e.player.cueVideoById(i, a);
                        } else {}
                    }
                }
            });
            return t++;
        };
        return {
            link: r
        };
    } ]);
}).call(this);