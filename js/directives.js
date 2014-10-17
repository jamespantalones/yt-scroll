(function() {
    "use strict";
    var e;
    e = angular.module("ytDirectives", []);
    e.directive("checkDevice", [ "$window", "$rootScope", function(e, n) {
        var i;
        i = function(i, r, t) {
            i.onResize = function() {
                var i;
                i = e.innerWidth;
                if (i < 1024) {
                    r.removeClass("desktop").addClass("mobile");
                    return n.$broadcast("mobile");
                } else {
                    return r.removeClass("mobile").addClass("desktop");
                }
            };
            i.onResize();
            return angular.element(e).bind("resize", function() {
                return i.onResize();
            });
        };
        return {
            link: i
        };
    } ]);
    e.directive("lazy", function() {
        var e;
        e = function(e, n, i) {
            var r;
            r = i.videoid;
            n.data("youtube-id", r);
            return n.lazyYT();
        };
        return {
            link: e
        };
    });
    e.directive("wrapWaypoints", [ "$window", "$timeout", function(e, n) {
        var i, r;
        r = $(".video");
        i = function(e, i, t) {
            return n(function() {
                var n, i;
                n = function(n) {
                    r.css({
                        backgroundImage: "url(" + n + ")",
                        backgroundSize: "cover"
                    });
                    return console.log("Current time is " + e.video.currentTime);
                };
                i = function() {
                    var i;
                    i = $(".item");
                    return i.waypoint({
                        context: ".frame",
                        offset: "10%",
                        handler: function(i) {
                            var r, t, o, a, u;
                            r = $(this);
                            o = r.prev().data("id");
                            console.log(o);
                            u = r.data("id");
                            a = r.data("thumbnail");
                            e.video.currentTime = r.data("time");
                            t = r.data("chapter");
                            if (!e.time) {
                                e.time = 0;
                            }
                            if (i === "down") {
                                n(a);
                            }
                            if (i === "up") {
                                if (o) {
                                    return n(a);
                                } else {
                                    return n(a);
                                }
                            }
                        }
                    });
                };
                return i();
            });
        };
        return {
            link: i
        };
    } ]);
    e.directive("triggerPlay", function() {
        var e;
        e = function(e, n, i) {};
        return {
            link: e
        };
    });
}).call(this);