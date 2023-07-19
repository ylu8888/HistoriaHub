const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");

//need async b/c bcrypt will hash password which takes some time
const register = async (req, res) => {
    //normal password saved in hash
    const {email, password: Npassword} = req.body
    if(!email || !Npassword) return res.json({status:"error", error:"Enter your email and password"});
    else{
        console.log(email);
        db.query('SELECT email FROM users WHERE email = ?', [email], async (err, result) => {
            if (err) throw err;
            if (result[0]) return res.json({status:"error", error:"Email has already been registered"})
            else{   //this hashes password at 8 chars, not too much load on server
                const password = await bcrypt.hash(Npassword, 8);
                console.log(password);
                //insert value into the database
                db.query('INSERT INTO users SET ?', { email: email, password: password}, (error, results) => {
                    if(error) throw error;
                    return res.json({ status: "success", success: "User has been registered" });
                })
                
            }
        })
    }
}
module.exports = register;