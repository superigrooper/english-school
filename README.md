# english-school.
## Сайт для онлайн-школы английского языка m-boyarskaya.ru
### Технологии:    
1 `HTML5`  
2 `CSS3`  
3 `JS`  
4 `Gulp`  
5 `Sass (SCSS)`  
6 `Pug`- опционально  
7 `Git`  

/home/manile/GreenLanter/sites/English-School

## Типа инструкция по развёртыванию статики на хосте =)

COPY ./src/index.html /usr/share/nginx/html
COPY ./src/favicon.ico /usr/share/nginx/html
COPY ./src/img /usr/share/nginx/html/img
COPY ./src/js /usr/share/nginx/html/js
COPY ./nginx.conf /etc/nginx/nginx.conf


1. Копируем нужные файлы и папки на хост с помощью scp
```bash
    scp ./src/index.html adminvps:/home/manile/GreenLanter/sites/English-School
    scp ./src/favicon.ico adminvps:/home/manile/GreenLanter/sites/English-School
    scp -r ./src/img adminvps:/home/manile/GreenLanter/sites/English-School
    scp -r ./src/js adminvps:/home/manile/GreenLanter/sites/English-School
    scp ./nginx.conf adminvps:/home/manile/GreenLanter/sites/English-School
    scp ./Dockerfile adminvps:/home/manile/GreenLanter/sites/English-School
```

2. Подключаемся к хосту
```bash
    ssh adminvps
```

3. Собираем контейнер
```bash
    docker build /home/manile/GreenLanter/sites/English-School -f Dockerfile -t english_school_site
```

4. Запускаем сервер на 80-ом порту
```bash
    docker run -ti -p 80:80 english_school_site
```