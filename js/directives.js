(function() {
    "use strict";
    var t;
    t = angular.module("ytDirectives", []);
    t.directive("lazy", [ "$timeout", function(t) {
        var r;
        r = function(r, n, a) {
            return t(function() {
                var t, r, i;
                t = a.videoid;
                r = a.thumbnail;
                i = a.seconds;
                n.data("youtube-id", t);
                n.data("thumbnail", r);
                n.data("timecode", i);
                return n.lazyYT();
            });
        };
        return {
            link: r
        };
    } ]);
    t.directive("wrapWaypoints", [ "$window", "$timeout", function(t, r) {
        var n, a, i;
        a = $(".video");
        i = $(".video-wrapper");
        n = function(t, n, i) {
            return r(function() {
                var r, n;
                r = function(t, r) {
                    if (!r) {
                        r = "";
                    }
                    return a.css({
                        backgroundImage: "url(" + t + "?w=800)",
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
                            var a, i, e, o, u, c;
                            a = $(this);
                            e = a.prev().data("id");
                            c = a.data("id");
                            u = a.data("thumbnail");
                            o = a.data("thumblur");
                            t.video.currentTime = a.data("time");
                            i = a.data("chapter");
                            if (!t.time) {
                                t.time = 0;
                            }
                            if (n === "down") {
                                r(u, o);
                                if (i === 1) {
                                    $(".lazyYT-button").css({
                                        opacity: 1
                                    });
                                }
                            }
                            if (n === "up") {
                                if (i === 1) {
                                    $(".lazyYT-button").css({
                                        opacity: 0
                                    });
                                }
                                if (e) {
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
        var t, r, n, a, i, e;
        i = $(".text-wrapper");
        e = $(".video");
        r = $(".frame");
        a = 0;
        t = 0;
        n = function(t, r, n) {
            return r.scroll(function() {
                var t, r;
                t = -i.offset().top;
                r = t * .02;
                return e.css({
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