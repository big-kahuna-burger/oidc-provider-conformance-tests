const {
  render, navigate, testUrl, login, proceed, passed,
} = require('../helpers');

it('OP-Req-max_age=1', async function () {
  const test = this.test.title;
  await navigate(testUrl(test));
  await login();
  await new Promise(resolve => setTimeout(resolve, 2000));
  await proceed();
  await tab.waitForSelector('button[type=submit]');
  await render(test);
  await login();
  await passed(test);
});
