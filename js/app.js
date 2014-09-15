(function() {
    var e;
    e = function() {
        var e;
        e = this;
        return e.init();
    };
    e.prototype = {
        player: {},
        flag1: 0,
        flag2: 0,
        flag3: 0,
        state: 0,
        duration: 0,
        chapter1: 2,
        chapter2: 56,
        chapter3: 100,
        prefix: null,
        init: function() {
            var e, r, t;
            t = this;
            t.prefix = t.browserPrefix();
            $(function() {
                return t.preload();
            });
            (e = function() {
                var e, r;
                r = document.createElement("script");
                r.src = "//www.youtube.com/iframe_api";
                e = document.getElementsByTagName("script")[0];
                return e.parentNode.insertBefore(r, e);
            })();
            window.onYouTubeIframeAPIReady = function() {
                var e, n, i, a;
                a = $(document).width();
                i = 390 / 640;
                n = a / 2.5;
                e = n * i;
                return t.player = new YT.Player("player", {
                    height: e,
                    width: n,
                    videoId: "CG48Y5dL9J8",
                    playerVars: {
                        modestBranding: 1,
                        controls: 0,
                        showinfo: 0,
                        autoplay: 0
                    },
                    events: {
                        onReady: r
                    }
                });
            };
            return r = function(e) {
                return t.render();
            };
        },
        preload: function() {
            var e, r;
            r = this;
            e = new Image();
            e.onload = function() {
                return setTimeout(function() {
                    return r.render();
                }, 250);
            };
            return e.src = $(".image-hero").attr("src");
        },
        render: function() {
            var e;
            e = this;
            $(".frame").on("scroll", function() {
                return e.onScroll($(".frame"));
            });
            e.reset();
            setTimeout(function() {
                return e.reset();
            }, 250);
            return $(window).on("resize", function() {
                return e.reset();
            });
        },
        reset: function() {
            var e, r;
            r = this;
            e = $(".image-hero").innerHeight();
            console.log(e);
            return r.sendHeight(e);
        },
        sendHeight: function(e) {
            var r, t;
            r = {
                height: e
            };
            t = JSON.stringify(r);
            console.log(t);
            return window.parent.postMessage(t, "*");
        },
        onScroll: function(e) {
            var r, t, n;
            r = this;
            n = $(".video");
            t = $(".topic");
            return t.waypoint({
                continuous: false,
                handler: function(e) {
                    var t;
                    t = $(this).data("topic");
                    if (e === "down") {
                        if (t === 1) {
                            n.addClass("sticky");
                            r.player.playVideo();
                        }
                        if (t === 2) {
                            if (r.flag2 === 0) {
                                r.flag2 = 1;
                                r.player.seekTo(r.chapter2);
                            } else {
                                return;
                            }
                        }
                        if (t === 3) {
                            if (r.flag3 === 0) {
                                r.flag3 = 1;
                                r.player.seekTo(r.chapter3);
                            } else {
                                return;
                            }
                        } else {
                            return;
                        }
                    }
                    if (e === "up") {
                        if (t === 1) {
                            n.removeClass("sticky");
                            r.player.pauseVideo();
                        }
                        if (t === 2) {
                            r.flag2 = 0;
                            return r.player.seekTo(r.chapter1);
                        } else if (t === 3) {
                            r.flag3 = 0;
                            return r.player.seekTo(r.chapter2);
                        } else {
                            return r.player.pauseVideo();
                        }
                    }
                }
            });
        },
        browserPrefix: function() {
            var e;
            e = "";
            (navigator.sayswho = function() {
                var r, t, n, i;
                t = navigator.appName;
                i = navigator.userAgent;
                r = i.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
                n = i.match(/version\/([\.\d]+)/i);
                if (r && n !== null) {
                    r[2] = n[1];
                }
                r = r[2] ? [ r[1], r[2] ] : [ navigator.appVersion, "-?" ];
                r = r[0];
                if (r === "Chrome") {
                    e = "-webkit-";
                }
                if (r === "Firefox") {
                    e = "-moz-";
                }
                if (r === "Safari") {
                    e = "-webkit-";
                }
                if (r === "MSIE") {
                    return e = "-ms-";
                }
            })();
            return e;
        }
    };
    new e();
}).call(this);