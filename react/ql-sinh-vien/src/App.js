import './style/App.css';
import Seach from './componets/Search.component';
import Render from './componets/Render.component';
import Edit from './componets/Edit.componet';
import FormatDate from './componets/formatDate/formatDate';
import Learn from './learn/LearnJS.component';
import TicTacToe from './learn/tic';
import { useEffect, useState } from 'react';
import sinhVienList from './model/listUser';


function App() {
  const [listSV, setListSV] = useState(sinhVienList);
  const [listRender, setListRender] = useState(sinhVienList);
  useEffect(function () {
    setListRender(listSV)
  }, [listSV])

  return (
    <>
      {/* <h3 id="head">learnJS React</h3>
      <Learn ></Learn> */}
      {/* <TicTacToe /> */}
      <Seach />
      <Render listSV={listSV} setListSV={setListSV} />
      <Edit listSV={listSV} setListSV={setListSV} />
    </>

  )
}

export default App;
