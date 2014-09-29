(function() {
    "use strict";
    var e;
    e = angular.module("ytServices", []);
    e.factory("heightService", [ "$rootScope", function(e) {
        var t, n;
        t = function() {
            return $(".frame").height();
        };
        n = function(t) {
            var n, r;
            n = {
                height: t
            };
            r = JSON.stringify(n);
            console.log(r);
            e.$broadcast("loaded");
            return window.parent.postMessage(r, "*");
        };
        window.addEventListener("resize", function() {
            return n(t());
        });
        return {
            sendHeight: function() {
                return n(t());
            }
        };
    } ]);
}).call(this);