let difficulty = ["Beginner",
"Normal",
"Grandmaster,"];



let names = [
  "Kareem Abdul-Jabbar",
  "Kobe Bryant",
  "Tim Duncan",
  "Kevin Garnett",
  "Shaquille O'Neal",
  "Michael Jordan",
  "Karl Malone",
  "Bob Cousy",
  "John Havlicek",
  "Wilt Chamberlain",
  "Isiah Thomas",
  "Oscar Robertson",
  "Magic Johnson",
  "Dolph Schayes",
  "Larry Bird",
  "Elvin Hayes",
  "Moses Malone",
  "Bill Russell",
  "Hakeem Olajuwon",
  "Allen Iverson",
  "Elgin Baylor",
  "Charles Barkley",
  "Julius Erving",
  "Bob Pettit",
  "Chris Bosh",
  "Patrick Ewing",
  "John Stockton",
  "Hal Greer",
  "Paul Arizin",
  "Jason Kidd",
  "Clyde Drexler",
  "Paul Pierce",
  "Ray Allen",
  "David Robinson",
  "Lenny Wilkens",
  "Gary Payton",
  "George Gervin",
  "Dominique Wilkins",
  "Robert Parish",
  "Yao Ming",
  "Bill Sharman",
  "Steve Nash",
  "Dave DeBusschere",
  "Rick Barry",
  "Alex English",
  "Dave Cowens",
  "Bob Lanier",
  "Dikembe Mutombo",
  "Jo Jo White",
  "Slater Martin",
  "Dick McGuire",
  "Dave Bing",
  "Walt Frazier",
  "Harry Gallatin",
  "Chet Walker",
  "Grant Hill",
  "Jerry Lucas",
  "Ed Macauley",
  "Tracy McGrady",
  "Scottie Pippen",
  "Willis Reed",
  "James Worthy",
  "Kevin McHale",
  "Alonzo Mourning",
  "Jack Sikma",
  "Nate Thurmond",
  "Tiny Archibald",
  "Joe Dumars",
  "Richie Guerin",
  "Adrian Dantley",
  "Mitch Richmond",
  "George Yardley",
  "Jack Twyman",
  "Tom Heinsohn",
  "Bailey Howell",
  "Vern Mikkelsen",
  "Neil Johnston",
  "Artis Gilmore",
  "Bobby Wanzer",
  "Gail Goodrich",
  "Andy Phillip",
  "Sidney Moncrief",
  "Cliff Hagan",
  "Dennis Johnson",
  "Sam Jones",
  "Paul Westphal",
  "Carl Braun",
  "Pete Maravich",
  "Tom Gola",
  "Gus Johnson",
  "Chris Mullin",
  "Reggie Miller",
  "Wes Unseld",
  "Wayne Embry",
  "Bob McAdoo",
  "Chris Webber",
  "Guy Rodgers",
  "Maurice Cheeks",
  "Bob Davies",
  "Earl Monroe",
  "Jim Pollard",
  "David Thompson",
  "Billy Cunningham",
  "Bob Dandridge",
  "Bernard King",
  "Connie Hawkins",
  "Spencer Haywood",
  "Bobby Jones",
  "Clyde Lovellette",
  "Arnie Risen",
  "Ben Wallace",
  "George Mikan",
  "Walt Bellamy",
  "Ralph Sampson",
  "Charlie Scott",
  "Jamaal Wilkes",
  "Maurice Stokes",
  "George McGinnis",
  "Joe Fulks",
  "Dennis Rodman",
  "Zelmo Beaty",
  "Bill Walton",
  "Calvin Murphy",
  "Bill Bradley",
  "Don Barksdale",
  "Nat Clifton",
  "Dan Issel",
  "Vlade Divac",

];


//Sort names in ascending order
let sortedNames = names.sort();

//reference
let input = document.getElementById("input");



//Execute function on keyup
input.addEventListener("keyup", (e) => {
  //loop through above array
  //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
  removeElements();
  for (let i of sortedNames) {
    //convert input to lowercase and compare with each string
    if (
      i.toLowerCase().startsWith(input.value.toLowerCase()) &&
      input.value != ""
    ) {
      //create li element
      let listItem = document.createElement("li");
      //One common class name
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "displayNames('" + i + "')");
      //Display matched part in bold
      let word = "<b>" + i.substr(0, input.value.length) + "</b>";
      word += i.substr(input.value.length);
      //display the value in array
      listItem.innerHTML = word;
      document.querySelector(".list").appendChild(listItem);
    }
  }
});


function displayNames(value) {
  input.value = value;
  removeElements();
}
function removeElements() {
  //clear all the item
  let items = document.querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
  });
}