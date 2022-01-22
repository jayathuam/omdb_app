# Aligent Case Study

### Setup

Using good old `NPM`

Install dependencies
```sh
$ npm install
```
How to run development server(http://server:3000)
```sh
$ npm start
```
How to run unit tests
```sh
$ npm test
```

Using `Yarn`

Install dependencies
```sh
$ yarn
```
How to run development server(http://server:3000)
```sh
$ yarn start
```
How to run unit tests
```sh
$ yarn test
```
### High Level solution and decisions
* Built on top of the React js. Used create-react-app as the boiler plate.
* Use [Emotion](https://emotion.sh/docs/introduction) to create styled components. This library was selected to maintain the simplicity and much easier to change styles based on the props.
* Use [React query](https://react-query.tanstack.com/overview) for data fetching management. This library is supporting caching, synchronizing and updating server state, support both GraphQL and REST APIs and many more.
* [Axios](https://www.npmjs.com/package/axios) for access the backend API.
* [Lodash Debounce](https://www.npmjs.com/package/lodash.debounce) for debounce the search input text. Default value 300ms.
* [React Input Range](https://www.npmjs.com/package/react-input-range) for year selector.
* [React Testing library](https://www.npmjs.com/package/react-input-range) for unit testing.
* [Eslint](https://eslint.org/) for code linting.
* `src/config.js` file for global configurations.
* `Local Storage` for save the watch list of the movies.
*  Added few `aria-labels` and `tab-indexes` to increase the Accessability.
* Web application is responsive to support mobile and tab devices.

### What I can improve further
*   At the moment OMDB api is not supporting for year intervals. So that feature is not working correctly in the UI. Hence year selection feature need to be revamped. 
*   100% unit tests.
*   Increase the code comments.
*   Improve Accessability attributes.
*   Improve data caching.
*   Improve UI/UX
*   Improve watch list feature.(Proposing a new page to manage watch list)
*   Offline support if there is a requirement.
