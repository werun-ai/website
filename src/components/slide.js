import Slider from "react-slick";
import s1 from "../assets/slide-1.png";
import s2 from "../assets/slide-2.png";
import HalfCircle from "../assets/half-circle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slide.css";

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slideToShow: 1,
	slidesToScroll: 1,
	arrows: false,
};

const Card = ({ image, l1, l2, l3 }) => (
	<div className="card">
		<div className="card-image" style={{ backgroundImage: `url(${image})` }} />
		<div className="card-content">
			<div className="card-l1">{l1}</div>
			<div className="card-l2">{l2}</div>
			<div className="card-l3">{l3}</div>
		</div>
	</div>
);

const Slide = () => (
	<div className="slide-container" id="solution">
		<Slider {...settings}>
			<Card
				image={s1}
				l1={
					<>
						{"打造\n"}有益于<span className="highlight">人类健康</span>的
					</>
				}
				l2={"AI"}
				l3={
					"未然科技专注于人工智能在疾病预测领域的技术创新，通过运用机器学习，深度学习等人工智能技术对健康，医疗大数据进行数据挖掘，拥有智能辅助诊疗等服务"
				}
			/>

			<Card
				image={s2}
				l1={
					<>
						{"打造\n"}有益於<span className="highlight">人类健康</span>的
					</>
				}
				l2={"AI"}
				l3={
					"未然科技专注于人工智能在疾病预测领域的技术创新，通过运用机器学习，深度学习等人工智能技术对健康，医疗大数据进行数据挖掘，拥有智能辅助诊疗等服务"
				}
			/>
		</Slider>
		<HalfCircle className="half-circle" stroke="#2f80ed" />
	</div>
);

export default Slide;
