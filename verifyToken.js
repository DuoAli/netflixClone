import jwt from "jsonwebtoken";

function verify(req, res, next) {
  const auth = req.headers.token;
  if (auth) {
    const token = auth.slice(7, auth.length);
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        res.status(403).json({ message: "Token is invalid" });
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    res.status(401).json("You are not authorized");
  }
}

export default verify;
