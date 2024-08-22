import {FC} from 'react';
import {SearchCity} from "../SearchCity";
import {CityList} from "../CityList";
import styles from './MainPage.module.scss'


export const MainPage: FC = () => {

  return (
    <div className={styles.mainPage}>
      <SearchCity/>
      <CityList/>
    </div>
  );
};