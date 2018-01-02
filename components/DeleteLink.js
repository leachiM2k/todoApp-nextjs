const DeleteLink = (props) => {
    const { item, onDelete } = props;

    return (
        <a href={"/delete/?item=" + encodeURIComponent(item)} onClick={event => {event.preventDefault(); onDelete(item) }}>Delete</a>
    );
};

export default DeleteLink;
