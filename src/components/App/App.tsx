import { useState, useEffect } from 'react';
import './App.css';
import Header from '../Header/Header';
import {
  Section,
  Container,
  Image,
  Heading,
  Bold,
  Description,
} from './styles';
import EmailForm from '../EmailForm/EmailForm';

const App = () => {
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 600px)').matches
  );

  useEffect(() => {
    window
      .matchMedia('(min-width: 600px)')
      .addEventListener('change', (e) => setMatches(e.matches));
  }, []);

  return matches ? (
    <>
      <Header />
      <Section>
        <Container>
          <Heading>
            We're <Bold>Coming Soon</Bold>
          </Heading>
          <Description>
            Hello fellow shoppers! We're currenly building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </Description>
          <EmailForm />
        </Container>
      </Section>
    </>
  ) : (
    <Section>
      <Header />
      <Image />
      <Heading>
        We're <Bold>Coming Soon</Bold>
      </Heading>
      <Description>
        Hello fellow shoppers! We're currenly building our new fashion store.
        Add your email below to stay up-to-date with announcements and our
        launch deals.
      </Description>
      <EmailForm />
    </Section>
  );
};

export default App;
