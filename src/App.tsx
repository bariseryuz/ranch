import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import InnerLayout from './components/InnerLayout.tsx';
import ConciergeChat from './components/ConciergeChat.tsx';

const TheRanch               = lazy(() => import('./pages/TheRanch.tsx'));
const LegacyPage             = lazy(() => import('./pages/LegacyPage.tsx'));
const ExperiencesHub         = lazy(() => import('./pages/ExperiencesHub.tsx'));
const TailoredGatheringsPage = lazy(() => import('./pages/TailoredGatheringsPage.tsx'));
const CorporateRetreats      = lazy(() => import('./pages/CorporateRetreats.tsx'));
const LuxuryWeddings         = lazy(() => import('./pages/LuxuryWeddings.tsx'));
const PrivateEvents          = lazy(() => import('./pages/PrivateEvents.tsx'));
const CulinaryPage           = lazy(() => import('./pages/CulinaryPage.tsx'));
const AccommodationsPage     = lazy(() => import('./pages/AccommodationsPage.tsx'));
const GalleryPage            = lazy(() => import('./pages/GalleryPage.tsx'));
const Journal                = lazy(() => import('./pages/Journal.tsx'));
const JournalPost            = lazy(() => import('./pages/JournalPost.tsx'));
const PlanYourEvent          = lazy(() => import('./pages/PlanYourEvent.tsx'));
const BookRoomNow            = lazy(() => import('./pages/BookRoomNow.tsx'));
const EventPlanner           = lazy(() => import('./pages/EventPlanner.tsx'));
const LodgePage              = lazy(() => import('./pages/LodgePage.tsx'));
const RVParkPage             = lazy(() => import('./pages/RVParkPage.tsx'));
const RestaurantPage         = lazy(() => import('./pages/RestaurantPage.tsx'));
const EventsPage             = lazy(() => import('./pages/EventsPage.tsx'));
const DirectionsPage         = lazy(() => import('./pages/DirectionsPage.tsx'));

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<InnerLayout />}>
            <Route path="/the-ranch"           element={<TheRanch />} />
            <Route path="/legacy"              element={<LegacyPage />} />
            <Route path="/experiences"         element={<ExperiencesHub />} />
            <Route path="/tailored-gatherings" element={<TailoredGatheringsPage />} />
            <Route path="/corporate-retreats"  element={<CorporateRetreats />} />
            <Route path="/luxury-weddings"     element={<LuxuryWeddings />} />
            <Route path="/private-events"      element={<PrivateEvents />} />
            <Route path="/culinary"            element={<CulinaryPage />} />
            <Route path="/accommodations"      element={<AccommodationsPage />} />
            <Route path="/lodge"               element={<LodgePage />} />
            <Route path="/rv-park"             element={<RVParkPage />} />
            <Route path="/restaurant"          element={<RestaurantPage />} />
            <Route path="/events"              element={<EventsPage />} />
            <Route path="/directions"          element={<DirectionsPage />} />
            <Route path="/gallery"             element={<GalleryPage />} />
            <Route path="/journal"             element={<Journal />} />
            <Route path="/journal/:slug"       element={<JournalPost />} />
            <Route path="/plan-your-event"     element={<PlanYourEvent />} />
            <Route path="/book-room-now"       element={<BookRoomNow />} />
            <Route path="/event-planner"       element={<EventPlanner />} />
          </Route>
        </Routes>
      </Suspense>
      <ConciergeChat />
    </>
  );
}

export default App;
