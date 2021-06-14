const {groupEventsByDay, moveEventToDay} = require('./events')
const {events, eventsResult} = require('./mockEvents')

test('groupEventsByDay', () => {
    const eventsByDay = groupEventsByDay(events);
    expect(eventsByDay).toEqual(eventsResult);
});

test('moveEvent', () => {});
