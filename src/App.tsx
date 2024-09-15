import React from 'react';

const App: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Hello User</h1>
      <p style={styles.paragraph}>This is Deploy Mate demo. Use Deploy Mate to deploy your React web pages.</p>
    </div>
  );
};

// Styling for the component
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#121212', // Dark theme background
    color: '#ffffff', // White text color
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '2.5rem',
    margin: '0',
  },
  paragraph: {
    fontSize: '1.25rem',
    marginTop: '10px',
  },
};

export default App;
