const qawolf = require("qawolf");

let browser;
let context;

beforeAll(async () => {
  browser = await qawolf.launch({
    slowMo: 1000,
    permissions: ["camera", "microphone"],
    args: ["--use-fake-ui-for-media-stream"],
  });
  context = await browser.newContext();
  await qawolf.register(context);
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test("Flow test", async () => {
  const page = await context.newPage();
  
  await page.goto("http://localhost:3000", { waitUntil: "domcontentloaded" });

  await page.click("#name");
  await page.fill("#name", "Victor Hugo");

  await page.click("#room");
  await page.fill("#room", "Yo! Room");

  await page.click("#join");

  await qawolf.assertElementText(page, "#title", "Room name: Yo! Room");
  await page.click("#leave");
});
