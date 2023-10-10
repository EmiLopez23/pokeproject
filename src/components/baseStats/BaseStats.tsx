import './BaseStats.css';
import { Stat } from 'types';
import LinearProgress from 'components/linearProgess/LinearProgress';

interface BaseStatsProps {
  stats: Stat[];
}

const BaseStats = ({ stats }: BaseStatsProps) => {
  return (
    <section style={{ flexGrow: 1 }}>
      <h3>Base Stats</h3>
      {stats?.map((stat, index) => (
        <div key={index} className="stat">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <p>{stat.name}</p>
            <p>{stat.value}</p>
          </div>
          <LinearProgress value={stat.value > 100 ? 100 : stat.value} />
        </div>
      ))}
    </section>
  );
};

export default BaseStats;
