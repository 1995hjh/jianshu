import React, {
	Component,
	Fragment
} from 'react';
import { CSSTransition } from 'react-transition-group';
import {
	HeaderWrapper,
	Logo,
	Wrapper,
	Nav,
	NavItem,
	NavSearch,
	NavBtnView,
	NavBtn
} from './style';

class Header extends Component {

	constructor(props) {
		super(props);
		this.state = {
			focused: false
		}
		this.handleInputFocus = this.handleInputFocus.bind(this);
		this.handleInputBlur = this.handleInputBlur.bind(this);
	}

	handleInputFocus () {
		this.setState({
			focused: true
		})
	}

	handleInputBlur () {
		this.setState({
			focused: false
		})
	}

	render() {
		const {
			focused
		} = this.state;
		console.warn(focused);
		return (
			<Fragment>
				<HeaderWrapper>
					<Wrapper>
						<Logo/>
						<Nav>
							<NavItem className='left active'><i className="icon iconfont">&#xe627;</i>首页</NavItem>
							<NavItem className='left black'><i className="icon iconfont">&#xe64f;</i>下载App</NavItem>
							<NavItem className='right login'>登录</NavItem>
							<NavItem className='right aaView'><i className="icon iconfont iconAa">&#xe636;</i></NavItem>
							<CSSTransition 
								in={focused}
								timeout={500}
								classNames='focused'>
								<NavSearch
									className = { focused ? 'focused' : '' }
									onFocus={this.handleInputFocus}
									onBlur={this.handleInputBlur}></NavSearch>
							</CSSTransition>
							<CSSTransition 
								in={focused}
								timeout={500}
								classNames='ifocused'>
								<i className={ focused ? 'icon iconfont iconSearch focused' : 'icon iconfont iconSearch'}>&#xe61e;</i>
							</CSSTransition>
						</Nav>
						<NavBtnView>
							<NavBtn className='signUp'>注册</NavBtn>
							<NavBtn className='signIn'> <i className="icon iconfont">&#xe613;</i>写文章</NavBtn>
						</NavBtnView>
					</Wrapper>
				</HeaderWrapper>
			</Fragment>
		)
	}
}

export default Header;