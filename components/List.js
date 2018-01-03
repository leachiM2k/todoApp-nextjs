import List from '../components/ListItem';

const ListComponent = (props) => {
	const { items, onDelete, onEdit } = props;

    return (
        <ul>
                <style jsx>{`
                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
               `}</style>

            { items.map(item => <List key={item} item={item} onDelete={onDelete} onEdit={onEdit} />) }
        </ul>
    );
};

export default ListComponent;
