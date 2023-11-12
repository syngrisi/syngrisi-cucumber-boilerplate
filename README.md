# Syngrisi Cucumber Boilerplate

This project extends the [WebdriverIO Cucumber Boilerplate](https://github.com/webdriverio/cucumber-boilerplate)
with all its features, plus the integration of the [WDIO Syngrisi Cucumber Service](https://www.npmjs.com/package/wdio-syngrisi-cucumber-service) and additional step definitions for Syngrisi visual checks.


## Quick start

https://user-images.githubusercontent.com/23633060/225082932-00bd7921-501b-43ae-a7f1-78dc65ba758c.mp4

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

