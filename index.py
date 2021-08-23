from PyPDF2 import PdfFileReader, PdfFileMerger
import eel
import time
from PIL import Image

# Initializing EEL into the web Directory
eel.init('F:\Sajed Project\Python\PDF Merger by using EEL\web')

# Function for Merging PDFs


@eel.expose
def pdfMaker(pdfList):
    if len(pdfList) > 1:
        try:
            merger = PdfFileMerger()
            print(pdfList)
            for pdf in pdfList:
                merger.append(rf'C:\Users\KN\Desktop\{pdf}')
            merger.write(rf'C:\Users\KN\Desktop\{pdf}(merged).pdf')
            eel.success()
        except Exception:

            print('choose pdf only')

            for pdf in pdfList:
                if not pdf.endswith('.pdf'):
                    pdfList.remove(pdf)
            print(pdfList)
            n = len(pdfList)
            eel.error(n)
            eel.otherFile(pdfList)

    else:
        if len(pdfList) == 0:
            eel.selectPDF()
        else:
            eel.selectTwoPDF()

# Function for converting PDFs


@eel.expose
def pdfConverter(imageList, value):
    if value == False:
        try:
            for image in imageList:
                image1 = Image.open(rf'C:\Users\KN\Desktop\{image}')
                im1 = image1.convert('RGB')
                im1.save(rf'C:\Users\KN\Desktop\{image}(conv).pdf')
                eel.successfull()
        except Exception:
            eel.imagesOnly()
    elif value == True:
        try:
            newList = []
            for image in imageList:
                image1 = Image.open(rf'C:\Users\KN\Desktop\{image}')
                im1 = image1.convert('RGB')
                newList.append(im1)
            firstImage = newList[0]
            del newList[0]
            firstImage.save(rf'C:\Users\KN\Desktop\conv.pdf',
                            save_all=True, append_images=newList)
            eel.successfull()
        except Exception:
            eel.imagesOnly()


@eel.expose
def onepdfConverter(imageList):
    try:
        myimage = imageList[0]
        image1 = Image.open(rf'C:\Users\KN\Desktop\{myimage}')
        im1 = image1.convert('RGB')
        im1.save(rf'C:\Users\KN\Desktop\{myimage}(conv).pdf')
        eel.successfull()
    except Exception:
        eel.imagesOnly()


@eel.expose
def chooseImages():
    eel.chooseImageFirst()


eel.start('F:\Sajed Project\Python\PDF Merger by using EEL\web\index.html')
