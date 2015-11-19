window.onload=function() {

  // get tab container
    var containers = document.querySelectorAll(".tabContainer");
    for (var i = 0; i < containers.length; i++) {
        initContainer(containers[i]);
    }
};

function initContainer(container)
{
    // set current tab
    var navitem = container.querySelector(".tabHeader");
    //store which tab we are on
    var ident = navitem.id.split("_")[1];
    navitem.parentNode.setAttribute("data-current",ident);
    //set current tab with class of activetabheader
    navitem.setAttribute("class","tabHeader tabActiveHeader");

    //hide two tab contents we don't need
    var pages = container.querySelectorAll(".tabpage");
    for (var i = 1; i < pages.length; i++) {
        pages[i].style.display="none";
    }

    //this adds click event to tabs
    var tabs = container.querySelectorAll(".tabHeader");
    for (var i = 0; i < tabs.length; i++) {
        var func = function() {displayPage(container);};
        tabs[i].addEventListener('touchstart', func, false);
        tabs[i].addEventListener('click', func, false);
    }
}

// on click of one of tabs
function displayPage(container, tab) {
  var current = tab || this.parentNode.getAttribute("data-current");
  //remove class of activetabheader and hide old contents
    var navitems = container.querySelectorAll(".tabHeader");
    for (var i = 0; i < navitems.length; i++) {
        navitems[i].setAttribute("class","tabHeader");
  }
  container.getElementById("tabpage_" + current).style.display="none";

  if(tab) this = container.getElementById("tab_" + tab);
  var ident = this.id.split("_")[1];
  //add class of activetabheader to new active tab and show contents
  this.setAttribute("class","tabActiveHeader");
  document.getElementById("tabpage_" + ident).style.display="block";
  this.parentNode.setAttribute("data-current",ident);
}