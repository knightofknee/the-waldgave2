// LatestNews.js
import React from 'react';

export default function LatestNews() {
  return (
    <div style={{
      width: '100%',
      backgroundColor: '#d791c7',
      padding: '10px 20px',
      margin: '20px 0',
      borderRadius: '5px',
      textAlign: 'center',
      fontFamily: 'sans-serif'
    }}>
      <p style={{ margin: '0 auto', lineHeight: '1.4em' }}>
        Do you want to work on any of these items? The name is no joke, I'm a shy guy.
        I don't want to just share the spotlight, I want to work the job behind it.{' '}
        <span style={{ fontSize: '0.85em', fontStyle: 'italic', color: '#555' }}>
          (Also I hate advertising, ads are literal brain aids)
        </span>{' '}
        <a href='https://docs.google.com/forms/d/e/1FAIpQLSeG6WC_HOXEbSjIr4n85Xfoeb-mbbJjOz6MstZe7yLzZNHanQ/viewform?usp=dialog'>so let me know if you want to join the Shock and Awe Campaign</a>{' '}
        <br />

      </p>
    </div>
  );
}
