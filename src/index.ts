import createIds from "./lib/createIds";
import createSpec from "./lib/createSpec";

// * create user id with 40 caracters

function createProjectId(): string {
  return createIds(false);
}

function createUid(): string {
  return createIds(true);
}

function createSpecificLength(value: number): string {
  return createSpec(value);
}

export { createUid, createSpecificLength, createProjectId };
