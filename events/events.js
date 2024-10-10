class Events {
    constructor() {
        // A storage for events and their associated callbacks
        this.events = {};
    }

    // Register an event handler
    on(eventName, callback) {
        // If this eventName doesn't exist, create an empty array for it
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        // Push the callback into the array for this eventName
        this.events[eventName].push(callback);
    }

    // Trigger all callbacks associated with a given eventName
    trigger(eventName) {
        // Check if the event exists
        if (this.events[eventName]) {
            // Call each callback associated with this event
            this.events[eventName].forEach(callback => {
                callback();
            });
        }
    }

    // Remove all event handlers associated with the given eventName
    off(eventName) {
        // Simply remove the event and its callbacks
        delete this.events[eventName];
    }
}

module.exports = Events;
