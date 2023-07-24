import { Fade } from 'react-awesome-reveal';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Toggle = () => {
	return (
		<div className="text-center">
			<h1 className="text-center text-3xl font-bold my-5 p-5">Jobs category</h1>
			<Tabs>
				<TabList className="bg-black text-white">
					<Tab>
						<Fade cascade damping={0.5}>
							Job Seeker
						</Fade>
					</Tab>
					<Tab>
						<Fade cascade damping={0.3}>
							Job Poster
						</Fade>
					</Tab>
				</TabList>

				<TabPanel>
					<div>
						<h2 className="my-5 p-5 text-xl font-bold">Job Seeker</h2>
					</div>
					<div className="grid grid-cols-1 my-10">
						<p>
							As a Job Seeker, you are an individual who is actively looking for
							employment opportunities. Job Seekers typically go through a job
							search process to find suitable job openings that align with their
							skills, qualifications, and career goals. Here are some key
							considerations and strategies for Job Seekers: Self-Assessment:
							Start by evaluating your skills, qualifications, work experience,
							and career aspirations. Identify your strengths, areas for
							improvement, and the type of job roles you are interested in
							pursuing. Resume/CV: Prepare a well-structured and tailored resume
							or curriculum vitae (CV) that highlights your relevant experience,
							education, achievements, and skills. Customize your resume for
							each job application to match the requirements of the specific
							position. Job Search: Use various job search platforms, company
							websites, and professional networking sites to find job openings
							that match your qualifications and interests. Look for job boards,
							LinkedIn, company career pages, and other resources. Networking:
							Build and leverage your professional network to discover hidden
							job opportunities. Attend networking events, connect with industry
							professionals, and use platforms like LinkedIn to expand your
							network. Cover Letter: Write a compelling cover letter to
							accompany your resume. Tailor each cover letter to the specific
							job you are applying for and highlight how your skills and
							experience make you a strong fit for the role. Application
							Process: Follow the application instructions provided by each
							employer carefully. Submit your application within the specified
							deadline and ensure that all required documents are attached.
							Interview Preparation: Research the company and the position you
							are applying for. Prepare for interviews by practicing common
							interview questions and thinking about how you can showcase your
							qualifications and accomplishments. Professional Online Presence:
							Ensure that your online presence, especially on social media and
							professional platforms, aligns with your job search goals.
							Employers often check candidates online profiles before making
							hiring decisions. Stay Persistent and Positive: Job searching can
							be a challenging process, and its essential to stay persistent and
							positive. Rejection is a normal part of the job search journey,
							but perseverance can lead to finding the right opportunity.
							Continuous Learning: Stay updated with industry trends and
							continuously work on improving your skills. Consider taking
							courses, certifications, or attending workshops to enhance your
							qualifications. Evaluate Job Offers: When you receive job offers,
							carefully evaluate the compensation package, benefits, work
							culture, growth opportunities, and alignment with your career
							goals before making a decision. Remember that the job search
							process may take time, and its essential to remain proactive and
							adaptable. Tailor your approach based on the specific job market
							and industry you are targeting. Networking and building
							relationships with potential employers can be just as important as
							submitting job applications. Finally, maintain a professional
							demeanor throughout the process, and be prepared to showcase your
							strengths and abilities during interviews.
						</p>
					</div>
				</TabPanel>
				<TabPanel>
					<div>
						<h2 className="my-5 p-5 text-xl font-bold">Job Poster</h2>
					</div>
					<div className="grid grid-cols-1 my-10">
						<p>
							As a "Job Poster," you are an individual or a company that posts
							job opportunities and vacancies. Job Posters are responsible for
							creating job listings and descriptions to attract potential
							candidates for the positions they are looking to fill. Here are
							some key responsibilities and considerations for Job Posters: Job
							Listing Creation: As a Job Poster, your primary responsibility is
							to create detailed and accurate job listings. These listings
							should include essential information such as job title, job
							description, responsibilities, qualifications, experience
							requirements, location, and any other relevant details. Attracting
							Qualified Candidates: To attract the right candidates, it's
							crucial to provide a clear and compelling job description that
							highlights the benefits and opportunities of the position.
							Emphasize what makes your company or organization a great place to
							work and why candidates should apply. Application Process: Ensure
							that the application process is straightforward and user-friendly.
							Provide instructions on how candidates can apply, whether it's
							through an online form, email, or any other method you prefer. Job
							Platforms and Networking: Utilize various job platforms, company
							websites, and social media to reach a broader audience. Networking
							and word-of-mouth referrals can also be valuable in finding
							potential candidates. Screening and Selection: Review incoming
							applications, resumes, and cover letters to shortlist candidates
							for interviews. Conduct interviews and assessments to evaluate the
							candidates' skills, experience, and cultural fit. Professional
							Communication: Maintain clear and professional communication with
							applicants throughout the hiring process. Inform candidates about
							the status of their application and provide feedback when
							possible. Equal Opportunity Employer: Ensure that your job
							postings and hiring process comply with equal opportunity laws and
							guidelines. Avoid any form of discrimination based on race,
							gender, age, religion, or other protected characteristics.
							Competitive Compensation and Benefits: Offer competitive
							compensation packages and benefits to attract top talent.
							Highlight any unique perks or opportunities your company provides
							to employees. Positive Employer Branding: A positive employer
							brand can attract more candidates and enhance your company's
							reputation. Treat applicants with respect and maintain a positive
							image in the job market. Continuous Improvement: Regularly assess
							your hiring process and job listings to identify areas for
							improvement. Gather feedback from candidates and new hires to
							refine your approach. Remember that attracting the right
							candidates and making successful hires often requires a
							well-thought-out approach and ongoing effort. The quality of your
							job listings and the hiring experience you provide can
							significantly impact your ability to attract and retain talented
							individuals for your organization.
						</p>
					</div>
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default Toggle;
