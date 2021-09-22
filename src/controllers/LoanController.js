const connection = require ('../database/connection');
const crypto = require ('crypto');

module.exports = {

  async index (request, response) {
    const loansList = await connection ('loans').select('*') ;
    return response.json (loansList);
  },

  async create (request, response) {
    
    const { loanProduct, loanCapital, loanTerm, loanPayment, loanTotalAmount, loanExpireDate, loanRequestStatus,loanRequestDenialMsg, loanDocStatus, customerId, userId, sponsorId } = request.body;

    console.log (userId);
    console.log (sponsorId);

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
  },

  async delete (request, response) {
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
  }
}