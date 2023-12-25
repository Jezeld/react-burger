> npx create-react-app название_проекта  или npx create-react-app .   (если проект склонирован и находимся в его папке)   создать проект

>Переключение на стандартный репозиторий
Когда вы закончите обучение или если у вас возникнут сложности с установкой пакетов, к примеру, потребуется установить версии пакетов, которые отсутствуют в репозитории Практикума, рекомендуем переключиться на основной репозиторий.
Для этого нужно выполнить команду в терминале:
Скопировать кодBASH
npm set registry https://registry.npmjs.org/

> rsync -zvarcP --delete /Users/admin/ya-projects/react-mesto-auth/build/ jezeld@158.160.0.180:/home/jezeld/mesto-frontend/      // команда обновления файлов на сервере,если внесены изменения в репо

rsync -zvarcP --delete /Users/admin/ya-projects/movies-explorer-frontend/build/ jezeld@158.160.27.95:/home/jezeld/movies-frontend/

> ls -al ~/.ssh    посмотреть ключи
>ls -lsa посмотреть все скрытые файлы

>sudo vim ./.ssh/authorized_keys добавить доп ключ на ВМ
откроется файл с ключами на вм, туда 2 строкой добавь ключ яндекса и сохрани

> команда захода на вм  ssh 158.160.2.214
> sudo vim /etc/nginx/sites-available/default // зайти в настройки nginx

"dev": "nodemon --inspect -- app.js",  для дебагинга на бэк

>npm install --save-dev eslint установка вручную эслинт

>показать ключ
cat ya_cloud.pub
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIM3Y6f8TNxcczCrDrubocWiJi7XuRPFyH9VwuJvDblda jezeld@mail.ru
>если репозиторий не клонируется по SSH добавляем приватный ключ в
vim id_ed25519
добавить ключ в ssh агент
1) eval $(ssh-agent -s)
2) ssh-add ~/.ssh/название_ключа

ссылка на мануал https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

server {
listen 80;

      server_name api.moviesexplorer.jezeld.nomoreparties.co;

      location / {
                proxy_pass http://localhost:3000;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
      }


}



server {
listen 80;

      server_name moviesexplorer.jezeld.nomoreparties.co;
root /home/jezeld/mesto-frontend;

      location / {
try_files $uri $uri/ /index.html;
}
}



Ссылка доступ карьерный трек  https://drive.google.com/drive/folders/1hg-cRdaZS50yQ1h36gkQha-dYUbkZgCS?usp=sharing


Токен: 141f19a7-2a64-4734-9dd2-fa8ceaaaa66b
Идентификатор группы: cohort-64