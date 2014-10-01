(function() {
    "use strict";
    var e;
    e = angular.module("ytDirectives", []);
    e.directive("mouseback", function() {
        var e;
        e = function(e, t, r) {
            return t.mousemove(function(e) {
                var t, r;
                t = e.pageX * -1.5 / 15;
                r = e.pageY * -1.5 / 15;
                return $(this).css({
                    backgroundPosition: t + "px " + r + "px"
                });
            });
        };
        return {
            link: e
        };
    });
    e.directive("fadeVideo", function() {
        var e, t, r;
        t = 0;
        e = function() {
            if (t === 0) {
                $(".hero").fadeOut();
                return t = 1;
            } else {
                $(".hero").fadeIn();
                return t = 0;
            }
        };
        r = function(t, r, n) {
            return r.waypoint({
                context: ".frame",
                offset: "50%",
                handler: function(t) {
                    return e();
                }
            });
        };
        return {
            link: r
        };
    });
    e.directive("wrap", function() {
        var e, t;
        e = 1;
        t = function(t, r, n) {
            r.addClass("item" + e);
            $(".item" + e).waypoint({
                context: ".frame",
                offset: "10%",
                handler: function(e) {
                    var r, n, i, a;
                    r = $(this);
                    a = r.data("id");
                    i = r.data("time");
                    if (!i) {
                        i = 0;
                    }
                    n = r.data("chapter");
                    if (e === "down") {
                        if (n === 1) {
                            return;
                        }
                        t.player.cueVideoById(a, i);
                    } else {
                        return;
                    }
                    return t.player.cueVideoById(a, i);
                }
            }).waypoint({
                context: ".frame",
                offset: "80%",
                handler: function(e) {
                    var r, n, i, a, u;
                    r = $(this);
                    u = r.data("id");
                    i = r.prev().data("id");
                    a = r.data("time");
                    if (!a) {
                        a = 0;
                    }
                    n = r.data("chapter");
                    if (e === "up") {
                        if (r.prev().length) {
                            return t.player.cueVideoById(i, a);
                        } else {}
                    }
                }
            });
            return e++;
        };
        return {
            link: t
        };
    });
}).call(this);