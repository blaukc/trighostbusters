/*jslint browser: true, */
/*global $, jQuery, alert, aliveP1, aliveP2, dInterval, p1CreateGhost, p2CreateGhost, p1LevelComplete, p2LevelComplete*/

var aPlayer1 = 1, aPlayer2 = 1, p, q, r, s, y, z,
    aP1G1 = 1, aP1G2 = 1, aP1G3 = 1, aP1G4 = 1, aP1G5 = 1, aP1G6 = 1, aP1G7 = 1, aP1G8 = 1, aP1G9 = 1, aP1G10 = 1, aP1G11 = 1,  aP1G12 = 1,  aP1G13 = 1,
    aP2G1 = 1, aP2G2 = 1, aP2G3 = 1, aP2G4 = 1, aP2G5 = 1, aP2G6 = 1, aP2G7 = 1, aP2G8 = 1, aP2G9 = 1, aP2G10 = 1, aP2G11 = 1,  aP2G12 = 1,  aP2G13 = 1,
    p1HeartCounter = 3, p2HeartCounter = 3, stopLoseLife = false, pointsPerGhost = 10,
    p1Level, p2Level, p1LoseLifeInterval, p2LoseLifeInterval, p1LoseLifeArray = [], p2LoseLifeArray = [], p1Killed, p2Killed, currentGhost, n, m, p1UpdateScore, p2UpdateScore, levelDetails;


function setP1ArrayZero() {
    'use strict';
    p1LoseLifeArray.length = 0;
}
function setP2ArrayZero() {
    'use strict';
    p2LoseLifeArray.length = 0;
}
function p1RestartGame(ghost, level, number, qBefore, time) {
    'use strict';
    clearInterval(p1Level);
    p1Killed = 0;
    n = 0;
    aliveP1.length = 0;
    p1LoseLifeArray.length = 0;
    $(".p1gc").remove();
    $("#p1H3").show();
    $("#p1H2").show();
    $("#p1H1").show();
    setTimeout(setP1ArrayZero, 1000);
    for (y = 0; y < levelDetails.length; y += 1) {
        if (levelDetails[y] === "ghost" + currentGhost) {
            p1Level = setInterval(p1CreateGhost.bind(null, currentGhost, levelDetails[y + 1], levelDetails[y + 2], levelDetails[y + 4], levelDetails[y + 3]), levelDetails[y + 3]);
        }
    }
}

function p2RestartGame(ghost, level, number, qBefore, time) {
    'use strict';
    clearInterval(p2Level);
    p2Killed = 0;
    m = 0;
    aliveP2.length = 0;
    p2LoseLifeArray.length = 0;
    $(".p2gc").remove();
    $("#p2H3").show();
    $("#p2H2").show();
    $("#p2H1").show();
    setTimeout(setP2ArrayZero, 1000);
    for (z = 0; z < levelDetails.length; z += 1) {
        if (levelDetails[z] === "ghost" + currentGhost) {
            p2Level = setInterval(p2CreateGhost.bind(null, currentGhost, levelDetails[z + 1], levelDetails[z + 2], levelDetails[z + 4], levelDetails[z + 3]), levelDetails[z + 3]);
        }
    }
}

function p1LoseLifeF(gId, ghost, level, number, qBefore, time) {
    'use strict';
    if (aliveP1.indexOf(gId) !== -1 && p1LoseLifeArray.indexOf(gId) !== -1) {
        if (p1HeartCounter === 3) {
            $("#p1H3").hide();
        } else if (p1HeartCounter === 2) {
            $("#p1H2").hide();
        } else if (p1HeartCounter === 1) {
            $("#p1H1").hide();
            p1HeartCounter = 4;
            clearInterval(p1LoseLifeInterval);
            p1RestartGame(ghost, level, number, qBefore, time);
        }
        p1UpdateScore(-(pointsPerGhost / 2));
        p1HeartCounter -= 1;
    }
}

function p2LoseLifeF(gId, ghost, level, number, qBefore, time) {
    'use strict';
    if (aliveP2.indexOf(gId) !== -1 && p2LoseLifeArray.indexOf(gId) !== -1) {
        if (p2HeartCounter === 3) {
            $("#p2H3").hide();
        } else if (p2HeartCounter === 2) {
            $("#p2H2").hide();
        } else if (p2HeartCounter === 1) {
            $("#p2H1").hide();
            p2HeartCounter = 4;
            clearInterval(p2LoseLifeInterval);
            p2RestartGame(ghost, level, number, qBefore, time);
        }
        p2UpdateScore(-(pointsPerGhost / 2));
        p2HeartCounter -= 1;
    }
}

function p1LoseLife(gId, ghost, level, number, qBefore, time) {
    'use strict';
    for (p = 0; p < aliveP1.length; p += 1) {
        if (aliveP1[p] === gId) {
            if (aliveP1.indexOf(gId) !== -1) {
                if (p1HeartCounter === 3) {
                    $("#p1H3").hide();
                } else if (p1HeartCounter === 2) {
                    $("#p1H2").hide();
                } else if (p1HeartCounter === 1) {
                    $("#p1H1").hide();
                    p1HeartCounter = 4;
                    clearInterval(p1LoseLifeInterval);
                    p1RestartGame(ghost, level, number, qBefore, time);
                }
                p1UpdateScore(-(pointsPerGhost / 2));
                p1HeartCounter -= 1;
            }
            p1LoseLifeArray.push(gId);
            p1LoseLifeInterval = setInterval(p1LoseLifeF.bind(null, gId, ghost, level, number, qBefore, time), 2000);
        }
    }
}

function p2LoseLife(gId, ghost, level, number, qBefore, time) {
    'use strict';
    for (q = 0; q < aliveP2.length; q += 1) {
        if (aliveP2[q] === gId) {
            if (aliveP2.indexOf(gId) !== -1) {
                if (p2HeartCounter === 3) {
                    $("#p2H3").hide();
                } else if (p2HeartCounter === 2) {
                    $("#p2H2").hide();
                } else if (p2HeartCounter === 1) {
                    $("#p2H1").hide();
                    p2HeartCounter = 4;
                    clearInterval(p2LoseLifeInterval);
                    p2RestartGame(ghost, level, number, qBefore, time);
                }
                p2UpdateScore(-(pointsPerGhost / 2));
                p2HeartCounter -= 1;
            }
            p2LoseLifeArray.push(gId);
            p2LoseLifeInterval = setInterval(p2LoseLifeF.bind(null, gId, ghost, level, number, qBefore, time), 2000);
        }
    }
}

function p1DrawGhost(gContainerId, gContainerClass, gId, gClass, ghost, level, number, question, qBefore, time) {
    'use strict';
    var $ghostContainer = $("<div>", {id: gContainerId, "class": gContainerClass}),
        $ghost = $("<div>", {id: gId, "class": gClass}),
        $question = $("<div>", {id: "question" + level + "-" + question}),
        randHeight = Math.floor((Math.random() * 70) + 1);
    $("#player1box").append($ghostContainer);
    $("#" + gContainerId).append($ghost);
    $("#" + gContainerId).append($question);
    $("#" + gContainerId).css("margin-top", randHeight + "%");
    $("#" + gContainerId).animate({right: '80%', top: 35 - randHeight + "%"}, 10000, p1LoseLife.bind(null, gId, ghost, level, number, qBefore, time));
    //$("#" + gContainerId).animate({right: '80%', top: '35%'}, 20000);
}

function p2DrawGhost(gContainerId, gContainerClass, gId, gClass, ghost, level, number, question, qBefore, time) {
    'use strict';
    var $ghostContainer = $("<div>", {id: gContainerId, "class": gContainerClass}),
        $ghost = $("<div>", {id: gId, "class": gClass}),
        $question = $("<div>", {id: "question" + level + "-" + question}),
        randHeight = Math.floor((Math.random() * 70) + 1);
    $("#player2box").append($ghostContainer);
    $("#" + gContainerId).append($ghost);
    $("#" + gContainerId).append($question);
    $("#" + gContainerId).css("margin-top", randHeight + "%");
    $("#" + gContainerId).animate({left: '80%', top: 35 - randHeight + "%"}, 10000, p2LoseLife.bind(null, gId, ghost, level, number, qBefore, time));
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
function drawP1G2() {
    'use strict';
    $(".p1g2").css("background-image", "url(img/ghostAnimation/player1/ghost2/ghost2%20idle" + aP1G2 + ".png)");
    aP1G2 += 1;
    if (aP1G2 === 4) {
        aP1G2 = 1;
    }
}
function drawP2G2() {
    'use strict';
    $(".p2g2").css("background-image", "url(img/ghostAnimation/player2/ghost2/ghost2%20idle" + aP2G2 + ".png)");
    aP2G2 += 1;
    if (aP2G2 === 4) {
        aP2G2 = 1;
    }
}
function killP1G(gId) {
    'use strict';
    $("#" + gId).parent().remove();
    p1UpdateScore(pointsPerGhost);
    p1LevelComplete(currentGhost + 1);
}
function killP2G(gId) {
    'use strict';
    $("#" + gId).parent().remove();
    p2UpdateScore(pointsPerGhost);
    p2LevelComplete(currentGhost + 1);
}
$(document).ready(function () {
    "use strict";
    setInterval(drawPlayer1, 150);
    setInterval(drawPlayer2, 150);
});