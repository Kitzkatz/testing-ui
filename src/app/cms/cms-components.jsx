'use client';

import React, { useEffect, useState } from 'react';
//import * as XLSX from 'xlsx/xlsx.mjs';

//import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

//excel cms component
// Import the xlsx library

//1
/*
const CMSComponent = (props) => {

  const [articles, setArticles] = useState([]);

  const [currentArticle, setCurrentArticle] = useState(null);

  const handleArticleClick = (article) => {
    setCurrentArticle(article);
  };

  const handleAddArticle = () => {

    const newArticle = { id: Date.now(), title: 'New Article', content: 'Edit the content...' };
    setArticles([...articles, newArticle]);
    setCurrentArticle(newArticle);
  };

  const handleImportExcel = (event) => {

    const file = event.target.files[0];

    const reader = new FileReader();

    reader.onLoad = (e) => {

      const data = new props.UnitArray(e.target.result);

      const workbook = xlsx.read(data, { type: 'array' });

      const sheetName = workbook.SheetNames[0];

      const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
      setArticles(sheetData);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="cms-container">
      <div className="article-list">
        <h2>Article List</h2>
          <ul>
            {articles.map(article => (
              <li key={article.id} onClick={() => handleArticleClick(article)}>
                {article.title}
              </li>
            ))}
          </ul>
          <button onClick={handleAddArticle}>Add Article</button>
          <input type="file" accept=".xlsx" onChange={handleImportExcel} />
      </div>
      <div className="article-details">
        {currentArticle ? (
          <div>
            <h2>{currentArticle.title}</h2>
            <p>{currentArticle.content}</p>
          </div>
          ) : (
          <p>Select an article to view details</p>
        )}
      </div>
    </div>
  );
};



*/

//////// drag an drop components

//2

const FileUploader = (props) => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragLeave = () => {
    setIsDraggingOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDraggingOver(false);

    const files = e.dataTransfer.files;
    props.onFilesUpload(files);
  };

  return (
    <div
      className={`file-uploader ${isDraggingOver ? 'drag-over' : ''}`}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <p>Drag and drop files here</p>
      <input type="file" style={{ display: 'none' }} />
    </div>
  );
};

//3

/*
const handleFilesUpload = (props) => {
  // Handle the uploaded files here
  console.log('Uploaded files:', props.files);
};
return (
  <div className="app">
    <h1>File Uploader</h1>
    <FileUploader onFilesUpload={handleFilesUpload} />
  </div>
);

*/

////// common cms components

//4

const ContentEditor = (props) => {
  const [content, setContent] = useState(props.initialContent);

  const handleSave = () => {
    props.onSave(content);
  };

  return (
    <div>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

//5

const NavigationMenu = (props) => {
  return (
    <ul>
      {props.items.map((item, index) => (
        <li key={index}>
          <a href={item.link}>{item.label}</a>
        </li>
      ))}
    </ul>
  );
};

//6

const UserProfile = (props) => {
  return (
    <div>
      <h2>{props.user.name}</h2>
      <p>Email: {props.user.email}</p>
      <p>Role: {props.user.role}</p>
      {/* Additional user profile information */}
    </div>
  );
};

//7
/*

const SEOTools = (props) => {
  const handleTitleChange = (e, props) => {
    props.onChange({ props.title: e.target.value, props.metaDescription });
  };


  const handleMetaDescriptionChange = (e) => {
    props.onChange({ props.title, props.metaDescription: e.target.value });
  };


  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <textarea
        placeholder="Meta Description"
        value={props.metaDescription}
        onChange={handleMetaDescriptionChange}
      />
    </div>
  );
}


 */

//8

const UserManagement = (props) => {
  return (
    <div>
      <h2>User Management</h2>
      <ul>
        {props.users.map((user) => (
          <li key={user.id} onClick={() => props.onUserClick(user.id)}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

//9

const ContentVersioning = (props) => {
  const [versions, setVersions] = useState([]);

  const handleRollback = (version) => {
    props.onRollback(version);
  };

  return (
    <div>
      <h2>Content Versioning</h2>
      <ul>
        {props.versions.map((version, index) => (
          <li key={index}>
            Version {index + 1}{' '}
            <button onClick={() => handleRollback(version)}>Rollback</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

//10

const Comments = (props) => {
  const [newComment, setNewComment] = useState('');

  const handleSubmitComment = () => {
    props.onCommentSubmit(newComment);
    setNewComment('');
  };

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {props.comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <textarea
        placeholder="Add a comment..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={handleSubmitComment}>Submit</button>
    </div>
  );
};

//11

const AnalyticsIntegration = (props) => {
  useEffect(() => {
    // Implement code to track analytics for the current page
    // Example: Initialize Google Analytics with pageName
  }, [props.pageName]);

  return <div>Analytics Integration Component</div>;
};

//12

const TaggingAndCategorization = (props) => {
  const [selectedTags, setSelectedTags] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState('');

  const handleTagSelect = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div>
      <h2>Tagging and Categorization</h2>
      <div>
        <h3>Tags</h3>
        {props.tags.map((tag) => (
          <label key={tag}>
            <input
              type="checkbox"
              value={tag}
              checked={selectedTags.includes(tag)}
              onChange={() => handleTagSelect(tag)}
            />
            {tag}
          </label>
        ))}
      </div>
      <div>
        <h3>Category</h3>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          {props.categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

//13

const WorkflowAndApproval = (props) => {
  return (
    <div>
      <h2>Workflow and Approval</h2>
      <p>{props.content}</p>
      <button onClick={props.onApprove}>Approve</button>
      <button onClick={props.onReject}>Reject</button>
    </div>
  );
};

//14

const FormBuilder = (props) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {props.fields.map((field) => (
        <div key={field.name}>
          <label>{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name] || ''}
            onChange={handleChange}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

//15

const MultilingualSupport = (props) => {
  const translatedContent =
    props.translations[props.language] || 'Translation not available';

  return (
    <div>
      <h2>Multilingual Support</h2>
      <p>Current Language: {props.language}</p>
      <p>{translatedContent}</p>
    </div>
  );
};

//16

const ContentImportExport = (props) => {
  const [importedContent, setImportedContent] = useState('');

  const handleImport = () => {
    props.onImport(importedContent);
    setImportedContent('');
  };

  return (
    <div>
      <h2>Content Import/Export</h2>
      <textarea
        placeholder="Paste content to import"
        value={importedContent}
        onChange={(e) => setImportedContent(e.target.value)}
      />
      <button onClick={handleImport}>Import</button>
      <button onClick={props.onExport}>Export</button>
    </div>
  );
};

//17

const ThemeManagement = (props) => {
  return (
    <div>
      <h2>Theme Management</h2>
      <select
        value={props.selectedTheme}
        onChange={(e) => props.onThemeChange(e.target.value)}
      >
        {props.themes.map((theme) => (
          <option key={theme} value={theme}>
            {theme}
          </option>
        ))}
      </select>
    </div>
  );
};

//18

const BackupRestore = (props) => {
  return (
    <div>
      <h2>Backup and Restore</h2>
      <button onClick={props.onBackup}>Backup</button>
      <button onClick={props.onRestore}>Restore</button>
    </div>
  );
};

//19

const ThirdPartyIntegration = (props) => {
  return (
    <div>
      <h2>Integration with {props.service}</h2>
      <label>API Key:</label>
      <input
        type="text"
        value={props.apiKey}
        onChange={(e) => props.onApiKeyChange(e.target.value)}
      />
    </div>
  );
};

//20

const AccessibilityFeatures = (props) => {
  return (
    <div>
      <h2>Accessibility Features</h2>
      <label>
        <input
          type="checkbox"
          checked={props.enableAccessibility}
          onChange={props.onToggleAccessibility}
        />{' '}
        Enable Accessibility
      </label>
    </div>
  );
};

//21

const ErrorHandling = (props) => {
  return (
    <div>
      <h2>Error Handling</h2>
      {props.errorMessage ? (
        <div className="error-message">{props.errorMessage}</div>
      ) : (
        <div>No errors to display.</div>
      )}
    </div>
  );
};

//22

const UserActivityTracking = (props) => {
  return (
    <div>
      <h2>User Activity Tracking</h2>
      <ul>
        {props.activityLog.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
};

//23

const ContentArchiving = (props) => {
  return (
    <div>
      <h2>Content Archiving</h2>
      <ul>
        {props.archivedContent.map((content, index) => (
          <li key={index}>
            {content}{' '}
            <button onClick={() => props.onRestoreArchive(content)}>
              Restore
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

/*function ContentSharing(props) {
  const handleShare = () => {
    props.onShare(props.shareUrl);
  };


  return (
    <div>
      <h2>Content Sharing</h2>
      <p>Shareable URL: {props.shareUrl}</p>
      <button onClick={handleShare}>Share</button>
    </div>
  );
}
*/

//23

const RSSFeeds = (props) => {
  return (
    <div>
      <h2>RSS Feeds</h2>
      <ul>
        {props.feeds.map((feed, index) => (
          <li key={index}>
            <a href={feed.url}>{feed.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

//24

const CustomFields = (props) => {
  return (
    <div>
      <h2>Custom Fields</h2>
      {props.fields.map((field) => (
        <div key={field.name}>
          <label>{field.label}</label>
          <p>{field.value}</p>
        </div>
      ))}
    </div>
  );
};

//24

const ContentActivity = (props) => {
  return (
    <div>
      <h2>Content Activity</h2>
      <ul>
        {props.activityData.map((activity, index) => (
          <li key={index}>
            {activity.user} {activity.action} {activity.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

//25

const CommentModeration = (props) => {
  return (
    <div>
      <h2>Comment Moderation</h2>
      <ul>
        {props.comments.map((comment, index) => (
          <li key={index}>
            {comment.text}{' '}
            <button onClick={() => props.onApproveComment(comment.id)}>
              Approve
            </button>{' '}
            <button onClick={() => props.onDeleteComment(comment.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

//24

const EmailNotification = (props) => {
  const [message, setMessage] = useState('');

  const handleSendNotification = () => {
    props.onSendNotification(props.recipients, message);
    setMessage('');
  };

  return (
    <div>
      <h2>Email Notification</h2>
      <textarea
        placeholder="Enter your notification message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSendNotification}>Send Notification</button>
    </div>
  );
};

//25

const ContentLocking = (props) => {
  return (
    <div>
      <h2>Content Locking</h2>
      <p>Content is {props.isLocked ? 'locked' : 'unlocked'}</p>
      <button onClick={props.onToggleLock}>
        {props.isLocked ? 'Unlock Content' : 'Lock Content'}
      </button>
    </div>
  );
};

//26

const UserPreferences = (props) => {
  const [updatedPreferences, setUpdatedPreferences] = useState(
    props.preferences
  );

  const handleSavePreferences = () => {
    props.onSavePreferences(updatedPreferences);
  };

  return (
    <div>
      <h2>User Preferences</h2>
      <label>Theme:</label>
      <select
        value={updatedPreferences.theme}
        onChange={(e) =>
          setUpdatedPreferences({
            ...updatedPreferences,
            theme: e.target.value,
          })
        }
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <button onClick={handleSavePreferences}>Save Preferences</button>
    </div>
  );
};

//27

const ContentRevisions = (props) => {
  return (
    <div>
      <h2>Content Revisions</h2>
      <ul>
        {props.revisions.map((revision, index) => (
          <li key={index}>
            {revision.date}{' '}
            <button onClick={() => props.onRestoreRevision(revision)}>
              Restore
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

//28

const ContentApprovalWorkflow = (props) => {
  return (
    <div>
      <h2>Content Approval Workflow</h2>
      <p>{props.content}</p>
      <button onClick={props.onApprove}>Approve</button>
      <button onClick={props.onReject}>Reject</button>
    </div>
  );
};

//29

const UserAccessControl = (props) => {
  return (
    <div>
      <h2>User Access Control</h2>
      <label>Select User Role:</label>
      <select onChange={(e) => props.onUserAccessChange(e.target.value)}>
        {props.userRoles.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>
    </div>
  );
};

//30

const ContentPreview = (props) => {
  return (
    <div>
      <h2>Content Preview</h2>
      <p>{props.previewContent}</p>
    </div>
  );
};

//31

const ContentExpiration = (props) => {
  return (
    <div>
      <h2>Content Expiration</h2>
      <p>Expiration Date: {props.expirationDate}</p>
      <button onClick={props.onSetExpiration}>Set Expiration</button>
    </div>
  );
};

//32

const ContentLocalization = (props) => {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageChange = () => {
    props.onLanguageChange(selectedLanguage);
  };

  return (
    <div>
      <h2>Content Localization</h2>
      <label>Select Language:</label>
      <select
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
      >
        <option value="">Select a language</option>
        {props.availableLanguages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
      <button onClick={handleLanguageChange}>Change Language</button>
    </div>
  );
};

//33

const AdvancedContentImportExport = (props) => {
  const [importedContent, setImportedContent] = useState('');

  const handleImport = () => {
    props.onImport(importedContent);
    setImportedContent('');
  };

  return (
    <div>
      <h2>Advanced Content Import/Export</h2>
      <textarea
        placeholder="Paste advanced content to import"
        value={importedContent}
        onChange={(e) => setImportedContent(e.target.value)}
      />
      <button onClick={handleImport}>Import</button>
      <button onClick={props.onExport}>Export</button>
    </div>
  );
};

//34

const ContentHistory = (props) => {
  return (
    <div>
      <h2>Content History</h2>
      <ul>
        {props.historyEntries.map((entry, index) => (
          <li key={index}>
            <strong>{entry.date}</strong> - {entry.action}
          </li>
        ))}
      </ul>
    </div>
  );
};

//35

const VersionControl = (props) => {
  return (
    <div>
      <h2>Content Version Control</h2>
      <p>Current Version: {props.currentVersion}</p>
      <label>Select Version:</label>
      <select onChange={(e) => props.onVersionChange(e.target.value)}>
        <option value="">Select a version</option>
        {props.availableVersions.map((version) => (
          <option key={version} value={version}>
            {version}
          </option>
        ))}
      </select>
    </div>
  );
};

//36

const TranslationManagement = (props) => {
  return (
    <div>
      <h2>Content Translation Management</h2>
      <label>Select Language:</label>
      <select onChange={(e) => props.onTranslationChange(e.target.value)}>
        <option value="">Select a language</option>
        {props.languages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
      <textarea
        placeholder="Enter translation here"
        value={props.translations}
        onChange={(e) => props.onTranslationChange(e.target.value)}
      />
    </div>
  );
};

//37

const ContentPermissions = (props) => {
  const [selectedUser, setSelectedUser] = useState('');

  const handlePermissionChange = () => {
    props.onPermissionChange(selectedUser);
    setSelectedUser('');
  };

  return (
    <div>
      <h2>Content Permissions</h2>
      <label>Select User:</label>
      <select
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
      >
        <option value="">Select a user</option>
        {props.users.map((user) => (
          <option key={user} value={user}>
            {user}
          </option>
        ))}
      </select>
      <button onClick={handlePermissionChange}>Change Permission</button>
    </div>
  );
};

//38

const ContentAnalytics = (props) => {
  return (
    <div>
      <h2>Content Analytics</h2>
      <p>Page Views: {props.pageViews}</p>
      <p>Unique Visitors: {props.uniqueVisitors}</p>
      <p>Conversion Rate: {props.conversionRate}%</p>
    </div>
  );
};

//39

const ContentRecommendations = (props) => {
  return (
    <div>
      <h2>Content Recommendations</h2>
      <ul>
        {props.recommendedContent.map((content, index) => (
          <li key={index}>{content}</li>
        ))}
      </ul>
    </div>
  );
};

//40

const ContentExportOptions = (props) => {
  return (
    <div>
      <h2>Content Export Options</h2>
      <label>Select Format:</label>
      <select onChange={(e) => props.onExport(e.target.value)}>
        <option value="">Select a format</option>
        {props.exportFormats.map((format) => (
          <option key={format} value={format}>
            {format}
          </option>
        ))}
      </select>
      <button onClick={props.onExport}>Export Content</button>
    </div>
  );
};

//41

const ContentGeolocation = (props) => {
  return (
    <div>
      <h2>Content Geolocation</h2>
      <p>Country: {props.locationData.country}</p>
      <p>City: {props.locationData.city}</p>
      <p>Latitude: {props.locationData.latitude}</p>
      <p>Longitude: {props.locationData.longitude}</p>
    </div>
  );
};

//42

const ContentSearch = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    props.onSearch(searchTerm);
  };

  return (
    <div>
      <h2>Content Search</h2>
      <input
        type="text"
        placeholder="Enter search term"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

//43

const WorkflowStatus = (props) => {
  return (
    <div>
      <h2>Workflow Status</h2>
      <p>Status: {props.status}</p>
    </div>
  );
};

//44

const ApprovalHistory = (props) => {
  return (
    <div>
      <h2>Approval History</h2>
      <ul>
        {props.approvalHistory.map((entry, index) => (
          <li key={index}>
            {entry.user} {entry.action} on {entry.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

//45

const ContentCollaboration = (props) => {
  return (
    <div>
      <h2>Content Collaboration</h2>
      <ul>
        {props.collaborators.map((collaborator, index) => (
          <li key={index}>{collaborator}</li>
        ))}
      </ul>
      <button onClick={props.onAddCollaborator}>Add Collaborator</button>
    </div>
  );
};

//46

const ContentSubscription = (props) => {
  const handleToggleSubscription = () => {
    props.onToggleSubscription(!props.isSubscribed);
  };

  return (
    <div>
      <h2>Content Subscription</h2>
      <p>
        {props.isSubscribed
          ? 'You are subscribed to updates.'
          : 'You are not subscribed to updates.'}
      </p>
      <button onClick={handleToggleSubscription}>
        {props.isSubscribed ? 'Unsubscribe' : 'Subscribe'}
      </button>
    </div>
  );
};

//47

const ContentAccessibility = (props) => {
  return (
    <div>
      <h2>Content Accessibility</h2>
      <p>
        {props.isAccessible
          ? 'This content is accessible.'
          : 'This content may have accessibility issues.'}
      </p>
    </div>
  );
};

//48

const ContentFeedback = (props) => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackSubmit = () => {
    props.onFeedbackSubmit(feedback);
    setFeedback('');
  };

  return (
    <div>
      <h2>Content Feedback</h2>
      <textarea
        placeholder="Provide feedback here"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />
      <button onClick={handleFeedbackSubmit}>Submit Feedback</button>
    </div>
  );
};

//49

const ContentSEO = (props) => {
  return (
    <div>
      <h2>Content SEO</h2>
      <label>SEO Title:</label>
      <input
        type="text"
        value={props.seoMetadata.title}
        onChange={(e) =>
          props.onUpdateSEO({ ...props.seoMetadata, title: e.target.value })
        }
      />
      <label>Meta Description:</label>
      <textarea
        value={props.seoMetadata.metaDescription}
        onChange={(e) =>
          props.onUpdateSEO({
            ...props.seoMetadata,
            metaDescription: e.target.value,
          })
        }
      />
    </div>
  );
};

//50

const ContentTags = (props) => {
  const [newTag, setNewTag] = useState('');

  const handleAddTag = () => {
    props.onAddTag(newTag);
    setNewTag('');
  };

  return (
    <div>
      <h2>Content Tags</h2>
      <ul>
        {props.tags.map((tag, index) => (
          <li key={index}>
            {tag} <button onClick={() => props.onRemoveTag(tag)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Enter a new tag"
        value={newTag}
        onChange={(e) => setNewTag(e.target.value)}
      />
      <button onClick={handleAddTag}>Add Tag</button>
    </div>
  );
};

//51

const ContentPerformanceMetrics = (props) => {
  return (
    <div>
      <h2>Content Performance Metrics</h2>
      <ul>
        {Object.keys(props.metrics).map((metric, index) => (
          <li key={index}>
            {metric}: {props.metrics[metric]}
          </li>
        ))}
      </ul>
    </div>
  );
};

//52

const ContentExportHistory = (props) => {
  return (
    <div>
      <h2>Content Export History</h2>
      <ul>
        {props.exportHistory.map((entry, index) => (
          <li key={index}>
            Exported on {entry.date} in {entry.format}
          </li>
        ))}
      </ul>
    </div>
  );
};

/*
function ContentSharing(props) {
  const [recipient, setRecipient] = useState('');


  const handleShareContent = () => {
    props.onShareContent(recipient);
    setRecipient('');
  };


  return (
    <div>
      <h2>Content Sharing</h2>
      <ul>
        {props.sharedWith.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Enter recipient's username"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <button onClick={handleShareContent}>Share Content</button>
    </div>
  );
}
*/

//53

const ContentCategorization = (props) => {
  return (
    <div>
      <h2>Content Categorization</h2>
      <label>Select Category:</label>
      <select onChange={(e) => props.onCategoryChange(e.target.value)}>
        <option value="">Select a category</option>
        {props.categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

//54

const ContentCommenting = (props) => {
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    props.onAddComment(newComment);
    setNewComment('');
  };

  return (
    <div>
      <h2>Content Commenting</h2>
      <ul>
        {props.comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <textarea
        placeholder="Add a comment"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
};

//55

const ContentSecurity = (props) => {
  return (
    <div>
      <h2>Content Security</h2>
      <p>
        {props.isSecure
          ? 'This content is secure.'
          : 'This content may have security vulnerabilities.'}
      </p>
    </div>
  );
};

//56

const ABTesting = (props) => {
  return (
    <div>
      <h2>A/B Testing</h2>
      <label>Select Variation:</label>
      <select onChange={(e) => props.onVariationSelect(e.target.value)}>
        <option value="">Select a variation</option>
        {props.variations.map((variation) => (
          <option key={variation} value={variation}>
            {variation}
          </option>
        ))}
      </select>
    </div>
  );
};

//57

const ContentUserRatings = (props) => {
  const [rating, setRating] = useState(props.userRating || 0);

  const handleRate = () => {
    props.onRate(rating);
  };

  return (
    <div>
      <h2>User Ratings</h2>
      <p>Average Rating: {props.averageRating}</p>
      <p>Your Rating: {rating}</p>
      <label>Rate This Content:</label>
      <select onChange={(e) => setRating(e.target.value)}>
        {Array.from({ length: 5 }, (_, i) => i + 1).map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      <button onClick={handleRate}>Submit Rating</button>
    </div>
  );
};

//58

const ContentScheduling = (props) => {
  const [date, setDate] = useState('');

  const handleSchedule = () => {
    props.onSchedule(date);
    setDate('');
  };

  return (
    <div>
      <h2>Content Scheduling</h2>
      <p>Scheduled Date: {props.scheduledDate || 'Not scheduled'}</p>
      <label>Schedule Content:</label>
      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleSchedule}>Schedule</button>
    </div>
  );
};

//59

const UserProfiles = (props) => {
  return (
    <div>
      <h2>User Profiles</h2>
      <ul>
        {props.users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

//60

const SocialSharing = (props) => {
  const handleShare = (socialMedia) => {
    props.onShare(socialMedia);
  };

  return (
    <div>
      <h2>Social Sharing</h2>
      <button onClick={() => handleShare('Facebook')}>Share on Facebook</button>
      <button onClick={() => handleShare('Twitter')}>Share on Twitter</button>
      <button onClick={() => handleShare('LinkedIn')}>Share on LinkedIn</button>
    </div>
  );
};

//61

const CommentsModeration = (props) => {
  const handleModerate = (commentId, action) => {
    props.onModerate(commentId, action);
  };

  return (
    <div>
      <h2>Comments Moderation</h2>
      <ul>
        {props.comments.map((comment, index) => (
          <li key={index}>
            {comment.text}
            <button onClick={() => handleModerate(comment.id, 'approve')}>
              Approve
            </button>
            <button onClick={() => handleModerate(comment.id, 'delete')}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

//62

const ContentTranslation = (props) => {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleTranslate = () => {
    props.onTranslate(selectedLanguage);
    setSelectedLanguage('');
  };

  return (
    <div>
      <h2>Content Translation</h2>
      <label>Select Language:</label>
      <select
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
      >
        <option value="">Select a language</option>
        {props.availableLanguages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
      <button onClick={handleTranslate}>Translate Content</button>
    </div>
  );
};

//63

const RevisionHistory = (props) => {
  return (
    <div>
      <h2>Revision History</h2>
      <ul>
        {props.revisions.map((revision, index) => (
          <li key={index}>
            <button onClick={() => props.onSelectRevision(revision)}>
              Version {revision.version}
            </button>
            - {revision.date}
          </li>
        ))}
      </ul>
    </div>
  );
};
// { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

//64
/*
const AnalyticsCharts = (props) => {

  return (
    <div>
      <h2>Content Analytics Charts</h2>
      <LineChart width={500} height={300} data={props.data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pageViews" stroke="#8884d8" />
        <Line type="monotone" dataKey="uniqueVisitors" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}
*/

//65

const UserActivityFeed = (props) => {
  return (
    <div>
      <h2>User Activity Feed</h2>
      <ul>
        {props.activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
};

//66

const RelatedArticles = (props) => {
  return (
    <div>
      <h2>Related Articles</h2>
      <ul>
        {props.articles.map((article, index) => (
          <li key={index}>
            <button onClick={() => props.onArticleClick(article)}>
              {article.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

//67

const VersionComparison = (props) => {
  return (
    <div>
      <h2>Version Comparison</h2>
      <label>Select Versions to Compare:</label>
      <select
        multiple
        onChange={(e) => props.onCompare(e.target.selectedOptions)}
      >
        {props.versions.map((version) => (
          <option key={version} value={version}>
            {version}
          </option>
        ))}
      </select>
      <button onClick={props.onCompare}>Compare Versions</button>
    </div>
  );
};

//68

const ContentPersonalization = (props) => {
  const [preferences, setPreferences] = useState({ ...props.userPreferences });

  const handlePersonalize = () => {
    props.onPersonalize(preferences);
  };

  return (
    <div>
      <h2>Content Personalization</h2>
      <label>Select Preferences:</label>
      {Object.keys(preferences).map((preference) => (
        <div key={preference}>
          <input
            type="checkbox"
            checked={preferences[preference]}
            onChange={() =>
              setPreferences({
                ...preferences,
                [preference]: !preferences[preference],
              })
            }
          />
          {preference}
        </div>
      ))}
      <button onClick={handlePersonalize}>Apply Personalization</button>
    </div>
  );
};

//69
/*

const ContentCollaboration = (props) => {

  const [newCollaborator, setNewCollaborator] = useState('');


  const handleAddCollaborator = () => {

    props.onAddCollaborator(newCollaborator);
    setNewCollaborator('');
  };


  return (
    <div>
      <h2>Content Collaboration</h2>
      <ul>
        {props.collaborators.map((collaborator, index) => (
          <li key={index}>{collaborator}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Enter collaborator's username"
        value={newCollaborator}
        onChange={(e) => setNewCollaborator(e.target.value)}
        />
      <button onClick={handleAddCollaborator}>Add Collaborator</button>
    </div>
  );
}

 */

//70

const SocialComments = (props) => {
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    props.onAddComment(newComment);
    setNewComment('');
  };

  return (
    <div>
      <h2>Social Comments</h2>
      <ul>
        {props.comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <textarea
        placeholder="Add a comment"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
};

//71
/*

const UserActivityTracking = (props) => {

  return (
    <div>
      <h2>User Activity Tracking</h2>
      <ul>
        {props.activityLog.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
}


 */

//72

const ContentDuplication = (props) => {
  const handleDuplicate = () => {
    props.onDuplicate();
  };

  return (
    <div>
      <h2>Content Duplication</h2>
      <button onClick={handleDuplicate}>Duplicate Content</button>
    </div>
  );
};

//73

const PublishSettings = (props) => {
  const [isPublishing, setIsPublishing] = useState(props.isPublished);

  const handleTogglePublish = () => {
    setIsPublishing(!isPublishing);
    props.onPublishToggle(!isPublishing);
  };

  return (
    <div>
      <h2>Publish Settings</h2>
      <p>Status: {isPublishing ? 'Publishing' : 'Draft'}</p>
      <button onClick={handleTogglePublish}>
        {isPublishing ? 'Unpublish' : 'Publish'}
      </button>
    </div>
  );
};

//74

const SEOOptimization = (props) => {
  const [title, setTitle] = useState(props.metaTags.title);

  const [description, setDescription] = useState(props.metaTags.description);

  const handleUpdateMetaTags = () => {
    props.onUpdateMetaTags({ title, description });
  };

  return (
    <div>
      <h2>SEO Optimization</h2>
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Description:</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleUpdateMetaTags}>Update Meta Tags</button>
    </div>
  );
};

//75
/*

const ContentPreview = (props) => {

  const [previewContent, setPreviewContent] = useState('');


  useEffect(() => {

    setPreviewContent(props.content);
  }, [props.content]);


  return (
    <div>
      <h2>Content Preview</h2>
      <div dangerouslySetInnerHTML={{ __html: previewContent }} />
    </div>
  );
}


 */

//76
/*

const ContentSubscription = (props) => {

  const [subscribed, setSubscribed] = useState(props.isSubscribed);


  const handleSubscribe = () => {

    setSubscribed(!subscribed);
    props.onSubscribe(!subscribed);
  };


  return (
    <div>
      <h2>Content Subscription</h2>
      <p>{subscribed ? 'Subscribed' : 'Not Subscribed'}</p>
      <button onClick={handleSubscribe}>
        {subscribed ? 'Unsubscribe' : 'Subscribe'}
      </button>
    </div>
  );
}


 */

//77

const ContentCategories = (props) => {
  return (
    <div>
      <h2>Content Categories</h2>
      <ul>
        {props.categories.map((category, index) => (
          <li key={index}>
            <button onClick={() => props.onSelectCategory(category)}>
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

//78

const AccessControl = (props) => {
  const [newAccessLevel, setNewAccessLevel] = useState(props.accessLevel);

  const handleAccessChange = () => {
    props.onChangeAccess(newAccessLevel);
  };

  return (
    <div>
      <h2>Access Control</h2>
      <label>Select Access Level:</label>
      <select
        value={newAccessLevel}
        onChange={(e) => setNewAccessLevel(e.target.value)}
      >
        <option value="public">Public</option>
        <option value="private">Private</option>
        <option value="restricted">Restricted</option>
      </select>
      <button onClick={handleAccessChange}>Change Access</button>
    </div>
  );
};

//79

const Workflow = (props) => {
  return (
    <div>
      <h2>Content Workflow</h2>
      <p>Current Step: {props.currentStep}</p>
      <button onClick={props.onPrevStep}>Previous Step</button>
      <button onClick={props.onNextStep}>Next Step</button>
    </div>
  );
};

//80

const DataExport = (props) => {
  const handleExport = () => {
    props.onDataExport();
  };

  return (
    <div>
      <h2>Data Export</h2>
      <button onClick={handleExport}>Export Data</button>
    </div>
  );
};

//81

const ContentTagging = (props) => {
  const [newTag, setNewTag] = useState('');

  const handleAddTag = () => {
    props.onTag(newTag);
    setNewTag('');
  };

  return (
    <div>
      <h2>Content Tagging</h2>
      <ul>
        {props.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Enter a tag"
        value={newTag}
        onChange={(e) => setNewTag(e.target.value)}
      />
      <button onClick={handleAddTag}>Add Tag</button>
    </div>
  );
};

//82

const PollsAndSurveys = (props) => {
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (questionIndex, answer) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answer;
    setAnswers(newAnswers);
    props.onAnswer(newAnswers);
  };

  return (
    <div>
      <h2>Polls and Surveys</h2>
      {props.questions.map((question, index) => (
        <div key={index}>
          <p>{question}</p>
          <input
            type="text"
            placeholder="Your answer"
            value={answers[index] || ''}
            onChange={(e) => handleAnswer(index, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

//83

const ContentReviews = (props) => {
  const [newReview, setNewReview] = useState('');

  const handleAddReview = () => {
    props.onReview(newReview);
    setNewReview('');
  };

  return (
    <div>
      <h2>Content Reviews</h2>
      <ul>
        {props.reviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>
      <textarea
        placeholder="Write a review"
        value={newReview}
        onChange={(e) => setNewReview(e.target.value)}
      />
      <button onClick={handleAddReview}>Add Review</button>
    </div>
  );
};

//84

const ContentLicensing = (props) => {
  const [selectedLicense, setSelectedLicense] = useState('');

  const handleLicenseChange = () => {
    props.onLicenseChange(selectedLicense);
  };

  return (
    <div>
      <h2>Content Licensing</h2>
      <label>Select License:</label>
      <select
        value={selectedLicense}
        onChange={(e) => setSelectedLicense(e.target.value)}
      >
        {props.licenses.map((license) => (
          <option key={license} value={license}>
            {license}
          </option>
        ))}
      </select>
      <button onClick={handleLicenseChange}>Change License</button>
    </div>
  );
};

//85
/*

const ContentAnalytics = (props) => {

  return (
    <div>
      <h2>Content Analytics</h2>
      <p>Views: {props.analyticsData.views}</p>
      <p>Likes: {props.analyticsData.likes}</p>
      <p>Shares: {props.analyticsData.shares}</p>
    </div>
  );
}

 */

//86
/*

const RevisionHistory = (props) => {

  return (
    <div>
      <h2>Revision History</h2>
      <ul>
        {props.revisions.map((revision, index) => (
          <li key={index}>
            <button onClick={() => props.onSelectRevision(revision)}>
              Revision {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}


 */

//87

const ExportAsPDF = (props) => {
  const handleExportPDF = () => {
    props.onExportPDF();
  };

  return (
    <div>
      <h2>Export as PDF</h2>
      <button onClick={handleExportPDF}>Export as PDF</button>
    </div>
  );
};

//88

const ShareContent = (props) => {
  const handleShare = () => {
    props.onShare();
  };

  return (
    <div>
      <h2>Share Content</h2>
      <button onClick={handleShare}>Share</button>
    </div>
  );
};

//89

const ContentEmbed = (props) => {
  const [embedCode, setEmbedCode] = useState('');

  const handleEmbed = () => {
    props.onEmbed(embedCode);
    setEmbedCode('');
  };

  return (
    <div>
      <h2>Embed Content</h2>
      <textarea
        placeholder="Paste embed code here"
        value={embedCode}
        onChange={(e) => setEmbedCode(e.target.value)}
      />
      <button onClick={handleEmbed}>Embed</button>
    </div>
  );
};

//90
/*

const ContentLocalization = (props) => {

  const [selectedLanguage, setSelectedLanguage] = useState('');


  const handleLanguageChange = () => {

    props.onLanguageChange(selectedLanguage);
  };


  return (
    <div>
      <h2>Content Localization</h2>
      <label>Select Language:</label>
      <select
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
        >
        {props.languages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
      <button onClick={handleLanguageChange}>Change Language</button>
    </div>
  );
}

 */

//91

const ContentNotification = (props) => {
  const [newNotification, setNewNotification] = useState('');

  const handleAddNotification = () => {
    props.onNotification(newNotification);
    setNewNotification('');
  };

  return (
    <div>
      <h2>Content Notifications</h2>
      <ul>
        {props.notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add a notification"
        value={newNotification}
        onChange={(e) => setNewNotification(e.target.value)}
      />
      <button onClick={handleAddNotification}>Add Notification</button>
    </div>
  );
};

//92

const ContentPolling = (props) => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handleAnswerChange = (questionIndex, answer) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = answer;
    setSelectedAnswers(newAnswers);
  };

  const handleSubmitPoll = () => {
    props.onPollSubmit(selectedAnswers);
  };

  return (
    <div>
      <h2>Content Polling</h2>
      {props.pollQuestions.map((question, index) => (
        <div key={index}>
          <p>{question}</p>
          <input
            type="text"
            placeholder="Your answer"
            value={selectedAnswers[index] || ''}
            onChange={(e) => handleAnswerChange(index, e.target.value)}
          />
        </div>
      ))}
      <button onClick={handleSubmitPoll}>Submit Poll</button>
    </div>
  );
};

//93
/*

const ContentCommenting = (props) => {

  const [newComment, setNewComment] = useState('');


  const handleAddComment = () => {

    props.onComment(newComment);
    setNewComment('');
  };


  return (
    <div>
      <h2>Content Commenting</h2>
      <ul>
        {props.comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <textarea
        placeholder="Add a comment"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        />
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
}


 */

//94
/*

const VersionControl = (props) => {

  const [selectedVersion, setSelectedVersion] = useState('');


  const handleVersionSelect = () => {

    props.onSelectVersion(selectedVersion);
  };


  return (
    <div>
      <h2>Version Control</h2>
      <label>Select Version:</label>
      <select
        value={selectedVersion}
        onChange={(e) => setSelectedVersion(e.target.value)}
        >
        {props.versions.map((version) => (
          <option key={version} value={version}>
            {version}
          </option>
        ))}
      </select>
      <button onClick={handleVersionSelect}>Select Version</button>
    </div>
  );
}


 */

//95

const NotificationSubscriptions = (props) => {
  const [selectedSubscription, setSelectedSubscription] = useState('');

  const handleToggleSubscription = () => {
    props.onSubscriptionToggle(selectedSubscription);
  };

  return (
    <div>
      <h2>Notification Subscriptions</h2>
      <label>Select Subscription:</label>
      <select
        value={selectedSubscription}
        onChange={(e) => setSelectedSubscription(e.target.value)}
      >
        {props.subscriptions.map((subscription) => (
          <option key={subscription} value={subscription}>
            {subscription}
          </option>
        ))}
      </select>
      <button onClick={handleToggleSubscription}>Toggle Subscription</button>
    </div>
  );
};

//96

const UserPermissions = (props) => {
  const [selectedRole, setSelectedRole] = useState('');

  const handlePermissionChange = () => {
    props.onPermissionChange(selectedRole);
  };

  return (
    <div>
      <h2>User Permissions</h2>
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

//97

const SEOSettings = (props) => {
  const [newTitle, setNewTitle] = useState(props.title);
  const [newDescription, setNewDescription] = useState(props.description);

  const handleSEOChange = () => {
    props.onSEOChange(newTitle, newDescription);
  };

  return (
    <div>
      <h2>SEO Settings</h2>
      <label>Title:</label>
      <input
        type="text"
        placeholder="Enter title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <label>Description:</label>
      <input
        type="text"
        placeholder="Enter description"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <button onClick={handleSEOChange}>Update SEO</button>
    </div>
  );
};

//98

const ContentTrash = (props) => {
  const handleRestore = () => {
    props.onRestore();
  };

  const handleDelete = () => {
    props.onDelete();
  };

  return (
    <div>
      <h2>Trash</h2>
      <button onClick={handleRestore}>Restore Content</button>
      <button onClick={handleDelete}>Delete Permanently</button>
    </div>
  );
};

//99

const ContentPublishing = (props) => {
  const handlePublishToggle = () => {
    props.onPublishToggle(!props.isPublished);
  };

  return (
    <div>
      <h2>Content Publishing</h2>
      <p>Status: {props.isPublished ? 'Published' : 'Draft'}</p>
      <button onClick={handlePublishToggle}>
        {props.isPublished ? 'Unpublish' : 'Publish'}
      </button>
    </div>
  );
};

//100

const UserTracking = (props) => {
  const handleTrackingToggle = () => {
    props.onTrackingToggle(!props.trackUser);
  };

  return (
    <div>
      <h2>User Tracking</h2>
      <p>Tracking: {props.trackUser ? 'Enabled' : 'Disabled'}</p>
      <button onClick={handleTrackingToggle}>
        {props.trackUser ? 'Disable Tracking' : 'Enable Tracking'}
      </button>
    </div>
  );
};

///// seo components
//101

const SEOComponent = (props) => {
  useEffect(() => {
    // Update page title
    props.document.title = props.title;
    // Update meta description
    const metaDescription = props.document.querySelector(
      'meta[name="description"]'
    );

    if (metaDescription) {
      metaDescription.content = props.description;
    } else {
      const newMeta = props.document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = props.description;
      props.document.head.appendChild(newMeta);
    }
  }, [props.title, props.description]);

  return null;
};

//102
/*

const App = () => {
  return (
    <div className="app">
      <SEOComponent title="My Page Title" description="This is my page description." />
      { */
/* Rest of your app */ /*
}
    </div>
  );
};



 */

///cms component
// Sample data for articles
//103

const sampleArticles = [
  {
    id: 1,
    title: 'Getting Started with React',
    content: 'Learn the basics of React...',
  },
  {
    id: 2,
    title: 'Advanced CSS Techniques',
    content: 'Explore CSS animations and flexbox...',
  },
  // Add more articles here
];
/*

const CMSComponent = () => {

  const [articles, setArticles] = useState(sampleArticles);

  const [currentArticle, setCurrentArticle] = useState(null);

  const handleArticleClick = (article) => {
    setCurrentArticle(article);
  };

  const handleAddArticle = () => {
    const newArticle = { id: Date.now(), title: 'New Article', content: 'Edit the content...' };
    setArticles([...articles, newArticle]);
    setCurrentArticle(newArticle);
  };

  const handleUpdateArticle = (updatedArticle) => {
    const updatedArticles = articles.map(article =>
      article.id === updatedArticle.id ? updatedArticle : article
    );
    setArticles(updatedArticles);
    setCurrentArticle(null);
  };
  const handleDeleteArticle = (articleId) => {

    const filteredArticles = articles.filter(article => article.id !== articleId);
    setArticles(filteredArticles);
    setCurrentArticle(null);
  };

  return (
    <div className="cms-container">
      <div className="article-list">
        <h2>Article List</h2>
        <ul>
          {articles.map(article => (
            <li key={article.id} onClick={() => handleArticleClick(article)}>
              {article.title}
            </li>
          ))}
        </ul>
        <button onClick={handleAddArticle}>Add Article</button>
      </div>
      <div className="article-details">
        {currentArticle ? (
          <div>
            <h2>{currentArticle.title}</h2>
            <p>{currentArticle.content}</p>
            <button onClick={() => handleUpdateArticle({ ...currentArticle, title: 'Updated Title'
            })}>Update</button>
            <button onClick={() => handleDeleteArticle(currentArticle.id)}>Delete</button>
          </div>
          ) : (
          <p>Select an article to view details</p>
          )}
      </div>
    </div>
  );
};

 */

export {
  //CMSComponent,
  FileUploader,
  //handleFilesUpload,
  ContentEditor,
  NavigationMenu,
  UserProfile,
  //SEOTools,
  UserManagement,
  ContentVersioning,
  Comments,
  AnalyticsIntegration,
  WorkflowAndApproval,
  FormBuilder,
  MultilingualSupport,
  ContentImportExport,
  ThemeManagement,
  BackupRestore,
  ThirdPartyIntegration,
  AccessibilityFeatures,
  ErrorHandling,
  UserActivityTracking,
  ContentArchiving,
  //ContentSharing,
  RSSFeeds,
  CustomFields,
  ContentActivity,
  CommentModeration,
  EmailNotification,
  ContentLocking,
  UserPreferences,
  ContentRevisions,
  ContentApprovalWorkflow,
  UserAccessControl,
  ContentPreview,
  ContentExpiration,
  ContentLocalization,
  AdvancedContentImportExport,
  ContentHistory,
  VersionControl,
  TranslationManagement,
  ContentPermissions,
  ContentAnalytics,
  ContentRecommendations,
  ContentExportOptions,
  ContentGeolocation,
  ContentSearch,
  WorkflowStatus,
  ApprovalHistory,
  ContentCollaboration,
  ContentSubscription,
  ContentAccessibility,
  ContentFeedback,
  ContentSEO,
  ContentTags,
  ContentPerformanceMetrics,
  ContentExportHistory,
  ContentCategorization,
  ContentCommenting,
  ContentSecurity,
  ABTesting,
  ContentUserRatings,
  ContentScheduling,
  UserProfiles,
  SocialSharing,
  CommentsModeration,
  ContentTranslation,
  RevisionHistory,
  //AnalyticsCharts,
  UserActivityFeed,
  RelatedArticles,
  VersionComparison,
  ContentPersonalization,
  //ContentCollaboration,
  SocialComments,
  //UserActivityTracking,
  ContentDuplication,
  PublishSettings,
  SEOOptimization,
  //ContentPreview,
  //ContentSubscription,
  ContentCategories,
  Workflow,
  DataExport,
  ContentTagging,
  PollsAndSurveys,
  ContentReviews,
  ContentLicensing,
  //ContentAnalytics,
  //RevisionHistory,
  ExportAsPDF,
  ShareContent,
  ContentEmbed,
  //ContentLocalization,
  ContentNotification,
  ContentPolling,
  //ContentCommenting,
  //VersionControl,
  NotificationSubscriptions,
  UserPermissions,
  SEOSettings,
  ContentTrash,
  ContentPublishing,
  UserTracking,
  SEOComponent,
  //CMSComponent
};
