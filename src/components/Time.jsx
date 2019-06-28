import * as React from "react";
import { connect } from "react-redux";
import { getTime } from "../js/actions/index";

class Time extends React.Component {
  componentDidMount() {
    this.props.getTime();
  }

  render() {
    const { unix, date, time, tzoffset } = this.props.timestamp;
    return (
      <div>
        <p>Unix: {unix}</p>
        <p>Date: {date}</p>
        <p>Time: {time}</p>
        <p>TZOffset: {tzoffset}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    timestamp: state.timestamp
  };
}

export default connect(
  mapStateToProps,
  { getTime }
)(Time);
