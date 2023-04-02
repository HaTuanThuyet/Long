function B(props) {
  console.log(props);
  var { myLists } = props;
  console.log("aray", myLists);

  var abc = myLists?.map((user, key) => {
    console.log(user);
    return (
      <ul key={key}>
        <li>{user.id}</li>
      </ul>
    );
  });
  return (
    <div>
      <h2>React Map Example</h2>
      <div>{abc}</div>
    </div>
  );
}
export default B;
