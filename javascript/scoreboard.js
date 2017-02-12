/*jslint browser: true*/
/*global $, jQuery, alert, confirm, p1RestartGame, p2RestartGame*/

var p1Score = 0, p2Score = 0, pointsPerGhost = 10;

function p1UpdateScore(increase) {
    'use strict';
    p1Score += increase;
    $("#score1").text(p1Score);
}

function p2UpdateScore(increase) {
    'use strict';
    p2Score += increase;
    $("#score2").text(p2Score);
}

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