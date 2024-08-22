import {FC} from 'react';
import {CityCard} from "../CityCard";
import styles from './CityList.module.scss'
import {useAppSelector} from "../../../../core/hooks/useAppSelector.ts";

export const CityList: FC = () => {
  const {apiData, apiStatus, apiError}  = useAppSelector((state) => state.weather.weather)

  return (
    <div className={styles.CityList}>
      {apiStatus === 'LOADING'&&<div>Загрузка...</div>}
      {apiError&&<div>{apiError.message}</div>}
      {apiData && apiData.map((city) =>
        <CityCard key={city.id} city={city}/>
      )}
    </div>
  );
};