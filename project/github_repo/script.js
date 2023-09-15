// const axios = require('axios');

// DOM elements
const fetchDataButton = document.getElementById('fetchData');
const repositoriesList = document.getElementById('repositories');

const apiUrl = 'https://api.github.com/users/faisal2410/repos'; // 
const perPage = 100; // Number of repositories per page (GitHub allows up to 100 per page)

// Function to fetch repositories recursively until all are retrieved
async function fetchAllRepositories(url, page, allRepositories) {
  try {
    const response = await axios.get(url, {
      params: {
        per_page: perPage, // Number of repositories per page
        page: page, // Page number
      },
    });

    // Append the fetched repositories to the array
    allRepositories.push(...response.data);

    // Check if there are more pages
    const nextPage = response.headers.link.match(/<([^>]+)>;\s*rel="next"/);
    if (nextPage) {
      const nextUrl = nextPage[1];
      return fetchAllRepositories(nextUrl, page + 1, allRepositories);
    }

    return allRepositories;
  } catch (error) {
    throw error;
  }
}

// Usage
async function main() {
  try {
    const allRepositories = await fetchAllRepositories(apiUrl, 1, []);

    // Process and display all fetched repositories
    allRepositories.forEach((repo) => {
        const listItem = document.createElement('li');
        listItem.textContent = repo.name;
        repositoriesList.appendChild(listItem);

      console.log(repo.name); // Log the repository name
    });

    console.log(`Total Repositories: ${allRepositories.length}`);
  } catch (error) {
    console.error('Error:', error);
  }
}


// Event listener for the "Fetch Repositories" button
fetchDataButton.addEventListener('click', main);
