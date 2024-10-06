/////////////////////commmon database components

'use client';

import React, { useState } from 'react';

// 1

const DatabaseTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          {props.columns.map((col) => (
            <th key={col}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {props.columns.map((col) => (
              <td key={col}>{row[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

//50 database components

// 2

const DatabaseQuery = (props) => {
  const [query, setQuery] = useState('');

  const handleQuery = () => {
    props.onQuery(query);
  };

  return (
    <div>
      <h2>Database Query</h2>
      <textarea
        placeholder="Enter your query here"
        value={props.query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleQuery}>Run Query</button>
    </div>
  );
};

// 3

const DatabasePagination = (props) => {
  const handlePageChange = (newPage) => {
    props.onPageChange(newPage);
  };

  return (
    <div>
      <h2>Pagination</h2>
      <p>
        Page {props.currentPage} of {props.totalPages}
      </p>
      <button
        onClick={() => handlePageChange(props.currentPage - 1)}
        disabled={props.currentPage === 1}
      >
        Previous
      </button>
      <button
        onClick={() => handlePageChange(props.currentPage + 1)}
        disabled={props.currentPage === props.totalPages}
      >
        Next
      </button>
    </div>
  );
};

// 4

const DatabaseFilter = (props) => {
  const [filterValue, setFilterValue] = useState('');

  const handleFilter = () => {
    props.onFilter(filterValue);
  };

  return (
    <div>
      <h2>Data Filtering</h2>
      <input
        type="text"
        placeholder="Filter data"
        value={props.filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
      />
      <button onClick={handleFilter}>Apply Filter</button>
    </div>
  );
};

// 5

const DatabaseExport = (props) => {
  const handleExport = () => {
    props.onExport();
  };

  return (
    <div>
      <h2>Data Export</h2>
      <button onClick={handleExport}>Export Data</button>
    </div>
  );
};

// 6

const DatabaseInsert = (props) => {
  const [newData, setNewData] = useState('');

  const handleInsert = () => {
    props.onInsert(newData);
    setNewData('');
  };

  return (
    <div>
      <h2>Data Insertion</h2>
      <textarea
        placeholder="Enter data to insert"
        value={newData}
        onChange={(e) => setNewData(e.target.value)}
      />
      <button onClick={handleInsert}>Insert Data</button>
    </div>
  );
};

// 7

const DatabaseUpdate = (props) => {
  const [updateData, setUpdateData] = useState('');

  const handleUpdate = () => {
    props.onUpdate(updateData);
    setUpdateData('');
  };

  return (
    <div>
      <h2>Data Update</h2>
      <textarea
        placeholder="Enter data to update"
        value={updateData}
        onChange={(e) => setUpdateData(e.target.value)}
      />
      <button onClick={handleUpdate}>Update Data</button>
    </div>
  );
};

//  8

const DatabaseDelete = (props) => {
  const [deleteData, setDeleteData] = useState('');

  const handleDelete = () => {
    props.onDelete(deleteData);
    setDeleteData('');
  };

  return (
    <div>
      <h2>Data Deletion</h2>
      <textarea
        placeholder="Enter data to delete"
        value={deleteData}
        onChange={(e) => setDeleteData(e.target.value)}
      />
      <button onClick={handleDelete}>Delete Data</button>
    </div>
  );
};

// 9

const DatabaseSorting = (props) => {
  const handleSort = (column) => {
    props.onSort(column);
  };

  return (
    <div>
      <h2>Data Sorting</h2>
      <button onClick={() => handleSort('asc')}>Sort Ascending</button>
      <button onClick={() => handleSort('desc')}>Sort Descending</button>
    </div>
  );
};

// 10

const DatabaseBackup = (props) => {
  const handleBackup = () => {
    props.onBackup();
  };

  return (
    <div>
      <h2>Data Backup</h2>
      <button onClick={handleBackup}>Backup Data</button>
    </div>
  );
};

// 11

const DatabaseConnection = (props) => {
  const handleConnect = () => {
    props.onConnect();
  };

  return (
    <div>
      <h2>Database Connection</h2>
      <p>Status: {props.isConnected ? 'Connected' : 'Disconnected'}</p>
      <button onClick={handleConnect}>
        {props.isConnected ? 'Disconnect' : 'Connect'}
      </button>
    </div>
  );
};

// 12

const DatabasePermissions = (props) => {
  const [selectedRole, setSelectedRole] = useState('');

  const handlePermissionChange = () => {
    props.onPermissionChange(selectedRole);
  };

  return (
    <div>
      <h2>Database Permissions</h2>
      <label>Select User Role:</label>
      <select
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
      >
        {props.userRoles.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>
      <button onClick={handlePermissionChange}>Change Permissions</button>
    </div>
  );
};

// 13

const DatabaseExportCSV = (props) => {
  const handleExportCSV = () => {
    props.onExport(props.data);
  };

  return (
    <div>
      <h2>Export Data to CSV</h2>
      <button onClick={handleExportCSV}>Export to CSV</button>
    </div>
  );
};

// 14

const DatabaseImportCSV = (props) => {
  const [csvData, setCSVData] = useState('');

  const handleImportCSV = () => {
    props.onImport(csvData);
    setCSVData('');
  };

  return (
    <div>
      <h2>Import Data from CSV</h2>
      <textarea
        placeholder="Paste CSV data here"
        value={csvData}
        onChange={(e) => setCSVData(e.target.value)}
      />
      <button onClick={handleImportCSV}>Import from CSV</button>
    </div>
  );
};

// 15

const DatabaseSearch = (props) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    props.onSearch(searchQuery);
  };

  return (
    <div>
      <h2>Database Search</h2>
      <input
        type="text"
        placeholder="Enter search query"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

// 16

const DatabaseReport = (props) => {
  const handleGenerateReport = () => {
    props.onGenerateReport();
  };

  return (
    <div>
      <h2>Generate Report</h2>
      <button onClick={handleGenerateReport}>Generate Report</button>
    </div>
  );
};

// 17

const DatabaseValidation = (props) => {
  const handleValidation = () => {
    props.onValidate(props.data);
  };

  return (
    <div>
      <h2>Data Validation</h2>
      <button onClick={handleValidation}>Validate Data</button>
    </div>
  );
};

// 18

const DatabaseBackupRestore = (props) => {
  const handleBackup = () => {
    props.onBackup();
  };

  const handleRestore = () => {
    props.onRestore();
  };

  return (
    <div>
      <h2>Backup and Restore</h2>
      <button onClick={handleBackup}>Backup Data</button>
      <button onClick={handleRestore}>Restore Data</button>
    </div>
  );
};

// 19

const DatabaseExportExcel = (props) => {
  const handleExportExcel = () => {
    props.onExport(props.data);
  };

  return (
    <div>
      <h2>Export Data to Excel</h2>
      <button onClick={handleExportExcel}>Export to Excel</button>
    </div>
  );
};

// 20

const DatabaseImportExcel = (props) => {
  const [excelData, setExcelData] = useState('');

  const handleImportExcel = () => {
    props.onImport(excelData);
    setExcelData('');
  };

  return (
    <div>
      <h2>Import Data from Excel</h2>
      <textarea
        placeholder="Paste Excel data here"
        value={excelData}
        onChange={(e) => setExcelData(e.target.value)}
      />
      <button onClick={handleImportExcel}>Import from Excel</button>
    </div>
  );
};

// 21

const DatabaseVisualization = (props) => {
  const handleVisualize = () => {
    props.onVisualize(props.data, props.type);
  };

  return (
    <div>
      <h2>Data Visualization</h2>
      <p>Visualization Type: {props.type}</p>
      <button onClick={handleVisualize}>Visualize Data</button>
    </div>
  );
};

// 22

const DatabaseExportPDF = (props) => {
  const handleExportPDF = () => {
    props.onExport(props.data);
  };

  return (
    <div>
      <h2>Export Data to PDF</h2>
      <button onClick={handleExportPDF}>Export to PDF</button>
    </div>
  );
};

// 23

const DatabaseDataComparison = (props) => {
  const [selectedData1, setSelectedData1] = useState('');

  const [selectedData2, setSelectedData2] = useState('');

  const handleCompare = () => {
    props.onCompare(selectedData1, selectedData2);
  };

  return (
    <div>
      <h2>Data Comparison</h2>
      <label>Select Data 1:</label>
      <select
        value={selectedData1}
        onChange={(e) => setSelectedData1(e.target.value)}
      >
        {props.data1.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <label>Select Data 2:</label>
      <select
        value={selectedData2}
        onChange={(e) => setSelectedData2(e.target.value)}
      >
        {props.data2.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <button onClick={handleCompare}>Compare Data</button>
    </div>
  );
};

// 24

const DatabaseDataTransformation = (props) => {
  const [transformationType, setTransformationType] = useState('');

  const [transformedData, setTransformedData] = useState('');

  const handleTransform = () => {
    props.onTransform(transformationType, transformedData);
  };

  return (
    <div>
      <h2>Data Transformation</h2>
      <label>Transformation Type:</label>
      <input
        type="text"
        placeholder="Enter transformation type"
        value={transformationType}
        onChange={(e) => setTransformationType(e.target.value)}
      />
      <label>Transformed Data:</label>
      <textarea
        placeholder="Enter transformed data"
        value={transformedData}
        onChange={(e) => setTransformedData(e.target.value)}
      />
      <button onClick={handleTransform}>Transform Data</button>
    </div>
  );
};

// 25

const DatabaseExportJSON = (props) => {
  const handleExportJSON = () => {
    props.onExport(props.data);
  };

  return (
    <div>
      <h2>Export Data to JSON</h2>
      <button onClick={handleExportJSON}>Export to JSON</button>
    </div>
  );
};

// 26

const DatabaseImportJSON = (props) => {
  const [jsonData, setJsonData] = useState('');

  const handleImportJSON = () => {
    props.onImport(jsonData);
    setJsonData('');
  };

  return (
    <div>
      <h2>Import Data from JSON</h2>
      <textarea
        placeholder="Paste JSON data here"
        value={jsonData}
        onChange={(e) => setJsonData(e.target.value)}
      />
      <button onClick={handleImportJSON}>Import from JSON</button>
    </div>
  );
};

// 27

const DatabasePagination1 = (props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    props.onPageChange(newPage);
  };

  const totalPages = Math.ceil(props.totalItems / props.itemsPerPage);

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div>
      <h2>Data Pagination</h2>
      <ul className="pagination">
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={pageNumber === currentPage ? 'active' : ''}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

// 28

const DatabaseFiltering = (props) => {
  const [filterCriteria, setFilterCriteria] = useState('');

  const handleFilter = () => {
    props.onFilter(filterCriteria);
  };

  return (
    <div>
      <h2>Data Filtering</h2>
      <input
        type="text"
        placeholder="Enter filter criteria"
        value={filterCriteria}
        onChange={(e) => setFilterCriteria(e.target.value)}
      />
      <button onClick={handleFilter}>Filter Data</button>
    </div>
  );
};

// 29

const DatabaseExportXML = (props) => {
  const handleExportXML = () => {
    props.onExport(props.data);
  };

  return (
    <div>
      <h2>Export Data to XML</h2>
      <button onClick={handleExportXML}>Export to XML</button>
    </div>
  );
};

// 30

const DatabaseImportXML = (props) => {
  const [xmlData, setXmlData] = useState('');

  const handleImportXML = () => {
    props.onImport(xmlData);
    setXmlData('');
  };

  return (
    <div>
      <h2>Import Data from XML</h2>
      <textarea
        placeholder="Paste XML data here"
        value={xmlData}
        onChange={(e) => setXmlData(e.target.value)}
      />
      <button onClick={handleImportXML}>Import from XML</button>
    </div>
  );
};

// 31

const DatabaseSorting1 = (props) => {
  const [sortBy, setSortBy] = useState('');

  const handleSort = () => {
    props.onSort(sortBy);
  };

  return (
    <div>
      <h2>Data Sorting</h2>
      <label>Sort By:</label>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="name">Name</option>
        <option value="date">Date</option>
        <option value="value">Value</option>
      </select>
      <button onClick={handleSort}>Sort Data</button>
    </div>
  );
};

// 32

const DatabaseBackupCloud = (props) => {
  const [cloudProvider, setCloudProvider] = useState('');

  const handleBackup = () => {
    props.onBackup(props.data, cloudProvider);
  };

  return (
    <div>
      <h2>Backup Data to Cloud</h2>
      <label>Select Cloud Provider:</label>
      <select
        value={cloudProvider}
        onChange={(e) => setCloudProvider(e.target.value)}
      >
        <option value="aws">Amazon Web Services</option>
        <option value="azure">Microsoft Azure</option>
        <option value="gcp">Google Cloud Platform</option>
      </select>
      <button onClick={handleBackup}>Backup to Cloud</button>
    </div>
  );
};

// 33

const DatabaseVersioning = (props) => {
  const [versionNumber, setVersionNumber] = useState(1);

  const handleVersion = () => {
    props.onVersion(props.data, versionNumber);
  };

  return (
    <div>
      <h2>Data Versioning</h2>
      <label>Version Number:</label>
      <input
        type="number"
        value={versionNumber}
        onChange={(e) => setVersionNumber(e.target.value)}
      />
      <button onClick={handleVersion}>Create Version</button>
    </div>
  );
};

/*

// 34

const DatabaseAccessControl = (props) => {

  const handleAccessControlChange = () => {
    props.onAccessControlChange(props.userRole);
  };


  return (
    <div>
      <h2>Data Access Control</h2>
      <label>User Role: {props.userRole}</label>
      <button onClick={handleAccessControlChange}>Change Access Control</button>
    </div>
  );
}

















// 35

const DatabaseExportCSV = (props) => {

  const handleExportCSV = () => {
    props.onExport(props.data);
  };


  return (
    <div>
      <h2>Export Data to CSV</h2>
      <button onClick={handleExportCSV}>Export to CSV</button>
    </div>
  );
}


*/

// 36
/*
const DatabaseImportCSV = (props) => {

  const [csvData, setCsvData] = useState('');


  const handleImportCSV = () => {
    props.onImport(csvData);
    setCsvData('');
  };


  return (
    <div>
      <h2>Import Data from CSV</h2>
      <textarea
        placeholder="Paste CSV data here"
        value={csvData}
        onChange={(e) => setCsvData(e.target.value)}
        />
      <button onClick={handleImportCSV}>Import from CSV</button>
    </div>
  );
}



*/

//import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

//37
/*
const DatabaseChartVisualization = (props) => {

  return (
    <div>
      <h2>Data Visualization with Charts</h2>
      <BarChart width={400} height={300} data={props.data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={props.chartDataKey} fill="#8884d8" />
      </BarChart>
    </div>
  );
}



*/

// 38

const DatabaseExportJSONAPI = (props) => {
  const handleExportJSONAPI = () => {
    props.onExport(props.data);
  };

  return (
    <div>
      <h2>Export Data to JSON API</h2>
      <button onClick={handleExportJSONAPI}>Export to JSON API</button>
    </div>
  );
};

// 39

const DatabaseDataValidation = (props) => {
  const [validationResult, setValidationResult] = useState('');

  const handleValidate = () => {
    const result = validateData(props.data);
    setValidationResult(result);
    props.onValidate(result);
  };

  const validateData = (props) => {
    // Implement your validation logic here
    // Return true for valid data and false for invalid data
    return props.data.length > 0;
  };

  return (
    <div>
      <h2>Data Validation</h2>
      <button onClick={handleValidate}>Validate Data</button>
      <p>Validation Result: {validationResult ? 'Valid' : 'Invalid'}</p>
    </div>
  );
};

// 40

const DatabaseExportWord = (props) => {
  const handleExportWord = () => {
    props.onExport(props.data);
  };

  return (
    <div>
      <h2>Export Data to Word</h2>
      <button onClick={handleExportWord}>Export to Word</button>
    </div>
  );
};

// 41

const DatabaseImportWord = (props) => {
  const [wordData, setWordData] = useState('');

  const handleImportWord = () => {
    props.onImport(wordData);
    setWordData('');
  };

  return (
    <div>
      <h2>Import Data from Word</h2>
      <textarea
        placeholder="Paste Word data here"
        value={wordData}
        onChange={(e) => setWordData(e.target.value)}
      />
      <button onClick={handleImportWord}>Import from Word</button>
    </div>
  );
};

// 42

const DatabaseExportPDFAPI = (props) => {
  const handleExportPDFAPI = () => {
    props.onExport(props.data);
  };

  return (
    <div>
      <h2>Export Data to PDF API</h2>
      <button onClick={handleExportPDFAPI}>Export to PDF API</button>
    </div>
  );
};

// 43

const DatabaseDataReporting = (props) => {
  const handleGenerateReport = () => {
    props.onGenerateReport(props.data);
  };

  return (
    <div>
      <h2>Data Reporting</h2>
      <button onClick={handleGenerateReport}>Generate Report</button>
    </div>
  );
};

// 44

const DatabaseBackupLocalStorage = (props) => {
  const handleBackupLocalStorage = () => {
    props.onBackup(props.data);
  };

  return (
    <div>
      <h2>Backup Data to Local Storage</h2>
      <button onClick={handleBackupLocalStorage}>
        Backup to Local Storage
      </button>
    </div>
  );
};

// 45

const DatabaseImportLocalStorage = (props) => {
  const [localStorageData, setLocalStorageData] = useState('');

  const handleImportLocalStorage = () => {
    props.onImport(localStorageData);
    setLocalStorageData('');
  };

  return (
    <div>
      <h2>Import Data from Local Storage</h2>
      <textarea
        placeholder="Paste Local Storage data here"
        value={localStorageData}
        onChange={(e) => setLocalStorageData(e.target.value)}
      />
      <button onClick={handleImportLocalStorage}>
        Import from Local Storage
      </button>
    </div>
  );
};

// 46

const DatabaseExportEmail = (props) => {
  const handleExportEmail = () => {
    props.onExport(props.data);
  };

  return (
    <div>
      <h2>Export Data to Email</h2>
      <button onClick={handleExportEmail}>Export to Email</button>
    </div>
  );
};

// 47

const DatabaseImportEmail = (props) => {
  const [emailData, setEmailData] = useState('');

  const handleImportEmail = () => {
    props.onImport(emailData);
    setEmailData('');
  };

  return (
    <div>
      <h2>Import Data from Email</h2>
      <textarea
        placeholder="Paste email data here"
        value={emailData}
        onChange={(e) => setEmailData(e.target.value)}
      />
      <button onClick={handleImportEmail}>Import from Email</button>
    </div>
  );
};

// 48
/*
const DatabaseExportExcel = (props) => {

  const handleExportExcel = () => {
    props.onExport(props.data);
  };


  return (
    <div>
      <h2>Export Data to Excel</h2>
      <button onClick={handleExportExcel}>Export to Excel</button>
    </div>
  );
}

*/

// 49
/*
const DatabaseImportExcel = (props) => {

  const [excelData, setExcelData] = useState('');


  const handleImportExcel = () => {
    props.onImport(excelData);
    setExcelData('');
  };


  return (
    <div>
      <h2>Import Data from Excel</h2>
      <textarea
        placeholder="Paste Excel data here"
        value={excelData}
        onChange={(e) => setExcelData(e.target.value)}
        />
      <button onClick={handleImportExcel}>Import from Excel</button>
    </div>
  );
}

*/

// 50

const DatabaseAuthentication = (props) => {
  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');

  const handleAuthenticate = () => {
    props.onAuthenticate(username, password);
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h2>Data Authentication</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleAuthenticate}>Authenticate</button>
    </div>
  );
};

// 51
/*
const DatabaseExportJSON = (props) => {

  const handleExportJSON = () => {
    props.onExport(props.data);
  };


  return (
    <div>
      <h2>Export Data to JSON</h2>
      <button onClick={handleExportJSON}>Export to JSON</button>
    </div>
  );
}
*/

// 52
/*
const DatabaseImportJSON = (props) => {

  const [jsonData, setJsonData] = useState('');


  const handleImportJSON = () => {
    props.onImport(jsonData);
    setJsonData('');
  };


  return (
    <div>
      <h2>Import Data from JSON</h2>
      <textarea
        placeholder="Paste JSON data here"
        value={jsonData}
        onChange={(e) => setJsonData(e.target.value)}
        />
      <button onClick={handleImportJSON}>Import from JSON</button>
    </div>
  );
}

*/

export {
  DatabaseTable,
  DatabaseQuery,
  DatabasePagination,
  DatabaseFilter,
  DatabaseExport,
  DatabaseInsert,
  DatabaseDelete,
  DatabaseSorting,
  DatabaseBackup,
  DatabaseConnection,
  DatabasePermissions,
  DatabaseExportCSV,
  DatabaseImportCSV,
  DatabaseSearch,
  DatabaseReport,
  DatabaseValidation,
  DatabaseBackupRestore,
  DatabaseExportExcel,
  DatabaseImportExcel,
  DatabaseVisualization,
  DatabaseExportPDF,
  DatabaseDataComparison,
  DatabaseDataTransformation,
  DatabaseExportJSON,
  DatabaseImportJSON,
  //DatabasePagination,
  DatabaseFiltering,
  DatabaseExportXML,
  DatabaseImportXML,
  //DatabaseSorting,
  DatabaseBackupCloud,
  DatabaseVersioning,
  //DatabaseAccessControl,
  //DatabaseExportCSV,
  //DatabaseImportCSV,
  //DatabaseChartVisualization,
  DatabaseExportJSONAPI,
  DatabaseDataValidation,
  DatabaseExportWord,
  DatabaseImportWord,
  DatabaseExportPDFAPI,
  DatabaseDataReporting,
  DatabaseBackupLocalStorage,
  DatabaseImportLocalStorage,
  DatabaseExportEmail,
  DatabaseImportEmail,
  //DatabaseExportExcel,
  //DatabaseImportExcel,
  DatabaseAuthentication,
  //DatabaseExportJSON,
  //DatabaseImportJSON
};
