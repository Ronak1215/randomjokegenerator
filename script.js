var joke = document.querySelector("#joke");
var btn = document.querySelector("#btn");
var url = "https://v2.jokeapi.dev/joke/Any?type=single";

var getjoke = () => {
  fetch(url)
  .then(data=>data.json())
  .then(item=>{
    joke.textContent = `${item.joke}`;
  })
}
btn.addEventListener("click",getjoke)
getjoke()

