import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ cohort }) {
  const titleStyle = {
    color: cohort.status === 'Ongoing' ? 'green' : 'blue',
    fontWeight: 'bold',
  };

  return (
    <div className={styles.box}>
      <h3 style={titleStyle}>{cohort.name}</h3>
      <p><strong>Started On</strong><br />{cohort.startDate}</p>
      <p><strong>Current Status</strong><br />{cohort.status}</p>
      <p><strong>Coach</strong><br />{cohort.coach}</p>
      <p><strong>Trainer</strong><br />{cohort.trainer}</p>
    </div>
  );
}

export default CohortDetails;
