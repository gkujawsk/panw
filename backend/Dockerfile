FROM fedora:latest
WORKDIR /app
RUN yum update -y
RUN yum install -y pip
RUN pip install django==3.0.2
RUN django-admin startproject app
RUN python3 /app/manage.py migrate
RUN sed -i 's/ALLOWED_HOSTS = \[\]/ALLOWED_HOSTS = \[\"*"\]/' /app/app/settings.py
CMD ["python3", "/app/manage.py", "runserver", "0.0.0.0:8080"]