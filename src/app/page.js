import Image from 'next/image';
import {
  SimpleBanner,
  SaleBanner,
  FeatureComparisonBanner,
} from '../app/reusable-components/banners/banner-components.jsx';
import { RadioButton } from '../app/reusable-components/essential/essential-components.jsx';

const modalStyle1 = {
  position: 'fixed',
  top: '80%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: '500px',
  padding: '20px',

  boxShadow: '0 2px 10px rgba(0, 0, 0, 1)',
  borderRadius: '8px',
  zIndex: '1000',
};
const modalStyle3 = {
  position: 'fixed',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: '500px',
  padding: '20px',
  backgroundColor: 'red',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 1)',
  borderRadius: '8px',
  zIndex: '1000',
};

const strings = 'test';
const handleClick = null;
const race = ['hellow'];
const classes = ['hellow'];
const stats = ['hellow'];
const personality = ['hellow'];
const tst = [
  <SimpleBanner title={'it works'} description={'really wow'} />,
  <RadioButton onChange={handleClick} checked={false} label={strings} />,
  <RadioButton onChange={handleClick} checked={false} label={strings} />,
  'jester',
];
export default function Home() {
  return (
    <div>
      <div style={modalStyle1}></div>
      <div style={modalStyle3}>
        <FeatureComparisonBanner features={tst} />
      </div>
    </div>
  );
}
