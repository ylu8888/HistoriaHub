const logout = (req, res) => {
    //once user clicks out, cookie is cleared and redirected to main page
    res.clearCookie("userRegistered");
    res.redirect("/");
}
module.exports = logout;