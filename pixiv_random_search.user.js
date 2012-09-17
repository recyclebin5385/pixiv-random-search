// ==UserScript==
// @name        pixiv random search
// @namespace   pixivrandomsearch
// @description a Greasemonkey script to add random search button to pixiv search.php and tags.php
// @include     http://www.pixiv.net/tags.php*
// @include     http://www.pixiv.net/search.php*
// @version     1
// @grant       none
// ==/UserScript==



$(function() {
    $("nav.pager ul").append("<li><a href='#' class='ui-button-light' title='random'>random</a></li>").click(function(){
        var maxPage = Math.min(Math.floor((parseInt($("#page-search .info .count").text()) + 19) / 20));

        var page = Math.floor(Math.random() * maxPage) + 1;

        var newUrl;
        var currentUrl = document.URL;
        var regExp = new RegExp("(p=[0-9]*)");
        if (currentUrl.match(/p=[0-9]*/)) {
            newUrl = currentUrl.replace(/p=[0-9]*/, "p=" + page);
        } else {
            if (currentUrl.match(/\?/)) {
                newUrl = currentUrl + "&p=" + page;
            } else {
                newUrl = currentUrl + "?p=" + page;
            }
        }

        location.href = newUrl;
    })});
