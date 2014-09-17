(function() {
    "use strict";
    var t;
    t = angular.module("ytlist", [ "ngRoute", "ngSanitize", "ytControllers" ]);
    t.config([ "$routeProvider", "$locationProvider", function(t, e) {
        return t.when("/", {
            templateUrl: "partials/index.html",
            controller: "IndexCtrl"
        }).when("/:featureId", {
            templateUrl: "partials/detail.html",
            controller: "FeatureCtrl"
        }).otherwise({
            redirectTo: "/"
        });
    } ]);
}).call(this);