// ##################################################################################
// ######################## - SOLUTION USING .THEN() - ##############################
// ##################################################################################

const jokeEl = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

// first we need to add a header to the get request which is "Accept: application/json".
// this is how we get a json response from the get request we sent to the server.
// we get this information from the icanhazdadjoke api documentation.
// instead of adding this header within the function, in order to have a clear function code,
// let define our header as a variable before we write our function and then add this variable
// to the function as a variable.
let config = {
  headers: {
    Accept: "application/json",
  },
};

// basically if we want to get a response from a get request, we simply do this:
function getRandomDadJoke() {
  fetch("https://icanhazdadjoke.com")
    .then((response) => console.log(response))
    .then((data) => console.log(data));
}
// first we fetch the api address, and then we console.log the response we get back.
// but the data we get by this method is not usable.
// so, if we first convert our response to a json format and then console.log our data it would be much
// more meaningful:

function getRandomDadJoke() {
  fetch("https://icanhazdadjoke.com")
    .then((response) => response.json())
    .then((data) => console.log(data));
}
// but we won't be able to it like this because we haven't added our acceop: application/json header to
// our response. so it won't let us convert our response to a json format. now let's handle this issue.
// let's create our function using fetch() method and add our pre-created "config" varible into it:

function getRandomDadJoke() {
  fetch("https://icanhazdadjoke.com", config)
    .then((response) => response.json())
    .then((data) => console.log(data));
}
// now, after adding our header to our get request we are able to convert our response to a json format.
// and the console.log data we get is a json format of the dad jokes we fetch from our api url.
// the response is now like an object.
// so we can only call/fetch the "joke" key's value out of our other 3 values of 3 keys like "id", "joke" and "status".

function getRandomDadJoke() {
  fetch("https://icanhazdadjoke.com", config)
    .then((response) => response.json())
    .then((data) => console.log(data.joke));
}

// now the final step is easy:
// we only have to add this joke output to our div's textcontent everytime we click on the button:

function getRandomDadJoke() {
  fetch("https://icanhazdadjoke.com", config)
    .then((response) => response.json())
    .then((data) => {
      console.log(
        "##########################################################################"
      );
      console.log("BELOW IS THE JSON FORMATTED OBJECT VERSION OF OUR DATA :");
      console.log(data);
      console.log(
        "##########################################################################"
      );
      console.log(
        "BELOW IS THE ''VALUE'' OF ''JOKE'' KEY FROM THE OBJECT VERSION OF OUR DATA :"
      );

      console.log(data.joke);
      jokeEl.textContent = data.joke;
      console.log(
        "##########################################################################"
      );
    });
}

jokeBtn.addEventListener("click", getRandomDadJoke);

// ##################################################################################
// ################### - SOLUTION USING AWAIT ASYNC VERSION - #######################
// ##################################################################################
/*
// We create our header again
let config = {
  headers: {
    Accept: "application/json",
  },
};

// this time we'll write an async function, and we need this async keyword to do that:

async function getRandomDadJoke() {
  // first we create a variable and make a fetch request in it. But this time using await keyword:
  // again by adding our accept header of course;
  const response = await fetch("https://icanhazdadjoke.com", config);

  // then we create another varibale for our data and turn our response into a json format in it:
  // again by using await keyword of course:
  const data = await response.json();

  // and finally add this to our div's textContent:
  jokeEl.textContent = data.joke;
}

// In this solution; await keyword acts like .then() method. as we've created an async function,
// within this async function when we use await keyword, our next line of the code awaits until the await
// line of the code gets a response.

jokeBtn.addEventListener("click", getRandomDadJoke);
*/
// ##########################################################################
// ##########################################################################
// ######################## - UDEMY SOLUTION - ##############################
// ##########################################################################
// ##########################################################################

// const jokeEl = document.getElementById("joke");
// const jokeBtn = document.getElementById("jokeBtn");

// jokeBtn.addEventListener("click", generateJoke);

// generateJoke();

// USING ASYNC/AWAIT
// async function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   const res = await fetch("https://icanhazdadjoke.com", config);

//   const data = await res.json();

//   jokeEl.innerHTML = data.joke;
// }
// ##########################################################################
// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }
