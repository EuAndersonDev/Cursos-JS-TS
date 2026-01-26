import multer from 'multer';
import multerConfig from '../config/multerConfig.js';
import Foto from '../models/Foto.js';
const upload = multer(multerConfig).single('foto');


class FotoController {
   store(req, res) {
    return upload(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ errors: [err.message] });
      } else if (err) {
        return res.status(400).json({ errors: [err.message] });
      }

      try {

      const { originalname, filename } = req.file;
      const { aluno_id } = req.body;
      const foto = await Foto.create({ originalname, filename, aluno_id });
      return res.json(foto );
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((e) => e.message) });
    }
    });
  }
}

export default new FotoController();

