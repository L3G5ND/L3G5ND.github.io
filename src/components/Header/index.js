'use client'
 
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from "next/link"
import styles from "./style.module.css"

function Item(props) {
    return (
        <Link className={styles['item']} href={props.path || '/'}>
            <span>{props.name}</span>
        </Link>
    )
}

export default function Header() {
    const pathName = usePathname()
    const [menuOpen, setMenuOpen] = useState(false)
    const menuStyle = { "gridTemplateRows": menuOpen && "1fr" || "0fr" }
    function MenuItem(props) {
        return (
            <Link className={styles["menu-item"]} href={props.path || '/'} onClick={() => {
                setMenuOpen(false)
            }}>
                <span>{props.name}</span>
            </Link>
        )
    }
    return (
        <>
            <div style={pathName == "/" && {backgroundColor: "transparent"} || {}} className={styles['header']}>
                <div className={styles['header-middle']}>
                    <Item name="Home" path="/"></Item>
                    <Item name="About" path="/about"></Item>
                    <Link className={styles.contact} href="/contact">
                        <span>Hire Me</span>
                    </Link>
                    <Item name="Work" path="/portfolio"></Item>
                    <Item name="Pricing" path="/pricing"></Item>
                </div>
                <div className={styles['header-right']}>
                    <button className={styles['menu-icon']} onClick={() => {
                        setMenuOpen(!menuOpen)
                    }}>
                        <Image
                            src={"/menu.png"}
                            fill={true}
                            alt={"Menu"}
                        />
                    </button>
                </div>
                <div style={menuStyle} className={styles["menu-holder"]}>
                    <div className={styles["menu"]}>
                        <div className={styles["menu-header"]}></div>
                        <MenuItem name="Home" path="/"/>
                        <MenuItem name="About" path="/about"/>
                        <MenuItem name="Work" path="/portfolio"/>
                        <MenuItem name="Pricing" path="/pricing"/>
                        <MenuItem name="Hire" path="/contact"/>
                    </div>
                </div>
            </div>
        </>
    ) 
}
