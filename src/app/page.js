import fetch from 'node-fetch';


const apiUrl = 'https://dogapi.dog/api/v2/facts?limit=1';


// Make a GET request to the API
fetch(apiUrl)
  .then(response => {
    // Check if the response is successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON in the response
    return response.json();
  })
  .then(data => {
    // Check if 'data' has the expected structure
    if (data && Array.isArray(data.data) && data.data.length > 0) {
      // Access the first fact in the array
      const firstFact = data.data[0];

      // Access the 'body' attribute
      const factBody = firstFact.attributes.body;

      // Display the factBody (you can log it or send it to the client)
      console.log('Dog Fact:', factBody);
    } else {
      // Display an error message if the data structure is invalid
      console.error('Invalid data structure in the API response');
    }
  })
  .catch(error => {
    // Display an error message if there's an issue fetching data
    console.error('Error fetching data:', error.message);
  });


export default function Home() {
  return (
    <main className="pt-32 px-5 text-center">
       <div id="factContainer"><p>Dog Fact:</p></div>

    <div className="max-w-[750px] mx-auto">
      <h1 className="text-4xl font-bold bg-orange-500 p-5">The Trouble Twins</h1>
      <p className="leading-8 bg-slate-200 p-2">
        Maximus and Augustus are two brothers of the yorkie terrier species. Their predecessor in our house, Blaze, was also a yorkie terrier, but he was a lot smaller than these two are.
      </p>
    </div>
  </main>
  )
}
