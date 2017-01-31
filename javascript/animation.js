/*jslint browser: true, */
/*global $, jQuery, alert, aliveP1, aliveP2, dInterval, p1CreateGhost, p2CreateGhost*/

var aPlayer1 = 1, aPlayer2 = 1,
    aP1G1 = 1,
    aP2G1 = 1,
    dP1G1 = 1,
    P1G1Interval = 0,
    P2G1Interval = 0,
    p1HeartCounter = 3, p2HeartCounter = 3,
    p1Level, p2Level, p1LoseLifeInterval, p2LoseLifeInterval, p1Killed, p2Killed;

function p1RestartGame(ghost, level, number) {
    'use strict';
    clearInterval(p1Level);
    p1Killed = 0;
    aliveP1.length = 0;
    $(".p1gc").remove();
    $("#p1H3").show();
    $("#p1H2").show();
    $("#p1H1").show();
    p1CreateGhost(ghost, level, number);
    p1Level = setInterval(p1CreateGhost.bind(null, ghost, level, p1Killed), 5000);
}

function p2RestartGame(ghost, level, number) {
    'use strict';
    clearInterval(p2Level);
    p2Killed = 0;
    aliveP2.length = 0;
    $(".p2gc").remove();
    $("#p2H3").show();
    $("#p2H2").show();
    $("#p2H1").show();
    p2CreateGhost(ghost, level, number);
    p2Level = setInterval(p2CreateGhost.bind(null, ghost, level, p2Killed), 5000);
}

function p1LoseLifeF(gId, ghost, level, number) {
    'use strict';
    if (aliveP1.indexOf(gId) !== -1) {
        if (p1HeartCounter === 3) {
            $("#p1H3").hide();
        } else if (p1HeartCounter === 2) {
            $("#p1H2").hide();
        } else if (p1HeartCounter === 1) {
            $("#p1H1").hide();
            p1HeartCounter = 4;
            clearInterval(p1LoseLifeInterval);
            p1RestartGame(ghost, level, number);
        }
        p1HeartCounter -= 1;
    }
}

function p2LoseLifeF(gId, ghost, level, number) {
    'use strict';
    if (aliveP2.indexOf(gId) !== -1) {
        if (p2HeartCounter === 3) {
            $("#p2H3").hide();
        } else if (p2HeartCounter === 2) {
            $("#p2H2").hide();
        } else if (p2HeartCounter === 1) {
            $("#p2H1").hide();
            p2HeartCounter = 4;
            clearInterval(p2LoseLifeInterval);
            p2RestartGame(ghost, level, number);
        }
        p2HeartCounter -= 1;
    }
}

function p1LoseLife(gId, ghost, level, number) {
    'use strict';
    p1LoseLifeF(gId, ghost, level, number);
    p1LoseLifeInterval = setInterval(p1LoseLifeF.bind(null, gId, ghost, level, number), 2000);
}

function p2LoseLife(gId, ghost, level, number) {
    'use strict';
    p2LoseLifeF(gId, ghost, level, number);
    p2LoseLifeInterval = setInterval(p2LoseLifeF.bind(null, gId, ghost, level, number), 2000);
}

function p1DrawGhost(gContainerId, gContainerClass, gId, gClass, ghost, level, number, question) {
    'use strict';
    var $ghostContainer = $("<div>", {id: gContainerId, "class": gContainerClass}),
        $ghost = $("<div>", {id: gId, "class": gClass}),
        $question = $("<div>", {id: "question" + level + "-" + question}),
        randHeight = Math.floor((Math.random() * 70) + 1);
    $("#player1box").append($ghostContainer);
    $("#" + gContainerId).append($ghost);
    $("#" + gContainerId).append($question);
    $("#" + gContainerId).css("margin-top", randHeight + "%");
    $("#" + gContainerId).animate({right: '80%', top: 35 - randHeight + "%"}, 10000, p1LoseLife.bind(null, gId, ghost, level, number));
    //$("#" + gContainerId).animate({right: '80%', top: '35%'}, 20000);
}

function p2DrawGhost(gContainerId, gContainerClass, gId, gClass, ghost, level, number, question) {
    'use strict';
    var $ghostContainer = $("<div>", {id: gContainerId, "class": gContainerClass}),
        $ghost = $("<div>", {id: gId, "class": gClass}),
        $question = $("<div>", {id: "question" + level + "-" + question}),
        randHeight = Math.floor((Math.random() * 70) + 1);
    $("#player2box").append($ghostContainer);
    $("#" + gContainerId).append($ghost);
    $("#" + gContainerId).append($question);
    $("#" + gContainerId).css("margin-top", randHeight + "%");
    $("#" + gContainerId).animate({left: '80%', top: 35 - randHeight + "%"}, 10000, p2LoseLife.bind(null, gId, ghost, level, number));
    //$("#" + gContainerId).animate({right: '80%', top: '35%'}, 20000);
}

function drawPlayer1() {
    'use strict';
    $("#player1").css("background-image", "url(img/player1animation/Player1%20Idle" + aPlayer1 + ".png)");
    aPlayer1 += 1;
    if (aPlayer1 === 7) {
        aPlayer1 = 1;
    }
}
function drawPlayer2() {
    'use strict';
    $("#player2").css("background-image", "url(img/player2animation/Player2%20Idle" + aPlayer2 + ".png)");
    aPlayer2 += 1;
    if (aPlayer2 === 7) {
        aPlayer2 = 1;
    }
}
function drawP1G1() {
    'use strict';
    $(".p1g1").css("background-image", "url(img/ghostAnimation/player1/ghost1/ghost1%20idle" + aP1G1 + ".png)");
    aP1G1 += 1;
    if (aP1G1 === 6) {
        aP1G1 = 1;
    }
}
function drawP2G1() {
    'use strict';
    $(".p2g1").css("background-image", "url(img/ghostAnimation/player2/ghost1/ghost1%20idle" + aP2G1 + ".png)");
    aP2G1 += 1;
    if (aP2G1 === 6) {
        aP2G1 = 1;
    }
}
function killP1G(gId) {
    'use strict';
    p1Killed += 1;
    $("#" + gId).parent().remove();
}
function killP2G(gId) {
    'use strict';
    p2Killed += 1;
    $("#" + gId).parent().remove();
}
$(document).ready(function () {
    "use strict";
    $("#player1box").click(function () {
        alert(aliveP2);
    });
    setInterval(drawPlayer1, 150);
    setInterval(drawPlayer2, 150);
    P1G1Interval = setInterval(drawP1G1, 200);
    P2G1Interval = setInterval(drawP2G1, 200);
});
