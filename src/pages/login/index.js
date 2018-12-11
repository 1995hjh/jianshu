import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
	Wrapper,
	LoginArea,
	LoginItem,
	ItemWrapper,
	ItemView
} from './style';
import { actions } from './store';

class Login extends PureComponent {

	render () {

		const {
			login,
			updateLogin,
			checked,
			handleCheck
		} = this.props;

		return (
			<Wrapper>
				<LoginArea>
					<ItemWrapper>
						<LoginItem className={login && 'activeLogin'} onClick={() => {updateLogin(login)}}>登录</LoginItem>
						<em>·</em>
						<LoginItem className={!login && 'activeLogin'} onClick={() => {updateLogin(login)}}>注册</LoginItem>
					</ItemWrapper>
					{login ? <ItemView>
						<div className='inputView loginInput'>
							<i className="icon iconfont">&#xe642;</i>
							<input type='text' placeholder='手机号或邮箱' className='input'/>
						</div>
						<div className='inputView pwdInput'>
							<i className="icon iconfont">&#xe623;</i>
							<input type='password' placeholder='密码' className='input'/>
						</div>
						<div className='loginWarn'>
							<div className='warnLeft'>
								<input name="remeber" type="checkbox" checked={checked} className='inputCheck' onChange={() => {handleCheck(checked)}}/>
								记住我
							</div>
							<div className='warnRight'>登录遇到问题?</div>
						</div>
						<div className='loginBtn'>登录</div>
						<h6 className='more-login'>社交帐号登录</h6>
						<ul className='connectView'>
							<a href="https://api.weibo.com/oauth2/authorize?client_id=1881139527&redirect_uri=http%3A%2F%2Fwww.jianshu.com%2Fusers%2Fauth%2Fweibo%2Fcallback&response_type=code&state=%257B%257D" target='_blank' rel='nofollow me noopener noreferrer'>
								<li><i className="icon iconfont iconWeibo">&#xe73c;</i></li>
							</a>
							<a href="https://open.weixin.qq.com/connect/qrconnect?appid=wxe9199d568fe57fdd&client_id=wxe9199d568fe57fdd&redirect_uri=http%3A%2F%2Fwww.jianshu.com%2Fusers%2Fauth%2Fwechat%2Fcallback&response_type=code&scope=snsapi_login&state=%257B%257D#wechat_redirect" target='_blank' rel='nofollow me noopener noreferrer'>
								<li><i className="icon iconfont iconWx">&#xe637;</i></li>
							</a>
							<a href="https://graph.qq.com/oauth2.0/show?which=Login&display=pc&client_id=100410602&redirect_uri=http%3A%2F%2Fwww.jianshu.com%2Fusers%2Fauth%2Fqq_connect%2Fcallback&response_type=code&state=%257B%257D" target='_blank' rel='nofollow me noopener noreferrer'>
								<li><i className="icon iconfont iconQQ">&#xe73e;</i></li>
							</a>
							<a href="https://www.douban.com/service/auth2/auth?client_id=07b4f47aa74e2448171edd6ff5ea6cd8&redirect_uri=https%3A%2F%2Fwww.jianshu.com%2Fusers%2Fauth%2Fdouban%2Fcallback&response_type=code&state=%257B%257D" target='_blank' rel='nofollow me noopener noreferrer'>
								<li className='iconOther'>其他</li>
							</a>
						</ul>
					</ItemView> :
					<ItemView>
						<div className='inputView loginInput'>
							<i className="icon iconfont">&#xe607;</i>
							<input type='text' placeholder='你的昵称' className='input'/>
						</div>
						<div className='inputView phoneInput'>
							<i className="icon iconfont">&#xe642;</i>
							<input type='password' placeholder='手机号' className='input'/>
						</div>
						<div className='inputView pwdInput'>
							<i className="icon iconfont">&#xe623;</i>
							<input type='password' placeholder='设置密码' className='input'/>
						</div>
						<div className='loginBtn regiterBtn'>注册</div>
						<div className='registerWarn'>
							点击 “注册” 即表示您同意并愿意遵守简书
							<a href="http://www.jianshu.com/p/c44d171298ce" target='_blank' rel='nofollow me noopener noreferrer'>用户协议</a>
							&nbsp;和&nbsp;
							<a href="http://www.jianshu.com/p/2ov8x3" target='_blank' rel='nofollow me noopener noreferrer'>隐私政策</a>
							。
						</div>
						<h6 className='more-login'>社交帐号直接注册</h6>
						<ul className='connectView'>
							<a href="https://open.weixin.qq.com/connect/qrconnect?appid=wxe9199d568fe57fdd&client_id=wxe9199d568fe57fdd&redirect_uri=http%3A%2F%2Fwww.jianshu.com%2Fusers%2Fauth%2Fwechat%2Fcallback&response_type=code&scope=snsapi_login&state=%257B%257D#wechat_redirect" target='_blank' rel='nofollow me noopener noreferrer'>
								<li><i className="icon iconfont iconWx">&#xe637;</i></li>
							</a>
							<a href="https://graph.qq.com/oauth2.0/show?which=Login&display=pc&client_id=100410602&redirect_uri=http%3A%2F%2Fwww.jianshu.com%2Fusers%2Fauth%2Fqq_connect%2Fcallback&response_type=code&state=%257B%257D" target='_blank' rel='nofollow me noopener noreferrer'>
								<li><i className="icon iconfont iconQQ">&#xe73e;</i></li>
							</a>
						</ul>
					</ItemView>
					}
				</LoginArea>
			</Wrapper>
		)
	}
}

const mapStateToProps = (state) => ({
	login: state.getIn(['login', 'login']),
	checked: state.getIn(['login', 'checked'])
})

const mapDispatchToProps = (dispatch) => {
	return {
		updateLogin(login) {
			dispatch(actions.updateLoginInfo(login));
		},
		handleCheck(checked) {
			dispatch(actions.updateCheacked(checked));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
