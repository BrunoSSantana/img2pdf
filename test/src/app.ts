import documentPDF from 'pdfkit'
import fs from 'fs'

// const doc = new documentPDF()
// doc.pipe(fs.createWriteStream('output.pdf'));

// // Embed a font, set the font size, and render some text
// doc
//   .image('src/image/image.png')
//   .end()

const originalFile = 'src/image/image.png'
const copyFile = 'copia.png'

fs.copyFileSync(originalFile, copyFile)

fs.unlinkSync(originalFile)
