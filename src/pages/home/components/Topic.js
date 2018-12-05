import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	TopicWrapper,
	TopicItem
} from '../style';

class Topic extends Component {
	render() {
		const {
			list
		} = this.props;
		return (
			<TopicWrapper>
				{
					list.map((item, index) => {
						return (
							<TopicItem key={item.get('id')}>
								<img src={item.get('imgUrl')} alt={item.get('title')}/>
								{item.get('title')}
							</TopicItem>
						)
					})
				}
			</TopicWrapper>
		)
	}
}

const mapStateToProps = (state) => ({
	list: state.getIn(['home', 'topicList'])
})

export default connect(mapStateToProps, null)(Topic);