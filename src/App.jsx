import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (
    <div className="font-sans text-gray-800 w-full min-h-screen bg-white">
      {/* Header */}
      <header className="custom-header">
        <div className="logo-container">
          <img src="/autoplan-icon.png" width="40"></img>
        </div>
        <h1 className="title">AutoPlan</h1>
        <div className="nav-container">
          <a href="#about" className="nav-links">About</a>
          <a href="#features" className="nav-links">Features</a>
          <a href="#try" className="nav-links nav-links-last">Try Free</a>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center min-h-screen py-20 w-full" id="hero">
        <div className="container">
          {/* Hero Image Placeholder */}
            <div>
              <img src="gears.gif" width="200" className="mx-auto"/>
            </div>

          <h2 className="mb-4 font-semibold title">Lesson Planning, Automated</h2>
          <p className="mb-6">
            Create full, standards-aligned lesson plans in seconds with AI. Save time. Reduce stress. Teach better.
          </p>
          {/* Call-to-Action */}
          <div className="mb-12">
            <a href="#try" className="bg-blue-600 text-white px-6 py-3 rounded-lg">
              Try It Free
            </a>
          </div>
        </div> 
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <h3 className="text-center mb-12 font-semibold title">What is AutoPlan?</h3>
        <img src="/ask.png" alt="Question.png" className="mx-auto mb-6"></img>
        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="text-lg mb-6">
            AutoPlan is an AI-powered platform designed to revolutionize the way educators plan their lessons. Whether you're a new teacher or a seasoned professional, AutoPlan helps you generate high-quality, standards-aligned lesson plans in seconds—saving time, reducing stress, and enhancing your teaching experience.
          </p>
          <p className="text-lg">
            Our mission is to empower teachers to focus on what <i>truly</i> matters: inspiring and educating students.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features">
      <h3 className="text-center mb-12 font-semibold title">Key Features</h3>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
          <img
              src="/icon-1.png"
              alt="AI icon"
              className="w-16 h-16 mx-auto mb-3"
            />
            <h4 className="text-xl font-semibold mb-2">AI Lesson Generator</h4>
            <p>Enter a topic and grade level, get a complete plan instantly.</p>
          </div>
          <div>
          <img
              src="/icon-2.png"
              alt="Checklist icon"
              className="w-16 h-16 mx-auto mb-3"
            />
            <h4 className="text-xl font-semibold mb-2">Standards-Aligned</h4>
            <p>Plans map to Common Core or your local curriculum guidelines.</p>
          </div>
          <div>
          <img
              src="/icon-3.png"
              alt="Export icon"
              className="w-16 h-16 mx-auto mb-3"
            />
            <h4 className="text-xl font-semibold mb-2">Export Ready</h4>
            <p>Download to PDF or copy to Google Docs with one click.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm py-6 text-gray-500 border-t">
        {/* Footer Badge Image */}
        <div className="mb-2">
          <img
            src="/openai-badge.png"
            alt="Powered by OpenAI"
            className="mx-auto w-32 opacity-60"
          />
        </div>
        &copy; {new Date().getFullYear()} AutoPlan. Built for educators.
      </footer>
    </div>
    
  )
}

export default App;