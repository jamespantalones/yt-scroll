(function() {
    "use strict";
    var t;
    t = angular.module("ytDirectives", []);
    t.directive("lazy", [ "$timeout", function(t) {
        var r;
        r = function(r, n, e) {
            return t(function() {
                var t, r;
                t = e.videoid;
                r = e.thumbnail;
                n.data("youtube-id", t);
                n.data("thumbnail", r);
                return n.lazyYT();
            });
        };
        return {
            link: r
        };
    } ]);
    t.directive("wrapWaypoints", [ "$window", "$timeout", function(t, r) {
        var n, e, i;
        e = $(".video");
        i = $(".video-wrapper");
        n = function(t, n, i) {
            return r(function() {
                var r, n;
                r = function(t, r) {
                    if (!r) {
                        r = "";
                    }
                    return e.css({
                        backgroundImage: "url(" + t + "?w=500)",
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
                            var e, i, a, o, u, c;
                            e = $(this);
                            a = e.prev().data("id");
                            console.log(a);
                            c = e.data("id");
                            u = e.data("thumbnail");
                            o = e.data("thumblur");
                            t.video.currentTime = e.data("time");
                            i = e.data("chapter");
                            if (!t.time) {
                                t.time = 0;
                            }
                            if (n === "down") {
                                r(u, o);
                            }
                            if (n === "up") {
                                if (a) {
                                    return r(u, o);
                                } else {
                                    return r(t.thumbMaster.initBackground);
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
    t.directive("triggerPlay", function() {
        var t;
        t = function(t, r, n) {};
        return {
            link: t
        };
    });
    t.directive("moveVideo", function() {
        var t, r, n, e, i, a;
        i = $(".text-wrapper");
        a = $(".video");
        r = $(".frame");
        e = 0;
        t = 0;
        n = function(t, r, n) {
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
            link: n
        };
    });
}).call(this);