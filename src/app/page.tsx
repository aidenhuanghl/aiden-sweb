'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Article {
  year: string;
  date: string;
  title: string;
  views: number;
}

const articles: Article[] = [
  {
    year: '2024',
    date: '21/05',
    title: 'Building a Mini-ITX PC with Teenage Engineering Computer-1 and Apple Studio Display',
    views: 5916
  },
  {
    year: '2023',
    date: '06/10',
    title: "Almanya'dan Hollanda'ya taşındım",
    views: 55765
  },
  // Add more articles as needed
];

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      {/* Profile Section */}
      <section className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <Image
              src="https://avatars.githubusercontent.com/u/1?v=4"
              alt="Profile"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Your Name</h1>
            <p className="text-gray-600">Software Engineer</p>
          </div>
        </div>
        <p className="text-lg text-gray-700 mb-6">
          I develop things as a Senior Frontend Software Engineer. Previously, I worked at various companies in different roles.
        </p>
      </section>

      {/* Writing Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Writing</h2>
        <div className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-12 text-sm text-gray-500 mb-2">
            <div className="col-span-2">Year</div>
            <div className="col-span-2">Date</div>
            <div className="col-span-6">Title</div>
            <div className="col-span-2 text-right">Views</div>
          </div>
          {articles.map((article, index) => (
            <Link 
              key={index} 
              href="#"
              className="grid grid-cols-12 py-2 hover:bg-gray-50 rounded transition-colors"
            >
              <div className="col-span-2">{article.year}</div>
              <div className="col-span-2">{article.date}</div>
              <div className="col-span-6 font-medium text-black">{article.title}</div>
              <div className="col-span-2 text-right">{article.views.toLocaleString()}</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
} 