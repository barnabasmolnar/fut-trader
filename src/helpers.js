const h = {
    calcRPP: function (LBIN, desiredProfit) {
        return (parseInt(LBIN) * 0.95) - parseInt(desiredProfit);
    },

    roundRPP: function(x) {
        return x <= 10000 ? Math.floor(x / 100) * 100 : Math.floor(x / 250) * 250;
    },

    formatRPP: function(x) {
        return x.toLocaleString();
    },

    compareFunc: function(a, b, prop, order) {
        if (typeof a[prop] === "string") {
            return order === "asc" ? a[prop].localeCompare(b[prop]) : b[prop].localeCompare(a[prop]);
        }
        
        return order === "asc" ? a[prop] - b[prop] : b[prop] - a[prop];
    }
}

export default h;