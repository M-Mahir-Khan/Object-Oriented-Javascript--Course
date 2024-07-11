function User(name,age){
    this.age = age;
    this.name = name
    this.online = false
}

User.prototype.login = function(){
    this.online = true;
    console.log(`${this.name} has logged in`);
}

User.prototype.logout = function(){
    this.online = false;
    console.log(`${this.name} has logged out`);
}

var user1 = new User("Mahir", 16);
var user2 = new User("Shahid",16)

console.log(userOne);
user2.login()