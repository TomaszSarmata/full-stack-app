export default function Input(props) {
  const handleChange = (e) => {
    const ImTheActualValue = e.target.value;
    props.formerlyonChange(ImTheActualValue); //here we are only calling onChange and passing our grabbed value / our actual value. Now the program goes to the parent (to see how the template of the function looks like to execute it with our new value).In our onChange=.. the template of the function was set up in such a way that we have passed it one parameter and used it as an argument in the body of the function to update our react value (name or email)
  };
  return (
    <input
      {...props}
      className="bg-gray-200 w-full py-3 px-6 rounded"
      onChange={handleChange} //so here is the actual onChange in action now as the parent's onChange is only there to be passed to a child (as a property onChange and could be called anything else) in the same way as i.e. a placeholder is passed to a child as a property and then we can change the state of the placeholder in the parent (i.e. placeholder="Email"). The situation in the onChange in the parent is different as we want to allow a child to change / update the state of the parent. To do that we need to communicate with our child through cb function. To do that we needed to create a template of the function/some logic and assign it to our parent onChange as this is the only way a child can change the state of the parent. When our program hits the line of code props.onChange(Imtheactualvalue) the program then goes to the parent to execute the body of the function. in order to allow our child to change the state of the parent (as we are calling the function props.onChange with a new value collected in the child component). This component design is called lifting the state up

      // placeholder={placeholder}

      // value={value}
    />
  );
}
