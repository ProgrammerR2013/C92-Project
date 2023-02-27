function login_user() {
    player_1name = document.getElementById("player_1_nameinput").value;
    player_2name = document.getElementById("player_2_nameinput").value;

    // setting the names in local storage
    localStorage.setItem("Player1", player_1name);
    localStorage.setItem("Player2", player_2name);
    window.location = "game_page.html";
}