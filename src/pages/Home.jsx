import React, { useEffect } from 'react';
import {
    BookOpen, Users, MessageSquare, Award, ArrowRight, Sparkles,
    Brain, GraduationCap, Coins, Zap, Globe, BarChart3, ChevronDown, Mail, MapPin, Crown,
    TrendingUp, BookText, Languages, Camera, Code2, Music
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            easing: 'ease-out-cubic',
        });
    }, []);

    // Dummy data for top SkillCoin earners (Indian users)
    const topEarners = [
        {
            id: 1,
            name: "Priya Sharma",
            skill: "Web Development",
            coins: 2450,
            location: "Mumbai, India",
            image: "👩🏽"
        },
        {
            id: 2,
            name: "Rahul Kapoor",
            skill: "Data Science",
            coins: 2120,
            location: "Bangalore, India",
            image: "👨🏽"
        },
        {
            id: 3,
            name: "Ananya Patel",
            skill: "Graphic Design",
            coins: 1980,
            location: "Delhi, India",
            image: "👩🏽"
        },
        {
            id: 4,
            name: "Vikram Singh",
            skill: "Digital Marketing",
            coins: 1750,
            location: "Hyderabad, India",
            image: "👨🏽"
        },
        {
            id: 5,
            name: "Neha Gupta",
            skill: "Photography",
            coins: 1620,
            location: "Chennai, India",
            image: "👩🏽"
        }
    ];

    // Popular skills on the platform
    const popularSkills = [
        { name: "Web Development", icon: <Code2 className="text-blue-600" size={24} />, learners: 1250 },
        { name: "Data Science", icon: <BarChart3 className="text-purple-600" size={24} />, learners: 980 },
        { name: "Graphic Design", icon: <BookText className="text-pink-600" size={24} />, learners: 870 },
        { name: "Digital Marketing", icon: <TrendingUp className="text-green-600" size={24} />, learners: 760 },
        { name: "Photography", icon: <Camera className="text-yellow-600" size={24} />, learners: 650 },
        { name: "Music Production", icon: <Music className="text-red-600" size={24} />, learners: 540 },
        { name: "Language Learning", icon: <Languages className="text-indigo-600" size={24} />, learners: 1200 },
        { name: "Mobile Development", icon: <Code2 className="text-teal-600" size={24} />, learners: 890 }
    ];

    return (
        <div className="bg-white min-h-screen overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-white z-0"></div>

                {/* Animated background elements */}
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
                <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-lime-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 text-center md:text-left" data-aos="fade-right">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                                Teach, Learn, <span className="text-green-600">Grow</span>
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0">
                                Join India's premier peer-to-peer knowledge exchange platform where your skills become currency for growth.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg shadow-green-200 text-sm sm:text-base">
                                    Get Started <ArrowRight className="ml-2" size={18} />
                                </button>
                                <button className="bg-white hover:bg-gray-100 text-green-600 font-bold py-3 px-6 sm:px-8 rounded-full border border-green-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-sm sm:text-base">
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="md:w-1/2 mt-8 sm:mt-10 md:mt-0" data-aos="fade-left" data-aos-delay="200">
                            <div className="relative mx-4 sm:mx-0">
                                <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg border border-green-100 transform rotate-1 sm:rotate-2 overflow-hidden">
                                    <div className="flex items-center mb-3 sm:mb-4">
                                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-400 mr-2"></div>
                                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-400 mr-2"></div>
                                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400"></div>
                                        <div className="flex-1 text-center text-xs sm:text-sm font-medium">Skill Exchange Dashboard</div>
                                    </div>

                                    <div className="grid grid-cols-12 gap-3 sm:gap-4 mb-3 sm:mb-4">
                                        <div className="col-span-8 bg-gray-100 rounded-lg sm:rounded-xl p-3 sm:p-4">
                                            <div className="flex items-center mb-2 sm:mb-3">
                                                <div className="bg-green-100 p-1 sm:p-2 rounded-full mr-2 sm:mr-3">
                                                    <Brain className="text-green-600" size={16} />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-sm sm:text-base">Skill Exchange</h3>
                                                    <p className="text-xs text-gray-600">Teach photography, get coding lessons</p>
                                                </div>
                                            </div>
                                            <div className="bg-white rounded-lg p-2 sm:p-3 text-xs sm:text-sm">
                                                <div className="flex justify-between items-center mb-1 sm:mb-2">
                                                    <span>Your Skills:</span>
                                                    <span className="font-semibold">Photography, Design</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span>Skills Wanted:</span>
                                                    <span className="font-semibold">Web Development, Spanish</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-span-4 bg-green-50 rounded-lg sm:rounded-xl p-2 sm:p-4 flex flex-col justify-center">
                                            <div className="flex items-center justify-center mb-1 sm:mb-2">
                                                <Coins className="text-yellow-500" size={18} />
                                            </div>
                                            <div className="text-center">
                                                <div className="font-bold text-base sm:text-lg">120</div>
                                                <div className="text-xs text-gray-600">SkillCoins</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-green-50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-green-100">
                                        <div className="flex items-center justify-between mb-2 sm:mb-3">
                                            <h3 className="font-semibold text-sm sm:text-base">New Match Found!</h3>
                                            <div className="bg-green-600 text-white text-xs py-1 px-2 rounded-full">3 NEW</div>
                                        </div>

                                        <div className="space-y-2 sm:space-y-3">
                                            <div className="flex items-center">
                                                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-200 mr-2 sm:mr-3 flex items-center justify-center text-xs sm:text-sm">👨🏽</div>
                                                <div className="flex-1">
                                                    <div className="font-medium text-sm sm:text-base">Raj Mehta</div>
                                                    <div className="text-xs text-gray-600">Web Developer • Spanish</div>
                                                </div>
                                                <button className="text-green-600 bg-white rounded-full p-1 shadow-sm">
                                                    <MessageSquare size={14} />
                                                </button>
                                            </div>

                                            <div className="flex items-center">
                                                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-purple-200 mr-2 sm:mr-3 flex items-center justify-center text-xs sm:text-sm">👩🏽</div>
                                                <div className="flex-1">
                                                    <div className="font-medium text-sm sm:text-base">Sneha Reddy</div>
                                                    <div className="text-xs text-gray-600">Data Scientist • Photography</div>
                                                </div>
                                                <button className="text-green-600 bg-white rounded-full p-1 shadow-sm">
                                                    <MessageSquare size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -bottom-3 -left-3 sm:-bottom-5 sm:-left-5 bg-green-500 text-white text-xs font-bold py-1 sm:py-2 px-2 sm:px-4 rounded-full shadow-lg z-10 transform -rotate-6">
                                    New Match!
                                </div>

                                <div className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 bg-white shadow-lg rounded-lg sm:rounded-xl p-2 sm:p-3 transform rotate-6 border border-green-100">
                                    <div className="flex items-center">
                                        <div className="bg-yellow-100 p-1 sm:p-2 rounded-full mr-1 sm:mr-2">
                                            <Zap className="text-yellow-600" size={12} />
                                        </div>
                                        <div className="text-xs">
                                            <div>+15 SkillCoins</div>
                                            <div className="text-green-600">Earned today!</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-5 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ChevronDown className="text-gray-400" size={24} />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent z-10"></div>

                <div className="container mx-auto px-4 sm:px-6 relative z-0">
                    <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
                        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
                            A seamless ecosystem designed for mutual growth and knowledge sharing
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
                        {/* Connecting line */}
                        <div className="hidden lg:block absolute top-20 left-1/8 right-1/8 h-1 bg-green-200 mx-16"></div>

                        {/* Step 1 */}
                        <div
                            className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-green-100 transform transition-all duration-300 hover:-translate-y-2 relative z-10"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold shadow-md text-sm sm:text-base">
                                1
                            </div>
                            <div className="bg-green-100 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                                <BookOpen className="text-green-600" size={20} />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">Share Your Skills</h3>
                            <p className="text-gray-700 text-sm sm:text-base text-center">
                                Create a profile highlighting what you can teach and what you want to learn.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div
                            className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-green-100 transform transition-all duration-300 hover:-translate-y-2 relative z-10"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold shadow-md text-sm sm:text-base">
                                2
                            </div>
                            <div className="bg-green-100 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                                <Users className="text-green-600" size={20} />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">Find Matches</h3>
                            <p className="text-gray-700 text-sm sm:text-base text-center">
                                Our algorithm connects you with perfect learning partners based on skills.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div
                            className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-green-100 transform transition-all duration-300 hover:-translate-y-2 relative z-10"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold shadow-md text-sm sm:text-base">
                                3
                            </div>
                            <div className="bg-green-100 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                                <Coins className="text-green-600" size={20} />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">Earn SkillCoins</h3>
                            <p className="text-gray-700 text-sm sm:text-base text-center">
                                Teach others and earn SkillCoins that you can spend on learning new skills.
                            </p>
                        </div>

                        {/* Step 4 */}
                        <div
                            className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-green-100 transform transition-all duration-300 hover:-translate-y-2 relative z-10"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold shadow-md text-sm sm:text-base">
                                4
                            </div>
                            <div className="bg-green-100 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                                <Award className="text-green-600" size={20} />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">Grow Together</h3>
                            <p className="text-gray-700 text-sm sm:text-base text-center">
                                Build your knowledge network and achieve your learning goals with the community.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Top SkillCoin Earners Section */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Top SkillCoin Earners</h2>
                        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
                            Our most active teachers and contributors from across India
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-12 sm:mb-16">
                        {topEarners.map((user, index) => (
                            <div
                                key={user.id}
                                className="bg-gradient-to-b from-white to-green-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-green-100 transform transition-all duration-300 hover:-translate-y-2 text-center"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="flex justify-center mb-3 sm:mb-4">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-green-100 flex items-center justify-center text-xl sm:text-2xl">
                                        {user.image}
                                    </div>
                                    {index === 0 && (
                                        <div className="relative -left-3 -top-1 sm:-left-4 sm:-top-2 bg-yellow-400 rounded-full p-1 h-fit">
                                            <Crown className="text-white" size={12} />
                                        </div>
                                    )}
                                </div>
                                <h3 className="font-bold text-sm sm:text-base lg:text-lg mb-1">{user.name}</h3>
                                <p className="text-green-600 text-xs sm:text-sm mb-2">{user.skill}</p>
                                <div className="flex items-center justify-center mb-2 sm:mb-3">
                                    <Coins className="text-yellow-500 mr-1" size={14} />
                                    <span className="font-semibold text-sm sm:text-base">{user.coins}</span>
                                </div>
                                <p className="text-gray-500 text-xs">{user.location}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center" data-aos="fade-up">
                        <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto text-sm sm:text-base">
                            View Leaderboard <TrendingUp className="ml-2" size={18} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Popular Skills Section */}
            <section className="py-16 sm:py-20 bg-green-50">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Popular Skills on Areteo</h2>
                        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
                            Discover the most sought-after skills in our community
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {popularSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-green-100 transform transition-all duration-300 hover:-translate-y-2"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="flex items-center mb-3 sm:mb-4">
                                    <div className="bg-green-100 p-2 sm:p-3 rounded-lg sm:rounded-xl mr-3 sm:mr-4">
                                        {skill.icon}
                                    </div>
                                    <h3 className="font-bold text-sm sm:text-base lg:text-lg">{skill.name}</h3>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 text-xs sm:text-sm">{skill.learners.toLocaleString()} learners</span>
                                    <button className="text-green-600 text-xs sm:text-sm font-medium">Explore</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Areteo?</h2>
                        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
                            Experience the advantages of our peer-to-peer learning platform
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                            <div className="bg-green-100 p-3 sm:p-4 rounded-xl sm:rounded-2xl w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                                <Coins className="text-green-600" size={28} />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Earn While You Learn</h3>
                            <p className="text-gray-700 text-sm sm:text-base">
                                Monetize your expertise by teaching others and use your earnings to learn new skills.
                            </p>
                        </div>

                        <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                            <div className="bg-green-100 p-3 sm:p-4 rounded-xl sm:rounded-2xl w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                                <Globe className="text-green-600" size={28} />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Learn From Peers</h3>
                            <p className="text-gray-700 text-sm sm:text-base">
                                Connect with fellow learners who understand your journey and can explain concepts in relatable ways.
                            </p>
                        </div>

                        <div className="text-center" data-aos="fade-up" data-aos-delay="300">
                            <div className="bg-green-100 p-3 sm:p-4 rounded-xl sm:rounded-2xl w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                                <Users className="text-green-600" size={28} />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Build Your Network</h3>
                            <p className="text-gray-700 text-sm sm:text-base">
                                Expand your professional network while learning from diverse experts across India.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-20 bg-gradient-to-r from-green-500 to-emerald-600 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-soft-light filter blur-xl animate-blob"></div>
                    <div className="absolute top-40 right-20 w-72 h-72 bg-white rounded-full mix-blend-soft-light filter blur-xl animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-white rounded-full mix-blend-soft-light filter blur-xl animate-blob animation-delay-4000"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
                    <div data-aos="fade-up">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Ready to Start Your Learning Journey?</h2>
                        <p className="text-lg sm:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto">
                            Join thousands of users across India who are already exchanging knowledge and growing together on Areteo.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                            <button className="bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg text-sm sm:text-base">
                                Sign Up Now <Sparkles className="ml-2" size={18} />
                            </button>
                            <button className="bg-transparent hover:bg-green-700 text-white font-bold py-3 px-6 sm:px-8 rounded-full border border-white transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                                Take a Tour
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8 sm:py-12">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
                        <div>
                            <div className="flex items-center mb-3 sm:mb-4">
                                <GraduationCap className="text-green-400 mr-2" size={24} />
                                <span className="text-xl font-bold">Areteo</span>
                            </div>
                            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">Teach, Learn, Grow together</p>
                            <div className="flex space-x-3 sm:space-x-4">
                                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center text-sm">
                                        <i className="fab fa-twitter"></i>
                                    </div>
                                </a>
                                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center text-sm">
                                        <i className="fab fa-facebook-f"></i>
                                    </div>
                                </a>
                                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center text-sm">
                                        <i className="fab fa-instagram"></i>
                                    </div>
                                </a>
                                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center text-sm">
                                        <i className="fab fa-linkedin-in"></i>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3 sm:mb-4">Platform</h3>
                            <ul className="space-y-2">
                                <li><a href="/" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">How it Works</a></li>
                                <li><a href="/" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Features</a></li>
                                <li><a href="/" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Pricing</a></li>
                                <li><a href="/" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Testimonials</a></li>
                                <li><a href="/" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">FAQ</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3 sm:mb-4">Resources</h3>
                            <ul className="space-y-2">
                                <li><a href="/" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Blog</a></li>
                                <li><a href="/" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Tutorials</a></li>
                                <li><a href="/" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Help Center</a></li>
                                <li><a href="/" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Community</a></li>
                                <li><a href="/" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">SkillCoin Guide</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3 sm:mb-4">Contact</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center text-gray-400 text-sm sm:text-base">
                                    <Mail className="mr-2" size={14} />
                                    <span>support@areteo.com</span>
                                </li>
                                <li className="flex items-center text-gray-400 text-sm sm:text-base">
                                    <MapPin className="mr-2" size={14} />
                                    <span>Bangalore, India</span>
                                </li>
                            </ul>
                            <div className="mt-3 sm:mt-4">
                                <h4 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h4>
                                <div className="flex">
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        className="bg-gray-800 text-white py-2 px-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-full text-sm"
                                    />
                                    <button className="bg-green-600 hover:bg-green-700 py-2 px-3 rounded-r-lg">
                                        <Mail size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500 text-xs sm:text-sm mb-3 md:mb-0">© {new Date().getFullYear()} Areteo. All rights reserved.</p>
                        <div className="flex space-x-4 sm:space-x-6">
                            <a href="/" className="text-gray-500 hover:text-white text-xs sm:text-sm transition-colors">Terms of Service</a>
                            <a href="/" className="text-gray-500 hover:text-white text-xs sm:text-sm transition-colors">Privacy Policy</a>
                            <a href="/" className="text-gray-500 hover:text-white text-xs sm:text-sm transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </footer>

            <style jsx>{`
                @keyframes blob {
                    0% {
                        transform: translate(0px, 0px) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                    100% {
                        transform: translate(0px, 0px) scale(1);
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>

            {/* Add Font Awesome for social icons */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        </div>
    );
};

export default Home;