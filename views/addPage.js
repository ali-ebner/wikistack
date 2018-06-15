const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
    
    <div>
      <label> Author </label>
      <input id="author" name="author" type="text"
      </div>
    
    <div>
      <label> Email </label>
      <input id='email' name="email" type="text"</input>
    </div>
    
    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div>
    <label> Content </label>
      <input id='content' name="content" type="text"</input>
    </div>
    
    <div>
    <label> Status </label>
      <input id='status' name="status" type="text"</input>
    </div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>
  
  </form>
`);