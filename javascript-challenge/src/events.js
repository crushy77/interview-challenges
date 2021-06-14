/** 
  An event could look like this:
  ```
  {
    id: 107,
    startsAt: '2021-01-27T13:01:11Z', 
    endsAt: '2021-01-27T15:01:11Z', 
    title: 'Daily walk',
  }
  ```
*/

/** 
  Take an array of events and return an object that is a  mapping from the 'day' to the events occuring on that day.
  The keys should be the day-difference to the earliest occuring event.
  Each days events should be sorted in ascending order of startsAt

  A result could look like:
  ```
  {
    0: [
      { id: 106, startsAt: '2021-01-27T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },
      { id: 156, startsAt: '2021-01-27T17:01:11Z',  endsAt: '2021-01-27T22:01:11Z',  title: 'Dinner' },
    ],
    2: [
      { id: 5676, startsAt: '2021-01-29T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },
    ]
  }
 ```

 Your solution should not modify any of the function arguments
*/
const moment = require('moment')

const sortEventsAscending = (events) => {
  events.sort((date1, date2) => {
    let x = moment(date1.startsAt);
    let y = moment(date2.startsAt);
      return x-y;
    });  
};

const calculateDayDifference = (start, end) => {
  let a = moment(start);
  let b = moment(end);

  return a.diff(b, 'days');
};

const groupEventsByDay = (events) => {
  sortEventsAscending(events);
  let eventsAscending = events;
  let start  = eventsAscending[0].startsAt;
  events = {};

  eventsAscending.forEach((item)=> {
    let dayDifference = calculateDayDifference(item.startsAt, start);
    //console.log(dayDifference)
    
    if(events[dayDifference] === undefined) {
      events[dayDifference] = new Array(item);
    } else {
      events[dayDifference].push(item);
    }
    
  });


  return events;
};
/** 
  Adjust the start and end date of an event so it maintains its total duration, but is moved `toDay`.
  `eventsByDay` should be the same as the return value of `groupEventsByDay`
  `id` will be the event that should be moved
  `toDay` will be a number that indicates the key of `eventsByDay` that the target event should be moved to

  Example:
  ```
  eventsByDay(
    {
      0: [
        { id: 106, startsAt: '2021-01-27T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },      
      ],
      2: [
        { id: 5676, startsAt: '2021-01-29T13:01:11Z',  endsAt: '2021-01-29T15:01:11Z',  title: 'Daily walk' },
      ]
    },
    5676,
    3,
  )
  ```
  Should return something like 
  ```
  {
    0: [
      { id: 106, startsAt: '2021-01-27T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },      
    ],
    3: [
      { id: 5676, startsAt: '2021-01-30T13:01:11Z',  endsAt: '2021-01-30T15:01:11Z',  title: 'Daily walk' },
    ]
  },
  ```

  Your solution should not modify any of the function arguments
*/


const moveEventToDay = (eventsByDay, id, toDay) => {
  for (let i in eventsByDay) {
    let eventIndex = eventsByDay[i].findIndex((event) => event.id === id);
    if(eventIndex != -1) {
      const deletedEvents = eventsByDay[i].splice(eventIndex, 1);
      let event = deletedEvents[0];
      
      let dayDifference = toDay-i;
      let newStartsAt = moment(event.startsAt).add(dayDifference, 'days');
      event.startsAt = moment(newStartsAt).format();
      
      let newEndsAt = moment(event.endsAt).add(dayDifference, 'days');
      event.endsAt = moment(newEndsAt).format();

      let newEvent = eventsByDay[toDay];
      if(newEvent === undefined) {
        newEvent = new Array(event);
        eventsByDay[toDay] = newEvent;
      } else {
        newEvent.push(event);
      }
      sortEventsAscending(newEvent);
      break;
    }
  }
  return eventsByDay;
};

module.exports = {groupEventsByDay, moveEventToDay};