import Style from './add.module.css';
import AddUrl from '../../components/add/addSong/addUrl';
import AddCard from '../../components/add/addCard/addCard';
import Dropzone from '../../components/add/dropzone/dropzone';
import AddName from '../../components/add/addName/addName';

export default function Add() {
  return (
    <div className={Style.add}>
      <AddName/>
      <AddUrl/>
      <AddCard/>
      <Dropzone/>
    </div>
  ); 
}