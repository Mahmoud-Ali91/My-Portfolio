import React from 'react';
import { BookIcon } from '../components/Icons';

const books = [
  {
    title: "Inspired: How to Create Tech Products Customers Love",
    author: "Marty Cagan",
    takeaway: "The distinction between product discovery and product delivery is crucial.",
    reflection: "This book reshaped my thinking about the role of a product manager. It's not just about managing a backlog; it's about deeply understanding customer problems and rapidly iterating on solutions before committing to expensive development cycles."
  },
  {
    title: "Hooked: How to Build Habit-Forming Products",
    author: "Nir Eyal",
    takeaway: "The Hook Model (Trigger, Action, Variable Reward, Investment) is a powerful framework for driving user engagement.",
    reflection: "While focused on tech, the principles apply directly to FMCG. How can we create triggers and rewards for daily use products like toothpaste or skin creams? It sparked ideas for loyalty programs and patient adherence strategies."
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    takeaway: "Our decision-making is governed by two systems, and we are often influenced by cognitive biases.",
    reflection: "Essential reading for anyone in a data-driven role. It serves as a constant reminder to question assumptions, be wary of biases in market research data, and design user experiences that account for irrational human behavior."
  }
];

const BookEntry: React.FC<{ book: typeof books[0] }> = ({ book }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-5">
    <div className="flex-shrink-0 mt-1">
      <BookIcon className="w-7 h-7 text-navy opacity-80" />
    </div>
    <div className="flex-1">
      <h3 className="text-xl font-bold text-navy">{book.title}</h3>
      <p className="text-gray-500 text-sm mb-4">by {book.author}</p>
      
      <blockquote className="border-l-4 border-soft-blue pl-4 py-2 bg-gray-50 rounded-r-md">
        <p className="font-semibold text-navy">Key Takeaway:</p>
        <p className="italic text-gray-700">"{book.takeaway}"</p>
      </blockquote>

      <div className="mt-4">
        <p className="font-semibold text-navy">Reflection:</p>
        <p className="text-gray-700">{book.reflection}</p>
      </div>
    </div>
  </div>
);

const BooksPage: React.FC = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy mb-4">Reading Journal</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">A curated list of books that have significantly shaped my professional thinking and approach to product management.</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-8">
          {books.map((book, index) => (
            <BookEntry key={index} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksPage;