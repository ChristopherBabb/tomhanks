let movieList =
    [
        {
            "name": "Forrest+Gump",
            "trailer": "https://www.youtube.com/embed/bLvqoHBptjg"
        },
        {
            "name": "Cast+Away",
            "trailer": "https://www.youtube.com/embed/qGuOZPwLayY"
        },
        {
            "name": "Saving+Private+Ryan",
            "trailer": "https://www.youtube.com/embed/zwhP5b4tD6g"
        },
        {
            "name": "You've+Got+Mail",
            "trailer": "https://www.youtube.com/embed/znESQTt3L80"
        },
        {
            "name": "Apollo+13",
            "trailer": "https://www.youtube.com/embed/KtEIMC58sZo"
        }
    ]

//finding the root element
const app = document.getElementById('root');

//creating a container element
const container = document.createElement('div');
container.setAttribute('class', 'container');

//attaching the logo and the container to the root element
app.appendChild(container);


for (var i = 0; i < movieList.length; i++)
{
    let url = "http://www.omdbapi.com/?t=" + movieList[i].name + "&apikey=ccf961c0";

    let video = document.createElement('iframe');
    video.setAttribute('src', movieList[i].trailer);

    fetch(url)
    //when the promise is resolved we extract the JSON part of the response object
        .then(response => {

            return response.json();
        })
        //then we can work with the JSON data
        .then(movie => {
            console.log(movie);
            console.log(movie.Title);

            //Create a div with a card class
                const card = document.createElement('div');
                card.setAttribute('class', 'newMovie');

                //creat img element
                let image = document.createElement('img');
                image.setAttribute('src', movie.Poster);
                image.setAttribute('alt', 'tom hanks')


                //Create an h1, h2, h3 and set the text content to the film's title, rating and age
                const h1 = document.createElement('h1');

                const h2 = document.createElement('h2');

                const h3 = document.createElement('h3');

                // Create a p and set the text content to the film's description
                const p = document.createElement('p');


                // set the elements to contain the right content
                const newMovie = document.createTextNode(movie.Title);
                h1.append(newMovie);

                const rating = document.createTextNode(movie.Rated);
                h2.append(rating);

                const age = document.createTextNode(movie.Released);
                h3.append(age);

                //limit the movie description to 300 chars, and then output it to p
                const description = document.createTextNode(movie.Plot.substr(0, 300));
                 p.append(description);


            // Each card will contain an h1 and a p
            card.appendChild(image);
            card.appendChild(video);
            card.appendChild(h1);
            card.appendChild(h2);
            card.appendChild(h3);
            card.appendChild(p);


            // Append the cards to the container element
            container.append(card);
        })

}
