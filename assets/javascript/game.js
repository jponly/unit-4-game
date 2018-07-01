$(document).ready(function () {

    var randomNumber = Math.floor(Math.random() * 50);
    console.log(randomNumber);

    var total_score = 0;

    var wins = 0;

    var losses = 0;

    var button1 = Math.floor(Math.random() * 13);
    console.log(button1)

    var button2 = Math.floor(Math.random() * 13);
    console.log(button2)

    var button3 = Math.floor(Math.random() * 13);
    console.log(button3)

    var button4 = Math.floor(Math.random() * 13);
    console.log(button4)

    var reset = function () {
        $("Wins").innerHTML = wins;
        $("Losses").innerHTML = losses;
        $("Score").innerHTML = total_score;
    }

    $("#randomNumber").html(randomNumber);

    $("#thumbnail_gem1").on("click", function () {

        total_score += button1;


        $("#score").html(total_score)

    })

    $("#thumbnail_gem2").on("click", function () {

        total_score += button2;


        $("#score").html(total_score)

    })

    $("#thumbnail_gem3").on("click", function () {

        total_score += button3;


        $("#score").html(total_score)

    })
    $("#thumbnail_gem4").on("click", function () {

        total_score += button4;


        $("#score").html(total_score)

    })

    if (total_score === randomNumber) {
        wins++;
        alert("Congratulation! You collected the EXACT value! Let's play again!");
        randomNumber = Math.floor(Math.random() * 50);
    }

    if (total_score > randomNumber) {
        losses++;
        alert("Almost! Try again!");
        randomNumber = Math.floor(Math.random() * 50);
    }

    reset();



});