# Streamline - A Livestream Tickets Application

## Introduction

In the final capstone group project of the full stack coding bootcamp, our team took on the challenge of conceptualising a functional web application with a plausible use case, and then leveraging the entire MERN stack to build it. The application revolves around the idea of managing access to video content streams, in a simple, low-barrier-to-entry way. Access to content is mediated via tickets and access codes. 

It was the second major technical demonstration we created as a trio (see also [ZodiacQuest](https://github.com/jacobpostill/ZodiacQuest)), and by now the team has coalesced into something greater than the sum of its parts. [Hire us all](#credits)!

## Table of Contents

- [Installation](#installation-and-deployment)
- [Usage](#usage)
- [Technology](#technology)
- [Future Directions](#future-directions)
- [Credits](#credits)
- [License](#license)

## Installation and Deployment

The application is [deployed](https://livestream-tickets.herokuapp.com/). From its inception, it has been auto-built via the Github-to-Heroku deployment pipeline, as a nod to the ethos of CI/CD. 

It may be forked locally from the [github repository](https://github.com/tadcos29/team-8-project-3), in which case a review the server/config/connection.js file with an eye to environment variables is advised.

As always, `npm install` will provide the dependencies.

## Usage

The prospective user will be presented with login/sign-up options, as per usual. Upon registering, they will be redirected to the main 'user home' page, populated with content presented as discrete events. They may choose to purchase (or simply obtain, for free events) tickets to these events, which are linked to broadcast times set by the events' creators.


![image](https://user-images.githubusercontent.com/121476474/229638085-866dbb31-e723-4a64-8676-e8b39c153559.png)


When an event goes live, its live status is reflected by the appearance of a button on its corresponding ticket in the Tickets page accessible through the `Your Tickets` sidebar menu item. The user may use it to navigate to the livestream.


![image](https://user-images.githubusercontent.com/121476474/229639750-9c8d597f-342b-43a4-b2fe-cc5dd3918e55.png)


Additionally, a user may become a creator with a click of the `Create Event` button:


![image](https://user-images.githubusercontent.com/121476474/229638934-dd01154a-e2da-4611-bef9-82b3945b3939.png)


A creator may use access keys to further gate access to various events they create on the website. A user entering the appropriate access key on the main page will have that access key associated with their account and will be able to see the hidden events to which the key has been linked. The creator may review and modify the characteristics of an event from their `Your Events` page. The `Profile` page furnishes basic profile updates and the opportunity to upload small (<1MB) user avatars.

![image](https://user-images.githubusercontent.com/121476474/229641715-cdc52629-6a80-48fd-8d66-3a9694570892.png)


## Technology

This application uses a [Mongo database](https://www.mongodb.com/) (MongoDB Atlas serves as the database platform), [Express.js](https://expressjs.com/) for connectivity; and [React](https://react.dev/) for the front-end architecture. Its database access is mediated through GraphQL/Apollo Client, by way of the [Apollo Server](https://www.apollographql.com/docs/apollo-server/) integrated with Express. The query/mutation resolvers are built with the [mongoose](https://mongoosejs.com/) library. It also uses [bcrypt](https://www.npmjs.com/package/bcrypt) for credentials encryption, [JWT](https://jwt.io/) for token protection. For functionality proof-of-concept, the [Twitch API](https://dev.twitch.tv/) is used to demonstrate in-app streaming, while the [Stripe API](https://stripe.com/docs/api) in test mode is used to demonstrate payments. Finally, Antd, Tailwind, Bootstrap, and RSuite libraries are used for view styling, in addition to handcrafted CSS.

## Future Directions

The coding bootcamp being true to its name, this project took just under five days to build, and the limitations imposed by that deadline are evident in its scope. We sought to turn its simplicity into an asset, but there are certain obvious paths to improvement:

* Making the UX more intuitive (events and tickets more immediately obvious and less generic) possibly including a brief walkthrough for new users
* Optimising queries and caching - at the moment, they are too generic and too much data is transferred
* Improving database and storage solutions
* Incorporating proprietary streaming without tying the app to a major third-party API
* Quality of user experience improvements such as proprietary chat and social functions, creator inboxes, etc.


## Credits

The project was created by [Melissa Taylor](https://github.com/melissataylor1), [Jacob Postill](https://github.com/jacobpostill), and [Taddeo Costanzo](https://github.com/tadcos29), developers aspirant from Toronto and Montreal. The authors are grateful for the supervision of our instructors at the University of Toronto Full Stack Coding Bootcamp, notably [Sal Hobbi](https://github.com/shobbi-trilogy) and [Mark Elliott](https://github.com/melliott7264).

## License

This project is licensed under the [MIT License](https://www.mit.edu/~amini/LICENSE.md)
