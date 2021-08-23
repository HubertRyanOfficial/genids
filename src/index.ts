import createIds from "./lib/createIds";

// * create user id with 40 caracters

function createProjectId(): string {
  return createIds(false);
}

function createUid(): string {
  return createIds(true);
}

export { createProjectId, createUid };
