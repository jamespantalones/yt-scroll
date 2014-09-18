(function() {
    "use strict";
    var e;
    e = angular.module("ytControllers", []);
    e.controller("IndexCtrl", [ "$scope", "$http", "contentfulClient", function(e, t, n) {
        e.player = {};
        e.playerVars = {
            controls: 0,
            autoplay: 0,
            modestbranding: 1,
            showinfo: 0,
            hd: 1
        };
        e.$on("youtube.player.ready", function(t, n) {
            return e.player = n;
        });
        return n.entries({
            "sys.id": "5DqKC5VpHa2Mw4UkOwuYwe",
            include: 10
        }).then(function(t) {
            e.feature = t[0];
            e.fields = e.feature.fields;
            e.items = e.fields.youTubeListItems;
            console.log(e.fields);
            return e.video = e.items[0].fields.youTubeVideoId;
        });
    } ]);
}).call(this);