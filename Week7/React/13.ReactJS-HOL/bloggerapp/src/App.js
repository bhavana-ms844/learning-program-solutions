import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [section, setSection] = useState("book");

  let sectionComponent;
  if (section === "book") {
    sectionComponent = <BookDetails />;
  } else if (section === "blog") {
    sectionComponent = <BlogDetails />;
  } else if (section === "course") {
    sectionComponent = <CourseDetails />;
  }

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>BloggerApp</h1>

      <div>
        <button onClick={() => setSection("book")}>Book Details</button>
        <button onClick={() => setSection("blog")}>Blog Details</button>
        <button onClick={() => setSection("course")}>Course Details</button>
      </div>

      <hr />
      {sectionComponent}
    </div>
  );
}

export default App;
