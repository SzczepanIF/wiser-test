import React from 'react';
import styles from './SectionSeparator.module.css';

type Props = {
    className?: string;
    title: string;
}

export default function SectionSeparator({className = '', title}: Props) {
    return (
        <div className={styles.sectionName__container}>
            <span className={styles.sectionName__border}/>
            <h2 className={styles.sectionName__title}>{title}</h2>
        </div>
    )
}
