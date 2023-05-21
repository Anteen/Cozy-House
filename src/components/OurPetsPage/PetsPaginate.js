import React, { useState, useRef, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import PetCard from '../PetCard';
import styles from './PetsPaginate.module.scss';
import { handleResize } from '../../utilites/paginateSettings';

const PetsPaginate = ({ petsList }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [disableStartButton, setDisableStartButton] = useState(styles.button);
  const [disableEndButton, setDisableEndButton] = useState(styles.button);
  const pageCount = Math.ceil(petsList.length / itemsPerPage);

  useEffect(() => {
    const handleResizeWrapper = () => handleResize(setItemsPerPage);
    window.addEventListener('resize', handleResizeWrapper);
    handleResizeWrapper();
    return () => window.removeEventListener('resize', handleResizeWrapper);
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
