import { Router as expressRouter } from 'express';

import { guessEmail } from '../controllers/emails.controller.js';

const router = expressRouter();

router.get('/generate', guessEmail);

export default router;
