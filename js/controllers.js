(function() {
    "use strict";
    var e;
    e = angular.module("ytControllers", []);
    e.controller("IndexCtrl", [ "$scope", "$http", "contentfulClient", function(e, t, n) {
        e.features = "";
        return n.entries({
            content_type: "tGyjv9K8h2kiGAW6qe2WI",
            include: 1
        }).then(function(t) {
            console.log(t);
            return e.features = t;
        });
    } ]);
    e.controller("DetailCtrl", [ "$scope", "$routeParams", "$http", "$location", "contentfulClient", "addBG", "$sce", "heightService", function(e, t, n, r, o, i, l, s) {
        var u;
        u = new Showdown.converter();
        e.player = {};
        e.playerVars = {
            controls: 1,
            autoplay: 0,
            modestbranding: 1,
            showinfo: 0,
            hd: 1
        };
        e.$on("youtube.player.ready", function(t, n) {
            return e.player = n;
        });
        return o.entries({
            "sys.id": t.featureId,
            include: 10
        }).then(function(t) {
            var n, r, o, i, s, d;
            e.feature = t[0];
            e.fields = e.feature.fields;
            console.log(e.fields);
            d = e.fields.youTubeListItems;
            for (i = 0, s = d.length; i < s; i++) {
                n = d[i];
                r = n.fields.bodyText;
                r = u.makeHtml(r);
            }
            e.trust = function(e) {
                return l.trustAsHtml(e);
            };
            e.fields.introText = u.makeHtml(e.fields.introText);
            e.items = e.fields.youTubeListItems;
            o = e.fields.heroImage.fields.file.url;
            e.video = e.items[0].fields.youTubeVideoId;
            return setTimeout(heightServices.sendHeight, 2e3);
        });
    } ]);
}).call(this);