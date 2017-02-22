/*jslint browser: true*/
/*global $, jQuery, alert, firstLesson, aliveP1, killP1G, aliveP2, killP2G, startLevel*/

var p1b1, p1b2, p1b3, p1b4, p2b1, p2b2, p2b3, p2b4, p1Killed = 0, p2Killed = 0, currentGhost, p1Elapsed, p1Time, p2Elapsed, p2Time;
var keySetStart = false, wrongKey = true, p1UpdateScore, p2UpdateScore, pointsPerGhost, gameStart = 0;
var countdownNumber = 3, countdownTimer = 0, i = 0, j = 0, dInterval = 0;

function press(player, number) {
    'use strict';
    $("#p" + player + "b" + number).css("top", "84.75%");
    setTimeout(function () {
        $("#p" + player + "b" + number).css("top", "84.25%");
    }, 250);
}

function countdown() {
    'use strict';
    $("#number").css("background-image", "url(img/321/" + countdownNumber + ".png)");
    countdownNumber -= 1;
    if (countdownNumber === -1) {
        clearInterval(countdownTimer);
        startLevel();
    }
}

$(document).ready(function () {
    'use strict';
    $("#p1b1").css("z-index", "12");
    
    var keyToBeSet = 1, keysAlrSet = [];
    $(document).on("keypress", function (keySet) {
        if (keyToBeSet < 9 && keySetStart) {
            if (keysAlrSet.indexOf(keySet.which) === -1) {
                if (keyToBeSet === 1) {
                    p1b1 = keySet.which;
                    $(".setKeysRed").text("second");
                    $("#p1b1").css("z-index", "9");
                    $("#p1b2").css("z-index", "12");
                    keysAlrSet.push(keySet.which);
                    $("#p1b1Img").append("<p>" + String.fromCharCode(keySet.which) + "</p>");
                } else if (keyToBeSet === 2) {
                    p1b2 = keySet.which;
                    $(".setKeysRed").text("third");
                    $("#p1b2").css("z-index", "9");
                    $("#p1b3").css("z-index", "12");
                    keysAlrSet.push(keySet.which);
                    $("#p1b2Img").append("<p>" + String.fromCharCode(keySet.which) + "</p>");
                } else if (keyToBeSet === 3) {
                    p1b3 = keySet.which;
                    $(".setKeysRed").text("last");
                    $("#p1b3").css("z-index", "9");
                    $("#p1b4").css("z-index", "12");
                    keysAlrSet.push(keySet.which);
                    $("#p1b3Img").append("<p>" + String.fromCharCode(keySet.which) + "</p>");
                } else if (keyToBeSet === 4) {
                    p1b4 = keySet.which;
                    $(".setKeysRed").text("first");
                    $("#p1b4").css("z-index", "9");
                    $("#p2b1").css("z-index", "12");
                    keysAlrSet.push(keySet.which);
                    $("#p1b4Img").append("<p>" + String.fromCharCode(keySet.which) + "</p>");
                    $("#setKeysP2").show();
                    $("#setKeysP1").hide();
                } else if (keyToBeSet === 5) {
                    p2b1 = keySet.which;
                    $(".setKeysRed").text("second");
                    $("#p2b1").css("z-index", "9");
                    $("#p2b2").css("z-index", "12");
                    keysAlrSet.push(keySet.which);
                    $("#p2b1Img").append("<p>" + String.fromCharCode(keySet.which) + "</p>");
                } else if (keyToBeSet === 6) {
                    p2b2 = keySet.which;
                    $(".setKeysRed").text("third");
                    $("#p2b2").css("z-index", "9");
                    $("#p2b3").css("z-index", "12");
                    keysAlrSet.push(keySet.which);
                    $("#p2b2Img").append("<p>" + String.fromCharCode(keySet.which) + "</p>");
                } else if (keyToBeSet === 7) {
                    p2b3 = keySet.which;
                    $(".setKeysRed").text("last");
                    $("#p2b3").css("z-index", "9");
                    $("#p2b4").css("z-index", "12");
                    keysAlrSet.push(keySet.which);
                    $("#p2b3Img").append("<p>" + String.fromCharCode(keySet.which) + "</p>");
                } else if (keyToBeSet === 8) {
                    p2b4 = keySet.which;
                    $("#p2b4").css("z-index", "9");
                    keysAlrSet.push(keySet.which);
                    $("#p2b4Img").append("<p>" + String.fromCharCode(keySet.which) + "</p>");
                    $("#setKeysSkip").show();
                }
                keyToBeSet += 1;
            } else {
                alert("Key has already been used!");
            }
        }
    });

    $("#setKeysSkip").click(function () {
        $("#setKeys").hide();
        $("#translucentBG").hide();
        $("#scoreboard").show();
        $("#number").show();
        $(".buttonImg").children("p").remove();
        firstLesson();
    });
    
    $(document).on("keypress", function (e) {
        if (e.which === p1b1) {
            press(1, 1);
            for (i = aliveP1.length - 1; i > 0; i -= 2) {
                if (aliveP1[i] === 1) {
                    p1Killed += 1;
                    killP1G(aliveP1[i - 1]);
                    aliveP1.splice(i - 1, 2);
                    wrongKey = false;
                    if (currentGhost > 10) {
                        p1Elapsed = new Date().getTime() - p1Time;
                        p1UpdateScore(Math.floor(10000000 / p1Elapsed));
                    }
                }
            }
            if (wrongKey && gameStart === 1) {
                if (currentGhost < 11) {
                    p1UpdateScore(-(pointsPerGhost));
                } else {
                    p1UpdateScore(-5000);
                }
            } else {
                wrongKey = true;
            }
        } else if (e.which === p1b2) {
            press(1, 2);
            for (i = aliveP1.length - 1; i > 0; i -= 2) {
                if (aliveP1[i] === 2) {
                    p1Killed += 1;
                    killP1G(aliveP1[i - 1]);
                    aliveP1.splice(i - 1, 2);
                    wrongKey = false;
                    if (currentGhost > 10) {
                        p1Elapsed = new Date().getTime() - p1Time;
                        p1UpdateScore(Math.floor(10000000 / p1Elapsed));
                    }
                }
            }
            if (wrongKey && gameStart === 1) {
                if (currentGhost < 11) {
                    p1UpdateScore(-(pointsPerGhost));
                } else {
                    p1UpdateScore(-5000);
                }
            } else {
                wrongKey = true;
            }
        } else if (e.which === p1b3) {
            press(1, 3);
            for (i = aliveP1.length - 1; i > 0; i -= 2) {
                if (aliveP1[i] === 3) {
                    p1Killed += 1;
                    killP1G(aliveP1[i - 1]);
                    aliveP1.splice(i - 1, 2);
                    wrongKey = false;
                    if (currentGhost > 10) {
                        p1Elapsed = new Date().getTime() - p1Time;
                        p1UpdateScore(Math.floor(10000000 / p1Elapsed));
                    }
                }
            }
            if (wrongKey && gameStart === 1) {
                if (currentGhost < 11) {
                    p1UpdateScore(-(pointsPerGhost));
                } else {
                    p1UpdateScore(-5000);
                }
            } else {
                wrongKey = true;
            }
        } else if (e.which === p1b4) {
            press(1, 4);
            for (i = aliveP1.length - 1; i > 0; i -= 2) {
                if (aliveP1[i] === 4) {
                    p1Killed += 1;
                    killP1G(aliveP1[i - 1]);
                    aliveP1.splice(i - 1, 2);
                    wrongKey = false;
                    if (currentGhost > 10) {
                        p1Elapsed = new Date().getTime() - p1Time;
                        p1UpdateScore(Math.floor(10000000 / p1Elapsed));
                    }
                }
            }
            if (wrongKey && gameStart === 1) {
                if (currentGhost < 11) {
                    p1UpdateScore(-(pointsPerGhost));
                } else {
                    p1UpdateScore(-5000);
                }
            } else {
                wrongKey = true;
            }
        } else if (e.which === p2b1) {
            press(2, 1);
            for (j = aliveP2.length - 1; j > 0; j -= 2) {
                if (aliveP2[j] === 1) {
                    p2Killed += 1;
                    killP2G(aliveP2[j - 1]);
                    aliveP2.splice(j - 1, 2);
                    wrongKey = false;
                    if (currentGhost > 10) {
                        p2Elapsed = new Date().getTime() - p2Time;
                        p2UpdateScore(Math.floor(10000000 / p2Elapsed));
                    }
                }
            }
            if (wrongKey && gameStart === 1) {
                if (currentGhost < 11) {
                    p2UpdateScore(-(pointsPerGhost));
                } else {
                    p2UpdateScore(-5000);
                }
            } else {
                wrongKey = true;
            }
        } else if (e.which === p2b2) {
            press(2, 2);
            for (j = aliveP2.length - 1; j > 0; j -= 2) {
                if (aliveP2[j] === 2) {
                    p2Killed += 1;
                    killP2G(aliveP2[j - 1]);
                    aliveP2.splice(j - 1, 2);
                    wrongKey = false;
                    if (currentGhost > 10) {
                        p2Elapsed = new Date().getTime() - p2Time;
                        p2UpdateScore(Math.floor(10000000 / p2Elapsed));
                    }
                }
            }
            if (wrongKey && gameStart === 1) {
                if (currentGhost < 11) {
                    p2UpdateScore(-(pointsPerGhost));
                } else {
                    p2UpdateScore(-5000);
                }
            } else {
                wrongKey = true;
            }
        } else if (e.which === p2b3) {
            press(2, 3);
            for (j = aliveP2.length - 1; j > 0; j -= 2) {
                if (aliveP2[j] === 3) {
                    p2Killed += 1;
                    killP2G(aliveP2[j - 1]);
                    aliveP2.splice(j - 1, 2);
                    wrongKey = false;
                    if (currentGhost > 10) {
                        p2Elapsed = new Date().getTime() - p2Time;
                        p2UpdateScore(Math.floor(10000000 / p2Elapsed));
                    }
                }
            }
            if (wrongKey && gameStart === 1) {
                if (currentGhost < 11) {
                    p2UpdateScore(-(pointsPerGhost));
                } else {
                    p2UpdateScore(-5000);
                }
            } else {
                wrongKey = true;
            }
        } else if (e.which === p2b4) {
            press(2, 4);
            for (j = aliveP2.length - 1; j > 0; j -= 2) {
                if (aliveP2[j] === 4) {
                    p2Killed += 1;
                    killP2G(aliveP2[j - 1]);
                    aliveP2.splice(j - 1, 2);
                    wrongKey = false;
                    if (currentGhost > 10) {
                        p2Elapsed = new Date().getTime() - p2Time;
                        p2UpdateScore(Math.floor(10000000 / p2Elapsed));
                    }
                }
            }
            if (wrongKey && gameStart === 1) {
                if (currentGhost < 11) {
                    p2UpdateScore(-(pointsPerGhost));
                } else {
                    p2UpdateScore(-5000);
                }
            } else {
                wrongKey = true;
            }
        }
    });
});