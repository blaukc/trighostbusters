/*jslint browser: true*/
/*global $, jQuery, alert*/

var page = 1;
var keySetStart = false;

$(document).ready(function () {
    'use strict';
    $("#arrowRight").click(function () {
        if (page === 1) {
            $("#howToPlay").css("background-image", "url(img/howtoplay/2.jpg)");
            page = 2;
            $("#arrowLeft").show();
        } else if (page === 2) {
            $("#howToPlay").css("background-image", "url(img/howtoplay/3.jpg)");
            page = 3;
            $("#arrowRight").hide();
        }
    });
    $("#arrowLeft").click(function () {
        if (page === 3) {
            $("#howToPlay").css("background-image", "url(img/howtoplay/2.jpg)");
            page = 2;
            $("#arrowRight").show();
        } else if (page === 2) {
            $("#howToPlay").css("background-image", "url(img/howtoplay/1.jpg)");
            page = 1;
            $("#arrowLeft").hide();
        }
    });
    $("#howToPlaySkip").click(function () {
        keySetStart = true;
        $("#howToPlay").hide();
        $("#setKeysSkip").hide();
        $("#setKeys").show();
        $("#container1").show();
        $("#container2").show();
    });
});