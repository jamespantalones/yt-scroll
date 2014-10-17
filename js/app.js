(function() {
    "use strict";
    var e;
    e = angular.module("ytlist", [ "ngRoute", "ngSanitize", "ngAnimate", "ng-contentful", "duScroll", "youtube-embed", "ytControllers", "ytDirectives", "ytServices" ]);
    e.config([ "$routeProvider", "$locationProvider", "contentfulClientProvider", "$sceDelegateProvider", function(e, t, r, l) {
        e.when("/", {
            templateUrl: "partials/index.html",
            controller: "IndexCtrl"
        }).when("/:featureId", {
            templateUrl: "partials/detail.html",
            controller: "DetailCtrl"
        }).otherwise({
            redirectTo: "/"
        });
        l.resourceUrlWhitelist({
            self: "self",
            "http://www.youtube.com/**": "http://www.youtube.com/**",
            "https://www.youtube.com/**": "https://www.youtube.com/**"
        });
        r.setSpaceId("6s2rqhmim2vw");
        return r.setAccessToken("c74b04faaa839cf30d0fbf6d0fa5827984c15b39864d7fc3c48a6fe57ad6ad0d");
    } ]);
}).call(this);