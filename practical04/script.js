
function calculate() {

    let m1 = Number(document.getElementById("m1").value);
    let m2 = Number(document.getElementById("m2").value);
    let m3 = Number(document.getElementById("m3").value);
    let m4 = Number(document.getElementById("m4").value);
    let m5 = Number(document.getElementById("m5").value);

    let marks = [m1, m2, m3, m4, m5];

    if (marks.some(m => m < 0 || m > 100) ||
        ["m1", "m2", "m3", "m4", "m5"].some(
            id => document.getElementById(id).value === ""
        )) {
        alert("Enter valid marks between 0 and 100");
        return;
    }

    let total = m1 + m2 + m3 + m4 + m5;
    let percentage = total / 5;
    let grade;

    if (percentage >= 90)
        grade = "A+";
    else if (percentage >= 80)
        grade = "A";
    else if (percentage >= 70)
        grade = "B";
    else if (percentage >= 60)
        grade = "C";
    else if (percentage >= 50)
        grade = "D";
    else
        grade = "Fail";

    document.getElementById("result").innerHTML =
        "Total Marks: " + total + "/500 <br>" +
        "Percentage: " + percentage + "% <br>" +
        "Grade: " + grade;
}

function clearResult() {
    for (let i = 1; i <= 5; i++) {
        document.getElementById("m" + i).value = "";
    }

    document.getElementById("result").innerHTML = "";
}
