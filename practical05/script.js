
function addTask() {
    let task = document.getElementById("task").value;

    if (task.trim() === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.textContent = task;

    // Mark task as completed
    li.onclick = function () {
        li.classList.toggle("completed");
    };

    // Create Delete button
    let btn = document.createElement("button");
    btn.textContent = "Delete";

    btn.onclick = function (e) {
        e.stopPropagation();
        li.remove();
    };

    li.appendChild(btn);

    document.getElementById("taskList").appendChild(li);

    // Clear input
    document.getElementById("task").value = "";
}
