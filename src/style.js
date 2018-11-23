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
	@font-face {font-family: "iconfont";
	  src: url('./static/iconfont/iconfont.eot?t=1542957741699'); /* IE9*/
	  src: url('./static/iconfont/iconfont.eot?t=1542957741699#iefix') format('embedded-opentype'), /* IE6-IE8 */
	  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
	  url('iconfont.ttf?t=1542957741699') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
	  url('iconfont.svg?t=1542957741699#iconfont') format('svg'); /* iOS 4.1- */
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
`