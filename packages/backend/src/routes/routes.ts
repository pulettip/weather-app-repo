import { Router } from 'express';
import { getScoreResponse } from '../controllers/score';

const router = Router();
// Define the route for getting weather scores 
router.get('/weather-scores', getScoreResponse);

// Export the router to be used in the main application
export default router;