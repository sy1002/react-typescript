import React from 'react';
import styles from './Button.module.css';
import classNames from "classnames/bind";
import styled, {keyframes , css} from "styled-components";

function Button(props) {
    const cx = classNames.bind(styles);
    const isActive = false;

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(event);
        console.log('Button clicked!');
    }

    const boxShadowMixin = css`
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
    `;

    const fadeIn = keyframes`
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    `;

    const Title = styled.h1<{ $color : string; $decoration:string}>`
        color: ${(props) => props.$color || 'black'};
        text-decoration: underline;
        animation: ${fadeIn} 2s ease-in-out;
        &:hover {
          color : pink;
         }
      `;

    const BigTitle = styled(Title)`
        font-size: 2em;
        font-weight: bold;
    `;

    const Wrapper = styled.section`
        padding: 20px;
        border: 1px solid #ccc;
      `;

    const BlueBorderWrapper = styled(Wrapper)<{$shadow : boolean}>`
        border-color: ${(props)=> props.theme.colors.danger};
        background-color: lightblue;
        ${props => props.$shadow && boxShadowMixin}
    `;


    return (
        <div>
            {/*상속 받은 Bigtitle 은 영향을 받지 못한다. */}
            {/*<BigTitle as='p'>Hello, Styled Components!</BigTitle>*/}
            <Title $color='lightblue' as='h3' title="...hello..." onClick={()=> {alert('hello!')}}>Hello, ReactJS! </Title>
            <BlueBorderWrapper $shadow={false}>
                <button onClick={(event) => handleClick(event)}>TEST</button>
                <button className={cx('btn')}>button</button>
                <button className={cx('btn', {'is-active' :isActive})}>Active Button</button>
            </BlueBorderWrapper>
        </div>
    );
}

export default Button;