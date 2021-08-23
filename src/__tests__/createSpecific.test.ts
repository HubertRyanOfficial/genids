import { createSpecificLength } from "../";
test("Create a id with specific 10 of caracters", () => {
  expect(createSpecificLength(10)).toHaveLength(10);
  expect(typeof "value").toBe("string");
});
