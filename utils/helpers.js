module.exports = {
    format_date: (date) => {
        return date.toLocaleDateString();
    },

    first_sentence: (text) => {
        const index = text.indexOf('.');
        return text.substring(0, index+1);
    }
};