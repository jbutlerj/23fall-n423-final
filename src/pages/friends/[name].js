import React from "react";
import { useRouter, Loader } from "next/router";
import styles from "@/styles/FriendDetails.module.scss";
import useAppState from "@/useHooks/useAppState";

export default function FriendDetails(props) {
    const router = useRouter();
    const appState = useAppState();
    const [friendData, setFriendData] = React.useState({ loading: true });
    console.log(appState);

    React.useEffect(function () {
        if (friendData.id !== router.query.name && router.query.name) {
            console.log(friendData);
            console.log("Data Missing", router.query.name);
            fetch(
                `https://hp-api.onrender.com/api/character/${router.query.name}`
            )
                .then((r) => r.json())

                .then(function (r) {
                    const friendObject = r[0];
                    console.log("test1", friendObject);
                    setFriendData(friendObject);
                })
                .catch((e) =>
                    setFriendData({
                        loading: false,
                        id: router.query.name,
                    })
                );
        }
    });

    return (
        <>
            {/* <Loader active={friendData.loading} />
            {
                // if this statement
                friendData.id ? (
                    // true - then do this
                    <>
                        <div className={styles.container}>
                            <div className={styles.left}>
                                <Image src={friendData.image} />
                            </div>
                            <div className={styles.right}>
                                <div className={styles.top}>
                                    <h1>{friendData.name}</h1>
                                </div>
                                <div className={styles.bottom}>
                                    <h3>House: {friendData.house}</h3>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    // false - else do this
                    <>
                        {friendData.id !== router.query.name ? (
                            <h2>Serching for Details</h2>
                        ) : (
                            <h2>Details not Found</h2>
                        )}
                    </>
                )
            } */}
        </>
    );
}
