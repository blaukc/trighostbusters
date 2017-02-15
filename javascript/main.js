/*jslint browser: true*/
/*global $, jQuery, alert*/

var keySetStart;

$(document).ready(function () {
    "use strict";
    $("#number").hide();
    $("#container1").hide();
    $("#container2").hide();
    $("#translucentBG").hide();
    $("#setKeys").hide();
    $("#howToPlay").hide();
    $("#scoreboard").hide();
    $("#centerText").hide();
    $("#lesson").hide();
    $("#end").hide();
    $("#arrowLeft").hide();
    $("#credit").hide();
    $("#play").click(function () {
        $("#menu").hide();
        keySetStart = true;
        $("#setKeysSkip").hide();
        $("#setKeys").show();
        $("#container1").show();
        $("#container2").show();
        $("#setKeysP2").hide();
        $("#translucentBG").show();
    });
    $("#howToPlayBtn").click(function () {
        $("#menu").hide();
        $("#howToPlay").show();
        $("#translucentBG").show();
    });
    $("#howToPlaySkip").click(function () {
        $("#menu").show();
        $("#howToPlay").hide();
        $("#translucentBG").hide();
    });
    $("#credits").click(function () {
        $("#menu").hide();
        $("#credit").show();
        $("#translucentBG").show();
    });
    $("#creditSkip").click(function () {
        $("#menu").show();
        $("#credit").hide();
        $("#translucentBG").hide();
    });
});