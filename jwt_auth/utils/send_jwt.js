import createJWT from "../utils/create_jwt.js";

export default function SendJWT(res, _id, message="success") {
  if (!(res || _id)) {
    res.status(500).send({ error: "Some Internal Server Error occured." });
  }

  let JWT = createJWT(_id);

  res.setHeader(
    "Set-Cookie",
    `login=${JWT}; HttpOnly; Secure; Max-Age=${7 * 24 * 60}; Path=/; SameSite=Strict`,
  );
  res.status(200).json({message});
}
