import React, {useState} from 'react';
import styles from './Search.module.scss';

import SearchTabs from './SearchTabs';
import Submit from '../common/Submit';
import Select from '../common/Select';


function Search() {
  const [cars, setCars] = useState({
    allCars: [
          {
            type: 'Легкові',
            marka: [
              {
                title: 'BMW',
                models: ['100', '200', '3000', '400']
              },
              {
                title: 'Mersedes',
                models: ['A-100', 'C-200', 'B-300']
              },
              {
                title: 'Audi',
                models: ['Z-100', 'V-200', 'N-300']
              }
            ]
          },
          {
            type: 'Вантажівки',
            marka: [
              {
                title: 'ТATA',
                models: ['10', '20', '300', '40']
              },
              {
                title: 'BMN',
                models: ['A-10', 'C-20', 'B-00']
              },
              {
                title: 'KRAZ',
                models: ['1', '2', '3']
              }
            ]
          },
          {
            type: 'Автобуси',
            marka: [
              {
                title: 'IKARUS',
                models: ['1010', '2020', '3020', '4040']
              },
              {
                title: 'CODRO',
                models: ['A-1', 'C-2', 'B-3']
              },
              {
                title: 'LIMIT',
                models: ['01', '02', '03']
              }
            ]
          }
        ],
        title: [],
        models: [],
        selectedType : 'Виберіть тип',
			  selectedTitle : 'Виберіть марку'
      }
  );

  function changeType(event) {

    event.persist();

    setCars(prevState => {
      return {...prevState, 
        selectedType: event.target.value,
        title: cars.allCars.find(item => item.type === event.target.value).marka
      };
    });

  }
  function changeMarka(event) {

    event.persist();

    let marksArr = cars.allCars.find(item => item.type === cars.selectedType).marka;

    setCars(prevState => {
      return {...prevState, 
        selectedTitle: event.target.value,
        models: marksArr.find(item => item.title === event.target.value).models  
      };
    });

  }

  return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className={styles.searchWrap}>
                <SearchTabs />
                <form method="post" action="/">
                  <div className="row pt-4 gy-4">
                    <div className="col-6">
                      <Select
                        items={cars.allCars}
                        title="Виберіть тип"
                        value={cars.selectedType}
                        placeholder="Type"
                        handler={changeType}
                        filter="type"
                      />
                    </div>
                    <div className="col-6">
                      <Select
                        items={cars.title}
                        title="Виберіть марку"
                        value={cars.selectedTitle}
                        placeholder="Type"
                        handler={changeMarka}
                        filter="title"
                      />
                    </div>
                    <div className="col-6">
                      <Select
                        items={cars.models}
                        title="Виберіть модель"
                        placeholder="Model"
                      />
                    </div>   
                    <div className="col-6">
                      <Submit text="пошук"/>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}

export default Search;
