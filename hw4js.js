for(let x= 0; x<100; x++){
  $("#posts").append(`<img src = "https://unsplash.it/500/300/?random&rand=${x}"><br>`)
}
$.get("https://randomuser.me/api/",
  (response) => {
    $("#pic").append(`<img style="border-radius:700px; border: 2px solid black;" src=" ${response.results[0].picture.large}"</span><br>`);
    $("#profile").append(`<span> First Name: ${response.results[0].name.first}</span><br>`);
    $("#profile").append(`<span> Last Name: ${response.results[0].name.last}</span><br>`);
    $("#profile").append(`<span> Username: ${response.results[0].login.username}</span><br>`);
    $("#profile").append(`<span> City: ${response.results[0].location.city}</span><br>`);
    $("#profile").append(`<span> State: ${response.results[0].location.state}</span>`);
  }
);
