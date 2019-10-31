function isNullorEmpty(input) {
    // Returns true if the input is either undefined, null, or empty.
    // Fails otherwise
    return (input === undefined || input === null || input === '');
}

// Export to make the function available to other packages
module.exports = isNullorEmpty;
