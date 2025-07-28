import { projects } from '@/data/projects'
import { metadata } from './layout'
import ProjectCard from '@/components/ProjectCard'

export default function Home() {
  return (
    <div className="space-y-8">
      <header className="text-center py-4">
        <h1 className="text-4xl font-bold text-black mb-4">Zakir's Portfolio</h1>
        <p className="text-lg text-gray-500">{metadata.subtitle}</p>
        <p className="text-lg text-gray-500">Below are software projects that I've built or contributed to.</p>
        {/* <p className="text-xl text-gray-600 mb-2">Software projects that I've built or contributed to</p> */}

      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
