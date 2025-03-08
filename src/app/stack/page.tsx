'use client'
import React from 'react'

interface TechStack {
  category: string;
  items: string[];
}

const techStacks: TechStack[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'HTML', 'CSS']
  },
  {
    category: 'Frameworks',
    items: ['React', 'Next.js', 'Tailwind CSS']
  },
  {
    category: 'Tools',
    items: ['VS Code', 'Git', 'GitHub', 'Vercel']
  }
]

export default function Stack() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Tech Stack</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {techStacks.map((stack) => (
          <div key={stack.category} className="space-y-4">
            <h2 className="text-xl font-semibold">{stack.category}</h2>
            <ul className="space-y-2">
              {stack.items.map((item) => (
                <li key={item} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  )
} 