window.onload = loginLoad;

function Home_Function(){
    location.href = 'Homepage.html';
}

function loginLoad(){
	var form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
}

function checkLogin(){
    window.location.href = "Homepage.html";
    alert("OK");
}