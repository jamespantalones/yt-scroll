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
            paste: function(t) {
                return n(t);
            }
        };
    });
    n.factory("heightService", [ "$rootScope", function(n) {
        var t, r;
        t = function() {
            return $(document).height();
        };
        r = function(t) {
            var r, e;
            r = {
                height: t
            };
            e = JSON.stringify(r);
            console.log(e);
            n.$broadcast("loaded");
            return window.parent.postMessage(e, "*");
        };
        window.addEventListener("resize", function() {
            return r(t());
        });
        return {
            sendHeight: function() {
                return r(t());
            }
        };
    } ]);
}).call(this);