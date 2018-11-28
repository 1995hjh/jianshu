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
	}
`