import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss"
import AppLink from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;
}


export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={classNames(cls.links)}>
                <AppLink to={"/"}>Main page</AppLink>
                <AppLink to={"/about"}>About</AppLink>
            </div>
        </div>
    );
};

export default Navbar;
