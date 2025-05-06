import "./App.css";
import { SignInButton, useUser } from "@clerk/clerk-react"; // Add this import
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import VantaBackground from "./components/VantaBackground";

function LandingPage() {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  // Can navigate to the dashboard upon signing in:
  useEffect(() => {
    if (isLoaded && user && location.state?.fromSignIn) {
      navigate("/dashboard");
    }
  }, [isLoaded, user, navigate, location.state]);

  return (
    <div className="font-sans text-gray-800 w-full min-h-screen bg-white">
      {/* Header */}
      <header className="custom-header">
        <div className="logo-container">
          <img src="/autoplan-icon.png" width="40"></img>
        </div>
        <h1 className="title">AutoPlan</h1>
        <div className="nav-container">
          <a href="#about" className="nav-links">
            About
          </a>
          <a href="#features" className="nav-links">
            Features
          </a>
          <a href="#meetus" className="nav-links">
            Meet Us
          </a>
          <a
            href={isLoaded && user ? "/dashboard" : "#try"}
            className="nav-links nav-links-last"
          >
            {isLoaded && user ? "Dashboard" : "Try Free"}
          </a>
        </div>
      </header>
      <VantaBackground>
        {/* Hero */}
        <section className="text-center min-h-screen py-20 w-full" id="try">
          <div className="container">
            {/* Hero Image Placeholder */}
            <div
              style={{
                backgroundImage: 'url("gears.gif")',
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                width: "200px",
                height: "200px",
                margin: "0 auto",
                pointerEvents: "none", // Prevent interaction
                userSelect: "none", // Prevent text/image selection
              }}
              onContextMenu={(e) => e.preventDefault()}
            />

            <h2 className="mb-4 font-semibold title">
              Lesson Planning, Automated.
            </h2>
            <p className="mb-6">
              Create full, standards-aligned lesson plans in seconds with AI.
              Save time. Reduce stress. Teach better.
            </p>
            {/* Sign In / Sign Up Button */}
            <div className="mb-12">
              {!isLoaded ? null : user ? (
                <Link to="/dashboard">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
                    Go to Dashboard
                  </button>
                </Link>
              ) : (
                <SignInButton mode="modal">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
                    Try The App
                  </button>
                </SignInButton>
              )}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20">
          <h3 className="text-center mb-12 font-semibold title">
            What is AutoPlan?
          </h3>
          <div className="text-center">
            <img
              src="/ask.png"
              alt="Question.png"
              draggable="false"
              className="mb-6 mx-auto"
            ></img>
          </div>
          <div className="max-w-4xl mx-auto text-center px-4">
            <p className="text-lg mb-6">
              AutoPlan is an AI-powered platform designed to revolutionize the
              way educators plan their lessons. Whether you're a new teacher or
              a seasoned professional, AutoPlan helps you generate high-quality,
              standards-aligned lesson plans in seconds—saving time, reducing
              stress, and enhancing your teaching experience.
            </p>
            <p className="text-lg">
              Our mission is to empower teachers to focus on what <i>truly</i>{" "}
              matters: inspiring and educating students.
            </p>
          </div>
        </section>

        {/* Features */}
        <section id="features">
          <h3 className="text-center mb-12 font-semibold title">
            Key Features
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <img
                src="/icon-1.png"
                alt="AI icon"
                className="w-16 h-16 mx-auto mb-3"
                draggable="false"
              />
              <h4 className="text-xl font-semibold mb-2">
                AI Lesson Generator
              </h4>
              <p>
                Enter a topic and grade level, get a complete plan instantly.
              </p>
            </div>
            <div>
              <img
                src="/icon-2.png"
                alt="Checklist icon"
                className="w-16 h-16 mx-auto mb-3"
                draggable="false"
              />
              <h4 className="text-xl font-semibold mb-2">Standards-Aligned</h4>
              <p>
                Plans map to Common Core or your local curriculum guidelines.
              </p>
            </div>
            <div>
              <img
                src="/icon-3.png"
                alt="Export icon"
                className="w-16 h-16 mx-auto mb-3"
                draggable="false"
              />
              <h4 className="text-xl font-semibold mb-2">Export Ready</h4>
              <p>Download to PDF or copy to Google Docs with one click.</p>
            </div>
          </div>
        </section>

        {/* Meet Us */}
        <section id="meetus">
          <h3 className="text-center mb-6 font-semibold title">Who Are We?</h3>
          <hr
            style={{
              width: "75%",
            }}
          />
          <div className="text-center profile-container">
            <img
              src="/profilepicture.jpg"
              className="mb-6 mx-auto profile"
            ></img>
          </div>
          <p className="text-center mx-auto">
            <span className="font-semibold">
              Spoiler: It’s just me. Hi. 👋{" "}
            </span>
            <br />
            AutoPlan wasn’t built by a big tech company. It wasn’t outsourced or
            copied from someone else. It was built by one person — Jack Rose —
            from scratch, with passion, late nights, a mountain of coffee, and a
            vision for what planning should feel like:{" "}
            <i>fast, simple, and personal</i>.
          </p>
          <p className="text-center mx-auto">
            <span className="font-semibold">So, who am I?</span>
            <br /> I’m Jack, a data-driven thinker and lifelong builder. I’m
            currently pursuing a Master’s in Data Analytics with an MBA and a
            minor in Philosophy at The Ohio State University. I’ve always been
            fascinated by how systems, routines, and ideas intersect — from
            complex machine learning models to the smallest details of daily
            life. AutoPlan started as a personal need. I wanted a tool that
            didn’t just schedule tasks, but actually helped me plan — one that
            understood priorities, avoided clutter, and gave just enough
            structure without micromanaging my day. Nothing out there quite fit.
            So I made it myself.
          </p>
          <p className="text-center mx-auto">
            <span className="font-semibold">Why I built AutoPlan:</span>
            <br /> There’s a certain kind of person — maybe you’re one of them —
            who wants to do a lot, but doesn’t want to waste time telling a
            planner how to do its job. AutoPlan is for people who think fast,
            work hard, and need their tools to keep up. It’s for students,
            makers, thinkers, and anyone who wants a smarter way to manage time.
            AutoPlan is still growing, and so am I. This isn’t just a project —
            it’s a personal mission to make better planning tools for real life.
            Thanks for being part of it!
          </p>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 text-sm text-gray-500">
          {/* Footer Badge Image */}
          <div>
            <a href="https://openai.com" target="_blank">
              <img
                src="/openai-badge.png"
                alt="Powered by OpenAI"
                className="mx-auto w-32 opacity-60 pointer"
              />
            </a>
          </div>
          &copy; {new Date().getFullYear()} AutoPlan. Built for educators.
        </footer>
      </VantaBackground>
    </div>
  );
}

export default LandingPage;
