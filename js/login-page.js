const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
	document.getElementById("main").style.backgroundImage = "url(/My_Sites/images/section-bg.png)";
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
	document.getElementById("main").style.backgroundImage = "url(/My_Sites/images/banner-bg-3.png)";
});
