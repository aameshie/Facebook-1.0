var database = [
	{
		username: "alvin",
		password: "moonkiller"	
	}
];

var newsfeed = [
	{
		username: "Elmo",
		timeline: "Look at my new boat I just got"
	},
	{
		username: "Sharon",
		timeline: "OMG, guess what guys I am pregnant"
	},
	{
		username: "Jake",
		timeline: "Update: I just won my dirtbike competition"
	}
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user,pass) {
	if (user === database[0].username && 
		pass === database[0].password) {
		console.log(newsfeed);
	} else {
		alert("Sorry wrong username or password");
	}
}

signIn(userNamePrompt,passwordPrompt);