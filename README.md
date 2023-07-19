# Big Munny Photos Website (codename: Composition)

[![Static Badge](https://img.shields.io/badge/Link_to-Website-blue)](https://www.bigmunny.com/)

All the code for building and deploying bigmunny.com lives here. The website takes a two-step approach to delivering content:
1. A fast homepage with image previews for the portfolio
2. High-resolution links from the previews to allow web surfers to look more in detail

I built the website with Next.js primarily because of its image optimization capabilities. In conjunction with Vercel hosting, bigmoney.com has access to most of the latest and greatest tools for handling photo-rich pages.

## Tech Stack  Overview

| Framework | Testing | Hosting |
| --- | --- | --- |
| [![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/) [![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) | [![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)](https://www.cypress.io/) [![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/) |	[![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/) |

Next.js 13 and Tailwind formed the basis for the website and its UI. Jest runs the unit tests, and End-to-End testing is set up with Cypress. I made some attempts at hosting in different locations, but Vercel, so far, has been by far the easiest solution. Vercel is fully integrated with this repository for automatic CI/CD.

## Build

This repo uses typical node build commands to run the production server,

```
$ npm ci
$ npm run build
$ npm run start
```

## Test

### Unit Tests

For unit testing with Jest,
```
$ npm run test
```

### E2E Testing

Note: Cypress needs to connect to a running server to run tests. Run `$ npm run start` in a terminal and then run,
```
$ npm run cypress
```
in another.
