const fs = require('fs');
let rawData = fs.readFileSync('./users.json'); 

// Read in the JSON data
const users = JSON.parse(rawData);

let rank = 0;
let sortedUsers = users.map((user) => {
    rank++;
    return {
        rank, 
        ...user,
    }
});

const query = "teachers in new york"; // The search query

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

console.log(sortedUsers);
