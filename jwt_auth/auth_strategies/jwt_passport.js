import { Strategy, ExtractJwt } from "passport-jwt";
import passport from "passport";
import { User } from "../db/database";

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "gbtw4hukfvhjksbfcjvkwbjq32knravewdqnlJEKCHVBFEIDNJFKV",
};

passport.use(
  new Strategy(opts, async (payload, done) => {
    console.log(payload);

    let req_user = await User.find({ _id: payload.uid }).exec();

    if (req_user) {
      console.log("user accepted");
      return done(null, req_user);
    } else {
      console.log("user rejected", payload.uid);
      return done(null, false);
    }
  }),
);

export default passport;
