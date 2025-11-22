let form = document.getElementById("form-container");

form.addEventListener("submit", function (event){
    event.prevetnDefault();
    console.log("city");
    let city = document.getElementById("city").value;
    console.log(city);

    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={API key}`
        )
        .then((repsonse) => response.json())
        .then((data) => console.log(data));
});