//Objeto literal userController
//Viene de userRouter a cada modulo

const userController = {

    login: (req, res) => {
        res.render('users/login.ejs');
    },

    register:(req, res) => {
        res.render('users/register.ejs');
    },
   
}

module.exports = userController