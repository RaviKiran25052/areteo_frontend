import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Brain, 
  Users, 
  BookOpen, 
  Coins, 
  MessageCircle, 
  ArrowRight,
  Sparkles,
  Target,
  BarChart3
} from 'lucide-react';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-green-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
            <Brain className="text-white" size={24} />
          </div>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-white">
            Areteo
          </h1>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-green-400 transition-colors">Home</a>
          <a href="#" className="hover:text-green-400 transition-colors">Features</a>
          <a href="#" className="hover:text-green-400 transition-colors">Community</a>
          <a href="#" className="hover:text-green-400 transition-colors">About</a>
        </div>
        
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition-all transform hover:scale-105">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 pt-20 pb-28 text-center">
        <div 
          className="inline-flex items-center space-x-2 bg-green-900/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <Sparkles size={16} className="text-green-400" />
          <span className="text-green-400 text-sm">The future of learning is here</span>
        </div>
        
        <h1 
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Teach, <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">Learn</span>, Grow
        </h1>
        
        <p 
          className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          A peer-to-peer knowledge exchange platform where you earn SkillCoins by teaching and spend them to learn from others.
        </p>
        
        <div 
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
            <span>Start Learning</span>
            <ArrowRight size={18} />
          </button>
          <button className="bg-transparent border border-gray-700 hover:border-green-400 text-white font-semibold py-3 px-8 rounded-lg transition-all">
            Become a Teacher
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-bold mb-4"
            data-aos="fade-up"
          >
            How <span className="text-green-400">Areteo</span> Works
          </h2>
          <p 
            className="text-gray-400 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Our platform creates a seamless ecosystem for personal growth and knowledge exchange
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div 
            className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-green-400/30 transition-all"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-14 h-14 bg-green-900/30 rounded-xl flex items-center justify-center mb-6">
              <BookOpen className="text-green-400" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Teach & Share Knowledge</h3>
            <p className="text-gray-400">
              Share your expertise with others and build your reputation as a skilled teacher in your field.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div 
            className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-green-400/30 transition-all"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="w-14 h-14 bg-green-900/30 rounded-xl flex items-center justify-center mb-6">
              <Coins className="text-green-400" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Earn SkillCoins</h3>
            <p className="text-gray-400">
              Get rewarded with SkillCoins for every teaching session that helps you access premium learning materials.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div 
            className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-green-400/30 transition-all"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="w-14 h-14 bg-green-900/30 rounded-xl flex items-center justify-center mb-6">
              <Users className="text-green-400" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Skill-Based Matchmaking</h3>
            <p className="text-gray-400">
              Our algorithm connects you with the perfect learning partners based on your skills and interests.
            </p>
          </div>
          
          {/* Feature 4 */}
          <div 
            className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-green-400/30 transition-all"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="w-14 h-14 bg-green-900/30 rounded-xl flex items-center justify-center mb-6">
              <MessageCircle className="text-green-400" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Private Chat & Collaboration</h3>
            <p className="text-gray-400">
              Communicate seamlessly with your learning partners through our integrated chat system.
            </p>
          </div>
          
          {/* Feature 5 */}
          <div 
            className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-green-400/30 transition-all"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="w-14 h-14 bg-green-900/30 rounded-xl flex items-center justify-center mb-6">
              <Target className="text-green-400" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Personalized Learning Paths</h3>
            <p className="text-gray-400">
              Create and follow customized learning journeys tailored to your specific goals and interests.
            </p>
          </div>
          
          {/* Feature 6 */}
          <div 
            className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-green-400/30 transition-all"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="w-14 h-14 bg-green-900/30 rounded-xl flex items-center justify-center mb-6">
              <BarChart3 className="text-green-400" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Track Your Progress</h3>
            <p className="text-gray-400">
              Monitor your learning journey with detailed analytics and achievements to stay motivated.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-gray-800/40 to-green-900/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="text-5xl font-bold text-green-400 mb-2">10K+</div>
              <div className="text-gray-300">Active Learners</div>
            </div>
            <div 
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="text-5xl font-bold text-green-400 mb-2">5K+</div>
              <div className="text-gray-300">Skill Teachers</div>
            </div>
            <div 
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="text-5xl font-bold text-green-400 mb-2">200K+</div>
              <div className="text-gray-300">SkillCoins Earned</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div 
          className="max-w-3xl mx-auto"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-gray-400 mb-10">
            Join our community of knowledge seekers and sharers today. Expand your skills, earn rewards, and grow together.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2 mx-auto">
            <span>Join Areteo Now</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 mt-20 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <Brain className="text-white" size={18} />
              </div>
              <h2 className="text-xl font-bold">Areteo</h2>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Help</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="text-center text-gray-500 text-sm mt-8">
            &copy; {new Date().getFullYear()} Areteo. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;