const os = require('os');

// Info about the current user's device
const user = os.userInfo();
console.log(user);

// Method returns system uptime in seconds
console.log(`System uptime: ${os.uptime()} seconds`);
// Convert to hours:min:seconds
function convertTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}
console.log(convertTime(os.uptime()));

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    device: os.platform(),
    arch: os.arch()
}
console.log(currentOS)