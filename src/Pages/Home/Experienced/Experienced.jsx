import { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import ExperiencedJobs from './ExperiencedJobs';

const Experienced = () => {
	const [isExperienced, setIsExperienced] = useState([]);
	const [showMore, setShowMore] = useState(false);

	useEffect(() => {
		fetch('experienced.json')
			.then((res) => res.json())
			.then((data) => {
				setIsExperienced(data);
			});
	}, []);

	const handleSeeMore = () => {
		setShowMore(true);
	};

	return (
		<>
			<SectionTitle
				heading="Experienced Jobs"
				subHeading="Experienced Jobs section"
			/>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-12 my-10">
				{isExperienced
					.slice(0, showMore ? isExperienced.length : 6)
					.map((experienced) => (
						<ExperiencedJobs key={experienced._id} experienced={experienced} />
					))}
			</div>
			{!showMore && (
				<div className="flex justify-center">
					<button className="btn btn-primary" onClick={handleSeeMore}>
						See More
					</button>
				</div>
			)}
		</>
	);
};

export default Experienced;
