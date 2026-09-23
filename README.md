
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
