import fs from 'fs'
import express from 'express'
import multer from 'multer'
import cors from 'cors'
import pdfDocument from 'pdfkit'
import { configMulter } from './config/multer'

const PORT = 3003
const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/upload', multer(configMulter).single('file'), (request, response) => {
  const doc = new pdfDocument()
  const {filename} = request.file
  const originalFile = `upload/${filename}`
  const fileName = filename.replace('png', 'pdf')

  doc.pipe(fs.createWriteStream(`upload/${fileName}`))
  setTimeout(()=>{
    doc.image(originalFile)
    .end()
  }, 1000)

  setTimeout(()=>{
    fs.unlinkSync(`upload/${filename}`)
  }, 1000)
})

app.listen(PORT, () => console.log('🚀'))
