
/*
 * Purpose: load data
 * Return: none
 * Notes: made references from lecture slides and json zip files from modules
 */
function load_data() {
    request = new XMLHttpRequest();
    request.open("GET", "https://official-joke-api.appspot.com/random_joke", true);
    request.onreadystatechange = function() {
        if (request.readyState == 4 &&
            request.status == 200)
        {
            console.log("data is ready");
            theData = request.responseText;
            console.log("what is the data" + theData);
            document.getElementById("ajax_str").innerHTML+="<br>The response is: " + theData;
        } else if (request.readyState == 4 && request.status != 200) {
            console.log("request failed");
        }
    }
    console.log("sending request");
    request.send();
}

/*
 * Purpose: fetch data from public API
 * Return: loads data after
 * Notes: made references from lecture slides and json zip files from modules
 */
fetch("https://official-joke-api.appspot.com/random_joke")
.then(function (response) {
    return response.json();
}).then(function (obj) {
    let json = JSON.stringify(obj);
    console.log(typeof obj);
    console.log(json);
    let string = document.getElementById("fetch_str");
    string.innerHTML = "The response is: " + json;
}).catch(function (error) {
    console.error("Something went wrong somewhere");
    console.error(error);
});
load_data();
