import img1 from "../assets/img-1.png";
import img2 from "../assets/img-2.png";
import img3 from "../assets/img-3.png";
import img4 from "../assets/img-4.png";
import img5 from "../assets/img-5.png";
import img6 from "../assets/img-6.png";
import "./product.css";

const Row = () => (
	<>
		<div className="product-row">
			<div className="product-title">
				<div className="product-title-l1 yellow">辅助诊疗</div>
				<div className="product-title-l2">解決方案</div>
			</div>
			<div className="product-demo">
				<img className="product-image" alt="demo" src={img1} />
				<div className="demo-title yellow">医生诊断辅助</div>
				<div className="demo-desc">
					基于病人健康数据，进行的疾病风险概况分析，辅助医生诊疗
				</div>
			</div>
			<div className="product-demo">
				<img className="product-image" alt="demo" src={img2} />
				<div className="demo-title yellow">治疗方案推荐</div>
				<div className="demo-desc">
					病人确诊后，系统可根据健康状态为医生提供智能的治疗方案
				</div>
			</div>
			<div className="product-demo">
				<img className="product-image" alt="demo" src={img3} />
				<div className="demo-title yellow">健康风险预测</div>
				<div className="demo-desc">
					就诊结束后，系统自动持续跟踪患者健康状况，为再就诊提供风险预测
				</div>
			</div>
		</div>

		<div className="product-row">
			<div className="product-title">
				<div className="product-title-l1 blue">精准医疗</div>
				<div className="product-title-l2">解決方案</div>
			</div>
			<div className="product-demo">
				<img className="product-image" alt="demo" src={img4} />
				<div className="demo-title blue">人工智能引擎</div>
				<div className="demo-desc">
					基于电子病例和人工智能引擎，为患者提供个性化医疗服务
				</div>
			</div>
			<div className="product-demo">
				<img className="product-image" alt="demo" src={img5} />
				<div className="demo-title blue">家族病史预测</div>
				<div className="demo-desc">基于家族谱系以及个人病史的精准疾病预测</div>
			</div>
			<div className="product-demo">
				<img className="product-image" alt="demo" src={img6} />
				<div className="demo-title blue">基因精准预测</div>
				<div className="demo-desc">
					基于个人基因数据的精准疾病预测，更加个性化的算法模型
				</div>
			</div>
		</div>
	</>
);

const Product = () => (
	<div className="product" id="product">
		<Row />
	</div>
);

export default Product;
