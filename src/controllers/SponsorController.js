const connection = require ('../database/connection');

module.exports = {

  async index (request, response) {
    const sponsorsList = await connection ('sponsors').select('*') ;
    return response.json(sponsorsList);
  },

  async create (request, response) {
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
  }
}