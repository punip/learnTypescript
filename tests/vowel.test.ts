import chai from 'chai';
import { describe, it } from "mocha";
import { isVowel } from "../vowel";

const expect = chai.expect;

const vowelScenarios = ['a', 'e', 'i', 'o', 'u'];
vowelScenarios.forEach( scenario => {
    it(`returns the passed character ${scenario} as vowel`, function () {
        const actual = isVowel(scenario);
        const expected = true;

        // assertion
        expect(actual).to.equal(expected);

} )

 {
    it('returns the passed character as not vowel', function () {
        const actual = isVowel('x');
        const expected = false;

        // assertion
        expect(actual).to.equal(expected);
    });

}});