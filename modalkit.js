/*
modalkit.js
David Fink
@darkroastcreate
david@darkroastcreative.co
http://darkroastcreative.co
*/

function showModal(data) {

  // TODO: Implement template reader functionality
  // TODO: Implement timeout functionality

  var templateSource = '<div class="modal fade" id="modalkit-modal"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">{{title}}</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><p>{{body}}</p></div><div class="modal-footer"><button type="button" class="btn btn-primary" data-dismiss="modal">Close</button></div></div></div></div>';
  var template = Handlebars.compile(templateSource);
  var modal = template(data);
  $('body').append(modal);
  $('#modalkit-modal').modal('show');

}

function deleteModal() {
  // TODO: Implement deleteModal() function to delete generated modal from the DOM either when dismissed by the user or on timeout (if a timeout time is set)
}
