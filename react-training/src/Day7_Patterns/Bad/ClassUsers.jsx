import React, { Component } from "react";

export default class ClassUsers extends Component {
  state = {
    users: [],
    loading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await res.json();
      this.setState({ users });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { users, loading, error } = this.state;
    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <h2>Users</h2>
        <div>
          {users.map((user) => {
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
