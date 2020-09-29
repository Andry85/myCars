import React from 'react';
import styles from './Tabs.module.scss';


function Tabs(props) {
  
  function changeTabs(index) {
    props.handle({...props.items, activeTab: index});
  }

  function setContent(index) {
 
    if (index === props.items.activeTab) {
      return styles.active;
    } else {
      return null;
    }
  }

  const listItems = props.items.tabs.list.map((item,index) => (
    <li 
      key={index} 
      className={setContent(index)}
      onClick={() => changeTabs(index)}
      >
        {item}
    </li>
  ));

  const contentItems = props.items.tabs.components.map((item,index) => (
    <div key={index} className={setContent(index)}>
      {item}
    </div>
  ));




  return (
      <>
        <ul className={styles.tabsHeader}>
          {listItems}
        </ul>
        <div className={styles.tabsContent}>
          {contentItems}
        </div>
      </>
  );
}

export default Tabs;
