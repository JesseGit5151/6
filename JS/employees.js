let table = document.getElementById('tbody')
let tr = document.querySelectorAll("tr");
let delBtn = document.querySelector("button.delBtn");
let employees = [
    ["Jesse Rodriguez", "Boss", 1111],
    ["Dave Sanchez", "sales", 2222],
    ["Steve Cabollero", "VP", 3333],
    ["Danny Way", "Marketing", 444],
    ["Paul Rodriguez", "HR", 5555]
]
let button;
let addBtn = document.querySelector(".addBtn");
let name = document.getElementById("name");
let title = document.getElementById("email");
let ext = document.getElementById("pwd");
let html = "";
let tableRow;
let td = document.querySelectorAll(".content-table td");
let tableData;
let newArray;
let td1;
let td2;
let td3;
let b;
let cell;
let we;
let tabled;

window.addEventListener('load', function () {
        cell = document.querySelectorAll(".content-table td:last-child");
    cell.forEach(function (b) {
        button = document.createElement("button");
        button.className = "delBtn";
        button.innerText = 'X';
        b.appendChild(button);
        console.log(b);
    });
    button.addEventListener('click', function () {
        console.log('sdsd');
    })


    addBtn.addEventListener("click", function () {
        tableRow = document.createElement("tr");
        newArray = [name.value, title.value, ext.value];
        employees.push(newArray);
        console.log(employees);
        newArray.forEach(function(i) {
            tabled = document.createElement("td");
            tabled.innerText = i;
            tableRow.append(tabled);
            console.log(tabled);
        });
        let button2 = document.createElement("button");
        button2.className = 'delBtn';
        button2.innerText = 'X';
        tableRow.appendChild(button2);
        table.appendChild(tableRow)
        name.value = '';
        title.value = '';
        ext.value = '';
       

    });

    
    
    
});