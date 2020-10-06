import React from 'react';

function BlogItem(props) {
  return(
    <p>{props.blog.body}</p>
  )
}

class BlogList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      blogs: [],
      selection: null,
    }

    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(selection) {
    // console.log(blog);
    this.setState({selection});
  }

  componentDidMount() {
    const blogs = [
      {
      title: 'Title A',
      body: 'A Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse impedit, dicta culpa, cumque perspiciatis cum cupiditate quas iste doloremque voluptas vitae suscipit rerum distinctio molestiae! Tenetur, nam, inventore. Rerum, necessitatibus?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae neque exercitationem incidunt cum officia quibusdam, quisquam soluta. Odit minus voluptas quis, est sequi, doloribus, autem illum praesentium quae dolores a!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste tenetur quod, dolores. Animi officiis assumenda, voluptate soluta alias a doloribus porro sapiente! Esse eos voluptatibus iure vitae saepe necessitatibus recusandae.'
      }, {
      title: 'Title B',
      body: 'B Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse impedit, dicta culpa, cumque perspiciatis cum cupiditate quas iste doloremque voluptas vitae suscipit rerum distinctio molestiae! Tenetur, nam, inventore. Rerum, necessitatibus?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae neque exercitationem incidunt cum officia quibusdam, quisquam soluta. Odit minus voluptas quis, est sequi, doloribus, autem illum praesentium quae dolores a!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste tenetur quod, dolores. Animi officiis assumenda, voluptate soluta alias a doloribus porro sapiente! Esse eos voluptatibus iure vitae saepe necessitatibus recusandae.'
      }, {
      title: 'Title C',
      body: 'C Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse impedit, dicta culpa, cumque perspiciatis cum cupiditate quas iste doloremque voluptas vitae suscipit rerum distinctio molestiae! Tenetur, nam, inventore. Rerum, necessitatibus?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae neque exercitationem incidunt cum officia quibusdam, quisquam soluta. Odit minus voluptas quis, est sequi, doloribus, autem illum praesentium quae dolores a!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste tenetur quod, dolores. Animi officiis assumenda, voluptate soluta alias a doloribus porro sapiente! Esse eos voluptatibus iure vitae saepe necessitatibus recusandae.'
      }
    ];
    this.setState({blogs});
  }

  render() {
    const blogs = this.state.blogs.map((blog, index) => <p key={index} onClick={() => this.handleSelection(blog)}>{blog.title}</p>)
    return(
      <React.Fragment>
        <div>{blogs}</div>
        {this.state.selection ? <BlogItem blog={this.state.selection} /> : null}
      </React.Fragment>
    )
  }
}

export default BlogList;
