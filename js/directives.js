(function() {
    "use strict";
    var e;
    e = angular.module("ytDirectives", []);
    e.directive("addBackground", function() {
        var e;
        return e = function(t, r, n) {
            var a;
            a = r.data("image");
            console.log(a);
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
        t = function(t, r, n) {
            r.addClass("item" + e);
            $(".item" + e).waypoint({
                context: ".frame",
                offset: "10%",
                handler: function(e) {
                    var r, n, a;
                    r = $(this);
                    a = r.data("id");
                    n = r.data("chapter");
                    if (e === "down") {
                        if (n === 1) {
                            return;
                        }
                        t.player.cueVideoById(a);
                    } else {
                        return;
                    }
                    return t.player.cueVideoById(a);
                }
            }).waypoint({
                context: ".frame",
                offset: "80%",
                handler: function(e) {
                    var r, n, a, i;
                    r = $(this);
                    i = r.data("id");
                    a = r.prev().data("id");
                    n = r.data("chapter");
                    if (e === "up") {
                        if (r.prev().length) {
                            return t.player.cueVideoById(a);
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