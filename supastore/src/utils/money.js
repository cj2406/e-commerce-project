export function formatMoney(amountCents){
    Number(amountCents)
    return `${(amountCents / 100).toFixed(2)}`;
}