import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes.js';
import tokenRoutes from './src/routes/TokenRoutes.js';
import alunoRoutes from './src/routes/alunoRoutes.js';
import fotoRoutes from './src/routes/fotoRoutes.js';
import { resolve } from 'path';
import './src/database/index.js';


class App{
  constructor(){
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    const uploadsPath = resolve(process.cwd(), 'uploads', 'images');
    this.app.use('/images/', express.static(uploadsPath));
  }

  routes(){
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);

  }
}

export default new App().app;
