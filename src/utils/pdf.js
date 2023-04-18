import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export const generatePDF = (pdfName) => {
  const docDefinition = {
    content: [
      "alo"
    ]
  };
  pdfMake.createPdf(docDefinition).download(`${pdfName}.pdf`);
};