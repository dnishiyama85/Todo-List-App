# TODO List App

## Development
- Using direnv:
    - Download latest version of direnv from https://github.com/direnv/direnv/releases

    For example,
```
$ wget -O direnv https://github.com/direnv/direnv/releases/download/v2.17.0/direnv.linux-amd64
```
    - chmod +x direnv
    - sudo mv direnv /usr/local/bin

Create .envrc file in the project root directory:
```
$ echo 'export PATH=$PATH:./node_modules/.bin' >> .envrc
```

- Start dev server
```
$ npm start
```

- Access from browser: http://192.168.0.10:3000


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

