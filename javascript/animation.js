/*jslint browser: true*/
/*global $, jQuery, alert, requestAnimationFrame*/

$(document).ready(function () {
    "use strict";
    var aPlayer1 = 1, aPlayer2 = 1;
    function drawPlayer1() {
        $("#player1").css("background-image", "url(img/player1animation/Player1%20Idle" + aPlayer1 + ".png");
        aPlayer1 += 1;
        if (aPlayer1 === 7) {
            aPlayer1 = 1;
        }
    }
    function drawPlayer2() {
        $("#player2").css("background-image", "url(img/player2animation/Player2%20Idle" + aPlayer2 + ".png");
        aPlayer2 += 1;
        if (aPlayer2 === 7) {
            aPlayer2 = 1;
        }
    }
    setInterval(drawPlayer1, 150);
    setInterval(drawPlayer2, 150);
});