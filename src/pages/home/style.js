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