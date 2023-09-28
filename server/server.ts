import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import router from './router';

const app = express();

// The following is a function that returns a function that returns a message and then calls the next() piece of the stack
// This function is called by the app below
const customLogger = (message) => (req, res, next) => {
  console.log(`Hello from ${message}`);
  next();
}

/**
 * Middleware
 */
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom Middleware
app.use((req, res, next) => {
  req.shhhh_secret = 'dog';
  next();
});
/**
 * The following is custom middleware that stops the next() call and prevents a request from continuing further
// app.use((req, res, next) => {
//   res.status(401);
//   res.send('Nope');
// });
 */

app.use(customLogger('customLogger'));



/**
 * App
 */
app.get('/', (req, res) => {
  console.log('hello from express');
  res.status(200);
  res.json({ message: 'hello' })
});

/**
 * API
 */
app.use('/api', router);

export default app;