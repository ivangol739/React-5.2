import Title from '../common/Title/Title';
import DefinitionsList from '../common/lists/DefinitionsList'

export default function FavoritesWidget({ title, items }) {
  return (
    <div className="Favorites-widget">
      <Title title={title} />
      <DefinitionsList items={items} />
    </div>
  );
}