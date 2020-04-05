let table = document.getElementById('table');
let employees = [
    ["Jesse Rodriguez", "Boss", 1111],
    ["Dave Sanchez", "sales", 2222],
    ["Steve Cabollero", "VP", 3333],
    ["Danny Way", "Marketing", 444],
    ["Paul Rodriguez", "HR", 5555]
]
//Added array elements to the table through looping for a multi dimensional array
//Looped inside a loop to gather the rows and cells
for(let i = 1; i < table.rows.length; i++) {
    for(let j = 0; j < table.rows[i].cells.length; j++) {
        table.rows[i].cells[j].innerHTML = employees[i - 1][j];
    }
}