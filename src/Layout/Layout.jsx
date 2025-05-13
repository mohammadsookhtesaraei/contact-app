import styles from "./Layout.module.css"

const Layout = ({children}) => {
    return (
        <>
            <header className={styles.header}>
                <h1>Contact App</h1>
            </header>
            {children}
        <>
    );
}

export default Layout;
