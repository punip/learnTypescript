import chai from 'chai';
import { describe, it } from "mocha";
import Student from '../college/student';

const expect = chai.expect;

describe('student test suite', function () {
it('returns the expected details from getDetails', function () { 
        const s1 = new Student('puneeth','m',10,90);
        const actual = s1.getDetails();

        const expected = 'Name: puneeth\nGender: m\nRoll: 10\nMarks: 90';
        // assertion
        expect(actual).to.equal(expected);
    });

});