export const handlePageChange = (
  pageNumber: number,
  setCurrentPage: (value: React.SetStateAction<number>) => void
) => {
  setCurrentPage(pageNumber);
  window.scrollTo(0, 0);
};
