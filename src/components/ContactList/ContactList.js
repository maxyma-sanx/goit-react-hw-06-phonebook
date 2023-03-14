import { FaTrashAlt, FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getFilteredContacts } from 'redux/selectors';

import {
  ListIcon,
  ListBtn,
  ContactsTable,
  ContactsTableHead,
  ContactsTableRow,
  ContactsTableCeil,
  ContactsFlexCeil,
} from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  return (
    <ContactsTable>
      <thead>
        <tr>
          <ContactsTableHead>Name</ContactsTableHead>
          <ContactsTableHead>Phone number</ContactsTableHead>
          <ContactsTableHead>Contacts ({contacts.length})</ContactsTableHead>
        </tr>
      </thead>

      <tbody>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactsTableRow key={id}>
              <ContactsFlexCeil>
                <ListIcon>
                  <FaUser size="20" color="white" />
                </ListIcon>
                {name}
              </ContactsFlexCeil>
              <ContactsTableCeil>{number}</ContactsTableCeil>
              <ContactsTableCeil>
                <ListBtn
                  type="button"
                  onClick={() => dispatch(deleteContact(id))}
                >
                  <FaTrashAlt size="20" />
                </ListBtn>
              </ContactsTableCeil>
            </ContactsTableRow>
          );
        })}
      </tbody>
    </ContactsTable>
  );
};
