# webpack-test/baby

### 调试步骤

* $ npm install
* $ vim /etc/hosts 添加内容：

```
127.0.0.1       develop.com
```

* $ vim /usr/local/etc/nginx/nginx.conf 添加内容：

```
server {
        listen 80;
        server_name develop.com;
        charset utf-8;
        root /Users/kai/Documents/workspace/es6-experience/Sample-Code/webpack-test/baby;
        autoindex on;
        autoindex_exact_size on;

        location ~* /.+\.[a-z]+$ {
            proxy_set_header x-request-filename $request_filename;
            proxy_pass http://127.0.0.1:8080;
        }
    }
```

* $ sudo nginx -s reload  
* $ cd /Users/kai/Documents/workspace/es6-experience/Sample-Code/vue-test/nephew
* $ webpack-dev-server --port=8080
* 浏览器打开http://develop.com/html/home.html


