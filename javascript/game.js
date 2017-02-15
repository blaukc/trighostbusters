/*jslint browser: true*/
/*global $, jQuery, alert, p1DrawGhost, p2DrawGhost, p1CreateGhost, p2CreateGhost, nextLevelAfterLesson, startLevel, countdown, end*/

var n = 0, m = 0, o = 0, p1Level, p2Level, p1LoseLifeInterval, p2LoseLifeInterval, p1LoseLifeArray, p2LoseLifeArray, gameStart, countdownTimer, difficultyD,
    p1Answer = 0, p1Question = 0, p2Answer = 0, p2Question = 0, levelComplete = 0, currentGhost = 1, currentLevel = 1,
    aliveP1 = [], aliveP2 = [],
    p1ToBeKilled, p1Killed = 0, p2ToBeKilled, p2Killed = 0, p1Score = 0, p2Score = 0, pointsPerGhost = 10,
    levelDetails = ["ghost1", 1, 8, 7500, 0, 10, "ghost2", 1, 10, 6000, 6, 20, "ghost3", 2, 8, 7500, 0, 40, "ghost4", 2, 10, 6000, 9, 60, "ghost5", 3, 8, 6000, 0, 90, "ghost6", 3, 10, 6000, 12, 120, "ghost7", 4, 8, 7500, 0, 160, "ghost8", 4, 12, 6000, 9, 200, "ghost9", 5, 8, 9000, 0, 250, "ghost10", 5, 12, 6000, 12, 300, "ghost11", 6, 1, 1000, 0, 1000, "ghost12", 6, 1, 1000, 4, 2000, "ghost13", 6, 1, 1000, 8, 3000];

function random(x, y) {
    'use strict';
    return Math.floor((Math.random() * y) + x);
}

function lesson(ghost) {
    'use strict';
    gameStart = 0;
    $("#lesson").show();
    $("#lessonImg").css("background-image", "url(img/lesson/" + currentLevel + ".png)");
}

function firstLesson() {
    'use strict';
    gameStart = 0;
    $("#lesson").show();
    $("#lessonImg").css("background-image", "url(img/lesson/" + currentLevel + ").png");
    $("#lessonSkip").click(function () {
        $("#lesson").hide();
        gameStart = 1;
        countdownTimer = setInterval(countdown, 1000);
    });
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
    aliveP1.length = 0;
    aliveP2.length = 0;
    p1LoseLifeArray.length = 0;
    p2LoseLifeArray.length = 0;
    p1Killed = 0;
    p2Killed = 0;
    clearInterval(p1LoseLifeInterval);
    clearInterval(p2LoseLifeInterval);
    currentGhost += 1;
    if (currentGhost === 3) {
        currentLevel = 2;
        lesson(currentGhost);
    } else if (currentGhost === 5) {
        currentLevel = 3;
        lesson(currentGhost);
    } else if (currentGhost === 7) {
        currentLevel = 4;
        lesson(currentGhost);
    } else if (currentGhost === 9) {
        currentLevel = 5;
        lesson(currentGhost);
    } else if (currentGhost === 11) {
        currentLevel = 6;
        lesson(currentGhost);
    } else if (currentGhost === 14) {
        setTimeout(end, 1000);
    } else {
        nextLevelAfterLesson(currentGhost);
    }
}

function setPPG(points) {
    'use strict';
    pointsPerGhost = points;
}

function nextLevelAfterLesson(ghost) {
    'use strict';
    for (o = 0; o < levelDetails.length; o += 1) {
        if (levelDetails[o] === "ghost" + currentGhost) {
            if (currentGhost % 2 !== 0 && currentGhost < 10) {
                levelText("Level " + levelDetails[o + 1]);
            } else if (currentGhost % 2 === 0 && currentGhost < 11) {
                levelText("Boss Stage");
            } else if (currentGhost === 11) {
                levelText("Final Boss 1");
            } else if (currentGhost === 12) {
                levelText("Final Boss 2");
            } else if (currentGhost === 13) {
                levelText("Final Boss 3");
            }
            setTimeout(setPPG.bind(null, levelDetails[o + 5]), 1000);
            if (currentGhost < 11) {
                p1Level = setInterval(p1CreateGhost.bind(null, currentGhost, levelDetails[o + 1], levelDetails[o + 2], levelDetails[o + 4], levelDetails[o + 3] / difficultyD), levelDetails[o + 3] / difficultyD);
                p2Level = setInterval(p2CreateGhost.bind(null, currentGhost, levelDetails[o + 1], levelDetails[o + 2], levelDetails[o + 4], levelDetails[o + 3]) / difficultyD, levelDetails[o + 3] / difficultyD);
            } else {
                setTimeout(p1CreateGhost.bind(null, currentGhost, levelDetails[o + 1], levelDetails[o + 2], levelDetails[o + 4], levelDetails[o + 3] / difficultyD), 5000);
                setTimeout(p2CreateGhost.bind(null, currentGhost, levelDetails[o + 1], levelDetails[o + 2], levelDetails[o + 4], levelDetails[o + 3] / difficultyD), 5000);
            }
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
            question = 1 + qBefore;
        } else if (answer === 2) {
            question = 2 + qBefore;
        } else if (answer === 3) {
            question = 3 + qBefore;
        } else if (answer === 4) {
            question = 4 + qBefore;
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
    $("#lessonSkip").click(function () {
        $("#lesson").hide();
        gameStart = 1;
        nextLevelAfterLesson(currentGhost);
    });
    gameStart = 1;
    levelText("Level 1");
    p1Level = setInterval(p1CreateGhost.bind(null, 1, 1, 8, 0, 7500 / difficultyD), 7500 / difficultyD);
    p2Level = setInterval(p2CreateGhost.bind(null, 1, 1, 8, 0, 7500 / difficultyD), 7500 / difficultyD);
}

$(document).ready(function () {
    'use strict';
    $("#player1box").click(function () {
        alert(p1LoseLifeArray);
        alert(aliveP1);
    });
    $("#player2box").click(function () {
        alert(p2LoseLifeArray);
        alert(aliveP2);
    });
});