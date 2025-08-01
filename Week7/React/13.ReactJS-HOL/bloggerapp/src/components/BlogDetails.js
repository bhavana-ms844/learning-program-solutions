import React from 'react';

const blogs = [
  { id: 1, title: "React Basics", author: "Bhavana" },
  { id: 2, title: "JSX Explained", author: "John Doe" },
  { id: 3, title: "Conditional Rendering in Depth", author: "Jane Smith" }
];

function BlogDetails() {
  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <strong>{blog.title}</strong> — by {blog.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;
