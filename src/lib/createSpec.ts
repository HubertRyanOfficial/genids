const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const charactersLength = characters.length;

// * create project id with 25 caracters

function createSpec(length: number): string {
  if (length <= 0) {
    throw "The number must be greater than 0";
  }

  let result = "";

  //

  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

export default createSpec;
