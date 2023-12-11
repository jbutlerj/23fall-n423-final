import React from "react";
import "semantic-ui-css/semantic.css";
import { Icon } from "semantic-ui-react";
import Link from "next/link";
import "@/styles/globals.css";
import styles from "@/styles/components/Menu.module.scss";
import { AppProvider } from "@/useHooks/useAppState";

export default function App({ Component, pageProps }) {
    return (
        <AppProvider>
            <header className={styles.headerContainer}>
                <nav className={styles.navbar}>
                    <Link href="/">
                        <Icon name="home" />
                        Home
                    </Link>
                    <Link href="/account">My Account</Link>
                    <Link href="/friends">Friends</Link>
                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>
                            Houses
                            <Icon name="caret down" />
                        </button>
                        <div className={styles.dropdownContent}>
                            <Link href="/houses/gryffindor">Gryffindor</Link>
                            <Link href="/houses/hufflepuff">Hufflepuff</Link>
                            <Link href="/houses/ravenclaw">Ravenclaw</Link>
                            <Link href="/houses/slytherin">Slytherin</Link>
                        </div>
                    </div>
                </nav>
            </header>
            {/* <Menu inverted>
                <Menu.Item as={Link} href="/">
                    <Icon name="home" />
                    Home
                </Menu.Item>
                <Menu.Item as={Link} href="/friends">
                    Friends
                </Menu.Item>
                <Dropdown item text="Houses">
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} href="/houses/gryffindor">
                            Gryffindor
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} href="/houses/hufflepuff">
                            Hufflepuff
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} href="/houses/ravenclaw">
                            Ravenclaw
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} href="/houses/slytherin">
                            Slytherin
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu> */}
            <Component {...pageProps} />
        </AppProvider>
    );
}
