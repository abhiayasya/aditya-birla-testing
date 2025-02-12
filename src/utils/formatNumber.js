export const formatNumber = (number) => {
    if (number < 10) {
        return '0' + number; // Adding a leading zero for single-digit numbers
    }
    return number; 
}