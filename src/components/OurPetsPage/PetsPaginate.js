import React from 'react';
import { useState, useRef, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import PetCard from '../PetCard';
import styles from '../../styles/PetsPaginate.module.css';

const PetsPaginate = ({ petsList }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(8);
    const [disableStartButton, setDisableStartButton] = useState(styles.button);
    const [disableEndButton, setDisableEndButton] = useState(styles.button);
    const pageCount = Math.ceil(petsList.length / itemsPerPage);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            let newItemsPerPage = 8;
            if (width < 1200) {
                newItemsPerPage = 9;
            }
            if (width < 920) {
                newItemsPerPage = 6;
            }
            if (width < 620) {
                newItemsPerPage = 3;
            }
            setItemsPerPage(newItemsPerPage);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const getStartButtonClass = () => {
            return currentPage === 0
                ? `${styles.button} ${styles.unactiveButton}`
                : styles.button;
        };
        setDisableStartButton(getStartButtonClass());
    }, [currentPage]);

    useEffect(() => {
        const getEndButtonClass = () => {
            return currentPage === pageCount - 1
                ? `${styles.button} ${styles.unactiveButton}`
                : styles.button;
        };
        setDisableEndButton(getEndButtonClass());
    }, [currentPage, pageCount]);

    const reactPaginateRef = useRef(null);

    const handleGoToFirstPage = () => {
        setCurrentPage(0);
        reactPaginateRef.current?.forcePage(0);
    };

    const handleGoToLastPage = () => {
        setCurrentPage(pageCount - 1);
        reactPaginateRef.current?.forcePage(pageCount - 1);
    };

    const handlePageClick = ({ selected: selectedPage }) => {
        setCurrentPage(selectedPage);
    };

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedPets = petsList.slice(startIndex, endIndex);

    return (
        <div className={styles.wrapper}>
            {displayedPets.map((pet, index) => (
                <PetCard key={index} {...pet} />
            ))}

            <ReactPaginate
                pageCount={pageCount}
                marginPagesDisplayed={0}
                pageRangeDisplayed={0}
                onPageChange={handlePageClick}
                containerClassName={styles.paginationContainer}
                pageLinkClassName={styles.pageLink}
                pageLinkBuilder={(pageNumber) => (
                    <div className={styles.pageLink}>{pageNumber + 1}</div>
                )}
                previousLabel={<button className={styles.button}>{'<'}</button>}
                nextLabel={<button className={styles.button}>{'>'}</button>}
                forcePage={currentPage}
                disabledClassName={styles.disabled}
            />
            <div className={styles.additionalButtonsWrapper}>
                <button
                    className={`${styles.startButton} ${disableStartButton}`}
                    onClick={handleGoToFirstPage}
                >
                    {'<<'}
                </button>
                <button
                    className={`${styles.endButton} ${disableEndButton}`}
                    onClick={handleGoToLastPage}
                >
                    {'>>'}
                </button>
            </div>
        </div>
    );
};

export default PetsPaginate;
