const {groupEventsByDay, moveEventToDay} = require('./events')
const {events, eventsResult} = require('./mockEvents')

test('groupEventsByDay', () => {
    const text = generateText('Max', 29);
    expect(text).toBe('Max (29 years old)');
    const eventsByDay = groupEventsByDay(events);
    expect(eventsByDay).toBe(eventsResult);
});

test('moveEvent', () => {});
