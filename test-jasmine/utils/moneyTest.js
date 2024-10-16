import {formatCurrency} from '../../Scripts/utils/money.js';

describe('test suits: formatCurrency', () => {
    it('converts cents into dollars', () => {
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('work with 0', () => {
        expect(formatCurrency(0)).toEqual('0.00');
    });
    it('round upto the nearest sent', () => {
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });
});