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

export const Logo = styled.a.attrs({
	href: '/'
})`
	position: absolute;
	top: 0;
	left: 5%;
	width: 100px;
	height: 56px;
	display: block;
	background: url(${logoPic});
	background-size: cover;
`

export const Nav = styled.div `
	width: 60%;
	height: 100%;
	margin: 0 auto;
	position: relative;
	.iconSearch {
		position: absolute;
	    top: 14px;
	    left: 53%;
	    font-size: 20px;
	    width: 30px;
	    height: 30px;
	    line-height: 30px;
	    border-radius: 15px;
	    text-align: center;
	    cursor: pointer;
	}
`

export const NavItem = styled.div `
	line-height: 57px;
	width: 15%;
	text-align: center;
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
	}
	.iconAa {
		font-size: 20px
	}
`

export const NavSearch = styled.input.attrs({
	placeholder: '搜索'
})`	
	width: 20%;
	height: 38px;
    margin: 9px 0;
    background: #eee;
    border: 1px solid #eee;
    border-radius: 19px;
    padding: 0 20px;
    &::placeholder {
    	color: #999
    }
`

export const NavBtnView = styled.div `
	position: absolute;
	top: 0;
	right: 5%;
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