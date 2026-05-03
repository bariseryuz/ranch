import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  generateEventPlan,
  type PlannerInput,
} from '../utils/eventPlanner.ts';
import '../pages/EventPlanner.css';

export default function EventPlannerPanel() {
  const [step, setStep] = useState(0);
  const [input, setInput] = useState<PlannerInput>({
    eventType: 'corporate',
    guestCount: 48,
    season: 'fall',
    durationNights: 2,
  });
  const [result, setResult] = useState<ReturnType<typeof generateEventPlan> | null>(null);

  const run = () => {
    setResult(generateEventPlan(input));
    setStep(3);
  };

  return (
    <div className="planner">
      <div className="planner__steps">
        {['Event', 'Guests & season', 'Review'].map((label, i) => (
          <span key={label} className={i <= step ? 'is-done' : ''}>
            {i + 1}. {label}
          </span>
        ))}
      </div>

      {step === 0 && (
        <div className="planner__panel">
          <h2>What are you planning?</h2>
          <div className="planner__options">
            {(
              [
                ['corporate', 'Corporate retreat'],
                ['wedding', 'Luxury wedding'],
                ['private', 'Private event / buyout'],
              ] as const
            ).map(([value, label]) => (
              <label key={value} className="planner__radio">
                <input
                  type="radio"
                  name="etype"
                  checked={input.eventType === value}
                  onChange={() => setInput({ ...input, eventType: value })}
                />
                {label}
              </label>
            ))}
          </div>
          <button type="button" className="planner__next" onClick={() => setStep(1)}>
            Continue
          </button>
        </div>
      )}

      {step === 1 && (
        <div className="planner__panel">
          <h2>Guests & timing</h2>
          <label className="planner__field">
            Guest count
            <input
              type="number"
              min={8}
              max={500}
              value={input.guestCount}
              onChange={(e) =>
                setInput({ ...input, guestCount: parseInt(e.target.value, 10) || 8 })
              }
            />
          </label>
          <label className="planner__field">
            Season
            <select
              value={input.season}
              onChange={(e) =>
                setInput({ ...input, season: e.target.value as PlannerInput['season'] })
              }
            >
              <option value="spring">Spring</option>
              <option value="summer">Summer</option>
              <option value="fall">Fall</option>
              <option value="winter">Winter</option>
            </select>
          </label>
          <label className="planner__field">
            Nights on property
            <input
              type="number"
              min={1}
              max={7}
              value={input.durationNights}
              onChange={(e) =>
                setInput({ ...input, durationNights: parseInt(e.target.value, 10) || 1 })
              }
            />
          </label>
          <div className="planner__nav">
            <button type="button" onClick={() => setStep(0)}>
              Back
            </button>
            <button type="button" className="planner__next" onClick={() => setStep(2)}>
              Continue
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="planner__panel">
          <h2>Generate outline</h2>
          <p className="planner__summary">
            {input.eventType} · {input.guestCount} guests · {input.season} ·{' '}
            {input.durationNights} night(s)
          </p>
          <div className="planner__nav">
            <button type="button" onClick={() => setStep(1)}>
              Back
            </button>
            <button type="button" className="planner__next" onClick={run}>
              Generate plan
            </button>
          </div>
        </div>
      )}

      {step === 3 && result && (
        <div className="planner__result">
          <h2>{result.packageName}</h2>
          <p>{result.summary}</p>
          <ul>
            {result.experiences.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
          <p className="planner__estimate">
            <strong>Estimated range:</strong> {result.estimatedRange}
          </p>
          <p className="planner__notes">{result.notes}</p>
          <div className="cta-row">
            <Link to="/plan-your-event" className="primary">
              Refine with concierge
            </Link>
            <button
              type="button"
              className="secondary"
              onClick={() => {
                setStep(0);
                setResult(null);
              }}
            >
              Start over
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
