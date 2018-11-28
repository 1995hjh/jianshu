import {
	createGlobalStyle
} from 'styled-components'

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

	@font-face {
	  font-family: "iconfont";
	  src: url('./static/iconfont/iconfont.eot?t=1543370652386'); /* IE9*/
	  src: url('./static/iconfont/iconfont.eot?t=1543370652386#iefix') format('embedded-opentype'), /* IE6-IE8 */
	  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
	  url('./static/iconfont/iconfont.ttf?t=1543370652386') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
	  url('./static/iconfont/iconfont.svg?t=1543370652386#iconfont') format('svg'); /* iOS 4.1- */
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