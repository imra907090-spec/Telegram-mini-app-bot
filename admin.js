// admin.js (সার্ভারের অংশ)
const config = require('./config');

function checkAdmin(userId) {
    return parseInt(userId) === config.ADMIN_ID;
}

// যখনই এডমিন প্যানেল থেকে কোনো রিকোয়েস্ট আসবে, তখন চেক করবেন:
// if (!checkAdmin(incomingUserId)) return res.status(403).send("অনুমতি নেই!");
