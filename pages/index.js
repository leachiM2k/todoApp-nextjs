import React from 'react';
import List from '../components/List';
import NewForm from '../components/NewForm';
import EditForm from '../components/EditForm';

class IndexPage extends React.Component {

    constructor(props) {
        super(props);
		this.state = {
			items: [
		        'Item 1',
		        'Item 2',
 			],
			formValue: '',
			editMode: false,
		};
    }

	onNewFormValue = (event) => {
		this.setState({ formValue: event.target.value });
	}

	onNewFormSubmit = (event) => {
		event.preventDefault();
		this.setState({items: [...this.state.items, this.state.formValue ], formValue: '' });
	}

	onDelete = (deleteItem) => {
		this.setState({ items: this.state.items.filter( item => item !== deleteItem ) });
	}

	onEditFormValue = (event) => {
		this.setState({ editFormValue: event.target.value });
	}

	onEditFormSubmit = (event) => {
		event.preventDefault();
		const newItems = this.state.items.map(item => {
			if(item === this.state.editFormValueOriginal) {
				item = this.state.editFormValue;
			}
			return item;
		});
		this.setState({items: newItems, editFormValue: '', editMode: false });
	}

	onEditFormCancel = (event) => {
		event.preventDefault();
		this.setState({ editFormValue: '', editMode: false });
	}

	onEdit = (editItem) => {
		this.setState({ editMode: true, editFormValue: editItem, editFormValueOriginal: editItem });
	}

	renderNormal() {
		return (
			<div>
                <List items={this.state.items} onDelete={this.onDelete} onEdit={this.onEdit} />
                <NewForm onChange={this.onNewFormValue} onSubmit={this.onNewFormSubmit} value={this.state.formValue} />
			</div>
		);
	}

	renderEdit() {
		return <EditForm onChange={this.onEditFormValue} onSubmit={this.onEditFormSubmit} onCancel={this.onEditFormCancel} value={this.state.editFormValue} />;
	}

    render() {
        return (
            <div>

                <style jsx>{`
					header {
						background: #FBC13F;
						margin: -10px -10px 0;
						padding: 10px;
					}
					
					header h1 {
						margin: 0;
						padding: 0;
					}
                `}</style>

				<header>
	                <h1>To-Do App</h1>
				</header>

				{ this.state.editMode ? this.renderEdit() : this.renderNormal() }
            </div>
        );
    }
}

export default IndexPage;
