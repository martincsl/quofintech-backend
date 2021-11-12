const connection = require ('../database/connection');

module.exports = {

  async index (request, response) {
    try {
      // const { sponsorId } = request.body;
      const sponsorId = request.headers.authorization
      const loansInfo = await connection('loans')
        .select ('loans.id','loans.customerId','customers.customerName','loans.loanProduct','loans.loanCapital','loans.loanTerm','loans.loanPayment','loans.loanTotalAmount','loans.loanExpireDate','loans.loanRequestStatus', 'loans.loanRequestDenialMsg') 
        .join ('sponsors', 'sponsors.sponsorId','=', 'loans.sponsorId')
        .join ('customers', 'customers.customerId','=', 'loans.customerId')
        .where ('loans.sponsorId',sponsorId);
      // console.log(loansInfo);
      return response.json(loansInfo);
    } catch (error) {
        next (error);
      }
  },

  async delete (request, response) {
    try {
      const { id } = request.params;
      const sponsorId = request.headers.authorization;
      // console.log(id);
      // console.log(sponsorId);
      const [count] = await connection('loans').count();
      const incident = await connection('loans') // colocar condigo para id nao encontrada
        .where('id', id)
        .select('sponsorId')
        .first();
      if (incident.sponsorId !== sponsorId) {
          return response.status(401).json({error: 'Exclusion no permitida'})
      }
      await connection('loans')
        .where('id',id)
        .delete();
      return response.status(204).send();
    } catch (error){
        next (error);
      }
  }
  }