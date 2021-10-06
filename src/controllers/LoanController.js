const connection = require ('../database/connection');
const crypto = require ('crypto');

module.exports = {

  async index (request, response, next) {
    try {
      const loansList = await connection ('loans').select('*') ;
      return response.json (loansList);
    } catch (error) {
        next (error);
      }
  },

  async create (request, response, next) {
    try {
      const { loanProduct, loanCapital, loanTerm, loanPayment, loanTotalAmount, loanExpireDate, loanRequestStatus,loanRequestDenialMsg, loanDocStatus, customerId, userId, sponsorId } = request.body;
      // console.log (userId);
      // console.log (sponsorId);
      loanId = crypto.randomBytes(4).toString('HEX');
      // loanId,
      await connection ('loans').insert({
        loanProduct,
        loanCapital, 
        loanTerm, 
        loanPayment, 
        loanTotalAmount,
        loanExpireDate, 
        loanRequestStatus,
        loanRequestDenialMsg, 
        loanDocStatus,
        customerId,
        userId,
        sponsorId,
      });
      return response.json({ userId });
    } catch (error) {
        next (error);
      }
  },

  async delete (request, response) {
    try {
      const { id } = request.params;
      const userId = request.headers.authorization;
      await connection ('loans')
        .select ('id')
        .where ('id',id)
        .first ();
      if (loans.userId !== id) {
        return response.status(401).json ( {error: 'Usuario nao autorizado'} )
      }  
      await connection('loans').where ('id', id).delete;
      return response.status (204).send;
    } catch (error) {
        next (error);
      }
  }
}