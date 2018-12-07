import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ListItem, ListContent, ReadMoreBtn } from '../style';
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
									<Link to='/detail' className='title'>{item.get('title')}</Link>
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