
const drivers = [
  { name: "John", hometown: "New York" },
  { name: "Alice", hometown: "Los Angeles" },
  { name: "Bob", hometown: "Chicago" },
  { name: "Charlie", hometown: "San Francisco" },
];


function findMatching(driversArray, query) {
  return driversArray.filter(driver =>
    driver.toLowerCase() === query.toLowerCase()
  );
}


function fuzzyMatch(driversArray, query) {
  return driversArray.filter(driver =>
    driver.toLowerCase().startsWith(query.toLowerCase())
  );
}


function matchName(driverObjectsArray, query) {
  return driverObjectsArray.filter(driver =>
    driver.name.toLowerCase() === query.toLowerCase()
  );
}


console.log(findMatching(drivers, "John"));
console.log(fuzzyMatch(drivers, "A")); 
console.log(matchName(drivers, "John")); 
