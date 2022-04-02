
var GoogleStrategy = require("passport-google-oauth20").Strategy;
var GitHubStrategy = require("passport-github").Strategy;
const passport = require("passport");
// const GOOGLE_CLIENT_ID =
//   "647812996023-k3dgq0h4jrlq2rbsg2ajj66m5ebejqqt.apps.googleusercontent.com";
// const GOOGLE_CLIENT_SECRET = "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";
// const GITHUB_CLIENT_ID = "b0dde886dedfc91064d3";
// const GITHUB_CLIENT_SECRET = "ae1e31d9d784284422012cb8fb54a1705b0b2ce8";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);
passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});
