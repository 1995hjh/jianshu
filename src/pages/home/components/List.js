import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListContent, ReadMoreBtn } from '../style';
import { actions } from '../store';

class List extends Component {
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
									<a href='/' className='title'>{item.get('title')}</a>
									<p className='content'>{item.get('content')}</p>
									<div>
										<a href="/">{item.get('name')}</a>
										<a href="/">
											<i className="icon iconfont iconP">&#xe60c;</i>
											{item.get('commonetNum')}
										</a>
										<span>
											<i className="icon iconfont iconZan">&#xe622;</i>
											{item.get('zanNum')}
										</span>
									</div>
								</ListContent>
								<a href='/'><img src={item.get('imgUrl')} alt={item.get('name')}/></a>
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