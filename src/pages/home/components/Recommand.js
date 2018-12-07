import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RecommandWrapper } from '../style';

class Recommand extends PureComponent {
	render() {
		const {
			recommandList
		} = this.props;
		return (
			<RecommandWrapper>
				{
					recommandList.map((item) => {
						return (
							<a href="/" key={item.get('id')}><img className='guide' src={item.get('imgUrl')} alt={'guide' + item.get('id')}/></a>
						);
					})
				}
				<a href="/" className='codeArea'>
					<img src={require('../../../static/code.png')} alt='code'/>
					<div>
						<p>
							下载简书手机APP
							<i className="icon iconfont">&#xe6ab;</i>
						</p>
						<p className='desc'>随时随地发现和创作新内容</p>
					</div>
				</a>
			</RecommandWrapper>
		)
	}
}

const mapStateToProps = (state) => ({
	recommandList: state.getIn(['home', 'recommandList'])
})

export default connect(mapStateToProps, null)(Recommand);