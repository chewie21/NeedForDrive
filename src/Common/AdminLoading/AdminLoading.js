import Spinner from "react-bootstrap/Spinner";
import React from "react";

export const AdminLoading = () =>
	<div className='d-flex justify-content-center w-100'>
		<Spinner animation="border" role="status" size='lg' variant="primary">
			<span className="sr-only">Loading...</span>
		</Spinner>
	</div>