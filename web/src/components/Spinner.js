import React from 'react';
import styled from '@emotion/styled';

const defaultSize = 64;

const SpinnerContainer = styled.div`
  display: inline-block;
  position: relative;
  width: ${props => props.size ? props.size : defaultSize}px;
  height: ${props => props.size ? props.size : defaultSize}px;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${props => (props.size ? props.size : defaultSize) * 51/64}px;
    height: ${props => (props.size ? props.size : defaultSize) * 51/64}px;
    margin: ${props => (props.size ? props.size : defaultSize) * 6/64}px;
    border: ${props => (props.size ? props.size : defaultSize) * 6/64}px solid #e0effa;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #000000 #E5E5E5 #E5E5E5 #E5E5E5;

    &::nth-child(1) {
      animation-delay: -1.45s;
    }

    @keyframes lds-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

export const Spinner = ({className, ...rest}) => (
  <SpinnerContainer
    name='spinner'
    className={className}
    {...rest}
  >
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </SpinnerContainer>
)
