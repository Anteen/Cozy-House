export const handleResize = (setItemsPerPage) => {
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
