// var ricxvi = 1;
// var ricxvi2 = 1;

// let num = "";
// let numb = "";

// while (ricxvi <= 50) {
//     if (ricxvi % 2 == 1) {
//         numb += ricxvi + " ";
//         document.getElementById("red").innerHTML = numb;
//         document.getElementById("red").style.color = "red";

//     }
//     ricxvi++;
// }

// while (ricxvi2 <= 50) {
//     if (ricxvi2 % 2 == 0) {
//         num += ricxvi2 + " ";
//         document.getElementById("green").innerHTML = num;
//         document.getElementById("green").style.color = "green";
//     }
//     ricxvi2++;
// }

var index = 1;

while (index <= 50) {
    if (index % 2 == 0) {
        document.write('<font color="green">');
        document.write(index + " ");
        index++;
    } else if (index % 2 == 1) {
        document.write('<font color="red">');
        document.write(index + " ");
        index++;
    }
}
