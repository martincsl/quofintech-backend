const connection = require ('../database/connection');

module.exports = {

  // async index (request, response) {
  //   const companyList = await connection ('company').select('*') ;
  //   return response.json(companyList);
  // },

  async getcompany (request, response, next) {
    try {
      const companyId = request.headers.authorization;
      const company = await connection ('companies')
      .where ('companyId',companyId)
      .select ('*')
      .first ();
      if (! company) {
        return response.status(404).json({ error: 'Empresa no encontrada'});
      }
      return response.json(company);
    } catch (error){
        next (error);
      }
  },

  async update (request, response, next) {
    try {
      const { companyId, companyPhone, companyMobilePrefix, companyMobile, companyAddress, companyCity } = request.body;
      // console.log (companyId);
      await connection ('companies').update({
        companyPhone, 
        companyMobilePrefix, 
        companyMobile, 
        companyAddress,
        companyCity
      })
      .where('companyId', companyId );
      return response.json({companyId});
    } catch (error) {
        next (error);
      }
  },

  async create (request, response, next) {
    try {
      const { companyId, companyName, companyPhone, companyMobilePrefix, companyMobile, companyAddress,  companyCity } = request.body;
      await connection ('companies').insert({
        companyId,
        companyName, 
        companyPhone, 
        companyMobilePrefix, 
        companyMobile, 
        companyAddress, 
        companyCity
      });
      return response.json({companyId});
    } catch (error) {
        next (error);
      }  
  }
}