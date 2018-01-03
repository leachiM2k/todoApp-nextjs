const DeleteLink = (props) => {
    const { item, onDelete } = props;

    return (
        <a href={"/delete/?item=" + encodeURIComponent(item)} onClick={event => {event.preventDefault(); onDelete(item) }}>
            <style jsx>{`
                float: right;
                margin: -5px;
                margin-left: 10px;
                padding: 5px;
                cursor: pointer;
                background: #FD7F7C;
                color: #E8E8E8;
            `}</style>
             Delete
        </a>
    );
};

export default DeleteLink;
