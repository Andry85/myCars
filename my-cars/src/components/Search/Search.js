import React, {useState} from 'react';
import styles from './Search.module.scss';

import SearchTabs from './SearchTabs/ibdex';
import Submit from './../Submit/ibdex';


function Search() {
  const [cars, setCars] = useState({
    carTypes: [
          {
            type: 'Легкові',
            brands: [
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
            brands: [
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
            brands: [
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
        selectedType : '--Choose Type--',
			  selectedTitle : '--Choose Title--'
      }
  );

  console.log(cars);

  function changeType(event) {

    console.log(event.target.value);

    event.persist();

    setCars(prevState => {
      return {...prevState, 
        selectedType: event.target.value,
        title: cars.carTypes.find(cntry => cntry.type === event.target.value).brands
      };
    });

  }
  function changeTitle(event) {

    event.persist();

    let stats = cars.carTypes.find(cntry => cntry.type === cars.selectedType).brands;

    setCars(prevState => {
      return {...prevState, 
        selectedTitle: event.target.value,
        models: stats.find(stat => stat.title === event.target.value).models  
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
                      <select 
                      className={styles.select} 
                      placeholder="Type" 
                      value={cars.selectedType} 
                      onChange={changeType}>
                        <option>--Choose Type--</option>
                        {cars.carTypes.map((e, key) => {
                          return <option key={key}>{e.type}</option>;
                        })}
                      </select>
                    </div>
                    <div className="col-6">
                      <select 
                      className={styles.select} 
                      placeholder="Title" 
                      value={cars.selectedTitle} 
                      onChange={changeTitle}>
                        <option>--Choose Title--</option>
                        {cars.title.map((e, key) => {
                          return <option key={key}>{e.title}</option>;
                        })}
                      </select>
                    </div>
                    <div className="col-6">
                      <select 
                      className={styles.select}
                      placeholder="Model">
                        <option>--Choose Model--</option>
                        {cars.models.map((e, key) => {
                          return <option key={key}>{e}</option>;
                        })}
                      </select>
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
