events = [
    { id: 106, startsAt: '2021-01-28T13:01:11Z',  endsAt: '2021-01-30T15:01:11Z',  title: 'Daily walk' },
    { id: 126, startsAt: '2021-01-28T16:01:11Z',  endsAt: '2021-01-28T18:01:11Z',  title: 'Drive home' },
    { id: 156, startsAt: '2021-01-25T17:01:11Z',  endsAt: '2021-01-27T22:01:11Z',  title: 'Dinner' },
    { id: 107, startsAt: '2021-01-27T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Flight' },
    { id: 150, startsAt: '2021-01-23T17:01:11Z',  endsAt: '2021-01-27T22:01:11Z',  title: 'Javascript Confrence' }
]

eventsResult = {
    0: [
        { id: 150, startsAt: '2021-01-23T17:01:11Z',  endsAt: '2021-01-27T22:01:11Z',  title: 'Javascript Confrence' }
    ],
    2: [
        { id: 156, startsAt: '2021-01-25T17:01:11Z',  endsAt: '2021-01-27T22:01:11Z',  title: 'Dinner' }
    ],
    3: [
        { id: 107, startsAt: '2021-01-27T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Flight' }
    ],
    4: [
        { id: 106, startsAt: '2021-01-28T13:01:11Z',  endsAt: '2021-01-30T15:01:11Z',  title: 'Daily walk' },
        { id: 126, startsAt: '2021-01-28T16:01:11Z',  endsAt: '2021-01-28T18:01:11Z',  title: 'Drive home' },
    ]
}

module.exports = {events, eventsResult};