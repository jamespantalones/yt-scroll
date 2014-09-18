(function() {
    "use strict";
    var e;
    e = angular.module("ytControllers", []);
    e.controller("IndexCtrl", [ "$scope", "$http", "contentfulClient", "addBG", function(e, t, l, r) {
        e.player = {};
        e.playerVars = {
            controls: 0,
            autoplay: 0,
            modestbranding: 1,
            showinfo: 0,
            hd: 1
        };
        e.$on("youtube.player.ready", function(t, l) {
            return e.player = l;
        });
        return l.entries({
            "sys.id": "5DqKC5VpHa2Mw4UkOwuYwe",
            include: 10
        }).then(function(t) {
            var l;
            e.feature = t[0];
            e.fields = e.feature.fields;
            e.items = e.fields.youTubeListItems;
            l = e.fields.heroImage.fields.file.url;
            r.paste(l);
            console.log(e.fields);
            return e.video = e.items[0].fields.youTubeVideoId;
        });
    } ]);
}).call(this);