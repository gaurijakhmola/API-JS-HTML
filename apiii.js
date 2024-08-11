document.getElementById('fetchButton').addEventListener('click', fetchUserData);

function fetchUserData() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous results

    const username = 'octocat'; // Example GitHub username

    fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // Display user data
            resultDiv.innerHTML = `
                <h2>${data.login}</h2>
                <img src="${data.avatar_url}" alt="Avatar" width="100">
                <p><strong>Followers:</strong> ${data.followers}</p>
                <p><strong>Public Repos:</strong> ${data.public_repos}</p>
                <p><strong>Bio:</strong> ${data.bio || 'No bio available.'}</p>
            `;
        })
        .catch(error => {
            // Handle errors
            resultDiv.innerHTML = `<p class="error">Error: ${error.message}</p>`;
        });
}
