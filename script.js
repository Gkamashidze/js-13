function check() {
    var ricxvi = document.getElementById("number").value;

    if (ricxvi < 0) {
        document.getElementById("dark").style.display = "flex";
        document.getElementById("message").innerHTML = "შეყვანილი რიცხვი არის უარყოფითი!"
    } else if (ricxvi > 0) {
        document.getElementById("dark").style.display = "flex";
        document.getElementById("message").innerHTML = "შეყვანილი რიცხვი არის დადებითი!"
    }
}

function closebtn() {
    document.getElementById("dark").style.display = "none";
}

function show() {

    var ricxvi = document.getElementById("number").value;

    if (ricxvi < 0) {
        document.getElementById("box1").style.height = "400px"
        document.getElementById("box1").style.backgroundColor = "red"
    } else if (ricxvi > 0) {
        document.getElementById("box1").style.height = "400px"
        document.getElementById("box1").style.backgroundColor = "green"
    } else if (ricxvi == 0) {
        document.getElementById("box1").style.height = "400px"
        document.getElementById("box1").style.backgroundColor = "grey"
    }

}