# Redux Form Boilerplate

## Demo

You can access the running code [here](https://guigonc.github.io/redux-form-boilerplate/) 

## Requirements

For development, you will only need Node.js installed on your environement.

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install nodejs
    sudo apt-get install npm

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---

## Install

    $ git clone https://github.com/guigonc/redux-form-boilerplate
    $ cd redux-form-boilerplate
    $ npm install

### Configure app

## Start & watch

    $ npm start

## Update sources

Some packages usages might change so you should run `npm prune` & `npm install` often.
A common way to update is by doing

    $ git pull
    $ npm prune
    $ npm install
