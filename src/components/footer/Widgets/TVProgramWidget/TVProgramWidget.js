import Title from '../common/Title/Title';
import TVProgramsList from '../common/lists/TVProgramsList'

export default function TVProgramWidget({ title, items }) {
  return (
    <div className="TV-program-widget">
      <Title title={title} />
      <TVProgramsList items={items} />
    </div>
  );
}