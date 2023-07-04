# Venty
## Online community focused on mental health

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Venty is a NextJS powered website that can be used to write confessions and vent about anything under the sun. Users can see other's vents as well and can comment under posts.



## Features

- Create and delete account (Google and Facebook Sign in enabled)
- Create and edit 'Vents' to express yourself.
- Each Vent has a Time-stamp
- Users can see vents posted by others on the Home Page 
- The About page expains the community guidelines
- Functionality available to delelte an account forever, along with the posts.
- Hosted on Vercel and Firebase

Check out other stuff i've worked on at [Github]



## Tech

Dillinger uses a number of open source projects to work properly:

- [NextJS] - Framework for ReactJS
- [Firebase] - NoSQL Document based Database powered by Google
- [TailwindCSS] - Makes writing CSS convinient
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework 
- [Vercel] - for hosting the website
- [Chakra UI] - for ready to use aesthetic UI components

And of course Venty itself is open source.

## Installation

Venty requires [Node.js](https://nodejs.org/) v14+ to run.
## Create a .env.local file
 Create a project on firebase and populate the following variables
 
```sh
NEXT_PUBLIC_API_KEY=""
NEXT_PUBLIC_AUTH_DOMAIN=""
NEXT_PUBLIC_PROJECT_ID=""
NEXT_PUBLIC_STORAGE_BUCKET=""
NEXT_PUBLIC_MESSAGING_SENDER_ID=""
NEXT_PUBLIC_APP_ID=""
```

Install the dependencies and devDependencies and start the server.

```sh
npm i
npm run dev
```

## Development

Want to contribute? Great!
Create a pull request and start working!



## License

MIT

**Free Software!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [GIthub]: <https://github.com/nikhilpujar23>
   [NextJS]: <https://nextjs.org/>
   [Firebase]: <https://firebase.google.com/>
   [TailwindCSS]: <https://tailwindcss.com/>
   [Vercel]: <https://vercel.com/dashboard>
   [Chakra UI]: <https://chakra-ui.com/>
   [node.js]: <http://nodejs.org>
   
   [express]: <http://expressjs.com>
 
