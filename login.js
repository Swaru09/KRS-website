function printErr(elemId,hintmsg){
    document.getElementById(elemId).innerHTML=hintmsg;
};
var submit =document.getElementById("loginButton");

submit.onclick=function (){
    validateform()
}
function validateform(){
    
    var usernameErr=true;
    var passwordErr=true;
    console.log("jhddj")
    var form=document.getElementById("myform");
    var username=form.username.value;
    var password =form.password.value;
    if (username==""){
        printErr("usernameErr","Please enter your name ");
    }
    else if (username.length<5){
        printErr("usernameErr","Please enter a valid name ");
    }
    else{
        printErr("usernameErr","");
        usernameErr=false;
    }
    if (password==""){
        printErr("passwordErr","PLease enter a password");
    }
    else if (!password.includes("@")){
        printErr("passwordErr","Please enter a valid password ")
    }
    else {
        printErr("passwordErr","");
        passwordErr=false;
    }
    if ((usernameErr||passwordErr)==true){
        return false;
    }
    else{
        var preview="The details entered are as follows \n" +"Your name is "+username+"password entered is \n"+"password"+password;
    }
    alert(preview);

};