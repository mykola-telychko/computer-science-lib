var timeLimit = function(fn, t) {
    return async function(...args) {
        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);

            fn(...args)
                .then((res) => {
                    clearTimeout(timeout);
                    resolve(res);
                })
                .catch((err) => {
                    clearTimeout(timeout);
                    reject(err);
                });
        });
    };
};
const fn = async (n) => {
    await new Promise(res => setTimeout(res, 100));
    return n * n;
};
const limited = timeLimit(fn, 50);
limited(5).catch(console.log); // "Time Limit Exceeded"

var TimeLimitedCache = function() {
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration
 * @return {boolean}
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const hasUnexpired = this.cache.has(key) && this.cache.get(key).expiresAt > Date.now();
    
    if (this.cache.has(key)) {
        clearTimeout(this.cache.get(key).timeoutId);
    }

    const timeoutId = setTimeout(() => {
        this.cache.delete(key);
    }, duration);

    this.cache.set(key, {
        value,
        expiresAt: Date.now() + duration,
        timeoutId
    });

    return hasUnexpired;
};

/** 
 * @param {number} key
 * @return {number}
 */
TimeLimitedCache.prototype.get = function(key) {
    const item = this.cache.get(key);
    if (!item || item.expiresAt <= Date.now()) {
        return -1;
    }
    return item.value;
};

/** 
 * @return {number}
 */
TimeLimitedCache.prototype.count = function() {
    let count = 0;
    const now = Date.now();
    for (const { expiresAt } of this.cache.values()) {
        if (expiresAt > now) count++;
    }
    return count;
};

const cache = new TimeLimitedCache();
console.log(cache.set(1, 42, 100)); // false
console.log(cache.get(1));          // 42
console.log(cache.count());         // 1
setTimeout(() => console.log(cache.get(1)), 150); // -1 (expired)
