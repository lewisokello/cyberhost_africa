from django.urls import path
from django.views.generic import TemplateView

urlpatterns = [
    # Main pages
    path('', TemplateView.as_view(template_name='main/home.html'), name='home'),
    path('mission/', TemplateView.as_view(template_name='main/mission.html'), name='mission'),
    path('services/', TemplateView.as_view(template_name='main/services.html'), name='services'),
    path('about/', TemplateView.as_view(template_name='main/about.html'), name='about'),
    path('contact/', TemplateView.as_view(template_name='main/contact.html'), name='contact'),
    
    # Service pages
    path('services/internet/', TemplateView.as_view(template_name='main/internet.html'), name='internet'),
    path('services/it-support/', TemplateView.as_view(template_name='main/it_support.html'), name='it_support'),
    path('services/software/', TemplateView.as_view(template_name='main/software.html'), name='software'),
    path('services/web-ai/', TemplateView.as_view(template_name='main/web_ai.html'), name='web_ai'),
    
    # Additional pages
    path('testimonials/', TemplateView.as_view(template_name='main/testimonials.html'), name='testimonials'),
]
