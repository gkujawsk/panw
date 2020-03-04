FROM fedora:latest
WORKDIR /app
RUN yum -y update
RUN yum -y install pip gcc gcc-c++ make mysql-devel python-devel
COPY requirements.txt ./
RUN pip install -r requirements.txt
COPY . .
RUN yum clean all
#RUN python3 /app/manage.py migrate
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8080"]
