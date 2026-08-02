class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let current = [];
        for (let i = 0; i < position.length; i++) {
            current.push({ position: position[i], speed: speed[i] });
        }
        let fleet = 1;
        current = current.sort((a, b) => {
            return b.position - a.position;
        });

        let prevTime = (target - current[0].position) / current[0].speed;
        for (let i = 1; i < position.length; i++) {
            let time = (target - current[i].position) / current[i].speed;
            if (time > prevTime) {
                fleet++;
                prevTime = time;
            }
        }
        return fleet;
    }
}
