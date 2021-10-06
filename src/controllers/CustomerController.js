const connection = require ('../database/connection');

module.exports = {

  // async index (request, response) {
  //   const customerList = await connection ('customers').select('*') ;
  //   return response.json(customerList);
  // },

  async getcustomer (request, response, next) {
    try {
      const customerId = request.headers.authorization;
      const customer = await connection ('customers')
      .where ('customerId',customerId)
      .select ('*')
      .first ();

      if (! customer) {
        console.log ("usuario no encontrado");
        return response.status(404).json({ error: 'Usuario no encontrado'});
      }
      console.log ("usuario encontrado");
      console.log (customer);
      return response.json(customer);
    } catch (error) {
      next (error);
  }
  },

  async create (request, response) {
    const { customerId, customerName, customerBirthDate, customerMobilePrefix, customerMobile, customerEmail, customerCity, customerAddress, customerOccupation, customerLaborSeniority, customerSalary, customerHiringType } = request.body;
    
    await connection ('customers').insert({
      customerId,
      customerName, 
      customerBirthDate, 
      customerMobilePrefix, 
      customerMobile, 
      customerEmail, 
      customerCity, 
      customerAddress, 
      customerOccupation, 
      customerLaborSeniority, 
      customerSalary, 
      customerHiringType,
    });
    return response.json({customerId});
  },

  async update (request, response) {
    const { customerId, customerMobilePrefix, customerMobile, customerEmail, customerCity, customerAddress, customerOccupation, customerLaborSeniority, customerSalary, customerHiringType } = request.body;
    console.log (customerId);

    await connection ('customers').update({
      customerMobilePrefix, 
      customerMobile, 
      customerEmail, 
      customerCity, 
      customerAddress, 
      customerOccupation, 
      customerLaborSeniority, 
      customerSalary, 
      customerHiringType,
    })
    .where('customerId',customerId);
    return response.json({customerId});
  },

}