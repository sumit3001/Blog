import jwt from 'jsonwebtoken';

export const signJWT = (payload={}, expiry='24h')=> {
  try {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: expiry
    });
    return token;
  } catch (error) {
    console.log(error)
  }
}

export const verifyJWT = (token) => {
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    return data;
  } catch (error) {
    console.log(error);
  }
}