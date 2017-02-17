/*jslint browser: true*/
/*global $, jQuery, alert*/

var page = 1;
var keySetStart = false;

$(document).ready(function () {
    'use strict';
    $("#arrowRight").click(function () {
        if (page === 1) {
            $("#howToPlayImg1").hide();
            $("#howToPlayImg2").show();
            page = 2;
            $("#arrowLeft").show();
        } else if (page === 2) {
            $("#howToPlayImg2").hide();
            $("#howToPlayImg3").show();
            page = 3;
            $("#arrowRight").hide();
        }
    });
    $("#arrowLeft").click(function () {
        if (page === 3) {
            $("#howToPlayImg3").hide();
            $("#howToPlayImg2").show();
            page = 2;
            $("#arrowRight").show();
        } else if (page === 2) {
            $("#howToPlayImg2").hide();
            $("#howToPlayImg1").show();
            page = 1;
            $("#arrowLeft").hide();
        }
    });
});