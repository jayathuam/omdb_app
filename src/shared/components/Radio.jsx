import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import { colors, breakpoints } from "../../theme";

const RadioWrapper = styled.div`
  display: flex;
  cursor: pointer;
  user-select: none;
  align-items: center;
`;

const OuterCircle = styled.div`
  width: 12px;
  height: 12px;
  min-width: 12px;
  min-height: 12px;
  border: 2px solid ${colors.secondaryText};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  transition: all 0.1s linear;
`;

const InnerCircle = styled.div`
  width: ${({ unselected }) => (unselected ? "0px;" : "8px")};
  height: ${({ unselected }) => (unselected ? "0px;" : "8px")};
  border-radius: 50%;
  background-color: ${colors.secondaryText};
  transition: all 0.1s linear;
`;

const HelpText = styled.div`
  color: ${colors.secondaryText};
  padding-right: 20px;

  @media (max-width: ${breakpoints.mobile}) {
    padding-right: 10px;
  }
`;

const Radio = ({ selected, onChange, text, value, ...rest }) => {
  return (
    <RadioWrapper
      {...rest}
      onClick={() => {
        onChange(value);
      }}
    >
      <OuterCircle>
        <InnerCircle unselected={value !== selected} />
      </OuterCircle>
      <HelpText>{text}</HelpText>
    </RadioWrapper>
  );
};

Radio.propTypes = {
  selected: PropTypes.string,
  onChange: PropTypes.func,
  text: PropTypes.string,
  value: PropTypes.string,
};

export { Radio };
