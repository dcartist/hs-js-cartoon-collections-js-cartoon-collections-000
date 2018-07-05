/*Adding in comments now so you can understand my logic better
than attempting to speak especially since i'm already nervous.
Warning my logic isn't fully considered as normal, but it gets things done */
function dwarfRollCall(dwarves) {
  var count = 1 //the starting count for the dwarves
  var returnDwarves = "" //to hold the final string value in the dwarves from the array
  //this for loop for through the dwarves and inserts them into
  for (var i=0; i<dwarves.length; i++){
    returnDwarves += count + ". "+ dwarves[i]+" " //adds "1. DwarfName " to the returnDwarves variable
    count++//count goes up for the next drawf in the array
  }//end of for loop
  return returnDwarves //returning the final results to the test
}

function summonCaptainPlanet(planeteerCalls){
  for(var i=0; i<planeteerCalls.length; i++){ //goes through the array planeteerCalls
    planeteerCalls[i] = planeteerCalls[i].toUpperCase() + "!" //inserts ! at the end of each item in the array
  }
  return planeteerCalls //returns the array to the test
}

function longPlaneteerCalls(words) {
  var wordResults = false // standard default if words are less than 4 letters
  for(var i=0; i<words.length; i++){//goes through each item in the array
  if (words[i].length>4) {//if the words length is more than 4 letters
    wordResults = true // if word length is more than 4 letters
  }//end of if loop
}//end of for loops
 return wordResults //final results returned
}

function findTheCheese (foods) {
  /*was having issues with the test, due to software update errors
  and the test would freeze completely without giving me a full
  reason what was wrong on the test...
  So I went overboard but this does work
  don't judge me because I go overboard with cautions */
  var cheeseFinder = ["cheddar","gouda","camembert"]//array of the cheeses that was
  var noReturn = true //default setting if there is no cheese is found
  var theCheese = ""
  /* theCheese is an empty string to add in the cheese if it was found.
  I only added this because of the issues I was having
  with the testing environment */
  var noCheese = 'no cheese!' //string that will be returned if no cheese is found
  for(var i=0;i<foods.length;i++){ //The loop that runs through the food array to see if there is any cheese
    for (var x=0;x<cheeseFinder.length;x++){//Cheese Loop
      while (cheeseFinder[x] == foods[i]){ //if the cheese name is found in the foods array
        noReturn = false // this is setting the default to false so it will return theCheese
        //this is because of issues I was having with testing environment
        theCheese = cheeseFinder[x] //theCheese is now the name of the cheese that was found
        return theCheese // returns the cheese name to the test
      }//End while loops
    }//End of cheese loop
  }//end of food loop
  if(noReturn == true){ // if no cheese is found and this is still set to the default it will return No Cheese!
    return noCheese
  } else { //else if the default was set to false instead of true it will return the name of the cheese
    return theCheese
  }//end of if condition
}
