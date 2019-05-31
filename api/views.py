from django.shortcuts import render
from .serializers import *
from rest_framework import viewsets, permissions, generics
from .models import *
from rest_framework.decorators import detail_route
from rest_framework.response import Response


class CandidateView(viewsets.ModelViewSet):
    serializer_class = CandidateSerializer
    queryset = Candidate.objects.all()


class ProjectView(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()


class AssignmentView(viewsets.ModelViewSet):
    serializer_class = AssignmentSerializer
    queryset = Assignment.objects.all()
