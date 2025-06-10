



// import React, { useState, useEffect } from 'react';
// import { ArrowLeft, Clock, Share2, BookOpen, Zap, Target, Shield, TrendingUp, Users, Sparkles, ChevronRight } from 'lucide-react';

// const BlogPost = ({ onBack }) => {
//   const [scrollY, setScrollY] = useState(0);
//   const [readingProgress, setReadingProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
      
//       // Calculate reading progress
//       const winHeight = window.innerHeight;
//       const docHeight = document.documentElement.scrollHeight;
//       const totalDocScrollLength = docHeight - winHeight;
//       const scrollPostion = window.scrollY;
//       const scrollPercentage = (scrollPostion / totalDocScrollLength) * 100;
//       setReadingProgress(scrollPercentage);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const features = [
//     {
//       icon: <Target className="w-6 h-6" />,
//       title: "Smart Link Optimization",
//       description: "Sam watches which links get clicked and suggests better positioning and wording for maximum engagement."
//     },
//     {
//       icon: <Sparkles className="w-6 h-6" />,
//       title: "Professional Design Magic",
//       description: "Transform your amateur-looking pages into premium experiences without any design skills."
//     },
//     {
//       icon: <TrendingUp className="w-6 h-6" />,
//       title: "Intelligent Photo Organization",
//       description: "Create magazine-worthy galleries from scattered photos in minutes, not hours."
//     },
//     {
//       icon: <Shield className="w-6 h-6" />,
//       title: "VIP Content Protection",
//       description: "Set up exclusive sections visible only to your special customers and team members."
//     }
//   ];

//   const testimonials = [
//     {
//       name: "Sarah",
//       business: "Yoga Studio Owner",
//       result: "40% increase in bookings",
//       quote: "Sam noticed my booking link was buried and suggested moving it up. Game changer!"
//     },
//     {
//       name: "Priya",
//       business: "Home Bakery",
//       result: "Daily menu updates made easy",
//       quote: "Finally, I can update my menu without fighting with technology."
//     },
//     {
//       name: "Ravi",
//       business: "Financial Coach",
//       result: "Professional online presence",
//       quote: "Now I look like the expert I am, without designer prices."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
//       {/* Reading Progress Bar */}
//       <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
//         <div 
//           className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-150"
//           style={{ width: `${readingProgress}%` }}
//         />
//       </div>

//       {/* Navigation */}
//       <nav className="fixed top-6 left-4 right-4 z-40 bg-white/80 backdrop-blur-md shadow-lg rounded-3xl border border-gray-100">
//         <div className="max-w-7xl mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             <button 
//               onClick={onBack}
//               className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors"
//             >
//               <ArrowLeft className="w-5 h-5" />
//               <span className="font-medium">Back to Home</span>
//             </button>
//             <div className="flex items-center space-x-4">
//               <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
//                 <Share2 className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div className="pt-24 pb-16 px-4" style={{ marginTop: '30px' }}>
//         <div className="max-w-4xl mx-auto text-center">
//           <div 
//             className="transform transition-all duration-1000"
//             style={{ 
//               transform: `translateY(${scrollY * 0.3}px)`,
//               opacity: Math.max(0, 1 - scrollY * 0.002)
//             }}
//           >
//             <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
//               <BookOpen className="w-4 h-4" />
//               <span>Featured Article</span>
//             </div>
//             <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-purple-800 bg-clip-text text-transparent mb-6 leading-tight">
//               Meet Sam
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
//               Your Digital Marketing Assistant Who Actually Gets It
//             </p>
//             <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
//               <div className="flex items-center space-x-2">
//                 <Clock className="w-4 h-4" />
//                 <span>8 min read</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Users className="w-4 h-4" />
//                 <span>For Small Business Owners</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-4xl mx-auto px-4 pb-20">
//         <article className="prose prose-lg max-w-none">
//           {/* Introduction */}
//           <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-12">
//             <div className="text-lg leading-relaxed space-y-6">
//               <p className="text-xl text-gray-700 font-medium">
//                 Remember when having a website meant you were "tech-savvy"? Those days are long gone.
//               </p>
//               <p className="text-gray-600">
//                 Today, you need a professional online presence that works as hard as you do. But here's the problem: most tools make you choose between spending hours learning complicated software or settling for something that looks... well, amateur.
//               </p>
//               <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6">
//                 <p className="text-lg font-semibold text-purple-800 mb-2">What if there were a third option?</p>
//                 <p className="text-purple-700">
//                   Say hello to Sam - the digital marketing assistant who actually understands your business.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Sam Introduction */}
//           <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-3xl p-8 md:p-12 mb-12 relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full transform translate-x-32 -translate-y-32"></div>
//             <div className="relative">
//               <div className="flex items-center space-x-3 mb-6">
//                 <Zap className="w-8 h-8" />
//                 <h2 className="text-3xl font-bold">Say Hello to Sam</h2>
//               </div>
//               <p className="text-xl mb-6 leading-relaxed opacity-95">
//                 Sam is like having a marketing assistant who never sleeps, never takes vacation days, and understands your business.
//               </p>
//               <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
//                 <p className="text-lg font-medium mb-4">Here's what makes Sam different:</p>
//                 <div className="grid md:grid-cols-2 gap-4">
//                   <div className="bg-white/10 rounded-xl p-4">
//                     <p className="font-semibold mb-2">Other tools:</p>
//                     <p className="opacity-90">Give you a hammer and say "Build a house"</p>
//                   </div>
//                   <div className="bg-white/10 rounded-xl p-4">
//                     <p className="font-semibold mb-2">Sam:</p>
//                     <p className="opacity-90">Asks what kind of house you want, then helps you build it step by step</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Features Grid */}
//           <div className="mb-12">
//             <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//               What Sam Does for You
//             </h2>
//             <div className="grid md:grid-cols-2 gap-8">
//               {features.map((feature, index) => (
//                 <div 
//                   key={index}
//                   className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
//                 >
//                   <div className="flex items-center space-x-4 mb-4">
//                     <div className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl text-purple-600">
//                       {feature.icon}
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
//                   </div>
//                   <p className="text-gray-600 leading-relaxed">{feature.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Success Story */}
//           <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-3xl p-8 md:p-12 mb-12">
//             <div className="flex items-start space-x-4">
//               <div className="p-3 bg-green-100 rounded-xl">
//                 <TrendingUp className="w-6 h-6 text-green-600" />
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold text-green-800 mb-4">Real Success Story</h3>
//                 <div className="bg-white rounded-xl p-6 border border-green-200">
//                   <p className="text-lg text-gray-700 mb-4">
//                     <strong>Sarah runs a yoga studio.</strong> Sam noticed her class booking link was getting buried below her Instagram feed. One suggestion later, her bookings increased by 40%.
//                   </p>
//                   <div className="flex items-center justify-between">
//                     <span className="text-green-600 font-semibold">40% increase in bookings</span>
//                     <ChevronRight className="w-5 h-5 text-green-500" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Testimonials */}
//           <div className="mb-12">
//             <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Perfect for Small Business Owners</h2>
//             <p className="text-xl text-center text-gray-600 mb-12">
//               Sam was built for people who need tech to work for them, not against them.
//             </p>
//             <div className="grid md:grid-cols-3 gap-6">
//               {testimonials.map((testimonial, index) => (
//                 <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
//                   <div className="mb-4">
//                     <p className="font-bold text-gray-800">{testimonial.name}</p>
//                     <p className="text-sm text-gray-500">{testimonial.business}</p>
//                     <p className="text-sm font-semibold text-purple-600">{testimonial.result}</p>
//                   </div>
//                   <p className="text-gray-600 italic">"{testimonial.quote}"</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Future Features */}
//           <div className="bg-gray-900 text-white rounded-3xl p-8 md:p-12 mb-12 relative overflow-hidden">
//             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
//             <div className="relative">
//               <h2 className="text-3xl font-bold mb-8">What's Coming Next</h2>
//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="p-2 bg-purple-600 rounded-lg">
//                     <Share2 className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold mb-2">Post Everywhere at Once</h3>
//                     <p className="text-gray-300">Tell Sam to announce your new product, and it'll automatically post on Instagram, LinkedIn, WhatsApp, and Twitter—each perfectly formatted.</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <div className="p-2 bg-pink-600 rounded-lg">
//                     <Zap className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold mb-2">AI Campaign Building</h3>
//                     <p className="text-gray-300">Need a landing page? Sam will build it, set up forms, and suggest optimizations for better results.</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <div className="p-2 bg-purple-600 rounded-lg">
//                     <TrendingUp className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold mb-2">Real Results Tracking</h3>
//                     <p className="text-gray-300">Sam will tell you exactly which changes are making you more money.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Call to Action */}
//           <div className="text-center bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700 text-white rounded-3xl p-8 md:p-12">
//             <h2 className="text-4xl font-bold mb-6">Ready to Stop Wrestling with Technology?</h2>
//             <p className="text-xl mb-8 opacity-95">
//               While your competition is still figuring out fonts and colors, you'll be focusing on what actually matters: growing your business.
//             </p>
//             <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg">
//               Get Early Access to Sam
//             </button>
//             <p className="mt-6 text-lg opacity-90">
//               <strong>Social Address with Sam:</strong> Finally, technology that works the way you think.
//             </p>
//           </div>
//         </article>
//       </div>
//     </div>
//   );
// };

// export default BlogPost;







import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Share2, BookOpen, Zap, Target, Shield, TrendingUp, Users, Sparkles, ChevronRight } from 'lucide-react';

const BlogPost = ({ onBack }) => {
  const [scrollY, setScrollY] = useState(0);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Calculate reading progress
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalDocScrollLength = docHeight - winHeight;
      const scrollPostion = window.scrollY;
      const scrollPercentage = (scrollPostion / totalDocScrollLength) * 100;
      setReadingProgress(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Smart Link Optimization",
      description: "Sam watches which links get clicked and suggests better positioning and wording for maximum engagement."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Professional Design Magic",
      description: "Transform your amateur-looking pages into premium experiences without any design skills."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Intelligent Photo Organization",
      description: "Create magazine-worthy galleries from scattered photos in minutes, not hours."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "VIP Content Protection",
      description: "Set up exclusive sections visible only to your special customers and team members."
    }
  ];

  const testimonials = [
    {
      name: "Sarah",
      business: "Yoga Studio Owner",
      result: "40% increase in bookings",
      quote: "Sam noticed my booking link was buried and suggested moving it up. Game changer!"
    },
    {
      name: "Priya",
      business: "Home Bakery",
      result: "Daily menu updates made easy",
      quote: "Finally, I can update my menu without fighting with technology."
    },
    {
      name: "Ravi",
      business: "Financial Coach",
      result: "Professional online presence",
      quote: "Now I look like the expert I am, without designer prices."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Back Button - Fixed positioning that doesn't interfere with navbar */}
      <div className="fixed top-28 left-8 z-30">
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm text-gray-700 hover:text-purple-600 px-4 py-2 rounded-full shadow-lg border border-gray-200 transition-all duration-200 hover:shadow-xl"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-medium text-sm">Back</span>
        </button>
      </div>

  

      {/* Hero Section - Added proper top padding to avoid navbar overlap */}
      <div className="pt-36 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className="transform transition-all duration-1000"
            style={{ 
              transform: `translateY(${scrollY * 0.3}px)`,
              opacity: Math.max(0, 1 - scrollY * 0.002)
            }}
          >
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              <span>Featured Article</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-purple-800 bg-clip-text text-transparent mb-6 leading-tight">
              Meet Sam
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Your Digital Marketing Assistant Who Actually Gets It
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>8 min read</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>For Small Business Owners</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-20">
        <article className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-12">
            <div className="text-lg leading-relaxed space-y-6">
              <p className="text-xl text-gray-700 font-medium">
                Remember when having a website meant you were "tech-savvy"? Those days are long gone.
              </p>
              <p className="text-gray-600">
                Today, you need a professional online presence that works as hard as you do. But here's the problem: most tools make you choose between spending hours learning complicated software or settling for something that looks... well, amateur.
              </p>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6">
                <p className="text-lg font-semibold text-purple-800 mb-2">What if there were a third option?</p>
                <p className="text-purple-700">
                  Say hello to Sam - the digital marketing assistant who actually understands your business.
                </p>
              </div>
            </div>
          </div>

          {/* Sam Introduction */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-3xl p-8 md:p-12 mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full transform translate-x-32 -translate-y-32"></div>
            <div className="relative">
              <div className="flex items-center space-x-3 mb-6">
                <Zap className="w-8 h-8" />
                <h2 className="text-3xl font-bold">Say Hello to Sam</h2>
              </div>
              <p className="text-xl mb-6 leading-relaxed opacity-95">
                Sam is like having a marketing assistant who never sleeps, never takes vacation days, and understands your business.
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <p className="text-lg font-medium mb-4">Here's what makes Sam different:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="font-semibold mb-2">Other tools:</p>
                    <p className="opacity-90">Give you a hammer and say "Build a house"</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="font-semibold mb-2">Sam:</p>
                    <p className="opacity-90">Asks what kind of house you want, then helps you build it step by step</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              What Sam Does for You
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl text-purple-600">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Success Story */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-3xl p-8 md:p-12 mb-12">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-green-100 rounded-xl">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-800 mb-4">Real Success Story</h3>
                <div className="bg-white rounded-xl p-6 border border-green-200">
                  <p className="text-lg text-gray-700 mb-4">
                    <strong>Sarah runs a yoga studio.</strong> Sam noticed her class booking link was getting buried below her Instagram feed. One suggestion later, her bookings increased by 40%.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-green-600 font-semibold">40% increase in bookings</span>
                    <ChevronRight className="w-5 h-5 text-green-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Perfect for Small Business Owners</h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Sam was built for people who need tech to work for them, not against them.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="mb-4">
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.business}</p>
                    <p className="text-sm font-semibold text-purple-600">{testimonial.result}</p>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* Future Features */}
          <div className="bg-gray-900 text-white rounded-3xl p-8 md:p-12 mb-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
            <div className="relative">
              <h2 className="text-3xl font-bold mb-8">What's Coming Next</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-purple-600 rounded-lg">
                    <Share2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Post Everywhere at Once</h3>
                    <p className="text-gray-300">Tell Sam to announce your new product, and it'll automatically post on Instagram, LinkedIn, WhatsApp, and Twitter—each perfectly formatted.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-pink-600 rounded-lg">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">AI Campaign Building</h3>
                    <p className="text-gray-300">Need a landing page? Sam will build it, set up forms, and suggest optimizations for better results.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-purple-600 rounded-lg">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Real Results Tracking</h3>
                    <p className="text-gray-300">Sam will tell you exactly which changes are making you more money.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700 text-white rounded-3xl p-8 md:p-12">
            <h2 className="text-4xl font-bold mb-6">Ready to Stop Wrestling with Technology?</h2>
            <p className="text-xl mb-8 opacity-95">
              While your competition is still figuring out fonts and colors, you'll be focusing on what actually matters: growing your business.
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg">
              Get Early Access to Sam
            </button>
            <p className="mt-6 text-lg opacity-90">
              <strong>Social Address with Sam:</strong> Finally, technology that works the way you think.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;