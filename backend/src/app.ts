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

app.post('/upload', multer(configMulter).array('file'), (request, response) => {
  const files = request.files

  for (let file = 0; file > files.length; file ++) {
    const doc = new pdfDocument()
    const newFile = files[file]

    const originalFile = `upload/${newFile.filename}`
    const fileName = newFile.filename.replace('png', 'pdf')
  
    doc.pipe(fs.createWriteStream(`upload/${fileName}`))
    setTimeout(()=>{
      doc.image(originalFile)
      .end()
    }, 1000)
  
    setTimeout(()=>{
      fs.unlinkSync(`upload/${newFile.filename}`)
    }, 2000)
  }
})

app.listen(PORT, () => console.log('🚀'))
