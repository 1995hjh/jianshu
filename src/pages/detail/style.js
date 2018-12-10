import styled from 'styled-components';

export const DetailWrapper = styled.div `
	min-width: 768px;
	max-width: 1440px;
	margin: 0 auto;
	height: 100%;
	position: relative;
`
export const Content = styled.div `
	width: 40%;
	margin:30px auto;
	clear: both;
	overflow: hidden;
`

export const Header = styled.h1 `
	word-break: break-word!important;
    word-break: break-all;
    margin: 20px 0 0;
    font-size: 32px;
    font-weight: 700;
    line-height: 1.3;
`

export const Writer = styled.div `
	 margin: 30px 0 40px;
	 overflow: hidden;
	 clear: both;
	 .writerImg {
	 	float: left;
	 	cursor: pointer;
	 	width: 48px;
	 	height: 48px;
	 	border-radius: 24px;
	 	margin-right: 8px;
	 }
	 .writerDesc {
	 	float: left;
	 	padding: 8px 0;
	 }
	 .name {
	 	cursor: pointer;
	 	margin-right: 10px;
	 }
	 .userBtn {
	 	text-align: center;
		background-color: #42c02e;
		color: #fff;
		padding: 4px 8px;
    	font-size: 12px;
    	border-radius: 5px;
	 }
	 .userBtn em {
	 	font-weight: bold;
	 }
	 .meta {
	 	margin-top: 10px;
	 	font-size: 12px;
	 	color: #969696;
	 }
	 .meta span {
	 	display: inline-block;
	 	margin-right: 10px;
	 }
`

export const Article = styled.div `
	line-height: 30px;
	white-space: 1px;
	color: #333;
	p, img{
		margin: 0 auto 20px;
		display: block;
	}
`