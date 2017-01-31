/*jslint browser: true*/
/*global $, jQuery, alert, p1DrawGhost, p2DrawGhost*/

var n = 1, m = 1, p1Level, p2Level,
    p1Answer = 0, p1Question = 0, p2Answer = 0, p2Question = 0,
    aliveP1 = [], aliveP2 = [],
    p1ToBeKilled, p1Killed = 0, p2ToBeKilled, p2Killed = 0;

function random(x, y) {
    'use strict';
    return Math.floor((Math.random() * y) + x);
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

function randomiseQuestion(answer) {
    'use strict';
    var question = 0;
    if (answer === 1) {
        question = random(1, 2);
    } else if (answer === 2) {
        question = random(3, 2);
    } else if (answer === 3) {
        question = 5;
    } else if (answer === 4) {
        question = 6;
    }
    return question;
}

function p1CreateGhost(ghost, level, number) {
    'use strict';
    p1ToBeKilled = number;
    p1Answer = random(1, 4);
    p1Question = randomiseQuestion(p1Answer);
    p1AddGhostToArray(p1Answer);
    p1DrawGhost("p1gc" + n, "p1gc", "p1G" + n, "p1g" + ghost, ghost, level, number, p1Question);
    n += 1;
    if (n === number) {
        clearInterval(p1Level);
        n = 1;
        
    }
    $("#p1b1Img").css("background-image", "url(img/answers/lvl" + level + "/1.png)");
    $("#p1b2Img").css("background-image", "url(img/answers/lvl" + level + "/2.png)");
    $("#p1b3Img").css("background-image", "url(img/answers/lvl" + level + "/3.png)");
    $("#p1b4Img").css("background-image", "url(img/answers/lvl" + level + "/4.png)");
}

function p2CreateGhost(ghost, level, number) {
    'use strict';
    p2ToBeKilled = number;
    p2Answer = random(1, 4);
    p2Question = randomiseQuestion(p1Answer);
    p2AddGhostToArray(p1Answer);
    p2DrawGhost("p2gc" + n, "p2gc", "p2G" + n, "p2g" + ghost, ghost, level, number, p1Question);
    m += 1;
    if (m === number) {
        clearInterval(p1Level);
        m = 1;
        
    }
    $("#p2b1Img").css("background-image", "url(img/answers/lvl" + level + "/1.png)");
    $("#p2b2Img").css("background-image", "url(img/answers/lvl" + level + "/2.png)");
    $("#p2b3Img").css("background-image", "url(img/answers/lvl" + level + "/3.png)");
    $("#p2b4Img").css("background-image", "url(img/answers/lvl" + level + "/4.png)");
}

function nextLevel(level) {
    'use strict';
    window[level]();
}

function levelText(text) {
    'use strict';
    $("#centerText")
        .text(text)
        .show();
    setTimeout(function () { $("#centerText").hide(); }, 5000);
}

function startLevel() {
    'use strict';
    levelText("Level One");
    p1Level = setInterval(p1CreateGhost.bind(null, 1, 1, 8), 5000);
    p2Level = setInterval(p2CreateGhost.bind(null, 1, 1, 8), 5000);
}