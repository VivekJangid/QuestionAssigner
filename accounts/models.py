from django.db import models
from django.contrib.auth.models import User


class Candidate(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    skills = models.CharField(max_length=250)
    mob = models.CharField(max_length=10)
    yrs_exp = models.FloatField()


class Project(models.Model):
    title = models.CharField(max_length=200)
    created_at = models.DateTimeField(null=True)
    updated_at = models.DateTimeField(null=True)


class Assignment(models.Model):
    question = models.CharField(max_length=200)
    skills_required = models.CharField(max_length=200)
    completed = models.BooleanField(default=False)
    level_required = models.CharField(max_length=50)
    project_data = models.ForeignKey(Project, on_delete=models.CASCADE)
    is_assigned = models.BooleanField()
