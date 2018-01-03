'use strict';
import { defaultButton } from '../styles/button';

const EditForm = (props) => {
	const { value = '', onChange, onSubmit, onCancel } = props;
    return (
        <form onSubmit={onSubmit} >
            <style jsx>{defaultButton}</style>
            <input name="item" type="text" value={value} onChange={onChange} />
            <button type="submit">Save</button>
            <a href="/" onClick={onCancel}>Cancel</a>
        </form>
    );
};

export default EditForm;
