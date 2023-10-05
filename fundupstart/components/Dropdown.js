// pages/index.js
"use client"
import React, { Component } from 'react';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(option) {
    this.setState({ selectedOption: option });
    this.props.onSelect(option);
  }

  render() {
    const { options } = this.props;
    const { selectedOption } = this.state;

    return (
      <div className="dropdown">
        <select
          value={selectedOption}
          onChange={(e) => this.handleSelect(e.target.value)}
        >
          <option value="" disabled>Select an option</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.handleOptionSelect = this.handleOptionSelect.bind(this);
  }

  handleOptionSelect(selectedOption) {
    console.log('Selected option:', selectedOption);
  }

  render() {
    const options = [
      { label: 'Edu-TECH', value: 'option1' },
      { label: 'Pharma', value: 'option2' },
      { label: 'Agro', value: 'option3' },
    ];

    return (
      <div>
        <h1>Startup Categories</h1>
        <Dropdown options={options} onSelect={this.handleOptionSelect} />
      </div>
    );
  }
}

export default HomePage;
