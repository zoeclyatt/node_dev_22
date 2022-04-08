/*

function findMeaning() {
    return 42;
}

console.log(findMeaning());
*/

//passes argument at 2nd index of node command to mission
const mission = process.argv[2];

if (mission === 'learn') {
    console.log('some stuff');
} else {
    //console.log('some stuff ' + mission + ' some more stuff');
    //you can insert variables into strings with syntax below
    console.log(`some stuff ${mission} some more stuff`)
}
