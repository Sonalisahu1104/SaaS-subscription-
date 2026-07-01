const API="http://localhost:5000";


// Register User

async function register(){

let name =
document.querySelector("#regName").value;

let email =
document.querySelector("#regEmail").value;

let password =
document.querySelector("#regPassword").value;


let response =
await fetch(
API+"/auth/register",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
name,
email,
password
})

});


let data=await response.json();

alert(data.message);

}




// Login User

async function login(){


let email =
document.querySelector("#loginEmail").value;


let password =
document.querySelector("#loginPassword").value;
try{

let response =
await fetch(
"http://localhost:5001/auth/login",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
email:email
password:password
})

});


let data =
await response.json();
console.log(data);
if(response.ok){
    alert("Login Successful");
}else{
    alert(data.messsage||"Login Failed");
}
}catch(error){
    console.log(error);
    alert("Server Error");
}
}







// Get Plans

async function loadPlans(){


let response =
await fetch(
API+"/plans"
);


let plans =
await response.json();



let html="";


plans.forEach(plan=>{


html+=`

<div class="card">

<h3>${plan.name}</h3>

<h2>₹${plan.price}</h2>

<p>
${plan.features}
</p>

<button>
Subscribe
</button>


</div>

`;


});


document.getElementById("planList").innerHTML=html;


}



loadPlans();