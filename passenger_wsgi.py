import sys, os

# Replace with your actual path on the cPanel server
project_home = '/home/cyberhos/cyberhost_africa'
if project_home not in sys.path:
    sys.path.insert(0, project_home)

# Replace 'yourprojectname' with the actual name of the folder with settings.py
os.environ['DJANGO_SETTINGS_MODULE'] = 'cyberhost_africa.settings'

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
