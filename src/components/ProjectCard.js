import Link from 'next/link'
import Image from 'next/image'

export default function ProjectCard({ project }) {
  return (
    <Link href={`/project/${project.id}`} className="group block">
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 h-full">
        {/* Project Image */}
        <div className="relative h-48 w-full bg-gray-100">
          <Image
            src={project.mainImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        {/* Card Content */}
        <div className="p-6">
          {/* Project Description */}
          <div className="mb-4">
            <p className="text-gray-700 text-sm leading-relaxed">
              {project.description || project.contribution?.replace(/<br\/>/g, ' ').replace(/<[^>]*>/g, '')}
            </p>
          </div>
          
          {/* Project "Author" Info */}
          <div className="border-t border-gray-100 pt-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm">
                  {project.id === 'opus-melody' && '260+ Users'}
                  {project.id === 'daily-angel' && 'AI-Powered'}
                  {project.id === 'ctds' && 'Healthcare Data'}
                  {project.id === 'athena' && 'Bitcoin Exchange'}
                  {project.id === 'desert-adventure-z' && 'React Game'}
                  {project.id === 'graphing-calculator' && 'Functional Programming'}
                  {project.id === 'fotofun' && 'AI Image Editor'}
                  {project.id === 'stickybrain' && 'AI Research Assistant'}
                  {project.id === 'viralvision' && 'TikTok Script Generator'}
                </p>
              </div>
              
                             {/* Tech Stack or Type Badge */}
               <div className="text-right">
                 <div className="inline-flex items-center px-4 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 whitespace-nowrap">
                   {project.id.includes('solo') || project.title.includes('Solo') ? 'Solo Project' : 
                    project.title.includes('Team') ? 'Team Project' : 
                    'Collaboration'}
                 </div>
               </div>
            </div>
          </div>
          

        </div>
      </div>
    </Link>
  )
} 