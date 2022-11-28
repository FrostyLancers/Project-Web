// var mysql = require('mysql');
// var express = require('express');
// var session = require('express-session');
// var bodyParser = require('body-parser');
// var path = require('path');


window.onload = loginLoad;

function Home_Function(){
    location.href = 'index.html';
}

function loginLoad(){
	var form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
}

function checkLogin(){
    window.location.href = "index.html";
    alert("OK");
}