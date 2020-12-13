# invidi.link

A mobile-first React 17 component to replace URLs with valid invidio.us instances URLs.

For example:

Submitted URL: `https://www.youtube.com/watch?v=sbFAcHteZd8`
Results:

- `https://invidious.snopyta.org/watch?v=sbFAcHteZd8`
- `https://invidious.tube/watch?v=sbFAcHteZd8`
- `https://yewtu.be/watch?v=sbFAcHteZd8`
- `https://invidious.xyz/watch?v=sbFAcHteZd8`
- `https://invidious.kavin.rocks/watch?v=sbFAcHteZd8`
- `https://invidiou.site/watch?v=sbFAcHteZd8`

Features a copy button for easy use on mobile.

In the wild: https://invidi.link/

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

