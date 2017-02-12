/*jslint browser: true*/
/*global $, jQuery, alert, p1DrawGhost, p2DrawGhost, p1CreateGhost, p2CreateGhost*/

var n = 0, m = 0, o = 0, p1Level, p2Level, p1LoseLifeInterval, p2LoseLifeInterval, p1LoseLifeArray, p2LoseLifeArray, gameStart,
    p1Answer = 0, p1Question = 0, p2Answer = 0, p2Question = 0, levelComplete = 0, currentGhost = 1,
    aliveP1 = [], aliveP2 = [],
    p1ToBeKilled, p1Killed = 0, p2ToBeKilled, p2Killed = 0, p1Score = 0, p2Score = 0, pointsPerGhost = 10,
    levelDetails = ["ghost1", 1, 8, 5000, 0, 10, "ghost2", 1, 10, 4000, 6, 20, "ghost3", 2, 8, 4000, 0, 40, "ghost4", 2, 10, 3000, 9, 60, "ghost5", 3, 8, 2500, 0, 90, "ghost6", 3, 10, 2500, 12, 120, "ghost7", 4, 8, 4000, 0, 160, "ghost8", 4, 12, 3000, 9, 200, "ghost9", 5, 8, 5000, 0, 250, "ghost10", 5, 12, 4000, 12, 300, "ghost11", 6, 12, 1000, 0, 400, "ghost12", 6, 12, 1000, 0, 500, "ghost13", 6, 12, 1000, 0, 600];

function random(x, y) {
    'use strict';
    return Math.floor((Math.random() * y) + x);
}

function levelText(text) {
    'use strict';
    $("#centerText")
        .text(text)
        .show();
    setTimeout(function () { $("#centerText").hide(); }, 5000);
}

function nextLevel(ghost) {
    'use strict';
    currentGhost += 1;
    aliveP1.length = 0;
    aliveP2.length = 0;
    p1LoseLifeArray.length = 0;
    p2LoseLifeArray.length = 0;
    p1Killed = 0;
    p2Killed = 0;
    clearInterval(p1LoseLifeInterval);
    clearInterval(p2LoseLifeInterval);
    for (o = 0; o < levelDetails.length; o += 1) {
        if (levelDetails[o] === "ghost" + ghost) {
            if (ghost % 2 !== 0 && ghost < 12) {
                levelText("Level " + levelDetails[o + 1]);
            } else if (ghost % 2 === 0 && ghost < 11) {
                levelText("Boss Stage");
            }
            pointsPerGhost = levelDetails[o + 5];
            p1Level = setInterval(p1CreateGhost.bind(null, ghost, levelDetails[o + 1], levelDetails[o + 2], levelDetails[o + 4], levelDetails[o + 3]), levelDetails[o + 3]);
            p2Level = setInterval(p2CreateGhost.bind(null, ghost, levelDetails[o + 1], levelDetails[o + 2], levelDetails[o + 4], levelDetails[o + 3]), levelDetails[o + 3]);
        }
    }
}

function p1AddGhostToArray(answer) {
    'use strict';
    aliveP1.push("p1G" + n);
    aliveP1.push(answer);
}

function p2AddGhostToArray(answer) {
    'use strict';
    aliveP2.push("p2G" + m);
    aliveP2.push(answer);
}

function randomiseQuestion(answer, qBefore, level, ghost) {
    'use strict';
    var question = 0;
    switch (level) {
    case 1:
        if (answer === 1) {
            question = random(1 + qBefore, 2);
        } else if (answer === 2) {
            question = random(3 + qBefore, 2);
        } else if (answer === 3) {
            question = 5 + qBefore;
        } else if (answer === 4) {
            question = 6 + qBefore;
        }
        break;
    case 2:
        if (ghost === 3) {
            if (answer === 1) {
                question = random(1 + qBefore, 3);
            } else if (answer === 2) {
                question = random(4 + qBefore, 3);
            } else if (answer === 3) {
                question = random(7 + qBefore, 2);
            } else if (answer === 4) {
                question = 9 + qBefore;
            }
        } else {
            if (answer === 1) {
                question = random(1 + qBefore, 2);
            } else if (answer === 2) {
                question = random(3 + qBefore, 2);
            } else if (answer === 3) {
                question = 5 + qBefore;
            } else if (answer === 4) {
                question = 6 + qBefore;
            }
        }
        break;
    case 3:
        if (ghost === 5) {
            if (answer === 1) {
                question = random(1 + qBefore, 4);
            } else if (answer === 2) {
                question = random(5 + qBefore, 4);
            } else if (answer === 3) {
                question = random(9 + qBefore, 2);
            } else if (answer === 4) {
                question = random(11 + qBefore, 2);
            }
        } else {
            if (answer === 1) {
                question = random(1 + qBefore, 2);
            } else if (answer === 2) {
                question = random(3 + qBefore, 2);
            } else if (answer === 3) {
                question = random(5 + qBefore, 4);
            } else if (answer === 4) {
                question = random(9 + qBefore, 4);
            }
        }
        break;
    case 4:
        if (ghost === 7) {
            if (answer === 1) {
                question = random(1 + qBefore, 2);
            } else if (answer === 2) {
                question = random(3 + qBefore, 3);
            } else if (answer === 3) {
                question = random(6 + qBefore, 2);
            } else if (answer === 4) {
                question = random(8 + qBefore, 2);
            }
        } else {
            if (answer === 1) {
                question = random(1 + qBefore, 3);
            } else if (answer === 2) {
                question = random(4 + qBefore, 2);
            } else if (answer === 3) {
                question = random(6 + qBefore, 2);
            } else if (answer === 4) {
                question = random(8 + qBefore, 2);
            }
        }
        break;
    case 5:
        if (ghost === 9) {
            if (answer === 1) {
                question = random(1 + qBefore, 3);
            } else if (answer === 2) {
                question = random(4 + qBefore, 3);
            } else if (answer === 3) {
                question = random(7 + qBefore, 3);
            } else if (answer === 4) {
                question = random(10 + qBefore, 3);
            }
        } else {
            if (answer === 1) {
                question = random(1 + qBefore, 3);
            } else if (answer === 2) {
                question = random(4 + qBefore, 3);
            } else if (answer === 3) {
                question = random(7 + qBefore, 3);
            } else if (answer === 4) {
                question = random(10 + qBefore, 3);
            }
        }
        break;
    case 6:
        if (answer === 1) {
            question = random(1 + qBefore, 2);
        } else if (answer === 2) {
            question = random(3 + qBefore, 2);
        } else if (answer === 3) {
            question = 5 + qBefore;
        } else if (answer === 4) {
            question = 6 + qBefore;
        }
        break;
    }
    return question;
}

function p1LevelComplete(ghost) {
    'use strict';
    if (p1ToBeKilled === p1Killed) {
        if (levelComplete === 1) {
            nextLevel(ghost);
            levelComplete = 0;
        } else {
            levelComplete += 1;
        }
    }
}

function p2LevelComplete(ghost) {
    'use strict';
    if (p2ToBeKilled === p2Killed) {
        if (levelComplete === 1) {
            levelComplete = 0;
            nextLevel(ghost);
        } else {
            levelComplete += 1;
        }
    }
}

function p1CreateGhost(ghost, level, number, qBefore, time) {
    'use strict';
    p1ToBeKilled = number;
    p1Answer = random(1, 4);
    p1Question = randomiseQuestion(p1Answer, qBefore, level, ghost);
    p1AddGhostToArray(p1Answer);
    p1DrawGhost("p1gc" + n, "p1gc", "p1G" + n, "p1g" + ghost, ghost, level, number, p1Question, qBefore, time);
    n += 1;
    if (n === number) {
        clearInterval(p1Level);
        n = 0;
    }
    $("#p1b1Img").css("background-image", "url(img/answers/ghost" + ghost + "/1.png)");
    $("#p1b2Img").css("background-image", "url(img/answers/ghost" + ghost + "/2.png)");
    $("#p1b3Img").css("background-image", "url(img/answers/ghost" + ghost + "/3.png)");
    $("#p1b4Img").css("background-image", "url(img/answers/ghost" + ghost + "/4.png)");
}

function p2CreateGhost(ghost, level, number, qBefore, time) {
    'use strict';
    p2ToBeKilled = number;
    p2Answer = random(1, 4);
    p2Question = randomiseQuestion(p2Answer, qBefore, level, ghost);
    p2AddGhostToArray(p2Answer);
    p2DrawGhost("p2gc" + m, "p2gc", "p2G" + m, "p2g" + ghost, ghost, level, number, p2Question, qBefore, time);
    m += 1;
    if (m === number) {
        clearInterval(p2Level);
        m = 0;
    }
    $("#p2b1Img").css("background-image", "url(img/answers/ghost" + ghost + "/1.png)");
    $("#p2b2Img").css("background-image", "url(img/answers/ghost" + ghost + "/2.png)");
    $("#p2b3Img").css("background-image", "url(img/answers/ghost" + ghost + "/3.png)");
    $("#p2b4Img").css("background-image", "url(img/answers/ghost" + ghost + "/4.png)");
}

function startLevel() {
    'use strict';
    $("#player1box").click(function () {
        alert(p1LoseLifeArray);
        alert(aliveP1);
    });
    gameStart = 1;
    levelText("Level 1");
    p1Level = setInterval(p1CreateGhost.bind(null, 1, 1, 8, 0, 5000), 5000);
    p2Level = setInterval(p2CreateGhost.bind(null, 1, 1, 8, 0, 5000), 5000);
}
