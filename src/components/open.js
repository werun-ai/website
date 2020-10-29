import s2 from "../assets/slide-2.png";
import "./open.css";

const Open = () => (
	<div className="open">
		<div className="open-main">
			<img className="open-image" alt="open" src={s2} />
			<div className="open-info">
				<div className="open-title">AI 开放平台</div>
				<div className="open-checks-container">
					<div className="open-checks">
						<div className="check-item">成熟算法模型</div>
						<div className="check-item">支持海量并发调用</div>
					</div>
					<div className="open-checks">
						<div className="check-item">顶尖医学团队助阵</div>
						<div className="check-item">私有云部署</div>
					</div>
				</div>
				<div className="apply-button">申请试用</div>
				<div className="open-desc">
					由顶级 AI
					团队联合顶尖医疗专家倾心打造，有多个在线疾病分析接口，帮助医疗机构构筑从数据接入、存储、计算和分析的全生命周期大数据
					+ AI
					解决方案，帮助客户进一步挖掘数据价值，快速完成数字化转型，实现人工智能赋能。
				</div>
			</div>
		</div>
	</div>
);

export default Open;
