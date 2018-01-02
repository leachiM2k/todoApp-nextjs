const EditLink = (props) => {
    const { item, onEdit } = props;

    return (
        <a href={"/edit/?item=" + encodeURIComponent(item)} onClick={event => {event.preventDefault(); onEdit(item) }}>Edit</a>
    );
};

export default EditLink;
