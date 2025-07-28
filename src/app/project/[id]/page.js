'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/data/projects'

export default function ProjectPage({ params }) {
  const project = projects.find(p => p.id === params.id)
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!carouselOpen) return;
      
      if (e.key === 'ArrowRight') {
        nextImage(e);
      } else if (e.key === 'ArrowLeft') {
        prevImage(e);
      } else if (e.key === 'Escape') {
        closeCarousel();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [carouselOpen]);

  if (!project) {
    return <div>Project not found</div>
  }

  // Function to handle line breaks in text
  const formatText = (text) => {
    if (!text) return null;
    return text.split('<br/>').map((line, i) => (
      <span key={i}>
        {line}
        {i < text.split('<br/>').length - 1 && <br />}
      </span>
    ));
  };

  const openCarousel = (index) => {
    setCurrentImageIndex(index);
    setCarouselOpen(true);
  };

  const closeCarousel = () => {
    setCarouselOpen(false);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="space-y-8">
      <Link 
        href="/"
        className="inline-flex items-center text-gray-600 hover:text-gray-900"
      >
        ← Back to Projects Page
      </Link>

      <header className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">{project.title}</h1>
        <p className="text-gray-600">{project.description}</p>
      </header>

      
      {project.contribution && (
        <div className="max-w-none">
          <p className="text-gray-600">
            {formatText(project.contribution)}
          </p>
        </div>
      )}

      {project.youtubeVideoId && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Project Video</h2>
          <div className="max-w-[1100px] mx-auto">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg border border-gray-200"
                src={`https://www.youtube.com/embed/${project.youtubeVideoId}`}
                title={`${project.title} Video`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {project.links && project.links.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Related Links</h2>
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

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Project Images</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {project.images.map((image, index) => (
          <div 
            key={index} 
            className="relative aspect-video cursor-pointer transition-transform hover:scale-105"
            onClick={() => openCarousel(index)}
          >
            {!loadedImages[image] && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
                <div className="loading-spinner"></div>
              </div>
            )}
            <Image
              src={image}
              alt={`${project.title} screenshot ${index + 1}`}
              fill
              className={`object-cover rounded-lg border border-gray-200 ${loadedImages[image] ? 'image-fade-in' : 'opacity-0'}`}
              onLoadingComplete={() => setLoadedImages(prev => ({ ...prev, [image]: true }))}
            />
          </div>
        ))}
        </div>
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

      {carouselOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={closeCarousel}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <button 
              className="absolute top-4 right-4 text-white z-10 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
              onClick={closeCarousel}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white z-10 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white z-10 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
              onClick={nextImage}
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <div className="relative h-full aspect-video">
              <Image
                src={project.images[currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                fill
                className="object-contain rounded-lg"
              />
            </div>
            
            <div className="mt-4 text-center text-white">
              <p>{currentImageIndex + 1} / {project.images.length}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 