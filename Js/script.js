var userOne = {
    name: "Mahir",
    email:"mahirmahir8951@gmail.com",
    login(){
        console.log(this.email, "has logged in");
    },
    logout(){
        console.log(this.email,"has logged out");
    }
}

console.log(userOne.email);

userOne.login()

// updateing object
userOne.name = "Mahir Khan";

// adding property

userOne.age = 17;
