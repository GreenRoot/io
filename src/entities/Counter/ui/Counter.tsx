import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';
import cls from './Counter.module.scss';

interface CounterProps {
    className?: string;
}

export const Counter = ({ className }: CounterProps) => {
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div className={classNames(cls.Counter, {}, [className])}>
            <h1 data-testid="value-title" className={classNames(cls.value, {}, [className])}>
                {t('Значение')}
                {' '}
                =
                {' '}
                {counterValue}
            </h1>
            <Button data-testid="increment-button" onClick={increment}>{t('Инкремент')}</Button>
            <Button data-testid="decrement-button" onClick={decrement}>{t('Декремент')}</Button>
        </div>
    );
};

export default Counter;
