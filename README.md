
# Movie Finder API

A RESTful backend server built with Node.js and Express that acts as an intermediary to fetch and serve movie data from the external OMDb API. This project demonstrates core backend skills including routing, controller structure, making asynchronous HTTP requests, and handling environment variables securely.

## Tech Stack
* **Runtime:** Node.js
* **Framework:** Express.js
* **HTTP Client:** Axios
* **Configuration:** dotenv

## Project Structure
The application follows a modular architecture, separating routing logic from business logic:
* `server.js` — Application entry point and middleware configuration.
* `routes/movieRoutes.js` — API endpoint definitions.
* `controllers/movieController.js` — Business logic, validation, and external API requests.

## Installation & Local Setup

Follow these step-by-step instructions to clone, configure, and run the project locally on your machine.

*Prerequisites:* Ensure you have Node.js installed on your computer. You can check your version by running:
node -v

**Step 1: Clone the Repository**
Clone this repository to your local machine using Git and navigate into the project directory:
git clone https://github.com/natalymelnichuk/movie-finder-api
cd movie-finder-api

**Step 3: Configure Environment Variables**
This application requires an OMDb API Key and a PORT number to run locally.
1. *Get an OMDb API Key:* Obtain a free API key at omdbapi.com/apikey.aspx. (Be sure to click the activation link sent to your email).
2. *Create a .env file:* In the root directory of the project, create a new file named .env.
3. *Add the environment variables:* Copy the template below (or from .env.example) into your new .env file and replace YOUR_ACTUAL_OMDB_API_KEY with your personal OMDb API key:
Server Port
PORT=3000

External OMDb API Credentials
OMDB_API_KEY=YOUR_ACTUAL_OMDB_API_KEY

**Step 4: Start the Server**
Run the following command in your terminal to start the Node.js server:
node server.js

## API Endpoints

1. Search Movies by Title
⋅⋅⋅⋅* HTTP Method: GET
⋅⋅⋅⋅* Endpoint: /api/search
⋅⋅⋅⋅* Query Parameter: title (required)
⋅⋅⋅⋅* Example URL: http://localhost:3000/api/search?title=batman
⋅⋅⋅⋅* Response: Returns an object containing search results matching the query title.
⋅⋅⋅⋅* Validation: Returns a 400 Bad Request status if the title query parameter is missing.

2. Get Detailed Information by IMDb ID
⋅⋅⋅⋅* HTTP Method: GET
⋅⋅⋅⋅* Endpoint: /api/movies/:id
⋅⋅⋅⋅* URL Parameter: id (IMDb ID, e.g., tt0372784)
⋅⋅⋅⋅* Example URL: http://localhost:3000/api/movies/tt0372784
⋅⋅⋅⋅* Response: Returns detailed movie metadata for the specified IMDb ID.

## Error Handling

⋅⋅⋅⋅* **Validation Errors (400 Bad Request):** Sent when required parameters are omitted.

⋅⋅⋅⋅* **Server/API Errors (500 Internal Server Error):** Unhandled operational errors or external API failures are safely caught using try...catch blocks and returned as JSON error responses.




