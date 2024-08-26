import React from "react";

const Blog = () => {
  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto pt-20 pb-20 px-4 flex flex-col ">
      {/* Header Section */}
      <header className="bg-blue-900 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="mt-2">Welcome to our blog! Stay tuned for updates.</p>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="flex-grow container mx-auto py-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Latest Posts</h2>
          <p className="text-gray-300 ">
            No blog posts available at the moment. Check back later!
          </p>
        </div>

        {/* Example of a blog post card */}
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Placeholder for blog posts */}
          <div className="border rounded-lg p-4 shadow-lg">
            <h3 className="text-xl font-bold mb-2">Sample Blog Post</h3>
            <p className="text-gray-300 ">
              This is a placeholder for a blog post. When the blog content is
              ready, each post will be displayed here.
            </p>
            <button className="mt-4 text-blue-500 hover:underline">
              Read more
            </button>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-blue-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 My Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
