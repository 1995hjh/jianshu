import React, {
	Component
} from 'react';
import { connect } from 'react-redux';
import {
	DetailWrapper,
	Content,
	Header,
	Writer,
	Article
} from './style';
import { actions } from './store';

class Deatil extends Component {

	componentDidMount() {
		this.props.getDetail();
	}

	render() {
		const {
			detail
		} = this.props;
		return (
			<DetailWrapper>
				<Content>
					<Header>{detail.get('title')}</Header>
					<Writer>
						<img className='writerImg' src={detail.getIn(['writer', 'src'])} alt='writerImg'/>
						<div className='writerDesc'>
							<div className='descView'>
								<a className='name' href='/'>{detail.getIn(['writer', 'name'])}</a>
								<a className='userBtn' href='/'><em>+</em> 关注</a>
							</div>
							<div className='meta'>
								<span>{detail.getIn(['writer', 'time'])}</span>
								<span>字数 {detail.getIn(['writer', 'wordNum'])}</span>
								<span>阅读 {detail.getIn(['writer', 'readNum'])}</span>
								<span>评论 {detail.getIn(['writer', 'comNum'])}</span>
								<span>喜欢 {detail.getIn(['writer', 'loveNum'])}</span>
							</div>
						</div>
					</Writer>
					<Article dangerouslySetInnerHTML={{__html: detail.get('content')}}/>
				</Content>
			</DetailWrapper>
		)
	}
}

const mapStateToProps = (state) => ({
	detail: state.getIn(['detail', 'detail'])
})

const mapDispatchToProps = (dispatch) => {
	return {
		getDetail() {
			dispatch(actions.getDetailInfo());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Deatil);