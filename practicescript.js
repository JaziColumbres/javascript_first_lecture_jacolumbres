
/*function name is btnClick*/
function btnClick(){
    var inputedName/*var name can be anything*/= document.getElementById("username").value 
    /*id should match the one placed in html*/
    var inputedPassword= document.getElementById("password").value 
    /*use .value for inputs*/
    alert("Hello " + inputedName + " your password is " + inputedPassword);
    /*shows when you click the button*/
}