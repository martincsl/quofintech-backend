const connection = require ('../database/connection');

module.exports = {


  
  async index (request, response) {
    const usersList = await connection ('users').select('*') ;
    return response.json(usersList);
  },

  async create (request, response)  {
    const { userId, userName, userPassword, userMobilePrefix, userMobile, userEmail, userCity, userAddress, userOccupation, sponsorId } = request.body;
    await connection ('users').insert({
      userId, 
      userName, 
      userPassword, 
      userMobilePrefix, 
      userMobile, 
      userEmail, 
      userCity, 
      userAddress, 
      userOccupation,
      sponsorId
    });

    return response.json({userId});
  }
}
