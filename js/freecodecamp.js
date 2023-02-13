const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

//перший варіант не працює records[id].hasOwnPropery("tracks")

function updateRecords(records, id, prop, value) {
  if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (
    prop === "tracks" &&
    records[id].hasOwnPropery("tracks") === false
  ) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

//  другий варіант працює

// function updateRecords(records, id, prop, value) {
//   if (prop !== "tracks" && value !== "") {
//     records[id][prop] = value;
//   } else if (
//     prop === "tracks" &&
//     value !== "" &&
//     records[id].hasOwnProperty("tracks") === false
//   ) {
//     records[id][prop] = [value];
//   } else if (prop === "tracks" && value !== "") {
//     records[id][prop].push(value);
//   } else if (value === "") {
//     delete records[id][prop];
//   }
//   return records;
// }

// console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));
// console.log(
//tracks should have the string Take a Chance on Me as the last and only element.
// console.log(updateRecords(recordCollection, 2548, "artist", "")); //artist should not be set
// console.log(
//   updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")
// ); //tracks should have the string Addicted to Love as the last element.
console.log(updateRecords(recordCollection, 2468, "tracks", "Free")); //tracks should have the string 1999 as the first element.
//pdateRecords(recordCollection, 2468, "tracks", "Free"), //tracks tracks should not be set

// console.log(
//   updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
// );

// console.log(
//   updateRecords(recordCollection, 1245, "tracks", "Take a Chance on Me")
// );

// console.log(updateRecords(recordCollection, 2548, "tracks", ""));
