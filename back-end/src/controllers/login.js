import { user } from "../data/user.js"


const login = (req, res) => {
    const {wallet, password} = req.body
    try {
        console.log(wallet, password)
        if(wallet === user.walletAddress && password === user.password){
            
            return res.status(200).json({
                title: "Access correct!!",
                message: "Welcome!!"

            })  
        }

        return res.status(404).json({
            title: "Error!!",
            message: "Wallet or password is invalid."
        })
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}

export {login}