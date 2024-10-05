## livereload-webpack

> Localhost static website development environment for plain html, css and javascript files with live reload.
> Uses **webpack** + **webpack-dev-server**.


### Content

- [Dependencies](#dependencies)
- [Installation](#nstallation)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Usage with Docker](#usage-with-docker)
   - [Local-Built Development Image](#local-built-development-image)
- [Building Docker Images](#building-docker-images)
- [Other Notes](#other-notes)
   - [Debugging Webpack Apps in VSCode](#debugging-webpack-apps-in-vscode)
- [References](#references)


### Dependencies

The following dependecies are used for this project. Feel free to experiment using other dependencies and versions.

1. Windows 64-bit OS
2. NodeJS
	- node version 20.15.0
	- npm version 10.7.0
3. NodeJS webpack modules (installed via npm)
	- webpack 5.95.0
	- webpack-dev-server 5.1.0
	- webpack-cli 5.1.4
	- css-loader 7.1.2
	- style-loader 4.0.0


## Installation

1. Clone this repository.
`https://github.com/weaponsforge/livereload-webpack.git`

2. Install dependencies.
`npm install`

## Usage

These steps use **Node** to run the development app. Alternate development usage steps using Docker are available under the [Usage with Docker](#usage-with-docker) section.

1. Run the localhost static website development environment.<br>
`npm run dev`

2.  Edit the existing static files from the **./public** directory and wait for live reload. Your updates will reflect on the web browser.

3. To include new static website files on live reload:
	- Stop the localhost **dev** server.
	- Create new static (.js, .css) files inside the **./src** directory.
		- Import the new **.js** and **.css** files in **./src/index.js**
		- Javascript events may need to be attached to HTML DOM elements using `.addEventListener()` when using raw HTML files.
		- Encode new HTML files inside `new HtmlWebpackPlugin({ ... })` in **webpack.config.js**
		- Specific specific file types other than CSS and image files may need to have their node module dependency installed and included in **webpack.config.js**'s `module -> rules` part.
	- Re-start the **dev** server.<br>
`npm run dev`

4. Build the project for the production environment. Webpack generates static files in the **/dist** directory.<br>
`npm run build`

5. Run the production static website (does not use live reload).<br>
`npm run start`

## Available Scripts

### `npm start`

Starts a simple ExpressJS web server serving the static website app from is static middleware.

### `npm run dev`

Runs the webpack-dev-server, launching the app for development mode.

### `npm run build`

Builds the static website output using webpack into the **"/dist"** directory.

## Usage with Docker

### Local-Built Development Image

1. Build the Docker image for local development.<br>
   - `docker compose -f docker-compose.dev.yml build`
	    > **INFO:** Do this step only once or after installing new packages in the package.json file.
	 - Refer to the [Development Image](#development-image) section for more information.

2. Run the development image.<br>
`docker compose -f docker-compose.dev.yml up`

3. Refer to the [Usage](#usage) section **steps # 2 - # 4** for development.

4. Stop and exit the development container.<br>
`docker compose -f docker-compose.dev.yml down`

## Building Docker Images

### Development Image

The **development** Docker image contains Node runtime, Webpack dependencies, and the latest repository source codes for local development. Build it with:

`docker compose -f docker-compose.dev.yml build`

### Production Image

The **production** Docker image contains the Webpack app's static build output running in an nginx container for minimal production website build. Build it with:

`docker compose -f docker-compose.prod.yml build`

## Other Notes

<details>
<summary id="debugging-webpack-apps-in-vscode">
	<b>Debugging Webpack Apps in VSCode</b>
</summary>

<br>

1. Add breakpoints in the JavaScript (`*.js`) files inside webpack's app directory entry point at the `"src/"` directory.

2. Copy the following VSCode launch configurations to the `/.vscode/launch.json` file's `configurations[]` array:

   **Debug with MS Edge**

   ```
   {
     "name": "Debug in Edge",
     "request": "launch",
     "type": "msedge",
     "url": "http://localhost:8080",
     "runtimeArgs": [
       "--remote-debugging-port=9222"
     ]
   }
   ```

   **Debug with Chrome**

   ```
   {
     "name": "Debug in Chrome",
     "request": "launch",
     "type": "chrome",
     "url": "http://localhost:8080",
     "runtimeArgs": [
       "--remote-debugging-port=9222"
     ]
   }
   ```

3. Run the app using Node or from a container.

4. Select a debugger to run in VSCode. Press `Ctrl + Shift + D`
   - Select `"Debug in Edge"` to launch an Edge web browser.
   - Select `"Debug in Chrome"` to launch a Chrome web browser.

5. Run the app from the launched browser instance on **step # 4**.

</details>


---

## References

[[1]](https://github.com/weaponsforge/livereload-basic) - live reload using gulp + browser-sync (demo)<br>
[[2]](https://trello.com/c/n25MYtq8) - webpack notes (trello)


@weaponsforge<br>
20200702<br>
20241005
