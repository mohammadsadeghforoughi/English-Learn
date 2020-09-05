import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { testAction } from "../../actions/test";

function TestComponent(props) {
  React.useEffect(() => {
    props.testAction();
  }, []);

  return <div>test redux action</div>;
}

const TestComponentConnect = connect(
  (state) => {
    return {};
  },
  { testAction }
)(TestComponent);
export default TestComponentConnect;
