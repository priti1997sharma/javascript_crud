
function getAge(birthday) {
    const ageDifMs = Date.now() - new Date(birthday).getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);

}

// to do: create var and print its value (25/june/23)
//   var a= document.getElementById("shyam_age").innerHTML;
//   console.log(a);
// document.getElementById("shyam_id").innerHTML = getAge(a);

let shyam_age = document.getElementById("shyam_age").innerHTML
document.getElementById("shyam_id").innerHTML = getAge(shyam_age);

let ram_age = document.getElementById("ram_age").innerHTML

console.log(getAge(ram_age));
document.getElementById("ram_id").innerHTML = getAge(ram_age);

//    console.log(getAge("11/11/1984"));

//   console.log(getAge("11/11/1984"));

const Aman_dob= document.getElementById("Aman_dob").innerHTML
document.getElementById("Aman_id").innerHTML=getAge(Aman_dob)

// const student_json = [{
//     firstName: "ram",
//     dob: "17/06/1990"
// }, {
//     firstName: "sham",
//     dob: "04/09/1990"
// }];


// // TODO make the html of list

// let studentHTML = '';
// for (let i = 0; i < student_json.length; i++) {
//         let student = student_json[i];

//         studentHTML = `
//         <tr>
//             <td> ${student.firstName}</td>
//             <td> ${student.dob} </td>
//             <td> </td>
//             <td> </td>
//         </tr>
        
//         ` + studentHTML;

// }

// document.getElementById("my_table").innerHTML = studentHTML;



