import styles from "./Layout.module.css"

const Layout = ({children}) => {
    return (
        <div>
            <header className={styles.header}>
                <h1>Contact App</h1>
            </header>
            {children}
        </div>
    );
}

export default Layout;
