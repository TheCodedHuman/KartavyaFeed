// Helper Function
function toCapitalized(str) {

    if (typeof str !== 'string') return "Unknown";          // use "Unknown" or "" 

    return (
        str
        .split(' ')
        .map((word) => (word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()))
        .join(' ')
    )
}

export {
    toCapitalized
}

