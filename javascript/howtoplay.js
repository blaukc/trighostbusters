/*jslint browser: true*/
/*global $, jQuery, alert*/

var page = 1;
var keySetStart = false;

$(document).ready(function () {
    'use strict';
    $("#arrowRight").click(function () {
        if (page === 1) {
            $("#howToPlayImg").attr("src", "img/howtoplay/2.png");
            page = 2;
            $("#arrowLeft").show();
        } else if (page === 2) {
            $("#howToPlayImg").attr("src", "img/howtoplay/3.png");
            page = 3;
            $("#arrowRight").hide();
        }
    });
    $("#arrowLeft").click(function () {
        if (page === 3) {
            $("#howToPlayImg").attr("src", "img/howtoplay/2.png");
            page = 2;
            $("#arrowRight").show();
        } else if (page === 2) {
            $("#howToPlayImg").attr("src", "img/howtoplay/1.png");
            page = 1;
            $("#arrowLeft").hide();
        }
    });
});