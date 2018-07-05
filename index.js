function dwarfRollCall(dwarves) {
  var count = 1
  var returnDwarves = ""
  for (var i=0; i<dwarves.length; i++){
    returnDwarves += count + ". "+ dwarves[i]+" "
    count++
  }
  // returnDwarves = returnDwarves.slice(0, -1);
  return returnDwarves
}

function summonCaptainPlanet(planeteerCalls){
  for(var i=0; i<planeteerCalls.length; i++){
    planeteerCalls[i] = planeteerCalls[i].toUpperCase() + "!"
  }
  return planeteerCalls
}

function longPlaneteerCalls(words) {
  var wordResults = false
  for(var i=0; i<words.length; i++){
  if (words[i].length>4) {
    wordResults = true
  }//end of if loop
}//end of for loops
 return wordResults
}

function findTheCheese (foods) {
  var cheeseFinder = ["cheddar","gouda","camembert"]
  var noReturn = true
  var theCheese = ""
  var noCheese = 'no cheese!'
  for(var i=0;i<foods.length;i++){ //Food Loop

    for (var x=0;x<cheeseFinder.length;x++){//Cheese Loop
      while (cheeseFinder[x] == foods[i]){
        noReturn = false
        theCheese = cheeseFinder[x]
        return theCheese
      }//End while loops
    }//End of cheese loop
  }//end of food loop
  if(noReturn == true){
    return noCheese
  } else {
    return theCheese
  }
}
