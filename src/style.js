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
	  src: url('./static/iconfont/iconfont.eot?t=1543994493383'); /* IE9*/
	  src: url('./static/iconfont/iconfont.eot?t=1543994493383#iefix') format('embedded-opentype'), /* IE6-IE8 */
	  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
	  url('./static/iconfont/iconfont.ttf?t=1543994493383') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
	  url('./static/iconfont/iconfont.svg?t=1543994493383#iconfont') format('svg'); /* iOS 4.1- */
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