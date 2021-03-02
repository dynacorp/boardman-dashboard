import React, { useState, useEffect } from "react";
import { LeftOutlined, CheckOutlined } from "@ant-design/icons";
import Select from "react-select";

const options = [
	{ value: "Retry transaction", label: "Retry transaction" },
	{ value: "Flag transaction", label: "Flag transaction" },
];

const Detail = () => {
	const [selectedOption, setSelectedOption] = useState("All Time");

	useEffect(() => {
		console.log(selectedOption);
	}, [selectedOption]);

	return (
		<div className="detail__main">
			<span className="text-gray mb-2 mb-lg-3 d-inline-block">
				<LeftOutlined /> Back to Home
			</span>
			<h2 className="font-weight-bold mb-4">Transaction Detail</h2>

			<div className="bg-white profile-details col-lg-10 col-xl-8">
				<div className="d-sm-flex justify-content-between mb-5">
					<div className="d-flex">
						<img className="profile-img mr-3 rounded-circle" src="/assets/avatar.png" alt="Usman Abiola" />
						<div className="d-flex flex-column justify-content-center">
							<h3 className="font-weight-bold">Usman Abiola</h3>
							<p className="text-gray">
								User ID: <span className="text-underline">2937382</span>
							</p>
						</div>
					</div>
					<div className="d-flex flex-column justify-content-end align-items-end">
						<Select
							className="max-w-search h-100"
							options={options}
							placeholder="Options"
							onChange={(e) => setSelectedOption(e.value)}
						/>
						<button className="bg-white btn text-dark shadow mt-3">Download PDF</button>
					</div>
				</div>
				<div>
					<h5 className="text-gray heading font-weight-bold mb-3">Bank detail</h5>
					<div className="d-sm-flex justify-content-between">
						<div className="d-flex">
							<img className="bank-img mr-3 rounded-circle" src="/assets/avatar.png" alt="Bank" />
							<div>
								<h4 className="font-weight-bold">UBA Bank</h4>
								<p className="text-gray">8173838922893</p>
							</div>
						</div>
						<div>
							<p className="text-dark-blue">10/02/2021 10:01pm</p>
						</div>
					</div>
				</div>
				<hr className="bg-gray my-3" />
				<div>
					<div className="d-flex justify-content-between">
						<div>
							<h5 className="text-gray heading font-weight-bold mb-3">Notes</h5>
							<h4>Unilever_Vender Payment 1</h4>
						</div>
						<div className="text-right">
							<h5 className="text-gray heading font-weight-bold mb-3">Milestones</h5>
							<h4 className="text-dark">1/9</h4>
						</div>
					</div>
				</div>
				<hr className="bg-gray my-3" />
				<div className="full-details">
					<h3 className="font-weight-bold">Full Details</h3>
					<div className="d-flex justify-content-between mb-3">
						<span className="text-gray">Total amount to be disbursed</span>
						<span>#100,000,000</span>
					</div>
					<div className="d-flex justify-content-between mb-3">
						<span className="text-gray">Amount disbursed so far</span>
						<span className="text-dark-blue">#20,000,000</span>
					</div>
					<div className="d-flex justify-content-between mb-3">
						<p className="font-weight-bold">Current Transfer</p>
						<p className="transfer font-weight-bold">#10,000,000</p>
					</div>
					<div className="text-right text-gray">
						<span className="bg-success text-light d-inline-block success rounded-circle text-center">
							<CheckOutlined />
						</span>{" "}
						Successful
					</div>
				</div>
			</div>
		</div>
	);
};

export default Detail;
