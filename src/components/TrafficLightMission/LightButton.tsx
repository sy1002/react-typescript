import React, { useMemo } from 'react';
import styled, { keyframes, css } from 'styled-components';

interface LightButtonProps {
    color: string;
    onClick: () => void;
}

// ✅ 공통 라이트 스타일
const Light = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
`;

// ✅ 동적 애니메이션 스타일 함수
const getAnimation = (color: string) => {
    let baseColor, shadowColor, dimColor;

    switch (color) {
        case 'red':
            baseColor = '#ff0000';
            shadowColor = '#ff3333';
            dimColor = '#b30000';
            break;
        case 'yellow':
            baseColor = '#ffff00';
            shadowColor = '#ffff33';
            dimColor = '#b2b300';
            break;
        case 'green':
            baseColor = '#00ff00';
            shadowColor = '#33ff33';
            dimColor = '#00b300';
            break;
        default:
            return null;
    }

    return keyframes`
    0% {
      background-color: ${baseColor};
      box-shadow: 0 0 6em ${shadowColor};
    }
    50% {
      background-color: ${dimColor};
      box-shadow: 0 0 0em transparent;
    }
  `;
};

// ✅ 컬러 적용 컴포넌트
const ColorStyle = styled(Light)<{ $color: string; $animation?: ReturnType<typeof keyframes> }>`
  background-color: ${props => props.$color};
  box-shadow: 0 0 20px ${props => props.$color};

  &:hover {
    ${({ $animation }) =>
    $animation &&
    css`
        animation: ${$animation} 1s infinite;
      `}
  }
  
    &:active {

    }
`;

function LightButton(props: LightButtonProps) {
    const { color, onClick } = props;

    // 애니메이션은 렌더링 최적화를 위해 useMemo 사용
    const animation = useMemo(() => getAnimation(color), [color]);

    return (
        <ColorStyle $color={color} $animation={animation} onClick={onClick}>
            {color}
        </ColorStyle>
    );
}

export default LightButton;
