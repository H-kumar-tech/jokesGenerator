document.addEventListener("DOMContentLoaded", function() {
    const jokeContainer = document.querySelector(".joke");
    const btn = document.querySelector(".btn");
    const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

    let getJoke = () => {
        jokeContainer.classList.remove("fade");
        fetch(url)
        .then(data => data.json())
        .then(item => {
            jokeContainer.textContent = `${item.joke}`;
            jokeContainer.classList.add("fade");
        })
        .catch(error => console.error('Error fetching joke:', error));
    };

    btn.addEventListener("click", getJoke);
    getJoke(); // Fetch a joke on page load
});
