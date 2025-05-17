console.log("Project Loaded");

let txtStudentStudentName = document.getElementById("txt-name");
let txtStudentStudentAddress = document.getElementById("txt-address");
let txtStudentStudentAge = document.getElementById("txt-age");

let btnGetDetails = document.getElementById("btn-get-details");

function btnGetDetailsOnClick(){
    // Gather Text box values
    // Generate JSON Object
    let requestBody = {
        "name":txtStudentStudentName.value,
        "address":txtStudentStudentAddress.value,
        "age":txtStudentStudentAge.value
    };
    // Initiate POST request
    fetch("http://localhost:8080/create-student", {
        method:"POST",
        body:JSON.stringify(requestBody),
        headers:{
            "Content-Type": "application/json",
        }
    })
    .then(data=>data.json())
    .then(data=>{
        console.log("Response Recived");
    })
}

btnGetDetails.addEventListener("click", btnGetDetailsOnClick);

// Clear input fields on page load
window.addEventListener("load", () => {
    txtStudentStudentName.value = "";
    txtStudentStudentAddress.value = "";
    txtStudentStudentAge.value = "";
});