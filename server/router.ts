import { Router } from 'express';
import { body } from 'express-validator';

import { validate } from '../modules/middleware';

const router = Router();

/** 
 * Product
 */

router.get('/product', 
  validate([
    body('name').isString(),
    body('belongsToId').isString()
  ]),
  (req, res) => {
    res.json({ message: req.shhhh_secret });
  }
);
router.get('/product/:id', 
  validate([
    body('name').isString()
  ]),
  (req, res) => {

  }
);
router.put('/product/:id',
  validate([
    body('name').isString()
  ]),
  (req, res) => {
    res.json({ name: req.body.name });
  }
);
router.post('/product', (req, res) => {

});
router.delete('/product/:id', () => {});

/** 
 * Update
 */

router.get('/update', () => {});
router.get('/update/:id', () => {});
router.put('/update/:id', () => {});
router.post('/update', () => {});
router.delete('/update/:id', () => {});

/** 
 * Update Point
 */

router.get('/updatepoint', () => {});
router.get('/updatepoint/:id', () => {});
router.put('/updatepoint/:id', () => {});
router.post('/updatepoint', () => {});
router.delete('/updatepoint/:id', () => {});

export default router;