import React, { useEffect } from "react";
import LayoutNav from "../Reusable/LayoutNav";
import LayoutHeader from "../Reusable/LayoutHeader";
import Detail from "./Detail";
import PaymentBreakdown from "./PaymentBreakdown";

const TransactionDetail = (props) => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behaviour: "smooth",
		});
	}, [props.location.pathname]);
	return (
		<div>
			<div className="layout transaction">
				<LayoutNav />
				<div className="layout__content">
					<LayoutHeader />
					<Detail />
					<PaymentBreakdown />
				</div>
			</div>
		</div>
	);
};

export default TransactionDetail;
