window.onload = RegisterLoad;

function Home_Function(){
    location.href = 'index.html';
}

function RegisterLoad(){
	var form = document.getElementById("myRegister");
	form.onsubmit = checkRegister;
}

function checkRegister(){
    window.location.href = "index.html";
    alert("OK");
}