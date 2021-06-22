const {groupEventsByDay, moveEventToDay} = require('./events');


test('groupEventsByDay', () => {
    let events = [
        { id: 106, startsAt: '2021-01-28T13:01:11Z',  endsAt: '2021-01-30T15:01:11Z',  title: 'Daily walk' },
        { id: 126, startsAt: '2021-01-28T16:01:11Z',  endsAt: '2021-01-28T18:01:11Z',  title: 'Drive home' },
        { id: 156, startsAt: '2021-01-25T17:01:11Z',  endsAt: '2021-01-27T22:01:11Z',  title: 'Dinner' },
        { id: 150, startsAt: '2021-01-23T17:01:11Z',  endsAt: '2021-01-27T22:01:11Z',  title: 'Javascript Confrence' }
    ];

    let eventsResult =  {
            0: [
                { id: 150, startsAt: '2021-01-23T17:01:11Z',  endsAt: '2021-01-27T22:01:11Z',  title: 'Javascript Confrence' }
            ],
            2: [
                { id: 156, startsAt: '2021-01-25T17:01:11Z',  endsAt: '2021-01-27T22:01:11Z',  title: 'Dinner' }
            ],
            4: [
                { id: 106, startsAt: '2021-01-28T13:01:11Z',  endsAt: '2021-01-30T15:01:11Z',  title: 'Daily walk' },
                { id: 126, startsAt: '2021-01-28T16:01:11Z',  endsAt: '2021-01-28T18:01:11Z',  title: 'Drive home' },
            ]
    };
    const eventsByDay = groupEventsByDay(events);
    expect(eventsByDay).toEqual(eventsResult);
});

test('moveEvent - advancing an event to a closer date', () => {
    let id = 126;
    let toDay = 2;
    let eventsResult =  {
        0: [
            { id: 150, startsAt: '2021-01-23T17:01:11Z',  endsAt: '2021-01-27T22:01:11Z',  title: 'Javascript Confrence' }
        ],
        2: [
            { id: 156, startsAt: '2021-01-25T17:01:11Z',  endsAt: '2021-01-27T22:01:11Z',  title: 'Dinner' }
        ],
        4: [
            { id: 106, startsAt: '2021-01-28T13:01:11Z',  endsAt: '2021-01-30T15:01:11Z',  title: 'Daily walk' },
            { id: 126, startsAt: '2021-01-28T16:01:11Z',  endsAt: '2021-01-28T18:01:11Z',  title: 'Drive home' },
        ]
    };
    let movedEventsResults =  {
        0: [
            { id: 150, startsAt: '2021-01-23T17:01:11Z',  endsAt: '2021-01-27T22:01:11Z',  title: 'Javascript Confrence' }
        ],
        2: [
            { id: 156, startsAt: '2021-01-25T17:01:11Z',  endsAt: '2021-01-27T22:01:11Z',  title: 'Dinner' },
            { id: 126, startsAt: '2021-01-26T16:01:11Z',  endsAt: '2021-01-26T18:01:11Z',  title: 'Drive home' }
        ],
        4: [
            { id: 106, startsAt: '2021-01-28T13:01:11Z',  endsAt: '2021-01-30T15:01:11Z',  title: 'Daily walk' },
            
        ]
    };

    const advanceEvent = moveEventToDay(eventsResult, id, toDay);
    expect(advanceEvent).toEqual(movedEventsResults);
});

test('moveEvent an event of id that does not exist', () => {
    id = 77;
    toDay = 2;
    let eventsResult =  {
        0: [
            { id: 150, startsAt: '2021-01-23T17:01:11Z',  endsAt: '2021-01-27T22:01:11Z',  title: 'Javascript Confrence' }
        ],
        2: [
            { id: 156, startsAt: '2021-01-25T17:01:11Z',  endsAt: '2021-01-27T22:01:11Z',  title: 'Dinner' }
        ],
        4: [
            { id: 106, startsAt: '2021-01-28T13:01:11Z',  endsAt: '2021-01-30T15:01:11Z',  title: 'Daily walk' },
            { id: 126, startsAt: '2021-01-28T16:01:11Z',  endsAt: '2021-01-28T18:01:11Z',  title: 'Drive home' },
        ]
    };
    
    const immutableEvent = moveEventToDay(eventsResult, id, toDay);
    expect(immutableEvent).toEqual(eventsResult);
});

test('moveEvent - postponing an event to a future date', () => {
    id = 126;
    toDay = 4;
    let movedEventsResults =  {
        0: [
            { id: 150, startsAt: '2021-01-23T17:01:11Z',  endsAt: '2021-01-27T22:01:11Z',  title: 'Javascript Confrence' }
        ],
        2: [
            { id: 156, startsAt: '2021-01-25T17:01:11Z',  endsAt: '2021-01-27T22:01:11Z',  title: 'Dinner' },
            { id: 126, startsAt: '2021-01-26T16:01:11Z',  endsAt: '2021-01-26T18:01:11Z',  title: 'Drive home' }
        ],
        4: [
            { id: 106, startsAt: '2021-01-28T13:01:11Z',  endsAt: '2021-01-30T15:01:11Z',  title: 'Daily walk' },
            
        ]
    };
    let eventsResult =  {
        0: [
            { id: 150, startsAt: '2021-01-23T17:01:11Z',  endsAt: '2021-01-27T22:01:11Z',  title: 'Javascript Confrence' }
        ],
        2: [
            { id: 156, startsAt: '2021-01-25T17:01:11Z',  endsAt: '2021-01-27T22:01:11Z',  title: 'Dinner' }
        ],
        4: [
            { id: 106, startsAt: '2021-01-28T13:01:11Z',  endsAt: '2021-01-30T15:01:11Z',  title: 'Daily walk' },
            { id: 126, startsAt: '2021-01-28T16:01:11Z',  endsAt: '2021-01-28T18:01:11Z',  title: 'Drive home' },
        ]
    };

    const postponeEvent = moveEventToDay(movedEventsResults, id, toDay);
    expect(postponeEvent).toMatchObject(eventsResult);
});

// test('groupEventsByDay from a different timezone', () => {
//     //To get a function that converts the startAt and endsAt values to UTC
//     const eventsByDay = groupEventsByDay(differentTimeZone);
//     expect(eventsByDay).toEqual(differentTimezoneResult);
// })

//Move to same day
//Delete an empty key value pair