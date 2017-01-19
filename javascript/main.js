/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
    $("#container1").hide();
    $("#container2").hide();
    $("#translucentBG").hide();
    $("#setKeys").hide();
    $("#howToPlay").hide();
    $("#play").click(function () {
        $("#menu").hide();
        $("#setKeys").show();
        $("#skip").hide();
        $("#translucentBG").show();
        $("#container1").show();
        $("#container2").show();
    });
});
