import React from "react";
import Header from "../componets/Header";
import Navbar from "../componets/Navbar";
import { Link } from "react-router";
import { FaBriefcase, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Career = () => {
    return (
        <div className="my-4 w-[80vw] mx-auto">
            <Header />
            <Navbar />

            <div className="mt-6 grid grid-cols-12 gap-8">
                {/* Main Content */}
                <div className="col-span-12 lg:col-span-9 space-y-6">
                    {/* Page Intro */}
                    <div className="card bg-base-100 border border-base-200 shadow-sm">
                        <div className="card-body">
                            <p className="text-sm opacity-70">Career</p>
                            <h1 className="card-title text-2xl">Join The Dragon News</h1>
                            <p className="opacity-80 leading-relaxed">
                                We’re always looking for passionate journalists, editors, and developers
                                who believe in honest reporting and clean digital experiences.
                            </p>
                        </div>
                    </div>

                    {/* Why Work With Us */}
                    <div className="card bg-base-100 border border-base-200 shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title">Why Work With Us?</h2>
                            <ul className="list-disc pl-5 opacity-80 space-y-2 mt-2">
                                <li>Remote-friendly work culture</li>
                                <li>Creative freedom and ownership</li>
                                <li>Modern tech stack & clean UI mindset</li>
                                <li>Growth-focused environment</li>
                            </ul>
                        </div>
                    </div>

                    {/* Open Positions */}
                    <div className="card bg-base-100 border border-base-200 shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title">Open Positions</h2>

                            <div className="space-y-4 mt-4">
                                {[
                                    {
                                        title: "Senior News Reporter",
                                        type: "Full Time",
                                        location: "Remote / Bangladesh",
                                    },
                                    {
                                        title: "Business Analyst",
                                        type: "Full Time",
                                        location: "Dhaka",
                                    },
                                    {
                                        title: "Frontend Developer (React)",
                                        type: "Contract",
                                        location: "Remote",
                                    },
                                ].map((job) => (
                                    <div
                                        key={job.title}
                                        className="border border-base-200 rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
                                    >
                                        <div>
                                            <h3 className="font-semibold text-lg">{job.title}</h3>
                                            <div className="flex flex-wrap gap-4 text-sm opacity-80 mt-1">
                                                <span className="flex items-center gap-1">
                                                    <FaBriefcase /> {job.type}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <FaMapMarkerAlt /> {job.location}
                                                </span>
                                            </div>
                                        </div>

                                        <Link to="/contact" className="btn btn-neutral btn-sm">
                                            Apply Now
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Hiring Process */}
                    <div className="card bg-base-100 border border-base-200 shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title">Hiring Process</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                                <div className="bg-base-200 p-4 rounded-xl">
                                    <p className="font-semibold">1. Apply</p>
                                    <p className="text-sm opacity-80">
                                        Send us your resume and portfolio.
                                    </p>
                                </div>
                                <div className="bg-base-200 p-4 rounded-xl">
                                    <p className="font-semibold">2. Interview</p>
                                    <p className="text-sm opacity-80">
                                        Short interview with our editorial team.
                                    </p>
                                </div>
                                <div className="bg-base-200 p-4 rounded-xl">
                                    <p className="font-semibold">3. Join</p>
                                    <p className="text-sm opacity-80">
                                        Start working with the team.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="col-span-12 lg:col-span-3 space-y-6">
                    {/* Career Info */}
                    <div className="card bg-base-100 border border-base-200 shadow-sm">
                        <div className="card-body">
                            <h3 className="font-semibold">Work Details</h3>
                            <div className="space-y-2 text-sm opacity-80 mt-2">
                                <p className="flex items-center gap-2">
                                    <FaClock /> Flexible working hours
                                </p>
                                <p className="flex items-center gap-2">
                                    <FaBriefcase /> Journalism & Tech roles
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="card bg-base-100 border border-base-200 shadow-sm">
                        <div className="card-body">
                            <h3 className="font-semibold">Quick Links</h3>
                            <div className="flex flex-col gap-2 mt-2">
                                <Link to="/" className="link link-hover">
                                    Home
                                </Link>
                                <Link to="/about" className="link link-hover">
                                    About
                                </Link>
                                <Link to="/contact" className="link link-hover">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="card bg-base-200 shadow-sm">
                        <div className="card-body text-center">
                            <h3 className="font-semibold">Didn’t find a role?</h3>
                            <p className="text-sm opacity-80 mt-1">
                                Send your CV anyway. We’re always open to talent.
                            </p>
                            <Link to="/contact" className="btn btn-neutral btn-sm mt-3">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Career;
