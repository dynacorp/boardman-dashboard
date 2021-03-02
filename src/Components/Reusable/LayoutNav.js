import React from "react";
import { Link } from "react-router-dom";
import { BarsOutlined, HomeOutlined, MessageOutlined, PullRequestOutlined } from "@ant-design/icons";

const LayoutNav = () => {
	return (
		<div className="layout__nav">
			<div className="fixed">
				<img className="logo d-none d-lg-inline-block" src="/assets/logo.png" alt="Boardman Corporation Logo" />

				<div className="d-flex justify-content-between flex-lg-column align-items-lg-start mt-lg-5">
					<Link to="/" className="btn px-lg-0 mb-lg-3">
						<span className="mr-3 mt-n2">
							<HomeOutlined />
						</span>
						<span className="d-none d-lg-inline-block fw600">Home</span>
					</Link>
					<Link to="/transaction" className="btn px-lg-0 mb-lg-3">
						<span className="mr-3 mt-n2">
							<BarsOutlined />
						</span>
						<span className="d-none d-lg-inline-block fw600">Transaction</span>
					</Link>
					<Link to="/" className="btn px-lg-0 mb-lg-3">
						<span className="mr-3 mt-n2">
							<MessageOutlined />
						</span>
						<span className="d-none d-lg-inline-block fw600">All Contacts</span>
					</Link>
					<Link to="/" className="btn px-lg-0 mb-lg-3">
						<span className="mr-3 mt-n2">
							<PullRequestOutlined />
						</span>
						<span className="d-none d-lg-inline-block fw600">Dispute</span>
					</Link>
					<Link to="/" className="btn px-lg-0 mb-lg-3">
						<span className="mr-3 mt-n2">
							<PullRequestOutlined />
						</span>
						<span className="d-none d-lg-inline-block fw600">Account</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default LayoutNav;
