import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/data/projects'
import { metadata } from './layout'

export default function Home() {
  return (
    <div className="space-y-8">
      <header className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Zakir's Portfolio</h1>
        <p className="text-lg text-gray-500">{metadata.subtitle}</p>
        <p className="text-lg text-gray-500">Below are software projects that I've built or contributed to.</p>
        {/* <p className="text-xl text-gray-600 mb-2">Software projects that I've built or contributed to</p> */}

      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link 
            href={`/project/${project.id}`} 
            key={project.id}
            className="group h-full"
          >
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-transform duration-300 group-hover:scale-110 flex flex-col h-full">
              <div className="relative h-48 w-full">
                <Image
                  src={project.mainImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-grow flex items-center justify-center">
                <h2 className="text-xl font-semibold text-gray-900 text-center">{project.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
