import React, {
	Component,
	Fragment
} from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
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
import { actions as actionsLogin } from '../../pages/login/store';

class Header extends Component {

	getListArea = () => {
		const {
			list,
			focused,
			mouseIn,
			page,
			handleMouseEnter,
			handleMouseLeave,
			handleChangePage
		} = this.props;

		const pageList = [];
		const newList = list.toJS();

		if ( newList.length ) {
			for ( let i = (page - 1) * 10; i < page * 10; i++) {
				if (!newList[i]) {
					break;
				}
				pageList.push(
					<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
				);
			}
		}

		if (focused || mouseIn) {
			return (
				<SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
					<SearchInfoTitle className='left'>热门搜索</SearchInfoTitle>
					<SearchInfoTitle className='right' onClick={() => { handleChangePage(this.spinIcon) }}>
					<i className="icon iconfont iconChange" ref={ (icon) => { this.spinIcon = icon }}>&#xe851;</i>
					换一批
					</SearchInfoTitle>
					<div className='clear'>
						{ pageList }
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
			handleInputBlur,
			list,
			loginIn,
			handleLogout,
			handleRegister
		} = this.props;
		return (
			<Fragment>
				<HeaderWrapper>
					<Wrapper>
						<Link to='/'>
							<Logo/>
						</Link>
						<Nav>
							<NavItem className='left active'><i className="icon iconfont">&#xe627;</i>首页</NavItem>
							<NavItem className='left black'><i className="icon iconfont">&#xe64f;</i>下载App</NavItem>
							{loginIn ? <NavItem className='right login' onClick={ handleLogout }>退出</NavItem> : <Link to='/login'><NavItem className='right login'>登录</NavItem></Link>}
							<NavItem className='right aaView'><i className="icon iconfont iconAa">&#xe636;</i></NavItem>
							<CSSTransition
								in={focused}
								timeout={500}
								classNames='focused'>
								<NavSearch
									className = { focused ? 'focused' : '' }
									onFocus={() => {handleInputFocus(list)}}
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
							<Link to='/login' onClick={ handleRegister }><NavBtn className='signUp'>注册</NavBtn></Link>
							{loginIn ? <a rel='nofollow me noopener noreferrer' href="https://www.jianshu.com/writer#/notebooks/32296951/notes/38189411" target="_blank"><NavBtn className='signIn'><i className="icon iconfont">&#xe613;</i>写文章</NavBtn></a> :
							<Link to='/login'><NavBtn className='signIn'><i className="icon iconfont">&#xe613;</i>写文章</NavBtn></Link>}
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
		mouseIn: state.getIn(['header', 'mouseIn']),
		list: state.getIn(['header', 'list']),
		page: state.getIn(['header', 'page']),
		loginIn: state.getIn(['login', 'loginIn'])
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus (list) {
			if (list.size === 0) {
				dispatch(actions.getList());
			}
			dispatch(actions.searchFocus());
		},
		handleInputBlur () {
			dispatch(actions.searchBlur());
		},
		handleMouseEnter () {
			dispatch(actions.mouseEnter());
		},
		handleMouseLeave () {
			dispatch(actions.mouseLeave());
		},
		handleChangePage (spin) {
			let original = spin.style.transform.replace(/[^0-9]/ig, '');
			if (original) {
				original = parseInt(original, 10);
			} else {
				original = 0;
			}
			spin.style.transform = 'rotate('+ (original + 360) +'deg)';
			dispatch(actions.changePage());
		},
		handleLogout () {
			dispatch(actionsLogin.logout());
		},
		handleRegister () {
			dispatch(actionsLogin.register());
		}
	}
}

export default connect(matStateToProps, mapDispatchToProps)(Header);