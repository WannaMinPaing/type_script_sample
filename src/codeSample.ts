
// let person : string;
// person = "wanna";
// // person = 12; //error

// let num : number;
// num = 10;
// // num = "wanna"; //error

// let bool : boolean;
// bool = true;
// bool = false;
// // bool = "true"; // error 

// let worker : string[];
// worker = ["woker one","worker two"];
// // worker = [1,"worker two",true]; // error

// let nums : number[];
// nums = [1,2,3];
// // num = ["one",true,3] // error

// let bools : boolean[];
// bools = [true,false,true];
// // bools = ["one",true,3] // error

// // union type
// let mixed : (boolean|string)[];
// mixed = [true,"wanna",false];
// // mixed = [true,"wanna",false,10]; // error

// // object
// let personOne : {
//     name : string,
//     age  : number,
//     passed: boolean
// }

// personOne = {
//     name : "Wanna",
//     age  : 23,
//     passed : true
// }

// // personOne = {
// //     name : "Wanna",
// //     age  : "23", // error
// //     passed : true
// // }


// //-----------------------------------------------------------  Any Type ---------------------------------------------------------//
// let any_person;  // or let any_person : any;

// any_person = "Wanna";
// any_person = 10;
// any_person = true;

// // Any Array
// let any_array : any[];
// any_array = ["Wanna",25,true];

// //object
// let any_person_object : {
//     name : any;
//     age: any;
//     passed : any;
// }

// //------------------------------------------------------------- Function -----------------------------------------------------------//

// const add = ( a :number,b : number, c?:number) : void => {
//     console.log(a+b);
// }

// add(2,4);
// // c is option. it ok C is include or not
// // add("2",4); //error
// // void  ==> mean no need to return value 

// const minus = ( a :number,b : number ) : number => {
//     return a-b;
// }
// // return data type must be number




// //------------------------------------------------------------- Tuple -----------------------------------------------------------//

// // let mixed_array : (string|number)[] = ["1","2",3,'4']; it can be string or number in any array item

// let myTuple : [number,string,boolean,string];
// myTuple = [1,"Wanna",true,"25"]; // tuple is defind array index zero must be number, one is string and so on 



// //------------------------------------------------------------- Interfaces -----------------------------------------------------------//
// // extend // optional property

// interface User {
//     name : string;
//     email : string;
//     phone_number ?: number;
//     isLogin : ()=> boolean; // return type must be boolean // isLogin():boolean ( can be use like this )
//     getAge(age : number):number; // age is optimital
// }

// // interface User {
// //     add_new_colunm_to_origin_interface : string // please use Same interface name
// // }

// let interface_user_one : User = { 
//     name : "test user" , 
//     email : "test@gmail.com",
//     isLogin : ()=>{
//         // some code 
//         return false
//     },
//     getAge(){
//         return 20;
//     }
// };

// let interface_user_two : User = { 
//     name : "test user" , 
//     email : "test@gmail.com",
//     phone_number : 1234,
//     isLogin : ()=>{
//         // some code 
//         return true
//     },
//     getAge(a : 2){
//         return a+20;
//     }
// };


// //------------------------------------------------------------- Interfaces Extend -----------------------------------------------------------//

// interface Admin extends User{}

// let interface_extend_admin_one : Admin = { 
//     name : "test user" , 
//     email : "test@gmail.com",
//     phone_number : 1234,
//     isLogin : ()=>{
//         // some code 
//         return true
//     },
//     getAge(a : 2){
//         return a+20;
//     }
// };


// // can add some attribute
// interface Admin_UPDATE extends User{
//     isAdmin : true
// }

// let interface_extend_admin_two : Admin_UPDATE = { 
//     name : "test user" , 
//     email : "test@gmail.com",
//     phone_number : 1234,
//     isLogin : ()=>{
//         // some code 
//         return true
//     },
//     getAge(a : 2){
//         return a+20;
//     },
//     isAdmin : true
// };

// interface Editor extends User{
//     deleteUser : true
// }

// interface Super_Admin extends User,Editor{}

// //---------------------------------------------------------------------- Read Only -------------------------------------------------------------------------------//

// interface User_Read_Only {
//     name : string;
//     readonly email : string;
// }

// let readonly_user_one : User_Read_Only = { 
//     name : "test user" , 
//     email : "test@gmail.com",
// };

// // readonly_user_one.email = "changemail@gmail.com";  Can't change like that because email is readonly


//---------------------------------------------------------------------- Enum -------------------------------------------------------------------------------//

// ---------------------------------------------------without Enum--------------------------//
// let drive = (direction : number) : void => {
//     if(direction == 0){
//         console.log("Driving to up.")
//     } else if(direction == 1){
//         console.log("Driving to down.")
//     } else if(direction == 2){
//         console.log("Driving to left.")
//     } else if(direction == 3){
//         console.log("Driving to right.")
//     } 
// }
// drive(0); // Driving to up

let drive = (direction : 0 | 1 | 2 | 3) : void => {
    if(direction == 0){
        console.log("Driving to up.")
    } else if(direction == 1){
        console.log("Driving to down.")
    } else if(direction == 2){
        console.log("Driving to left.")
    } else if(direction == 3){
        console.log("Driving to right.")
    } 
}
// drive(4); // error

// ---------------------------------------------------with Enum--------------------------//

enum Direction {
    Up,Down,Left,Right
}

let edrive = (direction : 0 | 1 | 2 | 3) : void => {
    if(direction == Direction.Up){
        console.log("Driving to up.")
    } else if(direction == Direction.Down){
        console.log("Driving to down.")
    } else if(direction == Direction.Left){
        console.log("Driving to left.")
    } else if(direction == Direction.Right){
        console.log("Driving to right.")
    } 
}

// edrive(0); // Driving to up // it work becasue array index
// edrive(Direction.Up); // Driving to up 

//--------------------------------------------------------- Type Aliase-----------------------------------------------------------//

type strOrNum = number | string;
type infoObj  = {name:string ,age : strOrNum , job:string}

// let getInfo = (name:string ,age : number | string ) : void =>{
let getInfo = (name:string ,age : strOrNum ) : void =>{
    console.log(`${name} is ${age} years olds`)
}

getInfo("Wanna","24");
getInfo("Wanna",24);

// let getFullInfo = (obj : {name:string ,age : number | string , job:string}) => {
// let getFullInfo = (obj : {name:string ,age : strOrNum , job:string}) => {
let getFullInfo = (obj : infoObj ) => {
    console.log(`${obj.name} is ${obj.age} years olds and working at ${obj.job} `)
}

getFullInfo({
    name : "Wanna",
    age  : 25,
    job  : "Developer"
})


let getFullInfomation = (obj : infoObj) => {
    console.log(`${obj.name} is ${obj.age} years olds and working at ${obj.job} `)
}

getFullInfomation({
    name : "Wanna",
    age  : 25,
    job  : "Developer"
})

//---------------------------------------------------Classes--------------------------------------------------------------------------//

class Details {
    name : string; // it same public name : string
    readonly age  : number;
    // job  : string;
    private job  : string;

    // constructor run first , when you use or call this class
    constructor(x:string, y : number , z : string)
    {
        this.name = x;
        this.age  = y;
        this.job  = z;
    }

    getDetails(){
        console.log(`${this.name} is ${this.age} years olds and working at ${this.job} `)
    }
}


const wannaDetail = new Details("Wanna",24,"Developer");
wannaDetail.getDetails(); // Wanna is 24 years olds and working at Developer

const kyawkyawDetail = new Details("kyaw kyaw",21,"Designer");
kyawkyawDetail.getDetails(); // kyaw kyaw is 21 years olds and working at Designer

// Can add simple object
let detailArray : object[] = [];
detailArray.push({
    name:"test"
});

console.log(detailArray); // [{name:"test"}]

// Same but Error

const testDetail = {
    name : "test",
    age : 22,
    job : "test"
};

let testDetailArray : Details[] = [];
// testDetailArray.push(testDetailArray) // error occur
testDetailArray.push(wannaDetail)
testDetailArray.push(kyawkyawDetail)

// wannaDetail.job = "hack"; Can't change like that because job use private