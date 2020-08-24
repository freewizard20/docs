# express-https setup!

1. basics

```
sudo apt-get update
sudo apt-get install nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

2. certbot ssl cert 

- do https redirect

```
sudo apt-get update
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install python-certbot-nginx
sudo certbot --nginx // do this every 3 months?
```

3. nginx reverse proxy

- `sudo vim /etc/nginx/conf.d/nodeapp.conf`

```
server {
listen 80;
listen 443 ssl;

server_name fire.mydomain.me;

ssl_certificate     /etc/letsencrypt/live/fire.mydomain.me/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/fire.mydomain.me/privkey.pem;

location / {
    proxy_pass http://localhost:8080;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
   }
}
```

- `sudo nginx -t`
- `sudo nginx -s reload`
- test api with dummy
