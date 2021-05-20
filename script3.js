/*  JavaScript 6th Edition
    Chapter 10 Individual Case 
    Author: Rand Rahim
    Date:   Nov 5, 2019
    Filename: script3.js
*/

"use strict";

// global variables
var waitForUser;

function setUpPage() {
   geoTest();
   var buttons = document.querySelectorAll("#cities div"); 
   for (var i = 0; i < buttons.length; i++ ) {
      buttons[i].addEventListener("click", createMap, false);
   }
}

function geoTest() {
   waitForUser = setTimeout(fail, 10000);
   if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(createMap, fail, {timeout: 10000});
   } else {
      fail();
   }
}

function createMap(position) {
  var Lat, Lng, Alt;
  clearTimeout(waitForUser);
  if (position.coords) {
    Lat = position.coords.latitude;
    Lng = position.coords.longitude;
    Alt = position.coords.altitude;
  } else {
  var city = this.innerHTML;
  if (city === "Dubai") {
    Lat = "25.212865"; 
    Lng = "55.258336";
    Alt = "3";
  } else if (city === "Paris") {
    Lat = "48.8564826";
    Lng = "2.3524135";
    Alt = "39";
  } else if (city === "Rome") {
    Lat = "41.894802";
    Lng = "12.4853384";
    Alt = "20";
  } 
    document.getElementById("caption").innerHTML = city;
    document.getElementById("latitude").innerHTML = Lat;
    document.getElementById("longitude").innerHTML = Lng;
    document.getElementById("altitude").innerHTML = Alt;
  }
  var mapOptions = {
    center: new google.maps.LatLng(Lat, Lng, Alt),
    zoom: 11
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

function fail() {
   document.getElementById("map").innerHTML = "Unable to access your current location.";
}

// run setUpPage() function when page finishes loading
if (window.addEventListener) {
   window.addEventListener("load", setUpPage, false);
}