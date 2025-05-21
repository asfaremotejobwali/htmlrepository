// JavaScript code for movie list app
console.log("script.js loaded");

// 1. Select the DOM element
const movieListContainer = document.getElementById('movie-list-placeholder');

// 2. Populate the `movies` array with updated structure.
let movies = [
    {
        name: "Inception",
        posterUrl: "https://via.placeholder.com/300x440?text=Inception",
        actors: [
            { name: "Leonardo DiCaprio", imageUrl: "https://via.placeholder.com/50x50?text=Leo&bg=blue" },
            { name: "Joseph Gordon-Levitt", imageUrl: "https://via.placeholder.com/50x50?text=Joseph&bg=green" },
            { name: "Elliot Page", imageUrl: "https://via.placeholder.com/50x50?text=Elliot&bg=red" }
        ]
    },
    {
        name: "The Shawshank Redemption",
        posterUrl: "https://via.placeholder.com/300x440?text=Shawshank",
        actors: [
            { name: "Tim Robbins", imageUrl: "https://via.placeholder.com/50x50?text=Tim&bg=yellow" },
            { name: "Morgan Freeman", imageUrl: "https://via.placeholder.com/50x50?text=Morgan&bg=purple" },
            { name: "Bob Gunton", imageUrl: "https://via.placeholder.com/50x50?text=Bob&bg=orange" }
        ]
    },
    {
        name: "Pulp Fiction",
        posterUrl: "https://via.placeholder.com/300x440?text=Pulp+Fiction",
        actors: [
            { name: "John Travolta", imageUrl: "https://via.placeholder.com/50x50?text=John&bg=cyan" },
            { name: "Samuel L. Jackson", imageUrl: "https://via.placeholder.com/50x50?text=Samuel&bg=magenta" },
            { name: "Uma Thurman", imageUrl: "https://via.placeholder.com/50x50?text=Uma&bg=lime" }
        ]
    },
    {
        name: "The Godfather",
        posterUrl: "https://via.placeholder.com/300x440?text=Godfather",
        actors: [
            { name: "Marlon Brando", imageUrl: "https://via.placeholder.com/50x50?text=Marlon&bg=teal" },
            { name: "Al Pacino", imageUrl: "https://via.placeholder.com/50x50?text=Al&bg=pink" },
            { name: "James Caan", imageUrl: "https://via.placeholder.com/50x50?text=James&bg=brown" }
        ]
    },
    {
        name: "Movie Without Actors",
        posterUrl: "https://via.placeholder.com/300x440?text=No+Actors",
        actors: []
    }
];

// 3. Create a function `renderMovies()`
function renderMovies() {
    movieListContainer.innerHTML = '';

    if (movies.length === 0) {
        movieListContainer.textContent = 'No movies to display yet.';
        return;
    }

    const ul = document.createElement('ul');

    movies.forEach(movie => {
        const li = document.createElement('li');
        li.classList.add('movie-item');

        const posterImage = document.createElement('img');
        posterImage.src = movie.posterUrl;
        posterImage.alt = `Poster for ${movie.name}`;

        const textContentDiv = document.createElement('div');
        textContentDiv.classList.add('movie-item-content');

        const movieName = document.createElement('h3');
        movieName.textContent = movie.name || 'Unnamed Movie';

        const actorDetailsDiv = document.createElement('div');
        actorDetailsDiv.classList.add('actor-details');
        actorDetailsDiv.classList.add('hidden'); // Hidden by default
        
        // Populate actorDetailsDiv
        actorDetailsDiv.innerHTML = ''; // Clear any previous content (like the old p tag)

        if (movie.actors && movie.actors.length > 0) {
            const actorsHeading = document.createElement('h4'); // Optional heading
            actorsHeading.textContent = 'Cast:';
            actorDetailsDiv.appendChild(actorsHeading);

            movie.actors.forEach(actor => {
                const actorEntryDiv = document.createElement('div');
                actorEntryDiv.classList.add('actor-entry');

                const actorImage = document.createElement('img');
                actorImage.src = actor.imageUrl;
                actorImage.alt = `Photo of ${actor.name}`;

                const actorNameSpan = document.createElement('span');
                actorNameSpan.textContent = actor.name;

                actorEntryDiv.appendChild(actorImage);
                actorEntryDiv.appendChild(actorNameSpan);
                actorDetailsDiv.appendChild(actorEntryDiv);
            });
        } else {
            const noActorsP = document.createElement('p');
            noActorsP.textContent = 'Actor information not available.';
            actorDetailsDiv.appendChild(noActorsP);
        }

        li.appendChild(posterImage);
        textContentDiv.appendChild(movieName);
        textContentDiv.appendChild(actorDetailsDiv); 
        li.appendChild(textContentDiv);
        
        ul.appendChild(li);

        li.addEventListener('click', () => {
            const detailsToToggle = li.querySelector('.actor-details');
            if (detailsToToggle) {
                detailsToToggle.classList.toggle('hidden');
            }
        });
    });
    movieListContainer.appendChild(ul);
}

// 4. Call `renderMovies()` once at the end of the script
renderMovies();
