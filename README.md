
This is a simple react template generator 
after installing all the dependencies You need to add this lines of code into package.json
replace

"scripts": {
   “test”: "echo "Error: no test specified" && exit 1",
},

with

"scripts": {
       
    "dev": "webpack --mode development --watch",

    "build": "webpack --mode production",

    "start": "webpack serve --config webpack.config.js"
}
Add all the components in the /src/components folder
App.js is your main component.
