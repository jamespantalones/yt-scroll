(function() {
    "use strict";
    var t;
    t = angular.module("ytServices", []);
    t.factory("heightService", [ "$rootScope", function(t) {
        var n, e, i;
        n = function() {
            return $(".frame").height();
        };
        e = function(n) {
            var e, i;
            e = {
                height: n
            };
            i = JSON.stringify(e);
            console.log(i);
            t.$broadcast("loaded");
            return window.parent.postMessage(i, "*");
        };
        window.addEventListener("resize", function() {
            var i;
            i = $(window).width();
            if (i < 768) {
                t.$broadcast("mobile");
            }
            if (i >= 768) {
                t.$broadcast("desktop");
            }
            return e(n());
        });
        i = function() {
            i = $(window).width();
            return i;
        };
        return {
            sendHeight: function() {
                return e(n());
            },
            getWidth: function() {
                return $(window).width();
            }
        };
    } ]);
}).call(this);