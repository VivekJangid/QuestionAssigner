from django.shortcuts import render
from .serializers import *
from rest_framework import viewsets, permissions, generics
from .models import *
from rest_framework.decorators import detail_route
from rest_framework.response import Response
from django.core.mail import send_mail
from django.http import HttpRequest, HttpResponse
from django.views.generic import View


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


def sendmail(request, emailto, aid):
    if(request.method == 'POST'):
        subject = 'Complete the assignments'
        message = Assignment.objects.get(id=aid).question
        from_email = 'intern_vivek@sarvika.com'
        res = send_mail(subject, message, from_email, [emailto])
        return HttpResponse(res)
