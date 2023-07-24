import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ExperiencedJobs = ({ experienced }) => {
	const { company_logo_url, position, job_location, company_name, _id } =
		experienced;

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
		<div className="card w-96 glass">
			<figure>
				<img src={company_logo_url} alt="car!" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					<span className="font-bold">Title: </span>
					{position}
				</h2>
				<p>
					<span className="font-bold">Location: </span>
					{job_location}
				</p>
				<p>
					<span className="font-bold">Company: </span>
					{company_name}
				</p>
				<Link onClick={() => applyButton(_id)}>
					<button className="btn btn-primary">Apply Now</button>
				</Link>
			</div>
		</div>
	);
};

export default ExperiencedJobs;
