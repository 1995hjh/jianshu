import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	WriterWrapper,
	WriterHeader,
	WriterList,
	WriterItem
} from '../style';

class Writer extends Component {
	render() {
		const {
			writerList,
			handleChangePage
		} = this.props;
		return (
			<WriterWrapper>
				<WriterHeader>
					<p>推荐作者</p>
					<div onClick={() => { handleChangePage(this.spinIcon) }}>
						<i className="icon iconfont" ref={(icon) => { this.spinIcon = icon }}>&#xe851;</i>
						换一批
					</div>
				</WriterHeader>
				{
					writerList.map((item) => {
						return (
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
						)
					})
				}
			</WriterWrapper>
		)
	}
}

const mapStateToProps = (state) => ({
	writerList: state.getIn(['home', 'writerList'])
})

const mapDispatchToProps = (dispatch) => {

	return {
		handleChangePage (spin) {
			let original = spin.style.transform.replace(/[^0-9]/ig, '');
			if (original) {
				original = parseInt(original, 10);
			} else {
				original = 0;
			}
			spin.style.transform = 'rotate('+ (original + 360) +'deg)';
		}
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(Writer);