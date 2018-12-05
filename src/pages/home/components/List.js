import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListContent } from '../style';

class List extends Component {
	render() {
		const {
			list
		} = this.props;
		return (
			<Fragment>
				{
					list.map((item) => {
						return (
							<ListItem key={item.get('id')}>
								<ListContent>
									<a className='title'>{item.get('title')}</a>
									<p className='content'>{item.get('content')}</p>
									<div>
										<a href="">{item.get('name')}</a>
										<a href="">
											<i className="icon iconfont iconP">&#xe60c;</i>
											{item.get('commonetNum')}
										</a>
										<span>
											<i className="icon iconfont iconZan">&#xe622;</i>
											{item.get('zanNum')}
										</span>
									</div>
								</ListContent>
								<img src={item.get('imgUrl')} alt={item.get('name')}/>
							</ListItem>
						)
					})
				}
			</Fragment>
		)
	}
}

const mapStateToProps = (state) => ({
	list: state.getIn(['home', 'contentList'])
})

export default connect(mapStateToProps, null)(List);