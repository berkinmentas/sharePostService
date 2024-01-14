const userAuth = async (req, res, next) => {
  const refreshToken = req.cookies.authorization;
  try {
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if (err) {
          return res.status(401).json({
            error: true,
            message: "Invalid token",
          });
        }
        next();
      }
    );
  } catch {
    res.clearCookie("access-token");
  }
};
