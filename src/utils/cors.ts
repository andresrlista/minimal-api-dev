import Cors from 'cors';
import initMiddleware from './init-middleware';

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    origin: [
      'http://localhost:3030',
      'http://0.0.0.0:3030',
      'https://localhost:3030',
      'https://0.0.0.0:3030',
    ],
    methods: ['GET', 'POST', 'OPTIONS'],
  })
);

export default cors;
