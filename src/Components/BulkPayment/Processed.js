import React from "react";

const Processed = () => {
	return (
		<div className="bg-white profile-details col-lg-10 col-xl-8 process_ed">
			<div className="d-flex justify-content-between mb-4">
				<div>
					<h4 className="text-success font-weight-bold">All Contacts Processed!</h4>
					<p className="text-gray">Here are the results of the imported NG Salary Sheet</p>
				</div>
				<img className="processed" src="/assets/processed.png" alt="Processed" />
			</div>
			<div className="row">
				<div className="col-md-4">
					<span className="font-weight-bold text-gray">Total Contacts</span>
					<p>143,209</p>
				</div>
				<div className="col-md-4">
					<span className="font-weight-bold text-gray">Total Amounts</span>
					<p>101,349,000</p>
				</div>
			</div>
			<div className="row mb-4">
				<div className="col-md-4">
					<span className="font-weight-bold text-gray">Bank Accounts Found</span>
					<p>143,209</p>
				</div>
				<div className="col-md-4">
					<span className="font-weight-bold text-gray">Email Found</span>
					<p>143,209</p>
				</div>
				<div className="col-md-4">
					<span className="font-weight-bold text-gray">Phone No. Found</span>
					<p>143,209</p>
				</div>
				<div className="col-md-4">
					<span className="font-weight-bold text-gray">Instant Disburse</span>
					<p>143,209</p>
				</div>
				<div className="col-md-4">
					<span className="font-weight-bold text-gray">Upon Approval</span>
					<p>143,209</p>
				</div>
				<div className="col-md-4">
					<span className="font-weight-bold text-gray">Milestone Disburse</span>
					<p>143,209</p>
				</div>
			</div>
			<button className="green px-4 py-2 rounded btn text-light mr-3 mb-3 mb-md-0">
				<span className="font-weight-bold">Next:</span> <span>Start Disbursement</span>
			</button>
			<button className="buttonColor px-4 py-2 rounded btn text-light">
				<span className="font-weight-bold">Next:</span> <span>Review</span>
			</button>
		</div>
	);
};

export default Processed;
