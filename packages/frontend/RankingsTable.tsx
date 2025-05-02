import React from 'react';

type Ranking = {
  date: string;
  temperature: number;
  scoreSkiing: number;
  scoreSurfing: number;
  scoreOutdoorSightseeing: number;
  scoreIndoorSightseeing: number;
};

type RankingsTableProps = {
  rankings: Ranking[];
};

const cellStyle: React.CSSProperties = {
  border: '1px solid #ccc',
  padding: '8px',
  textAlign: 'center',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};

const getScoreColor = (score: number): string => {
    // Clamp score between 0 and 100
    const clamped = Math.max(0, Math.min(100, score));
    // HSL from red (0) to green (120); 50 = amber (~30)
    const hue = (clamped / 100) * 120;
    return `hsl(${hue}, 70%, 60%)`;
  };
  
const RankingsTable: React.FC<RankingsTableProps> = ({ rankings }) => {
  return (
    <table
      style={{
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: 20,
        tableLayout: 'fixed',
      }}
    >
      <colgroup>
        <col style={{ width: '16.66%' }} />
        <col style={{ width: '16.66%' }} />
        <col style={{ width: '16.66%' }} />
        <col style={{ width: '16.66%' }} />
        <col style={{ width: '16.66%' }} />
        <col style={{ width: '16.66%' }} />
      </colgroup>
      <thead>
        <tr>
          <th style={cellStyle}>Date</th>
          <th style={cellStyle}>Temperature (°C)</th>
          <th style={cellStyle}>Skiing</th>
          <th style={cellStyle}>Surfing</th>
          <th style={cellStyle}>Outdoor Sightseeing</th>
          <th style={cellStyle}>Indoor Sightseeing</th>
        </tr>
      </thead>
      <tbody>
        {rankings.length === 0 ? (
          <tr>
            <td colSpan={6} style={{ ...cellStyle, fontStyle: 'italic' }}>
              No data available. Please select a city.
            </td>
          </tr>
        ) : (
          rankings.map((r) => (
            <tr key={r.date}>
              <td style={cellStyle}>{r.date}</td>
              <td style={cellStyle}>{r.temperature.toFixed(1)}</td>
              <td style={{ ...cellStyle, backgroundColor: getScoreColor(r.scoreSkiing) }}>{r.scoreSkiing.toFixed(1)}</td>
              <td style={{ ...cellStyle, backgroundColor: getScoreColor(r.scoreSurfing) }}>{r.scoreSurfing.toFixed(1)}</td>
              <td style={{ ...cellStyle, backgroundColor: getScoreColor(r.scoreOutdoorSightseeing) }}>{r.scoreOutdoorSightseeing.toFixed(1)}</td>
              <td style={{ ...cellStyle, backgroundColor: getScoreColor(r.scoreIndoorSightseeing) }}>{r.scoreIndoorSightseeing.toFixed(1)}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default RankingsTable;
