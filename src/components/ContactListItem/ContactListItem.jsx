import React from 'react';

import PropTypes from 'prop-types';
import { ListItem, ItemWrapper, Button } from './ContactListItem.styled';

const ContactListItem = ({ id, name, number, onDeleteContact }) => (
  <ListItem key={id}>
    <ItemWrapper>
      <p>{name}: </p>
      <p>{number}</p>
    </ItemWrapper>
    <Button type="button" onClick={() => onDeleteContact(id)}>
     Delete
    </Button>
  </ListItem>
);

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactListItem;