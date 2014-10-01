(function() {
    "use strict";
    var e;
    e = angular.module("ytDirectives", []);
    e.directive("fadeVideo", function() {
        var e, t, r;
        t = 0;
        e = function() {
            if (t === 0) {
                $(".hero").fadeOut();
                $(".video-wrapper").fadeIn();
                return t = 1;
            } else {
                $(".hero").fadeIn();
                $(".video-wrapper").fadeOut();
                return t = 0;
            }
        };
        r = function(t, r, n) {
            return r.waypoint({
                context: ".frame",
                offset: "30%",
                handler: function(t) {
                    return e();
                }
            });
        };
        return {
            link: r
        };
    });
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
    e.directive("wrap", function() {
        var e, t;
        e = 1;
        t = function(t, r, n) {
            r.addClass("item" + e);
            $(".item" + e).waypoint({
                context: ".frame",
                offset: "10%",
                handler: function(e) {
                    var r, n, a, i;
                    r = $(this);
                    i = r.data("id");
                    console.log(i);
                    a = r.data("time");
                    if (!a) {
                        a = 0;
                    }
                    n = r.data("chapter");
                    if (e === "down") {
                        if (n === 1) {
                            return;
                        }
                        t.player.cueVideoById(i, a);
                    } else {
                        return;
                    }
                    return t.player.cueVideoById(i, a);
                }
            }).waypoint({
                context: ".frame",
                offset: "20%",
                handler: function(e) {
                    var r, n, a, i, d;
                    r = $(this);
                    d = r.data("id");
                    a = r.prev().data("id");
                    i = r.data("time");
                    if (!i) {
                        i = 0;
                    }
                    n = r.data("chapter");
                    if (e === "up") {
                        if (r.prev().length) {
                            return t.player.cueVideoById(a, i);
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