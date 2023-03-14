import { Wrapper } from './Wrapper';
import { GlobalStyle } from './GlobalStyle';

import { Section } from './Section';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { Social } from './Social';

import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Wrapper>
      <Section title="Add contact" headerContent={<Social />}>
        <ContactForm />
      </Section>
      {contacts.length > 0 && (
        <Section title="Contacts" headerContent={<Filter />}>
          <ContactList />
        </Section>
      )}

      <GlobalStyle />
    </Wrapper>
  );
};
