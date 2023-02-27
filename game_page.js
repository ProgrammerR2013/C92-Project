player1_name = localStorage.getItem("Player1");
player2_name = localStorage.getItem("Player2");

player1_score = 0;
player2_score = 0;

document.getElementById("player_name1").innerHTML = player1_name + ":" ;
document.getElementById("player_name2").innerHTML = player2_name + ":" ;

document.getElementById("player_1_score").innerHTML = player1_score;
document.getElementById("player_2_score").innerHTML = player2_score;

document.getElementById("question_turn").innerHTML = player1_name;
document.getElementById("answer_turn").innerHTML = player2_name;


// Send function
function send() {
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer:  <input type = 'text' id = 'input_check_box'>";
    check_button = "<br><br><button class = 'btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}

// Check function
question_turn = "player1";
answer_turn = "player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    
    if (actual_answer == get_answer) {
        if (answer_turn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("player_1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("player_2_score").innerHTML = player2_score;
        }
    }

    if (question_turn == "player1")
    {
        question_turn = "player2"
        answer_turn = "player1"
        document.getElementById("question_turn").innerHTML = player2_name;
        document.getElementById("answer_turn").innerHTML = player1_name;
    }

    else {
        question_turn = "player1";
        answer_turn = "player_2";
        document.getElementById("question_turn").innerHTML = player1_name;
        document.getElementById("answer_turn").innerHTML = player2_name;
    }

    document.getElementById("output").innerHTML = "";
}