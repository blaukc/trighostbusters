/*jslint browser: true*/
/*global $, jQuery, alert, confirm, p1RestartGame, p2RestartGame*/

var p1Score = 0, p2Score = 0, pointsPerGhost = 10, currentGhost;

function p1UpdateScore(increase) {
    'use strict';
    if (Number.isInteger(increase)) {
        p1Score += increase;
        $("#score1").text(p1Score);
    } else {
        p1Score += 300;
        $("#score1").text(p1Score);
    }
}

function p2UpdateScore(increase) {
    'use strict';
    if (Number.isInteger(increase)) {
        p2Score += increase;
        $("#score2").text(p2Score);
    } else {
        p2Score += 300;
        $("#score2").text(p2Score);
    }
}

function end() {
    'use strict';
    $("#p1EScore").text(p1Score);
    $("#p2EScore").text(p2Score);
    if (p1Score > p2Score) {
        $("#winner").text("Player 1 Wins");
    } else {
        $("#winner").text("Player 2 Wins");
    }
    $("#end").show();
}

$(document).ready(function () {
    'use strict';
    $("#reload").click(function () {
        window.location.reload();
    });
});