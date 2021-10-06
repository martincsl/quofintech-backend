const connection = require ('../database/connection');

module.exports = {
  
  async index (request, response) {
    try {
      const usersList = await connection ('users').select('*') ;
      return response.json(usersList);
    } catch (error) {
        next (error);
      }
  },

  async create (request, response)  {
    try {
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
  } catch (error){
      next (error);
    }
  }
}
