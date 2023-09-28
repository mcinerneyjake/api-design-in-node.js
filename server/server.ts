import express from 'express';
import morgan from 'morgan';

import router from './router';

const app = express();

/**
 * Middleware
 */
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Custom Middleware
app.use((req, res, next) => {
  req.shhhh_secret = 'dog';
  next();
});
/**
 * The following is custom middleware that stops the next() call and prevents a request to continue further along into the next routes
// app.use((req, res, next) => {
//   req.poo = 'poo';
//   res.status(401);
//   res.send('Nope');
// });
 */


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