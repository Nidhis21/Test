console.log("ASYNCHRONOUS PROGRAMMING");

function getsync() {
    console.log("Synchronous Programming");
    console.log("Student Information");
    console.log("Name :: Nidhi Salian");
    console.log(" Class :: D11ADB");
    console.log("Roll No :: 44");
}
getsync()
function processTask(callback) {

    setTimeout(function () {
        console.log("Task process completed");
        callback();
    }, 2000);


}

processTask(function () {
    console.log("callback executed successfully");

});
console.log("Other operations can execute while the task is processing.");
//Event Loop demonstartion 
console.log("Start");
setTimeout(function () {
    console.log("Time caller executed");
}, 1000);

console.log("End");
console.log("Main program execution completed.");
