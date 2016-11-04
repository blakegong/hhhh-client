/**
 * Created by gongy on 4/11/16.
 */

import React, { Component } from 'react';

/***
 * Created by Chris Yang
 *
 * Modified by Yue Gong
 *
 * HOC to help the component enable lifecycle hooks
 *
 * if a component needs to dispatch action during lifecycle, pass them in an array in the props
 *
 * @param ToBeWrappedComponent
 * @returns {WrappedLifecycleComponent}
 * @constructor
 */
export default function withLifecycle (ToBeWrappedComponent) {
  return class WrappedLifecycleComponent extends Component {

    componentWillMount () {
      const { onWillMount } = this.props;
      if (onWillMount && Array.isArray(onWillMount)) {
        onWillMount.forEach((cb) => cb(this.props));
      }
    }

    componentDidMount () {
      const { onDidMount } = this.props;
      if (onDidMount && Array.isArray(onDidMount)) {
        onDidMount.forEach((cb) => cb(this.props));
      }
    }

    componentWillReceiveProps (nextProps) {
      const { onWillReceiveProps } = this.props;
      if (onWillReceiveProps && Array.isArray(onWillReceiveProps)) {
        onWillReceiveProps.forEach((cb) => cb(nextProps, this.props));
      }
    }

    componentWillUpdate (nextProps, nextState) {
      const { onWillUpdate } = this.props;
      if (onWillUpdate && Array.isArray(onWillUpdate)) {
        onWillUpdate.forEach((cb) => cb(nextProps, nextState, this.props));
      }
    }

    componentDidUpdate (prevProps, prevState) {
      const { onDidUpdate } = this.props;
      if (onDidUpdate && Array.isArray(onDidUpdate)) {
        onDidUpdate.forEach((cb) => cb(prevProps, prevState, this.props));
      }
    }

    componentWillUnmount () {
      const { onWillUnmount } = this.props;
      if (onWillUnmount && Array.isArray(onWillUnmount)) {
        onWillUnmount.forEach((cb) => cb(this.props));
      }
    }

    render () {
      return <ToBeWrappedComponent {...this.props} />
    }
  }
}
