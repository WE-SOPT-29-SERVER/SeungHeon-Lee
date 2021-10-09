const { members } = require('./members');

const getOnline = members => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          const data = members.filter(member => member.location === "online");
          resolve(data);
        }, 500);
    });
};

const getOffline = members => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = members.filter(member => member.location === "offline");
            resolve(data);
        }, 500)
    });
};

const getYB = members => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = members.filter(member => member.group === "YB");
            resolve(data);
        }, 500)
    });
};

const getOB = members => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = members.filter(member => member.group === "OB");
            resolve(data);
        }, 500)
    });
};

const asyncFunction = async (members) => {
    const findOnline = await getOnline(members);
    const findOB = await getOB(findOnline);
    console.log(findOB);
    
    const findOffline = await getOffline(members);
    const findYB = await getYB(findOffline);
    console.log(findYB);
}

asyncFunction(members);