from django.db import models
from django.contrib.auth.models import User


class Skill(models.Model):
    skill = models.CharField(max_length=50,  default='', unique=True)


class File(models.Model):
    file = models.FileField()


class Assignment(models.Model):
    question = models.CharField(max_length=200)
    question_info = models.TextField()
    level_required = models.CharField(max_length=50)
    created_at = models.DateField(null=True, auto_now_add=True)
    skills_required = models.ManyToManyField(Skill)

    class Meta:
        ordering = ('level_required',)


# c = []
# b = []
# a = {}
# for i in As:
    # a['Question'] = As.question
    # a['Question_info'] = As.question_info
    # a['Level_Required'] = As.level_required
# for j in i.skills_required.all():
#     b.append(j.skill)
# a['Skills'] = b
# b = []
# c.append(a)
# a = {}
