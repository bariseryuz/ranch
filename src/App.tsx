import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import InnerLayout from './components/InnerLayout.tsx';
import ConciergeChat from './components/ConciergeChat.tsx';
import TheRanch from './pages/TheRanch.tsx';
import LegacyPage from './pages/LegacyPage.tsx';
import ExperiencesHub from './pages/ExperiencesHub.tsx';
import CorporateRetreats from './pages/CorporateRetreats.tsx';
import LuxuryWeddings from './pages/LuxuryWeddings.tsx';
import PrivateEvents from './pages/PrivateEvents.tsx';
import CulinaryPage from './pages/CulinaryPage.tsx';
import AccommodationsPage from './pages/AccommodationsPage.tsx';
import GalleryPage from './pages/GalleryPage.tsx';
import Journal from './pages/Journal.tsx';
import JournalPost from './pages/JournalPost.tsx';
import PlanYourEvent from './pages/PlanYourEvent.tsx';
import EventPlanner from './pages/EventPlanner.tsx';
import TailoredGatheringsPage from './pages/TailoredGatheringsPage.tsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<InnerLayout />}>
          <Route path="/the-ranch" element={<TheRanch />} />
          <Route path="/legacy" element={<LegacyPage />} />
          <Route path="/experiences" element={<ExperiencesHub />} />
          <Route path="/tailored-gatherings" element={<TailoredGatheringsPage />} />
          <Route path="/corporate-retreats" element={<CorporateRetreats />} />
          <Route path="/luxury-weddings" element={<LuxuryWeddings />} />
          <Route path="/private-events" element={<PrivateEvents />} />
          <Route path="/culinary" element={<CulinaryPage />} />
          <Route path="/accommodations" element={<AccommodationsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/:slug" element={<JournalPost />} />
          <Route path="/plan-your-event" element={<PlanYourEvent />} />
          <Route path="/event-planner" element={<EventPlanner />} />
        </Route>
      </Routes>
      <ConciergeChat />
    </>
  );
}

export default App;
