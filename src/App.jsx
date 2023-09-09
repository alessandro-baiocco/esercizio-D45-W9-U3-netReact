import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyTopBar from "./components/MyTopBar.jsx";
import Header from "./components/MyHeader";
import MyFooter from "./components/MyFooter";
import MyHome from "./components/MyHome";
import ProfileNav from "./components/profile Page/ProfileNav";
import ProfileBody from "./components/profile Page/ProfileBody";
import SettingsNav from "./components/settings page/SettingsNav";
import SettingsBody from "./components/settings page/SettingsBody";
import MyCarousel from "./components/Mycarousel";

function App() {
  return (
    <>
      <MyTopBar />
      <Header />
      <MyHome />
      <MyFooter />
      {/* <ProfileNav />
      <ProfileBody /> */}
      {/* <SettingsNav />
      <SettingsBody /> */}
    </>
  );
}

export default App;
