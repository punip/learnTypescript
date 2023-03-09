import {meanBy, groupBy } from 'lodash';
import Student from "./college/student";

export default function genderWiseAverage(students: Student[]) {
    const genderMap = groupBy(students, 'gender')

    return [
        meanBy(genderMap['m'],'marks'),
        meanBy(genderMap['f'],'marks')
    ]
}
