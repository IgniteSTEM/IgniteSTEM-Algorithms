const fs = require('fs');
let rawData = fs.readFileSync('./users.json'); 

// Read in the JSON data
const users = JSON.parse(rawData);

/*let rank = 0;
let sortedUsers = users.map((user) => {
	rank++;
	return {
		rank, 
		...user,
	}
});*/

const query = "Tim math coding"; // The search query

/**************** Code goes here ****************/
/*
 * Modify the array: sortedUsers
 *  (make sure to modify the rank attribute to match its order in the array)
 * Use the variable, query, as the search query
 *
 * Run this script using:
 *  $ node search.js
 */

 /************************************************/
 
 //Splitting query string into an array of strings
 var queryArray = query.split(" ");

//Adjusting the rank of each user by incrementing the rank each time one of the words
//in the queryArray variable appears in a user's data
 sortedUsers = users.map((user) => {
 	rank = 0;
 	for(i = 0; i < queryArray.length; i++)
 	{
 		if(JSON.stringify(user).toLowerCase().indexOf(queryArray[i].toLowerCase()) !== -1)
 		{
 			rank++;
 		}
 	}

 	return {
 		rank,
 		...user,
 	}
 });

//Sorting each user from greatest rank to least rank
sortedUsers.sort(function(a,b){
	return b.rank - a.rank;
});

//Reassigning the rank of each user to be the user's position (plus 1), within the array
for(i = 0; i < sortedUsers.length; i++)
{
	sortedUsers[i].rank = i + 1;
}




console.log(sortedUsers);



