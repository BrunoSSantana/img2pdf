import path from 'path'
import crypto from 'crypto'
import multer from "multer";

export const configMulter ={
  dest: path.resolve(__dirname, '..', '..', 'upload'),
  storage: multer.diskStorage({
    filename: (req, file, cb) => {
      const hash = crypto.randomBytes(8)
      file.fieldname = `${hash.toString('hex')}-${file.originalname}`
      cb(null, file.fieldname)
    },destination: (req, res, cb) => {
      cb(null, 'upload/')
    }
  })}