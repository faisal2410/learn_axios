// axios.get('https://dummyjson.com/products/1')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error('There was an error!', error);
//   });



//✅ Making a POST Request
// A POST request is used to submit data to a specified resource:

//   const body = {
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
// };

// axios.post('https://jsonplaceholder.typicode.com/posts', body)
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error('There was an error!', error);
//   });



//✅ Sending Request Headers
// You can include HTTP headers in your requests:


// axios.get('https://jsonplaceholder.typicode.com/posts', {
//   headers: {
//     'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
//   }
// })
// .then(response => {
//   console.log(response);
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


// axios.get('https://jsonplaceholder.typicode.com/posts')
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


// axios.get('https://jsonplaceholder.typicode.com/posts/nonexistent')
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
//   axios.get('https://jsonplaceholder.typicode.com/posts/1'),
//   axios.get('https://jsonplaceholder.typicode.com/posts/2')
// ])
// .then(responseArr => {
//   console.log('items1:', responseArr[0].data);
//   console.log('items2:', responseArr[1].data);
// })
// .catch(error => {
//   console.error('There was an error!', error);
// });



//✅ Canceling a Request
// There might be scenarios where you'd want to cancel a request. Axios provides a cancellation feature, which can be quite useful. Here's how you can cancel a request:



const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('https://jsonplaceholder.typicode.com/posts', {
  cancelToken: source.token
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  if (axios.isCancel(error)) {
    console.log('Request was cancelled:', error.message);
  } else {
    console.error('There was an error!', error);
  }
});

// Cancel the request
source.cancel('Operation cancelled by the user.');





