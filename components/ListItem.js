import DeleteLink from './DeleteLink';
import EditLink from './EditLink';

const ListItem = (props) => {
    let { item = "", onDelete, onEdit } = props;

    return (
        <li>
			{item}
			<DeleteLink item={item} onDelete={onDelete} />
			<EditLink item={item} onEdit={onEdit} />
		</li>
    );
};

export default ListItem;
