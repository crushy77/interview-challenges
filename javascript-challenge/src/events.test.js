const {groupEventsByDay, moveEventToDay} = require('./events')
const {events, eventsResult, id, toDay, groupedEventsResults} = require('./mockEvents')

test('groupEventsByDay', () => {
    const eventsByDay = groupEventsByDay(events);
    expect(eventsByDay).toEqual(eventsResult);
});

test('moveEvent', () => {
    const movedEventsToDay = moveEventToDay(eventsResult, id, toDay);
    expect(movedEventsToDay).toEqual(groupedEventsResults);
});
