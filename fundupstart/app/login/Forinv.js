import React from 'react';

const Forinv = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop:'50px' }}>
      <label>
        <input type="radio" name="userType" value="investor" />
        For Investor
      </label>
      <label>
        <input type="radio" name="userType" value="founder" />
        For Founder
      </label>
    </div>
  );
};

export default Forinv;
