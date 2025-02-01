// components
import Header from './contactUs/Header';
import Email from './contactUs/Email';
import Call from './contactUs/Call';
import Cooperation from './contactUs/Cooperation';
// styles
import layout from './ui/layout.module.scss';

interface Props {}

const HomePage = (props: Props) => {
  return (
    <div>
      <Header/>
      <div className={layout.container}>
        <Email/>
        <Call/>
        <Cooperation/>
      </div>
    </div>
  );
};

export default HomePage;
