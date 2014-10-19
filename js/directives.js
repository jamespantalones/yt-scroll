(function() {
    "use strict";
    var t;
    t = angular.module("ytDirectives", []);
    t.directive("checkDevice", [ "$window", "$rootScope", function(t, r) {
        var e;
        e = function(e, n, i) {
            e.onResize = function() {
                var e;
                e = t.innerWidth;
                if (e < 1024) {
                    n.removeClass("desktop").addClass("mobile");
                    return r.$broadcast("mobile");
                } else {
                    return n.removeClass("mobile").addClass("desktop");
                }
            };
            e.onResize();
            return angular.element(t).bind("resize", function() {
                return e.onResize();
            });
        };
        return {
            link: e
        };
    } ]);
    t.directive("lazy", [ "$timeout", function(t) {
        var r;
        r = function(r, e, n) {
            return t(function() {
                var t, r;
                t = n.videoid;
                r = n.thumbnail;
                e.data("youtube-id", t);
                e.data("thumbnail", r);
                return e.lazyYT();
            });
        };
        return {
            link: r
        };
    } ]);
    t.directive("wrapWaypoints", [ "$window", "$timeout", function(t, r) {
        var e, n, i;
        n = $(".video");
        i = $(".video-wrapper");
        e = function(t, e, i) {
            return r(function() {
                var r, e;
                r = function(t, r) {
                    if (!r) {
                        r = "";
                    }
                    return n.css({
                        backgroundImage: "url(" + t + ")",
                        backgroundSize: "cover"
                    });
                };
                e = function() {
                    var e;
                    e = $(".item");
                    return e.waypoint({
                        context: ".frame",
                        offset: "50%",
                        handler: function(e) {
                            var n, i, a, o, u, c;
                            n = $(this);
                            a = n.prev().data("id");
                            console.log(a);
                            c = n.data("id");
                            u = n.data("thumbnail");
                            o = n.data("thumblur");
                            t.video.currentTime = n.data("time");
                            i = n.data("chapter");
                            if (!t.time) {
                                t.time = 0;
                            }
                            if (e === "down") {
                                r(u, o);
                            }
                            if (e === "up") {
                                if (a) {
                                    return r(u, o);
                                } else {
                                    return r(t.thumbMaster.initBackground);
                                }
                            }
                        }
                    });
                };
                return e();
            });
        };
        return {
            link: e
        };
    } ]);
    t.directive("triggerPlay", function() {
        var t;
        t = function(t, r, e) {};
        return {
            link: t
        };
    });
    t.directive("moveVideo", function() {
        var t, r, e, n, i, a;
        i = $(".text-wrapper");
        a = $(".video");
        r = $(".frame");
        n = 0;
        t = 0;
        e = function(t, r, e) {
            return r.scroll(function() {
                var t, r;
                t = -i.offset().top;
                r = t * .005;
                return a.css({
                    "-webkitTransform": "translateY(" + (r + "px") + ")",
                    "-mozTransform": "translateY(" + (r + "px") + ")",
                    "-msTransform": "translateY(" + (r + "px") + ")",
                    "-oTransform": "translateY(" + (r + "px") + ")",
                    transform: "translateY(" + (r + "px") + ")"
                });
            });
        };
        return {
            link: e
        };
    });
}).call(this);