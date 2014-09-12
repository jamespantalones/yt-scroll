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
        init: function() {
            var e, r, t, a;
            t = this;
            a = document.createElement("script");
            a.src = "//www.youtube.com/iframe_api";
            e = document.getElementsByTagName("script")[0];
            e.parentNode.insertBefore(a, e);
            window.onYouTubeIframeAPIReady = function() {
                var e, a, n, i;
                i = $(document).width();
                n = 390 / 640;
                a = i / 2.5;
                e = a * n;
                return t.player = new YT.Player("player", {
                    height: e,
                    width: a,
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
        render: function() {
            var e;
            e = this;
            return $(".frame").on("scroll", function() {
                return e.onScroll($(".frame"));
            });
        },
        onScroll: function(e) {
            var r, t, a;
            r = this;
            a = $(".video");
            t = $(".topic");
            return t.waypoint({
                continuous: false,
                handler: function(e) {
                    var t;
                    t = $(this).data("topic");
                    if (e === "down") {
                        if (t === 1) {
                            a.addClass("sticky");
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
                            a.removeClass("sticky");
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
        }
    };
    new e();
}).call(this);