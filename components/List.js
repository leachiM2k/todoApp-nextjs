import List from '../components/ListItem';

const ListComponent = (props) => {
	const { items, onDelete, onEdit } = props;

    return (
        <ul>
            { items.map(item => <List key={item} item={item} onDelete={onDelete} onEdit={onEdit} />) }
        </ul>
    );
};

export default ListComponent;
