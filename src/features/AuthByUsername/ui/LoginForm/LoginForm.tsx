import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autoFocus
                placeholder={t('Логин')}
                type="text"
                className={cls.input}
            />
            <Input
                placeholder={t('Пароль')}
                type="password"
                className={cls.input}
            />
            <Button className={cls.loginButton}>
                {t('Войти')}
            </Button>
        </div>
    );
};

export default LoginForm;
