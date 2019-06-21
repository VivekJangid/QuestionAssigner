from django.urls import re_path, include, path
from . import views
from rest_framework import routers
from django.conf.urls import url
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register('api/assignments', views.AssignmentView,
                base_name='AssignmentView')
router.register('api/skills', views.SkillView, base_name='SkillView')

urlpatterns = router.urls + [re_path(
    r'^sendmail/(?P<emailto>[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6})/(?P<selected>[\d+])/$', csrf_exempt(views.sendmail), name="sendmail"), path('upload/', views.FileView.as_view()), re_path(
    r'^sendmailmulti/(?P<emailto>[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6})/(?P<selected>([\d]+[,])+[\d]*)/$', csrf_exempt(views.sendmailmulti), name="sendmailmulti"), ]
