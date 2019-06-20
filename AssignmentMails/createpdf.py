import os
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
import textwrap
from reportlab.lib.pagesizes import letter


a = {'Question': 'kdsn fdks afks s;dlfl sksfn k', 'Question_info': 'm skdf nkjjfd d skfbsj dhbjhsdbkjkjj lkj kj kjnkhjb jhbdze sxrdct fvyguh bfdrd dtdd ftgbbt fcg vby tuhjg .,m skdf nkjjfd d skfbsj dhbjhsdbkjkjj lkj kj kjnkhjb jhbdze sxrdct fvyguh bfdrd dtdd ftgbbt fcg vby tuhjg .,m skdf nkjjfd d skfbsj dhbjhsdbkjkjj lkj kj kjnkhjb jhbdze sxrdct fvyguh bfdrd dtdd ftgbbt fcg vby tuhjg .,m skdf nkjjfd d skfbsj dhbjhsdbkjkjj lkj kj kjnkhjb jhbdze sxrdct fvyguh bfdrd dtdd ftgbbt fcg vby tuhjg .,m skdf nkjjfd d skfbsj dhbjhsdbkjkjj lkj kj kjnkhjb jhbdze sxrdct fvyguh bfdrd dtdd ftgbbt fcg vby tuhjg .,m skdf nkjjfd d skfbsj dhbjhsdbkjkjj lkj kj kjnkhjb jhbdze sxrdct fvyguh bfdrd dtdd ftgbbt fcg vby tuhjg .,m skdf nkjjfd d skfbsj dhbjhsdbkjkjj lkj kj kjnkhjb jhbdze sxrdct fvyguh bfdrd dtdd ftgbbt fcg vby tuhjg',
     'Skills_Required': ['REACT', 'ASDFSDAF', 'S3WRE', 'P0OIKJH']}

text = "    "
wrap_text = textwrap.wrap(text, 80)
filename = "hello.pdf"

if (os.path.exists(filename)):
    os.remove(filename)

c = canvas.Canvas(filename, pagesize=A4)
c.setFont('Helvetica', 16)
c.drawString(5, 800, 'Question')
c.setFont('Helvetica', 10)
c.drawString(20, 780, a['Question'])
c.line(3, 740, 590, 738)
c.setFont('Helvetica', 16)
c.drawString(5, 720, 'Description')
c.setFont('Helvetica', 10)
x = 20
y = 600
for i in wrap_text:
    c.drawString(x, y, i)
    y = y+10

c.line(3, 420, 590, 418)
c.setFont('Helvetica', 16)
c.drawString(5, 400, 'Skills Required  :  ')
c.setFont('Helvetica', 10)
x = 35
y = 345
for i in a['Skills_Required']:
    c.drawString(x, y, i)
    y = y+10

c.save()
