import React from 'react';
import Header from '../componets/Header';
import Navbar from '../componets/Navbar';
import RightAside from '../componets/RightAside';

const About = () => {
    return (
        <div className="my-4 w-[80vw] m-auto">
            <Header />
            <Navbar />

            {/* About page content */}
            <main className="mt-6 grid grid-cols-12 gap-8">
                {/* Left: main content */}
                <section className="col-span-12 lg:col-span-9 space-y-6">
                    {/* Hero */}
                    <div className="border border-gray-200 rounded-xl p-6 bg-white">
                        <p className="text-sm text-gray-500">About The Dragon News</p>
                        <h1 className="mt-2 text-2xl font-bold text-gray-900">
                            Journalism without fear or favour.
                        </h1>
                        <p className="mt-3 text-gray-600 leading-relaxed">
                            The Dragon News is a modern news platform focused on clarity, speed, and credibility.
                            We cover breaking updates, business, tech, sports, and lifestyle with a clean reading
                            experience and simple categories.
                        </p>

                        <div className="mt-5 flex flex-wrap gap-3">
                            <span className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
                                Breaking News
                            </span>
                            <span className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
                                Business
                            </span>
                            <span className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
                                Technology
                            </span>
                            <span className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
                                Sports
                            </span>
                            <span className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
                                Lifestyle
                            </span>
                        </div>
                    </div>

                    {/* Mission + Vision */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border border-gray-200 rounded-xl p-6 bg-white">
                            <h2 className="text-lg font-semibold text-gray-900">Our Mission</h2>
                            <p className="mt-2 text-gray-600 leading-relaxed">
                                Deliver accurate, easy-to-read news with a strong focus on user experience and
                                trustworthy sources.
                            </p>
                            <ul className="mt-4 list-disc pl-5 text-gray-600 space-y-2">
                                <li>Fast, clean reading flow</li>
                                <li>Category-based discovery</li>
                                <li>Simple, modern UI</li>
                            </ul>
                        </div>

                        <div className="border border-gray-200 rounded-xl p-6 bg-white">
                            <h2 className="text-lg font-semibold text-gray-900">Our Vision</h2>
                            <p className="mt-2 text-gray-600 leading-relaxed">
                                Build a news hub that helps people stay informed without noise, clutter, or
                                misinformation.
                            </p>
                            <ul className="mt-4 list-disc pl-5 text-gray-600 space-y-2">
                                <li>Fair reporting</li>
                                <li>Community-first updates</li>
                                <li>Consistent publishing</li>
                            </ul>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="border border-gray-200 rounded-xl p-6 bg-white">
                        <h2 className="text-lg font-semibold text-gray-900">Quick Stats</h2>
                        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="rounded-xl bg-gray-50 p-4">
                                <p className="text-xs text-gray-500">Articles</p>
                                <p className="text-xl font-bold text-gray-900">1,240+</p>
                            </div>
                            <div className="rounded-xl bg-gray-50 p-4">
                                <p className="text-xs text-gray-500">Categories</p>
                                <p className="text-xl font-bold text-gray-900">11</p>
                            </div>
                            <div className="rounded-xl bg-gray-50 p-4">
                                <p className="text-xs text-gray-500">Monthly Readers</p>
                                <p className="text-xl font-bold text-gray-900">90k+</p>
                            </div>
                            <div className="rounded-xl bg-gray-50 p-4">
                                <p className="text-xs text-gray-500">Avg. Rating</p>
                                <p className="text-xl font-bold text-gray-900">4.6</p>
                            </div>
                        </div>
                    </div>

                    {/* Team */}
                    <div className="border border-gray-200 rounded-xl p-6 bg-white">
                        <h2 className="text-lg font-semibold text-gray-900">Meet the Team</h2>

                        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { name: 'Muhammad Rashik Chowdhury', role: 'Founder & Editor' },
                                { name: 'Shirin Akter', role: 'Senior Reporter' },
                                { name: 'Aminul Islam', role: 'Business Analyst' },
                            ].map((member) => (
                                <div
                                    key={member.name}
                                    className="border border-gray-200 rounded-xl p-4 flex items-start gap-3"
                                >
                                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">
                                        {member.name.split(' ')[0][0]}
                                        {member.name.split(' ')[1]?.[0] || ''}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">{member.name}</p>
                                        <p className="text-sm text-gray-600">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="border border-gray-200 rounded-xl p-6 bg-white">
                        <h2 className="text-lg font-semibold text-gray-900">Contact</h2>
                        <p className="mt-2 text-gray-600">
                            Want to report news, suggest a topic, or give feedback? Send us a message.
                        </p>

                        <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                className="border border-gray-200 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-gray-200"
                                type="text"
                                placeholder="Your name"
                            />
                            <input
                                className="border border-gray-200 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-gray-200"
                                type="email"
                                placeholder="Your email"
                            />
                            <textarea
                                className="md:col-span-2 border border-gray-200 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-gray-200 min-h-[120px]"
                                placeholder="Your message"
                            />
                            <button
                                type="button"
                                className="md:col-span-2 bg-gray-900 text-white rounded-lg py-2 font-semibold hover:bg-gray-800 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </section>

                {/* Right: sidebar */}
                <div className='col-span-3'>
                    <RightAside></RightAside>
                </div>
            </main>
        </div>
    );
};

export default About;
