import React, {Component} from "react";

class CommandProperties extends Component
{
    handlePropertyChange = ev => {
        /*
        if (ev.target.pattern && !ev.target.value.match(ev.target.pattern))
            return;
        */

        let newValue = ev.target.value;

        if (ev.target.getAttribute('data-singleline') === 'true')
            newValue = newValue.replace(/\n/g, '');

        this.props.command[ev.target.name] = newValue;
        this.props.onChange();
    }

    handleSubmit = ev => {
        ev.preventDefault();
        this.props.closeModal();
    }

    render()
    {
        return(
            <form onSubmit={this.handleSubmit}>
                <h2>Edit Command</h2>
                <label>Command name</label>
                <input type="text" name="name" value={this.props.command.name} onChange={this.handlePropertyChange} pattern={'^[\\w-]{1,32}$'} maxLength={32} minLength={1} autoComplete={"off"} required />
                <label>description</label>

                <textarea name="description" onChange={this.handlePropertyChange} minLength={1} maxLength={100} autoComplete={"off"} data-singleline={true} required value={this.props.command.description} />

                <input className="float-right" type={'submit'} value={'Okay'} />
            </form>
        );
    }
}
export default CommandProperties;