import { describe } from "mocha";
import chai from 'chai';

import genderWiseAverage from "../studentutil";
import Student from "../college/student";
import { it } from "mocha";
import exp from "constants";

const expect = chai.expect;

describe('student util test suite',() => {
    it('performs the average gender wise', () => {
        const actual = genderWiseAverage (
            [
                new Student('puneeth','m',10,90),
                new Student('jane','f',20,50),
                new Student('jill','m',30,70),
                new Student('rey','f',40,33),  
            ]
        );
        // M-> 80
        // F-> 41.5
        expect(actual[0]).to.equal(80);
        expect(actual[1]).to.equal(41.5);

    });
});