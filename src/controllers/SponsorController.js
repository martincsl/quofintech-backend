const connection = require ('../database/connection');

module.exports = {

  async index (request, response) {
    try {
      const sponsorsList = await connection ('sponsors').select('*') ;
      return response.json(sponsorsList);
    } catch (error){
        next (error);
      }
  },

  async create (request, response) {
    try {
      const { sponsorId, sponsorName, sponsorPhone, sponsorMobilePrefix, sponsorMobile, sponsorCity, sponsorAddress } = request.body;
      await connection ('sponsors').insert({
        sponsorId,
        sponsorName, 
        sponsorPhone, 
        sponsorMobilePrefix, 
        sponsorMobile, 
        sponsorCity, 
        sponsorAddress, 
      });
      return response.json({sponsorId});
    } catch (error){
        next (error);
      }
  }
}