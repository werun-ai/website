import React from "react";
import { Drawer, List } from "antd-mobile";
import "./phone.css";

class App1 extends React.Component {
	state = {
		open: true,
	};
	onOpenChange = (...args) => {
		console.log(args);
		this.setState({ open: !this.state.open });
	};
	render() {
		const sidebar = (
			<List>
				{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
					(i, index) => {
						if (index === 0) {
							return (
								<List.Item
									key={index}
									thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
									multipleLine
								>
									Category
								</List.Item>
							);
						}
						return (
							<List.Item
								key={index}
								thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
							>
								Category{index}
							</List.Item>
						);
					}
				)}
			</List>
		);

		return (
			<div className="phone">
				<Drawer
					className="my-drawer"
					enableDragHandle
					contentStyle={{
						color: "#A6A6A6",
						textAlign: "center",
					}}
					sidebar={sidebar}
					open={this.state.open}
					onOpenChange={this.onOpenChange}
				>
					Click upper-left corner
				</Drawer>
			</div>
		);
	}
}

export default App1;
