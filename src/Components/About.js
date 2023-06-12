import PropTypes from 'prop-types'


function About(props) {



  return (

<div id="about-section">
  <h2>About App</h2>
  <p>
    Text Genie is a handy application that allows you to perform various text operations such as capitalizing, copying, or removing spaces from text. With its simple and intuitive interface, you can quickly manipulate text to meet your needs. Whether you're preparing a document, writing code, or composing an email, Text Genie is here to make your text editing tasks easier and more efficient.
  </p>

  <h2>About Creator</h2>
  <p>
    Text Genie was created by Hamza Jabbar, a recent graduate with a Bachelor's degree in Software Engineering. This app serves as a portfolio project to showcase Hamza's skills and expertise in web development. With a passion for creating innovative solutions, Hamza developed Text Genie to demonstrate his proficiency in designing user-friendly applications that solve real-world problems.
  </p>

  <h2>Last Technologies Used</h2>
  <ul>
    <li>React</li>
    <li>HTML</li>
    <li>CSS</li>
  </ul>
</div>




  )
}

About.propTypes = {
Title : PropTypes.string,
}

export default About