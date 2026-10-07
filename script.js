function addTask() {

    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = task +
    ' <button onclick="completeTask(this)">Complete</button>' +
    ' <button onclick="this.parentElement.remove()">Delete</button>';

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
function completeTask(button) {
    let li = button.parentElement;
    li.style.textDecoration = "line-through";
}