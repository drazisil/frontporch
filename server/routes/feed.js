import { Router } from 'express';
import { hello } from 'core';
var router = Router();

/* GET feeds listing. */
router.get('/', function(req, res, next) {
  res.send(hello());
});

export default router;
