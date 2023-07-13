import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './Container';
import { BookForm } from './BookForm/BookForm';
// import { Wrapper } from './BookForm/BookForm.styled';
import { ContactList } from './ContactList/ContactList';
import Modal from './Modal/Modal';
import { NewContactBtn } from './NewContButton/NewContButton';
import { CloseModalBtn } from './CloseModalButton/CloseModalButton';
import { Filter } from './Filter/Filter';


export const App = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Container>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <NewContactBtn showModal={toggleModal} />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      {showModal && (
        <Modal onClose={toggleModal}>
          <CloseModalBtn closeModal={toggleModal} />
          <BookForm closeModal={toggleModal} />
        </Modal>
      )}
    </Container>
  );
};