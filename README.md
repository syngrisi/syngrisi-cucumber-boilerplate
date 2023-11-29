# Syngrisi Cucumber Boilerplate

This project extends the [WebdriverIO Cucumber Boilerplate](https://github.com/webdriverio/cucumber-boilerplate)
with all its features, plus the integration of the [WDIO Syngrisi Cucumber Service](https://www.npmjs.com/package/wdio-syngrisi-cucumber-service) and additional step definitions for Syngrisi visual checks.

The video demonstrates the operation of a boilerplate project, using a simple test case as an example:

https://user-images.githubusercontent.com/23633060/225082932-00bd7921-501b-43ae-a7f1-78dc65ba758c.mp4

## Try with a Single-Click

To quickly preview the project without setting it up locally, you can click the "Open in Gitpod" button. Gitpod will then automatically set up an environment with Boilerplate Project and start the Syngrisi instance for you.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/syngrisi/syngrisi-cucumber-boilerplate)

### Set Up the Project

```shell
# Create and navigate to the boilerplate directory
mkdir syngrisi-boilerplate && cd syngrisi-boilerplate

# Clone the repository into the current directory
git clone git@github.com:syngrisi/syngrisi-cucumber-boilerplate.git .

# Install the necessary packages
npm install
```

### Run Tests

To run the demo tests, execute the following command:

```shell
npm test
```

To run a specific feature, use:

```shell
npx wdio wdio.conf.ts --spec src/features/syngrisi/basic_example.feature
```

### Reviewing Test Results with Syngrisi

To review the test results, open your browser and navigate to the default Syngrisi dashboard URL: [http://localhost:3000](http://localhost:3000).

## Configuration

This project utilizes the `wdio-syngrisi-cucumber-service` which can be configurable using `service` section in the [./wdio.conf.ts](./wdio.conf.ts) file  as a regular `WebdriverIO` service:
```js
[
    'syngrisi-cucumber',
    {
        endpoint: `<your-syngrisi-server-url>`, // the Syngrisi server url, default is http://localhost:3000
        apikey: `<your-api-key>`, // Autorization API key, you can obtain it from your Syngrisi account settings 
        app: `<your-project-name>`, // Specify the project name 
        branch: '<your-branch>', // The version control branch name.
        runname: `<your-run-name>`, // Run name allows you to group tests by runs using Syngrisi UI  
        runident: `<your-run-ident>`, // Unique run identifier
        tag: '<visual-check-tag>', // if you set this tag in the Gherkin scenario, `wdio-syngrisi-cucumber-service` 
                                   // will start and stop the visual sessions and therefore perform visual checks,
                                   // if tags are empty the visual session will be created for all scenarios despite the existence of visual checks
    },
]
```

## Syngrisi Visual Regression Steps

All the visual regression steps are defined in the [src/steps/syngrisi.ts](src/steps/syngrisi.ts) file. 
You can find usage examples in the [src/features/syngrisi](src/features/syngrisi) directory.

### Added Syngrisi Step Definitions

Viewport Check: `When I visually check viewport as "<name>"`

Full Page Check: `I visually check whole page as "<name>"`

Element Check: `I visually check the "<selector>" element as "<name>"`

Create visual check for element with particular selector

## Adding Custom Step Definitions

Custom step definitions can be added by using the `browser.syngrisiCheck(name, buffer)` method. This method allows you to submit screenshots in a base64 image buffer format, providing flexibility for various tools and workflows.

> `browser.syngrisiCheck(name, buffer)`

- `name` - the name of check
- `buffer` - base64 image buffer

## License

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) file for details.

