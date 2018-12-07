import React, { Component } from 'react';
import axios from 'axios';
import {
	Wrapper,
	Content,
	ContentItem
} from './style';
import { connect } from 'react-redux';
import List from './components/List';
import Topic from './components/Topic';
import Writer from './components/Writer';
import Recommand from './components/Recommand';
import { actions } from './store';

class Home extends Component {

	componentDidMount() {
		axios.get('api/home.json').then((res) => {
			const result = res.data.data;
			const action = actions.getHomeData(result);
			this.props.changeHomeData(action);
		}).catch(() => {
			console.warn('home request error');
		})
	}

	render () {
		return (
			<Wrapper>
				<Content>
					<ContentItem className='left'>
						<img src={require('../../static/banner1.jpg')} alt='banner1' className='banner'/>
						<Topic></Topic>
						<List></List>
					</ContentItem>
					<ContentItem className='right'>
						<Recommand></Recommand>
						<Writer></Writer>
					</ContentItem>
				</Content>
			</Wrapper>
		)
	}
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => {
	return {
		changeHomeData(action) {
			dispatch(action);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
