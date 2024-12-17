import React, { Component } from "react";

import withFetch from "./hoc/withFetch";
import withBorder from "./hoc/withBorder";

class ClassUsers extends Component {
  render() {
    const { data: users, loading, error, title } = this.props;
    console.log(this.props);
    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <h2>{title}</h2>
        <div>
          {users?.map((user) => {
            const { id, name } = user;
            return (
              <div key={id}>
                <div>User Id: {id} </div>
                <div>User Name: {name} </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

// potential HOC hell
export default withBorder(
  withFetch(ClassUsers, "https://jsonplaceholder.typicode.com/users"),
  "red"
);
