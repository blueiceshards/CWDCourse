const largeNumber = 356;

module.exports = {
    largeNumber: largeNumber
};
/* 
we can create our own modules, e.g. largeNumber, but node also has built in modules like

1. fs => filesystem => e.g. require('fs').readFile;
2. http => modules to build the server. these modules are without the pack, it just looks like that.
3. package (from npm)

one of his fav packages are nodemon. 

nodemon is a dev dependency i.e. only used when developing. when we actually release this app or this server, it won't be included because nodemon is only for our enjoyment while developing. 

nodemon -> changes outputs saved changes immediately in terminal. so don't have to keep running node.script.js command. if you make mistakes, it'll let you know right off the bat. 

fish:
touch .gitignore; and echo "node_modules/" >> .gitignore; and git rm -r --cached node_modules ; git status

important:
npm install nodemon --save-dev (change package.json start": "nodemon server.js" )
npm install express

//How to set up .gitignore//

Use the universal one-liner in terminal in the project directory:

touch .gitignore && echo "node_modules/" >> .gitignore && git rm -r --cached node_modules ; git status

It works no matter if you've created a .gitignore or not, no matter if you've added node_modules to git tracking or not.

Then commit and push the .gitignore changes.

Explanation

touch will generate the .gitignore file if it doesn't already exist.

echo and >> will append node_modules/ at the end of .gitignore, causing the node_modules folder and all subfolders to be ignored.

git rm -r --cached removes the node_modules folder from git control if it was added before. Otherwise, this will show a warning pathspec 'node_modules' did not match any files, which has no side effects and you can safely ignore. The flags cause the removal to be recursive and include the cache.

git status displays the new changes. A change to .gitignore will appear, while node_modules will not appear as it is no longer being tracked by git.

*/