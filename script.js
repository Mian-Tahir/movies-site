document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".navbar form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); 
    });
  
  });
  

function searchMovies (){
   const searchString = document.getElementById("movieName").value ;
    const API_KEY = "a8af5a30"
    const API_URL = `http://www.omdbapi.com/?S=${searchString}&apikey=${API_KEY}`

    const apiCall = fetch(API_URL);
    apiCall.then((movie)=>{
        return movie.json()
    }).then((data)=>{
        const movies = data.Search.filter((movie)=>{
return movie.Year >= document.getElementById('year').value
        });
        const outPut = movies.map ((movie)=>{
            return (`<img src=${movie.Poster} />` )
        });

        document.getElementById('demo').innerHTML=outPut.join(" ")

    })
 
}

document.getElementById('btn').onclick=searchMovies;
window.addEventListener("load", searchMovies)