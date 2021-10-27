import path from 'path'
import multer from "multer";

export const configMulter ={
  dest: path.resolve(__dirname, '..', '..', 'upload'),
  storage: multer.diskStorage({
    filename: (req, file, cb) => {
      file.fieldname = `bruno-${file.originalname}`
      cb(null, file.fieldname)
    },destination: (req, res, cb) => {
      cb(null, 'upload/')
    }
  })}