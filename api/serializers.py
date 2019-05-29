from rest_framework import serializers
from .models import *


class CandidateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candidate
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):

    project_id = serializers.IntegerField(read_only=True, source="id")

    class Meta:
        model = Project
        fields = '__all__'


class AssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assignment
        fields = '__all__'
