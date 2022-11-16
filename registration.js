function printErr(elemId,hintmsg){
    document.getElementById(elemId).innerHTML=hintmsg;
    document.getElementById(elemId).style.color="red";
    document.getElementById(elemId).style.marginLeft="70px";
    document.getElementById(elemId).style.fontSize="large";
};
var submit =document.getElementById("submit");
submit.onclick=function(){
    validateform()
};
function validateform(){
    console.log("jdbejdb");
    var nameErr=true;
    var phoneErr=true;
    var emailErr=true;
    var genderErr=true;
    var countryErr=true;
    var qualificationErr=true;
    var courseErr=true;
    var checkboxErr=true;
    var commentsErr=true;
    var form=document.getElementById("myform");
    var name=form.name.value;
    var phone=form.phone.value;
    var email=form.email.value;
    var gender=form.gender.value;
    var country=form.country.value;
    var qualification=form.qualification.value;
    var course=form.course.value;
    var conditions=form.conditions.value;
    var comments=form.comments.value;
    if (name==""){
        printErr("nameErr","enter a name");
    }
    else if (name.length<5){
        printErr("nameErr","Enter a valid name");
    }
    else {
        printErr("nameErr","");
        nameErr=true;
    }
    if (phone==""){
        printErr("phoneErr","Enter a phone number");
    }
    else if(phone.length<=10|| phone.length>10){
        printErr("phoneErr","Enter a valid phone number");
    }
    else{
        printErr("phoneErr","");
        phoneErr=true;
    }
    if (email==""){
        printErr("emailErr","Enter an email");
    }
    else if(!email.includes("@")){
        printErr("emailErr","Enter a valid email id");
    }
    else{
        printErr("emailErr","");
        emailErr=true;
    }
    if (!gender.checked){
        printErr("genderErr","item not selected");
    }
    else{
        printErr("genderErr","");
        genderErr=true;    
    }
    if (!qualification.checked){
        printErr("qualificationErr","item not selected");
    }
    else{
        printErr("qualificationErr","");
        qualificationErr=true;
    }
    if (!course.checked){
        printErr("courseErr","item not selected");
    }
    else{
        printErr("courseErr","");
        courseErr=true;
    }
    if (!conditions.checked){
        printErr("checkboxErr","item not selected");
    }
    else{
        printErr("checkboxErr","");
        checkboxErr=true;
    }
    if (comments==""){
        printErr("commentsErr","Please enter a comment");
    }
    else{
        printErr("commentsErr","");
        commentsErr=true;
    }
    if ((nameErr||genderErr||phoneErr||commentsErr||countryErr||emailErr||qualificationErr||courseErr)==true){
        return false;
    }
    else{
        var preview="The details entered are as follows \n" +"Your name is "+name+"email entered is \n"+"email"+email+"phone number\n"+phone+"gender is\n "+gender+"country\n"+country+"qualification is \n"+qualification+"course is \n"+course+"condition is \n"+conditions+"the comment given is \n"+comments;
    }
    alert(preview);

};
