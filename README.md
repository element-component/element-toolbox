# element-toolbox
> element 组件开发工具

# 依赖
[cooking >=0.2.3](https://github.com/ElemeFE/cooking)

# 安装
```shell
npm install element-toolbox -g
```

# 用法
```shell
# 初始化一个空项目
element-toolbox init

# 开发模式，启动 webpack dev server
element-toolbox dev

# 测试模式
element-toolbox test [--single-run]

# 构建
element-toolbox build

# 将会执行 test 和 git push
element-toolbox push

# 会自动 test, push, modify version, add tag，npm publish 默认采用 patch
element-toolbox publish [patch|minor|major|$version|pre$type]

# 部署 example 到 gh-pages 分支
element-toolbox deploy-demo
```

# License
MIT
