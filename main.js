let User=new Object();

User.name="yousef";
User.email="yohejazi@gmail.com";
User.id;
User.Available=false;
User.checkAforW=function(){
    return this.Available;
}
User.Address={address:"azizyah",city1:"riyadh",city2:"duwadmi"};
User.skills={skills1:"pixel art",skills2:"game dev",skills3:"draw"};

console.log(User)


console.log(User.name)

User.id=100999999;
console.log(User.id)
delete User.email;
console.log(User);

User.Available=false;

console.log(User.checkAforW);

console.log(User.Address)


console.log(User.Address.city2)
console.log(User.skills.skills2)
console.log(User.skills[2]);
let allskills=  User.skills.join(",")
console.log(allskills);
