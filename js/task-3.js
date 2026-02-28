'use strict'
function getElementWidth(content, padding, border) {
    const valueContent = Number.parseFloat(content);
    const valuePadding = Number.parseFloat(padding);
    const valueBorder = Number.parseFloat(border);
    const totalWidth = valueContent + (valueBorder * 2) + (valuePadding * 2);
    {
        return totalWidth ;
    }
}
console.log(getElementWidth("50px", "8px", "4px")); 
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px")); 
