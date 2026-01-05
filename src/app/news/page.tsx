'use client';

import { useState } from 'react';
import Link from 'next/link';

// Sample news data (in production, this would come from an API)
const sampleNews = [
  {
    id: '1',
    title: 'India\'s PR Industry Expected to Grow 25% in 2026',
    description: 'The Indian Public Relations industry is witnessing unprecedented growth with digital transformation and increased corporate communication needs.',
    source: 'PR Week India',
    url: '#',
    published_at: '2026-01-04T10:00:00Z',
    category: 'Industry News'
  },
  {
    id: '2',
    title: 'Top 10 PR Campaigns That Won India in 2025',
    description: 'A comprehensive analysis of the most successful PR campaigns that captured the Indian market\'s attention last year.',
    source: 'Campaign India',
    url: '#',
    published_at: '2026-01-03T15:30:00Z',
    category: 'Campaign Analysis'
  },
  {
    id: '3',
    title: 'Digital PR: The Future of Communication in India',
    description: 'How Indian brands are leveraging digital platforms and social media for effective public relations.',
    source: 'Exchange4media',
    url: '#',
    published_at: '2026-01-02T12:00:00Z',
    category: 'Digital PR'
  },
  {
    id: '4',
    title: 'Crisis Management: Lessons from Recent Indian Cases',
    description: 'Expert analysis of how major Indian corporations handled recent crises and what PR professionals can learn.',
    source: 'The Economic Times',
    url: '#',
    published_at: '2026-01-01T09:00:00Z',
    category: 'Crisis Management'
  },
  {
    id: '5',
    title: 'Regional Language PR: Tapping India\'s Diverse Markets',
    description: 'The growing importance of regional language communication in reaching India\'s diverse audience.',
    source: 'afaqs!',
    url: '#',
    published_at: '2025-12-30T14:00:00Z',
    category: 'Regional PR'
  },
  {
    id: '6',
    title: 'Influencer Marketing and PR: A Powerful Combination',
    description: 'How Indian brands are integrating influencer partnerships into their PR strategies for maximum impact.',
    source: 'Social Samosa',
    url: '#',
    published_at: '2025-12-28T11:00:00Z',
    category: 'Influencer PR'
  }
];

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Industry News', 'Campaign Analysis', 'Digital PR', 'Crisis Management', 'Regional PR', 'Influencer PR'];

  const filteredNews = sampleNews.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         news.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || news.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Indian PR News & Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, trends, and insights from India's Public Relations industry
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            {/* Search Bar */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search news articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'All Categories' : category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* News Results Count */}
        <div className="max-w-4xl mx-auto mb-4">
          <p className="text-gray-600">
            Showing <strong>{filteredNews.length}</strong> article{filteredNews.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* News Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          {filteredNews.length > 0 ? (
            filteredNews.map(news => (
              <article key={news.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                      {news.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                    <a href={news.url} target="_blank" rel="noopener noreferrer">
                      {news.title}
                    </a>
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 mb-4">
                    {news.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span className="font-medium">{news.source}</span>
                      <span>•</span>
                      <span>{new Date(news.published_at).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}</span>
                    </div>
                    <a
                      href={news.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <p className="text-gray-500 text-lg">No articles found matching your search.</p>
              <p className="text-gray-400 text-sm mt-2">Try different keywords or select a different category.</p>
            </div>
          )}
        </div>

        {/* Load More (Pagination placeholder) */}
        {filteredNews.length > 0 && (
          <div className="text-center mt-8">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Load More Articles
            </button>
          </div>
        )}

        {/* Info Banner */}
        <div className="max-w-4xl mx-auto mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Real-time News Updates
          </h3>
          <p className="text-gray-700 text-sm">
            Our news feed is updated regularly with the latest stories from leading Indian media outlets and PR industry sources. Click on any article to read the full story on the source website.
          </p>
        </div>
      </div>
    </div>
  );
}
