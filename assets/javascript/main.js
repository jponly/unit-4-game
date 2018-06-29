$(document).ready(function () {



    // character objects(4)

    var rey = {
        name: "Rey",
        hp: 200,
        attack: 15


    };

    var yoda = {
        name: "Yoda",
        hp: 300,
        attack: 20


    };

    var duku = {
        name: "Duku",
        hp: 450,
        attack: 30


    };

    var grievous = {
        name: "Grievous",
        hp: 180,
        attack: 10


    };

    // var swCharacters ["rey", "yoda", "duku", "grievous"];

    var defender = {
        name: "",
        hp: 0,
    }

    var enemy;

    $(".player").on("click", function () {

        if (defender && enemy) {
            alert("You have already selected an enemy");
        }

        else if (!defender) {
            $(this).appendTo("#defendbox");
            defender.name = $(this);
            defender.hp = Number($(this).attr('value')); 
            console.log(defender.hp);


        } else if (defender) {
            enemy = $(this);
            $(this).appendTo("#enemystable");
        }





        console.log(this);

    });

    $(".attack-btn").on("click", function () {




    });










}); // document.ready











//... 
//...TEMP NOTES

// Alternative way to create objects
// var luke = new character();
// luke.name= "Luke";
// luke.hp= 200;
// luke.attack= 25;


