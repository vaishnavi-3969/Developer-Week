import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CandidateNavbar } from '../../components';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const API_KEY = '6a96ee39-7f06-4581-ae3a-af171839e89f';
const LIMIT = 10;

const BrowserJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get(
                    `https://api.crackeddevs.com/api/get-jobs?limit=${LIMIT}`,
                    {
                        headers: {
                            'api-key': API_KEY,
                        },
                    }
                );
                setJobs(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching jobs:', error);
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    return (
        <div className="container mx-auto px-4">
            <CandidateNavbar />
            <h2 className="text-3xl font-bold mb-8 text-center">Browser Jobs</h2>
            {loading ? (
                <p className="text-center">Loading...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {jobs.map((job) => (
                        <motion.div
                            key={job.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden"
                            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                        >
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-4">{job.title}</h3>
                                <p className="text-gray-600 mb-4">{job.description}</p>
                                <a
                                    href={job.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-blue-500 hover:underline"
                                >
                                    Learn more <FiExternalLink className="ml-1" />
                                </a>
                                <div className="mt-4">
                                    <p className="text-sm text-gray-500">Posted on: {new Date(job.created_at).toLocaleDateString()}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BrowserJobs;
