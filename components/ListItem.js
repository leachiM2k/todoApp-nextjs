import DeleteLink from './DeleteLink';
import EditLink from './EditLink';

const ListItem = (props) => {
    let { item = "", onDelete, onEdit } = props;

    return (
        <li>
            <style jsx>{`
               li {
                    background: white;
                    margin: 10px 0;
                    padding: 10px;
                }
            `}</style>
			{item}
			<DeleteLink item={item} onDelete={onDelete} />
			<EditLink item={item} onEdit={onEdit} />
		</li>
    );
};

export default ListItem;
