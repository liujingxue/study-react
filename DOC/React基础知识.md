## 大标题
### 小标题
### `带阴影`
```
    ## 大标题
    ### 小标题
    ### `带阴影的小标题`
```

## 一、使用create-react-app
```
    npm i create-react-app -g
    create-react-app boss
    cd boss
    npm start
    浏览器打开localhost:3000端口
```

## 二、项目目录
```
    |-- src
        |-- components           //自己写组件的地方
            |-- header.js
            |-- footer.js

```

## 如何使用create-react-app
```
    npm run eject

```
出现错误：
Failed at the boss@0.1.0 eject script.

This is probably not a problem with npm. There is likely additional logging output above.
使用npm run eject命令失败

Error with run “npm run eject”. Error 'Remove untracked files, stash or commit any changes, and try again.'

解决办法：这是个git问题，你的版本库里有未提交的文件。

