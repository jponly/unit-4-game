$(document).ready(function () {

    var random = Math.floor(Math.random() * 101 + 19)

    $('#random_number').text(random);


    var num1 = Math.floor(Math.random() * 11 + 1)
    var num2 = Math.floor(Math.random() * 11 + 1)
    var num3 = Math.floor(Math.random() * 11 + 1)
    var num4 = Math.floor(Math.random() * 11 + 1)


    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    $('#wins').text(wins);
    $('#loss').text(losses);

    function reset() {

        random = Math.floor(Math.random() * 101 + 19);
        $('#randomNumber').text(random);
        num1 = Math.floor(Math.random() * 11 + 1);
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 11 + 1);
        num4 = Math.floor(Math.random() * 11 + 1);

        userTotal = 0;
        $('#final_score').text(userTotal);

    }

    function winner() {
        alert("you won!");
        wins++;
        $('#wins').text(wins);
        reset()
    }
    function loser() {
        alert("you lose!");
        losses++;
        $('#loss').text(losses);
        reset()
    }

    $('#thumbnail_gem1').on("click", function () {
        userTotal = userTotal + num1;
        $('final_score').text(userTotal);

        if (userTotal == random) {
            winner();
        }

        else if (userTotal > random) {
            loser();
        }

    })
    $('#thumbnail_gem2').on('click', function () {
        userTotal = userTotal + num2;
        $('#final_score').text(userTotal);

        if (userTotal == random) {
            winner();
        }
        else if (userTotal > random) {
            loser();
        }
    })
    $('#thumbnail_gem3').on('click', function () {
        userTotal = userTotal + num3;
        $('#final_score').text(userTotal);

        if (userTotal == random) {
            winner();
        }
        else if (userTotal > random) {
            loser();
        }
    })
    $('#thumbnail_gem4').on('click', function () {
        userTotal = userTotal + num4;
        $('#final_score').text(userTotal);

        if (userTotal == random) {
            winner();
        }
        else if (userTotal > random) {
            loser();
        }
    })
    















});