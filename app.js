const fs=require('fs')
const pdfparse=require('pdf-parse')
const officeParser = require('officeparser');
const StringSearch=require('string-search')

/// ------------pdf reader----------
let path_pdf='KA-PD3298-F05-R01_practice for employment-16-10-1398.pdf'
let word_pdf='سلام'

const pdffile=fs.readFileSync(path_pdf)

pdfparse(pdffile).then((data)=>{
   
    StringSearch.find(data.text,word_pdf).then((data)=>{
        console.log(data)
    })
  })
///------------office reader------------

let path_Office="t2.docx"
let word_Office='nodejs'

officeParser.parseOffice(path_Office, (data)=>{
    StringSearch.find(data,word_Office).then((text)=>{
        console.log(text)
    })
})



