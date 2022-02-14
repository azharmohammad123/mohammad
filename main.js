// arrays 
var student = ["Azhar", "Shoaib", "Ehsan"];


console.log(student);

// object
var Azhar = {
    fullName : "Mohammad Azhar",
    mobileNo : 6387831720,
    RollNo :20,
    email: "mohammadazhar323@gmail.com",
    address:{
        city:"kurthi jafar pur",
        pincode:275305,
        distic:"mau",
        state:"up",
        contry:"india",
    }
}
console.log(Azhar);

var age = 18;

if (age <= 25 && age >= 18){
    console.log("you can fill the form");
}
else {
    console.log("you cannot fill the form");
}

// switch variable

var no = 8;
 var dayinweek = null;
switch (true){
    case (no==1):console.log("monday");
    break;
    case (no==2):console.log("tuseday");
    break;
    case (no==3):console.log("wednesday");
    break;
    case (no==4):console.log("thursday");
    break;
    case (no==5):console.log("friday");
    break;
    case (no==6):console.log("starday");
    break;
    case (no==7):console.log("sunday");
    break;
    case (no>8): console.log("clander dekho bhai"); 
    break;
    default: console.log("clander dekho bhai");
    break;
}



var no = 3;
var nameofweek =null;
switch(no){

    case(1):nameofweek="monday";
    document.write(nameofweek);
    break;
    case(2):nameofweek="tuseday";
    document.write(nameofweek);
    break;
    case(3):nameofweek="wesnesday";
    document.write(nameofweek);
    break;
    case(4):nameofweek="thursday";
    document.write(nameofweek);
    break;
    case(5):nameofweek="friday";
    document.write(nameofweek);
    break;
    case(6):nameofweek="starday";
    document.write(nameofweek);
    break;
    case(7):nameofweek="sunday holiday";
    document.write(nameofweek);
    break;
    default:nameofweek="bhai calender dekho";
    document.write(nameofweek);
    break;

}
var x =null ;
function sum (urdu,hindi,english,math,since){
    x=urdu+hindi+english+math+since;
    return x;
}
console.log(sum(95,65,70,63,87));


var f ;
function percentage(z){
    f=x/z*100;
    return f ;
}
console.log(percentage(600));

//array of object

var student=[
    {
        id : 1,
        fullName :"Mohammad Azhar",
        mobileNo :6387831720,
        RollNo :20,
        email :"mohammadazhar323@gmail.com",
        address :{
            city:"pura maroof",
            pincode:275305,
            distic:"mau",
            state:"UP",
        }
    },
    

    {
        id:2,
        fullName : "Shoaib Akhtar",
        mobileNo : 8922005201,
        RollNo :15,
        email: "shoaibakhtar323@gmail.com",
        address:{
            city:"kurthi jafar pur",
            pincode:275305,
            distic:"mau",
            state:"up",
            contry:"india",
        }
    }
];
console.log(student[1].fullName);

//for loop






