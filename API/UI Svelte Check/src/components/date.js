function formatDate(inputDate) {
    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        year: 'numeric'
    };

    const date = new Date(inputDate);
    const day = date.getDate();

    const daySuffix = getDaySuffix(day);
    // options.day = 'numeric';

    const format = date.toLocaleDateString('en-US', options); 
    return format.replace(/\d+/, day + daySuffix);
}

function getDaySuffix(day) {
    if (day >= 11 && day <= 13) {
        return 'th';
    }
    switch (day%10) {
        case 1:
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';
    }
}

export default formatDate;