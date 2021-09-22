const connection = require ('../database/connection');
// const crypto = require ('crypto');

module.exports = {

  async index (request, response) {
    const messagesList = await connection ('messages').select('*') ;
    return response.json(messagesList);
  },

  async create (request, response)  {
    const { contactName, contactMobile, contactEmail, contactMsg } = request.body;
    await connection ('messages').insert({
      contactName,
      contactMobile,
      contactEmail,
      contactMsg,
    });
    return response.json({contactName});
  },

  async delete (request, response) {
    const { id }= request.params;
    // const userId = request.headers.authorization;
    await connection ('messages')
      .select ('id')
      .where ('id',id)
      .first ();
    return response.status (204).send;  
  }
}