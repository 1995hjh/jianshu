import styled from 'styled-components';

export const Wrapper = styled.div `
	min-width: 768px;
	max-width: 1440px;
	margin: 0 auto;
	height: 100%;
	position: relative;
`
export const Content = styled.div `
	width: 60%;
	margin:30px auto;
	clear: both;
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