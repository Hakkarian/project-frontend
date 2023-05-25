import { useState } from 'react';
import {
  BlackTitle,
  ContactFormCss,
  CreateButtonCss,
} from './ContactForm.styled';
import {

  CenterHorizontalCss,
} from 'components/App/App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/tasks/cont-selectors';
import { fetchAddContacts } from 'redux/tasks/taskoperations';
import { InputCss } from 'shared/components/Password/Password.styled';
import fields from 'shared/utils/fields';
import { toast } from 'react-hot-toast';

const ContactForm = () => {
  const contacts = useSelector(selectAllContacts);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const { name, email, phone } = state;
  const payload = {
    name: name,
    email: email,
    phone: phone
  };

  // const contacts = useSelector(selectAllContacts);

  const handleInputChange = e =>
    setState({ ...state, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();

    for (let contact of contacts) {
      if (contact.email.toLowerCase() === email.toLowerCase()) {
        toast(`${contact.email} is already in contacts`, {
          icon: '❕',
          style: {
            borderRadius: '10px',
            background: 'blue',
            color: '#fff',
          },
        });
        return;
      }
      if (contact.phone.toLowerCase() === phone.toLowerCase()) {
        toast(`${contact.phone} is already in contacts`, {
          icon: '❕',
          style: {
            borderRadius: '10px',
            background: 'blue',
            color: '#fff',
          },
        });
        return;
      }
    }
    dispatch(fetchAddContacts(payload));
    toast('A contact was created succefully!', {
      icon: '✔️',
      style: {
        borderRadius: '10px',
        background: 'black',
        color: '#fff',
      },
    });
    reset();
  };
  const reset = () => {
    return setState({ name: '', email: '', phone: '' });
  };

  return (
    <CenterHorizontalCss>
      <ContactFormCss onSubmit={handleSubmit}>
        <BlackTitle>Enter your contact</BlackTitle>
        <InputCss
          {...fields.contact}
          onChange={handleInputChange}
          value={name}
        />
        <InputCss
          {...fields.email}
          onChange={handleInputChange}
          value={email}
        />
        <InputCss
          {...fields.phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          onChange={handleInputChange}
          value={phone}
        />
        <CreateButtonCss type="submit">Add to contact</CreateButtonCss>
      </ContactFormCss>
    </CenterHorizontalCss>
  );
};

export default ContactForm;

// class ContactForm extends Component {
//     state = {
//         name: '',
//         number: ''
//     }
//     handleInputChange = e => this.setState(({ [e.currentTarget.name]: e.currentTarget.value }));
//     handleSubmit = e => {
//       const { name, number } = this.state;
//       e.preventDefault();

//       for (let contact of this.props.contacts) {
//       if (contact.name.toLowerCase() === this.state.name.toLowerCase()) {
//         alert(`${contact.name} is already in contacts`);
//         return;
//         }
//         if (contact.number.toLowerCase() === this.state.number.toLowerCase()) {
//           alert(`${contact.number} is already in contacts`);
//           return;
//         }
//     }
//       this.reset();
//       return this.props.onSubmit(name, number);
//   }
//   reset() {
//     return this.setState({name: '', number: ''})
//   }
//     render() {
//         return (
//           <ContactFormCss onSubmit={this.handleSubmit}>
//             <ContactLabelCss>
//               {" "}
//               Name:{" "}
//               <input
//                 type="text"
//                 name="name"
//                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                 onChange={this.handleInputChange}
//                 value={this.state.name}
//                 required
//               />
//             </ContactLabelCss>
//             <ContactLabelCss>
//               {" "}
//               Phone:{" "}
//               <input
//                 type="tel"
//                 name="number"
//                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                 onChange={this.handleInputChange}
//                 value={this.state.number}
//                 required
//               />
//             </ContactLabelCss>
//             <ButtonCss type="submit">Add to contact</ButtonCss>
//           </ContactFormCss>
//         );
//     }
// }
