import React from 'react';
import { motion } from "framer-motion";
import style from './Header.module.css'
import {Link} from "react-router-dom";

const Header = (children: object) => {
    return (
        <header className={style.container}>
            <motion.div
                whileHover={{scale: 1.2}}
                whileTap={{scale: 0.8}}
            >
                <Link to={"/"} className={style.title}>
                    AI Helper
                </Link>
            </motion.div>
        </header>
    )
}

export { Header };