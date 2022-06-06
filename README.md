## .gitignore规则不生效的解决办法
	git rm -r --cached . （如果操作失误，该步骤撤回命令reset）
	git add .
	git commit -m 'update .gitignore'

## 样式库
	styled-components

## 动画库
	react-transition-group

## 数据管理库
	react-redux和redux

	数据管理
		actionTypes定义一个文件，用来定义action的名称
		actions定义一个文件，用来定义各个action
		reducer定义一个文件，用来处理数据

		以上3个文件可以作为一个小组，整理为一个index.js作为统一的入口，然后各个小组之间通过combineReducers统一管理
		对于reducer的查看，在声明store的文件里做一些配置，详情配置见github的redux-devtools-extension

## 数据处理库
	immutable

	因为redux中只能接收store数据，不能直接处理store数据，鉴于这一特性，可以将store里的数据定义为immutable数据类型，immutable的特点就是处理数据完成之后返回一个新的数据

## 数据格式统一
	redux-immutable

	引入combineReducers的时候，由之前的import { combineReducers } from 'redux'; 改为import { combineReducers } from 'redux-immutable';

## 中间件
	redux-thunk

## 数据请求
	axios

## 路由
	react-router-dom

	采用路由里面的Link完成页面的跳转，而不采用a标签，页面的doc只会加载一次，优化性能

## 图标
	1. Iconfont-阿里巴巴矢量图标库选择图标，加入项目，下载
	2. 复制.eot, .woff, .svg, .ttf到项目文件中
	3. 全局样式设置
		拷贝iconfont.css的@font-face和.iconfont的样式到全局样式中，注意这里修改@font-face的里面文件的路径
	4.以demo_unicode.html的示例方式引入字体图标即可

## dangerouslySetInnerHTML
	dangerouslySetInnerHTMl 是React标签的一个属性
	angerouslySetInnerHTML={{ __html: '' }} 标签渲染字符串为html

## 异步组件
	react-loadable
	详情见detail/loadable.js，首页加载只加载首页的js，点击详情页在加载详情页的js,使用该组件不会在首页一次性加载出所有页面的js,优化代码
	主要该组件结合withRouter的使用

hgg修改了md文件
