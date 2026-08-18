var savedList = JSON.parse(localStorage.getItem("tasks")) || [];

var list = document.getElementById("list");
var task = document.getElementById("task");
var add = document.getElementById("add");
var clearButton = document.getElementById("clear");


savedList.forEach(function(text) {

    addTaskToPage(text);

});

add.onclick = function() {

    var text = task.value.trim();

    if (text === "") {
        return;
    }
    savedList.push(text);
    localStorage.setItem(
        "tasks",
        JSON.stringify(savedList)
    );
    addTaskToPage(text);
    task.value = "";

};



function addTaskToPage(text) {

    var li = document.createElement("li");
    li.textContent = text;
    list.appendChild(li);

}


clearButton.onclick = function() {
    list.innerHTML = "";
    savedList = [];
    localStorage.removeItem("tasks");

};