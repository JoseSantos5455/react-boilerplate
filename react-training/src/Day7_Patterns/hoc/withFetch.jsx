// higher order function
// one definition: a function that takes another function as an argument, and/or returns another function
// and gives it some additional functionality

import React from "react";
// higher order component
// a function that takes a component as an argument
// returns a new component with some additional state and lifecycle logic

export default function withFetch(OldComponent, url) {
  return class NewComponent extends React.Component {
    state = {
      data: null,
      loading: false,
      error: null,
    };

    async componentDidMount() {
      this.setState({ loading: true });
      try {
        const res = await fetch(url);
        const data = await res.json();
        this.setState({ data });
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ loading: false });
      }
    }

    render() {
      const { data, loading, error } = this.state;
      return (
        <OldComponent
          data={data}
          loading={loading}
          error={error}
          {...this.props}
        />
      );
    }
  };
}
