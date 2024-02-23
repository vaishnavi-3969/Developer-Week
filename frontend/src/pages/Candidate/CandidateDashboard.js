import React, { useState } from 'react';
import { useUser } from '@descope/react-sdk'
import { CandidateNavbar } from '../../components';

const CandidateDashboard = () => {
  const { user } = useUser();
  const [resume, setResume] = useState('');
  const [academicAchievement, setAcademicAchievement] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [qualification, setQualification] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSaved(true);
  };

  return (
    <div>
      <CandidateNavbar />
      <div className="container mx-auto mt-8">
        <h2 className="text-3xl font-bold mb-4">Welcome, {user.name}!</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              className="border rounded-md p-2"
              placeholder="First Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              className="border rounded-md p-2"
              placeholder="Last Name"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
            <input
              type="text"
              className="border rounded-md p-2"
              placeholder="Qualification"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
            />
          </div>
          <h3 className="text-xl font-semibold mb-4">Academic Achievements</h3>
          <textarea
            className="w-full border rounded-md p-2 mb-4"
            rows="4"
            placeholder="Enter your academic achievements"
            value={academicAchievement}
            onChange={(e) => setAcademicAchievement(e.target.value)}
          />
          <h3 className="text-xl font-semibold mb-4">Upload Resume</h3>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="border rounded-md p-2 mb-4"
            onChange={(e) => setResume(e.target.files[0])}
          />
          {isSaved && <p className="text-green-500 mb-4">Saved successfully!</p>}
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandidateDashboard;
