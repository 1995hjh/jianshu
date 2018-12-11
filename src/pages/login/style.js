import styled from 'styled-components';

export const Wrapper = styled.div `
	width: 100%;
	height: 100%;
	background-color: #f1f1f1;
	overflow: hidden;
`

export const LoginArea = styled.div`
	width: 300px;
    margin: 60px auto 0;
    padding: 50px 40px 40px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
`;

export const ItemWrapper = styled.div`
	width: 50%;
	margin: 0 auto;
	text-align: center;
	em {
    	display: inline-block;
    	margin: 0 5px;
    }
`

export const LoginItem = styled.span`
	cursor: pointer;
	padding: 10px;
    color: #969696;
    display: inline-block;
    font-size: 18px;
	&:hover, &.activeLogin{
		border-bottom: 2px solid #ea6f5a;
		font-weight: 700;
    	color: #ea6f5a;
	}
`

export const ItemView = styled.div`
	padding: 50px 0 0;
	.inputView {
		display: block;
	    width: 100%;
	    margin: 0 auto;
	    height: 45px;
	    border: 1px solid #c8c8c8;
	    background-color: hsla(0,0%,71%,.1);
	    line-height: 45px;
	    padding: 0 3%;
	    box-sizing: border-box;
	}
	.input {
		width: 87%;
	    display: inline-block;
	    height: 100%;
	    border: none;
	    background: transparent;
	}
	i {
		display: inline-block;
    	width: 7%;
    	color: #848484;
	}
	.loginInput {
		border-top-left-radius: 5px;
	    border-top-right-radius: 5px;
	}
	.pwdInput {
		border-top: none;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
	}
	.phoneInput {
		border-top: none;
	}
	.loginWarn {
		clear: both;
		overflow: hidden;
		margin: 20px 0;
		font-size: 15px;
    	color: #969696;
	}
	.warnLeft {
		float: left;
	}
	.warnRight {
		float: right;
		cursor: pointer;
	}
	.warnRight:hover {
		color: #333;
	}
	.loginBtn {
		width: 100%;
	    padding: 9px 18px;
	    font-size: 18px;
	    border: none;
	    border-radius: 25px;
	    color: #fff;
	    cursor: pointer;
	    background: #3194d0;
	    box-sizing: border-box;
	    text-align: center;
	}
	.regiterBtn {
		background: #42c02e;
		margin: 20px 0;
	}
	.more-login {
		position: relative;
	    margin: 45px 0 10px;
	    font-size: 12px;
	    color: #b5b5b5;
	    text-align: center;
	}
	.more-login:before {
		content: "";
	    border-top: 1px solid #b5b5b5;
	    display: block;
	    position: absolute;
	    width: 60px;
	    top: 5px;
	    left: 30px;
	    box-sizing: border-box;
	}
	.more-login:after {
		content: "";
	    border-top: 1px solid #b5b5b5;
	    display: block;
	    position: absolute;
	    width: 60px;
	    top: 5px;
	    right: 30px;
	    box-sizing: border-box;
	}
	.connectView {
		overflow: hidden;
	    padding: 15px 0 0;
	    text-align: center;
	    margin-left: 25px;
	}
	.connectView a {
		display: inline-block;
		margin-right: 13%;
	}
	.connectView i {
		font-size: 28px;
		vertical-align: sub;
	}
	.iconWeibo {
		color: #e05244;
	}
	.iconWx {
		color: #00bb29;
	}
	.iconQQ {
		color: #498ad5;
	}
	.iconOther {
		color: #999;
	}
	.inputCheck {
		margin-right: 5px;
	}
	.registerWarn {
		font-size: 12px;
		color: #b5b5b5;
		letter-spacing: 1px;
	    padding: 0 25px;
	    text-align: center;
	    line-height: 20px;
	}
	.registerWarn a {
		 color: #3194d0;
	}
`