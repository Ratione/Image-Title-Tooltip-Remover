// ==UserScript==
// @name         Image Title Tooltip Remover
// @version      1.0
// @description  This script waits for you to hover over an 'img' object, and then temporarily sets the title of that image to '' so it doesnt pop up an annoying tooltip. Useful for image enlargers, among other things.
// @author       MrPainting
// @namespace    *
// @run-at       document-end
// @grant        GM_setValue
// @grant        GM_getValue
// @require      https://code.jquery.com/jquery-2.2.4.min.js
// ==/UserScript==

(async function() {
    'use strict';

    var ttext;
    $('img').hover(
        function(){
            ttext = $GM_getValue('title');
            $GM_setValue('title', '');
        },
        function(){
            $GM_setValue('title', ttext);
        });
})();
