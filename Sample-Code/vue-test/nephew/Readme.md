# vue-test/nephew

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

* $ sudo nginx -s reload  
* $ cd /Users/kai/Documents/workspace/es6-experience/Sample-Code/vue-test/nephew
* $ webpack-dev-server --port=8080
* 浏览器打开http://develop.com/index.html#!/

### 难点：嵌套路由
嵌套路由文档：https://github.com/vuejs/vue-router/blob/1.0/docs/zh-cn/nested.md

### 参考文档
* [vue生命周期图](http://mmbiz.qpic.cn/mmbiz_png/tnZGrhTk4de9J8NKgGTv1rjsknI07FhXMvYA3cWctBanoYXuiazx8wLrhRSnYK7XAiaghXRReWlgoylIVmB8d89g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)
