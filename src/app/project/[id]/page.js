'use client';

import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/data/projects'

export default function ProjectPage({ params }) {
  const project = projects.find(p => p.id === params.id)

  if (!project) {
    return <div>Project not found</div>
  }

  // Function to handle line breaks in text
  const formatText = (text) => {
    return text.split('<br/>').map((line, i) => (
      <span key={i}>
        {line}
        {i < text.split('<br/>').length - 1 && <br />}
      </span>
    ));
  };

  return (
    <div className="space-y-8">
      <Link 
        href="/"
        className="inline-flex items-center text-gray-600 hover:text-gray-900"
      >
        ← Back to Portfolio
      </Link>

      <header className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">{project.title}</h1>
        <p className="text-xl text-gray-600">{project.description}</p>
      </header>

      {!project.contributionHTML && (
        <div className="max-w-none">
          <p className="text-gray-600">
            {formatText(project.contribution)}
          </p>
        </div>
      )}

      {project.links && project.links.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Project Links</h2>
          <div className="flex flex-col space-y-2">
            {project.links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {project.images.map((image, index) => (
          <div key={index} className="relative aspect-video">
            <Image
              src={image}
              alt={`${project.title} screenshot ${index + 1}`}
              fill
              className="object-cover rounded-lg border border-gray-200"
            />
          </div>
        ))}
      </div>
      
      {project.contributionHTML && (
        <div className="max-w-none mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Project Details</h2>
          <div 
            dangerouslySetInnerHTML={{ __html: project.contributionHTML }}
            className="contribution-content" 
          />
        </div>
      )}
    </div>
  )
} 