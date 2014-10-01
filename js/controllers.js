(function() {
    "use strict";
    var e;
    e = angular.module("ytControllers", []);
    e.controller("IndexCtrl", [ "$scope", "$http", "contentfulClient", function(e, t, o) {
        e.features = "";
        return o.entries({
            content_type: "tGyjv9K8h2kiGAW6qe2WI",
            include: 1
        }).then(function(t) {
            console.log(t);
            return e.features = t;
        });
    } ]);
    e.controller("DetailCtrl", [ "$scope", "$routeParams", "$http", "$location", "contentfulClient", "$sce", "heightService", function(e, t, o, n, r, s, l) {
        var i;
        i = new Showdown.converter();
        e.player = {};
        e.playerVars = {
            controls: 0,
            autoplay: 0,
            modestbranding: 1,
            showinfo: 0,
            hd: 1
        };
        e.$on("youtube.player.ready", function(t, o) {
            return e.player = o;
        });
        return r.entries({
            "sys.id": t.featureId,
            include: 10
        }).then(function(t) {
            var o, n, r, u, d, a;
            e.feature = t[0];
            e.fields = e.feature.fields;
            console.log(e.fields);
            a = e.fields.youTubeListItems;
            for (u = 0, d = a.length; u < d; u++) {
                o = a[u];
                n = o.fields.bodyText;
                n = i.makeHtml(n);
            }
            e.trust = function(e) {
                return s.trustAsHtml(e);
            };
            e.fields.introText = i.makeHtml(e.fields.introText);
            e.items = e.fields.youTubeListItems;
            r = e.fields.heroImage.fields.file.url;
            e.video = e.items[0].fields.youTubeVideoId;
            e.width = l.getWidth();
            if (e.width < 768) {
                $(".frame").removeClass("desktop").addClass("mobile");
            }
            e.$on("mobile", function(e) {
                return $(".frame").removeClass("desktop").addClass("mobile");
            });
            e.$on("desktop", function(e) {
                return $(".frame").removeClass("mobile").addClass("desktop");
            });
            return setTimeout(l.sendHeight, 2e3);
        });
    } ]);
}).call(this);