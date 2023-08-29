const jwt = require("jsonwebtoken");
const db = require("../routes/db-config");

const update = (req, res, next) => {
    if (!req.cookies.userRegistered) return next();
    try{
        //needs to give verify the secret key to check if correct or not
        const decoded = jwt.verify(req.cookies.userRegistered, process.env.JWT_SECRET);
        db.query('SELECT * FROM users WHERE id = ?', [decoded.id], (err, result) => {
            if (err) return next();
            req.user = result[0];
            const userId = req.user.id;
        db.query(
          "UPDATE users SET points = points + 10 WHERE id = ?",
          [userId],
          (err, result) => {
            if (err) {
              console.error("Error updating user's points:", err);
            } else {
              console.log("User's points updated successfully");
            }
          }
        );
            return next();
        })
    } catch(err){
        if(err) return next();
    }
}

module.exports = update;
