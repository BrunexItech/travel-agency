

import React from 'react';

const Map = () => {
  return (
    <div style={{
      width: '90%',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      textAlign: 'center',
    }}>
      <h2 style={{
        marginBottom: '10px',
        fontSize: '1.8rem',
        color: '#333',
      }}>
        Our Location
      </h2>

      <p style={{
        marginBottom: '20px',
        fontSize: '1rem',
        color: '#555',
      }}>
        We are located in Mombasa — find us easily on the map below:
      </p>

      <iframe
        title="Kenya Map"
        width="100%"
        height="350px"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://www.openstreetmap.org/export/embed.html?bbox=39.6%2C-4.1%2C39.8%2C-3.9&layer=mapnik&marker=-4.0435%2C39.6682"
        style={{
          border: "none",
          borderRadius: '4px',
        }}
      ></iframe>
      <br />
      <small>
        <a href="https://www.openstreetmap.org/?mlat=-4.0435&mlon=39.6682#map=13/-4.0435/39.6682">
          View Larger Map
        </a>
      </small>
    </div>
  );
};

export default Map;

