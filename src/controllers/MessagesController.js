const connection = require ('../database/connection');
// const crypto = require ('crypto');

module.exports = {
  
  async index (request, response) {
    try {
      const messagesList = await connection ('messages').select('*') ;
      return response.json(messagesList);
    } catch (error) {
        next (error);
      }
  },

  async create (request, response) {
    try {
      const { contactName, contactMobile, contactEmail, contactMsg } = request.body;
      await connection ('messages').insert({
        contactName,
        contactMobile,
        contactEmail,
        contactMsg,
      });
      return response.json({contactName});
    } catch (error) {
        next (error);
      }
  },

  async delete (request, response) {
    try {
      const { id } = request.params;
      // const userId = request.headers.authorization;
      await connection ('messages')
        .select ('id')
        .where ('id',id)
        .first ();
      return response.status (204).send;  
    } catch (error){
        next (error);
      }
  }
}