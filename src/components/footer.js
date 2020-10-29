import logo from "../assets/logo.svg";
import "./footer.css";

const Footer = () => (
	<div className="footer">
		<div className="footer-slot">
			<div className="brand">
				<img className="brand-logo" alt="logo" src={logo} />
			</div>
		</div>

		<div className="footer-slot">
			<div className="slot-l1">解决方案</div>
			<div className="slot-l2">辅助诊疗</div>
			<div className="slot-l3">精准医疗</div>
		</div>

		<div className="footer-slot">
			<div className="slot-l1">产品</div>
			<div className="slot-l2">AI 开放平台</div>
			<div className="slot-l3">医疗魔方</div>
		</div>

		<div className="footer-slot">
			<div className="slot-l1">联络我们</div>
			<div className="slot-l2">hr@example.com</div>
		</div>

		<div className="footer-slot">
			<div className="slot-l1">公司信息</div>
			<div className="slot-l2 company-name">未然科技</div>
		</div>
	</div>
);

export default Footer;
