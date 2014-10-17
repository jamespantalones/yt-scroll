(function() {
    "use strict";
    var e;
    e = angular.module("ytDirectives", []);
    e.directive("checkDevice", [ "$window", "$rootScope", function(e, r) {
        var n;
        n = function(n, i, t) {
            n.onResize = function() {
                var n;
                n = e.innerWidth;
                if (n < 1024) {
                    i.removeClass("desktop").addClass("mobile");
                    return r.$broadcast("mobile");
                } else {
                    return i.removeClass("mobile").addClass("desktop");
                }
            };
            n.onResize();
            return angular.element(e).bind("resize", function() {
                return n.onResize();
            });
        };
        return {
            link: n
        };
    } ]);
    e.directive("lazy", function() {
        var e;
        e = function(e, r, n) {
            var i;
            i = n.videoid;
            r.data("youtube-id", i);
            return r.lazyYT();
        };
        return {
            link: e
        };
    });
    e.directive("wrapWaypoints", [ "$window", "$timeout", function(e, r) {
        var n, i, t;
        i = $(".video");
        t = $(".video-wrapper");
        n = function(e, n, o) {
            return r(function() {
                var r, n;
                r = function(r, n) {
                    i.css({
                        backgroundImage: "url(" + r + ")",
                        backgroundSize: "cover"
                    });
                    t.css({
                        backgroundImage: "url(" + n + ")",
                        backgroundSize: "cover"
                    });
                    return console.log("Current time is " + e.video.currentTime);
                };
                n = function() {
                    var n;
                    n = $(".item");
                    return n.waypoint({
                        context: ".frame",
                        offset: "10%",
                        handler: function(n) {
                            var i, t, o, a, u, c;
                            i = $(this);
                            o = i.prev().data("id");
                            console.log(o);
                            c = i.data("id");
                            u = i.data("thumbnail");
                            a = i.data("thumblur");
                            e.video.currentTime = i.data("time");
                            t = i.data("chapter");
                            if (!e.time) {
                                e.time = 0;
                            }
                            if (n === "down") {
                                r(u, a);
                            }
                            if (n === "up") {
                                if (o) {
                                    return r(u, a);
                                } else {
                                    return r(u, a);
                                }
                            }
                        }
                    });
                };
                return n();
            });
        };
        return {
            link: n
        };
    } ]);
    e.directive("triggerPlay", function() {
        var e;
        e = function(e, r, n) {};
        return {
            link: e
        };
    });
}).call(this);