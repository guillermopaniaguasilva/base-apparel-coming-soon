import './App.css';
import Header from '../Header/Header';
import { Image, Heading, Bold, Description } from './styles';
import EmailForm from '../EmailForm/EmailForm';

const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;
