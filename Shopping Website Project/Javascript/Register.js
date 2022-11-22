window.onload = RegisterLoad;

function Home_Function(){
    location.href = 'Homepage.html';
}

function RegisterLoad(){
	var form = document.getElementById("myRegister");
	form.onsubmit = checkRegister;
}

function checkRegister(){
    window.location.href = "Homepage.html";
    alert("OK");
}