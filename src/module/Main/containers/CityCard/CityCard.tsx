import { FC } from 'react';
import styles from './CityCard.module.scss';
import {IWeather} from "../../models";

interface CityCardProps {
    city: IWeather;
}

export const CityCard: FC<CityCardProps> = ({city}) => {
  return (
    <div className={styles.cityCard}>
      <div>City: {city.name}</div>
      <div>Temperature: {city.main.temp}</div>
      <div>Wind: {Math.round(city.wind.speed * 0.44704)} m/s</div>
      <div>Humidity: {city.main.humidity}%</div>
      <div>Pressure: {Math.round(city.main.pressure * 0.75)} mmHg</div>
    </div>
  );
};
