export const handleSort = (
  newModelSort,
  setSortModel: (
    value: React.SetStateAction<{
      orderBy: string;
      sort: string;
    }>
  ) => void
) => {
  if (newModelSort?.length === 0) {
    setSortModel({
      orderBy: '',
      sort: ''
    });
  } else {
    setSortModel({
      orderBy: newModelSort[0]?.field,
      sort: newModelSort[0]?.sort?.toUpperCase()
    });
  }
};
