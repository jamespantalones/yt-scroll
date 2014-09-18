(function() {
    "use strict";
    var e;
    e = angular.module("ytDirectives", []);
    e.directive("sticky", function() {
        var e;
        return e = function(t, r, n) {
            r.waypoint({
                context: ".frame",
                offset: "-6.25%",
                handler: function(e) {
                    if (e === "down") {
                        return r.addClass("sticky");
                    } else {
                        return r.removeClass("sticky");
                    }
                }
            });
            return {
                link: e
            };
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
                    var r, n, i;
                    r = $(this);
                    i = r.data("id");
                    n = r.data("chapter");
                    if (e === "down") {
                        if (n === 1) {
                            return;
                        }
                        t.player.cueVideoById(i);
                    } else {
                        return;
                    }
                    return t.player.cueVideoById(i);
                }
            }).waypoint({
                context: ".frame",
                offset: "80%",
                handler: function(e) {
                    var r, n, i, a;
                    r = $(this);
                    a = r.data("id");
                    i = r.prev().data("id");
                    n = r.data("chapter");
                    if (e === "up") {
                        if (r.prev().length) {
                            return t.player.cueVideoById(i);
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