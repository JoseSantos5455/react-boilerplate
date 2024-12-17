import React, { Component } from "react";

export default class ClassPosts extends Component {
  state = {
    posts: [],
    loading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const posts = await res.json();
      this.setState({ posts });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { posts, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <h2>Posts</h2>
        <div>
          {posts.map((post) => {
            const { id } = post;
            return (
              <div key={id}>
                <div>Post Id: {id} </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
