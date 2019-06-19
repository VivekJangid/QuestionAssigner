from django.urls import re_path, include
from . import views
from rest_framework import routers
from django.conf.urls import url
from django.views.decorators.csrf import csrf_exempt


router = routers.DefaultRouter()
router.register('api/candidates', views.CandidateView,
                base_name='CandidateView')
router.register('api/projects', views.ProjectView, base_name='ProjectView')
router.register('api/assignments', views.AssignmentView,
                base_name='AssignmentView')
router.register('api/skills', views.SkillView, base_name='SkillView')

urlpatterns = router.urls + [re_path(
    r'^sendmail/(?P<emailto>[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6})/(?P<aid>[\d+])/(?P<filename>[\w.%+-])/$', csrf_exempt(views.sendmail), name="sendmail"), ]
