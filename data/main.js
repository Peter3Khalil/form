let table = document.getElementById("table");
let obj = new URLSearchParams(window.location.search);
obj.forEach((value,name)=>{
    let tr = document.createElement("tr");
    let tdOfName = document.createElement("td");
    let tdOfValue = document.createElement("td");
    tdOfName.append(name);
    tdOfValue.append(value);
    tr.appendChild(tdOfName);
    tr.appendChild(tdOfValue);
    table.appendChild(tr);
})
