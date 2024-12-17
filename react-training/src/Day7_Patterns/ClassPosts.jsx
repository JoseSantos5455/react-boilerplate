import React, { Component } from "react";
import withFetch from "./hoc/withFetch";

class ClassPosts extends Component {
  render() {
    const { data: posts, loading, error } = this.props;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <h2>Title</h2>
        <div>
          {posts?.map((post) => {
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

export default withFetch(
  ClassPosts,
  "https://jsonplaceholder.typicode.com/posts"
);
