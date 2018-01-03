const EditLink = (props) => {
    const { item, onEdit } = props;

    return (
        <a href={"/edit/?item=" + encodeURIComponent(item)} onClick={event => {event.preventDefault(); onEdit(item) }}>
            <style jsx>{`
                float: right;
                margin-left: 10px;
            `}</style>
            Edit
        </a>
    );
};

export default EditLink;
