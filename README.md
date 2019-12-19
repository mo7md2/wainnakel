
## Description
This is a simple react app that show user nearby restaurant .

## what is included

 - [React](https://github.com/facebook/react)
 - [React Google Maps](https://github.com/tomchentw/react-google-maps)
 - [tailwindcss](https://github.com/tailwindcss/tailwindcss)
 - [PostCSS Purgecss](https://github.com/FullHuman/postcss-purgecss) optimizes the build by removing unused css  

## Demo
[https://where-to-eat-201912.herokuapp.com/](https://where-to-eat-201912.herokuapp.com/)

## Available Scripts

**Google api key is not required for development purpose
but if you have one** 
in the main directory create `.env` file then add this line

	REACT_APP_GOOGLE_KEY="YOUR API KEY"
	
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


### `npm run build`

**For not windows user you may want to check this script**


> :warning: **If you are not a windows user**: you may want to check this script


/package.json
`"prebuild": "SET NODE_ENV=production&& npm run build:styles"`


Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



