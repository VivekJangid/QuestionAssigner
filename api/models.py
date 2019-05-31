from django.db import models
from django.contrib.auth.models import User


class Skill(models.Model):
    skill = models.CharField(max_length=50)


class Candidate(models.Model):
    name = models.CharField(max_length=50, default='')
    email = models.EmailField(max_length=254, null=False, default=None)
    skills = models.ManyToManyField(Skill, blank=True, null=True)
    mob = models.CharField(max_length=10)
    yrs_exp = models.FloatField()


class Project(models.Model):
    title = models.CharField(max_length=200)
    created_at = models.DateTimeField(null=True, auto_now_add=True)
    updated_at = models.DateTimeField(null=True, auto_now_add=True)


class Assignment(models.Model):
    question = models.CharField(max_length=200)
    skills_required = models.CharField(max_length=200)
    level_required = models.CharField(max_length=50)
    created_at = models.DateTimeField(null=True, auto_now_add=True)
    skills = models.ManyToManyField(Skill, blank=True, null=True)
