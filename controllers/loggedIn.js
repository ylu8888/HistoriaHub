const db = require("../routes/db-config")
const jwt = require("jsonwebtoken");
const loggedIn = (req, res, next) => {
    if (!req.cookies.userRegistered) return next();
    try{
        //needs to give verify the secret key to check if correct or not
        const decoded = jwt.verify(req.cookies.userRegistered, process.env.JWT_SECRET);
        db.query('SELECT * FROM users WHERE id = ?', [decoded.id], (err, result) => {
            if (err) return next();
            req.user = result[0];
            return next();
        })
    } catch(err){
        if(err) return next();
    }
}

module.exports = loggedIn;