import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes.js';
import tokenRoutes from './src/routes/TokenRoutes.js';
import alunoRoutes from './src/routes/alunoRoutes.js';
import fotoRoutes from './src/routes/fotoRoutes.js';
import { resolve } from 'path';
import './src/database/index.js';

const whitelist = [
  'http://localhost:3333',
  'http://localhost:3000',
  'http://127.0.0.1:3333',
  'http://127.0.0.1:3000',
];

const corsOptions = {
  origin: function (origin, callback) {
    // 1. Permitir requisições sem origin (como Apps Mobile ou Postman)
    if (!origin) return callback(null, true);

    // 2. Verificar se a origem está na whitelist ou se é um IP da rede local
    const isWhitelisted = whitelist.lastIndexOf(origin) !== -1;
    const isLocalNetwork = origin.startsWith('http://192.168.');

    if (isWhitelisted || isLocalNetwork) {
      callback(null, true);
    } else {
      console.error(`CORS bloqueado: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200 // Necessário para alguns navegadores legados (IE11)
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    const uploadsPath = resolve(process.cwd(), 'uploads', 'images');
    this.app.use('/images/', express.static(uploadsPath));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);

  }
}

export default new App().app;
