import * as React from 'react';

import styled from '../helpers/styled';
export interface HelloProps {
    compiler: string;
    framework: string;
}

const Button = styled.button`
  padding: 32px;
  background-color: ${(props) => props.theme.colors.primary};
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;
export class Hello extends React.Component<HelloProps, {}> {
    buttonClicked() {
        window.alert('clicked');
    }

    render() {
        return <><h1>Hello from {this.props.compiler} and {this.props.framework}!</h1><Button onClick={this.buttonClicked}>Mah</Button></>;
    }
}
