import React, { Component } from "react";
import withFetch from "./hoc/withFetch";

class ClassComments extends Component {
  render() {
    const { data: comments, loading, error } = this.props;
    if (loading) {
      return <div>Loading Comments...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <h2>Comment</h2>
        <div>
          {comments?.map((comment) => {
            const { id, email } = comment;
            return (
              <div key={id}>
                <div>Commenter email: {email} </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withFetch(
  ClassComments,
  "https://jsonplaceholder.typicode.com/comments"
);
