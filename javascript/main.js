/*jslint browser: true*/
/*global $, jQuery, alert*/

var keySetStart, difficulty = 1, difficultyD = 1;

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
    $("#dArrowLeft").hide();
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
    $("#dArrowRight").click(function () {
        if (difficulty === 1) {
            $("#difficulty").attr("src", "img/howtoplay/2.png");
            difficulty = 2;
            difficultyD = 1.5;
            $("#difficulty").text(difficulty);
            $("#dArrowLeft").show();
        } else if (difficulty === 2) {
            $("#difficulty").attr("src", "img/howtoplay/3.png");
            difficulty = 3;
            difficultyD = 2;
            $("#difficulty").text(difficulty);
            $("#dArrowRight").hide();
        }
    });
    $("#dArrowLeft").click(function () {
        if (difficulty === 3) {
            $("#difficulty").attr("src", "img/howtoplay/2.png");
            difficulty = 2;
            difficultyD = 1.5;
            $("#difficulty").text(difficulty);
            $("#dArrowRight").show();
        } else if (difficulty === 2) {
            $("#difficulty").attr("src", "img/howtoplay/1.png");
            difficulty = 1;
            difficultyD = 1;
            $("#difficulty").text(difficulty);
            $("#dArrowLeft").hide();
        }
    });
});