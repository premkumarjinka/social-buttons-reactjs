const Button = (props) => {
  //  Write your code here.
  const { className, children } = props;

  return <button className={className}>{children}</button>;
};

const element = (
  //  Write your code here.
  <div className="container">
    <h1 className="heading">Social Buttons</h1>
    <div>
      <Button className="likeButton" children="like" />
      <Button className="commentButton" children="comment" />
      <Button className="shareButton" children="share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
