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

