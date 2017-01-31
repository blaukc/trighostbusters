/*jslint browser: true*/
/*global $, jQuery, alert, confirm, p1RestartGame, p2RestartGame*/

$(document).ready(function () {
    'use strict';
    $("#pause").click(function () {
        var p = confirm("The game is now paused. \n Press Ok to resume game. \n Press Cancel to restart game");
        if (p === false) {
            p1RestartGame();
            p2RestartGame();
        }
    });
});