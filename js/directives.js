(function() {
    "use strict";
    var e;
    e = angular.module("ytDirectives", []);
    e.directive("checkDevice", [ "$window", "$rootScope", function(e, t) {
        var n;
        n = function(n, i, r) {
            n.onResize = function() {
                var n;
                n = e.innerWidth;
                if (n < 1024) {
                    i.removeClass("desktop").addClass("mobile");
                    return t.$broadcast("mobile");
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
    e.directive("lazy", [ "$timeout", function(e) {
        var t;
        t = function(t, n, i) {
            return e(function() {
                var e, t;
                e = i.videoid;
                t = i.thumbnail;
                n.data("youtube-id", e);
                n.data("thumbnail", t);
                return n.lazyYT();
            });
        };
        return {
            link: t
        };
    } ]);
    e.directive("wrapWaypoints", [ "$window", "$timeout", function(e, t) {
        var n, i, r;
        i = $(".video");
        r = $(".video-wrapper");
        n = function(e, n, r) {
            return t(function() {
                var t, n;
                t = function(e, t) {
                    if (!t) {
                        t = "";
                    }
                    return i.css({
                        backgroundImage: "url(" + e + ")",
                        backgroundSize: "cover"
                    });
                };
                n = function() {
                    var n;
                    n = $(".item");
                    return n.waypoint({
                        context: ".frame",
                        offset: "50%",
                        handler: function(n) {
                            var i, r, a, o, u, c;
                            i = $(this);
                            a = i.prev().data("id");
                            console.log(a);
                            c = i.data("id");
                            u = i.data("thumbnail");
                            o = i.data("thumblur");
                            e.video.currentTime = i.data("time");
                            r = i.data("chapter");
                            if (!e.time) {
                                e.time = 0;
                            }
                            if (n === "down") {
                                t(u, o);
                            }
                            if (n === "up") {
                                if (a) {
                                    return t(u, o);
                                } else {
                                    return t(e.thumbMaster.initBackground);
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
        e = function(e, t, n) {};
        return {
            link: e
        };
    });
}).call(this);