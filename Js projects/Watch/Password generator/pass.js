const btnE1 = document.querySelector(".btn");
const inputE1 = document.getElementById("input");
const copyIconE1 = document.querySelector(".fa-copy");
const alertContainerE1 = document.querySelector(".alert-container")

btnE1.addEventListener("click", ()=>{
    createPassword() 
    // createPassword is for adding a function 
});

copyIconE1.addEventListener("click", ()=>{
    // similarly copy password is also for creating a 
    // function on icon that is copyPassword 
    copyPassword();

    if(inputE1.value){
    alertContainerE1.classList.remove("active");

    // setTimeout function removes a function after a
    // period of time 
    setTimeout(()=>{
        alertContainerE1.classList.add("active");
    }, 3000);
    }
    
});

function createPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*():{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passwordLength = 12;
    let password = ""
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor
        (Math.random() * chars.length)
        password += chars.substring(randomNum, randomNum + 1);
        // Checking in console --- console.log(randomNum, password); 
    }
    inputE1.value = password;
    alertContainerE1.innerText = password + "  copied!";
}

function copyPassword(){
    // for desktop 
    inputE1.select();

    // for mobile 
    inputE1.setSelectionRange(0, 9999);

    navigator.clipboard.writeText(inputE1.value);
   
}