(function() {
    "use strict";
    var n;
    n = angular.module("ytServices", []);
    n.factory("heightService", [ "$rootScope", function(n) {
        var t, e, r;
        t = function() {
            return $(".frame").height();
        };
        e = function(t) {
            var e, r;
            e = {
                height: t
            };
            r = JSON.stringify(e);
            console.log(r);
            n.$broadcast("loaded");
            return window.parent.postMessage(r, "*");
        };
        window.addEventListener("resize", function() {
            var r;
            r = $(window).width();
            if (r < 768) {
                n.$broadcast("mobile");
            }
            if (r >= 768) {
                n.$broadcast("desktop");
            }
            return e(t());
        });
        r = function() {
            r = $(window).width();
            return r;
        };
        return {
            sendHeight: function() {
                return e(t());
            },
            getWidth: function() {
                return $(window).width();
            }
        };
    } ]);
    n.factory("initVidStyles", function() {
        return {
            opacity: 0
        };
    });
    n.factory("initThumbStyles", function() {
        return {
            backgroundImage: "none",
            backgroundSize: "cover",
            backgroundPosition: "center center"
        };
    });
    n.factory("initButtonStyles", function() {
        return {
            display: "block"
        };
    });
    n.factory("initHeroStyles", function() {
        return {
            backgroundImage: "none",
            backgroundSize: "cover",
            backgroundPosition: "center center"
        };
    });
}).call(this);