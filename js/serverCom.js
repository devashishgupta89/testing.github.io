//gamescore=10&level=5&game_status=0&user_id=17&game_id=2
function sendData(gamescore, level, game_status, user_id, game_id) {
    //sendData(level, score, game, uid, partner) {

  //  console.log("uid3333 ");

    console.log("level " + level);
    console.log("gamescore " + gamescore);
    console.log("game_status " + game_status);
    console.log("user_id " + user_id);
    console.log("game_id " + game_id);

    var data = new FormData();
    data.append("gamescore", gamescore);
    data.append("level", level);
    data.append("game_status", game_status);
    data.append("user_id", user_id);
    data.append("game_id", game_id);

    var xhr = new XMLHttpRequest();
   // xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", gameUrl, true);
  //  xhr.setRequestHeader("cache-control", "no-cache");
  //  xhr.setRequestHeader("postman-token", "e9a39b1b-84a7-7a85-818b-d3ff682c4f11");

    xhr.send(data);
  /*

    var XHR = new XMLHttpRequest();
   

    XHR.addEventListener('load', function (event) {
        console.log("Yeah! Data sent and response loaded.");
        // alert('Yeah! Data sent and response loaded.');
    });

    // Define what happens in case of error
    XHR.addEventListener('error', function (event) {
        // console.log("error " + XHR.responseText);
        console.log("Oops! Something went wrong.");
        //    alert('Oops! Something went wrong.');
    });

    XHR.onreadystatechange = function () {
        console.log("XHR.readyState= " + XHR.readyState);
        if (XHR.readyState == XMLHttpRequest.DONE) {
            console.log("responseText " + XHR.responseText);
        }
    }
    // Set up our request  
    //sendData({ level: "10", score: "1020", game: "520", uid: "8801910000009", partner: "Gameneeti" });
    var url = "https://atechnos.in/html5-games/testing.php?level=" + level + "&gamescore=" + gamescore + "&game_status=" + game_status + "&user_id=" + user_id + "&game_id=" + game_id;
    XHR.open('POST', url, true);

    // Send our FormData object; HTTP headers are set automatically
    XHR.send();
    console.log("after send status " + XHR.status);
    */
}