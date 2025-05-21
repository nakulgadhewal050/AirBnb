// Core Module
import path  from 'path';

// External Module
import express from 'express';

//Local Module

import storeRouter from './routes/storeRouter.js';
import hostRouter from './routes/hostRouter.js'; 
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = path.join(__dirname);


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded());
app.use(storeRouter);
app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, 'public')))

import  {error} from './controllers/error.js';

app.use(error)

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});