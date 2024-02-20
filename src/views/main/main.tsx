import MainSection from '../../components/main/main';
import NavBar from '../../components/navbar/navbar';
import SideBar from '../../components/sidebar/sidebar';
import Player from '../../components/player/player';
import './main.css';

export default function Main() {
  
  return (
    <div className='container'>
      <NavBar/>
      <SideBar/>
      <MainSection/>
      <Player/>
    </div>
  ); 
}