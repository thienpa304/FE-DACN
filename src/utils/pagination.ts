export const handlePageChange = (
  pageNumber: number,
  setCurrentPage: (value: React.SetStateAction<number>) => void,
  scrollToTop = true
) => {
  setCurrentPage(pageNumber);
  if (scrollToTop) window.scrollTo({ top: 0, behavior: 'smooth' });
};
