import React from "react";
import { Menu, ActivityIndicator, Tag } from "antd-mobile";
import Slider from "react-slick";
import "./phone.css";

const settings = {
	dots: true,
	infinite: true,
	slideToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 2000,
};

const data = [
	{
		value: "1",
		label: "头和颈",
		children: [
			{
				label: "脑",
				value: "1",
			},
			{
				label: "耳",
				value: "2",
			},
			{
				label: "眼",
				value: "3",
			},
			{
				label: "口",
				value: "4",
			},
			{
				label: "颈",
				value: "5",
			},
			{
				label: "精神",
				value: "6",
			},
			{
				label: "鼻",
				value: "7",
			},
		],
	},
	{
		value: "2",
		label: "胃",
		children: [
			{
				label: "呕吐",
				value: "1",
			},
			{
				label: "胃胀",
				value: "2",
			},
			{
				label: "纳少",
				value: "3",
			},
			{
				label: "食欲不振",
				value: "4",
			},
			{
				label: "反酸",
				value: "5",
			},
			{
				label: "打饱嗝",
				value: "6",
			},
			{
				label: "多食",
				value: "7",
			},
		],
	},
	{
		value: "3",
		label: "胸和背部",
		children: [
			{
				label: "乳房",
				value: "1",
			},
			{
				label: "心",
				value: "2",
			},
			{
				label: "肺",
				value: "3",
			},
			{
				label: "背部上方",
				value: "4",
			},
			{
				label: "腰背部",
				value: "5",
			},
			{
				label: "胸和背部 - 其他",
				value: "6",
			},
		],
	},
	{
		value: "4",
		label: "手",
		isLeaf: true,
		children: [
			{
				label: "手肘",
				value: "1",
			},
		],
	},
];

class MenuExample extends React.Component {
	constructor(...args) {
		super(...args);
		this.state = {
			initData: data,
			show: true,
		};
	}
	onChange = (value) => {
		let label = "";
		data.forEach((dataItem) => {
			if (dataItem.value === value[0]) {
				label = dataItem.label;
				if (dataItem.children && value[1]) {
					dataItem.children.forEach((cItem) => {
						if (cItem.value === value[1]) {
							label += ` ${cItem.label}`;
						}
					});
				}
			}
		});
		console.log(label);
	};
	handleClick = (e) => {
		e.preventDefault(); // Fix event propagation on Android
		this.setState({
			show: !this.state.show,
		});
		// mock for async data loading
		if (!this.state.initData) {
			setTimeout(() => {
				this.setState({
					initData: data,
				});
			}, 500);
		}
	};

	onMaskClick = () => {
		this.setState({
			show: true,
		});
	};

	render() {
		const { initData, show } = this.state;

		const menuEl = (
			<Menu
				className="foo-menu"
				data={initData}
				value={["2", "2"]}
				onChange={this.onChange}
				height={document.documentElement.clientHeight * 0.6}
			/>
		);

		const pillEl = (
			<div className="tag-container">
				<div style={{ fontWeight: "bold" }}>反酸发生了多长时间？</div>
				<Tag>10 分钟内</Tag>
				<Tag>10 分钟到 1 天</Tag>
				<Tag>1 - 14 天</Tag>
				<Tag>14 - 30 天</Tag>
				<Tag>1 - 3 月</Tag>
				<Tag selected>3 个月以上</Tag>
				<Tag>以上都不符合</Tag>
				<div style={{ fontWeight: "bold" }}>
					<br />
					反酸发生前是否有过以下情况？
				</div>
				<Tag>大量饮酒</Tag>
				<Tag>外力触碰</Tag>
				<Tag>以上都不符合</Tag>
				<div style={{ fontWeight: "bold" }}>
					<br />
					反酸的程度是什么样的？
				</div>
				<Tag>加重</Tag>
				<Tag>容易</Tag>
				<Tag>轻度</Tag>
				<Tag>稍微</Tag>
				<Tag>以上都不符合</Tag>
			</div>
		);

		return (
			<Slider {...settings}>
				<div>{menuEl}</div>
				<div>{pillEl}</div>
				<div>{menuEl}</div>
			</Slider>
		);
	}
}

export default MenuExample;
