import { useState } from "react";
import { TableType } from "../../types/type";
import DataList from "../DataList/DataList";
import { BsFillSkipBackwardFill, BsFillSkipForwardFill } from "react-icons/bs";
import "./Pagination.css";
import { useSelector } from "react-redux";

type Props = {
  Table: TableType[];
};

const Pagination = (props: Props) => {
  const { Table } = props;
  console.log(Table);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const notes: any = useSelector<any>((state) => state);
  const filteredTable = notes.items.searchItem
    ? Table.filter(
        (data) => data?.id?.toString() === notes?.items?.searchItem?.toString()
      )
    : Table;

  const indexOflastPost = currentPage * postsPerPage;
  const indexOffirstpost = indexOflastPost - postsPerPage;
  const currentPosts = filteredTable.slice(indexOffirstpost, indexOflastPost);

  const PageNumbers: any = [];

  for (let i = 1; i <= Math.ceil(filteredTable.length / postsPerPage); i++) {
    PageNumbers.push(i);
  }

  const SelectPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const ChangePagePrevNext = (number: number) => {
    if (number === -1) {
      currentPage + number < 1
        ? setCurrentPage(PageNumbers.length)
        : setCurrentPage(currentPage + number);
    } else if (number === +1) {
      currentPage + number > PageNumbers.length
        ? setCurrentPage(PageNumbers[0])
        : setCurrentPage(currentPage + number);
    }
  };

  return (
    <div className="PaginationAll">
      <DataList CurrentPosts={currentPosts} />
      {filteredTable.length > 0 && (
        <div className="Pagination">
          <BsFillSkipBackwardFill
            onClick={() => ChangePagePrevNext(-1)}
            className="icon"
          />
          {PageNumbers.map((number: any) => (
            <span key={number} onClick={() => SelectPage(number)}>
              {number}
            </span>
          ))}
          <BsFillSkipForwardFill
            onClick={() => ChangePagePrevNext(+1)}
            className="icon"
          />
        </div>
      )}
    </div>
  );
};

export default Pagination;
