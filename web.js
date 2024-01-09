function validateform(){
    let x = document.forms[myForm][username].value;

if(x == " "){
    alert("Fill in username or password!");

}else{
    return false;
}
}


