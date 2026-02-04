import passport from "../auth_strategies/jwt_passport.js";

export default function Authorise(req, res, next) {
  passport.authenticate("jwt", { session: false })(req, res, next);
}
