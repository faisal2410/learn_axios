// 👉Sending HTTP requests using Axios in JavaScript is an incredibly useful skill, especially for interacting with APIs and fetching data. Axios is a promise-based HTTP client for JavaScript that can be used in both the browser and Node.js environments. Below, you'll find a detailed explanation and code examples for sending various types of HTTP requests using Axios.

// ✅Installing Axios
// First off, you'll need to add Axios to your project. If you're working with Node.js, you can install it via npm:


// npm install axios
// Or if you're working on a client-side project, you can include it directly in your HTML:


// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>



// ✅Making a Simple GET Request
// Here's the most straightforward example of a GET request:


// const axios = require('axios'); // If you're using Node.js

// axios.get('https://api.example.com/items')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error('There was an error!', error);
//   });


//✅ Making a POST Request
// A POST request is used to submit data to a specified resource:


// const item = {
//   name: 'New Item',
//   description: 'Description goes here'
// };

// axios.post('https://api.example.com/items', item)
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error('There was an error!', error);
//   });


//✅ Sending Request Headers
// You can include HTTP headers in your requests:


// axios.get('https://api.example.com/items', {
//   headers: {
//     'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
//   }
// })
// .then(response => {
//   console.log(response.data);
// })
// .catch(error => {
//   console.error('There was an error!', error);
// });


//✅ Handling Responses
// Axios responses contain several properties, including:

// data: The payload returned from the server
// status: The HTTP status code from the server response
// headers: The headers that the server responded with
// Here's how you might access these:


// axios.get('https://api.example.com/items')
//   .then(response => {
//     console.log('Data:', response.data);
//     console.log('Status:', response.status);
//     console.log('Headers:', JSON.stringify(response.headers));
//   })
//   .catch(error => {
//     console.error('There was an error!', error);
//   });


// ✅Error Handling
// Axios provides a neat way to catch errors:


// axios.get('https://api.example.com/nonexistent')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     if (error.response) {
//       // The request was made and the server responded with a status code not in the range of 2xx
//       console.error('Data:', error.response.data);
//       console.error('Status:', error.response.status);
//       console.error('Headers:', error.response.headers);
//     } else if (error.request) {
//       // The request was made but no response was received
//       console.error('Request:', error.request);
//     } else {
//       // Something happened in setting up the request and triggered an Error
//       console.error('Error:', error.message);
//     }
//   });


//✅ Parallel Requests
// You can execute multiple requests in parallel, which can be quite useful:


// Promise.all([
//   axios.get('https://api.example.com/items1'),
//   axios.get('https://api.example.com/items2')
// ])
// .then(responseArr => {
//   console.log('items1:', responseArr[0].data);
//   console.log('items2:', responseArr[1].data);
// })
// .catch(error => {
//   console.error('There was an error!', error);
// });


// There you have it, an exhaustive guide to making HTTP requests with Axios. Would you like to delve into more advanced topics?

//  Let's dive into some more advanced functionalities offered by Axios.

//✅ Canceling a Request
// There might be scenarios where you'd want to cancel a request. Axios provides a cancellation feature, which can be quite useful. Here's how you can cancel a request:


// const axios = require('axios');
// const CancelToken = axios.CancelToken;
// const source = CancelToken.source();

// axios.get('https://api.example.com/items', {
//   cancelToken: source.token
// })
// .then(response => {
//   console.log(response.data);
// })
// .catch(error => {
//   if (axios.isCancel(error)) {
//     console.log('Request was cancelled:', error.message);
//   } else {
//     console.error('There was an error!', error);
//   }
// });

// // Cancel the request
// source.cancel('Operation cancelled by the user.');


// ✅Interceptors
// Axios allows you to intercept requests and responses before they are processed. This is incredibly useful for logging, modifying requests, and handling errors globally.

// Here's a simple example:


// // Add a request interceptor
// const requestInterceptor = axios.interceptors.request.use(config => {
//   config.headers['Authorization'] = 'Bearer YOUR_ACCESS_TOKEN';
//   return config;
// }, error => {
//   return Promise.reject(error);
// });

// // Add a response interceptor
// const responseInterceptor = axios.interceptors.response.use(response => {
//   // Do something with the response
//   return response;
// }, error => {
//   // Handle the error
//   return Promise.reject(error);
// });

// // If you need to remove the interceptors later on
// axios.interceptors.request.eject(requestInterceptor);
// axios.interceptors.response.eject(responseInterceptor);


// ✅Custom Axios Instance
// You can create an instance of Axios with custom configuration. This is useful when you have multiple services with different settings:


// const apiClient = axios.create({
//   baseURL: 'https://api.example.com',
//   timeout: 1000,
//   headers: {'Authorization': 'Bearer YOUR_ACCESS_TOKEN'}
// });

// apiClient.get('/items')
//   .then(response => console.log(response.data))
//   .catch(error => console.error('There was an error!', error));


// ✅Request Config
// You can specify custom behaviour by passing a config object:


// axios({
//   method: 'post', // You can specify the method
//   url: 'https://api.example.com/items',
//   data: {
//     name: 'New Item',
//     description: 'Description goes here'
//   },
//   timeout: 5000, // Set the timeout
//   headers: {
//     'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
//   }
// })
// .then(response => console.log(response.data))
// .catch(error => console.error('There was an error!', error));


//✅ URL Parameters
// When making GET requests, you may need to include parameters in the URL. Axios provides a way to do this neatly:


// axios.get('https://api.example.com/items', {
//   params: {
//     limit: 5,
//     category: 'Books'
//   }
// })
// .then(response => console.log(response.data))
// .catch(error => console.error('There was an error!', error));


//✅ Transforming Requests and Responses
// Axios allows you to transform the request and response data. You can manipulate the data before sending it to the server or after receiving it:


// axios.post('https://api.example.com/items', {
//   name: 'New Item'
// }, {
//   transformRequest: [(data, headers) => {
//     // Transform data before sending
//     data.name = data.name.toUpperCase();
//     return JSON.stringify(data);
//   }],
//   transformResponse: [(data) => {
//     // Transform data after receiving
//     return JSON.parse(data);
//   }]
// })
// .then(response => console.log(response.data))
// .catch(error => console.error('There was an error!', error));

// That covers most of the advanced topics for Axios. If you have more specific questions or require further clarifications, do let me know. Happy coding!





