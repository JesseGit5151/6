let table = document.getElementById('table').getElementsByTagName('tbody')[0];
let tr = document.querySelectorAll("tr");

let delBtn = document.querySelectorAll(".delBtn");

let employees = [
    ["Jesse Rodriguez", "Boss", 1111],
    ["Dave Sanchez", "sales", 2222],
    ["Steve Cabollero", "VP", 3333],
    ["Danny Way", "Marketing", 444],
    ["Paul Rodriguez", "HR", 5555]
]
let addBtn = document.querySelector(".addBtn");
let name = document.getElementById("name");
let title = document.getElementById("email");
let ext = document.getElementById("pwd");
let html = "";
//Added array elements to the table through looping for a multi dimensional array
//Looped inside a loop to gather the rows and cells
//Try to change to a foreach loop




window.addEventListener('load', function () {
    //This button will grab all input values
    //Store them in a new array
    //then push that array into the already existing employee array

    // tr.forEach(function (rows) {
    //     console.log(rows)
    // })

    let cell = document.querySelectorAll(".content-table td:last-child");
    cell.forEach(function (b) {
        let button = document.createElement("button");
        button.className = "delBtn";
        button.innerText = 'X';
        b.appendChild(button)
    });
    addBtn.addEventListener("click", function () {
        employees.forEach(function (row) {
            let extension = row[2];
            // console.log(extension);
        });

        let newArray = [name.value, title.value, ext.value];
        employees.push(newArray)
        console.log(employees)
        name.value = "";
        title.value = "";
        ext.value = "";
        //if any of the inputs is empty, print a error message to the page: do not allow pushing into the array
        //Now I want to plug in each nested array in the array, employees, into a table row
        

        if (true) {
            html = "<tr><td>" + newArray[0] + "</td><td>" + newArray[1] + "</td><td>" + newArray[2] + "</td><td>" + "<button class = 'delBtn'>X</button>" + "</td></tr>";
            let lastRow = table.rows[table.rows.length-1];
            console.log(lastRow)
            table.innerHTML += html;
        } else {
            console.log('ERROR');
        }

    });
    
    
});

//grab the text in the inputs
//create a new element to hold the text
//append the input text to the newly created element
//then display the new element to the page inside the table 

//Add Event listeners to buttons

//Add

//Delete