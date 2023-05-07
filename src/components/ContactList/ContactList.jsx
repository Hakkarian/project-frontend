import { useEffect } from 'react';
import { lazy } from 'react';
import { ContactUlCss, ContactItemCss } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/tasks/cont-selectors';
import { fetchAllContacts } from 'redux/tasks/taskoperations';

const ContactItem = lazy(() => import('./ContactItem'));

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <>

      <ContactUlCss>
        {contacts.map(({ _id, name, email, phone }) => (
          <ContactItemCss key={_id}>
            <ContactItem id={_id} name={name} email={email} phone={phone} />
          </ContactItemCss>
        ))}
      </ContactUlCss>
    </>
  );
};

export default ContactList;
