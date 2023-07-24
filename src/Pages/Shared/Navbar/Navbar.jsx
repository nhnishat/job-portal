import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Navbar = () => {
	const { user, logOut } = useAuth();
	const singOut = () => {
		logOut();
	};
	const menuBar = (
		<>
			<li>
				<Link>Home</Link>
			</li>
		</>
	);
	return (
		<section>
			<div className="navbar fixed bg-opacity-40 z-10 max-w-screen-xl bg-black text-white">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							{menuBar}
						</ul>
					</div>
					<a className="btn btn-ghost normal-case text-4xl">Job Portal</a>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1  bg-black text-black">
						{menuBar}
					</ul>
				</div>
				<div className="navbar-end">
					{user ? (
						<>
							<img
								src={user.photoURL}
								alt=""
								title={user.displayName}
								className="rounded-full h-10 w-10 mx-3"
							/>
						</>
					) : (
						<FaUserAlt className="rounded-full h-10 w-10 mx-3" />
					)}
					{user ? (
						<Link onClick={singOut}>
							<button className="btn btn-neutral">logOut</button>
						</Link>
					) : (
						<Link to="login">
							<button className="btn btn-neutral">Login</button>
						</Link>
					)}
				</div>
			</div>
		</section>
	);
};

export default Navbar;
