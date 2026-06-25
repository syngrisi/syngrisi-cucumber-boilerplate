import { When } from '@cucumber/cucumber';
import fs from 'fs';

const visualCheck = async (name: string, buffer: Buffer) => {
    const result = await browser.syngrisiCheck(name, buffer);
    console.log(result);
    if (result.status.includes('failed')) {
        throw new Error(`The visual check failed, reasons: ${JSON.stringify(result.failReasons)}`
            + `\nyou can see details on the Syngrisi page '${result.vrsDiffLink}'`);
    }
    return result;
};
When(/^I visually check viewport as "([^"]*)"$/, async function (name) {
    const imageBuffer = Buffer.from((await browser.takeScreenshot()), 'base64');
    await visualCheck(name, imageBuffer);
});

When(/^I visually check whole page as "([^"]*)"$/, async function (name) {
    // `saveFullPageScreen` is provided by @wdio/visual-service and requires a tag argument.
    // It returns the saved screenshot's `path` + `fileName`, which we forward to Syngrisi.
    const result = await browser.saveFullPageScreen(name) as { path: string, fileName: string };
    const imageBuffer = fs.readFileSync(`${result.path}/${result.fileName}`);
    await visualCheck(name, imageBuffer);
});

When(/^I visually check "([^"]*)" element as "([^"]*)"$/, async function (selector, name) {
    const element = await $(selector);
    // WebdriverIO v9: take the element screenshot via the element command (returns base64).
    const ss = await element.takeScreenshot();
    const imageBuffer = Buffer.from(ss, 'base64');
    await visualCheck(name, imageBuffer);
});

When(/^I start debugger$/, async function () {
    // eslint-disable-next-line wdio/no-debug
    await browser.debug();
});
