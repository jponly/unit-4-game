$(document).ready(function () {

    var random = Math.floor(Math.random() * 101 + 19)

    $('#random_number').text(random);


    var num1 = Math.floor(Math.random() * 11 + 1)
    var num2 = Math.floor(Math.random() * 10 + 3)
    var num3 = Math.floor(Math.random() * 9 + 7)
    var num4 = Math.floor(Math.random() * 14 + 8)


    var userTotal = 0;
    var wins = 0;
    var losses = 0;


    $('#wins').text(wins);
    $('#loss').text(losses);

    function reset() {

        random = Math.floor(Math.random() * 101 + 19);
        $('#random_number').text(random);
        num1 = Math.floor(Math.random() * 11 + 1);
        num2 = Math.floor(Math.random() * 10 + 3);
        num3 = Math.floor(Math.random() * 9 + 7);
        num4 = Math.floor(Math.random() * 14 + 8);

        userTotal = 0;
        $('#final_score').text(userTotal);



    }

    function winner() {
           $( "#game_outcome" ).html( "<div>You won!</div>" );
        wins++;
        $('#wins').text(wins);
        reset();
        
    }
    function loser() {
        $( "#game_outcome" ).html( "<div>You lost!</div>" );
        losses++;
        $('#loss').text(losses);
        reset();
    
     }

    $('#thumbnail_gem1').on("click", function () {
        userTotal = userTotal + num1;
        $('#final_score').text(userTotal);

        if (userTotal === random) {
            winner();
        }

        else if (userTotal > random) {
            loser();
        }

    })
    $('#thumbnail_gem2').on('click', function () {
        userTotal = userTotal + num2;
        $('#final_score').text(userTotal);

        if (userTotal === random) {
            winner();
        }
        else if (userTotal > random) {
            loser();
        }
    })
    $('#thumbnail_gem3').on('click', function () {
        userTotal = userTotal + num3;
        $('#final_score').text(userTotal);

        if (userTotal === random) {
            winner();
        }
        else if (userTotal > random) {
            loser();
        }
    })
    $('#thumbnail_gem4').on('click', function () {
        userTotal = userTotal + num4;
        $('#final_score').text(userTotal);

        if (userTotal === random) {
            winner();
        }
        else if (userTotal > random) {
            loser();
        }
    })

});