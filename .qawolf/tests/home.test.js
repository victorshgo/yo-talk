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

  await page.click("[data-testid='user-name']");
  await page.fill("[data-testid='user-name']", "Victor Hugo");

  await page.click("[data-testid='room-name']");
  await page.fill("[data-testid='room-name']", "Yo! Room");

  await page.click("[data-testid='join-the-room']");

  await qawolf.assertElementText(
    page,
    "[data-testid='connected-room-name']",
    "Room name: Yo! Room"
  );
  await page.click("[data-testid='leave-the-room']");
});
