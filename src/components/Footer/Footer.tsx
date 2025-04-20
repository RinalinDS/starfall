import {contactItems} from '../../mocks/footerData';
import {Typography} from '../ui/Typography/Typography';
import {Logo} from "../atoms/Logo.tsx";

export const Footer = () => {
    return (
        <footer className="w-full flex-shrink-0 bg-gray-200 text-lg dark:bg-gray-800">
            <div className="mx-auto flex max-w-[80rem] flex-col items-center gap-5 px-5 py-10 lg:px-0">
                <div
                    className="grid w-full justify-center gap-6 rounded-md border-2 border-solid px-20 py-6 lg:w-1/2 dark:border-gray-200">
          <span className="text-[2rem] leading-6 font-semibold tracking-[0.25px]">
            Contact the creator
          </span>
                    <ul className="contactList flex list-none justify-center gap-8">
                        {contactItems.map(({href, icon, id}) => {
                            return (
                                <li key={id}>
                                    {/*[&>svg] - применяет к дочерним свг текст-4хл*/}
                                    <a
                                        className="hover:text-emerald-500 dark:hover:text-emerald-600 [&>svg]:text-4xl"
                                        href={href}
                                    >
                                        {icon}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div>
                    <ul className="adminList flex list-none justify-center gap-8 p-2 text-lg leading-6 tracking-[0.5px] capitalize">
                        <li>
                            <a className="link hover:underline" href="#">
                                privacy policy
                            </a>
                        </li>
                        <li>
                            <a className="link hover:underline" href="#">
                                condition of use
                            </a>
                        </li>
                        <li>
                            <a className="link hover:underline" href="#">
                                press room
                            </a>
                        </li>
                        <li>
                            <a className="link hover:underline" href="#">
                                help
                            </a>
                        </li>
                    </ul>
                </div>
                <Logo/>
                <Typography
                    as="p"
                    variant="nostyle"
                    className="text-xl leading-4 font-normal tracking-[0.03rem]"
                >
                    © 2025 by Denis Pilyutin.
                </Typography>
            </div>
        </footer>
    );
};
