import Phone from "./phone";
import "./box.css";

const Box = () => {
	return (
		<div className="box">
			<div className="intro">
				医疗魔方在线问诊工具是由未然科技提供技术支持的初步诊断和疾病分类工具。该工具由未然科技数据科学专家联合众多医术精湛的专科医生并结合人工智能打造而成，能够评估1500多种病症。
			</div>
			<div className="iphone">
				{/* <div className="chat left">您好，欢迎使用医疗魔方</div>
				<div className="chat right">分析我的数据</div>
				<div className="chat left">正在分析</div> */}
				<Phone />
			</div>
		</div>
	);
};

export default Box;
