// var index = 1;

// while (index <= 50) {

//     document.write(index + " ");
//     index++;
// }

// if (index % 2 == 0) {


// } else if (index % 2 == 1) {

// }

function daiwye() {

    var index = 1;
    // var x = document.getElementById("text").value;

    while (index <= 50) {

        document.getElementById("text").innerHTML = index;

        // document.write(index + " ");

        index++;

        if (index % 2 == 0) {
            document.getElementById("text").style.color = "red";
        }
    }



}
