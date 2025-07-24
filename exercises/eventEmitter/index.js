class EventEmitter {
  constructor() {
    // Stores subscriptions: { eventName: [ { callback, active } ] }
    this.events = new Map();
  }

  /**
   * Subscribe to an event.
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object} An object with an unsubscribe() method
   */
  subscribe(eventName, callback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }

    const listeners = this.events.get(eventName);

    const subscriber = {
      callback,
      active: true,
    };

    listeners.push(subscriber);

    return {
      unsubscribe: () => {
        subscriber.active = false;
      },
    };
  }

  /**
   * Emit an event.
   * @param {string} eventName
   * @param {Array} args
   * @return {Array} An array of callback results
   */
  emit(eventName, args = []) {
    const listeners = this.events.get(eventName);
    if (!listeners) return [];

    const results = [];

    for (const subscriber of listeners) {
      if (subscriber.active) {
        results.push(subscriber.callback(...args));
      }
    }

    return results;
  }
}

const emitter = new EventEmitter();

function cb1() { return 5; }
function cb2() { return 6; }

console.log(emitter.emit("firstEvent")); 
// ➞ []

const sub1 = emitter.subscribe("firstEvent", cb1);
const sub2 = emitter.subscribe("firstEvent", cb2);

console.log(emitter.emit("firstEvent")); 
// ➞ [5, 6]

sub1.unsubscribe();

console.log(emitter.emit("firstEvent")); 
// ➞ [6]
