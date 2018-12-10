import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ListItem, ListContent, ReadMoreBtn, Footer }from '../style';
import { actions } from '../store';

class List extends PureComponent {
	render() {
		const {
			list,
			getMoreList,
			page
		} = this.props;
		return (
			<Fragment>
				{
					list.map((item, index) => {
						return (
							<ListItem key={index}>
								<ListContent>
									<Link to={'/detail/' + item.get('id')} className='title'>{item.get('title')}</Link>
									<p className='content'>{item.get('content')}</p>
									<div>
										<Link to="/detail">{item.get('name')}</Link>
										<Link to="/detail">
											<i className="icon iconfont iconP">&#xe60c;</i>
											{item.get('commonetNum')}
										</Link>
										<span>
											<i className="icon iconfont iconZan">&#xe622;</i>
											{item.get('zanNum')}
										</span>
									</div>
								</ListContent>
								<Link to='/detail'><img src={item.get('imgUrl')} alt={item.get('name')}/></Link>
							</ListItem>
						)
					})
				}
				<ReadMoreBtn onClick={ () => {getMoreList(page)} }>阅读更多</ReadMoreBtn>
				<Footer>
					<ul className='footerItemView'>
						<a href='https://www.jianshu.com/c/jppzD2' target='_blank' rel='nofollow me noopener noreferrer'><li>关于简书</li></a>
						<em> · </em>
						<a href='https://www.jianshu.com/contact' target='_blank' rel='nofollow me noopener noreferrer'><li>联系我们</li></a>
						<em> · </em>
						<a href='https://www.jianshu.com/c/bfeec2e13990' target='_blank' rel='nofollow me noopener noreferrer'><li>加入我们</li></a>
						<em> · </em>
						<a href='https://www.jianshu.com/p/fc1c113e5b6b' target='_blank' rel='nofollow me noopener noreferrer'><li>简书出版</li></a>
						<em> · </em>
						<a href='https://www.jianshu.com/press/resources' target='_blank' rel='nofollow me noopener noreferrer'><li>品牌与徽标</li></a>
						<em> · </em>
						<a href='https://www.jianshu.com/faqs' target='_blank' rel='nofollow me noopener noreferrer'><li>帮助中心</li></a>
						<em> · </em>
						<a href='https://www.jianshu.com/p/cabc8fa39830' target='_blank' rel='nofollow me noopener noreferrer'><li>合作伙伴</li></a>
					</ul>
					<div className="icp">
					    &copy;2012-2018 上海佰集信息科技有限公司 / 简书 / 沪ICP备11018329号-5 /
					    <a target="_blank" rel='nofollow me noopener noreferrer' href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402002252">
					        <img src="//cdn2.jianshu.io/assets/web/smrz-557fa318122c99a66523209bf9753a27.png" alt="Smrz"/>
						</a>
						<a target="_blank" rel='nofollow me noopener noreferrer' href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402002252">沪公网安备31010402002252号 / </a>
					    <a target="_blank" rel='nofollow me noopener noreferrer' href="http://www.shjbzx.cn/">
					         <img src="//cdn2.jianshu.io/assets/web/wxb-a216456895eb66c17497dbd3da443cf8.png" alt="Wxb"/>
						</a>
						举报电话：021-34770013 /
					    <a target="_blank" rel='nofollow me noopener noreferrer' href="http://218.242.124.22:8081/businessCheck/verifKey.do?showType=extShow&amp;serial=9031000020171107081457000002158769-SAIC_SHOW_310000-20171115131223587837&amp;signData=MEQCIADWZ5aTcBeER5SOVp0ly+ElvKnwtjczum6Gi6wZ7/wWAiB9MAPM22hp947ZaBobux5PDkd0lfqoCOkVV7zjCYME6g==">
					         <img src="//cdn2.jianshu.io/assets/web/zggsrz-5695587dccf490ca3e651f4228f7479e.png" alt="Zggsrz"/>
						</a>
					</div>
				</Footer>
			</Fragment>
		)
	}
}

const mapStateToProps = (state) => ({
	list: state.getIn(['home', 'contentList']),
	page: state.getIn(['home', 'contentPage'])
})

const mapDispatchToProps = (dispatch) => {
	return {
		getMoreList(page) {
			const action = actions.getMoreInfo(page);
			dispatch(action);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(List);