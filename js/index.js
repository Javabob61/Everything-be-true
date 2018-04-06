function truthCheck(collection, pre) {
  // Is everyone being true?
 
  for (var a in collection) {  // same as var a = 0; a < collection.length; a++   shorthand.
    if (
      collection[a][pre] === null ||
      collection[a][pre] === "" ||
      collection[a][pre] === undefined ||
      collection[a][pre] === 0 ||
      Number.isNaN(collection[a][pre])   // *** Note, was not able to mix [] with "." i.e. collection[a].pre , won't work.
    ) {
      console.log(collection[a][pre]); 
      return false;
    }
  }

  console.log("true");
  return true;
}

truthCheck(
  [{ user: "Tinky-Winky", sex: "male" },{ user: "Dipsy", sex: "male" },{ user: "Laa-Laa", sex: "female" },{ user: "Po", sex: "female" }],
  "sex");