// ==UserScript==
// @name         Javlibrary sukebei shortcuts
// @namespace    https://github.com/Runisco
// @version      1.0
// @updateURL https://github.com/Runisco/JavlibrarySukebeiShortcuts/raw/main/JavlibrarySukebeiShortcuts.user.js
// @downloadURL https://github.com/Runisco/JavlibrarySukebeiShortcuts/raw/main/JavlibrarySukebeiShortcuts.user.js
// @supportURL https://github.com/Runisco/JavlibrarySukebeiShortcuts/issues
// @description  Adds a shortcut to the toolbar of videos on Javlibrary to automatically search for the video on Sukebei
// @author       Runisco
// @match https://www.javlibrary.com/en/vl_genre.php?g=*
// @match https://www.javlibrary.com/en/vl_genre.php?&mode=&g=*&page=*
// @match https://www.javlibrary.com/en/vl_update.php
// @match https://www.javlibrary.com/en/vl_update.php?&mode=&page=*
// @match https://www.javlibrary.com/en/vl_newrelease.php
// @match https://www.javlibrary.com/en/vl_newrelease.php?&mode=&page=*
// @match https://www.javlibrary.com/en/vl_newentries.php
// @match https://www.javlibrary.com/en/vl_newentries.php?&mode=&page=*
// @match https://www.javlibrary.com/en/vl_mostwanted.php
// @match https://www.javlibrary.com/en/vl_mostwanted.php?&mode=&page=*
// @match https://www.javlibrary.com/en/vl_bestrated.php
// @match https://www.javlibrary.com/en/vl_bestrated.php?&mode=&page=*
// @match https://www.javlibrary.com/en/vl_star.php?s=*
// @match https://www.javlibrary.com/en/vl_star.php?&mode=&s=*&page=*
// @match https://www.javlibrary.com/en/vl_maker.php?m=*
// @match https://www.javlibrary.com/en/vl_maker.php?&mode=&m=*&page=*
// @match https://www.javlibrary.com/en/vl_label.php?l=*
// @match https://www.javlibrary.com/en/vl_label.php?&mode=&l=*&page=*
// @match https://www.javlibrary.com/en/vl_searchbytitle.php?searchid=*&keyword=*
// @match https://www.javlibrary.com/en/vl_searchbytitle.php?&searchid=*&page=*
// @match https://www.javlibrary.com/en/vl_director.php?d=*
// @match https://www.javlibrary.com/en/vl_director.php?d=*&page=*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

const searchUrl = "https://sukebei.nyaa.si/?f=0&c=0_0&q="

jQuery(function ($) {
    $('.toolbar')
        .map(function () { return $(this).children('a:last'); })
        .each(function () {
            var searchTerm = $(this).parent().parent().children('a:first').find('.id').text()
            var iconLink = "https://sukebei.nyaa.si/static/favicon.png"
            var icon = $('<a href="' + searchUrl + searchTerm + '" target="_blank"><img src="' + iconLink + '" class="sponsor-tag-img" /></a>')
            //var $text = downloadLink.children('a');
            //downloadLink.insertAfter($(this));
            icon.insertAfter($(this));
            //downloadLink.click(function (e) {
            //    e.preventDefault();
            //    inputName(this, download);
            //});
        });
});
