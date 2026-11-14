import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta.ts';
import PageHero from '../components/PageHero.tsx';
import OpenConciergeButton from '../components/OpenConciergeButton.tsx';
import '../styles/editorial.css';

type CalendarEvent = {
  title: string;
  dates?: string;
  range: string;
  note?: string;
};

const clinicWeekends: CalendarEvent[] = [
  {
    title: 'Clinic weekend',
    dates: 'April 23–25, 2027',
    range: 'Friday through Sunday',
    note: 'The lodge is blocked for this weekend. Guests should check Lodge booking for any openings.',
  },
  {
    title: 'Clinic weekend',
    dates: 'May 7–9, 2027',
    range: 'Friday through Sunday',
    note: 'The lodge is blocked for this weekend. Guests should check Lodge booking for any openings.',
  },
];

const seasonLocalShows: CalendarEvent[] = [
  {
    title: 'Season local show',
    dates: 'June 12, 2027',
    range: 'Saturday',
  },
  {
    title: 'Season local show',
    dates: 'July 10, 2027',
    range: 'Saturday',
  },
  {
    title: 'Season local show',
    dates: 'August 14, 2027',
    range: 'Saturday',
  },
  {
    title: 'Season local show',
    dates: 'September 11, 2027',
    range: 'Saturday',
  },
  {
    title: 'Season local show',
    dates: 'October 9, 2027',
    range: 'Saturday',
  },
  {
    title: 'Season banquet',
    dates: 'November 6, 2027',
    range: 'Saturday',
    note: 'The restaurant is booked that night.',
  },
];

const vertilux: CalendarEvent[] = [
  {
    title: 'VERTILUX',
    dates: 'July 12–18, 2027',
    range: 'Monday through Sunday',
    note: 'The lodge is blocked for this week.',
  },
];

const upcoming: CalendarEvent[] = [
  { title: '5K Run', range: 'Coming in 2027' },
  { title: 'Jackpot Series', range: 'Coming in 2027' },
  { title: 'Walking Horse Show', range: 'Coming in 2027' },
  { title: 'Competitive Trail Ride', range: 'Coming in 2027' },
  { title: 'Endurance Ride', range: 'Coming in 2027' },
];

function EventList({ events }: { events: CalendarEvent[] }) {
  return (
    <ol className="event-calendar">
      {events.map((event) => (
        <li key={`${event.title}-${event.dates ?? event.range}`} className="event-calendar__item">
          {event.dates ? <p className="event-calendar__dates">{event.dates}</p> : null}
          <h4 className="event-calendar__title">{event.title}</h4>
          <p className="event-calendar__range">{event.range}</p>
          {event.note ? <p className="event-calendar__note">{event.note}</p> : null}
        </li>
      ))}
    </ol>
  );
}

export default function EventsPage() {
  usePageMeta({
    title: 'Event Calendar',
    description:
      '2027 event calendar for Briggs Brothers Ranch — clinic weekends, season local shows, VERTILUX, and upcoming gatherings in Parrottsville, Tennessee.',
    keywords: 'briggs brothers ranch events, ranch event calendar, clinic weekend, season local shows',
  });

  return (
    <>
      <PageHero
        title="Event Calendar"
        subtitle="Upcoming on the ranch · 2027"
        image={`${import.meta.env.BASE_URL}Weddings/Event%20Setup%201.png`}
        imageAlt="Event setup at Briggs Brothers Ranch"
      />
      <article className="page-section">
        <h2>2027 calendar</h2>
        <p>
          Confirmed dates for gatherings on the ranch this season. Additional events will appear
          here as they are set.
        </p>

        <section className="event-calendar-group" aria-labelledby="clinic-weekends-heading">
          <h3 id="clinic-weekends-heading" className="event-calendar__section">
            Clinic weekends
          </h3>
          <EventList events={clinicWeekends} />
        </section>

        <section className="event-calendar-group" aria-labelledby="season-shows-heading">
          <h3 id="season-shows-heading" className="event-calendar__section">
            Season local shows
          </h3>
          <EventList events={seasonLocalShows} />
        </section>

        <section className="event-calendar-group" aria-labelledby="vertilux-heading">
          <h3 id="vertilux-heading" className="event-calendar__section">
            VERTILUX
          </h3>
          <EventList events={vertilux} />
        </section>

        <section className="event-calendar-group" aria-labelledby="upcoming-heading">
          <h3 id="upcoming-heading" className="event-calendar__section">
            Dates to come
          </h3>
          <p className="event-calendar__lead">
            Please stay updated for our upcoming events in 2027.
          </p>
          <EventList events={upcoming} />
        </section>

        <section className="event-calendar-group" aria-labelledby="lodge-availability-heading">
          <h3 id="lodge-availability-heading" className="event-calendar__section">
            Lodge availability
          </h3>
          <p>
            Current lodge openings are on the website — see the{' '}
            <Link to="/lodge">Lodge</Link> page and{' '}
            <Link to="/lodge#book-room">Book Room</Link>. Restaurant and grounds holds are not
            shown in the lodging calendar.
          </p>
        </section>

        <div className="cta-row">
          <OpenConciergeButton className="primary">Inquire about an event</OpenConciergeButton>
          <Link to="/lodge#book-room" className="secondary">
            Book a lodge room
          </Link>
        </div>
      </article>
    </>
  );
}
