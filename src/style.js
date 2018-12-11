import styled, {
	createGlobalStyle,
} from 'styled-components';

export const GloabelStyle = createGlobalStyle `
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed,
	figure, figcaption, footer, header, hgroup,
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure,
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	a {
		text-decoration: none;
		color: #333;
	}
	* {
		outline: 0
	}

	html, body, #root {
		width: 100%;
		height: 100%;
	}

	#root {
		position: relative;
	}

	@font-face {font-family: "iconfont";
	  src: url('./static/iconfont/iconfont.eot?t=1544429979722'); /* IE9*/
	  src: url('./static/iconfont/iconfont.eot?t=1544429979722#iefix') format('embedded-opentype'), /* IE6-IE8 */
	  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
	  url('./static/iconfont/iconfont.ttf?t=1544429979722') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
	  url('./static/iconfont/iconfont.svg?t=1544429979722#iconfont') format('svg'); /* iOS 4.1- */
	}

	.iconfont {
	  font-family:"iconfont" !important;
	  font-size:16px;
	  font-style:normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}

	i {
		margin-right: 5px;
	}

	.clear {
		clear: both;
	}
`

export const BackTop = styled.div `
	position: fixed;
	right: 5%;
	bottom: 5%;
	width: 50px;
	height: 50px;
	border-radius: 4px;
	color: #333;
	text-align: center;
	line-height: 52px;
	border: 1px solid #dcdcdc;
	cursor: pointer;
	i {
		margin-right: 0;
    }
    &:hover {
		background: #f5f5f5;
    }
`