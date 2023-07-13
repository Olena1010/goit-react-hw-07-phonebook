import { BsFillPersonFill } from 'react-icons/bs';
import { Item, List, DeleteButton } from './ContactList.style';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { useContacts } from 'hooks/useContacts';

export const ContactList = () => {
   const dispatch = useDispatch();
   const contacts = useContacts();

  return (
    <List>
      {contacts.map(contact => {
        return (
          <Item key={contact.id}>
            <div>
              <BsFillPersonFill />
              <span>{contact.name}:</span>
              <span>{contact.number}</span>
            </div>
            <DeleteButton
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </DeleteButton>
          </Item>
        );
      })}
    </List>
  );
};
