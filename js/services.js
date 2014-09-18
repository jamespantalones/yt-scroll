(function() {
    "use strict";
    var r;
    r = angular.module("ytServices", []);
    r.factory("addBG", function() {
        var r;
        r = function(r) {
            return $(".hero").css({
                background: "url(" + r + ")"
            });
        };
        return {
            paste: function(n) {
                return r(n);
            }
        };
    });
}).call(this);