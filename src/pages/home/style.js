import styled from 'styled-components';

export const Wrapper = styled.div `
	min-width: 768px;
	max-width: 1440px;
	margin: 0 auto;
	height: 100%;
	position: relative;
`
export const Content = styled.div `
	width: 70%;
	margin:30px auto;
	clear: both;
	overflow: hidden;
`

export const ContentItem = styled.div `
	float: left;
	&.left {
		width: 65%;
		margin-right: 5%;
	}
	&.right {
		width: 30%;
	}
	.banner {
		width: 100%;
		border-radius: 4px;
		cursor: pointer;
	}
`

export const TopicWrapper = styled.div `
	margin: 15px 0;
	clear: both;
	margin-left: -15px;
	overflow: hidden;
`

export const TopicItem = styled.div `
	float: left;
	background: #f7f7f7;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	height: 30px;
	line-height: 32px;
	margin-left: 15px;
	margin-top: 10px;
	font-size: 14px;
	padding-right: 10px;
	color: #8d8d8d;
	cursor: pointer;
	img {
		width: 32px;
		height: 32px;
		margin-right: 10px;
		float: left;
		margin-top: -1px;
	}
`

export const ListItem = styled.div `
	overflow: hidden;
	border-top: 1px solid #f0f0f0;
	clear: both;
	width: 100%;
	padding-top: 20px;
	padding-bottom: 15px;
	img {
		float: right;
		width: 25%;
		height: 100px;
		border-radius: 4px;
	}
`

export const ListContent = styled.div `
    font-size: 13px;
    line-height: 24px;
    color: #999;
    float: left;
    margin-right: 5%;
    width: 70%;
    height: 100%;
    .title {
	    font-size: 18px;
	    font-weight: 700;
	    color: #333;
	    max-height: 50px;
	    overflow: hidden;
	    display: block;
	    width: 100%;
	    display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
    }
    .title:hover {
    	text-decoration: underline;
    	color: #000;
    }
    .content {
    	max-height: 75px;
	    display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
    }
    a {
    	color: #999;
    	text-decoration: none;
    	margin-right: 12px;
    	vertical-align: bottom;
    }
    a:hover {
    	color: #787878;
    }
    .iconP {
		font-size: 12px;
		vertical-align: middle;
		margin-right: 1px;
    }
    .iconZan {
    	font-size: 14px;
    	vertical-align: top;
    	margin-right: 1px;
    }
`

export const RecommandWrapper = styled.div`
	margin-top: -5px;
	.guide {
		width: 100%;
		margin-bottom: 2px;
	}
	.codeArea {
		display: block;
		margin: 20px 0;
	    padding: 10px 22px;
	    width: 100%;
	    border: 1px solid #f0f0f0;
	    border-radius: 6px;
	    background-color: #fff;
	    clear: both;
	    overflow: hidden;
	    box-sizing: border-box;
	    text-decoration: none;
	    font-size: 15px;
    	color: #333;
    	white-space: nowrap;
	}
	.codeArea img {
		float: left;
		display: block;
		width: 25%;
		margin-right: 5%;
	}
	.codeArea div {
		float: right;
	    width: 70%;
	    margin: 5% 0;
	}
	.desc {
		margin-top: 4px;
	    font-size: 13px;
	    color: #999;
	}

`

export const WriterWrapper = styled.div `
	width: 100%;
`
export const WriterHeader = styled.div `
	clear: both;
	overflow: hidden;
	color: #969696;
	font-size: 14px;
	margin: 30px 0 20px;
	p {
		float: left;
	}
	div {
		display: block;
		float: right;
		text-decoration: none;
		color: #969696;
		font-size: 14px;
		cursor: pointer;
	}
	div:hover {
		color: #333;
	}
	.iconfont {
		transition: all .2s ease-in;
    	transform-origin: center center;
    	display: block;
    	float: left;
    	font-size: 13px;
	}
`

export const WriterList = styled.div `
	width: 100%;
	clear: both;
	overflow: hidden;
	margin-bottom: 15px;
	.gzArea {
		float: right;
		margin-top: 10px;
	    padding: 0;
	    font-size: 13px;
	    color: #42c02e;
	    text-decoration: none;
	    width: 20%;
	}
	.gzArea i {
		font-weight: bold;
	    margin-right: 0px;
	    vertical-align: text-bottom;
	}
`
export const WriterItem = styled.div `
	float: left;
	width: 80%;
	img {
		width: 20%;
		height: 20%;
		border-radius: 80%;
		display: block;
		margin-right: 5%;
		float: left;
	}
	div {
		float: left;
	    font-size: 12px;
	    color: #969696;
	    margin-top: 4%;
	    width: 75%;
	}
	.name {
	    font-size: 14px;
	    color: #333;
	    text-decoration: none;
	    margin-bottom: 5px;
    	display: block;
	}
`

export const ReadMoreBtn = styled.div`
	width: 100%;
    border-radius: 20px;
    background-color: #a5a5a5;
    height: 40px;
    margin: 30px auto 80px;
    padding: 10px 15px;
    text-align: center;
    font-size: 15px;
    color: #fff;
    cursor: pointer;
    box-sizing: border-box;
    line-height: 20px;
    &:hover {
    	background: #858585;
    }
`
export const Footer = styled.div `
	width: 100%;
	.footerItemView {
		clear: both;
		overflow: hidden;
	}
	.footerItemView a, .footerItemView em{
		float: left;
		color: #969696;
		text-decoration: none;
	    margin-right: 5px;
	    font-size: 13px;
	    display: inline-block;
	}
	.footerItemView a:hover{
		color: #333;
	}
	.icp {
		margin-top: 10px;
		color: #c8c8c8;
		font-size: 12px;
	}
	.icp a{
		text-decoration: none;
		color: #c8c8c8;
		font-size: 12px;
	}
	.icp img {
		height: 30px;
		margin: 0 5px;
		display: inline-block;
		vertical-align: -webkit-baseline-middle;
	}
`
