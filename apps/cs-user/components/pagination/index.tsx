import { MdArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";

interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
  prevActive: boolean;
  nextActive: boolean;
  handlePreviousPage: () => void;
  handleNextPage: () => void;
}

export const Paginations: React.FC<PaginationProps> = ({
  page,
  setPage,
  totalPages,
  prevActive,
  nextActive,
  handlePreviousPage,
  handleNextPage,
}) => {
  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    const visiblePages = Math.min(5, totalPages);
    let firstPageInRange = Math.max(page - Math.floor(visiblePages / 2), 1);
    const lastPageInRange = Math.min(firstPageInRange + visiblePages - 1, totalPages);

    if (lastPageInRange - firstPageInRange + 1 < visiblePages) {
      firstPageInRange = Math.max(lastPageInRange - visiblePages + 1, 1);
    }

    const pagination = [];

    if (firstPageInRange > 1) {
      pagination.push(
        <button
          key="ellipsis-start"
          className="text-[12px] text-[#C2C2C2] rounded-sm flex justify-center items-center shadow-md w-[30px]  h-[30px]  border-2 border-[#BCBCBC]"
          onClick={() => setPage(1)}
        >
          1
        </button>,
      );
    }

    for (let i = firstPageInRange; i <= lastPageInRange; i++) {
      pagination.push(
        <button
          key={i}
          className={
            i === page
              ? "w-[30px]  h-[30px] text-white bg-[#4AC1A2] flex justify-center items-center rounded-sm text-[12px]"
              : " text-[12px] text-[#C2C2C2] rounded-sm shadow-md w-[30px]  h-[30px]  border-2 border-[#BCBCBC]"
          }
          onClick={() => setPage(i)}
        >
          {i}
        </button>,
      );
    }

    if (lastPageInRange < totalPages) {
      pagination.push(
        <button
          key="ellipsis-end"
          className="text-[12px] text-[#C2C2C2] rounded-sm flex justify-center items-center shadow-md w-[30px]  h-[30px]  border-2 border-[#BCBCBC]"
          onClick={() => setPage(totalPages)}
        >
          {totalPages}
        </button>,
      );
    }

    return pagination;
  };
  return (
    <div className="w-full flex justify-center items-center gap-8">
      <button
        onClick={handlePreviousPage}
        disabled={page === 1}
        className="text-[12px] text-[#C2C2C2] rounded-sm flex justify-center items-center shadow-md w-[30px]  h-[30px]  border-2 border-[#BCBCBC]"
      >
        {prevActive ? <MdArrowBackIosNew color="#4AC1A2" /> : <MdArrowBackIosNew />}
      </button>
      <div className="gap-4 flex justify-center items-center">{renderPagination()}</div>
      <button
        onClick={handleNextPage}
        disabled={page === totalPages}
        className="text-[12px] text-[#C2C2C2] rounded-sm flex justify-center items-center shadow-md w-[30px]  h-[30px]  border-2 border-[#BCBCBC]"
      >
        {nextActive ? <MdOutlineArrowForwardIos color="#4AC1A2" /> : <MdOutlineArrowForwardIos />}
      </button>
    </div>
  );
};
