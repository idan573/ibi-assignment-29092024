import express, { Application, Request, Response } from 'express';
import { busTrackingService } from './logic/bus-tracking/bus-tracking';

const app: Application = express();
const port: number = Number(process.env.PORT) || 3000;

app.use(express.json());

app.get('/api/leftovers', (req: Request, res: Response) => {
  let input = req.body;
  try {
    const message = busTrackingService.claculateLeftovers(input)
    res.json({ message });
  } catch (error) {
    console.error('Error occurred:', error); 
    res.status(500).json({ error: 'An error occurred while processing the request.' });
  }
});

// Start the server only if this file is run directly, not when imported
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

export default app;