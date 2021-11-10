exports.check = (username, password) => {
    
    const expectedUsername = process.env.USERNAME || 'hadi';
    const expectedPassword = process.env.PASSWORD || '12345';

    if (username == expectedUsername && password == expectedPassword) {
       const user = {
           username: username
       };

       return user;
    }else{
        return null
    }
  
};

exports.dummyToken = () => {
    
    const firstName = process.env.PROFILE_FIRSTNAME || 'HADI';
    const lastName = process.env.PROFILE_LASTNAME || 'SULAIMAN';
    const token = Buffer.from(firstName+'#'+lastName).toString('base64')

    return token
    
};