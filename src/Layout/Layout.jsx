import styles from "./Layout.module.css"

const Layout = ({children}) => {
    return (
        <div>
            <header className={styles.header}>
                <h1>Contact App</h1>
            </header>
            {children}
            <footer className={styles.footer}>
                <p>Developed by me</p>
            </footer>
        </div>
    );
}

export default Layout;
