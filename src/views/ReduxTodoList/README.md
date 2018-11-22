# 注释

* components 文件夹内的组件为 [展示组件](https://cn.redux.js.org/docs/basics/UsageWithReact.html) ，作用为 `描述如何展现（骨架、样式）`

* containers 文件夹为 容器组件，作用为 `描述如何运行（数据获取、状态更新）`

* 两者进行组合形成一个混合组件

* 该 demo 对展示和容器进行了明显的分离，当然实际开发中我们可以先将其混合编写以便于理解，如 [TodoList2](https://github.com/KokoTa/react-book-program/tree/master/other/TodoList-demo)，然后随着项目扩大再进行分离。