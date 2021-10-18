function addRow(id){
    var tbody = document.getElementById(id).getElementsByTagName("TBODY")[0];
    var row = document.createElement("TR")
    var td1 = document.createElement("TD")
    td1.appendChild(document.createTextNode("Процессор"))
    var td2 = document.createElement("TD")
    td2.appendChild (document.createTextNode("AMD Ryzen 5 3500X"))
    row.appendChild(td1);
    row.appendChild(td2);
    tbody.appendChild(row);
}

let button = document.getElementById('button');
body = document.getElementById('body');

button.addEventListener('click', function(){
    body.classList.toggle('body-dark');
    body.classList.remove('body');
});
