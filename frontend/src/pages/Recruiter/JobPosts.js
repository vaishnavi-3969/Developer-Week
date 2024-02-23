import React, { useState } from 'react';
import { RecruiterNavbar } from '../../components';

const JobPosts = () => {
    // Static data for initial job posts
    const initialJobPosts = [
        { id: 1, title: 'Frontend Developer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', location: 'New York, USA' },
        { id: 2, title: 'Backend Developer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', location: 'San Francisco, USA' },
        { id: 3, title: 'Full Stack Developer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', location: 'London, UK' },
    ];

    const [jobPosts, setJobPosts] = useState(initialJobPosts);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        location: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newJobPost = {
            id: jobPosts.length + 1,
            title: formData.title,
            description: formData.description,
            location: formData.location,
        };
        setJobPosts([...jobPosts, newJobPost]);
        setFormData({ title: '', description: '', location: '' });
    };

    return (
        <div>
            <RecruiterNavbar />
            <div className="container mx-auto mt-8">
                <h2 className="text-3xl font-bold mb-4">Job Posts</h2>
                {/* Job Post Form */}
                <div className='text-center'>
                    <form onSubmit={handleSubmit} className="mb-6">
                        <fieldset>
                            <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Job Title" className="border rounded-md p-2 mb-2" required />
                        </fieldset>
                        <fieldset>
                            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Job Description" className="border rounded-md p-2 mb-2" rows="4" required></textarea>
                        </fieldset>
                        <fieldset>
                            <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" className="border rounded-md p-2 mb-2" required />

                        </fieldset>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none">Create Job Post</button>
                    </form>
                </div>
                {/* Display Job Posts */}
                <div>
                    {jobPosts.map(jobPost => (
                        <div key={jobPost.id} className="bg-white rounded-lg shadow-md p-6 mb-4">
                            <h3 className="text-xl font-semibold mb-2">{jobPost.title}</h3>
                            <p className="text-gray-500 mb-2">{jobPost.description}</p>
                            <p className="text-gray-500">{jobPost.location}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JobPosts;
