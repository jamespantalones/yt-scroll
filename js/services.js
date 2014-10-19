(function() {
    "use strict";
    var n;
    n = angular.module("ytServices", []);
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