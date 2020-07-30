import React from "react";
import { Loader } from "../components";
/**
 * HOC to handle loading states.
 * Returns passed component or loader component/message
 *
 * @param  {*} Component
 *             Component to be displayed if the loading is finished
 * 
 * @param  {*} Component
 *             Component to be displayed during Loading. Defaults to <Loader />
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
