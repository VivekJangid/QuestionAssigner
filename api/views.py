from django.shortcuts import render
from .serializers import *
from rest_framework import viewsets, permissions, generics
from .models import *
from rest_framework.decorators import detail_route
from rest_framework.response import Response
from django.core.mail import EmailMessage
from django.http import HttpRequest, HttpResponse
from django.views.generic import View
from django.core.files.storage import FileSystemStorage
import os
from reportlab.pdfgen import canvas
import textwrap
from reportlab.lib.pagesizes import A4


class CandidateView(viewsets.ModelViewSet):
    serializer_class = CandidateSerializer
    queryset = Candidate.objects.all()


class ProjectView(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()


class AssignmentView(viewsets.ModelViewSet):
    serializer_class = AssignmentSerializer
    queryset = Assignment.objects.all()


class SkillView(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

    def perform_create(self, serializer):
        serializer.save(skill=self.request.data["skill"].upper())


def savezip(request, file):
    pass


def sendmail(request, emailto, aid):
    if(request.method == 'POST'):
        filename = 'assignment.pdf'
        subject = 'Complete the assignments'
        message = "Here is your Task"
        i = Assignment.objects.get(id=aid)
        a = {}
        b = []
        for j in i.skills_required.all():
            b.append(j.skill)
        a['Question'] = i.question
        a['Question_info'] = i.question_info
        a['Skills_Required'] = b
    desc = textwrap.wrap(i.question_info, 100)
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
    y = 700
    for i in desc:
        c.drawString(x, y, i)
        y = y-10
    c.line(3, 420, 590, 418)
    c.setFont('Helvetica', 16)
    c.drawString(5, 400, 'Skills Required  :  ')
    c.setFont('Helvetica', 10)
    x = 35
    y = 380
    for i in a['Skills_Required']:
        c.drawString(x, y, i)
        y = y-10

    c.save()

    from_email = 'intern_vivek@sarvika.com'
    email = EmailMessage(subject, message, from_email, [emailto])
    email.attach_file(filename)
    email.send()
    return HttpResponse(email)
