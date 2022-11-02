export default {
    uppercase(val) {
        if (typeof val === "string") {
            return val.toUpperCase();
        }
        return val;
    },
    money(val) {
        if (typeof val === "numeric") {
            return `$${val.toFixed(2)}`;
        }
    }
};