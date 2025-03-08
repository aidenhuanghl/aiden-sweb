'use client'
import React from 'react'

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    company: 'Bitvavo',
    role: 'Senior Frontend Software Engineer',
    period: 'Present',
    description: 'Developing frontend applications and systems.'
  },
  {
    company: 'Heycar',
    role: 'Frontend Software Engineer',
    period: 'Previously',
    description: 'Worked on the frontend team developing user interfaces.'
  },
  {
    company: 'Yemeksepeti',
    role: 'Frontend Software Engineer',
    period: 'Previously',
    description: 'Built and maintained web applications.'
  }
]

export default function Journey() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Journey</h1>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-4">
            <h2 className="text-xl font-semibold">{exp.company}</h2>
            <p className="text-gray-600">{exp.role}</p>
            <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
            <p className="text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>
    </main>
  )
} 