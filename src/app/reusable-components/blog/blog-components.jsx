'use client';
/* 21 blog components
 */

import React from 'react';

// 1

const BlogPost = (props) => {
  return (
    <div className="blog-post">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <div className="post-details">
        <p>By {props.author}</p>
        <p>{props.date}</p>
      </div>
    </div>
  );
};

// 2

//import BlogPost from './BlogPost';
const BlogPostList = (props) => {
  return (
    <div className="blog-post-list">
      {props.posts.map((post) => (
        <BlogPost
          key={post.id}
          title={post.title}
          content={post.content}
          author={post.author}
          date={post.date}
        />
      ))}
    </div>
  );
};

// 3

const AuthorBio = (props) => {
  return (
    <div className="author-bio">
      <h3>About the Author</h3>
      <p>{props.authorName}</p>
      <p>{props.bio}</p>
    </div>
  );
};

// 4

const Comment = (props) => {
  return (
    <div className="comment">
      <p>{props.text}</p>
      <div className="comment-details">
        <p>By {props.author}</p>
        <p>{props.date}</p>
      </div>
    </div>
  );
};

// 5

//import Comment from './Comment';

const CommentSection = (props) => {
  return (
    <div className="comment-section">
      <h3>Comments</h3>
      {props.comments.map((comment) => (
        <Comment
          key={comment.id}
          author={comment.author}
          text={comment.text}
          date={comment.date}
        />
      ))}
    </div>
  );
};

// 6

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="category-list">
        <h3>Categories</h3>
        <ul>
          {props.categories.map((category) => (
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
      </div>
      <div className="recent-posts">
        <h3>Recent Posts</h3>
        <ul>
          {props.recentPosts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// 7

const BlogHeader = (props) => {
  return (
    <header className="blog-header">
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </header>
  );
};

// 8

const TagList = (props) => {
  return (
    <div className="tag-list">
      <h3>Tags</h3>
      <ul>
        {props.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

// 9

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (props) => {
    props.onSearch(searchTerm);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search blog posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

// 10

const Pagination = (props) => {
  const handlePageChange = (page) => {
    props.onPageChange(page);
  };

  return (
    <div className="pagination">
      {Array.from({ length: props.totalPages }, (_, index) => index + 1).map(
        (page) => (
          <button
            key={page}
            className={props.currentPage === page ? 'active' : ''}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        )
      )}
    </div>
  );
};

// 11

const FeaturedPosts = (props) => {
  return (
    <div className="featured-posts">
      <h2>Featured Posts</h2>
      {props.posts.map((post) => (
        <div className="featured-post" key={post.id}>
          <img src={post.imageUrl} alt={post.title} />
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

// 12

const SinglePageLayout = (props) => {
  return (
    <div className="single-page-layout">
      <h2>{props.title}</h2>
      <div className="page-content">{props.content}</div>
    </div>
  );
};

// 13

const PopularTags = (props) => {
  return (
    <div className="popular-tags">
      <h3>Popular Tags</h3>
      <ul>
        {props.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

// 14

const AuthorCard = (props) => {
  return (
    <div className="author-card">
      <img src={props.author.avatarUrl} alt={props.author.name} />
      <h3>{props.author.name}</h3>
      <p>{props.author.bio}</p>
    </div>
  );
};

// 15

const ArchiveList = (props) => {
  return (
    <div className="archive-list">
      <h3>Archives</h3>
      <ul>
        {props.archives.map((archive) => (
          <li key={archive.id}>
            {archive.month} {archive.year}
          </li>
        ))}
      </ul>
    </div>
  );
};

// 16

const RelatedPosts = (props) => {
  return (
    <div className="related-posts">
      <h2>Related Posts</h2>
      <div className="post-list">
        {props.relatedPosts.map((post) => (
          <div className="related-post" key={post.id}>
            <img src={post.imageUrl} alt={post.title} />
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// 17

const NewsletterSignup = () => {
  const [email, setEmail] = React.useState('');

  const handleSubscribe = () => {
    // Implement subscribe logic
    console.log(`Subscribed with email: ${email}`);
  };

  return (
    <div className="newsletter-signup">
      <h3>Subscribe to our Newsletter</h3>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubscribe}>Subscribe</button>
    </div>
  );
};

// 18
/*
const SocialMediaShare = ({ url, title }) => {
return (
<div className="social-media-share">
<h3>Share this post</h3>
<ul>
<li>
<a href={`https://facebook.com/sharer.php?u=${encodeURIComponent(url)}`}
target="_blank" rel="noopener noreferrer">
<i className="fab fa-facebook"></i>
</a>
</li>
<li>
<a
<href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text= {encodeURICom
ponent(title)}` }target="_blank" rel="noopener noreferrer" />
<i className="fab fa-twitter"></i>
</a>
</li>

</ul>
</div>
);
}

*/

/* Add more social media icons */

// 19

const FeaturedAuthor = (props) => {
  return (
    <div className="featured-author">
      <h2>Featured Author</h2>
      <img src={props.author.avatarUrl} alt={props.author.name} />
      <h3>{props.author.name}</h3>
      <p>{props.author.bio}</p>
    </div>
  );
};

// 20

const SearchResults = (props) => {
  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <ul>
        {props.results.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};

// 21

const ReadTime = (props) => {
  return (
    <div className="read-time">
      <p>Estimated reading time: {props.minutes} minutes</p>
    </div>
  );
};

export {
  BlogPost,
  BlogPostList,
  AuthorBio,
  Comment,
  CommentSection,
  Sidebar,
  BlogHeader,
  TagList,
  SearchBar,
  Pagination,
  FeaturedPosts,
  SinglePageLayout,
  PopularTags,
  AuthorCard,
  ArchiveList,
  RelatedPosts,
  NewsletterSignup,
  //SocialMediaShare,
  FeaturedAuthor,
  SearchResults,
  ReadTime,
};
