import {formatCurrency} from '../Scripts/utils/money.js';

console.log('test suits: formatCurrency');

console.log('converts cents into dollars')

if(formatCurrency(2095) === '20.95')
{
    console.log('Passed');
}
else
{
    console.log('fail')
}