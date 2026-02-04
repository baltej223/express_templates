import { User } from "../db/database.js";
import SendJWT from "../utils/send_jwt.js";

export default async function CreateAccount(req, res, next) {
  let body = req?.body;
  if (body == undefined || body.email == undefined || body.password == undefined || body.profile == undefined || body.profile.name == undefined ||  body.profile.bio == undefined ||  body.profile.interests == undefined){
     res.status(401).json({
      error:"Parameters missing" 
    })
  }
  let email = body.email;
  let password = body.password;
  let profile = body.profile;
  let user;
  
  try {
    let _user = await User.find({email, password}).exec();
    if (_user.length != 0){
      user  =  _user;
      SendJWT(res, user._id, "user already exists, logined.");
    } else 
    user = await User.create({
      email,
      password,
      profile: {
        name: profile.name,
        bio: profile.bio,
        interests: profile.interests,
      },
    });

    console.log (user);
  } catch (e) {
    res.status(500).send("Internal Server Error");
  }
  SendJWT(res, user._id, "User logined successfully");
}
