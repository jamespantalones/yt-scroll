(function() {
    "use strict";
    var t;
    t = angular.module("ytDirectives", []);
    t.directive("addBackground", function() {
        var t;
        return t = function(e, r, a) {
            var n;
            n = r.data("image");
            r.css({
                background: "black"
            });
            return {
                link: t
            };
        };
    });
    t.directive("sticky", function() {
        var t;
        t = function(t, e, r) {
            return e.waypoint({
                context: ".frame",
                offset: 50,
                handler: function(t) {
                    if (t === "down") {
                        return e.addClass("sticky");
                    } else {
                        return e.removeClass("sticky");
                    }
                }
            });
        };
        return {
            link: t
        };
    });
    t.directive("wrap", function() {
        var t, e;
        t = 1;
        e = function(e, r, a) {
            r.addClass("item" + t);
            $(".item" + t).waypoint({
                context: ".frame",
                offset: "10%",
                handler: function(t) {
                    var r, a, n, i;
                    r = $(this);
                    i = r.data("id");
                    n = r.data("time");
                    if (!n) {
                        n = 0;
                    }
                    a = r.data("chapter");
                    if (t === "down") {
                        if (a === 1) {
                            return;
                        }
                        e.player.cueVideoById(i, n);
                    } else {
                        return;
                    }
                    return e.player.cueVideoById(i, n);
                }
            }).waypoint({
                context: ".frame",
                offset: "80%",
                handler: function(t) {
                    var r, a, n, i, d;
                    r = $(this);
                    d = r.data("id");
                    n = r.prev().data("id");
                    i = r.data("time");
                    if (!i) {
                        i = 0;
                    }
                    a = r.data("chapter");
                    if (t === "up") {
                        if (r.prev().length) {
                            return e.player.cueVideoById(n, i);
                        } else {}
                    }
                }
            });
            return t++;
        };
        return {
            link: e
        };
    });
}).call(this);