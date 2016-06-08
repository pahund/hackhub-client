# hackhub-client

Client-side code for HackHub, website for the eBay Classifieds Group TechHack Berlin 2016.

## Requirements

* [Node.js](https://nodejs.org/), at least version 6.2.0

## Installation

Install the software with npm:

```
npm install
```

## Running in Production

Just copy the files in the `/public` directory over to the http documents directory of your
favorite webserver, or create a symlink or something.

## Running in Local Dev Mode

```
npm start
```

This starts a webpack dev server on port 3000. Use your favorite browser to navigate to
[localhost:3000](http://localhost:3000).

*Note:* you also need to run the backend server to actually see anything. Refer to the 
[hackhub-server](https://github.com/pahund/hackhub-server) project to find out more about this.
