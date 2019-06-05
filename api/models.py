from django.db import models
from django.contrib.auth.models import User


class Skill(models.Model):
    skill = models.CharField(max_length=50,  default='', unique=True)

    def __str__(self):
        return self.skill


class Candidate(models.Model):
    name = models.CharField(max_length=50, default='')
    email = models.EmailField(max_length=254, null=False, default=None)
    skills = models.ManyToManyField(Skill, blank=False)
    mob = models.CharField(max_length=10, blank=False)
    yrs_exp = models.FloatField()


class Project(models.Model):
    title = models.CharField(max_length=200)
    created_at = models.DateField(null=True, auto_now_add=True)
    updated_at = models.DateField(null=True, auto_now_add=True)


class Assignment(models.Model):
    question = models.CharField(max_length=200)
    level_required = models.CharField(max_length=50)
    created_at = models.DateField(null=True, auto_now_add=True)
    skills_required = models.ManyToManyField(Skill)
