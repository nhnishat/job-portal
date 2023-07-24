const SectionTitle = ({ subHeading, heading }) => {
	return (
		<div className="my-32 text-center mx-auto">
			<p className="text-yellow-600 space-y-2">----{subHeading}----</p>
			<h3 className="text-3xl font-semibold uppercase">{heading}</h3>
		</div>
	);
};

export default SectionTitle;
