import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import {
	WriterWrapper,
	WriterHeader,
	WriterList,
	WriterItem
} from '../style';
import { actions } from '../store';

class Writer extends Component {
	render() {
		const {
			list,
			handleChangePage,
			page
		} = this.props;
		let newList = list.toJS();
		let listHtml = [];
		if (newList.length) {
			for (let i = (page - 1) * 5; i < page * 5; i++) {
				if (!newList[i]) {
					break;
				}
				let item = fromJS(newList[i]);
				listHtml.push(
					<WriterList key={item.get('id')}>
						<WriterItem>
							<a href='/'><img src={item.get('imgUrl')} alt={item.get('imgUrl')}/></a>
							<div>
								<a className='name' href='/'>{item.get('name')}</a>
								<p>写了{item.get('wordNum')}字 · {item.get('loveNum')}喜欢</p>
							</div>
						</WriterItem>
						<a href='/' className='gzArea'>
							<i className="icon iconfont">&#xe618;</i>
							关注
						</a>
					</WriterList>
				);
			}
		}
		return (
			<WriterWrapper>
				<WriterHeader>
					<p>推荐作者</p>
					<div onClick={() => { handleChangePage(this.spinIcon, page) }}>
						<i className="icon iconfont" ref={(icon) => { this.spinIcon = icon }}>&#xe851;</i>
						换一批
					</div>
				</WriterHeader>
				{
					listHtml
				}
			</WriterWrapper>
		)
	}
}

const mapStateToProps = (state) => ({
	list: state.getIn(['home', 'writerList']),
	page: state.getIn(['home', 'writerPage'])
})

const mapDispatchToProps = (dispatch) => {

	return {
		handleChangePage (spin, page) {
			let original = spin.style.transform.replace(/[^0-9]/ig, '');
			if (original) {
				original = parseInt(original, 10);
			} else {
				original = 0;
			}
			spin.style.transform = 'rotate('+ (original + 360) +'deg)';
			dispatch(actions.changeWriterPage(page));
		}
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(Writer);