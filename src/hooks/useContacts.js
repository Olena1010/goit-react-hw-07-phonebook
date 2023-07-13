import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

export const useContacts = () => useSelector(selectVisibleContacts);