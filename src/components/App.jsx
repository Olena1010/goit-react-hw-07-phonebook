
import {
  BookForm,
  NewContactBtn,
  CloseModalBtn,
  Filter,
  ContactList,
} from 'components';
import Modal from './Modal/Modal';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './Container';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';


export const App = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <Container>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <NewContactBtn showModal={toggleModal} />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
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