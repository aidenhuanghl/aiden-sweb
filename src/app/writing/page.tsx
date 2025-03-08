'use client'
import React from 'react'
import Link from 'next/link'

interface Article {
  year: string;
  date: string;
  title: string;
  views: number;
  excerpt: string;
}

const articles: Article[] = [
  {
    year: '2024',
    date: '21/05',
    title: 'Building a Mini-ITX PC with Teenage Engineering Computer-1 and Apple Studio Display',
    views: 5916,
    excerpt: 'A detailed guide on building a custom Mini-ITX PC...'
  },
  {
    year: '2023',
    date: '06/10',
    title: "Almanya'dan Hollanda'ya taşındım",
    views: 55765,
    excerpt: 'My journey of moving from Germany to the Netherlands...'
  }
]

export default function Writing() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Writing</h1>
      <div className="space-y-8">
        {articles.map((article, index) => (
          <article key={index} className="border-b border-gray-200 pb-8">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-2 text-gray-500">
                <div>{article.year}</div>
                <div>{article.date}</div>
              </div>
              <div className="col-span-8">
                <Link href="#" className="block group">
                  <h2 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mt-2">{article.excerpt}</p>
                </Link>
              </div>
              <div className="col-span-2 text-right text-gray-500">
                {article.views.toLocaleString()} views
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
} 