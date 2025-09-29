'use client'

import React, { useState } from 'react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')

  return (
    <main className="min-h-screen bg-white">
      
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      {/* Logo */}
      <div className="flex items-center">
        <div className="flex-shrink-0 flex items-center">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <span className="ml-3 text-xl font-bold text-gray-900">
            Apex Strategic Consulting
          </span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-8">
          <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
            Home
          </a>
          <a href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
            Services
          </a>
          <a href="#solutions" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
            Solutions
          </a>
          <a href="#case-studies" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
            Case Studies
          </a>
          <a href="#insights" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
            Insights
          </a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
            About
          </a>
          <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-200">
            Contact Us
          </a>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
          <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Navigation Menu */}
  <div className="md:hidden">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
      <a href="#home" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">
        Home
      </a>
      <a href="#services" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
        Services
      </a>
      <a href="#solutions" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
        Solutions
      </a>
      <a href="#case-studies" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
        Case Studies
      </a>
      <a href="#insights" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
        Insights
      </a>
      <a href="#about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
        About
      </a>
      <a href="#contact" className="bg-blue-600 text-white block px-3 py-2 text-base font-medium rounded-md mx-3 text-center">
        Contact Us
      </a>
    </div>
  </div>
</nav>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen flex items-center overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
    <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
    <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
  </div>

  {/* Grid Pattern Overlay */}
  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Content */}
      <div className="text-white space-y-8">
        {/* Company Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
          <span className="text-sm font-medium text-orange-300">Strategic Excellence Since 2015</span>
        </div>

        {/* Main Headline */}
        <div className="space-y-4">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Apex Strategic
            </span>
            <br />
            <span className="text-orange-400">Consulting</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full"></div>
        </div>

        {/* Value Proposition */}
        <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl">
          Transform market challenges into competitive advantages. We deliver 
          <span className="text-orange-300 font-semibold"> data-driven strategies</span> that 
          accelerate growth and maximize ROI for Fortune 500 companies.
        </p>

        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-6 py-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400">250+</div>
            <div className="text-sm text-blue-200">Strategic Wins</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400">$2.8B</div>
            <div className="text-sm text-blue-200">Revenue Impact</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400">94%</div>
            <div className="text-sm text-blue-200">Client Retention</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <span className="flex items-center justify-center">
              Schedule Strategic Assessment
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          <button className="px-8 py-4 border-2 border-white/30 hover:border-orange-400 text-white hover:text-orange-300 font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm hover:bg-white/5">
            View Case Studies
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex items-center space-x-6 pt-6 border-t border-white/10">
          <span className="text-sm text-blue-200">Trusted by:</span>
          <div className="flex items-center space-x-4 text-white/60">
            <span className="font-semibold">Fortune 500</span>
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <span className="font-semibold">Tech Leaders</span>
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <span className="font-semibold">Global Brands</span>
          </div>
        </div>
      </div>

      {/* Visual Element */}
      <div className="relative lg:ml-8">
        <div className="relative">
          {/* Main Chart/Graph Visualization */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold">Strategic Impact Dashboard</h3>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
              
              {/* Mock Chart Bars */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-blue-200 w-20">Revenue</span>
                  <div className="flex-1 bg-white/10 rounded-full h-3">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-400 h-3 rounded-full w-4/5 animate-pulse"></div>
                  </div>
                  <span className="text-orange-400 font-semibold">+185%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-blue-200 w-20">Market</span>
                  <div className="flex-1 bg-white/10 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-3 rounded-full w-3/5 animate-pulse delay-300"></div>
                  </div>
                  <span className="text-blue-400 font-semibold">+142%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-blue-200 w-20">Efficiency</span>
                  <div className="flex-1 bg-white/10 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-500 to-green-400 h-3 rounded-full w-5/6 animate-pulse delay-500"></div>
                  </div>
                  <span className="text-green-400 font-semibold">+203%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 bg-orange-500 text-white p-3 rounded-xl shadow-lg animate-bounce">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          
          <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-xl shadow-lg animate-pulse">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
    <div className="flex flex-col items-center space-y-2 text-white/60">
      <span className="text-xs uppercase tracking-wider">Discover More</span>
      <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-bounce"></div>
      </div>
    </div>
  </div>
</section>
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Apex Strategic Consulting Services
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Transform your marketing performance with Apex Strategic Consulting's proven methodology 
        and senior-level expertise. We deliver customized solutions that drive measurable results 
        across all marketing channels.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital Marketing Strategy</h3>
        <p className="text-gray-600 mb-4">
          Apex Strategic Consulting develops comprehensive digital marketing strategies using our proven methodology 
          to maximize ROI across all digital channels.
        </p>
        <ul className="text-sm text-gray-500 space-y-1">
          <li>• SEO & SEM optimization</li>
          <li>• Social media strategy</li>
          <li>• Content marketing plans</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Brand Positioning & Messaging</h3>
        <p className="text-gray-600 mb-4">
          Our senior-level consultants at Apex Strategic Consulting craft compelling brand narratives 
          that resonate with your target audience and differentiate you from competitors.
        </p>
        <ul className="text-sm text-gray-500 space-y-1">
          <li>• Brand identity development</li>
          <li>• Market positioning strategy</li>
          <li>• Messaging framework creation</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing Analytics & Optimization</h3>
        <p className="text-gray-600 mb-4">
          Apex Strategic Consulting delivers measurable results through advanced analytics, 
          performance tracking, and continuous optimization of your marketing campaigns.
        </p>
        <ul className="text-sm text-gray-500 space-y-1">
          <li>• Campaign performance analysis</li>
          <li>• Conversion rate optimization</li>
          <li>• Marketing attribution modeling</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4">
          <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Go-to-Market Strategy</h3>
        <p className="text-gray-600 mb-4">
          Leverage Apex Strategic Consulting's industry expertise to launch products successfully 
          with customized solutions tailored to your market and business objectives.
        </p>
        <ul className="text-sm text-gray-500 space-y-1">
          <li>• Market entry planning</li>
          <li>• Launch campaign development</li>
          <li>• Competitive analysis & positioning</li>
        </ul>
      </div>
    </div>

    <div className="text-center mt-12">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Apex Strategic Consulting?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <p className="text-gray-600">Years of Industry Expertise</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">200%</div>
            <p className="text-gray-600">Average ROI Improvement</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <p className="text-gray-600">Successful Campaigns Delivered</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        What Our Clients Say
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Trusted by leading brands to drive marketing excellence
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Testimonial 1 */}
      <div className="bg-white rounded-lg shadow-lg p-8 relative">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80"
            alt="Sarah Chen"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="ml-4">
            <h4 className="text-lg font-semibold text-gray-900">Sarah Chen</h4>
            <p className="text-gray-600">VP of Marketing, TechFlow Solutions</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 italic">
          "Apex Strategic Consulting transformed our digital marketing approach completely. Their data-driven strategies increased our lead generation by 340% in just six months. The team's expertise in marketing automation and customer segmentation is unmatched."
        </p>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white rounded-lg shadow-lg p-8 relative">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80"
            alt="Michael Rodriguez"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="ml-4">
            <h4 className="text-lg font-semibold text-gray-900">Michael Rodriguez</h4>
            <p className="text-gray-600">CMO, GreenLeaf Organics</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 italic">
          "Working with Apex Strategic Consulting was a game-changer for our brand positioning. They helped us pivot our messaging during a critical market shift, resulting in a 250% increase in brand awareness and our most successful product launch to date."
        </p>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white rounded-lg shadow-lg p-8 relative">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80"
            alt="Jennifer Walsh"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="ml-4">
            <h4 className="text-lg font-semibold text-gray-900">Jennifer Walsh</h4>
            <p className="text-gray-600">Marketing Director, FinanceFirst</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 italic">
          "The ROI optimization strategies from Apex Strategic Consulting exceeded all expectations. They restructured our entire funnel and implemented advanced attribution modeling that improved our marketing ROI by 180%. Absolutely phenomenal results."
        </p>
      </div>
    </div>
  </div>
</section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Company Info */}
      <div className="col-span-1 md:col-span-2">
        <h3 className="text-2xl font-bold text-blue-400 mb-4">Apex Strategic Consulting</h3>
        <p className="text-gray-300 mb-4 max-w-md">
          Driving growth through innovative marketing strategies and data-driven insights. 
          Your success is our mission.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Services */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Services</h4>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Digital Marketing</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Brand Strategy</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Market Research</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Campaign Management</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Analytics & Insights</a></li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Contact</h4>
        <div className="space-y-2 text-gray-300">
          <p className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
            123 Business Ave, Suite 500<br/>
            <span className="ml-6">New York, NY 10001</span>
          </p>
          <p className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            (555) 123-4567
          </p>
          <p className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
            info@apexstrategic.com
          </p>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} Apex Strategic Consulting. All rights reserved.
      </p>
      <div className="flex space-x-6 mt-4 sm:mt-0">
        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
      </div>
    </div>
  </div>
</footer>
    </main>
  )
}