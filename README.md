# Syngrisi Cucumber Boilerplate

This project is based on [WebdriverIO Cucumber Boilerplate](https://github.com/webdriverio/cucumber-boilerplate)
project, and it contains all features of this project and additional
added [WDIO Syngrisi Cucumber Service](https://www.npmjs.com/package/wdio-syngrisi-cucumber-service) and few step
definition for Syngrisi visual checks.

## Quick start

https://user-images.githubusercontent.com/23633060/225082932-00bd7921-501b-43ae-a7f1-78dc65ba758c.mp4

### Set up the project

```shell
# prepare the boilerplate folder
mkdir syngrisi-boilerplate && cd syngrisi-boilerplate
# clone the repo
git clone git@github.com:syngrisi/syngrisi-cucumber-boilerplate.git .
# install packages
npm install
```

### Run tests

Run the demo test

```shell
npm test
```

Or run a certain feature

```shell
npx wdio wdio.conf.ts --spec src/features/syngrisi/basic_example.feature
```

### Check tests results using Syngrisi

Open browser and review tests results (default url: http://localhost:3000/)

## Syngrisi Visual Regression steps

All steps are in [src/steps/syngrisi.ts](src/steps/syngrisi.ts) file
See usage examples in [src/features/syngrisi](src/features/syngrisi) folder

> When I visually check viewport as "([^"]*)"

Create visual check for current page viewport
> I visually check "([^"]*)" element as "([^"]*)

Create visual check for element with particular selector

## Add new step definition

You can add any step definition you need based on `browser.syngrisiCheck(name, buffer)` method, regardless of how the
screenshot was created, or the tool you use to create a screenshot.

> `browser.syngrisiCheck(name, buffer)`

- `name` - the name of check
- `buffer` - base64 image buffer
