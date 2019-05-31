from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('api/candidates', views.CandidateView,
                base_name='CandidateView')
router.register('api/projects', views.ProjectView, base_name='ProjectView')
router.register('api/assignments', views.AssignmentView,
                base_name='AssignmentView')
router.register('api/skills', views.SkillView, base_name='SkillView')

urlpatterns = router.urls
