# Sequelize + Express

This is my fork Sequelize + Express where I made a simple API with SQLite and Express with Swagger as frontend tool to use it

## Instructions

* Install dependencies with `npm install` or `yarn install`
* Seed SQLite database with `npm run setup-example-db`
* Run the express server with `npm start`
* Once you see "Express server started on port 8080" in console, open your browser to `localhost:8000/api/docs` to use Swagger UI to use endpoints
* Alternatively you could use these manually
	* `localhost:8000/api/users` (GET)  Grabs all users.  Note optional query parameters offset and limit can be used for pagination
	* `localhost:8000/api/friends/{id}` (GET) Grabs friendlist with id of user 
	

## License

MIT
