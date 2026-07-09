class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let rotation = 0;
        while (students.length) {
            if (sandwiches[0] == students[0]) {
                students.shift();
                sandwiches.shift();
                rotation = 0;
            } else {
                rotation++;
                students.push(students.shift());
            }
            if (rotation == students.length) return students.length;
        }
    }
}
