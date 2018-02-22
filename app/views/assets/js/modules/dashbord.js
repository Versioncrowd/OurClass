exports.adminModel = `
<div class="modal fade" id="theModal" tabindex="-1" role="dialog" aria-labelledby="theModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Insert a Student</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form id="newStudent">
      <div class="modal-body">
         <div class="form-group">
           <label for="Name">Student</label>
           <input type="text" class="form-control" name="name" placeholder="Name">
         </div>
         <div class="form-group">
           <label for="Quate">Quate</label>
           <input type="text" class="form-control" name="Quate" placeholder="Quate">
         </div>
         <div class="form-group">
           <label for="From">From</label>
           <input type="text" class="form-control" name="From" placeholder="From">
         </div>
         <div class="form-group">
           <label for="Liveing">Liveing</label>
           <input type="text" class="form-control" name="Liveing" placeholder="Liveing">
         </div>
         <div class="form-group">
           <label for="FaverotesTecnolgies">Faverotes Tecnolgies</label>
           <input type="text" class="form-control" name="FaverotesTecnolgies" placeholder="FaverotesTecnolgies">
         </div>
         <div class="form-group">
           <label for="Image">Image</label>
           <input type="file" class="form-control" name="age" placeholder="Image">
         </div>
         <div class="form-group">
           <label for="FacebookLink">Facebook Link</label>
           <input type="text" class="form-control" name="age" placeholder="FacebookLink">
         </div>
         <div class="form-group">
           <label for="TwittLink">Twitt Link</label>
           <input type="text" class="form-control" name="age" placeholder="TwittLink">
         </div>
         <div class="form-group">
           <label for=">LinkedLink">Linked Link</label>
           <input type="text" class="form-control" name="age" placeholder=">LinkedLink">
         </div>
      </div>
      <div class="modal-footer">
        <input type="hidden" name="studentId">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary save">Save changes</button>
      </div>
    </form>
   </div>
  </div>
</div>`

