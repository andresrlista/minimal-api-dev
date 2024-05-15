import Cors from 'cors';
import initMiddleware from './init-middleware';

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    origin: ['http://localhost:3030', 'https://minimal-api-dev-green.vercel.app'],
    methods: ['GET', 'POST', 'OPTIONS'],
  })
);

export default cors;
