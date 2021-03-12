const AuthController = {};

AuthController.signin = async (req, res) => {
    const {username, password} = req.body;
    return res.send({
        message: process.env.DB_NAME
    })
}

AuthController.signup = async (req, res) => {
    return res.send({
        message: "Hello World!!!"
    })
}

AuthController.forgotPassword = async (req, res) => {
    return res.send({
        message: "Hello World!!!"
    })
}

export default AuthController;