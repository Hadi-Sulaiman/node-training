module.exports = app => {
    const passport = require('passport')
    const passportLocalStrategy  = require("passport-local").Strategy
    const login = require("../controllers/login.js");
  
    var router = require("express").Router();
    app.use(passport.initialize());

    passport.use(new passportLocalStrategy(
        (username, password, done) => {
            const userCheck = login.check(username, password)
            if(userCheck){
                return done(null, userCheck);
            }else{
                return done(null, false);

            }
        }
    ));

    router.post('/', 
        passport.authenticate('local', { failureRedirect: '/login', session: false }),
        (req, res) => { 
            res.status(200).send({
                status: "200",  
                token: login.dummyToken()
            });
        }
    );
  
    app.use('/api/login', router);
};