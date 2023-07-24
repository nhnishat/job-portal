import { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import FesherJob from './FesherJob';

const Fesher = () => {
	const [isFesher, setIsFesher] = useState([]);
	const [showMore, setShowMore] = useState(false);

	useEffect(() => {
		fetch('fesher.json')
			.then((res) => res.json())
			.then((data) => setIsFesher(data));
	}, []);

	const handleSeeMore = () => {
		setShowMore(true);
	};

	return (
		<>
			<SectionTitle heading="Fresher Jobs" subHeading="Fresher Job Section" />
			<div className="grid grid-cols-1 md:grid-cols-3 gap-12 my-10">
				{isFesher.slice(0, showMore ? isFesher.length : 6).map((fesher) => (
					<FesherJob key={fesher._id} fesher={fesher} />
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

export default Fesher;
