import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Spinner} from './Spinner';
import { css } from '@emotion/core'
/** @jsx jsx */ import { jsx } from '@emotion/core';

const Loader = ({text, disableSpinner, ...rest}) => {
  return (
    <div css={{
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      zIndex: '10',
      backgroundColor: 'rgba(255,255,255,.8)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}
     {...rest}
    >
      
      <React.Fragment>
        {disableSpinner ||
          <div name='loadingSpinner' css={{
            position: 'fixed',
            top: '50%',
            marginTop:'-32px'
          }}>
            <Spinner/>
          </div>
        }
        {text &&
          <div css={{
            color: '#000000',
            fontSize: '32px',
            position: 'fixed',
            top: '50%',
            marginTop: '32px'
          }}>{text}</div>
        }
      </React.Fragment>
    </div>
  )
};

function loadable(WrappedComponent) {
  return class extends Component {
    static propTypes = {
      loading: PropTypes.bool,
      loadingText: PropTypes.string,
      disableSpinner: PropTypes.bool,
    };

    static defaultProps = {
      loading: false,
      loadingText: null,
      disableSpinner: false,
      className: '',
    };

    static getDerivedStateFromProps(props, state) {
      return {
        ...state,
        loading: props.loading,
        loadingText: props.loadingText,
        disableSpinner: props.disableSpinner,
      }
    }

    constructor(props) {
      super(props);

      this.state = {}
    }

    handleStartLoading(loadingText = null) {
      this.setState({
        loading: true,
        loadingText,
      })
    }

    handleEndLoading() {
      this.setState({
        loading: false,
        loadingText: null,
      })
    }

    render() {
      const passedProps = {
        handleStartLoading: this.handleStartLoading.bind(this),
        handleEndLoading: this.handleEndLoading.bind(this),
      };
      const loadingClassForWrapped = css`
        opacity: 0.2;
      `;

      return (
        <div css={{
            position: 'relative'
          }}>
          <WrappedComponent
            {...this.props}
            {...passedProps}
            className={this.state.loading ? loadingClassForWrapped : this.props.className}
          />
          {this.state.loading &&
          <Loader
            text={this.state.loadingText}
            disableSpinner={this.props.disableSpinner}
            name='loader'
            data-test='loader'
          />
          }
        </div>
      );

    }

  }
}

export default loadable;
