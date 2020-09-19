import React, {useState} from 'react';
import styles from './SearchTabs.module.scss';

function SearchTabs() {

  const [stateVar, setState] = useState({
      activeObject: null,
      listArr: [
        {
          id: 0,
          text: "всі",
        },
        {
          id: 1,
          text: "нові",
        },
        {
          id: 2,
          text: "Б/У",
        }
      ]
    });


  function togglaActive(index) {
    setState({...stateVar, activeObject: stateVar.listArr[index]});
  }

  function toggleActiveStyles(index) {
    if (stateVar.listArr[index] === stateVar.activeObject) {
      return styles.active;
    } else {
      return null;
    }
  }


 
  const listItems = stateVar.listArr.map((item,index) => (
    <li 
      key={index} 
      className={toggleActiveStyles(index)}
      onClick={() => togglaActive(index)}
      >
      {item.text}
    </li>
  ));

  return (
      <>
        <ul className={styles.SearchTabsList}>
            {listItems}
        </ul>
      </>
  );
}

export default SearchTabs;
