# ToDo-Planner
This is a React project built in 24hrs of worktime, by David Breyer

---

## Installation

### Prerequisites
Install Node.js in your system and make sure its installed by typing node -v in your terminal.

### Step-By-Step installation steps
<details>
<summary>
Clone the project
</summary>
1. Navigate into a directory/folder of your choice<br><br>
2. execute following command:

```
git clone https://github.com/D4veDev/ToDo-Planner.git
```
This will download the remote repository into your current directory in a folder that has the same name as the repo.
</details>

<details>
<summary>
Install all dependencies
</summary>
1. Run the following command in the "ToDo-Planner folder"


```
npm install
```
This will install all modules listed in `package.json` into a folder called `node_modules`.
We have to execute this command to get access to the react library, babel ( a javascript transpiler ) and more

</details>

<details>
<summary>
Run the project
</summary>
Run the following command in the "ToDo-Planner folder"

```
npm run start
```
This is a command that is defined in the `package.json` file in line 8.

Webpack (which is what you technically run in the above command) will use Babel
to translate all of the fancy ES6 javascript code into (not-so-fancy) ES5 code.
This is because your browser and NodeJs need to understand the code, and ES6 is not supported yet 

Webpack will also go through your css and other files, but...

out-of-the-box, webpack only understands Javascript and JSON.
With a loader, you can translate another type of file to a format that webpack understands and can work with.
(They are all defined in webpack.config.js)

For more information about Webpack and Babel, have a look here: <br> `https://dev.to/getd/wtf-are-babel-and-webpack-explained-in-2-mins-43be` <br><br>
For a detailed introduction to webpack, look here: <br>`https://www.smashingmagazine.com/2021/06/getting-started-webpack/` <br><br>
For a detailed introduction to babel, look here <br>`nicholasjohnson.com/blog/what-is-babel/` <br><br>

Lastly, open a browser of your choice, and go to `localhost:8080`

</details>

---
