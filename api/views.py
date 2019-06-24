from django.shortcuts import render
from .serializers import *
from rest_framework import viewsets, permissions, generics, status
from .models import *
from rest_framework.decorators import detail_route
from rest_framework.response import Response
from django.core.mail import EmailMessage
from django.http import HttpRequest, HttpResponse
from django.views.generic import View
from rest_framework.parsers import FileUploadParser, MultiPartParser
from rest_framework.views import APIView
from .createpdf import *


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


def createlist(selected):
    asslist = []
    for aid in selected:
        a = {}
        i = Assignment.objects.get(id=int(aid))
        b = []
        for j in i.skills_required.all():
            b.append(j.skill)
        a['Question'] = i.question
        a['Question_info'] = i.question_info
        a['Skills_Required'] = b
        asslist.append(a)
    return asslist


def sendmail(request, emailto, selected):
    if(request.method == 'POST'):
        subject = 'Complete the assignments'
        message = "http://localhost:8000/#/uploadfile"
        a = createlist(selected)
        canv = createcanvas(filename)
        assigpdf(canv, a)
        from_email = 'intern_vivek@sarvika.com'
        email = EmailMessage(subject, message, from_email, [emailto])
        email.attach_file(filename)
        email.send()

        return HttpResponse(email)


def sendmailmulti(request, emailto, selected):
    if(request.method == 'POST'):
        subject = 'Complete the assignments'
        message = "http://localhost:8000/#/uploadfile"
        assids = selected.split(",")
        a = createlist(assids)
        canv = createcanvas(filename)
        assigpdf(canv, a)
        from_email = 'intern_vivek@sarvika.com'
        email = EmailMessage(subject, message, from_email, [emailto])
        email.attach_file(filename)
        email.send()
        return HttpResponse(email)
