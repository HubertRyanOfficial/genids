import { createUid, createProjectId } from "../";

describe("Create a user id", () => {
  test("Create a id with 35 of caracters", () => {
    expect(createUid()).toHaveLength(35);
    expect(typeof "value").toBe("string");
  });

  test("Create a id with 25 of caracters", () => {
    expect(createProjectId()).toHaveLength(25);
    expect(typeof "value").toBe("string");
  });
});
