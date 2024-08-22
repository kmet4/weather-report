import { FC, useState, ChangeEvent, FormEvent } from 'react';
import { getCities } from "../../service";
import styles from './SearchCity.module.scss'
import {Input} from "../../../../shared/Input";
import {Button} from "../../../../shared/Button";
import {useAppDispatch} from "../../../../core/hooks/useAppDispatch.ts";

export const SearchCity: FC = () => {
  const [city, setCity] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleChangeCity = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(getCities(city));
  };

  return (
    <div className={styles.InputCity}>
      <div className={styles.title}>Weather-report</div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          type="text"
          value={city}
          onChange={handleChangeCity}
          placeholder="Enter the name of the city"
        />
        <Button type="submit" disabled={!city}>
          Search
        </Button>
      </form>
    </div>
  );
};
