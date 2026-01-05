'use client';

import { useState } from 'react';

// Sample jobs data (in production, this would come from an API aggregating job boards)
const sampleJobs = [
  {
    id: '1',
    title: 'Senior PR Manager',
    company: 'TechCorp India',
    location: 'Mumbai, Maharashtra',
    description: 'Leading tech company seeks experienced PR Manager to handle corporate communications and media relations.',
    salary_range: '₹8-12 LPA',
    posted_at: '2026-01-04T10:00:00Z',
    url: '#'
  },
  {
    id: '2',
    title: 'Public Relations Executive',
    company: 'StartUp Ventures',
    location: 'Bangalore, Karnataka',
    description: 'Fast-growing startup looking for energetic PR Executive to build brand presence in Indian market.',
    salary_range: '₹4-6 LPA',
    posted_at: '2026-01-03T15:30:00Z',
    url: '#'
  },
  {
    id: '3',
    title: 'Digital PR Specialist',
    company: 'MediaMax Agency',
    location: 'Delhi NCR',
    description: 'Join our award-winning agency as a Digital PR Specialist focusing on social media and online reputation management.',
    salary_range: '₹5-8 LPA',
    posted_at: '2026-01-02T12:00:00Z',
    url: '#'
  },
  {
    id: '4',
    title: 'Corporate Communications Manager',
    company: 'Fortune 500 India',
    location: 'Mumbai, Maharashtra',
    description: 'Multinational corporation seeks experienced professional for internal and external communications.',
    salary_range: '₹12-18 LPA',
    posted_at: '2026-01-01T09:00:00Z',
    url: '#'
  },
  {
    id: '5',
    title: 'PR Account Manager',
    company: 'Brand Builders PR',
    location: 'Hyderabad, Telangana',
    description: 'Manage client accounts and execute strategic PR campaigns for leading Indian and international brands.',
    salary_range: '₹6-9 LPA',
    posted_at: '2025-12-30T14:00:00Z',
    url: '#'
  },
  {
    id: '6',
    title: 'Junior PR Associate',
    company: 'Creative Communications',
    location: 'Pune, Maharashtra',
    description: 'Entry-level opportunity for fresh graduates to start their PR career with a dynamic agency.',
    salary_range: '₹3-4 LPA',
    posted_at: '2025-12-28T11:00:00Z',
    url: '#'
  }
];

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('all');

  const locations = ['all', 'Mumbai', 'Bangalore', 'Delhi NCR', 'Hyderabad', 'Pune'];

  const filteredJobs = sampleJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter === 'all' || job.location.includes(locationFilter);
    return matchesSearch && matchesLocation;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            PR Jobs in India
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover exciting Public Relations opportunities from leading companies across India
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            {/* Search Bar */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search jobs by title, company, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Location Filter */}
            <div className="flex flex-wrap gap-2">
              {locations.map(location => (
                <button
                  key={location}
                  onClick={() => setLocationFilter(location)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    locationFilter === location
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {location === 'all' ? 'All Locations' : location}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Jobs Count */}
        <div className="max-w-4xl mx-auto mb-4">
          <p className="text-gray-600">
            Showing <strong>{filteredJobs.length}</strong> job{filteredJobs.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <article key={job.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
                <div className="p-6">
                  {/* Title and Company */}
                  <div className="mb-3">
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">
                      {job.title}
                    </h2>
                    <p className="text-lg text-blue-600 font-medium">{job.company}</p>
                  </div>

                  {/* Location and Salary */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {job.salary_range}
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {new Date(job.posted_at).toLocaleDateString('en-IN', {
                        month: 'short',
                        day: 'numeric'
                      })}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4">
                    {job.description}
                  </p>

                  {/* Apply Button */}
                  <div className="flex items-center justify-between">
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Apply Now
                    </a>
                    <button className="text-gray-500 hover:text-blue-600 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <p className="text-gray-500 text-lg">No jobs found matching your criteria.</p>
              <p className="text-gray-400 text-sm mt-2">Try different keywords or select a different location.</p>
            </div>
          )}
        </div>

        {/* Load More (Pagination placeholder) */}
        {filteredJobs.length > 0 && (
          <div className="text-center mt-8">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Load More Jobs
            </button>
          </div>
        )}

        {/* Info Banner */}
        <div className="max-w-4xl mx-auto mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Live Job Aggregation
          </h3>
          <p className="text-gray-700 text-sm">
            Our job board aggregates opportunities from leading job portals and company websites across India. Jobs are updated daily to bring you the latest openings in Public Relations.
          </p>
        </div>
      </div>
    </div>
  );
}
