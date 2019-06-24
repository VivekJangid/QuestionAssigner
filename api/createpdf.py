from .models import *
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
import random
import string
import textwrap
import os


filename = "assignment.pdf"


def createcanvas(filename):
    canv = canvas.Canvas(filename, pagesize=A4)
    canv.setFont('Helvetica', 50)
    canv.line(3, 510, 590, 508)
    canv.drawString(60, 440, 'Sarvika Technologies')
    canv.drawString(210, 380, 'Pvt. Ltd.')
    canv.line(3, 360, 590, 358)
    canv.showPage()
    return canv


def pdfsinglepage(c, a):
    desc = textwrap.wrap(a['Question_info'], 100)
    c.setFont('Helvetica', 16)
    c.drawString(5, 800, 'Question')
    c.setFont('Helvetica', 10)
    c.drawString(20, 780, a['Question'])
    c.line(3, 700, 590, 698)
    c.setFont('Helvetica', 16)
    c.drawString(5, 680, 'Description')
    c.setFont('Helvetica', 10)
    x = 20
    y = 640
    for i in desc:
        c.drawString(x, y, i)
        y = y-10
    c.line(3, 380, 590, 378)
    c.setFont('Helvetica', 16)
    c.drawString(5, 360, 'Skills Required  :  ')
    c.setFont('Helvetica', 10)
    x = 35
    y = 340
    for i in a['Skills_Required']:
        c.drawString(x, y, i)
        y = y-10
    c.showPage()


def assigpdf(c, assignments):
    if (os.path.exists(filename)):
        os.remove(filename)
    for a in assignments:
        pdfsinglepage(c, a)
    c.save()
