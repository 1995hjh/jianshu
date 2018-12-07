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
	* {
		outline: 0
	}

	#root {
		position: relative;
	}

	@font-face {font-family: "iconfont";
	  src: url('./static/iconfont/iconfont.eot?t=1544160028165'); /* IE9*/
	  src: url('./static/iconfont/iconfont.eot?t=1544160028165#iefix') format('embedded-opentype'), /* IE6-IE8 */
	  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
	  url('./static/iconfont/iconfont.ttf?t=1544160028165') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
	  url('./static/iconfont/iconfont.svg?t=1544160028165#iconfont') format('svg'); /* iOS 4.1- */
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