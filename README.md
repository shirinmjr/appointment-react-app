# react-project


## Before you start

Check node verstopn `node -v`

To Update Node Version
Latest version:
`nvm install node --reinstall-packages-from=node`

Stable (LTS) version: (if currently in use)
`nvm install "lts/*" --reinstall-packages-from="$(nvm current)"`

check npm versnion `npm -v` (ok if it's higher than 5.2)

To update npm version:
`npm install -g npm`


## Create React App
Note: If it gives you strange errors, reinstall npm
* To create a new React project:
`npx create-react-app react-app`

* To start React app
`npm start`

* Install react router verstion 6
`npm install react-router-dom@6`

* Run React Test
`npm test`

* Create production build Application
`npm run build`

--------------------------------------------------------------------------------------------------------------
Dependencies:
-> To Install React Icon
`npm install react-icons --save`
- To import it tp your file 
`import { BiArchive } from "react-icons/bi";`

-> Tailwind CSS
To install: 
```
npm install -D tailwindcss
npx tailwindcss init
```
-> To install Craco
`npm install @craco/craco`
and add this script to package.json
```
"scripts":{
    "start" : "craco start",
    "build" : "craco build",
    "test" : "craco test",
    ...
    }
```
Add the paths to all of your template files in your tailwind.config.js file.
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
----------------------------------------------------------------------------------------------------------------

## Uninstall
To uninstall React App
`npm uninstall -g create-react-app`
