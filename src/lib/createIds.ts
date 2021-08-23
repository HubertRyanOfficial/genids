const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const charactersLength = characters.length;

// * create project id with 25 caracters

function createIds(userId: boolean): string {
  let result = "";

  //

  let length = userId ? 35 : 25;

  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  function sla() {}

  return result;
}

export default createIds;
