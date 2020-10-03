import { writable } from 'svelte/store';

function createTimetables() {
    const { subscribe, set, update } = writable({
        // [program]: {
        //  [channel]: []
        //}
    });
    return {
        subscribe,
        addProgram: (program, channel, timetables) => update(o => {
            if (!o[program]) {
                o[program] = {};
            }
            o[program][channel] = timetables;
            return o;
        }),
        deleteProgram: (program, channel) => update(o => {
            delete o[program][channel];
            if (o[program].length === 0) {
                delete o[program];
            }
            return o;
        })
    };
}

export const dateStore = writable(new Date());
export const timetables = createTimetables();
export const animeStore = writable({
    loaded: false,
    data: [],
});