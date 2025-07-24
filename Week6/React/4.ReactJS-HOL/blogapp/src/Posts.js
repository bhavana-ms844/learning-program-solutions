import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false,
    };
  }

  // Step 6: Load posts using Fetch API
  loadPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ posts: data });
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        this.setState({ hasError: true });
      });
  };

  // Step 7: Lifecycle method - componentDidMount
  componentDidMount() {
    this.loadPosts();
  }

  // Step 9: Lifecycle method - componentDidCatch
  componentDidCatch(error, info) {
    alert("An error occurred in the Posts component.");
    console.error("Error caught in componentDidCatch:", error, info);
    this.setState({ hasError: true });
  }

  // Step 8: Render method
  render() {
    if (this.state.hasError) {
      return <h1 style={{ color: 'red' }}>Something went wrong.</h1>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>
        {this.state.posts.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
