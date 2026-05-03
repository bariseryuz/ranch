import { Navigate } from 'react-router-dom';

/** Legacy URL — AI planner lives under Plan Your Event as a tab */
export default function EventPlanner() {
  return <Navigate to="/plan-your-event?tab=ai" replace />;
}
