# Backbeat

Alpaca 的个人主页，汇集公开作品、博客、开源项目、正在做的事和常逛的网站。

使用原生 HTML、CSS 和少量 JavaScript，无依赖、无构建步骤、无外部资源请求。主题默认跟随系统，也可以手动切换，选择保存在本地的 `backbeat.theme` 中。

## 本地预览

在项目目录运行：

```sh
python3 -m http.server 5812 --bind 127.0.0.1
```

浏览器打开 `http://127.0.0.1:5812/`。

## 部署与更新

通过 GitHub Pages 从 `main` 分支的仓库根目录部署，仓库为 `alpacaA1/alpacaA1.github.io`，访问地址为 `https://alpacaa1.github.io/`。

在仓库的 Pages 设置中选择从分支部署，并将分支设为 `main`、目录设为根目录。修改 `index.html` 即可更新内容；配色与排版在 `style.css` 中，主题切换在 `script.js` 中。
