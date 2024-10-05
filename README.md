## livereload-webpack

> Localhost static website development environment for plain html, css and javascript files with live reload.
> Uses **webpack** + **webpack-dev-server**.


### Content

- [Dependencies](#dependencies)
- [Installation](#nstallation)
- [Usage](#usage)
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

1. Run the localhost static website development environment.
`npm run dev`

2.  Edit the existing static files from the **./public** directory and wait for live reload. Your updates will reflect on the web browser.

3. To include new static website files on live reload:
	- Stop the localhost **dev** server.
	- Create new static (.js, .css) files inside the **./src** directory.
		- Import the new **.js** and **.css** files in **./src/index.js**
		- Javascript events may need to be attached to Html DOM elements using `.addEventListener()` if you are only using raw Html files.
		- New Html files need to be encoded inside `new HtmlWebpackPlugin({ ... })` in **webpack.config.js**
		- Specific specific file types other than CSS and image files may need to have their node module dependency installed and included in **webpack.config.js**'s `module -> rules` part.
	- Re-start the **dev** server.
`npm run dev`

4. Build the project for production environment. Built static files are placed in the **/dist** directory.
`npm run build`

5. Run the production static website (does not use live reload).
`npm run start`


## References

[[1]](https://github.com/weaponsforge/livereload-basic) - live reload using gulp + browser-sync (demo)
[[2]](https://trello.com/c/n25MYtq8) - webpack notes (trello)


@weaponsforge
20200702<br>
20240=1005
