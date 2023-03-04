import * as React from 'react';
import { Button } from './styles';
import Smile from '../../img/icon_smile.png'

interface ButtonHappyProps {
    onClick: () => void;
  }

export default class ButtonHappy extends React.Component<ButtonHappyProps> {
    render() {
        const { onClick } = this.props;
        return (
            <Button onClick={onClick}><img src={Smile} alt="Smile"/></Button>
        )
    }
}