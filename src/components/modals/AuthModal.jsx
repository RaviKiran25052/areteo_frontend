import React, { useState } from 'react';
import { X, User, Mail, Eye, EyeOff, Camera } from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const AuthModal = ({ isOpen, onClose }) => {
	const [mode, setMode] = useState('login');
	const [loginData, setLoginData] = useState({
		emailOrUsername: '',
		password: ''
	});
	const [registerData, setRegisterData] = useState({
		firstName: '',
		lastName: '',
		userName: '',
		email: '',
		password: '',
		confirmPassword: ''
	});
	const [profilePic, setProfilePic] = useState(null);
	const [profilePicPreview, setProfilePicPreview] = useState(null);
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [loading, setLoading] = useState(false);

	// Reset form data when switching modes
	const switchMode = (newMode) => {
		setMode(newMode);
		setLoginData({ emailOrUsername: '', password: '' });
		setRegisterData({
			firstName: '',
			lastName: '',
			userName: '',
			email: '',
			password: '',
			confirmPassword: ''
		});
		setProfilePic(null);
		setProfilePicPreview(null);
	};

	const handleClose = () => {
		setMode('login');
		onClose();
	}

	const handleLoginChange = (e) => {
		const { name, value } = e.target;
		setLoginData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleRegisterChange = (e) => {
		const { name, value } = e.target;
		setRegisterData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			// Validate file type
			if (!file.type.startsWith('image/')) {
				toast.error('Please select a valid image file');
				return;
			}
			// Validate file size (5MB limit)
			if (file.size > 5 * 1024 * 1024) {
				toast.warning('File size must be less than 5MB');
				return;
			}
			setProfilePic(file);

			// Create preview URL
			const reader = new FileReader();
			reader.onloadend = () => {
				setProfilePicPreview(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

	const validateLoginForm = () => {
		if (!loginData.emailOrUsername.trim()) {
			toast.error('Email or username is required');
			return false;
		}
		if (!loginData.password) {
			toast.error('Password is required');
			return false;
		}
		return true;
	};

	const validateRegisterForm = () => {
		if (!registerData.firstName.trim()) {
			toast.error('First name is required');
			return false;
		}
		if (!registerData.lastName.trim()) {
			toast.error('Last name is required');
			return false;
		}
		if (!registerData.userName.trim()) {
			toast.error('Username is required');
			return false;
		}
		if (!registerData.email.trim()) {
			toast.error('Email is required');
			return false;
		}
		if (!/\S+@\S+\.\S+/.test(registerData.email)) {
			toast.error('Please enter a valid email');
			return false;
		}
		if (!registerData.password) {
			toast.error('Password is required');
			return false;
		}
		if (registerData.password.length < 6) {
			toast.error('Password must be at least 6 characters long');
			return false;
		}
		if (!registerData.confirmPassword) {
			toast.error('Please confirm your password');
			return false;
		}
		if (registerData.password !== registerData.confirmPassword) {
			toast.error('Passwords do not match');
			return false;
		}
		return true;
	};

	const handleLogin = async () => {
		if (!validateLoginForm()) return;

		setLoading(true);

		try {
			// Determine if input is email or username
			const isEmail = loginData.emailOrUsername.includes('@');
			const requestBody = {
				password: loginData.password,
				...(isEmail ? { email: loginData.emailOrUsername } : { userName: loginData.emailOrUsername })
			};

			const response = await axios.post(`${API_URL}/user/login`, requestBody);
			const result = response.data;

			if (result.success) {
				toast.success('Login successful!');

				if (result.role === "admin") {
					window.location.replace('/admin/home');
				}

				// Store token if needed
				if (result.data.token) {
					localStorage.setItem('token', result.data.token);
					localStorage.setItem('userInfo', JSON.stringify(result.data.user));
				}

				// Reset form
				setLoginData({ emailOrUsername: '', password: '' });

				// Close modal after success
				setTimeout(() => {
					handleClose();
				}, 1500);
			} else {
				toast.warning(result.message || 'Login failed');
			}
		} catch (error) {
			console.error('Login error:', error);
			toast.error('Login failed. Please try again.');
		} finally {
			setLoading(false);
		}
	};

	const handleRegister = async () => {
		if (!validateRegisterForm()) return;

		setLoading(true);

		try {
			const submitData = new FormData();

			// Append form data (excluding confirmPassword)
			const { confirmPassword, ...dataToSubmit } = registerData;
			Object.keys(dataToSubmit).forEach(key => {
				submitData.append(key, dataToSubmit[key]);
			});

			// Append profile picture if selected
			if (profilePic) {
				submitData.append('profilePic', profilePic);
			}

			const response = await axios.post(`${API_URL}/user/register`, submitData);
			const result = response.data;

			if (result.success) {
				toast.success('Registration successful!');

				// Store token if needed
				if (result.data.token) {
					localStorage.setItem('token', result.data.token);
					localStorage.setItem('userInfo', JSON.stringify(result.data.user));
				}

				// Reset form
				setRegisterData({
					firstName: '',
					lastName: '',
					userName: '',
					email: '',
					password: '',
					confirmPassword: ''
				});
				setProfilePic(null);
				setProfilePicPreview(null);

				// Close modal after success
				setTimeout(() => {
					handleClose();
				}, 1500);
			} else {
				toast.error(result.message || 'Registration failed');

				// Handle server validation errors
				if (result.errors && Array.isArray(result.errors)) {
					result.errors.forEach(err => {
						toast.error(err);
					});
				}
			}
		} catch (error) {
			console.error('Registration error:', error);
			toast.error('Registration failed. Please try again.');
		} finally {
			setLoading(false);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (mode === 'login') {
			handleLogin();
		} else {
			handleRegister();
		}
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
			<div className="bg-white rounded-2xl shadow-xl border border-orange-200 md:min-w-96">
				{/* Header */}
				<div className="flex items-center justify-between p-6 border-b border-gray-100">
					<h2 className="text-2xl font-serif text-gray-800 text-center flex-1">
						{mode === 'login' ? 'User Login' : 'User Registration'}
					</h2>
					<button
						onClick={handleClose}
						className="text-gray-400 hover:text-gray-600 transition-colors"
					>
						<X size={24} />
					</button>
				</div>

				{/* Form */}
				<form
					onSubmit={handleSubmit}
					encType="multipart/form-data"
				>
					{mode === 'login' ? (
						// Login Form
						<div className='space-y-4 p-6'>
							{/* Email/Username */}
							<div className="space-y-2">
								<label className="block text-sm font-medium text-gray-700">
									Email
								</label>
								<div className="relative">
									<input
										type="text"
										name="emailOrUsername"
										value={loginData.emailOrUsername}
										onChange={handleLoginChange}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
										placeholder="Enter your email...."
									/>
									<Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
								</div>
							</div>

							{/* Password */}
							<div className="space-y-2">
								<label className="block text-sm font-medium text-gray-700">
									Password
								</label>
								<div className="relative">
									<input
										type={showPassword ? 'text' : 'password'}
										name="password"
										value={loginData.password}
										onChange={handleLoginChange}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
										placeholder="Enter your password...."
									/>
									<button
										type="button"
										onClick={() => setShowPassword(!showPassword)}
										className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
									>
										{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
									</button>
								</div>
							</div>

							{/* Remember Me & Forgot Password */}
							<button
								type="button"
								className="text-gray-400 hover:text-gray-600 text-sm"
							>
								Forgot Password?
							</button>

							{/* Login Button */}
							<button
								type="submit"
								disabled={loading}
								className="w-full bg-cyan-400 text-white py-3 px-4 rounded-lg hover:bg-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
							>
								{loading ? (
									<div className="flex items-center justify-center">
										<div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
										Signing In...
									</div>
								) : (
									'Login'
								)}
							</button>

							{/* Register Link */}
							<div className="text-center text-sm">
								<span className="text-gray-500">Don't have an account? </span>
								<button
									type="button"
									onClick={() => switchMode('register')}
									className="text-orange-400 hover:text-orange-500 font-medium"
								>
									Register here
								</button>
							</div>
						</div>
					) : (
						// Register Form
						<div>
							<div className='px-6 w-full max-w-md max-h-[60vh] overflow-y-auto space-y-4'>
								{/* Profile Picture Preview */}
								<div className="flex justify-center mb-6">
									<div className="relative">
										<div className="w-24 h-24 rounded-full bg-gray-200 border-4 border-white shadow-lg overflow-hidden flex items-center justify-center">
											{profilePicPreview ? (
												<img
													src={profilePicPreview}
													alt="Profile preview"
													className="w-full h-full object-cover"
												/>
											) : (
												<User size={32} className="text-gray-400" />
											)}
										</div>
										<label
											htmlFor="profilePic"
											className="absolute -bottom-1 -right-1 bg-blue-500 text-white p-2 rounded-full cursor-pointer hover:bg-blue-600 transition-colors shadow-lg"
										>
											<Camera size={16} />
										</label>
										<input
											type="file"
											accept="image/*"
											onChange={handleFileChange}
											className="hidden"
											id="profilePic"
										/>
									</div>
								</div>

								{/* Name Fields */}
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div className="space-y-2">
										<label className="block text-sm font-medium text-gray-700">
											First Name
										</label>
										<input
											type="text"
											name="firstName"
											value={registerData.firstName}
											onChange={handleRegisterChange}
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
											placeholder="First name"
										/>
									</div>

									<div className="space-y-2">
										<label className="block text-sm font-medium text-gray-700">
											Last Name
										</label>
										<input
											type="text"
											name="lastName"
											value={registerData.lastName}
											onChange={handleRegisterChange}
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
											placeholder="Last name"
										/>
									</div>
								</div>

								{/* Username */}
								<div className="space-y-2">
									<label className="block text-sm font-medium text-gray-700">
										Username
									</label>
									<input
										type="text"
										name="userName"
										value={registerData.userName}
										onChange={handleRegisterChange}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										placeholder="Choose a username"
									/>
								</div>

								{/* Email */}
								<div className="space-y-2">
									<label className="block text-sm font-medium text-gray-700">
										Email
									</label>
									<input
										type="email"
										name="email"
										value={registerData.email}
										onChange={handleRegisterChange}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										placeholder="Enter your email"
									/>
								</div>

								{/* Password */}
								<div className="space-y-2">
									<label className="block text-sm font-medium text-gray-700">
										Password
									</label>
									<div className="relative">
										<input
											type={showPassword ? 'text' : 'password'}
											name="password"
											value={registerData.password}
											onChange={handleRegisterChange}
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
											placeholder="Create a password"
										/>
										<button
											type="button"
											onClick={() => setShowPassword(!showPassword)}
											className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
										>
											{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
										</button>
									</div>
								</div>

								{/* Confirm Password */}
								<div className="space-y-2">
									<label className="block text-sm font-medium text-gray-700">
										Confirm Password
									</label>
									<div className="relative">
										<input
											type={showConfirmPassword ? 'text' : 'password'}
											name="confirmPassword"
											value={registerData.confirmPassword}
											onChange={handleRegisterChange}
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
											placeholder="Confirm your password"
										/>
										<button
											type="button"
											onClick={() => setShowConfirmPassword(!showConfirmPassword)}
											className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
										>
											{showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
										</button>
									</div>
								</div>
							</div>
							<div className='space-y-4 p-6'>
								{/* Register Button */}
								<button
									type="submit"
									disabled={loading}
									className="w-full bg-cyan-400 text-white py-3 px-4 rounded-lg hover:bg-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
								>
									{loading ? (
										<div className="flex items-center justify-center">
											<div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
											Creating Account...
										</div>
									) : (
										'Register'
									)}
								</button>

								{/* Login Link */}
								<div className="text-center text-sm">
									<span className="text-gray-500">Already have an account? </span>
									<button
										type="button"
										onClick={() => switchMode('login')}
										className="text-orange-400 hover:text-orange-500 font-medium"
									>
										Login here
									</button>
								</div>
							</div>
						</div>
					)}
				</form>
			</div>
		</div>
	);
};

export default AuthModal;