/* 15 essential components
 */
'use client';
import React from 'react';

////////////essential components

// 1

const Button = (props) => {
  return (
    <button onClick={props.onClick} style={props.style}>
      {props.text}
    </button>
  );
};

// 2

const Input = (props) => {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

// 3

const Textarea = (props) => {
  return (
    <textarea
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

// 4

const Checkbox = (props) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
      />
      {props.label}
    </label>
  );
};

// 5

const RadioButton = (props) => {
  return (
    <label>
      <input type="radio" checked={props.checked} onChange={props.onChange} />
      {props.label}
    </label>
  );
};

// 6

const Select = (props) => {
  return (
    <select value={props.value} onChange={props.onChange}>
      {props.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

// 7

const Modal = (props) => {
  if (!props.isOpen) return null;

  return (
    <div className="modal" style={props.style}>
      <div className="modal-content" style={props.style}>
        <button className="close-button" onClick={props.onClose}>
          Close
        </button>
        {props.children}
      </div>
    </div>
  );
};

// 8

const Navbar = (props) => {
  return (
    <nav>
      <ul>
        <li>{props.feature1}</li>
        <li>{props.feature2}</li>
        <li>{props.feature3}</li>
      </ul>
    </nav>
  );
};

// 9

const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      {props.description && <p>{props.description2}</p>}
    </header>
  );
};

// 10

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2023 Your Company</p>
      <ul>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
        <li>Contact Us</li>
      </ul>
    </footer>
  );
};

// 11

const Alert = (props) => {
  return <div className={`alert ${props.type}`}>{props.message}</div>;
};

// 12

const LoadingSpinner = () => {
  return <div className="loading-spinner"></div>;
};

// 13

const ErrorMessage = (props) => {
  return <div className="error-message">{props.message}</div>;
};

// 14

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Implement pagination logic here
  return <div className="pagination">{/* Render pagination controls */}</div>;
};

// 15

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt={props.imgTitle} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

// 16

// Sidebar component
const Sidebar = (props) => {
  return <aside>{props.sidebar}</aside>;
};

// 17

const MainContent = (props) => {
  return <main>{props.children}</main>;
};

//////////
export {
  Button,
  Input,
  Textarea,
  Checkbox,
  RadioButton,
  Select,
  Modal,
  Navbar,
  Header,
  Footer,
  Alert,
  LoadingSpinner,
  ErrorMessage,
  Pagination,
  Card,
  Sidebar,
  MainContent,
};
