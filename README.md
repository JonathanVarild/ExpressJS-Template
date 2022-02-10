# ExpressJS-Template
Small template for structured ExpressJS routing with static and dynamic subdomains.

# Structure
Each subdomain is running in its own ExpressJS environment that is exported to the app.js application. The routing for these subdomains are then handled by a ExpressJS vhost configuration inside the app.js file. This file structure makes it easy to deploy a structured ExpressJS application with both static and dynamic subdomains, while also allowing connections to the root domain.

# Instructions
- Start in development mode: ```npm run dev```
- Start in production mode: ```npm start```

- The script will by default be using your real domain when running on Linux systems (production) and localhost when running on other systems (development). You can change the domain name by modifying the ```domainName``` variable in the app.js file.
- In order to make use of the subdomains locally, you are required to use Google Chrome or add the subdomains to your computer's host configuration.
- Trying to connect using SSL will reject the connection unless further configurations are made. This can be done using web server solutions such as Nginx.
- Application will by default run on ```localhost:3000```.
