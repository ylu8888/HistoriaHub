const jwt = require("jsonwebtoken");
const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password) return res.json({status:"error", error:"Enter your email and password"});
    else{
        //don't use SELECT email use SELECT * or else will get error since password isn't present
        db.query('SELECT * FROM users WHERE email = ?', [email], async (Err, result) => {
            if(Err) throw Err;
            //if user's email or pw is wrong, don't indicate which is wrong, just say login credentials are wrong 
            //otherwise hacker might brute force into server if he knows ones wrong
            if(!result.length || !await bcrypt.compare(password, result[0].password)){
                return res.json({status: "error", error:"Incorrect email or password"})
            }
            else{
                //if password is correct, save the cookie
                //since cookie can be checked in browser, dont show sensitive info, only id
                //first index of result array, if second index user cannot sign up 2 accs /w same email
                const token = jwt.sign({id: result[0].id}, process.env.JWT_SECRET, {
                    //result[0].id must be saved as an object {} or else will show error
                    expiresIn: process.env.JWT_EXPIRES
                    
                })
                const cookieOptions = {
                    //millisecond conversion
                    expiresIn: new Date(Date.now() + process.env.COOKIE_EXPIRS * 24 * 60 * 60 * 1000),
                    httpOnly:true
                }
                res.cookie("userRegistered", token, cookieOptions);
                return res.json({status:"success", success:"User has successfully logged in"});
            }
        });
    }
}

module.exports = login;