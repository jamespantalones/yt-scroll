(function() {
    "use strict";
    var t;
    t = angular.module("ytDirectives", []);
    t.directive("lazy", [ "$timeout", function(t) {
        var r;
        r = function(r, n, i) {
            return t(function() {
                var t, r;
                t = i.videoid;
                r = i.thumbnail;
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
        var n, i, a;
        i = $(".video");
        a = $(".video-wrapper");
        n = function(t, n, a) {
            return r(function() {
                var r, n;
                r = function(t, r) {
                    if (!r) {
                        r = "";
                    }
                    return i.css({
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
                            var i, a, e, o, u, c;
                            i = $(this);
                            e = i.prev().data("id");
                            c = i.data("id");
                            u = i.data("thumbnail");
                            o = i.data("thumblur");
                            t.video.currentTime = i.data("time");
                            a = i.data("chapter");
                            if (!t.time) {
                                t.time = 0;
                            }
                            if (n === "down") {
                                r(u, o);
                                if (a === 1) {
                                    $(".lazyYT-button").css({
                                        opacity: 1
                                    });
                                }
                            }
                            if (n === "up") {
                                if (a === 1) {
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
        var t, r, n, i, a, e;
        a = $(".text-wrapper");
        e = $(".video");
        r = $(".frame");
        i = 0;
        t = 0;
        n = function(t, r, n) {
            return r.scroll(function() {
                var t, r;
                t = -a.offset().top;
                r = t * .009;
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