import "./header.css";

const Header = () => {
	return (
		<div className="header">
			<div className="logo" />
			<div className="header-title">
				<div className="title-l1">未然</div>
				<div className="title-l2">构建健康美好的智能医疗世界</div>
			</div>

			<a className="header-link" href="#solution">
				解決方案
			</a>
			<a className="header-link" href="#product">
				产品服务
			</a>
			<a className="header-link" href="#about">
				关于我们
			</a>
			<a className="header-link" href="#about">
				联系我们
			</a>
		</div>
	);
};

export default Header;
