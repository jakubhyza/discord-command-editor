import React, {Component} from "react";
import CommandOption from "./CommandOption";

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
        if (this.props.onSubmit)
            this.props.onSubmit();
        this.props.closeModal();
    }

    render()
    {
        return(
            <form onSubmit={this.handleSubmit}>
                <h2>Edit Command</h2>
                <label>Command name</label>
                <input type="text" name="name" placeholder="1 - 32 letters, no spaces" value={this.props.command.name} onChange={this.handlePropertyChange} pattern={'^[-_\\p{L}\\p{N}\\p{sc=Deva}\\p{sc=Thai}]{1,32}$'} maxLength={32} minLength={1} autoComplete={"off"} required />
                
                <label>Description</label>
                <textarea name="description" placeholder="1 - 100 characters" onChange={this.handlePropertyChange} minLength={1} maxLength={100} autoComplete={"off"} data-singleline={true} required value={this.props.command.description} />

                <label>Options</label>
                {
                    (this.props.command.options ?? []).map((option, index) => (
                        <CommandOption key={index} option={option} onChange={this.props.onChange}  />
                    ))
                }

                <input className="float-right" type={'submit'} value={'Okay'} />
                {
                    this.props.cancelable &&
                    <button className="float-right btn-secondary" style={{marginRight:'0.5em'}} onClick={this.props.closeModal}>Cancel</button>
                }
                {
                    this.props.delete !== undefined &&
                    <button className="btn-secondary" style={{marginRight:'0.5em'}} onClick={this.props.delete}>Delete</button>
                }
            </form>
        );
    }
}
export default CommandProperties;