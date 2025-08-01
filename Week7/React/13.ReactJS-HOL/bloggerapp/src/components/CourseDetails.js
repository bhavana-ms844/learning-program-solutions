import React from 'react';

const courses = [
  { id: 1, name: "React for Beginners", duration: "4 weeks" },
  { id: 2, name: "Advanced JavaScript", duration: "6 weeks" },
  { id: 3, name: "Fullstack Development", duration: "10 weeks" }
];

function CourseDetails() {
  return (
    <div>
      <h2>Courses Available</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <strong>{course.name}</strong> - {course.duration}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
