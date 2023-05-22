import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Featured_Medical_Center from './components/Featured_Medical_Center/Featured_Medical_Center'; 
import Medical_Tourism_Guide from './components/Medical_Tourism_Guide/Medical_Tourism_Guide';
import Featured_Destination from './components/Featured_Destination/Featured_Destination';
import Testimonials from './components/Testimonials/Testimonials';
import Global_Provider from './components/Global_Provider/Global_Provider';
import Latest_Announcement from './components/Latest_Announcement/Latest_Announcement';
import Footer from './components/Footer/Footer';
import Sign_Up from './components/Sign_Up/Sign_Up';
import Sign_In from './components/Sign_In/Sign_In';
import Otp from './components/Otp/Otp';


function App() {
  return (
    <div className="App">
      <Header />
      <Featured_Medical_Center />
      <Medical_Tourism_Guide />
      <Featured_Destination />
      <Testimonials />
      <Global_Provider />
      <Latest_Announcement />
      <Footer />
      <Sign_Up />
      <Otp />
      <Sign_In />
    </div>
  );
}

export default App;
