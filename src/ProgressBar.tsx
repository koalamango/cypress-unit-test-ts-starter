import React, { ReactElement } from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  text-transform: capitalize;
  max-width: 1020px;
  margin: 2rem auto;
  padding: 0 1.5rem;
`;

const List = styled.ul<{
  total?: number | false;
}>`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  font-size: 14px;

  ${(props) =>
    props.total &&
    css`
      li {
        width: ${100 / props.total}%;
      }
      li:last-child span:after {
        display: none;
      }
    `}
`;
const Bar = styled.span`
  border-radius: 50%;
  background-clip: padding-box;
  width: 20px;
  height: 20px;
  background-color: #fff;
  display: block;
  margin: 0 auto 0.5em auto;
  border: 3px solid #c6c6c6;
  text-indent: -999px;

  &:after {
    display: block;
    position: absolute;
    top: 8px;
    width: 100%;
    height: 3px;
    content: "";
    background-color: transparent;
    border-bottom: 3px solid #c6c6c6;
    left: 50%;
    margin-left: 10px;
  }
`;
const Tick = styled.span`
  display: block;
  transform: rotate(45deg);
  height: 11px;
  width: 7px;
  border-bottom: 2.5px solid #fff;
  border-right: 2.5px solid #fff;
  margin-top: 3.5px;
  margin-left: 6.5px;
`;

const Item = styled.li<{
  active: boolean;
  done: boolean;
}>`
  display: flex;
  flex-direction: column;
  position: relative;

  ${(props) =>
    props.active &&
    css`
      ${Bar} {
        border-color: #00b6ed;
      }
    `}
  ${(props) =>
    props.done &&
    css`
      ${Bar} {
        border: none;
        background-color: #00b6ed;
        &:after {
          border-bottom: 3px solid #00b6ed;
        }
      }
    `}
`;

type ProgressBarProps = {
  current: number;
  steps: string[];
  children?: ReactElement;
};

const ProgressBar = ({
  current,
  steps,
  children,
}: ProgressBarProps): ReactElement => {
  const totalSteps = Array.isArray(steps) && Object.keys(steps).length;
  return (
    <Wrapper>
      <List total={totalSteps}>
        {Array.isArray(steps) &&
          steps.map((step, i) => (
            <Item
              key={i}
              active={i + 1 === current}
              done={i + 1 < current || steps.length === current}
            >
              <Bar>
                {(i + 1 < current || steps.length === current) && <Tick />}
              </Bar>
              {step}
            </Item>
          ))}
      </List>
      {children}
    </Wrapper>
  );
};

ProgressBar.defaultProps = {
  current: 1,
};

export default ProgressBar;
