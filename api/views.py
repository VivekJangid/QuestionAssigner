from django.shortcuts import render
from .serializers import *
from rest_framework import viewsets, permissions, generics, status
from .models import *
from rest_framework.decorators import detail_route
from rest_framework.response import Response
from django.core.mail import EmailMessage
from django.http import HttpRequest, HttpResponse
from django.views.generic import View
import os
from reportlab.pdfgen import canvas
import textwrap
from reportlab.lib.pagesizes import A4
from rest_framework.parsers import FileUploadParser, MultiPartParser
from rest_framework.views import APIView


class AssignmentView(viewsets.ModelViewSet):
    serializer_class = AssignmentSerializer
    queryset = Assignment.objects.all()


class SkillView(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

    def perform_create(self, serializer):
        serializer.save(skill=self.request.data["skill"].upper())


class FileView(APIView):
    parser_class = (FileUploadParser, MultiPartParser,)

    def post(self, request, *args, **kwargs):
        file_serializer = FileSerializer(data=request.data)
        if file_serializer.is_valid():
            file_serializer.save()
            return Response(file_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def assigpdf(aid):
    a = {}
    i = Assignment.objects.get(id=aid)
    b = []
    for j in i.skills_required.all():
        b.append(j.skill)
    a['Question'] = i.question
    a['Question_info'] = i.question_info
    a['Skills_Required'] = b
    print(a)

    # filename = 'assignment.pdf'
    # desc = textwrap.wrap(i.question_info, 100)
    # if (os.path.exists(filename)):
    #     os.remove(filename)

    # c = canvas.Canvas(filename, pagesize=A4)
    # c.setFont('Helvetica', 16)
    # c.drawString(5, 800, 'Question')
    # c.setFont('Helvetica', 10)
    # c.drawString(20, 780, a['Question'])
    # c.line(3, 740, 590, 738)
    # c.setFont('Helvetica', 16)
    # c.drawString(5, 720, 'Description')
    # c.setFont('Helvetica', 10)
    # x = 20
    # y = 700
    # for i in desc:
    #     c.drawString(x, y, i)
    #     y = y-10
    # c.line(3, 420, 590, 418)
    # c.setFont('Helvetica', 16)
    # c.drawString(5, 400, 'Skills Required  :  ')
    # c.setFont('Helvetica', 10)
    # x = 35
    # y = 380
    # for i in a['Skills_Required']:
    #     c.drawString(x, y, i)
    #     y = y-10

    # c.save()


def sendmail(request, emailto, selected):
    if(request.method == 'POST'):
        subject = 'Complete the assignments'
        message = "http://localhost:8000/#/uploadfile"
    assigpdf(selected)
    filename = 'assignment.pdf'
    from_email = 'intern_vivek@sarvika.com'
    email = EmailMessage(subject, message, from_email, [emailto])
    email.attach_file(filename)
    email.send()
    return HttpResponse(email)


def sendmailmulti(request, emailto, selected):
    print(selected)
    assi = selected.split(",")
    for i in assi:
        assigpdf(int(i))
    # if(request.method == 'POST'):
    #     subject = 'Complete the assignments'
    #     message = "http://localhost:8000/#/uploadfile"
    # assigpdf(selected)
    # filename = 'assignment.pdf'
    # from_email = 'intern_vivek@sarvika.com'
    # email = EmailMessage(subject, message, from_email, [emailto])
    # email.attach_file(filename)
    # email.send()
    # return HttpResponse(email)
