import Converter from 'npm:@hckrnews/pdf2png';

Converter.create({
  file: 'example.pdf',
  output: './'
}).convert();