import React, { Component } from 'react';
import {
	Wrapper,
	Content,
	ContentItem
} from './style';
import List from './components/List';
import Topic from './components/Topic';
import Writer from './components/Writer';
import Recommand from './components/Recommand';

class Home extends Component {
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

export default Home;
