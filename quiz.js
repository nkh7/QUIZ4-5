function ConvertToTable() {
    let table = document.getElementById("Registered");
    let username = document.getElementById("username").value;
    let age = document.getElementById("age").value;
    let password = document.getElementById("password").value;
    let repeatedpassword = document.getElementById("repeatPassword").value;
    let comp = password.localeCompare(repeatedpassword);

    
    if(username.length == 0 || age.length == 0 || password.length == 0 || repeatedpassword.length == 0) {
        document.getElementById("pass").innerHTML = "You must input all"; return ;
    }
    if(comp !== 0) {
        
        
        document.getElementById("pass").innerHTML = "Your password and repeated password does not match"
    }
    else {
    if( age < 18 ) { document.getElementById("pass").innerHTML = " Minimum age for registration is 18.";  return ;}

    if(password.length > 5 && password.indexOf('.') !== -1 && comp == 0) {
        let password1 = "";
        let password2 = "";
    for(let i = 0; i < password.length; i++) {
        password1 += '*';
        password2 += '*';
    }
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.innerHTML = username;
    cell1.style.border= "solid";
    cell2.innerHTML = age;
    cell2.style.border= "solid";
    cell3.innerHTML = password1
    cell3.style.border= "solid";
    cell4.innerHTML = new Date();
    cell4.style.border= "solid";
    document.getElementById("pass").innerHTML = "Submit is Sucessful."
    document.getElementById("username").value = " ";
    document.getElementById("age").value = " ";
    document.getElementById("password").value = " ";
    document.getElementById("repeatPassword").value = " ";
    
    }
    else {
        
        
        document.getElementById("pass").innerHTML = "Your password must contain min 6 characters and period"}
    
}
}

function lowerCase() {
let username = document.getElementById("username").value;
let upper = username.toUpperCase();
result = username.localeCompare(upper);
if(result != 0) {
    document.getElementById("enter").innerHTML = "Please Enter Your Username With UpperCase Only";
}
else {
    document.getElementById("enter").innerHTML = "";
}
}