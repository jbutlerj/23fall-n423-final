import React from "react";
import "semantic-ui-css/semantic.css";
import { Menu, Dropdown, Icon } from "semantic-ui-react";
import Link from "next/link";
import "@/styles/globals.css";
import { AppProvider } from "@/useHooks/useAppState";

export default function App({ Component, pageProps }) {
    return (
        <AppProvider>
            <Menu inverted>
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
            </Menu>
            <Component {...pageProps} />
        </AppProvider>
    );
}
