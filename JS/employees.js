let table = document.getElementById('tbody')
let tr = document.querySelectorAll("tr");
let delBtn = document.querySelector(".delBtn");
let employees = [
    ["Jesse Rodriguez", "Boss", 1111],
    ["Dave Sanchez", "sales", 2222],
    ["Steve Cabollero", "VP", 3333],
    ["Danny Way", "Marketing", 444],
    ["Paul Rodriguez", "HR", 5555],
    ["Phil Rodriguez", "HR", 6666]
]
console.log(delBtn)
let button2;
let addBtn = document.querySelector(".addBtn");
let name = document.getElementById("name");
let title = document.getElementById("email");
let ext = document.getElementById("pwd");
let html = "";
let tableRow;
let td = document.querySelectorAll(".content-table td");
let tableData;
let newArray;
let tabled;

window.addEventListener('load', function () {
    
    employees.forEach(function(i) {
        tableRow = document.createElement("tr");
        i.forEach(function(c) {
            tabled = document.createElement("td");
            tabled.innerText = c;
            tableRow.appendChild(tabled)
        });


        console.log(tableRow)
        button2 = document.createElement("button");
        button2.className = 'delBtn';
        button2.innerText = 'X';
        tableRow.appendChild(button2);
        table.appendChild(tableRow)
    });


    //Event delegation on document
    document.addEventListener('click',function(e){
        if(e.target.className === 'delBtn'){
            console.log(e.target)
            e.target.parentElement.remove();
         }
     });

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
        button2 = document.createElement("button");
        button2.className = 'delBtn';
        button2.innerText = 'X';
        tableRow.appendChild(button2);
        table.appendChild(tableRow);
        
        name.value = '';
        title.value = '';
        ext.value = '';
    }); 
     
});
