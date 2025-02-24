// components
// import Header from './contactUs/Header';
// import Email from './contactUs/Email';
// import Call from './contactUs/Call';
// import Cooperation from './contactUs/Cooperation';
// styles
import layout from './ui/layout.module.scss';

// -------------
// ABOUT
import Header from './aboutUs/Header'
import JoinUs from './aboutUs/JoinUs';
import Team from './aboutUs/Team';
import Technologies from './aboutUs/Technologies';
import ContactForm from './aboutUs/ContactForm';


interface Props {}

const HomePage = (props: Props) => {
  return (
    <div>
      <Header/>
      <JoinUs/>
      <Team/>
      <Technologies/>
      <div className={layout.container}>
        <ContactForm/>
      </div>

      {/*<div className={layout.container}>*/}
      {/*  <Email/>*/}
      {/*  <Call/>*/}
      {/*  <Cooperation/>*/}
      {/*</div>*/}
    </div>
  );
};

export default HomePage;
