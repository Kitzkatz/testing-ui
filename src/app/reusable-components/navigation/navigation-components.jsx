///////nav components

'use client';
import React, { useState } from 'react';
//import { Link } from 'react-router-dom'; // Use React Router for navigation
// Navbar component

// 1

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

// Sidebar component
// 2
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </aside>
  );
};

// Navigation menu component
// 3
const NavigationMenu = () => {
  return (
    <div className="navigation-menu">
      <Navbar />
      <Sidebar />
    </div>
  );
};

// 4

const Breadcrumbs = (props) => {
  return (
    <nav className="breadcrumbs">
      {props.paths.map((path, index) => (
        <span key={index}>
          {index > 0 && <span> &gt; </span>}
          <Link to={path.url}>{path.label}</Link>
        </span>
      ))}
    </nav>
  );
};

/*const paths = [
{ label: 'Home', url: '/' },
{ label: 'Products', url: '/products' },
{ label: 'Category', url: '/products/category' },
{ label: 'Product Details', url: '/products/category/product-details' },
];
//<Breadcrumbs paths={paths} />
*/

// 5

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState(props.tabs[0].id);

  return (
    <div className="tabs">
      <ul>
        {props.tabs.map((tab) => (
          <li
            key={tab.id}
            className={tab.id === activeTab ? 'active' : ''}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {props.tabs.map((tab) => (
          <div
            key={tab.id}
            className={tab.id === activeTab ? 'active' : 'inactive'}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

/*
const tabs = [
{ id: 'tab1', label: 'Tab 1', content: 'Content for Tab 1' },
{ id: 'tab2', label: 'Tab 2', content: 'Content for Tab 2' },
{ id: 'tab3', label: 'Tab 3', content: 'Content for Tab 3' },
];
//<Tabs tabs={tabs} />
*/

//6

const Pagination = (props) => {
  return (
    <div className="pagination">
      <button
        onClick={() => props.onPageChange(props.currentPage - 1)}
        disabled={props.currentPage === 1}
      >
        Previous
      </button>
      <span>
        Page {props.currentPage} of {props.totalPages}
      </span>
      <button
        onClick={() => props.onPageChange(props.currentPage + 1)}
        disabled={props.currentPage === props.totalPages}
      >
        Next
      </button>
    </div>
  );
};
//<Pagination currentPage={2} totalPages={5} onPageChange={handlePageChange} />

// 7

const DropdownMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    props.onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button onClick={() => setIsOpen(!isOpen)}>Open Menu</button>
      {isOpen && (
        <ul>
          {props.options.map((option) => (
            <li key={option.id} onClick={() => handleOptionClick(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

/*
const options = [
{ id: 1, label: 'Option 1' },
{ id: 2, label: 'Option 2' },
{ id: 3, label: 'Option 3' },
];
//<DropdownMenu options={options} onSelect={handleOptionSelect} />
*/

// 8

const MobileNavMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close' : 'Menu'}
      </button>
      <ul>
        {props.links.map((link) => (
          <li key={link.id} onClick={() => setIsOpen(false)}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

/*
const mobileNavLinks = () => [
{ id: 1, label: 'Home', url: '/' },
{ id: 2, label: 'About', url: '/about' },
{ id: 3, label: 'Contact', url: '/contact' },
];
//<MobileNavMenu links={mobileNavLinks} />
*/

// 9

const PaginationWithPageSize = (props) => {
  return (
    <div className="pagination">
      <button
        onClick={() => props.onPageChange(props.currentPage - 1)}
        disabled={props.currentPage === 1}
      >
        Previous
      </button>
      <span>
        Page {props.currentPage} of {props.totalPages}
      </span>
      <button
        onClick={() => props.onPageChange(props.currentPage + 1)}
        disabled={props.currentPage === props.totalPages}
      >
        Next
      </button>
      <select
        value={props.pageSize}
        onChange={(e) => props.onPageSizeChange(Number(e.target.value))}
      >
        {props.availablePageSizes.map((size) => (
          <option key={size} value={size}>
            {size} per page
          </option>
        ))}
      </select>
    </div>
  );
};

/*
const pageSizes = [10, 20, 50]; // Available page sizes
<PaginationWithPageSize
currentPage={2}
totalPages={5}
onPageChange={handlePageChange}
pageSize={pageSize}
onPageSizeChange={handlePageSizeChange}
availablePageSizes={pageSizes}
/>

*/

export {
  Navbar,
  Sidebar,
  NavigationMenu,
  Breadcrumbs,
  Tabs,
  Pagination,
  DropdownMenu,
  MobileNavMenu,
  PaginationWithPageSize,
};
