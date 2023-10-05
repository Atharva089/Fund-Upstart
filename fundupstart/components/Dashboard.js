import { useState } from 'react';

export default function Dashboard() {
  const [startupName, setStartupName] = useState('');
  const [founderName, setFounderName] = useState('');
  const [startupEmail, setStartupEmail] = useState('');
  const [fundingAmount, setFundingAmount] = useState('');
  const [startupDetails, setStartupDetails] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleStartupNameChange = (e) => {
    setStartupName(e.target.value);
  };

  const handleFounderNameChange = (e) => {
    setFounderName(e.target.value);
  };

  const handleStartupEmailChange = (e) => {
    setStartupEmail(e.target.value);
  };

  const handleFundingAmountChange = (e) => {
    setFundingAmount(e.target.value);
  };

  const handleStartupDetailsChange = (e) => {
    setStartupDetails(e.target.value);
  };

  const handleFileChange = (e) => {
    const files = e.target.files;

    // Check if the total number of selected files is less than or equal to 5
    if (files.length + selectedFiles.length <= 5) {
      setSelectedFiles([...selectedFiles, ...files]);
    } else {
      alert('You can only upload up to 5 photos.');
      e.target.value = null; // Clear the file input
    }
  };

  const handleRemoveImage = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };

  const handleSubmit = () => {
    // You can implement your submission logic here
    console.log('Startup Name:', startupName);
    console.log('Founder Name:', founderName);
    console.log('Startup Email:', startupEmail);
    console.log('Funding Amount Required:', fundingAmount);
    console.log('Startup Details:', startupDetails);
    console.log('Selected Files:', selectedFiles);
  };

  return (
    <section style={dashboardStyles}>
      <h1 style={{ marginBottom: '20px' }}>FOUNDER DASHBOARD</h1>
      <form>
        <div style={inputStyles}>
          <label>Startup Name:&nbsp; &nbsp;</label>
          <input type="text" value={startupName} onChange={handleStartupNameChange} />
        </div>
        <div style={inputStyles}>
          <label>Founder Name:&nbsp;</label>
          <input type="text" value={founderName} onChange={handleFounderNameChange} />
        </div>
        <div style={inputStyles}>
          <label>Startup Email:&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="email" value={startupEmail} onChange={handleStartupEmailChange} />
        </div>
        <div style={inputStyles}>
          <label>Funding Amount Required:&nbsp;</label>
          <input type="number" value={fundingAmount} onChange={handleFundingAmountChange} />
        </div>
        <div style={inputStyles}>
          <label>Startup Details:&nbsp;&nbsp; <br/></label>
          <textarea
            rows="4"
            cols="50"
            value={startupDetails}
            onChange={handleStartupDetailsChange}
          />
        </div>
        <div style={inputStyles}>
          <label>Add Photos (only up to 5 photos):</label>
          <input type="file" onChange={handleFileChange} multiple />
        </div>
        
        <div>
          {selectedFiles.map((file, index) => (
            <div key={index}>
              <img
                src={URL.createObjectURL(file)}
                alt={`Selected Image ${index + 1}`}
                style={{ maxWidth: '100px', maxHeight: '100px', marginRight: '10px' }}
              />
              
            </div>
          ))}
        </div>
        <button type="button" onClick={handleSubmit} style={buttonStyles}>
          Submit
        </button>
      </form>
    </section>
  );
}

const dashboardStyles = {
  backgroundColor: '#f2f2f2',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  maxWidth: '800px',
  margin: '0 auto',
};

const inputStyles = {
  marginBottom: '10px',
  width: '100%',
};

const buttonStyles = {
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  cursor: 'pointer',
  borderRadius: '5px',
};
