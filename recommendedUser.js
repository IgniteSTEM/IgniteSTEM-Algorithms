const fs = require('fs');
let rawData = fs.readFileSync('./users.json'); 

// Read in the JSON data
var users = JSON.parse(rawData);

//Load one person from user array, randomly, to test algorithm
const userInput = users[Math.floor(Math.random() * users.length)];

//Remove the userInput element from the JSON data
function remove(array, element) {
	const index = array.indexOf(element);

	if (index !== -1) {
		array.splice(index, 1);
	}
}

remove(users, userInput);


//Assigning relevance scores to users 
sortedUsers = users.map((user) => {

	var score = 0;
	
	for(var j = 0; j < JSON.stringify(user.interests).split(",").length; j++)
	{
		for(var i = 0; i < userInput.interests.length; i++){
			if(JSON.stringify(user.interests).split(",")[j].toLowerCase().indexOf(userInput.interests[i].toLowerCase()) !== -1)
			{
				score += 4;
			}
		}
	}

	for(var j = 0; j < JSON.stringify(user.subjects).split(",").length; j++)
	{
		for(var i = 0; i < userInput.subjects.length; i++){
			if(JSON.stringify(user.subjects).split(",")[j].toLowerCase().indexOf(userInput.subjects[i].toLowerCase()) !== -1)
			{
				score += 2;
			}
		}
	}


	for(var j = 0; j < JSON.stringify(user.subjects).split(",").length; j++)
	{
		for(var i = 0; i < userInput.interests.length; i++){
			if(JSON.stringify(user.subjects).split(",")[j].toLowerCase().indexOf(userInput.interests[i].toLowerCase()) !== -1)
			{
				score += 1;
			}
		}
	}

	for(var j = 0; j < JSON.stringify(user.interests).split(",").length; j++)
	{
		for(var i = 0; i < userInput.subjects.length; i++){
			if(JSON.stringify(user.interests).split(",")[j].toLowerCase().indexOf(userInput.subjects[i].toLowerCase()) !== -1)
			{
				score += 1;
			}
		}
	}

		return {
			score,
			...user,
		}

});





//Sort users from greatest relevance score to least relevance score
sortedUsers.sort(function(a,b){
	return b.score - a.score;
});


//Removing users with a relevance score of 0
var relevantUsers = [];
for(var i = 0; i < sortedUsers.length; i++)
{
	if(sortedUsers[i].score > 0)
	{
		relevantUsers.push(sortedUsers[i]);
	}
}

//Truncating relevant users to the top 10 most relevant users
var relevantUsersTruncated = [];
for(var i = 0; i < 10; i++)
{
	if(typeof relevantUsers[i] == "undefined")
	{
		i = 10;
	} else
	{
		relevantUsersTruncated.push(relevantUsers[i]);
	}
}

//Printing output
console.log(relevantUsersTruncated);
console.log(userInput);


















