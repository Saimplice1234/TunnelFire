var log=console.log;

const notyf = new Notyf();
setTimeout(()=>{
    $("#app").fadeIn();
    $("#section-btn-window").fadeIn();
},300);

async function AuthUserSignUp(){
    let username=document.getElementById("content-form-username").value;
    let email=document.getElementById("content-form-email").value;
    let password=document.getElementById("content-form-pass").value;
    let politic=document.getElementById("checkbox-term").checked;

    let url=`http://localhost/signUp.php?username=${username}&email=${email}&password=${password}`;

    if(politic == true){
        if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email) == true){
            if( username!="" &&  email!="" && password!="" && 
            username.trim().length!=0 && 
            email.trim().length!=0 &&
            password.trim().length!=0
            ){
            let response = await fetch(url);
            let text = await response.json().then(data=>{
            log(data);
            if(data["registered"] == true && data["statusAccount"]=="Already exist"){
                 notyf.error("Account already exist !");
            }else if(data["registered"] == true && data["statusAccount"]=="Account created"){
                notyf.success("Your account have been created !");
             }
            }); 

        }else if(
            username =="" ||  email!="" || password!="" ||
            username.trim().length == 0 || 
            email.trim().length ==0 ||
            password.trim().length!=0
        ){
            notyf.error("Your information must be correct !");
        }else if(password.trim().length == 0){
            notyf.error("Your password contains only space !");
        }

        }else if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email) == false){
            notyf.error("You must enter a valid email !");
        }

    }else if(politic == false){
        notyf.error("You must to accept terms and politic !");
    }

    return false;
};

async function AuthUserSignIn(){
    
    let username=document.getElementById("content-form-username").value;
    let email=document.getElementById("content-form-email-2").value;
    let password=document.getElementById("content-form-pass-2").value;
    let politic=document.getElementById("checkbox-term-2").checked;

    let url=`http://localhost/signIn.php?username=${username}&email=${email}&password=${password}`;
  
    let response = await fetch(url);
    let text = await response.json().then(data=>{
        if(politic == true){
        if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email) == true){
            if( username!="" &&  email!="" && password!="" && 
            username.trim().length!=0 && 
            email.trim().length!=0 &&
            password.trim().length!=0
            ){
            if(data["registered"]== false){
                notyf.error("You aren't a menmber go to create account !");
            }else if(data["registered"]== true){
    
               if(data["password_is_correct"]==true){
                 notyf.success("You have logged in with success !");
               }else if(data["password_is_correct"]==false){
                notyf.error("Verify your account information !");
    
               }
            }
            }else if(
            username =="" ||  email!="" || password!="" ||
            username.trim().length == 0 || 
            email.trim().length ==0 ||
            password.trim().length!=0){
                notyf.error("Your information must be correct !");
            }

        }else if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email) ==false){
            notyf.error("You must to enter correct email !");
        }
            
        }else if(politic == false){
            notyf.error("You must to accept terms and politic !");
        }
        
    }); 
    return false;
};
function showSignIn(){
    let username=document.getElementById("content-form-username").value="";
    let email=document.getElementById("content-form-email").value="";
    let password=document.getElementById("content-form-pass").value="";
    let politic=document.getElementById("checkbox-term").checked=false;
    $("#SignUp-Area").fadeOut(2);
    $("#SignIn-Area").fadeIn(2);
}
function showSignUp(){
    let username=document.getElementById("content-form-username").value="";
    let email=document.getElementById("content-form-email-2").value="";
    let password=document.getElementById("content-form-pass-2").value="";
    let politic=document.getElementById("checkbox-term-2").checked=false;
    $("#SignUp-Area").fadeIn(2);
    $("#SignIn-Area").fadeOut(2);
}
var winclose = function(){
    window.close();
}
