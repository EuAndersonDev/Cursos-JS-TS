import jwt from 'jsonwebtoken';
import User from '../models/Users.js';
export default async ( req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'Login required' });
  }

  const [,token] = authHeader.split(' ');
  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);

    const { id, email } = dados;

    const userData = await User.findOne({ where: {id, email}});

    if (!userData) {
      return res.status(401).json({ error: 'User Invalid' });
    }
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({ error: 'Login required' });
  }

}
