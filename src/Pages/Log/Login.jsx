import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';

const Login = () => {
	const { signIn, googleSignIn } = useAuth();
	const handleLoginSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);
		signIn(email, password).then((result) => {
			const loginUser = result.user;
			console.log(loginUser);
			form.reset();
			Swal.fire({
				position: 'top-end',
				icon: 'success',
				title: 'Your Account is Login',
				showConfirmButton: false,
				timer: 1500,
			});
		});
	};
	const googleSingin = () => {
		googleSignIn();
	};
	return (
		<div className="hero my-36">
			<div className="hero-content flex-col lg:flex-row">
				<div className="text-center lg:text-left w-1/2">
					<img src="https://i.ibb.co/54xbgPb/authentication.gif" alt="" />
				</div>
				<div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
					<form onSubmit={handleLoginSubmit} className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								name="email"
								placeholder="email"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="password"
								placeholder="password"
								className="input input-bordered"
								name="password"
								required
							/>
							<label className="label">
								<a href="#" className="label-text-alt link link-hover">
									Forgot password?
								</a>
							</label>
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-primary">Login</button>
						</div>
						<p className="my-3">
							Dont’t have an Account ?
							<Link to="/register" className="text-orange-600 ms-2">
								Register
							</Link>
						</p>
						<hr className="border-2" />
						<Link onClick={googleSingin}>
							<FaGoogle className="block w-full bg-slate-400 p-2 text-4xl my-2" />
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
