# REACT-SSR-DEMO
> react ssr demo

## 更新记录
#### feature/1.0
**功能**：支持最简单的版本的SSR，实现最简化的SSR模型。  
**技术**：利用`renderToString`生成HTML字符串，利用express的API渲染出初始页面。  
再web环境引入client的js。

#### feature/2.0
**功能**：支持react-router
**技术**：客户端和服务端分别使用`BrowserRouter`和`StaticRouter`,来匹配不同的路由。


## 常见问题
#### 1. document is undefined
发生在node环境运行了 web代码。

#### 2. require is undefined
错误使用了`webpackNodeExternals`。

#### 3. 错误使用了BrowserRouter
因为BrowserRouter 不能运行于服务端，应该使用无状态的`StaticRouter`。
