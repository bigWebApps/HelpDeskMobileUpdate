/*jshint -W004, -W041, -W103, eqeqeq: false, undef: true, latedef: true, eqnull: true, multistr: true*/
/*global jQuery, $, location, window, localStorage, navigator, document, cordova, setTimeout, console, alert, confirm, btoa, Image, history, setInterval, logout, backFunction, cleanQuerystring, getParameterByName, WebPullToRefresh, googleConversion, List, default_redirect, plugins, isPhonegap, GooglelogOut, isExtension */
var isSD = false;

//Root Names
var Site = 'bigwebapps.com/';
var MobileSite = 'http://m.' + Site;
var AppSite = 'https://app.' + Site;
var ApiSite = 'http://api.' + Site;

document.title = (localStorage.badge && localStorage.badge !== "0"  ? "("+localStorage.badge+") ": "") + (!isSD ? "HelpDesk" : "Sherpadesk");

var year="2015";
var appVersion = "36";

//global helper functions

function ok (value) { //alert(value); 
}
function fail (error) {alert(error);}

function initOrgPreferences(value) {}

function clearStorage(keepOrg)
{
    if (isPhonegap){
        initOrgPreferences("");
    }
    var userName = localStorage.userName || "";
    var appVersion = localStorage.appVersion || "";
    var ticket = localStorage.loadTicketNumber || "";
    var ticket = localStorage.loadTicketNumber || "";
    var ios_action = localStorage.ios_action || "";
    var loadOrgKey = localStorage.loadOrgKey || "";
    var loadPhonegap = localStorage.isPhonegap || "";
    var userKey = localStorage.userKey || "";
    if (!window.dontClearCache) localStorage.clear();
    localStorage.userKey = "";
    localStorage.userOrgKey = "";
    localStorage.userInstanceKey = "";
    //localStorage.removeItem('userOrgKey');
    //localStorage.removeItem('userOrg');
    //localStorage.removeItem('userInstanceKey');
    //localStorage.removeItem('userKey');
    localStorage.setItem("userName", userName);
    localStorage.appVersion = appVersion;
    localStorage.loadTicketNumber = ticket;
    localStorage.ios_action = ios_action;
    localStorage.loadOrgKey = loadOrgKey; 
    localStorage.isPhonegap = loadPhonegap;
    if (keepOrg)
        localStorage.userKey = userKey;
    //clear also chrome ext if needed
    if (isExtension)
        window.top.postMessage("logout", "*");
}

function logout(isRedirect, mess) {
    clearStorage();
    if (localStorage.is_google) {
        localStorage.removeItem('userName');
        localStorage.removeItem('is_google');
        GooglelogOut();
    }
    else if (isRedirect || true)
        window.location = "login.html".addUrlParam("f",mess);
}

function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.href);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

function cleanQuerystring() {
    try {window.history.replaceState( {} , '', location.origin + location.pathname );}
    catch (err){}
}
