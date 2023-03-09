import chai from 'chai';
import { describe, it, beforeEach } from "mocha";
import Account from '../bank/account';

const expect = chai.expect;

describe('Account test suite', function () {

    let account: Account;

    beforeEach(  () => {
        account = new Account('puneeth','sb',8000)
    });

    it('performs the deposit properly', function () {
        const actual = account.deposit(500);
        const expected = account.balance;

        // assertion
        expect(actual).to.equal(expected);
    })

    describe('withdrawl test suite', () => {

        {
            it('performs the withdraw properly', function () {
                const actual = account.withdraw(500);
                const expected =account.balance;
        
                // assertion
                expect(actual).to.equal(expected);
            });
    
        it('throws an error if withdraw will cause low balance',() =>{
            expect(function () {
                account.withdraw(7500)
            }).to.throw('cannot withdraw as balance going below 1000');
            });
        }});


    })

    
