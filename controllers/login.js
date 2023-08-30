const jwt = require("jsonwebtoken");
const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.json({ status: "error", error: "Enter your email and password" });
    } else {
        try {
            const [user] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

            if (!user || !(await bcrypt.compare(password, user.password))) {
                return res.json({ status: "error", error: "Incorrect email or password" });
            } else {
                const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES,
                });

                const cookieOptions = {
                    expiresIn: new Date(Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                    httpOnly: true,
                };

                res.cookie("userRegistered", token, cookieOptions);
                return res.json({ status: "success", success: "User has successfully logged in" });
            }
        } catch (error) {
            console.error("Error during login:", error);
            return res.status(500).json({ status: "error", error: "An error occurred during login" });
        }
    }
};

module.exports = login;
