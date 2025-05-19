console.log("Project Loaded");

let txtStudentStudentName = document.getElementById("txt-name");
let txtStudentStudentAddress = document.getElementById("txt-address");
let txtStudentStudentAge = document.getElementById("txt-age");

let btnGetDetails = document.getElementById("btn-get-details");

function btnGetDetailsOnClick(){
    //--- Gather Text box values
    //--- Generate JSON Object
    let requestBody = {
        "name":txtStudentStudentName.value,
        "address":txtStudentStudentAddress.value,
        "age":txtStudentStudentAge.value
    };
    //--- Initiate POST request
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
    
    txtStudentStudentName.value = "";
    txtStudentStudentAddress.value = "";
    txtStudentStudentAge.value = "";
    fetchStudents();

}

function fetchStudents(){
    fetch("http://localhost:8080/get-student")
    .then(res => res.json())
    .then(data => {
        const tableBody = document.getElementById("student-table-body");
        tableBody.innerHTML = ""; //--- Clear table before refill

        data.forEach(student => {
            const row = `<tr>
                <td>${student.name}</td>
                <td>${student.address}</td>
                <td>${student.age}</td>
            </tr>`;
            tableBody.innerHTML += row;
        });
    });
}

btnGetDetails.addEventListener("click", btnGetDetailsOnClick);

//--- Clear input fields on page load
window.addEventListener("load", () => {
    txtStudentStudentName.value = "";
    txtStudentStudentAddress.value = "";
    txtStudentStudentAge.value = "";
    fetchStudents();
});