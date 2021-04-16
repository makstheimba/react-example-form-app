import FormInput from "./FormInput";
import FormSubmitButtion from "./FormSubmitButton";

export default function Form(props) {
    return <form onSubmit={props.handleSubmit}>
        {['name', 'surname'].map(label => <FormInput label={label} />)}
        <FormSubmitButtion />
    </form>
}