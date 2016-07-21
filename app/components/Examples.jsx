var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out!</p>
      <ol>
        <li>
          <Link to="/?location=Orlando%20Florida">Orlando, Florida</Link>
        </li>
        <li>
          <Link to="/?location=Austin%20Texas">Austin, Texas</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
