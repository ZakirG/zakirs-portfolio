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
          {/* Project "Author" Info */}
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm">
                  {project.subtitle}
                </p>
              </div>
              
              {/* Tech Stack or Type Badge */}
               <div className="text-right">
                 <div className="inline-flex items-center px-4 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 whitespace-nowrap">
                   {project.projectType}
                 </div>
               </div>
            </div>
          </div>
          
          {/* Horizontal Divider */}
          <div className="border-t border-gray-100 mb-4"></div>
          
          {/* Technologies Section */}
          {project.technologies && (
            <>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies</h4>
                <div className="grid grid-cols-2 gap-x-4">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="flex items-center text-xs text-gray-600 mb-1">
                      <span className="mr-2">•</span>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
              
                             {/* Horizontal Divider */}
               <div className="border-t border-gray-100 mb-4"></div>
            </>
          )}
          
          {/* Project Description */}
          <div>
            <p className="text-gray-700 text-sm leading-relaxed">
              {project.description || project.contribution?.replace(/<br\/>/g, ' ').replace(/<[^>]*>/g, '')}
            </p>
          </div>

        </div>
      </div>
    </Link>
  )
} 