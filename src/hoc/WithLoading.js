import React from "react";
import { Loader } from "../components";
import PropTypes from "prop-types";
/**
 * HOC to handle loading states.
 * Returns passed component or loader component/message
 *
 * @param  {*} Component
 *             Component to be displayed if the loading is finished
 *
 * @param  {*} LoaderComponent
 *             LoaderComponent to be displayed during Loading. Defaults to <Loader />
 *
 * @return {*} Component to be displayed or loader component
 *
 */

function WithLoading(Component, LoaderComponent = Loader) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <LoaderComponent {...props} />;
  };
}
export default WithLoading;

WithLoading.propTypes = {
  Component: PropTypes.node.isRequired,
  LoaderComponent: PropTypes.node,
};

WithLoading.defaultProps = {
  LoaderComponent: <Loader />,
};
