
// Search
const search = document.getElementById('mySearchId');

function searchValidate() {
		
	var acumErrores = 0;
	search.classList.remove('is-invalid');

	var searchfield = document.getElementById('searchfield');

	if (searchfield.value == "" || searchfield.value.length <3 ){
		searchfield.classList.add('is-invalid');
		document.getElementById('errorSearch').textContent = "Please insert at least 3 characters";
		acumErrores ++;
	}
	
	if (acumErrores > 0){
			return false;
	}else{
			return true;
	}
	

}

if(search){
	search.addEventListener('blur', (event) => {
		console.log(event);
		if(event.target.value!='') event.target.classList.remove('is-invalid');
		searchValidate();
	}, true);
}

// Login 

const login = document.getElementById('loginId');

function loginValidate() {

	var acumErrores = 0;
		
	login.classList.remove('is-invalid');

	var loginEmail = document.getElementById('loginEmail');
	var loginPassword = document.forms["myLogin"]["loginPassword"];
	
	
	if(loginEmail.value == "") {
			loginEmail.classList.add('is-invalid');
			document.getElementById('errorEmail').textContent = "Required field";
			acumErrores ++;
	}else if(!validar_email(loginEmail.value)){
			loginEmail.classList.add('is-invalid');
			document.getElementById('errorEmail').textContent = "Please insert a valid email";
			acumErrores ++;
	}
	
	if(loginPassword.value == "") {
			loginPassword.classList.add('is-invalid');
			document.getElementById('errorPassword').textContent = "Required field";
			acumErrores ++;
	}
		
		
	if (acumErrores > 0){
			return false;
	}else{
			return true;
	}
}

if(login){
	login.addEventListener('blur', (event) => {
			console.log(event);
			if(event.target.value!='') event.target.classList.remove('is-invalid');
			loginValidate();
	}, true);
}
	
function validar_email(email) {
		var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regex.test(email) ? true : false;
}


//Registration 

const form = document.getElementById('myFormId');

function registerValidate() {
	var acumErrores = 0;
		
	form.classList.remove('is-invalid');

	var inputEmail = document.getElementById('inputEmail');
		
	var inputPassword = document.forms["myForm"]["inputPassword"];
	var inputAddress = document.forms["myForm"]["inputAddress"];
	var inputProvince = document.forms["myForm"]["inputProvince"];
	var inputCity = document.forms["myForm"]["inputCity"];
	var inputZip = document.forms["myForm"]["inputZip"];
	var gridCheck = document.forms["myForm"]["gridCheck"];
	
	if(inputEmail.value == "") {
			inputEmail.classList.add('is-invalid');
			document.getElementById('errorEmail').textContent = "Required field";
			acumErrores ++;
	}else if(!validar_email(inputEmail.value)){
			inputEmail.classList.add('is-invalid');
			document.getElementById('errorEmail').textContent = "Please insert a valid email";
			acumErrores ++;
	}
	
	if(inputPassword.value == "") {
			inputPassword.classList.add('is-invalid');
			document.getElementById('errorPassword').textContent = "Required field";
			acumErrores ++;
	}
		
	if(inputAddress.value == "") {
			inputAddress.classList.add('is-invalid');
			document.getElementById('errorAddress').textContent = "Please insert your address";
			acumErrores ++;
	}
	
	if(inputProvince.value == "") {
			inputProvince.classList.add('is-invalid');
			document.getElementById('errorProvince').textContent = "Please insert your province";
			acumErrores ++;
	}
		
	if(inputCity.value == "") {
			inputCity.classList.add('is-invalid');
			document.getElementById('errorCity').textContent = "Please insert your city";
			acumErrores ++;
	}
		
	if(inputZip.value == "" || inputZip.length!=5) {
			inputZip.classList.add('is-invalid');
			document.getElementById('errorZip').textContent = "Please insert a valid Zip Code";
			acumErrores ++;
	}
		
	if(!gridCheck.checked) {
			gridCheck.classList.add('is-invalid');
			document.getElementById('errorCheck').textContent = "Please accept our privacy policy";
			acumErrores ++;
	}
	
	if (acumErrores > 0){
			return false;
	}else{
			return true;
	}
}


if(form){
	form.addEventListener('blur', (event) => {
		console.log(event);
		if(event.target.value!='') event.target.classList.remove('is-invalid');
		registerValidate();
	}, true);
}