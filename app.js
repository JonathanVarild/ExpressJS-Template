// Import dependencies
const express = require("express");
const vhost = require("vhost");

// Create app for the top-level domain
const app = express();

// Launch all websites.
const api = require("./routes/api.js")
const dynamic = require("./routes/dynamic.js")
const main = require("./routes/main.js")

// Domain variable.
var domainName = "test.com"

// Check if we are running in production or development.
if (process.platform != "linux") {

	// Set the domainName to localhost. (Use chrome or host configuration to make use of http://subdomain.localhost/)
	domainName = "localhost"

	// Print our platform.
	console.log("Running in development mode");

}
else {

	// Print our platform.
	console.log("Running in production mode");

}

// Mount main website with static subdomain for www.
app.use(vhost(`${domainName}`, main))
app.use(vhost(`www.${domainName}`, main))

// Mount api subdomain.
app.use(vhost(`api.${domainName}`, api))

// Mount dynamic subdomains.
app.use(vhost(`*.${domainName}`, dynamic))

// Add route for non-existing routes.
app.get("*", (req, res) => {
	res.sendStatus(404, "Subdomain does not exist.");
});

// start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running at 127.0.0.1:${PORT}`));