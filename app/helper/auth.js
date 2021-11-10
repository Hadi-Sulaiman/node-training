exports.checkUserByToken = (token) => {
    
    const expectedToken = process.env.TOKEN;

    if (token == expectedToken) {
       const decryptedToken =  Buffer.from(token, 'base64').toString('ascii')
       const profile = decryptedToken.split("#")
       const firstName = profile[0]
       const lastName = profile[1] 
       const user = {
           first_name: firstName,
           last_name: lastName
       };

       return user;
    }else{
        return null
    }
  
};