import textract
import PyPDF2

filename = r"C:\Coding\StudyPath.github.io\Projects\Python\Chatbot\C_Book.pdf"

pdfFileObj = open(filename, "rb")

pdfReader = PyPDF2.PdfReader(pdfFileObj)

num_pages = len(pdfReader.pages)
count = 0
text = ""

while count < num_pages:
    pageObj = pdfReader.pages[count]
    count += 1
    text += pageObj.extract_text() or ""

pdfFileObj.close()

if text.strip() == "":
    text = textract.process(
        filename,
        method="tesseract",
        language="eng"
    ).decode("utf-8")

print(text)