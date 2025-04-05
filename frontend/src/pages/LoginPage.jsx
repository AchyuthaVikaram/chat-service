import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, MessageSquare } from "lucide-react";

const LoginPage = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const { login, isLoggingIn } = useAuthStore();

	const handleSubmit = async (e) => {
		e.preventDefault();
		login(formData);
	};

	return (
		<div className="h-screen grid bg-gray-50">
			{/* Left Side - Form */}
			<div className="flex flex-col justify-center items-center p-6 sm:p-12">
				<div className="w-full max-w-md space-y-8 bg-white p-8 shadow-md rounded-xl">
					{/* Logo */}
					<div className="text-center mb-8">
						<div className="flex flex-col items-center gap-2 group">
							<h1 className="text-2xl font-bold mt-2 text-gray-800">
								Welcome Back
							</h1>
							<p className="text-gray-500">Sign in to your account</p>
						</div>
					</div>

					{/* Form */}
					<form onSubmit={handleSubmit} className="space-y-6">
						{/* Email */}
						<div className="space-y-1">
							<label className="block text-sm font-medium text-gray-700">
								Email
							</label>
							<div className="relative">
								<input
									type="email"
									className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
									placeholder="you@example.com"
									value={formData.email}
									onChange={(e) =>
										setFormData({ ...formData, email: e.target.value })
									}
									required
								/>
							</div>
						</div>

						{/* Password */}
						<div className="space-y-1">
							<label className="block text-sm font-medium text-gray-700">
								Password
							</label>
							<div className="relative">
								<input
									type="password"
									className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
									placeholder="••••••••"
									value={formData.password}
									onChange={(e) =>
										setFormData({ ...formData, password: e.target.value })
									}
									required
								/>
							</div>
						</div>

						{/* Submit Button */}
						<button
							type="submit"
							className="w-full flex justify-center items-center gap-2 bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-300 disabled:opacity-50"
							disabled={isLoggingIn}
						>
							{isLoggingIn ? (
								<>
									<Loader2 className="h-5 w-5 animate-spin" />
									Loading...
								</>
							) : (
								"Sign in"
							)}
						</button>
					</form>

					{/* Footer */}
					<div className="text-center text-sm text-gray-500">
						<p>
							Don't have an account?{" "}
							<Link
								to="/signup"
								className="text-blue-600 hover:underline font-medium"
							>
								Create account
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
