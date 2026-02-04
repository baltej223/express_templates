import jwt from "jsonwebtoken";

const JWT_SECRET = "gbtw4hukfvhjksbfcjvkwbjq32knravewdqnlJEKCHVBFEIDNJFKV";

export default function CreateJWT(userid) {
  let payload = { uid: userid };
  //   console.log(payload);
  let genrated_token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: "7d",
  });

  return genrated_token;
}
