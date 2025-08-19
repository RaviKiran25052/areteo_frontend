import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BookOpen, GraduationCap, MessageSquare, Users, ArrowRight, Gem, Coins, Sparkles, Globe, BrainCircuit, Zap, LockKeyhole, FileText, UserPlus } from 'lucide-react';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            easing: 'ease-in-out-quad',
        });
    }, []);

    return (
        <div className="bg-black text-white min-h-screen overflow-hidden">
            {/* **Floating Particles Background** */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-green-500/20 animate-float"
                        style={{
                            width: `${Math.random() * 10 + 5}px`,
                            height: `${Math.random() * 10 + 5}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDuration: `${Math.random() * 20 + 10}s`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>

            {/* **Hero Section (Futuristic Glow Effect)** */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    {/* **Animated Gradient Mesh Background** */}
                    <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/50 via-black to-black"></div>
                    {/* **Floating Grid Pattern** */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                    {/* **Subtle Glow** */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-green-500/10 blur-3xl"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10" data-aos="fade-up">
                    <div className="text-center max-w-4xl mx-auto">
                        {/* **Animated Tagline Badge** */}
                        <div 
                            className="inline-flex items-center bg-green-900/20 px-4 py-2 rounded-full mb-6 border border-green-500/30 hover:bg-green-900/40 transition-all duration-300"
                            data-aos="fade-up" 
                            data-aos-delay="100"
                        >
                            <Sparkles className="w-5 h-5 mr-2 text-green-400 animate-pulse" />
                            <span className="text-green-400 font-medium tracking-wider">THE FUTURE OF LEARNING</span>
                        </div>

                        {/* **Main Headline (Gradient Text + Glow)** */}
                        <h1 
                            className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600 hover:text-green-500 transition-all duration-500"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            ARETEO
                        </h1>

                        {/* **Tagline (Typewriter Effect via CSS)** */}
                        <p 
                            className="text-3xl md:text-4xl font-light mb-8 text-gray-300 typewriter"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            Teach. Learn. Grow.
                        </p>

                        {/* **Dynamic Subheading** */}
                        <p 
                            className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            A <span className="text-green-400 font-medium">decentralized knowledge economy</span> where you earn <span className="text-yellow-300 font-medium">SkillCoins</span> by teaching and unlock premium learning.
                        </p>

                        {/* **Animated CTA Buttons** */}
                        <div 
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >
                            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 rounded-lg font-bold text-black hover:shadow-lg hover:shadow-green-500/40 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center">
                                Start Earning SkillCoins
                                <Zap className="inline ml-2 w-5 h-5 animate-pulse" />
                            </button>
                            <button className="px-8 py-4 border border-green-500/50 rounded-lg font-medium hover:bg-green-900/30 transition-all duration-300 flex items-center">
                                <UserPlus className="w-5 h-5 mr-2" />
                                Join the Community
                            </button>
                        </div>
                    </div>
                </div>

                {/* **Animated Scroll Indicator (Bouncing Arrow)** */}
                <div 
                    className="absolute bottom-10 left-0 w-full flex justify-center z-10"
                    data-aos="fade-up"
                    data-aos-delay="700"
                >
                    <div className="animate-bounce">
                        <div className="w-8 h-14 border-2 border-green-500 rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-green-500 rounded-full mt-2 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* **SkillCoins Floating Animation Section** */}
            <section className="py-20 relative overflow-hidden">
                <div className="container mx-auto px-6 relative">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="text-green-500">Trade Knowledge</span>, Earn Rewards
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Turn your expertise into <span className="text-yellow-300 font-medium">SkillCoins</span> and access a world of learning.
                        </p>
                    </div>

                    {/* **Floating 3D Card Grid** */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* **Card 1 - Teach & Earn** */}
                        <div 
                            className="bg-gradient-to-br from-gray-900/50 to-gray-900/10 p-8 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-green-500/20 hover:-translate-y-2"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <div className="w-16 h-16 bg-green-900/30 rounded-xl flex items-center justify-center mb-6 border border-green-500/30 glow-box">
                                <GraduationCap className="w-8 h-8 text-green-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Teach & Earn</h3>
                            <p className="text-gray-400 mb-4">
                                Host sessions, share PDFs, or mentor peers to earn <span className="text-yellow-300">SkillCoins</span>.
                            </p>
                            <div className="flex justify-center mt-6">
                                <div className="relative">
                                    <Coins className="w-12 h-12 text-yellow-400 animate-float-coin" />
                                    <Coins className="w-10 h-10 text-yellow-300 absolute -top-2 -right-4 opacity-70 animate-float-coin-delay" />
                                </div>
                            </div>
                        </div>

                        {/* **Card 2 - Learn Anything** */}
                        <div 
                            className="bg-gradient-to-br from-gray-900/50 to-gray-900/10 p-8 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-green-500/20 hover:-translate-y-2"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="w-16 h-16 bg-green-900/30 rounded-xl flex items-center justify-center mb-6 border border-green-500/30 glow-box">
                                <BookOpen className="w-8 h-8 text-green-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Learn Anything</h3>
                            <p className="text-gray-400 mb-4">
                                Spend <span className="text-yellow-300">SkillCoins</span> to access courses, 1:1 tutoring, and exclusive resources.
                            </p>
                            <div className="flex justify-center mt-6">
                                <div className="relative">
                                    <FileText className="w-12 h-12 text-green-400" />
                                    <LockKeyhole className="w-6 h-6 text-green-300 absolute -bottom-2 -right-2" />
                                </div>
                            </div>
                        </div>

                        {/* **Card 3 - AI-Powered Matchmaking** */}
                        <div 
                            className="bg-gradient-to-br from-gray-900/50 to-gray-900/10 p-8 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-green-500/20 hover:-translate-y-2"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <div className="w-16 h-16 bg-green-900/30 rounded-xl flex items-center justify-center mb-6 border border-green-500/30 glow-box">
                                <BrainCircuit className="w-8 h-8 text-green-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Smart Matching</h3>
                            <p className="text-gray-400 mb-4">
                                Our AI connects you with ideal learning partners based on skills and goals.
                            </p>
                            <div className="flex justify-center mt-6">
                                <div className="relative">
                                    <Users className="w-12 h-12 text-purple-400" />
                                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                        <Zap className="w-3 h-3 text-black" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* **How It Works (Animated Timeline)** */}
            <section className="py-20 bg-gradient-to-b from-black to-gray-900/50 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10">
                    <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-green-500 filter blur-3xl"></div>
                </div>

                <div className="container mx-auto px-6 relative">
                    <div className="text-center mb-20" data-aos="fade-up">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="text-green-500">How</span> Areteo Works
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            A seamless peer-to-peer learning economy in 3 steps.
                        </p>
                    </div>

                    <div className="relative">
                        {/* **Animated Timeline Line** */}
                        <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-green-500/30 via-green-500 to-green-500/30"></div>

                        {/* **Step 1** */}
                        <div className="relative mb-16 lg:mb-32" data-aos="fade-right">
                            <div className="lg:flex items-center">
                                <div className="lg:w-1/2 lg:pr-20 mb-10 lg:mb-0 text-right">
                                    <h3 className="text-3xl font-bold mb-4">1. Set Up Your Skills Profile</h3>
                                    <p className="text-gray-400">
                                        List what you can teach and what you want to learn. Our AI analyzes your expertise.
                                    </p>
                                </div>
                                <div className="lg:w-1/2 lg:pl-20 relative">
                                    <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/10 p-8 rounded-2xl border border-gray-800 relative overflow-hidden">
                                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-500/10 rounded-full blur-xl"></div>
                                        <div className="flex items-center mb-6">
                                            <div className="w-16 h-16 bg-green-900/30 rounded-xl flex items-center justify-center mr-6 border border-green-500/30">
                                                <UserPlus className="w-8 h-8 text-green-400" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold">Profile Strength: 85%</h4>
                                                <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
                                                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-sm">JavaScript</span>
                                            <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-sm">UI/UX Design</span>
                                            <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-sm">Photography</span>
                                            <span className="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-sm">+3 more</span>
                                        </div>
                                    </div>
                                    <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-green-500 rounded-full border-4 border-black hidden lg:block"></div>
                                </div>
                            </div>
                        </div>

                        {/* **Step 2** */}
                        <div className="relative mb-16 lg:mb-32" data-aos="fade-left" data-aos-delay="200">
                            <div className="lg:flex items-center flex-row-reverse">
                                <div className="lg:w-1/2 lg:pl-20 mb-10 lg:mb-0 text-left">
                                    <h3 className="text-3xl font-bold mb-4">2. Connect & Exchange</h3>
                                    <p className="text-gray-400">
                                        Chat with matched peers, schedule sessions, and start exchanging knowledge.
                                    </p>
                                </div>
                                <div className="lg:w-1/2 lg:pr-20 relative">
                                    <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/10 p-8 rounded-2xl border border-gray-800 relative overflow-hidden">
                                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
                                        <div className="flex items-center mb-6">
                                            <div className="w-16 h-16 bg-purple-900/30 rounded-xl flex items-center justify-center mr-6 border border-purple-500/30">
                                                <MessageSquare className="w-8 h-8 text-purple-400" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold">Active Conversations</h4>
                                                <p className="text-gray-400">5 matches this week</p>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 rounded-full bg-gray-700 mr-3 overflow-hidden">
                                                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-full h-full object-cover" />
                                                </div>
                                                <div>
                                                    <p className="font-medium">Sarah (UI Design)</p>
                                                    <p className="text-sm text-gray-500">"Can you review my portfolio?"</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 rounded-full bg-gray-700 mr-3 overflow-hidden">
                                                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-full h-full object-cover" />
                                                </div>
                                                <div>
                                                    <p className="font-medium">David (Python)</p>
                                                    <p className="text-sm text-gray-500">"Let's schedule a session!"</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-purple-500 rounded-full border-4 border-black hidden lg:block"></div>
                                </div>
                            </div>
                        </div>

                        {/* **Step 3** */}
                        <div className="relative" data-aos="fade-right" data-aos-delay="400">
                            <div className="lg:flex items-center">
                                <div className="lg:w-1/2 lg:pr-20 mb-10 lg:mb-0 text-right">
                                    <h3 className="text-3xl font-bold mb-4">3. Earn & Spend SkillCoins</h3>
                                    <p className="text-gray-400">
                                        Get rewarded for teaching and unlock premium learning resources.
                                    </p>
                                </div>
                                <div className="lg:w-1/2 lg:pl-20 relative">
                                    <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/10 p-8 rounded-2xl border border-gray-800 relative overflow-hidden">
                                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-500/10 rounded-full blur-xl"></div>
                                        <div className="flex justify-between items-center mb-6">
                                            <div className="flex items-center">
                                                <div className="w-16 h-16 bg-yellow-900/30 rounded-xl flex items-center justify-center mr-6 border border-yellow-500/30">
                                                    <Coins className="w-8 h-8 text-yellow-400" />
                                                </div>
                                                <div>
                                                    <h4 className="text-xl font-bold">Your Balance</h4>
                                                    <p className="text-2xl text-yellow-300 font-bold">1,250 <span className="text-lg">SkillCoins</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                                <p className="text-sm text-gray-400">Earned</p>
                                                <p className="text-green-400 font-bold">+450 SC</p>
                                            </div>
                                            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                                <p className="text-sm text-gray-400">Spent</p>
                                                <p className="text-red-400 font-bold">-200 SC</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-yellow-500 rounded-full border-4 border-black hidden lg:block"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* **Final CTA (Glowing Gradient Section)** */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-black to-purple-900/10 opacity-50"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 rounded-full bg-green-500 filter blur-3xl opacity-10"></div>
                
                <div className="container mx-auto px-6 relative">
                    <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">
                            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-400">Join the Future</span> of Learning?
                        </h2>
                        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                            Areteo is revolutionizing how knowledge is shared. Be part of the movement.
                        </p>
                        <button className="px-10 py-5 bg-gradient-to-r from-green-500 to-purple-500 rounded-lg font-bold text-white hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 text-lg group">
                            <span className="relative z-10 flex items-center justify-center">
                                Get Started for Free
                                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;