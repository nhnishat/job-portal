import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const FesherJob = ({ fesher }) => {
	// console.log(fesher);
	const { company_logo_url, position, job_location, company_name, _id } =
		fesher;
	const applyButton = (id) => {
		console.log(id);
		Swal.fire({
			position: 'top-end',
			icon: 'success',
			title: 'Apply A Job',
			showConfirmButton: false,
			timer: 1500,
		});
	};
	return (
		<div className="card w-96 bg-base-100 shadow-2xl">
			<figure>
				<img src={company_logo_url} alt="job" className="w-full h-96" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">Title: {position}</h2>
				<p>
					<span className="font-bold">Location:</span> {job_location}
				</p>
				<p>
					<span className="font-bold">Company:</span> {company_name}
				</p>
				<div className="card-actions justify-start">
					<Link onClick={() => applyButton(_id)}>
						<button className="btn btn-primary">Apply Now</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default FesherJob;
