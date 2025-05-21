// JavaScript code for movie list app
console.log("script.js loaded");

// 1. Select the DOM element
const movieListContainer = document.getElementById('movie-list-placeholder');

// 2. Populate the `movies` array with at least 3 sample movie objects.
let movies = [
    {
        name: "Inception",
        actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"]
    },
    {
        name: "The Shawshank Redemption",
        actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"]
    },
    {
        name: "Pulp Fiction",
        actors: ["John Travolta", "Samuel L. Jackson", "Uma Thurman"]
    },
    {
        name: "The Godfather",
        actors: ["Marlon Brando", "Al Pacino", "James Caan"]
    }
];

// 3. Create a function `renderMovies()`
function renderMovies() {
    // Clear the current content
    movieListContainer.innerHTML = '';

    if (movies.length === 0) {
        movieListContainer.textContent = 'No movies to display yet.';
        // The #movie-list-placeholder already has styles for centering text,
        // so this message should appear as styled in style.css
    } else {
        const ul = document.createElement('ul');
        ul.style.listStyleType = 'none'; // Remove default list styling
        ul.style.padding = '0'; // Remove default padding
        ul.style.display = 'grid'; // Use grid for layout
        ul.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))'; // Responsive grid
        ul.style.gap = '1em'; // Gap between grid items

        movies.forEach(movie => {
            const li = document.createElement('li');
            li.classList.add('movie-item'); // Use the class styled in style.css

            const movieName = document.createElement('h3');
            movieName.textContent = movie.name || 'Unnamed Movie';

            const actorsParagraph = document.createElement('p');
            const actorsLabel = document.createElement('strong');
            actorsLabel.textContent = 'Actors: ';
            actorsParagraph.appendChild(actorsLabel);

            if (movie.actors && movie.actors.length > 0) {
                actorsParagraph.appendChild(document.createTextNode(movie.actors.join(', ')));
            } else {
                actorsParagraph.appendChild(document.createTextNode('Not specified'));
            }

            li.appendChild(movieName);
            li.appendChild(actorsParagraph);
            ul.appendChild(li);
        });
        movieListContainer.appendChild(ul);
    }
}

// 4. Call `renderMovies()` once at the end of the script
renderMovies();

// Example of how to add a movie and re-render (for testing purposes, can be removed later)
/*
movies.push({ name: "Another Movie", actors: ["Actor A", "Actor B"] });
renderMovies();
*/
