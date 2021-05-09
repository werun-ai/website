import React from "react";
import { Menu, ActivityIndicator } from "antd-mobile";
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
		const loadingEl = (
			<div
				style={{
					width: "100%",
					height: document.documentElement.clientHeight * 0.6,
					display: "flex",
					justifyContent: "center",
				}}
			>
				<ActivityIndicator size="large" />
			</div>
		);
		return (
			<Slider {...settings}>
				<div className={show ? "menu-active" : ""}>
					{show ? (initData ? menuEl : loadingEl) : null}
					{show ? (
						<div className="menu-mask" onClick={this.onMaskClick} />
					) : null}
				</div>
				<div className={show ? "menu-active" : ""}>
					{show ? (initData ? menuEl : loadingEl) : null}
					{show ? (
						<div className="menu-mask" onClick={this.onMaskClick} />
					) : null}
				</div>
				<div className={show ? "menu-active" : ""}>
					{show ? (initData ? menuEl : loadingEl) : null}
					{show ? (
						<div className="menu-mask" onClick={this.onMaskClick} />
					) : null}
				</div>
			</Slider>
		);
	}
}

export default MenuExample;
