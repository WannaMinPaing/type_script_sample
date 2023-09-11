import {User} from "./interfaces/user";

let userOne : User = { 
    name : "test user" , 
    email : "test@gmail.com",
    isLogin : ()=>{
        // some code 
        return false
    },
    getAge(){
        return 20;
    },
    isDriving(){
        return "User one is driving"
    }
};

