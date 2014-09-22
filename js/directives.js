(function() {
    "use strict";
    var e;
    e = angular.module("ytDirectives", []);
    e.directive("addBackground", function() {
        var e;
        return e = function(t, r, a) {
            var n;
            n = r.data("image");
            console.log(n);
            r.css({
                background: "black"
            });
            return {
                link: e
            };
        };
    });
    e.directive("sticky", function() {
        var e;
        e = function(e, t, r) {
            return t.waypoint({
                context: ".frame",
                offset: 50,
                handler: function(e) {
                    if (e === "down") {
                        return t.addClass("sticky");
                    } else {
                        return t.removeClass("sticky");
                    }
                }
            });
        };
        return {
            link: e
        };
    });
    e.directive("wrap", function() {
        var e, t;
        e = 1;
        t = function(t, r, a) {
            r.addClass("item" + e);
            $(".item" + e).waypoint({
                context: ".frame",
                offset: "10%",
                handler: function(e) {
                    var r, a, n, i;
                    r = $(this);
                    i = r.data("id");
                    n = r.data("time");
                    if (!n) {
                        n = 0;
                    }
                    a = r.data("chapter");
                    if (e === "down") {
                        if (a === 1) {
                            return;
                        }
                        t.player.cueVideoById(i, n);
                    } else {
                        return;
                    }
                    return t.player.cueVideoById(i, n);
                }
            }).waypoint({
                context: ".frame",
                offset: "80%",
                handler: function(e) {
                    var r, a, n, i, d;
                    r = $(this);
                    d = r.data("id");
                    n = r.prev().data("id");
                    i = r.data("time");
                    if (!i) {
                        i = 0;
                    }
                    a = r.data("chapter");
                    if (e === "up") {
                        if (r.prev().length) {
                            return t.player.cueVideoById(n, i);
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