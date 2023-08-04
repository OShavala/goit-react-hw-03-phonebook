import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Section } from './Section/Section';
import { Container } from './App.styled';
import { Phonebook } from './ContactForm/ContactForm';

import  ContactList  from './ContactList/ContactList';

import { Filter } from './ContactFilter/ContactFilter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

 
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    if (parseContacts?.length) {
      this.setState({ contacts: parseContacts });
      return;
    }
    this.setState({ contacts: this.state.contacts });
  }

 
  componentDidUpdate(prevState, prevProps) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;
    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  
  addContact = ({ name, number }) => {
    const { contacts } = this.state;

   
    const checkName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (checkName) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contact = {
      id: nanoid(3),
      name,
      number,
    };

    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };


  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

 
  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = this.getFilteredContacts();

    const isContactsEmpty = contacts.length === 0;
    return (
      <Container>
        <Section title="Phonebook">
          <Phonebook onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          {!isContactsEmpty && (
            <>
              <Filter value={filter} onChange={this.changeFilter} />
              <ContactList
                contacts={filteredContacts}
                onDeleteContact={this.deleteContact}
              />
            </>
          )}
          {isContactsEmpty && <p>There are no contacts yet</p>}
        </Section>
      </Container>
    );
  }
}



