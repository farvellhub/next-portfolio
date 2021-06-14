// Formats the URL into a more readable parameter
export const formatTitleURLParam = ( title: string ): string => {
    return title.trim().toLowerCase().replace( / /g, "-" );
};
