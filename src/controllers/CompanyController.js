const connection = require ('../database/connection');

module.exports = {

  // async index (request, response) {
  //   const companyList = await connection ('company').select('*') ;
  //   return response.json(companyList);
  // },

  async getcompany (request, response) {
    
    const companyId = request.headers.authorization;
    const company = await connection ('companies')
    .where ('companyId',companyId)
    .select ('*')
    .first ();

    if (! company) {
      return response.status(404).json({ error: 'Empresa no encontrada'});
    }
    return response.json(company);
  },

  async update (request, response) {
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
  },

  async create (request, response) {
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
  }
}