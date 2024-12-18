// Define the API endpoint and request body
const apiUrl = 'https://api.skybooking.com/bookFlight';
const bookingData = {
  passengerName: 'John Doe',
  flightNumber: 'SK123',
  departureDate: '2024-12-25',
  returnDate: '2024-12-30',
  seatClass: 'economy',
  contactEmail: 'johndoe@example.com',
  paymentDetails: {
    cardNumber: '1234-5678-9876-5432',
    expiryDate: '12/24',
    cvv: '123'
  }
};

// Make the API call using fetch
fetch(apiUrl, {
  method: 'POST', // HTTP method
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN' // Replace with your actual token
  },
  body: JSON.stringify(bookingData) // Convert data to JSON format
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Booking failed');
    }
    return response.json(); // Parse the JSON response
  })
  .then(data => {
    console.log('Booking successful:', data);
  })
  .catch(error => {
    console.error('Error during booking:', error);
  });
