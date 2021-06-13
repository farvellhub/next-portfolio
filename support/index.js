// Formats the URL into a more readable parameter
export const formatTitleURLParam = ( title ) => {
    return title.trim().toLowerCase().replace( / /g, "-" );
};
