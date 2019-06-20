from reportlab.lib import pagesizes
from reportlab.lib.colors import red, magenta
from reportlab.lib.units import inch
import os
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4

filename = 'assignment.pdf'


if (os.path.exists(filename)):
    os.remove(filename)
else:
    c = canvas.Canvas(filename, pagesize=A4)
    c.drawString(30, 820, "BurnYourPc Organization/")
    c.drawString(197, 820, "Sudoku Project")
    c.drawString(430, 20, "By PantelisPanka, nikfot, TolisChal")
    c.save()
    # i = Assignment.objects.get(id=1)
    # a = {}
    # b = []
    # a['Question'] = i.question
    # a['Question_info'] = i.question_info
    # a['Level_Required'] = i.level_required
    # a['Created_At'] = str(i.created_at)
    # for j in i.skills_required.all():
    #     b.append(j.skill)
    # a['Skills_Required'] = b

if (os.path.exists(filename)):
    os.remove(filename)
else:
    c = canvas.Canvas(filename, pagesize=A4, bd)
    c.drawString(30, 820, a['Question_info'])
    c.save()

c.translate(inch, inch)
c.setFont("Times-Roman", 20)
c.setFillColor(red)
c.saveState()
c.drawCentredString(2.75*inch, 2.5*inch, "Font size excmples")
c.setFillColor(magenta)
size = 7
x = 2.3 * inch
y = 1.3 * inch
for line in range(7):
    c.setFont("Helvetica", size)
    c.drawRightString(x, y, "%s points" % size)
    c.drawString(x, y, "test")
    y = y-size*1.2
    size = size+1.5
c.restoreState()
c.drawString(0, 0, "%s" % c.getAvailableFonts())
c.showPage()
c.save()

c = Canvas('demo.pdf', pagesize=A4)
c.translate(inch, inch)
c.setFont("Helvetica", 14)
c.setAuthor("JY.zenist.song")
c.setTitle("Hello ReportLib")
c.drawString(3*inch, 3*inch, "Hello World")
c.showPage()




i = Assignment.objects.get(id=aid)
a = {}
b = []
for j in i.skills_required.all():
    b.append(j.skill)
a['Question'] = i.question
a['Question_info'] = i.question_info
a['Skills_Required'] = b
