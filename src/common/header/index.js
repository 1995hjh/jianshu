import React, {
	Component,
	Fragment
} from 'react';
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

	render() {
		return (
			<Fragment>
				<HeaderWrapper>
					<Wrapper>
						<Logo/>
						<Nav>
							<NavItem className='left active'>首页</NavItem>
							<NavItem className='left black'>下载App</NavItem>
							<NavItem className='right'>Aa</NavItem>
							<NavItem className='right'>登录</NavItem>
							<NavSearch></NavSearch>
						</Nav>
						<NavBtnView>
							<NavBtn className='signUp'>注册</NavBtn>
							<NavBtn className='signIn'>写文章</NavBtn>
						</NavBtnView>
					</Wrapper>
				</HeaderWrapper>
			</Fragment>
		)
	}
}

export default Header;