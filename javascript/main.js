/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
    $("#number").hide();
    $("#container1").hide();
    $("#container2").hide();
    $("#translucentBG").hide();
    $("#setKeys").hide();
    $("#howToPlay").hide();
    $("#scoreboard").hide();
    $("#centerText").hide();
    $("#play").click(function () {
        $("#menu").hide();
        $("#howToPlay").show();
        $("#arrowLeft").hide();
        $("#translucentBG").show();
    });
});