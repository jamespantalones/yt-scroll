(function() {
    "use strict";
    var e;
    e = angular.module("ytDirectives", []);
    e.directive("checkDevice", [ "$window", "$rootScope", function(e, n) {
        var r;
        r = function(r, t, i) {
            r.onResize = function() {
                var r;
                r = e.innerWidth;
                if (r < 1024) {
                    t.removeClass("desktop").addClass("mobile");
                    return n.$broadcast("mobile");
                } else {
                    return t.removeClass("mobile").addClass("desktop");
                }
            };
            r.onResize();
            return angular.element(e).bind("resize", function() {
                return r.onResize();
            });
        };
        return {
            link: r
        };
    } ]);
    e.directive("fadeVideo", [ "$window", function(e) {
        var n, r, t;
        n = 0;
        r = 0;
        t = function(n, t, i) {
            n.fadeOutVideo = function() {
                $(".hero").fadeOut();
                return $(".video-wrapper").fadeIn();
            };
            n.fadeInVideo = function() {
                $(".hero").fadeIn();
                return $(".video-wrapper").fadeOut();
            };
            n.videoControl = function() {
                var r;
                console.log("video contorl called");
                r = e.innerWidth;
                if (r < 1024) {
                    return $.waypoints("destroy");
                } else {
                    return t.waypoint({
                        context: ".frame",
                        offset: "30%",
                        handler: function(e) {
                            if (e === "down") {
                                n.fadeOutVideo();
                            }
                            if (e === "up") {
                                return n.fadeInVideo();
                            }
                        }
                    });
                }
            };
            n.videoControl(t);
            return angular.element(e).bind("resize", function() {
                clearTimeout(r);
                return r = setTimeout(n.videoControl, 1e3);
            });
        };
        return {
            link: t
        };
    } ]);
    e.directive("lazy", function() {
        var e;
        e = function(e, n, r) {
            var t;
            t = r.videoid;
            n.data("youtube-id", t);
            return n.lazyYT();
        };
        return {
            link: e
        };
    });
    e.directive("wrap", [ "$rootScope", "$window", function(e, n) {
        var r, t;
        r = 1;
        t = function(e, t, i) {
            e.wrapMedia = function() {
                var i;
                i = n.innerWidth;
                console.log("yo");
                if (i > 1024) {
                    t.addClass("item" + r);
                    $(".item" + r).waypoint({
                        context: ".frame",
                        offset: "10%",
                        handler: function(n) {
                            var r, t, i, o;
                            r = $(this);
                            o = r.data("id");
                            i = r.data("time");
                            if (!i) {
                                i = 0;
                            }
                            t = r.data("chapter");
                            if (n === "down") {
                                if (t === 1) {
                                    return;
                                }
                                e.player.cueVideoById(o, i);
                            } else {
                                return;
                            }
                            return e.player.cueVideoById(o, i);
                        }
                    }).waypoint({
                        context: ".frame",
                        offset: "20%",
                        handler: function(n) {
                            var r, t, i, o, a;
                            r = $(this);
                            a = r.data("id");
                            i = r.prev().data("id");
                            o = r.data("time");
                            if (!o) {
                                o = 0;
                            }
                            t = r.data("chapter");
                            if (n === "up") {
                                if (i) {
                                    return e.player.cueVideoById(i, o);
                                } else {}
                            }
                        }
                    });
                    return r++;
                } else {
                    return $.waypoints("destroy");
                }
            };
            e.wrapMedia();
            return angular.element(n).bind("resize", function() {
                return e.wrapMedia();
            });
        };
        return {
            link: t
        };
    } ]);
}).call(this);