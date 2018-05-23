/* Basic JavaScript: Record Collection
You are given a JSON object representing a part of your musical album collection. Each album has several properties and a unique id number as its key. Not all albums have complete information.

Write a function which takes an album's id (like 2548), a property prop (like "artist" or "tracks"), and a value (like "Addicted to Love") to modify the data in this collection.

If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.

Your function must always return the entire collection object.

There are several rules for handling incomplete data:

If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array before adding the new value to the album's corresponding property.

If prop is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array.

If value is empty (""), delete the given prop property from the album.

Hints
Use bracket notation when accessing object properties with variables.

Push is an array method you can read about on Mozilla Developer Network.

You may refer back to Manipulating Complex Objects Introducing JavaScript Object Notation (JSON) for a refresher.
*/

/// Setup
var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [ 
      "Let It Rock", 
      "You Give Love a Bad Name" 
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [ 
      "1999", 
      "Little Red Corvette" 
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": [ ]
  },
  "5439": {
    "album": "ABBA Gold"
  }
};

// // console.log(collection["2468"]["tracks"][0]);
//  collection["5439"]["artist"] = "ABBA" ;
//  collection["5439"]["tracks"] = [] ;
//  collection["5439"]["tracks"].push("new track");
//  collection["5439"]["tracks"].push("another new track");

//  console.log(collection["5439"]["tracks"]);



// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));
// Only change code below this line
function updateRecords(id, prop, value) {

    
 if (collection[id]) {
    
    if (collection[id].hasOwnProperty(prop) && value == ""){
        delete collection[id][prop];
    } 
    
    if(prop !== "tracks" && value != "") {
          collection[id][prop] = value;
    } else if (prop == "tracks" && !collection[id].hasOwnProperty("tracks") && value != "") {
        collection[id]["tracks"] = [];
        collection[id]["tracks"].push(value);
    } else if (prop == "tracks" && collection[id].hasOwnProperty("tracks") && value != "") {
        collection[id]["tracks"].push(value);
    }





//         // if(collection[id][prop] != "tracks" && value == "") {
//         //     delete collection[id][prop];
//         // }

//         // if(collection[id][prop] != "tracks" && value != "") {
//         //     collection[id][prop] = value;
//         // } else if (prop == "tracks" && !collection[id].hasOwnProperty("tracks") && value == "") {
//         //    collection[id][prop] = [];
//         // } else if (prop == "tracks"  && value != "") {
//             collection[id].pus = prop;
//             collection[id][prop].push(value);
           
//             // collection[id][prop] = myArr;

    } else {
        console.log("No such ID")
    }


    console.log(collection);
    return collection;
} 



// Alter values below to test your code
updateRecords(5439, "tracks", "sdfsdfsfd");


