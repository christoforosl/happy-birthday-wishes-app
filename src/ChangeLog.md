Following section of code was used for displaying banner numbers for main page:

```
<div className="row">
  <div className="col-md-12 col-sm-12 col-xs-12">
    <div className="row jumbotron" style={{ padding: '1em' }}>
      <div className="col text-center">
        <div className="text-info" style={{ fontSize: '2em' }}>{notes.length || 0}</div>
        <div className="text-muted">{this.props.intl.formatMessage(messages.notesCount, { count: notes.length })}</div>
      </div>
      <div className="col text-center">
        <div className="text-info" style={{ fontSize: '2em' }}>{todos.length || 0}</div>
        <div className="text-muted">{this.props.intl.formatMessage(messages.todosCount, { count: todos.length })}</div>
      </div>
    </div>
  </div>
</div>
```
