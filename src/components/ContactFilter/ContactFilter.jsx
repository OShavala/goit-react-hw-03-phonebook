import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from './ContactFilter.styled';

export const Filter = ({ value, onChange }) => (
  <Label>
    Find contact by name
    <Input type="text" value={value} onChange={onChange} />
  </Label>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
