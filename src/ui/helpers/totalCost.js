
export const totalCost = (item) => {
    const total = item.reduce(function (prev, item) {
        return prev + item.price * item.count;
    }, 0)
    return total;
}
