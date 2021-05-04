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
    let url=`http://localhost/signUp.php?username=${username}&email=${email}&password=${password}&gender=men`;
    if(
        username!="" &&  email!="" && password!="" && 
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
    return false;
};
async function AuthUserSignIn(){
    let username=document.getElementById("content-form-username").value;
    let email=document.getElementById("content-form-email").value;
    let password=document.getElementById("content-form-pass").value;
    let url=`http://localhost/signIn.php?username=${username}&email=${email}&password=${password}&gender=men`;

        let response = await fetch(url);
        let text = await response.json().then(data=>{
        log(data);
        if(data["registered"] == true && data["statusAccount"]=="Already exist"){
             notyf.error("Account already exist !");
        }else if(data["registered"] == true && data["statusAccount"]=="Account created"){
            notyf.success("Your account have been created !");
         }
        }); 
    return false;
};
function showSignIn(){
    $("#SignUp-Area").fadeOut(2);
    $("#SignIn-Area").fadeIn(2);
}
function showSignUp(){
    $("#SignUp-Area").fadeIn(2);
    $("#SignIn-Area").fadeOut(2);
}
var winclose = function () {
    window.close();
}
