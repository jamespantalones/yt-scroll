(function() {
    "use strict";
    var n;
    n = angular.module("ytServices", []);
    n.factory("addBG", function() {
        var n;
        n = function(n) {
            return $(".hero").css({
                background: "url(" + n + ")"
            });
        };
        return {
            paste: function(r) {
                return n(r);
            }
        };
    });
    n.factory("heightService", [ "$rootScope", function(n) {
        var r, t;
        r = function() {
            return $(".frame").height();
        };
        t = function(r) {
            var t, e;
            t = {
                height: r
            };
            e = JSON.stringify(t);
            console.log(e);
            n.$broadcast("loaded");
            return window.parent.postMessage(e, "*");
        };
        window.addEventListener("resize", function() {
            return t(r());
        });
        return {
            sendHeight: function() {
                return t(r());
            }
        };
    } ]);
}).call(this);