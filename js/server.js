/*jshint -W004, -W041, -W103, eqeqeq: false, noempty: false, undef: false, latedef: false, eqnull: true, multistr: true*/
/*global jQuery, $ */

function default_redirect (is_tech)
{
    window.location = isTech ? "dashboard.html" : "ticket_list.html";
}

function googleTag() {}

function googleConversion() {}

var dontClearCache = false;
