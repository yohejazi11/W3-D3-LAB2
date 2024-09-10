let User = new Object();

User.name = "yousef";
User.email = "yohejazi@gmail.com";
User.id;
User.Available = false;
User.checkAforW = function () {
    return this.Available;
}
User.Address = { address: "azizyah", city1: "riyadh", city2: "duwadmi" };
User.skills = { skills1: "pixel art", skills2: "game dev", skills3: "draw" };

console.log(User)


console.log(User.name)

User.id = 100999999;
console.log(User.id)
delete User.email;
console.log(User);

User.Available = false;

console.log(User.checkAforW);

console.log(User.Address)


console.log(User.Address.city2)
console.log(User.skills.skills2)
console.log(User.skills[2]);
//let allskills = User.skills.join(",")
console.log(User.allskills);




/* --------------------------- lab 2 --------------------------- */
console.log("--------------------------- lab 2 ---------------------------")
characters = [
    {
        name: "Luke Skywalker",
        height: 177,
        gender: "male",
        mass: 77,
        eye_color: "brown",
    },
    {
        name: "Leia Organa",
        height: 160,
        gender: "female",
        mass: 56,
        eye_color: "blue",
    },
    {
        name: "Han Solo",
        height: 180,
        gender: "male",
        mass: 80,
        eye_color: "brown",
    },
    {
        name: "Chewie",
        height: 222,
        gender: "male",
        mass: 190,
        eye_color: "black",
    },
    {
        name: "kevien",
        height: 106,
        gender: "male",
        mass: 32.2,
        eye_color: "red",
    },
];

let hasBlueEyes= characters.find(person=> person.eye_color=="blue");

console.log("has Blue Eyes");

console.log(hasBlueEyes);
console.log("2-Get first gender that is his mass is over 50")

let firstMassO50=characters.find(person=> person.mass>50)
console.log(firstMassO50.gender);

let shortPesrons= characters.filter(person=> person.height<200);
console.log("short Pesrons")

console.log(shortPesrons)
console.log("-Get array of all male only")

let malePesrons= characters.filter(person=> person.gender=="male");
console.log("all male")

console.log(malePesrons)
console.log("-Get array of all names only")

let Names=[];
characters.forEach(element => {
    Names.push(element.name);
});
console.log(Names)


let heights=[];
characters.forEach(element => {
    heights.push(element.height);
});

console.log("-Get array of all heights only")
console.log(heights);

let sortArray=[];
characters.forEach(element => {
    sortArray.push(element.mass);
});
console.log("7-Sort by mass (low to high)");

console.log(sortArray.sort(function(a, b){return a - b}));
console.log("8-Sort by height (high to low)");

console.log(sortArray.sort(function(a, b){return b - a}));

console.log("Does every character have mass more than 40?");

console.log(sortArray.map(x=> {
    if(x>40)
    {
        return true;
    }
    else{
        return false
    }
}

))

console.log("taller then 200");

console.log(heights.map(x=> {
    if(x>200)
    {
        return true;
    }
    else{
        return false
    }
}

));

console.log("blue Eyes");

let blueEyes=characters.find(person=> person.eye_color=="blue")
console.log(blueEyes);
console.log("taller then 210");
let tallerthen210=characters.find(person=> person.height>210)
console.log(tallerthen210);