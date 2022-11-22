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