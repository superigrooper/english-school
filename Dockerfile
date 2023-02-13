FROM nginx

COPY ./index.html /usr/share/nginx/html
COPY ./favicon.ico /usr/share/nginx/html
COPY ./img /usr/share/nginx/html/img
COPY ./js /usr/share/nginx/html/js
COPY ./nginx.conf /etc/nginx/nginx.conf
