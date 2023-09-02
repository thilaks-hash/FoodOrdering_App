import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      count2: 2,
    };
  }
  render() {
    const { name, contact } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h2>{count}</h2>
        <h2>{count2}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Click
        </button>
        <h2>{name}</h2>
        <h3>{contact}</h3>
      </div>
    );
  }
}
export default UserClass;
