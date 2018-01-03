'use strict';

import { defaultButton } from '../styles/button';

const NewForm = (props) => {
	const { value = '', onChange, onSubmit } = props;
    return (
        <form onSubmit={onSubmit} >
            <style jsx>{defaultButton}</style>
            <input name="item" type="text" value={value} onChange={onChange} />
            <button type="submit">Add New Item</button>
        </form>
    );
};

export default NewForm;
