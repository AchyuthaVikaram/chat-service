import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore.js";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const SignupPage = () => {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		password: "",
	});

	const { signup, isSigningUp } = useAuthStore();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		signup(formData);
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
			<div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
				{/* LOGO / HEADER */}
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
					<p className="mt-2 text-gray-500 text-sm">
						Get started with your free account
					</p>
				</div>

				<form onSubmit={handleSubmit} className="space-y-6">
					{/* Full Name */}
					<div>
						<label className="block text-sm font-medium text-gray-700">
							Full Name
						</label>
						<input
							type="text"
							placeholder="John Doe"
							value={formData.fullName}
							onChange={(e) =>
								setFormData({ ...formData, fullName: e.target.value })
							}
							className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
						/>
					</div>

					{/* Email */}
					<div>
						<label className="block text-sm font-medium text-gray-700">
							Email
						</label>
						<input
							type="email"
							placeholder="you@example.com"
							value={formData.email}
							onChange={(e) =>
								setFormData({ ...formData, email: e.target.value })
							}
							className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
						/>
					</div>

					{/* Password */}
					<div>
						<label className="block text-sm font-medium text-gray-700">
							Password
						</label>
						<input
							type="password"
							placeholder="••••••••"
							value={formData.password}
							onChange={(e) =>
								setFormData({ ...formData, password: e.target.value })
							}
							className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
						/>
					</div>

					{/* Submit Button */}
					<button
						type="submit"
						className="w-full bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-semibold hover:bg-blue-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
						disabled={isSigningUp}
					>
						{isSigningUp ? (
							<>
								<Loader2 className="w-4 h-4 animate-spin" />
								Loading...
							</>
						) : (
							"Create Account"
						)}
					</button>
				</form>

				{/* Footer */}
				<div className="mt-6 text-center text-sm text-gray-600">
					Already have an account?{" "}
					<Link to="/login" className="text-blue-600 hover:underline">
						Sign in
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SignupPage;
