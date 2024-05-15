import Cors from 'cors';
import initMiddleware from './init-middleware';

// Initialize the cors middleware
const cors = initMiddleware(
  Cors({
    origin: 'http://localhost:3030',
    methods: ['GET', 'POST', 'OPTIONS'],
  })
);

export default cors;
