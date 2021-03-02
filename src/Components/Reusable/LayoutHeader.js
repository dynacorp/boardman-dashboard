import React from "react";
import { Link } from "react-router-dom";
import { SearchOutlined, BellOutlined } from "@ant-design/icons";
import { Input } from 'antd';

const LayoutHeader = () => {
	return (
		<div className="d-flex flex-column justify-content-center align-items-center flex-lg-row justify-content-lg-between layout__content-header">
			<div className="input-group input-group-search mb-3 mb-lg-0">
				{/* <input
					type="text"
					className="form-control layout__header-search"
					placeholder="Recipient's username"
					aria-label="Recipient's username"
					aria-describedby="basic-addon2"
				/>
				<div className="input-group-append">
					<button className="btn btn-outline-secondary" type="button">
						<SearchOutlined />
					</button>
				</div> */}
				<Input size="large" placeholder="Search…" suffix={<SearchOutlined />} />
			</div>
			<div className="d-flex">
				<div className="mr40 notification">
                    <span className="notification-badge rounded-circle d-inline-block bg-danger text-light">3</span>
					<BellOutlined style={{ fontSize: '21px', color: '#8F92A1' }} />
				</div>
				<Link className="btn btn-success green f14" to="/">
					<span className="navButton">+</span>
					Create bulk payment
				</Link>
			</div>
		</div>
	);
};

export default LayoutHeader;
