import React, { useState, useEffect } from "react";
import { Select } from 'antd';

const { Option } = Select;

const options = [
	{ value: "All Time", label: "All Time" },
	{ value: "Some Time", label: "Some Time" },
];

const Overview = () => {
	const [selectedOption, setSelectedOption] = useState("All Time");

	useEffect(() => {
		console.log(selectedOption);
	}, [selectedOption]);

	function handleChange(value) {
		console.log(`selected ${value}`);
	  }

	return (
		<div className="overview__main">
			<div className="d-flex flex-column flex-md-row justify-content-md-between align-items-md-center mt-md-5 mb-4">
				<h2 className="font-weight-bold">Transaction</h2>
				<Select size="small" defaultValue="All Time" style={{ width: 120 }} onChange={handleChange}>
					<Option value="disabled" disabled>
						Disabled
					</Option>
					<Option value="Yiminghe">yiminghe</Option>
				</Select>
			</div>
			<div className="overview__main-cards">
				<div>
				<div className="car_d mb-4">
					<div className="d-flex">
						<img className="mr-3" src="/assets/disbursed.png" alt="Disbursed" />
						<div>
							<span className="text-uppercase d-block text-dark-gray font-weight-bold">Total disbursed</span>
							<p className="font-weight-bold d-block num m0">#294,000,000,000.14</p>
							<p className="d-block text-dark-gray m0">Count: 394,092</p>
						</div>
					</div>
				</div>
					<div className="car_d mb-4">
						<div className="d-flex">
							<img className="mr-3" src="/assets/payment.png" alt="Disbursed" />
							<div>
								<span className="text-uppercase d-block mb-3 text-dark-gray font-weight-bold">Successful transactions</span>
								<p className="font-weight-bold d-block num">012</p>
							</div>
						</div>
					</div>
					<div className="car_d mb-4">
						<div className="d-flex">
							<img className="mr-3" src="/assets/contact.png" alt="Disbursed" />
							<div>
								<span className="text-uppercase d-block mb-3 text-dark-gray font-weight-bold">Failed transactions</span>
								<p className="font-weight-bold d-block num">#294,000,013.14</p>
							</div>
						</div>
					</div>
				</div>
				
				<div className="car_d mb-4 span-2 d-flex justify-content-center align-items-center text-center">
					GRAPH SECTION<br />Coming Soon...
				</div>
			</div>
		</div>
	);
};

export default Overview;
