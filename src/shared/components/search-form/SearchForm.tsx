import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import styles from './SearchForm.module.css';
import { Input } from '@/shared/components/input/Input';
import { Button } from '@/shared/components/button/Button';
import { useAppDispatch } from '@/shared/hooks/use-app-dispatch';
import { fetchAutoparts } from '@/shared/services/autoparts/autoparts-reducer';
import { ProductFromFavoritApiType } from '@/shared/types/types';
import { setAutoparts } from '@/shared/providers/store-provider/slices/autoparts-slice';

export type SearchProps = {
  search: string
}

export const SearchForm = () => {
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    control,
    watch,
    reset,
  } = useForm<SearchProps>({
    mode: 'onChange',
    defaultValues: {
      search: "",
    },
  });

  const onPressEnter = () => {
    handleSubmit(onSubmit)
  }

  const onSubmit: SubmitHandler<SearchProps> = (data) => {
    dispatch(fetchAutoparts(data.search));
  }

  const resetForm = () => {
    reset({ search: '' });
    dispatch(setAutoparts([] as ProductFromFavoritApiType[]));
  }

  const searchValue = watch('search')

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.search}>
      <Controller
        control={control}
        name="search"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input 
            type='text'
            search={true}
            placeholder='Введите VIN детали, название или модель авто'
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            onPressEnter={onPressEnter}
          />
        )}
      />
      <div className={styles.search__buttons}>
        <Button
          type='submit'
          name='Поиск'
          disabled={!searchValue}
        />
        <Button
          type='button'
          name='Сбросить'
          onClick={resetForm}
          disabled={searchValue ? false : true}
        />
      </div>
    </form>
  )
}