# invidilink-react

A mobile-first React 17 component to replace URLs with valid invidio.us instances URLs. For example:

Submitted URL: `https://www.youtube.com/watch?v=8D-rWP3c088`
Results:

- `https://invidious.snopyta.org/watch?v=8D-rWP3c088`
- `https://yewtu.be/watch?v=8D-rWP3c088`
- `https://invidious.tube/watch?v=8D-rWP3c088`
- `https://invidious.xyz/watch?v=8D-rWP3c088`
- `https://invidious.kavin.rocks/watch?v=8D-rWP3c088`
- `https://invidiou.site/watch?v=8D-rWP3c088`

Features a copy button for easy use on mobile.

API calls may be cached to reduce network calls (default 5 minutes).

## How to run on localhost

First install dependencies:

```sh
npm install
```

To run in dev mode mode:

```sh
npm start
```

Then go to http://localhost:8080

To create a production build:

```sh
npm run build
```

## Testing

To run unit tests:

```sh
npm test
```

## Credits

1. Scaffolding made with [createapp.dev](https://createapp.dev/)

2. Copy Icon provided Sebastien Gabriel http://sebastien-gabriel.co under Creative Commons Licence (https://commons.wikimedia.org/wiki/File:Copy-outlined-circular-button.svg)
