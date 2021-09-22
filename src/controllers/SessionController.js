const connection = require ('../database/connection');

module.exports = {

  async create (request, response) {
    const { userId, userPassword } = request.body;
     console.log({userId});
   
    const users = await connection ('users')
     .join ('sponsors','sponsors.sponsorId','=', 'users.sponsorId')
     .where ('userId', userId)
     .select (['users.userId','users.userName','users.userPassword','sponsors.sponsorName','sponsors.sponsorId'])
     .first();

    console.log(JSON.stringify(users));
    if (! users) {
      return response.status(400).json({ error: 'Usuario no encontrado'});
    }
    if (users.userPassword !== userPassword) {
      return response.status(400).json({error: 'Contraseña inválida'});  
    }
    return response.json(users);
  }
  
}