import React, {
	Component,
	Fragment
} from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {
	HeaderWrapper,
	Logo,
	Wrapper,
	Nav,
	NavItem,
	NavSearch,
	NavBtnView,
	NavBtn,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoItem
} from './style';
import { actions } from './store';

class Header extends Component {

	getListArea = () => {
		const {
			list,
			focused
		} = this.props;
		if (focused) {
			return (
				<SearchInfo>
					<SearchInfoTitle className='left'>热门搜索</SearchInfoTitle>
					<SearchInfoTitle className='right'>换一批</SearchInfoTitle>
					<div className='clear'>
						{
							list.map((item, index) => {
								return index < 10 ? (<SearchInfoItem key={item}>{item}</SearchInfoItem>) : null;
							})
						}
					</div>
				</SearchInfo>
			);
		} else {
			return null;
		}
	}
	
	render() {

		const {
			focused,
			handleInputFocus,
			handleInputBlur
		} = this.props;

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
									onFocus={handleInputFocus}
									onBlur={handleInputBlur}></NavSearch>
							</CSSTransition>
							<CSSTransition 
								in={focused}
								timeout={500}
								classNames='ifocused'>
								<i className={ focused ? 'icon iconfont iconSearch focused' : 'icon iconfont iconSearch'}>&#xe61e;</i>
							</CSSTransition>
							{this.getListArea()}
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

const matStateToProps = (state) => {
	return {
		focused: state.getIn(['header', 'focused']),
		list: state.getIn(['header', 'list'])
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus () {
			dispatch(actions.getList());
			dispatch(actions.searchFocus());
		},
		handleInputBlur () {
			dispatch(actions.searchBlur());
		}
	}
}

export default connect(matStateToProps, mapDispatchToProps)(Header);