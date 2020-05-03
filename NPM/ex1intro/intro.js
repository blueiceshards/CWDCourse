// NPM - created to share JS code -> packages (or modules) contain package.json file (meta file that describes the package) and js file. 

/* 

We can use pieces of code that already exist to build our product and startt our project. NPM -> website with a searchbar like google and we can search for packages. these packages come from the NPM registry ->  anybody can submit these packages/modules. package = small JS files that do one thing really well. then, combine different packages to get functionality so that we don't have to redo the work.

Benefits of NPM registry:
1. expertise from others


Downside:
1. not all packages are good code cos everyone can upload stuff. -> there is an art to get good packages with experience
2. adding more bytes to your project -> makes your prject biger. each file must be sent from server to browser. wewant to minimize the size of our projects so that we can build fast webapps. 

Yarn - still uses NPM registry. like NPM, it's a tool to get things from the NPM registry. both are similar. 

3 types of packages NPM
- packages you can use on browser (front end) you can dl jquery and front end scripts
- new commands to be used on command line
- node.js (backend) he will show us node packages we can use. npm stands for node package manager. it's all the same thing, all works the same, just scripts we can use that other people have written.

3 must do things when starting a project:
1. HTML + CSS + JS file
2. Github Repo + Git
3. Package.json file => just a format, look slike a JS object except it has doublequotes for proerty. 

live-server: if you type live-server in terminal while in the background generator folder, it will automatically load thew ebpage. it creates a live server for you and watches for changes. it changes live without refreshing. 

http://127.0.0.1:8080 is the default local host. localhost:8080 also works in URL bar.

lodash -> an extension of JS. more functions that you can run. local installations => all these packages live in the newly created node_modules folder, and you also added lodash to your json file. 

NPM - node package manager, allowed us to accept node syntax but not for browser (e.g. require)

browserify allowed us to use the required syntax for node.js on the browser. all we had to do was to input our script files into browserify and it outputs the bundle for us. we set up a system to import all the things to make our code better. 

but now, bundle.js is huge because we included the entire library. it's important to assess as a team if you wanna install each package.

dependences = lodash. we also need to always makes ure that our website and apps work with this particular verion of lodash.

package.json file is also great -> documentation for what packages yoru project depends on (big projects ~100 dependencies). great for people joning the team. and also look at version and can update from the json file.  4.17.4 (.4- patch release for bugs) (.17 minor release) (4 major release may be quite different and can break things that depend on previous version)

NPM biggest benefit -> easier to share with other developers. dont need to add script tags in html for these now. for developer, in order to DL all the packages or dependencies, you don't need to put node modules in github repo. because all you need is the pacakage.json file. 

just delete the node_modules, and run npm install in the terminal (as long as you have the package.json file) in the correct folder to install all the required dependencies. tts why we dont need node modules on github we have it in pacakge.json

there is another type of dependency -> what background generator depends on. another type: dev dependencies, packages that are only needed for development and testing. it will never be shipped to a website so that an end user can see. "dev dependencies" in json file taken out automatically when release product so not add weight to project.

json "scripts" npm run test
npm  scripts allow you to run commands from package.json files. 
"build": "browserify script.js > bundle.js && live-server"

then type build in terminal

NPM very useful tool -> use alot in day to day. next section; real life app with react. we now have a compelte view of front end. 

At the end of the reacct project, we will have a Robofriends project on github. One of the files of the project is a package.json file. this packages has dependencieson some versions o flibrarys and tools that we use. NPM allows us to use this packjage.json file 

our version will be different from the instructors'. when we build everything we can do an update so we can keep our projects as up to date as possible. why? -> robofriends project security 0 open alerts 24 closed ones. some are high and critical severity. github repo -> might see a warning -> potential security vulnerabilitys in your dependencies i.e. in package.json file. some libraries outdated tt should be updated cos of security udpates. github -> automated security fixes -> will make a pull request to update for you automatically. 

when we build our projectt with react, we will upgrade a bunch of things at the end of the project to show you the process. npm semver -> versions of packages. semver.npmjs.com. good practice to update packages for security issues. 

*/