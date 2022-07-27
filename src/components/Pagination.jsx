import React from 'react';
import { useSelector } from 'react-redux';
import { PaginationBar } from './StyledComponents';


const Pagination = ({ totalCards, paginate, currentPage }) => {

    const pageNumbers = []

    const cardsPerPage = useSelector(state => state.cardsPerPage)

    const lastPage = Math.ceil(totalCards/cardsPerPage)

    for( let i = currentPage; i<= lastPage; i++ ){
        if(pageNumbers.length < 6){
            pageNumbers.push(i)
        }
    }



    return (
        <PaginationBar>
            <button  onClick={() => paginate(1)}>
                <i className="fa-solid fa-angles-left"></i>
            </button>
            {pageNumbers.map(number => (
                <li key={number}>
                    <button onClick={() => paginate(number)}>
                        {number}
                    </button>
                </li>
            ))}
            <button onClick={() => paginate(lastPage)}>
                <i className="fa-solid fa-angles-right"></i>
            </button>
        </PaginationBar>
    );
};

export default Pagination;