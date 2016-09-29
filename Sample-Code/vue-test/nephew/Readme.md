# vue-test/nephew

调试步骤
> 1 $ npm install
> 2 vim /etc/hosts 添加内容：

```
127.0.0.1       develop.com
```

> 3 vim /usr/local/etc/nginx/nginx.conf 添加内容：

```
server {
        listen 80;
        server_name develop.com;
        charset utf-8;
        root /Users/kai/Documents/workspace/es6-experience/Sample-Code/vue-test/nephew;
        #root /Users/kai/Documents/workspace/es6-experience/Sample-Code;
        autoindex on;
        autoindex_exact_size on;

        location ~* /.+\.[a-z]+$ {
            proxy_set_header x-request-filename $request_filename;
            proxy_pass http://127.0.0.1:8080;
        }
    }
```

> 4 $ sudo nginx -s reload 
> 5 $ cd /Users/kai/Documents/workspace/es6-experience/Sample-Code/vue-test/nephew
> 6 $ webpack-dev-server --port=8080
> 7 浏览器打开http://develop.com/index.html#!/
