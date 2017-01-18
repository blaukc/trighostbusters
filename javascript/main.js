/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
    $(".playerBox").hide();
    $("#play").click(function () {
        $("#menu").hide();
        $(".playerBox").show();
    });
});