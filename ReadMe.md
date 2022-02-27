
# WebDriverIO End to End Framework

Hello, Created an end to end webdriverIO framework with support to Browserstack , Jenkins & allure - report


## Pre-requiste

Below tools need to be installed on your system

- NodeJs
- chrome
- firefox


## To start with

To install all the dependencies

```bash
  npm i
```
    
 To run the spec file

```bash
  npm run test
```

To open allure report

```bash
  npm run allure-report
```

## To run with browserstack

Note: Copy username and accesskey from the Browserstack account

```bash
  BROWSERSTACK_USERNAME=<username> BROWSERSTACK_ACCESS_KEY=<accessKey> npm run test
```

## Tech Stack

Typescript, Mocha


## Author

- [@Vinay](https://github.com/Vinay08sharma)

