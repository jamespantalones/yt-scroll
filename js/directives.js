(function() {
    "use strict";
    var e;
    e = angular.module("ytDirectives", []);
    e.directive("playerControl", function() {
        return {
            restrict: "AE",
            replace: true,
            scope: {
                video: "@"
            },
            template: "<div youtube-video video-id={{video}} id={{video}}</div>"
        };
    });
}).call(this);