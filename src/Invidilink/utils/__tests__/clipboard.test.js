import copyToClipboard from "../clipboard";

test("it should return true for copying text to clipboard", async () => {
  Object.assign(navigator, {
    clipboard: {
      writeText: () =>
        new Promise((resolve, reject) => {
          setTimeout(() => resolve(true), 200);
        }),
    },
  });

  const text = "copy text";
  const result = await copyToClipboard(text);
  expect(result).toBe(true);
});

test("it should return false when no navigator is present", async () => {
  const text = "copy text";
  const result = await copyToClipboard(text);
  expect(result).toBe(true);
});

test("it should return false when promise is rejected", async () => {
  Object.assign(navigator, {
    clipboard: {
      writeText: () =>
        new Promise((resolve, reject) => {
          setTimeout(() => reject(false), 200);
        }),
    },
  });

  const text = "copy text";
  const result = await copyToClipboard(text);
  expect(result).toBe(false);
});
