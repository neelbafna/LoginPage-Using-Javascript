var objPeople = [
	{ 
		username: "LTI",
		password: "123"
	},
	{
		username: "LTI1",
		password: "123"
	},
	{ 
		username: "LTI2",
		password: "123"
	}

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value
	var welcome = "Welcome Back, "+username

	for(var i = 0; i < objPeople.length; i++) {
		if(username == objPeople[i].username && password == objPeople[i].password) {
			document.getElementById("incorrect").innerHTML = "";
			sessionStorage.setItem("username", username);
			window.location = "welcome.html";
			return
		}
		else
		{
			document.getElementById("incorrect").innerHTML = "Incorrect Username/Password. Try Again!";
		}
		
	}
}
