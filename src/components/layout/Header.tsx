import styles from "./Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Header() {
  const router = useRouter();
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <Image
            src="/aurora.png"
            alt="logo"
            width={50}
            height={50}
            className={styles.logo}
          />
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link
                href="/"
                className={`${styles.link} ${router.pathname === "/" ? styles.active : ""}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className={`${styles.link} ${router.pathname === "/gallery" ? styles.active : ""}`}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`${styles.link} ${router.pathname === "/blog" ? styles.active : ""} `}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/question"
                className={`${styles.link} ${router.pathname === "/question" ? styles.active : ""}`}
              >
                Question
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
