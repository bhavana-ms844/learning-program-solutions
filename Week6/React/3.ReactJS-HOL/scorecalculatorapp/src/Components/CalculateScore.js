import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore(props) {
  const { name, school, total, goal } = props;
  const average = ((total / (goal * 100)) * 100).toFixed(2);

  return (
    <div className="formatstyle">
      <h1 style={{ color: "darkred", fontWeight: "bold" }}>Student Details:</h1>

      <p>
        <span className="LabelName">Name:</span>
        <span className="ValueName"> {name}</span>
      </p>
      <p>
        <span className="LabelSchool">School:</span>
        <span className="ValueSchool"> {school}</span>
      </p>
      <p>
        <span className="LabelTotal">Total:</span>
        <span className="ValueTotal"> {total}Marks</span>
      </p>
      <p>
        <span className="LabelScore">Score:</span>
        <span className="ValueScore"> {average}%</span>
      </p>
    </div>
  );
}

export default CalculateScore;
