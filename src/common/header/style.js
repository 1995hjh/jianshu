import styled from 'styled-components';
import logoPic from '../../static/logo.png';

export const Wrapper = styled.div `
	min-width: 768px;
	max-width: 1440px;
	margin: 0 auto;
	height: 100%;
	position: relative;
`

export const HeaderWrapper = styled.div `
	height: 57px;
	border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.div`
	position: absolute;
	top: 0;
	left: 0%;
	width: 100px;
	height: 56px;
	display: block;
	background: url(${logoPic});
	background-size: cover;
	cursor: pointer;
`

export const Nav = styled.div `
	width: 70%;
	height: 100%;
	margin: 0 auto;
	position: relative;
	.iconSearch {
		position: absolute;
	    top: 14px;
	    left: 52%;
	    font-size: 20px;
	    width: 30px;
	    height: 30px;
	    line-height: 30px;
	    border-radius: 15px;
	    text-align: center;
	    cursor: pointer;
	}
	.focused {
		background: #777;
		color: #fff;
		left: 59%;
    }
    .ifocused-enter {
		transition: all .5s ease-out;
    }
    .ifocused-exit {
    	transition: all .5s ease-in;
    }
`

export const NavItem = styled.div `
	line-height: 57px;
	width: 15%;
	text-align: left;
	font-size: 17px;
	cursor: pointer;
	overflow: hidden;
    white-space: nowrap;
	&.left {
		float: left;
		margin-right: 10px;
	}
	&.right {
		float: right;
		color: #969696;
	}
	&.login {
		width: 10%;
	}
	&.aaView {
		width: 5%;
	}
	&.active {
		color: #ea6f51;
	}
	&.black {
		color: #333;
		margin-left: -5%;
	    text-align: center;
	    margin-right: 5%;
	    width: 12%;
	}
	&.black:hover {
		background: #eee;
	}
	.iconAa {
		font-size: 20px
	}
`

export const NavSearch = styled.input.attrs({
	placeholder: '搜索'
})`
    height: 38px;
    margin: 9px 0;
    background: #eee;
    border: 1px solid #eee;
    border-radius: 19px;
    padding: 0 35px 0 20px;
    box-sizing: border-box;
    color: #666;
    width: 28%;
    &::placeholder {
    	color: #999
    }
    &.focused {
		width: 35%;
		background: #eee;
		color: #666;
		padding: 0 45px 0 20px;
    }
    &.focused-enter {
		transition: all .5s ease-out;
    }
    &.focused-exit {
    	transition: all .5s ease-in;
    }
`
export const SearchInfo = styled.div `
	position: absolute;
    left: 28%;
    top: 58px;
    width: 25%;
    padding: 20px 20px 10px;
    box-shadow: 0 0 8px rgba(0,0,0,0.2);
    background: #fff;
    border-radius: 4px;
    clear: both;
    z-index: 1;
    .iconChange{
    	font-size: 13px;
    	transition: all .2s ease-in;
    	transform-origin: center center;
    	display: block;
    	float: left;
    }
`
export const SearchInfoTitle = styled.div`
	color: #969696;
	font-size: 14px;
	margin-bottom: 5px;
	&.left {
		float: left;
	}
	&.right {
		float: right;
		font-size: 13px;
		cursor: pointer;
	}
	&.right:hover {
		color: #333;
	}
`
export const SearchInfoItem = styled.div`
	float: left;
	margin-right: 10px;
    margin-top: 12px;
    padding: 2px 6px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
    	color: #333;
    	border: 1px solid #b4b4b4;
    }
`

export const NavBtnView = styled.div `
	position: absolute;
	top: 0;
	right: 0%;
	height: 56px;
	display: block;
	width: 15%;
`

export const NavBtn = styled.div `
	cursor: pointer;
	float: left;
	height: 38px;
    margin: 9px 0;
    border-radius: 20px
    text-align: center;
    line-height: 38px;
    border: 1px solid #ea6f5a;
    &.signUp {
    	width: 38%;
		color: #ea6f5a;
		margin-right: 8%;
    }
    &.signUp:hover{
    	background: #faefee;
    }
    &.signIn {
    	width: 45%;
    	color: #fff;
    	background: #ea6f5a;
    }
`
